/* =========================================================
   Firebase configuration + shared data layer.
   Load AFTER the Firebase compat SDK scripts, BEFORE site.js.

   Data model (Firestore):
     - config/public   { realtor_agents, realtor_settings, realtor_hero }  (public site data)
     - config/admin    { realtor_leads, realtor_viewings, realtor_messages,
                         searches: {email: []}, favorites: {email: []} }    (dashboard data)
     - properties/{id} property documents
     - users/{uid}     account records incl. role ('admin' | 'client')
   ========================================================= */

const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyDVAfygXVEcpl8JqswCUANUEqcphLJ1qWA',
  authDomain: 'realtors-ac9cc.firebaseapp.com',
  projectId: 'realtors-ac9cc',
  storageBucket: 'realtors-ac9cc.firebasestorage.app',
  messagingSenderId: '341824151577',
  appId: '1:341824151577:web:3fb685d8e9ed6ee45a8a88',
  measurementId: 'G-M5C7GL98LV',
};

const CLOUDINARY = {
  cloudName: 'YOUR_CLOUDINARY_CLOUD_NAME',
  uploadPreset: 'YOUR_UNSIGNED_UPLOAD_PRESET',
};

firebase.initializeApp(FIREBASE_CONFIG);

const fbAuth = firebase.auth();
const fbDB = firebase.firestore();
fbDB.settings({ ignoreUndefinedProperties: true });

/* Which config/app key lives in which Firestore doc. */
const FB_PUBLIC_KEYS = ['realtor_agents', 'realtor_settings', 'realtor_hero'];
const FB_ADMIN_KEYS = ['realtor_leads', 'realtor_viewings', 'realtor_messages', 'searches', 'favorites'];

/* ---------------- Store cache (config/public + config/admin) ---------------- */
const fbStore = {
  cache: { public: {}, admin: {} },
  ready: null,

  async load() {
    if (fbStore.ready) return fbStore.ready;
    fbStore.ready = (async () => {
      const [pubSnap, admSnap] = await Promise.all([
        fbDB.collection('config').doc('public').get().catch(() => null),
        fbDB.collection('config').doc('admin').get().catch(() => null),
      ]);
      fbStore.cache.public = pubSnap && pubSnap.exists ? pubSnap.data() : {};
      fbStore.cache.admin = admSnap && admSnap.exists ? admSnap.data() : {};
      FB_PUBLIC_KEYS.forEach((k) => {
        if (fbStore.cache.public[k] == null) {
          fbStore.cache.public[k] = k === 'realtor_settings' ? {} : [];
        }
      });
      FB_ADMIN_KEYS.forEach((k) => {
        if (fbStore.cache.admin[k] == null) {
          fbStore.cache.admin[k] = (k === 'searches' || k === 'favorites') ? {} : [];
        }
      });
    })();
    return fbStore.ready;
  },

  docFor(key) {
    return FB_PUBLIC_KEYS.indexOf(key) !== -1 ? fbStore.cache.public : fbStore.cache.admin;
  },

  getArray(key) {
    const v = fbStore.docFor(key)[key];
    return Array.isArray(v) ? v : [];
  },

  getObj(key, fallback) {
    const v = fbStore.docFor(key)[key];
    return v && typeof v === 'object' && !Array.isArray(v) ? v : (fallback || {});
  },

  set(key, value) {
    fbStore.docFor(key)[key] = value;
  },

  commit() {
    return Promise.all([
      fbDB.collection('config').doc('public').set(fbStore.cache.public, { merge: true }).catch(() => {}),
      fbDB.collection('config').doc('admin').set(fbStore.cache.admin, { merge: true }).catch(() => {}),
    ]);
  },

  watch(cb) {
    fbDB.collection('config').doc('public').onSnapshot((snap) => {
      if (snap.exists) fbStore.cache.public = snap.data();
      cb('public');
    }, () => {});
    fbDB.collection('config').doc('admin').onSnapshot((snap) => {
      if (snap.exists) fbStore.cache.admin = snap.data();
      cb('admin');
    }, () => {});
  },
};

/* ---------------- Properties ---------------- */
const fbProps = {
  list: [],
  ready: null,

  async load() {
    if (fbProps.ready) return fbProps.ready;
    fbProps.ready = (async () => {
      try {
        const snap = await fbDB.collection('properties').orderBy('id').get();
        fbProps.list = snap.docs.map((d) => d.data());
      } catch (e) {
        fbProps.list = [];
      }
    })();
    return fbProps.ready;
  },

  watch(cb) {
    fbDB.collection('properties').onSnapshot((snap) => {
      fbProps.list = snap.docs.map((d) => d.data());
      cb();
    }, () => {});
  },
};

/* ---------------- Users ---------------- */
const fbUsersCache = { list: [], ready: null };

async function fbListUsers() {
  if (fbUsersCache.ready) return fbUsersCache.ready;
  fbUsersCache.ready = (async () => {
    try {
      const snap = await fbDB.collection('users').orderBy('at', 'desc').get();
      fbUsersCache.list = snap.docs.map((d) => Object.assign({ uid: d.id }, d.data()));
    } catch (e) {
      fbUsersCache.list = [];
    }
  })();
  return fbUsersCache.ready;
}

/* ---------------- Auth ---------------- */
const fbUserState = { user: null, record: null, authReady: null };

async function fbLoadUserRecord(uid) {
  try {
    const snap = await fbDB.collection('users').doc(uid).get();
    return snap.exists ? snap.data() : null;
  } catch (e) {
    return null;
  }
}

function fbInitAuth() {
  if (fbUserState.authReady) return fbUserState.authReady;
  fbUserState.authReady = new Promise((resolve) => {
    fbAuth.onAuthStateChanged(async (u) => {
      fbUserState.user = u;
      fbUserState.record = u ? await fbLoadUserRecord(u.uid) : null;
      resolve();
      if (window.Dash && typeof window.Dash.onAuth === 'function') {
        window.Dash.onAuth(fbUserState.user, fbUserState.record);
      }
    });
  });
  return fbUserState.authReady;
}

async function fbSignIn(email, pw) {
  const cred = await fbAuth.signInWithEmailAndPassword(email, pw);
  fbUserState.user = cred.user;
  fbUserState.record = cred.user ? await fbLoadUserRecord(cred.user.uid) : null;
}

async function fbSignUp(email, pw) {
  const cred = await fbAuth.createUserWithEmailAndPassword(email, pw);
  fbUserState.user = cred.user;
  fbUserState.record = cred.user
    ? { email: cred.user.email, name: '', role: 'client', active: true, at: Date.now() }
    : null;
}

async function fbSignOut() {
  await fbAuth.signOut();
  fbUserState.user = null;
  fbUserState.record = null;
}

async function fbSendPasswordReset(email) {
  await fbAuth.sendPasswordResetEmail(email);
}

async function fbInit() {
  await fbInitAuth();
  await Promise.all([fbStore.load(), fbProps.load()]);
  return fbUserState;
}

const Firebase = {
  config: FIREBASE_CONFIG,
  cloudinary: CLOUDINARY,
  auth: fbAuth,
  db: fbDB,
  store: fbStore,
  props: fbProps,
  usersCache: fbUsersCache,
  userState: fbUserState,
  init: fbInit,
  initAuth: fbInitAuth,
  signIn: fbSignIn,
  signUp: fbSignUp,
  signOut: fbSignOut,
  sendPasswordReset: fbSendPasswordReset,
  loadUserRecord: fbLoadUserRecord,
  listUsers: fbListUsers,
  isCloudinaryReady: () => !!(CLOUDINARY.cloudName && CLOUDINARY.cloudName.indexOf('YOUR_') === -1),
};

window.Firebase = Firebase;
