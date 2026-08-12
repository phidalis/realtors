/* =========================================================
   Shared data for the real estate site (no build, plain JS)
   ========================================================= */

/* Site content, listings, contacts and agents are all stored in Firestore
   (see firebase-config.js). No hard-coded demo data lives in this file. */

const CONTACT_FALLBACK = {
  name: 'Realty Homes',
  email: '',
  phone: '',
};

const AGENT_FALLBACK = {
  name: 'Realty Homes', title: '', photo: '', phone: '', email: '', whatsapp: '',
  rating: 0, homesSold: 0, years: 0, intro: '',
};

const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=70',
};

/* Sample images used by the admin property picker (same set the seeder uses). */
const HOUSE_IMGS = [
  '1600585154340-be6161a56a0c',
  '1600607687939-ce8a6c25118c',
  '1600566753190-17f0baa2a6c3',
  '1600047509807-ba8f99d2cdde',
  '1600047509358-9dc75507daeb',
  '1600596542815-ffad4c1539a9',
  '1600585152220-90363fe7e115',
  '1502672260266-1c1ef2d93688',
];
const U = (id, w) => 'https://images.unsplash.com/photo-' + id + '?auto=format&fit=crop&w=' + (w || 800) + '&q=70';

function primaryAgent() {
  return (window.Dash && window.Dash.getPrimaryAgent)
    ? window.Dash.getPrimaryAgent() : AGENT_FALLBACK;
}

function primaryAgentEmail() {
  return primaryAgent().email || '';
}

const SVG = (inner, fill) =>
  `<svg viewBox="0 0 24 24" fill="${fill ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;

const ICONS = {
  home: SVG('<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>'),
  menu: SVG('<path d="M3 12h18"/><path d="M3 6h18"/><path d="M3 18h18"/>'),
  x: SVG('<path d="M18 6 6 18"/><path d="m6 6 12 12"/>'),
  search: SVG('<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>'),
  heart: SVG('<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>'),
  heartFill: SVG('<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>', true),
  eye: SVG('<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>'),
  eyeOff: SVG('<path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/>'),
  bed: SVG('<path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"/><path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"/><path d="M2 17h20"/><path d="M6 13v1"/><path d="M18 13v1"/>'),
  bath: SVG('<path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/><path d="M10 5 8 7"/><path d="M2 12h20"/><path d="M6 12V5a2 2 0 0 1 4 0v3"/><path d="M6 19v1"/><path d="M18 19v1"/>'),
  area: SVG('<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>'),
  location: SVG('<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>'),
  phone: SVG('<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>'),
  email: SVG('<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>'),
  share: SVG('<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.59 13.51 6.83 3.98"/><path d="m15.41 6.51-6.82 3.98"/>'),
  calendar: SVG('<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/>'),
  check: SVG('<path d="M20 6 9 17l-5-5"/>'),
  arrow: SVG('<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>'),
  chevL: SVG('<path d="m15 18-6-6 6-6"/>'),
  chevR: SVG('<path d="m9 18 6-6-6-6"/>'),
  chevD: SVG('<path d="m6 9 6 6 6-6"/>'),
  grid: SVG('<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>'),
  users: SVG('<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'),
  pencil: SVG('<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>'),
  trash: SVG('<path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>'),
  list: SVG('<path d="M8 6h13"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M3 6h.01"/><path d="M3 12h.01"/><path d="M3 18h.01"/>'),
  sliders: SVG('<path d="M4 21v-7"/><path d="M4 10V3"/><path d="M12 21v-9"/><path d="M12 8V3"/><path d="M20 21v-5"/><path d="M20 12V3"/><path d="M1 14h6"/><path d="M9 8h6"/><path d="M17 16h6"/>'),
  car: SVG('<path d="M19 17h2v-6l-2-4h-3V4a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3H6l-2 4v6h2"/><path d="M5 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M19 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M9 7h6"/>'),
  tree: SVG('<path d="M8 21h8"/><path d="M12 17v4"/><path d="M12 4 6 14h12L12 4Z"/>'),
  dog: SVG('<path d="M10 5.17c0-1.07 1.2-1.69 2.07-1.07L14 5.4l1.93-1.3A1.27 1.27 0 0 1 18 5.36V8"/><path d="M18 8h1a2 2 0 0 1 2 2v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-2a2 2 0 0 1 2-2h1"/><path d="M3 14v4a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-4"/>'),
  sofa: SVG('<path d="M5 11V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3"/><path d="M3 11h18a1 1 0 0 1 1 1v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a1 1 0 0 1 1-1Z"/><path d="M6 17v2"/><path d="M18 17v2"/>'),
  land: SVG('<path d="m3 10 18-7-4 18-6-8-8-3Z"/>'),
  facebook: SVG('<path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>', true),
  instagram: SVG('<rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>'),
  tiktok: SVG('<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>'),
  linkedin: SVG('<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V9h4v1.5A6 6 0 0 1 16 8z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>'),
  whatsapp: SVG('<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>', true),
};

/* ---------------- Property builder ---------------- */

/* Properties are read from Firestore; the admin dashboard persists them there. */
const PROPERTIES = [];
const __deletedPropIds = [];

function loadPropsIntoMemory() {
  PROPERTIES.length = 0;
  const list = window.Firebase ? window.Firebase.props.list : [];
  PROPERTIES.push.apply(PROPERTIES, list);
}

function savePropsToFirestore() {
  const F = window.Firebase;
  if (!F) return Promise.resolve();
  const batch = F.db.batch();
  PROPERTIES.forEach((p) => {
    batch.set(F.db.collection('properties').doc(String(p.id)), p);
  });
  __deletedPropIds.forEach((id) => {
    batch.delete(F.db.collection('properties').doc(String(id)));
  });
  __deletedPropIds.length = 0;
  return batch.commit().catch((e) => console.error('Failed to save properties:', e));
}

function recordDeletedProp(id) {
  if (__deletedPropIds.indexOf(id) === -1) __deletedPropIds.push(id);
}

/* Boot pages only after Firebase (auth + data) is ready. */
function whenFirebase(cb) {
  const F = window.Firebase;
  if (!F || typeof F.init !== 'function') { if (cb) cb(); return; }
  F.init().then(() => {
    loadPropsIntoMemory();
    if (window.Dash && typeof window.Dash.onData === 'function') window.Dash.onData();
    if (cb) cb();
  }).catch(() => { if (cb) cb(); });
}

/* Helpers used across pages */
function formatPrice(p) {
  return p.status === 'rent' ? '$' + p.price.toLocaleString() + '/mo' : '$' + p.price.toLocaleString();
}

function currentEmail() {
  const S = window.Firebase && window.Firebase.userState;
  const r = S && S.record;
  return r && r.email ? String(r.email).toLowerCase() : '';
}

function getFavorites() {
  const email = currentEmail();
  if (email) {
    const m = window.Firebase.store.getObj('favorites', {});
    return Array.isArray(m[email]) ? m[email].slice() : [];
  }
  try { return JSON.parse(localStorage.getItem('realtor_favorites') || '[]'); } catch (e) { return []; }
}

function saveFavorites(list) {
  const email = currentEmail();
  if (email) {
    const m = window.Firebase.store.getObj('favorites', {});
    m[email] = Array.isArray(list) ? list.slice() : [];
    window.Firebase.store.set('favorites', m);
    window.Firebase.store.commit();
  } else {
    localStorage.setItem('realtor_favorites', JSON.stringify(list));
  }
}

function toggleFavorite(id) {
  let favs = getFavorites();
  if (favs.includes(id)) { favs = favs.filter((f) => f !== id); } else { favs.push(id); }
  saveFavorites(favs);
  return favs.includes(id);
}

function propCoords(p) {
  const seed = p.id * 7919;
  const lat = 40.68 + ((seed % 1000) / 10000) * 3;
  const lng = -74.25 + ((seed % 800) / 10000) * 3;
  return { lat, lng };
}


/* ---------------- next module ---------------- */

/* =========================================================
   Realty Homes — shared dashboard layer (auth, nav, data, ui)
   ========================================================= */
(function () {
  'use strict';

  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  /* ---------------- Utilities ---------------- */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, (c) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }
  function getStore(key) {
    if (key === 'realtor_users') {
      const F = window.Firebase;
      return (F && F.usersCache) ? F.usersCache.list.slice() : [];
    }
    if (key === 'realtor_leads' || key === 'realtor_viewings' || key === 'realtor_messages') {
      return window.Firebase ? window.Firebase.store.getArray(key) : [];
    }
    try { return JSON.parse(localStorage.getItem(key) || '[]'); } catch (e) { return []; }
  }
  function setStore(key, list) {
    if (key === 'realtor_leads' || key === 'realtor_viewings' || key === 'realtor_messages') {
      if (!window.Firebase) return;
      window.Firebase.store.set(key, list);
      window.Firebase.store.commit();
      return;
    }
    if (key === 'realtor_users') return; /* users live in the users/{uid} collection */
    localStorage.setItem(key, JSON.stringify(list));
  }
  function initials(name) {
    return String(name || '?').split(/\s+/).filter(Boolean).slice(0, 2)
      .map((w) => w[0].toUpperCase()).join('');
  }
  function timeAgo(ts) {
    if (!ts) return '';
    const s = Math.floor((Date.now() - ts) / 1000);
    if (s < 60) return 'just now';
    const m = Math.floor(s / 60);
    if (m < 60) return m + 'm ago';
    const h = Math.floor(m / 60);
    if (h < 24) return h + 'h ago';
    const d = Math.floor(h / 24);
    if (d < 30) return d + 'd ago';
    return new Date(ts).toLocaleDateString();
  }
  function fmtDate(ts) {
    return new Date(ts).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
  }

  /* ---------------- Toast ---------------- */
  let toastTimer;
  function toast(msg, type) {
    let el = $('#dash-toast');
    if (!el) {
      el = document.createElement('div');
      el.id = 'dash-toast';
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.className = 'dash-toast show' + (type ? ' ' + type : '');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { el.className = 'dash-toast'; }, 2800);
  }

  /* ---------------- Auth (Firebase) ---------------- */
  function currentUser() {
    const S = window.Firebase && window.Firebase.userState;
    return (S && S.record) || null;
  }
  function saveUser(updated) {
    const S = window.Firebase;
    if (!S || !S.userState.user) return;
    if (S.userState.record) {
      Object.assign(S.userState.record, updated || {});
    } else {
      S.userState.record = Object.assign({}, updated || {});
    }
    S.db.collection('users').doc(S.userState.user.uid)
      .set(S.userState.record, { merge: true })
      .catch((e) => console.error('Failed to save profile:', e));
  }

  /* Track when an admin last opened a section so notifications clear on open. */
  function getSeen() {
    const u = currentUser();
    return (u && u.seen && typeof u.seen === 'object') ? u.seen : {};
  }
  function markSeen(section) {
    const u = currentUser();
    if (!u) return;
    const seen = Object.assign({}, u.seen || {});
    seen[section] = Date.now();
    saveUser({ seen });
  }
  function seenSince(section) {
    const t = getSeen()[section];
    return t ? +t : 0;
  }

  function isUserActive(email) {
    const u = currentUser();
    if (!u || String(u.email || '').toLowerCase() !== String(email || '').toLowerCase()) return true;
    return u.active !== false;
  }

  function requireSignedIn() {
    const F = window.Firebase;
    if (F && F.userState && F.userState.user) return true;
    toast('Please sign in to continue.');
    setTimeout(() => { location.href = 'login.html'; }, 900);
    return false;
  }

  function renderUser() {
    const u = currentUser();
    $$('.dash-avatar').forEach((el) => {
      if (el.classList.contains('img')) {
        el.innerHTML = `<img src="${el.dataset.src || ''}" alt="">`;
      } else {
        el.textContent = initials(u ? u.name : '');
      }
    });
    $$('.dash-user b').forEach((el) => { el.textContent = u ? u.name : 'Guest'; });
    $$('.dash-user span').forEach((el) => { el.textContent = u ? u.email : 'Not signed in'; });
    $$('.dash-user .role-tag').forEach((el) => {
      el.textContent = u && u.role === 'admin' ? 'Administrator' : 'Client';
    });
    const badge = $('#nav-count-msgs');
    if (badge) {
      const n = unreadFor(u);
      badge.textContent = n;
      badge.style.display = n ? 'inline-flex' : 'none';
    }
  }

  function unreadFor(u) {
    if (!u || !u.email) return 0;
    const isAdmin = u.role === 'admin';
    const since = isAdmin ? seenSince('messages') : 0;
    const msgs = window.Firebase ? window.Firebase.store.getArray('realtor_messages') : [];
    return msgs.filter((m) => {
      if (isAdmin) return !m.read && m.to && m.to.toLowerCase().indexOf('realtyhomes') !== -1 && (m.at || 0) >= since;
      return !m.read && m.to && m.to.toLowerCase() === u.email.toLowerCase();
    }).length;
  }

  function requireAuth(roleRequired) {
    const F = window.Firebase;
    const u = currentUser();
    if (!F || !F.userState.user || !u || !u.email) {
      location.href = 'login.html' + (roleRequired === 'admin' ? '?role=admin' : '');
      return null;
    }
    if (roleRequired === 'admin' && u.role !== 'admin') { location.href = 'client.html'; return null; }
    renderUser();
    return u;
  }

  /* ---------------- Sidebar / navigation ---------------- */
  function initSidebar() {
    const scrim = document.createElement('div');
    scrim.className = 'dash-scrim';
    document.body.appendChild(scrim);
    const side = $('.dash-sidebar');
    const burger = $('.dash-burger');
    if (burger) burger.addEventListener('click', () => { side.classList.add('open'); scrim.classList.add('open'); });
    scrim.addEventListener('click', () => { side.classList.remove('open'); scrim.classList.remove('open'); });
    $$('[data-logout]').forEach((b) =>
      b.addEventListener('click', () => {
        const F = window.Firebase;
        if (F && F.signOut) {
          F.signOut().finally(() => location.href = 'login.html');
        } else {
          location.href = 'login.html';
        }
      })
    );
    $$('a[data-section]').forEach((a) =>
      a.addEventListener('click', (e) => { e.preventDefault(); goTo(a.dataset.section); })
    );
    $$('.dash-nav a[href]').forEach((a) =>
      a.addEventListener('click', () => { side.classList.remove('open'); scrim.classList.remove('open'); })
    );
  }

  function goTo(id) {
    const section = document.getElementById(id);
    if (!section) return;
    window.Dash.currentSection = id;
    $$('.dash-section').forEach((s) => s.classList.toggle('active', s.id === id));
    $$('.dash-nav a[data-section]').forEach((a) => a.classList.toggle('active', a.dataset.section === id));
    const link = $('.dash-nav a[data-section="' + id + '"]');
    const titleEl = $('#dash-title');
    if (titleEl && link && link.dataset.title) titleEl.textContent = link.dataset.title;
    if (window.Dash.pageTitle && titleEl) document.title = window.Dash.pageTitle + ' — ' + titleEl.textContent;
    const side = $('.dash-sidebar');
    const scrim = $('.dash-scrim');
    if (side) side.classList.remove('open');
    if (scrim) scrim.classList.remove('open');
    window.scrollTo(0, 0);
    if (window.DashOnSection) window.DashOnSection(id);
  }

  /* ---------------- Modal ---------------- */
  function openDashModal(html, title) {
    let box = $('#dash-modal');
    if (!box) {
      box = document.createElement('div');
      box.id = 'dash-modal';
      box.className = 'dash-modal';
      document.body.appendChild(box);
    }
    box.innerHTML = `
      <div class="dash-modal-box">
        <div class="dash-modal-head">
          <h3>${esc(title || '')}</h3>
          <button class="icon-btn" data-dm-close type="button">${ICONS.x}</button>
        </div>
        <div class="dash-modal-body">${html}</div>
      </div>`;
    box.classList.add('open');
    document.body.style.overflow = 'hidden';
    box.addEventListener('click', (e) => {
      if (e.target === box || e.target.closest('[data-dm-close]')) closeDashModal();
    });
    const first = box.querySelector('input,select,textarea');
    if (first) first.focus();
    return box;
  }
  function closeDashModal() {
    const box = $('#dash-modal');
    if (box) box.classList.remove('open');
    document.body.style.overflow = '';
  }

  /* ---------------- Property data ---------------- */
  function getProps() { return PROPERTIES; }
  function saveProps() { return savePropsToFirestore(); }

  /* ---------------- Agent data ---------------- */
  function getAgents() {
    return window.Firebase ? window.Firebase.store.getArray('realtor_agents') : [];
  }
  function saveAgents(list) {
    if (!window.Firebase) return;
    window.Firebase.store.set('realtor_agents', list);
    window.Firebase.store.commit();
  }
  function getPrimaryAgent() {
    const agents = getAgents();
    return agents[0] || AGENT_FALLBACK;
  }

  /* ---------------- Settings ---------------- */
  function getSettings() {
    return window.Firebase ? window.Firebase.store.getObj('realtor_settings', {}) : {};
  }
  function applySettings() {
    const s = getSettings();
    const year = new Date().getFullYear();
    if (s.siteName) {
      $$('.footer .logo-text').forEach((el) => { el.textContent = s.siteName; });
      $$('.footer .copyright').forEach((el) => { el.textContent = '© ' + year + ' ' + s.siteName + '. All rights reserved.'; });
    } else {
      $$('.footer .copyright').forEach((el) => { el.textContent = '© ' + year + ' Realty Homes. All rights reserved.'; });
    }
    if (s.phone) {
      const digits = String(s.phone).replace(/[^+\d]/g, '');
      $$('.footer a[href^="tel:"]').forEach((el) => {
        el.setAttribute('href', 'tel:' + digits);
        const svg = el.querySelector('svg');
        el.innerHTML = svg ? svg.outerHTML : '';
        el.appendChild(document.createTextNode(' ' + s.phone));
      });
      $$('.footer .social-row a[aria-label="WhatsApp"]').forEach((el) =>
        el.setAttribute('href', 'https://wa.me/' + digits.replace(/^\+/, '')));
    }
    if (s.email) {
      $$('.footer a[href^="mailto:"]').forEach((el) => {
        el.setAttribute('href', 'mailto:' + s.email);
        const svg = el.querySelector('svg');
        el.innerHTML = svg ? svg.outerHTML : '';
        el.appendChild(document.createTextNode(' ' + s.email));
      });
    }
    if (s.facebook) $$('.footer .social-row a[aria-label="Facebook"]').forEach((el) => el.setAttribute('href', s.facebook));
    if (s.instagram) $$('.footer .social-row a[aria-label="Instagram"]').forEach((el) => el.setAttribute('href', s.instagram));
  }

  /* ---------------- Per-user saved searches ---------------- */
  function getSearches() {
    const email = currentEmail();
    if (email) {
      const m = window.Firebase.store.getObj('searches', {});
      return Array.isArray(m[email]) ? m[email].slice() : [];
    }
    try { return JSON.parse(localStorage.getItem('realtor_searches') || '[]'); } catch (e) { return []; }
  }
  function saveSearches(list) {
    const email = currentEmail();
    if (email) {
      const m = window.Firebase.store.getObj('searches', {});
      m[email] = Array.isArray(list) ? list.slice() : [];
      window.Firebase.store.set('searches', m);
      window.Firebase.store.commit();
    } else {
      localStorage.setItem('realtor_searches', JSON.stringify(list));
    }
  }

  /* ---------------- Mini property card ---------------- */
  function dashCard(p) {
    const fav = getFavorites().includes(p.id);
    return `
      <article class="dash-prop" data-id="${p.id}">
        <div class="dash-prop-media">
          <span class="tag-badge ${p.status}">${p.status === 'rent' ? 'For Rent' : 'For Sale'}</span>
          <button class="fav-btn ${fav ? 'active' : ''}" data-dfav="${p.id}" aria-label="Save home">${fav ? ICONS.heartFill : ICONS.heart}</button>
          <img src="${p.primary}" alt="${esc(p.title)}" loading="lazy">
        </div>
        <div class="dash-prop-body">
          <div class="dash-prop-price">${formatPrice(p)}</div>
          <div class="dash-prop-title">${esc(p.title)}</div>
          <div class="dash-prop-addr">${esc(p.address)}, ${esc(p.city)}</div>
          <div class="dash-prop-meta">
            <span>${ICONS.bed}${p.beds}</span>
            <span>${ICONS.bath}${p.baths}</span>
            <span>${ICONS.area}${p.area ? p.area.toLocaleString() : '—'}</span>
          </div>
          <a class="btn btn-soft btn-sm btn-block" href="browse.html?id=${p.id}">View details</a>
        </div>
      </article>`;
  }

  /* ---------------- Exports ---------------- */
  window.Dash = {
    $, $$, esc, getStore, setStore, initials, timeAgo, fmtDate,
    toast, currentUser, saveUser, requireAuth, renderUser,
    isUserActive, markSeen, seenSince, getAgents, saveAgents, getPrimaryAgent,
    getSettings, applySettings, getSearches, saveSearches,
    initSidebar, goTo, openDashModal, closeDashModal,
    getProps, saveProps, dashCard, getFavorites, toggleFavorite, formatPrice,
    onAuth() {}, onData() {},
  };

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.password-toggle');
    if (btn) {
      e.stopPropagation();
      const input = btn.closest('.password-field') && btn.closest('.password-field').querySelector('input');
      if (!input) return;
      const show = input.type === 'password';
      input.type = show ? 'text' : 'password';
      btn.setAttribute('aria-label', show ? 'Hide password' : 'Show password');
      btn.innerHTML = show ? ICONS.eyeOff : ICONS.eye;
      return;
    }
    const btn2 = e.target.closest('[data-dfav]');
    if (btn2) {
      e.stopPropagation();
      const id = +btn2.dataset.dfav;
      const now = toggleFavorite(id);
      btn2.classList.toggle('active', now);
      btn2.innerHTML = now ? ICONS.heartFill : ICONS.heart;
      toast(now ? 'Saved to favorites' : 'Removed from favorites', now ? 'success' : '');
      if (window.DashOnSection) window.DashOnSection(window.Dash.currentSection || '');
    }
  });

  /* Live-refresh sections when data changes elsewhere, and keep the
     public footer/brand in sync with saved settings. */
  function liveRefresh() {
    applySettings();
    if (window.DashOnSection && window.Dash.currentSection) {
      const live = ['overview', 'messages', 'leads', 'viewings', 'properties', 'agents', 'saved-homes', 'searches'];
      if (live.indexOf(window.Dash.currentSection) !== -1) window.DashOnSection(window.Dash.currentSection);
    }
    if (window.Dash.renderUser) window.Dash.renderUser();
  }

  /* Live-refresh a section when data changes in another tab. */
  window.addEventListener('storage', liveRefresh);

  whenFirebase(() => {
    window.Dash.onData = liveRefresh;
    applySettings();
    const F = window.Firebase;
    if (F && F.store && F.store.watch) F.store.watch(liveRefresh);
    if (F && F.props && F.props.watch) {
      F.props.watch(() => {
        loadPropsIntoMemory();
        if (window.DashOnSection && window.Dash.currentSection) {
          const live = ['overview', 'properties', 'saved-homes', 'hero'];
          if (live.indexOf(window.Dash.currentSection) !== -1) window.DashOnSection(window.Dash.currentSection);
        }
      });
    }
  });
})();


/* ---------------- next module ---------------- */

/* =========================================================
   Realty Homes — shared logic + home page
   ========================================================= */
(function () {
  'use strict';

  if (!document.getElementById('modal')) return;

  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));
  const isHome = !!$('#hero');

  /* ---------------- Toast ---------------- */
  let toastTimer;
  function toast(msg, type) {
    const el = $('#toast');
    if (!el) return;
    el.textContent = msg;
    el.className = 'toast show' + (type ? ' ' + type : '');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { el.className = 'toast'; }, 2800);
  }

  /* ---------------- Header ---------------- */
  function onScroll() {
    const h = $('#site-header');
    if (!h) return;
    h.classList.toggle('scrolled', window.scrollY > 50 || !isHome);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------------- Sidebar ---------------- */
  const sidebar = $('#sidebar');
  const overlay = $('#overlay');
  function openSidebar() {
    if (!sidebar || !overlay) return;
    sidebar.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeSidebar() {
    if (!sidebar || !overlay) return;
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
  const hamburger = $('#nav-hamburger');
  if (hamburger) hamburger.addEventListener('click', openSidebar);
  const sideClose = $('#sidebar-close');
  if (sideClose) sideClose.addEventListener('click', closeSidebar);
  if (overlay) overlay.addEventListener('click', closeSidebar);
  $$('#sidebar .side-link, #sidebar .side-login').forEach((l) => l.addEventListener('click', closeSidebar));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeSidebar(); closeModal(); closeProperty(); }
  });

  /* ---------------- Generic modal ---------------- */
  const modal = $('#modal');
  const modalBox = $('#modal-box');
  function openModal(name) {
    const html = MODAL_BUILDERS[name] ? MODAL_BUILDERS[name]() : MODAL_BUILDERS.fallback(name);
    modalBox.innerHTML = html;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    const first = modalBox.querySelector('input,select,textarea');
    if (first) first.focus();
  }
  function closeModal() {
    modal.classList.remove('open');
    modal.classList.remove('fullscreen');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  $$('[data-open-modal]').forEach((b) =>
    b.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); openModal(b.dataset.openModal); })
  );
  modal.addEventListener('click', (e) => {
    if (e.target.closest('[data-close-modal]')) closeModal();
  });
  modalBox.addEventListener('submit', (e) => {
    const form = e.target.closest('form');
    if (!form) return;
    e.preventDefault();
    handleFormSubmit(form);
  });

  const listItem = (items) => '<ul>' + items.map((i) => `<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg><span>${i}</span></li>`).join('') + '</ul>';
  const head = (title, btn) => `<div class="modal-head"><h3>${title}</h3><button class="icon-btn" type="button" data-close-modal><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></button></div>`;
  const FORM_INPUTS = (name, email, subject, body) => `
    <div class="field"><label>Full name</label><input name="name" required placeholder="Jane Smith"></div>
    <div class="field"><label>Email</label><input type="email" name="email" required placeholder="jane@email.com"></div>
    <div class="field"><label>Subject</label><input name="subject" required value="${subject}"></div>
    <div class="field"><label>Message</label><textarea name="body" rows="3" required placeholder="${body}"></textarea></div>`;

  const MODAL_BUILDERS = {
    budget: () => `
      ${head('How Much Can You Afford?')}
      <div class="modal-body">
        <p style="color:var(--muted);margin-bottom:16px">Enter your details to get a quick budget estimate.</p>
        <form data-form="budget">
          <div class="field"><label>Gross annual income ($)</label><input type="number" name="income" min="0" required placeholder="120000"></div>
          <div class="form-row" style="margin-top:14px">
            <div class="field"><label>Down payment ($)</label><input type="number" name="down" min="0" required placeholder="60000"></div>
            <div class="field"><label>Monthly debts ($)</label><input type="number" name="debt" min="0" required placeholder="500"></div>
          </div>
          <div class="modal-actions"><button class="btn btn-primary" type="submit">Calculate Budget</button></div>
        </form>
        <div class="calc-output" id="calc-out" hidden></div>
      </div>`,
    mortgage: () => `
      ${head('Mortgage Calculator')}
      <div class="modal-body">
        <p style="color:var(--muted);margin-bottom:16px">Estimate your monthly payment including taxes and insurance.</p>
        <form data-form="mortgage">
          <div class="form-row">
            <div class="field"><label>Home price ($)</label><input type="number" name="price" min="0" required placeholder="500000"></div>
            <div class="field"><label>Down payment (%)</label><input type="number" name="down" min="0" max="100" required placeholder="20"></div>
          </div>
          <div class="form-row">
            <div class="field"><label>Interest rate (%)</label><input type="number" name="rate" min="0" step="0.01" required placeholder="6.5"></div>
            <div class="field"><label>Years</label><select name="years"><option value="30">30</option><option value="15">15</option><option value="20">20</option></select></div>
          </div>
          <div class="modal-actions"><button class="btn btn-primary" type="submit">Calculate Payment</button></div>
        </form>
        <div class="calc-output" id="calc-out" hidden></div>
      </div>`,
    dpa: () => `
      ${head('Down Payment Assistance')}
      <div class="modal-body">
        ${listItem([
          'First-time buyer grants up to $25,000 in many areas',
          'FHA loans with down payments as low as 3.5%',
          'State & local assistance programs and forgivable loans',
          'USDA loans with zero down payment in qualifying areas',
          'HomeReady® and Home Possible® programs for low-to-moderate income buyers',
        ])}
        <p style="color:var(--muted);font-size:.9rem;margin-top:14px">Our team can check which programs you qualify for — talk to an agent to get started.</p>
      </div>`,
    buyGuide: () => `
      ${head('Home Buying Guide')}
      <div class="modal-body">
        ${listItem([
          'Get pre-approved for a mortgage',
          'Set your budget and must-haves',
          'Start house hunting with your agent',
          'Make an offer and negotiate',
          'Complete home inspection and appraisal',
          'Close the deal and get your keys',
        ])}
      </div>`,
    valuation: () => `
      ${head('Free Home Valuation')}
      <div class="modal-body">
        <p style="color:var(--muted);margin-bottom:16px">Tell us about your property and we\'ll send you a free valuation within 24 hours.</p>
        <form data-form="valuation">
          <div class="field"><label>Property address</label><input name="address" required placeholder="123 Main St, City"></div>
          ${FORM_INPUTS('', '', 'Home valuation request', 'I would like a free valuation of my property.')}
          <div class="modal-actions"><button class="btn btn-primary" style="flex:1" type="submit">Get My Valuation</button></div>
        </form>
      </div>`,
    sellTips: () => `
      ${head('Home Selling Tips')}
      <div class="modal-body">
        ${listItem([
          'Declutter and deep-clean every room',
          'Fix small repairs — fresh paint works wonders',
          'Curb appeal: mow, plant, and power-wash',
          'Stage key rooms to help buyers imagine living there',
          'Set a realistic price using current market data',
          'Professional photos and video tours attract more buyers',
        ])}
      </div>`,
    market: () => `
      ${head('Market Analysis')}
      <div class="modal-body">
        ${listItem([
          'Median prices in your neighborhood over the last 12 months',
          'Days on market and inventory levels right now',
          'Price per square foot comparisons',
          'Upcoming developments that could affect value',
          'A personalized pricing strategy for your home',
        ])}
        <p style="color:var(--muted);font-size:.9rem;margin-top:14px">Request a full report and we\'ll walk through it with you.</p>
      </div>`,
    marketing: () => `
      ${head('Sell Faster')}
      <div class="modal-body">
        ${listItem([
          'Professional photography and 3D virtual tours',
          'Featured placement on all major listing portals',
          'Targeted social media campaigns in your area',
          'Open houses and private showings that convert',
          'Daily buyer feedback to keep your price sharp',
        ])}
      </div>`,
    consult: () => `
      ${head('Book a Consultation')}
      <div class="modal-body">
        <p style="color:var(--muted);margin-bottom:16px">Pick a time and our team will call you to build your plan.</p>
        <form data-form="consult">
          <div class="field"><label>Full name</label><input name="name" required placeholder="Jane Smith"></div>
          <div class="field"><label>Phone</label><input name="phone" required placeholder="+1 555 123 4567"></div>
          <div class="field"><label>Preferred date</label><input type="date" name="date" required></div>
          <div class="modal-actions"><button class="btn btn-primary" style="flex:1" type="submit">Request Booking</button></div>
        </form>
      </div>`,
    tenantGuide: () => `
      ${head('Tenant Guide')}
      <div class="modal-body">
        ${listItem([
          'Set a budget: rent should be under 30% of income',
          'Visit properties in person and at different times',
          'Read the full lease before you sign',
          'Document the condition of the home with photos',
          'Know your rights and your landlord\'s obligations',
        ])}
      </div>`,
    rentalApp: () => `
      ${head('Rental Application Help')}
      <div class="modal-body">
        ${listItem([
          'Prepare ID, pay stubs, bank statements and references',
          'Check your credit score and dispute any errors',
          'Have a guarantor ready if income requirements are tight',
          'Apply quickly — great rentals move fast',
          'Follow up within 24 hours of applying',
        ])}
      </div>`,
    lease: () => `
      ${head('Lease Information')}
      <div class="modal-body">
        ${listItem([
          'Security deposit: usually one month\'s rent',
          'Rent due date, late fees and payment methods',
          'Repairs and maintenance responsibilities',
          'Renewal, notice periods and early-termination terms',
          'Subletting, pets and house rules',
        ])}
      </div>`,
    moving: () => `
      ${head('Moving Checklist')}
      <div class="modal-body">
        ${listItem([
          'Book movers or a truck 3–4 weeks ahead',
          'Notify utilities, insurance and change of address',
          'Pack room by room and label every box',
          'Plan for pets and kids on moving day',
          'Clean and return keys — schedule final walkthrough',
          'Update ID, bank and subscriptions to your new address',
        ])}
      </div>`,
    fallback: (n) => `${head('Coming soon')}<div class="modal-body"><p style="color:var(--muted)">This feature is on its way.</p></div>`,
  };

  /* ---------------- Form submit handler ---------------- */
  function persistItem(key, item) {
    const F = window.Firebase;
    if (F && F.store) {
      whenFirebase(() => {
        const list = F.store.getArray(key);
        list.push(item);
        F.store.set(key, list);
        F.store.commit();
      });
      return;
    }
    let list = [];
    try { list = JSON.parse(localStorage.getItem(key) || '[]'); } catch (e) { list = []; }
    list.push(item);
    localStorage.setItem(key, JSON.stringify(list));
  }

  function handleFormSubmit(form) {
    const kind = form.dataset.form;
    const data = Object.fromEntries(new FormData(form).entries());
    const out = form.parentElement.querySelector('#calc-out');
    if (kind === 'budget') {
      const income = +data.income || 0, down = +data.down || 0, debt = +data.debt || 0;
      const monthly = income / 12;
      const avail = monthly * 0.36 - debt;
      const loan = avail * 250;            // approx 30-yr payment factor
      const price = loan + down;
      out.hidden = false;
      out.innerHTML = `
        <div class="big">$${Math.max(price, 0).toLocaleString()}</div>
        <div>Estimated maximum home price</div>
        <div class="calc-break">
          <span>Max loan: <b>$${Math.max(loan, 0).toLocaleString()}</b></span>
          <span>Down payment: <b>$${down.toLocaleString()}</b></span>
          <span>Monthly budget: <b>$${Math.max(avail, 0).toLocaleString()}</b></span>
        </div>`;
      toast('Budget calculated!', 'success');
    } else if (kind === 'mortgage') {
      const price = +data.price || 0, dp = +data.down || 0, rate = (+data.rate || 0) / 100, yrs = +data.years || 30;
      const downAmt = price * (dp / 100);
      const principal = price - downAmt;
      const r = rate / 12, n = yrs * 12;
      const m = r === 0 ? principal / n : (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const tax = price * 0.011 / 12;
      const ins = 120;
      const total = m + tax + ins;
      out.hidden = false;
      out.innerHTML = `
        <div class="big">$${total.toLocaleString(undefined, { maximumFractionDigits: 0 })}/mo</div>
        <div>Estimated total monthly payment</div>
        <div class="calc-break">
          <span>Principal &amp; interest: <b>$${m.toLocaleString(undefined, { maximumFractionDigits: 0 })}</b></span>
          <span>Taxes: <b>$${tax.toLocaleString(undefined, { maximumFractionDigits: 0 })}</b></span>
          <span>Insurance: <b>$${ins}</b></span>
        </div>`;
      toast('Mortgage estimated!', 'success');
    } else if (kind === 'valuation') {
      persistItem('realtor_leads', {
        type: 'valuation', name: data.name, email: data.email, address: data.address,
        message: data.body || '', status: 'new', at: Date.now(),
      });
      closeModal();
      toast('Valuation request received! We\'ll be in touch within 24h.', 'success');
    } else if (kind === 'consult') {
      persistItem('realtor_leads', {
        type: 'consult', name: data.name, phone: data.phone, date: data.date,
        status: 'new', at: Date.now(),
      });
      closeModal();
      toast('Consultation requested! We\'ll call you shortly.', 'success');
    } else if (kind === 'viewing') {
      const p = PROPERTIES.find((x) => x.id === +form.dataset.propId);
      persistItem('realtor_viewings', {
        propId: +form.dataset.propId, title: p ? p.title : '', price: p ? p.price : 0,
        status: p ? p.status : 'sale',
        name: data.name, email: data.email, date: data.date, time: data.time,
        viewingStatus: 'new', at: Date.now(),
      });
      closeModal();
      toast('Viewing request sent! We\'ll confirm by email.', 'success');
    }
  }

  /* ---------------- "Coming soon" links ---------------- */
  $$('[data-soon]').forEach((a) =>
    a.addEventListener('click', (e) => { e.preventDefault(); toast('This page is coming soon.'); })
  );

  /* ---------------- Scroll links ---------------- */
  $$('[data-scroll]').forEach((a) =>
    a.addEventListener('click', (e) => {
      e.preventDefault();
      closeSidebar();
      const target = a.dataset.target || a.getAttribute('href');
      if (target && target.startsWith('#')) {
        const el = $(target);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      if (a.dataset.tab) setServiceTab(a.dataset.tab);
      if (a.dataset.modal) openModal(a.dataset.modal);
    })
  );

  /* ---------------- Services toggle ---------------- */
  const toggleBtns = $$('#services-toggle .toggle-btn');
  const slider = $('#toggle-slider');
  function setServiceTab(tab) {
    const idx = ['buy', 'sell', 'rent'].indexOf(tab);
    if (idx < 0) return;
    toggleBtns.forEach((b, i) => b.classList.toggle('active', i === idx));
    slider.className = 'toggle-slider pos-' + (idx + 1);
    $$('.service-panel').forEach((p) => p.classList.remove('active'));
    const panel = $('#panel-' + tab);
    if (panel) panel.classList.add('active');
    if (window.scrollY > 3000 || !isHome) {
      const sv = $('#services');
      if (sv) sv.scrollIntoView({ behavior: 'smooth' });
    }
  }
  toggleBtns.forEach((b) => b.addEventListener('click', () => setServiceTab(b.dataset.tab)));

  /* ---------------- Typewriter search ---------------- */
  const heroInput = $('#hero-search');
  if (heroInput) {
    const phrases = [
      'Search by city...', 'Search by ZIP code...', 'Search by neighborhood...',
      'Search luxury homes...', 'Search apartments...', 'Search family homes...',
      'Search waterfront homes...',
    ];
    let pi = 0, ci = 0, deleting = false;
    (function tick() {
      const phrase = phrases[pi];
      if (!deleting) {
        ci++;
        heroInput.placeholder = phrase.slice(0, ci);
        if (ci === phrase.length) { deleting = true; setTimeout(tick, 2000); return; }
        setTimeout(tick, 45);
      } else {
        ci--;
        heroInput.placeholder = phrase.slice(0, ci);
        if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; }
        setTimeout(tick, 22);
      }
    })();
  }

  const heroForm = $('#hero-search-form');
  if (heroForm) {
    heroForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const q = heroInput.value.trim();
      window.location.href = 'browse.html' + (q ? '?q=' + encodeURIComponent(q) : '');
    });
  }

  /* ---------------- Property cards ---------------- */
  function cardTag(p) {
    if (p.status === 'rent') return { label: 'For Rent', cls: 'rent' };
    if (p.category === 'luxury') return { label: 'Luxury', cls: 'luxury' };
    return { label: 'For Sale', cls: '' };
  }

  function cardHTML(p, opts) {
    const o = opts || {};
    const fav = getFavorites().includes(p.id);
    const tag = cardTag(p);
    const meta = `
      <span>${ICONS.bed}<strong>${p.beds}</strong></span>
      <span>${ICONS.bath}<strong>${p.baths}</strong></span>
      <span>${ICONS.area}<strong>${p.area ? p.area.toLocaleString() : '—'}</strong></span>`;
    const actions = o.actions ? `
      <div class="card-actions">
        <button class="btn btn-ghost fav-btn-2 ${fav ? 'active' : ''}" data-fav="${p.id}">${fav ? ICONS.heartFill : ICONS.heart} Save</button>
        <button class="btn btn-ghost" data-share="${p.id}">${ICONS.share} Share</button>
        <button class="btn btn-ghost" data-viewing="${p.id}">${ICONS.calendar} Viewing</button>
      </div>` : '';
    return `
      <article class="prop-card" data-id="${p.id}">
        <div class="prop-media">
          <span class="prop-tag ${tag.cls}">${tag.label}</span>
          <button class="fav-btn ${fav ? 'active' : ''}" data-fav="${p.id}" aria-label="Save home">${fav ? ICONS.heartFill : ICONS.heart}</button>
          <img src="${p.primary}" alt="${p.title}" loading="lazy">
        </div>
        <div class="prop-body">
          <div class="prop-price">${formatPrice(p)}</div>
          <div class="prop-address">${ICONS.location}<span>${p.address}, ${p.city}</span></div>
          <div class="prop-meta">${meta}</div>
          ${actions}
        </div>
      </article>`;
  }

  /* ---------------- Favorites ---------------- */
  function refreshBadges() {
    const n = getFavorites().length;
    ['#saved-badge', '#saved-badge-menu'].forEach((sel) => {
      const b = $(sel);
      if (!b) return;
      b.textContent = n;
      b.style.display = n ? 'inline-flex' : 'none';
    });
  }
  refreshBadges();

  document.addEventListener('click', (e) => {
    const favBtn = e.target.closest('[data-fav]');
    if (favBtn) {
      e.stopPropagation();
      const id = +favBtn.dataset.fav;
      const now = toggleFavorite(id);
      favBtn.classList.toggle('active', now);
      if (favBtn.classList.contains('btn')) {
        favBtn.innerHTML = (now ? ICONS.heartFill : ICONS.heart) + (now ? ' Saved' : ' Save');
      } else {
        favBtn.innerHTML = now ? ICONS.heartFill : ICONS.heart;
      }
      refreshBadges();
      toast(now ? 'Saved to favorites ❤️' : 'Removed from favorites');
      return;
    }
    const shareBtn = e.target.closest('[data-share]');
    if (shareBtn) { e.stopPropagation(); shareProperty(+shareBtn.dataset.share); return; }
    const viewBtn = e.target.closest('[data-viewing]');
    if (viewBtn) { e.stopPropagation(); openViewing(+viewBtn.dataset.viewing); return; }
    const card = e.target.closest('.prop-card');
    if (card && !e.target.closest('button, a')) openProperty(+card.dataset.id);
  });

  /* ---------------- Featured carousel ---------------- */
  const carousel = $('#featured-carousel');
  function renderCarousel() {
    if (!carousel) return;
    const featured = PROPERTIES.filter((p) => p.featured);
    carousel.innerHTML = featured.length ? featured.map((p) => cardHTML(p)).join('')
      : `<p class="dash-hint" style="text-align:center;padding:24px">No featured homes yet.</p>`;
  }
  if (carousel) {
    const scroll = (dir) => { carousel.scrollBy({ left: dir * 320, behavior: 'smooth' }); };
    $('#carousel-prev').addEventListener('click', () => scroll(-1));
    $('#carousel-next').addEventListener('click', () => scroll(1));
  }

  /* ---------------- Hero slideshow ---------------- */
  function heroImages() {
    try {
      const h = (window.Firebase && window.Firebase.store.getObj('realtor_hero', {})) || {};
      const list = (h && Array.isArray(h.images)) ? h.images.map((u) => String(u).trim()).filter(Boolean) : [];
      return list.length ? list : [IMAGES.hero];
    } catch (e) { return [IMAGES.hero]; }
  }
  function initHero() {
    const bg = document.getElementById('hero-bg');
    if (!bg) return;
    const imgs = heroImages();
    bg.innerHTML = imgs.map((url, i) =>
      '<div class="hero-slide' + (i === 0 ? ' active' : '') + '" style="background-image:url(\'' + url + '\')"></div>'
    ).join('');
    if (imgs.length < 2) return;
    const dots = document.createElement('div');
    dots.className = 'hero-dots';
    dots.setAttribute('role', 'tablist');
    dots.innerHTML = imgs.map((_, i) =>
      '<button' + (i === 0 ? ' class="active"' : '') + ' aria-label="Slide ' + (i + 1) + '"></button>'
    ).join('');
    bg.parentNode.appendChild(dots);
    let cur = 0, timer = null;
    const slides = bg.querySelectorAll('.hero-slide');
    const dotsBtns = dots.querySelectorAll('button');
    const show = (i) => {
      cur = (i + imgs.length) % imgs.length;
      slides.forEach((s, k) => s.classList.toggle('active', k === cur));
      dotsBtns.forEach((b, k) => b.classList.toggle('active', k === cur));
    };
    const restart = () => {
      if (timer) clearInterval(timer);
      timer = setInterval(() => show(cur + 1), 6000);
    };
    dots.addEventListener('click', (e) => {
      const btn = e.target.closest('button');
      if (btn) { show(Array.from(dotsBtns).indexOf(btn)); restart(); }
    });
    restart();
  }
  whenFirebase(() => { initHero(); renderCarousel(); });


  /* ---------------- Property details modal ---------------- */
  const pModal = $('#property-modal');
  const pBox = $('#property-box');
  let pdImgIdx = 0;

  function openProperty(id) {
    const p = PROPERTIES.find((x) => x.id === id);
    if (!p) return;
    pdImgIdx = 0;
    pBox.innerHTML = propertyHTML(p);
    pModal.classList.add('open');
    pModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeProperty() {
    pModal.classList.remove('open');
    pModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  pModal.addEventListener('click', (e) => {
    if (e.target.closest('[data-close-property]')) { closeProperty(); return; }
    const thumb = e.target.closest('[data-thumb]');
    if (thumb) {
      pdImgIdx = +thumb.dataset.thumb;
      const img = $('#pd-main');
      if (img) img.src = thumb.dataset.src;
      $$('.pd-thumb button').forEach((b, i) => b.classList.toggle('active', i === pdImgIdx));
    }
  });

  function propertyHTML(p) {
    const fav = getFavorites().includes(p.id);
    const tag = cardTag(p);
    const agent = primaryAgent();
    const agentPhone = String(agent.phone || AGENT_FALLBACK.phone).replace(/[^+\d]/g, '');
    const agentMail = agent.email || AGENT_FALLBACK.email;
    const feats = [
      { i: ICONS.bed, v: p.beds, l: 'Bedrooms' },
      { i: ICONS.bath, v: p.baths, l: 'Bathrooms' },
      { i: ICONS.area, v: p.area ? p.area.toLocaleString() + ' sqft' : '—', l: 'Living area' },
      { i: ICONS.land, v: p.lotSize ? p.lotSize + ' acres' : '—', l: 'Lot size' },
      { i: ICONS.car, v: p.parking ? 'Yes' : 'No', l: 'Parking' },
      { i: ICONS.calendar, v: p.yearBuilt || '—', l: 'Year built' },
    ];
    const amens = [];
    if (p.pool) amens.push('Pool');
    if (p.garden) amens.push('Garden');
    if (p.pets) amens.push('Pets allowed');
    if (p.furnished) amens.push('Furnished');
    if (p.category === 'luxury') amens.push('Luxury');
    const thumbs = p.imgs.map((src, i) => `
      <button class="${i === 0 ? 'active' : ''}" data-thumb="${i}" data-src="${src}"><img src="${src}" alt=""></button>`).join('');
    return `
      <div class="pd-gallery">
        <button class="pd-close" data-close-property aria-label="Close details">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
        <img id="pd-main" src="${p.imgs[0]}" alt="${p.title}">
        <div class="pd-thumb">${thumbs}</div>
      </div>
      <div class="pd-body">
        <div class="pd-top">
          <div>
            <div style="display:flex;gap:8px;margin-bottom:8px">
              <span class="prop-tag ${tag.cls}" style="position:static">${tag.label}</span>
              <span class="prop-tag rent" style="position:static;background:#334155">${p.type}</span>
            </div>
            <h3 style="font-size:1.35rem">${p.title}</h3>
            <p style="color:var(--muted);display:flex;align-items:center;gap:6px;margin-top:4px">${ICONS.location}${p.address}, ${p.city}, ${p.state} ${p.zip}</p>
          </div>
          <div class="pd-price">${formatPrice(p)}</div>
        </div>
        <div class="pd-feats">${feats.map((f) => `<div class="pd-feat">${f.i}<div><b>${f.v}</b><span>${f.l}</span></div></div>`).join('')}</div>
        <p class="pd-desc">${p.desc}</p>
        ${amens.length ? `<div class="pd-amen">${amens.map((a) => `<span>${a}</span>`).join('')}</div>` : ''}
        <div class="pd-agent">
          <img src="${agent.photo || AGENT_FALLBACK.photo}" alt="${agent.name}" onerror="this.style.display='none'">
          <div style="flex:1">
            <b>${agent.name}</b>
            <span>${agent.role || ''}</span>
          </div>
          <div style="display:flex;gap:8px">
            <a class="icon-btn" style="border:1.5px solid var(--line);border-radius:999px" href="tel:${agentPhone}" title="Call">${ICONS.phone}</a>
            <a class="icon-btn" style="border:1.5px solid var(--line);border-radius:999px" href="https://wa.me/${agentPhone.replace(/^\+/, '')}" target="_blank" rel="noopener" title="WhatsApp">${ICONS.whatsapp}</a>
            <a class="icon-btn" style="border:1.5px solid var(--line);border-radius:999px" href="mailto:${agentMail}" title="Email">${ICONS.email}</a>
          </div>
        </div>
        <div class="pd-actions">
          <button class="btn btn-primary" data-viewing="${p.id}">${ICONS.calendar} Schedule a Viewing</button>
          <button class="btn btn-soft" data-fav="${p.id}">${fav ? ICONS.heartFill : ICONS.heart} ${fav ? 'Saved' : 'Save'}</button>
          <button class="btn btn-soft" data-share="${p.id}">${ICONS.share} Share</button>
        </div>
      </div>`;
  }

  /* ---------------- Share ---------------- */
  function shareProperty(id) {
    const p = PROPERTIES.find((x) => x.id === id);
    const url = new URL('browse.html?id=' + p.id, window.location.href).href;
    const data = { title: p.title, text: `${p.title} — ${formatPrice(p)}`, url };
    if (navigator.share) {
      navigator.share(data).catch(() => {});
    } else if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(() => toast('Link copied to clipboard!', 'success'));
    } else {
      prompt('Copy this link:', url);
    }
  }

  /* ---------------- Schedule viewing ---------------- */
  function openViewing(id) {
    const p = PROPERTIES.find((x) => x.id === id);
    if (!p) return;
    closeProperty();
    modalBox.innerHTML = `
      ${head('Schedule a Viewing')}
      <div class="modal-body">
        <p style="color:var(--muted);margin-bottom:8px"><b>${p.title}</b> - ${p.address}, ${p.city} (${formatPrice(p)})</p>
        <form data-form="viewing" data-prop-id="${p.id}">
          <div class="field"><label>Full name</label><input name="name" required placeholder="Jane Smith"></div>
          <div class="field"><label>Email</label><input type="email" name="email" required placeholder="jane@email.com"></div>
          <div class="form-row" style="margin-top:14px">
            <div class="field"><label>Preferred date</label><input type="date" name="date" required></div>
            <div class="field"><label>Preferred time</label><select name="time"><option>Morning (9:00 AM - 12:00 PM)</option><option>Afternoon (12:00 PM - 4:00 PM)</option><option>Evening (4:00 PM - 7:00 PM)</option></select></div>
          </div>
          <div class="modal-actions"><button class="btn btn-primary" style="flex:1" type="submit">Request Viewing</button></div>
        </form>
      </div>`;
    modal.classList.add('fullscreen');
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  /* ---------------- Meet-your-agent section ---------------- */
  function renderAgentSection() {
    if (!$('#agent')) return;
    const a = primaryAgent();
    const phone = String(a.phone || AGENT_FALLBACK.phone).replace(/[^+\d]/g, '');
    const nameEl = $('#agent-name');
    if (nameEl) nameEl.textContent = a.name;
    const titleEl = $('#agent-title');
    if (titleEl) titleEl.textContent = a.role || '';
    const introEl = $('#agent-intro');
    if (introEl) introEl.textContent = a.intro || AGENT_FALLBACK.intro;
    const imgEl = $('#agent-photo-img');
    if (imgEl) {
      if (a.photo) { imgEl.src = a.photo; imgEl.alt = a.name + (a.role ? ', ' + a.role : ''); imgEl.style.display = ''; }
      else { imgEl.style.display = 'none'; }
    }
    const callEl = $('#agent-call');
    if (callEl) callEl.setAttribute('href', 'tel:' + phone);
    const waEl = $('#agent-wa');
    if (waEl) waEl.setAttribute('href', 'https://wa.me/' + phone.replace(/^\+/, ''));
    const mailEl = $('#agent-email');
    if (mailEl) mailEl.setAttribute('href', 'mailto:' + (a.email || AGENT_FALLBACK.email));
    const ratingEl = $('#agent-rating');
    if (ratingEl) ratingEl.textContent = a.rating != null ? String(a.rating) : '—';
    const yearsEl = $('#agent-years');
    if (yearsEl) yearsEl.textContent = a.years != null ? String(a.years) : '—';
    const soldEl = $('#agent-sold');
    if (soldEl) soldEl.textContent = a.sales != null ? String(a.sales) : '—';
  }
  whenFirebase(renderAgentSection);

  /* ---------------- Expose for browse page ---------------- */
  window.Realty = {
    cardHTML, openProperty, toast, setServiceTab, shareProperty,
  };
})();


/* ---------------- next module ---------------- */

/* =========================================================
   Realty Homes — browse / listings page logic
   ========================================================= */
(function () {
  'use strict';

  if (!document.getElementById('results')) return;

  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));
  const PAGE_SIZE = 8;

  const params = new URLSearchParams(window.location.search);
  const resultsEl = $('#results');
  const countEl = $('#results-count');
  const paginationEl = $('#pagination');

  let state = {
    q: params.get('q') || '',
    status: params.get('status') || 'any',
    categories: [],
    priceMin: null, priceMax: null,
    beds: 0, baths: 0,
    types: [],
    sqftMin: null, sqftMax: null,
    yearMin: null, yearMax: null,
    lotMin: null,
    amenities: [],
    sort: 'newest',
    view: 'grid',
    page: 1,
    savedOnly: params.get('saved') === '1',
  };

  /* ---------------- Map ---------------- */
  let map = null, markers = [], mapOpen = false;
  const mapWrap = $('#map-wrap');
  const mapToggle = $('#map-toggle');

  function coordsToLatLng(p) { const c = propCoords(p); return [c.lat, c.lng]; }

  function initMap() {
    if (map || typeof L === 'undefined') return;
    map = L.map('map').setView([41.0, -73.0], 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 18,
    }).addTo(map);
  }

  function renderMap(items) {
    if (!map) return;
    markers.forEach((m) => m.remove());
    markers = [];
    items.forEach((p) => {
      const m = L.marker(coordsToLatLng(p)).addTo(map);
      m.bindPopup(`<b class="m-title">${p.title}</b><br><span class="m-price">${formatPrice(p)}</span><br>${p.address}, ${p.city}`);
      m.on('click', () => window.Realty.openProperty(p.id));
      markers.push(m);
    });
    if (items.length) {
      const bounds = markers.map((m) => m.getLatLng());
      map.fitBounds(bounds, { padding: [30, 30] });
    }
  }

  mapToggle.addEventListener('click', () => {
    mapOpen = !mapOpen;
    mapWrap.hidden = !mapOpen;
    mapToggle.classList.toggle('btn-primary', mapOpen);
    mapToggle.classList.toggle('btn-ghost', !mapOpen);
    if (mapOpen) {
      initMap();
      setTimeout(() => {
        renderMap(getFiltered());
        if (map) map.invalidateSize();
      }, 50);
    }
  });

  /* ---------------- Filtering ---------------- */
  function getFiltered() {
    let list = PROPERTIES.filter((p) => {
      if (state.status !== 'any' && p.status !== state.status) return false;

      const cats = state.categories;
      if (cats.length && !cats.includes(p.category)) return false;

      if (state.priceMin != null && p.price < state.priceMin) return false;
      if (state.priceMax != null && p.price > state.priceMax) return false;

      if (state.beds > 0 && p.beds < state.beds) return false;
      if (state.baths > 0 && p.baths < state.baths) return false;

      if (state.types.length && !state.types.includes(p.type)) return false;

      if (state.sqftMin != null && p.area < state.sqftMin) return false;
      if (state.sqftMax != null && p.area > state.sqftMax) return false;

      if (state.yearMin != null && p.yearBuilt && p.yearBuilt < state.yearMin) return false;
      if (state.yearMax != null && p.yearBuilt && p.yearBuilt > state.yearMax) return false;

      if (state.lotMin != null && p.lotSize < state.lotMin) return false;

      const amen = state.amenities;
      if (amen.includes('parking') && !p.parking) return false;
      if (amen.includes('pool') && !p.pool) return false;
      if (amen.includes('garden') && !p.garden) return false;
      if (amen.includes('pets') && !p.pets) return false;
      if (amen.includes('furnished') && !p.furnished) return false;

      if (state.savedOnly && !getFavorites().includes(p.id)) return false;

      if (state.q) {
        const q = state.q.toLowerCase();
        const hay = (p.title + ' ' + p.address + ' ' + p.city + ' ' + p.state + ' ' + p.zip + ' ' + p.type).toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });

    switch (state.sort) {
      case 'lowest': list.sort((a, b) => a.price - b.price); break;
      case 'highest': list.sort((a, b) => b.price - a.price); break;
      case 'views': list.sort((a, b) => b.views - a.views); break;
      default: list.sort((a, b) => b.id - a.id);
    }
    return list;
  }

  /* ---------------- Rendering ---------------- */
  function render() {
    const list = getFiltered();
    const totalPages = Math.max(1, Math.ceil(list.length / PAGE_SIZE));
    if (state.page > totalPages) state.page = totalPages;
    const start = (state.page - 1) * PAGE_SIZE;
    const pageItems = list.slice(start, start + PAGE_SIZE);

    countEl.innerHTML = list.length
      ? `Showing <b>${start + 1}–${start + pageItems.length}</b> of <b>${list.length}</b> homes`
      : 'No homes match your filters';

    if (!list.length) {
      resultsEl.innerHTML = `
        <div class="empty">
          <div class="icon">🏠</div>
          <h3>No homes found</h3>
          <p>Try adjusting your filters or search term.</p>
          <button class="btn btn-soft" style="margin-top:14px" id="empty-reset">Reset filters</button>
        </div>`;
      const reset = $('#empty-reset');
      if (reset) reset.addEventListener('click', () => { resetFilters(); });
    } else {
      resultsEl.innerHTML = pageItems.map((p) => window.Realty.cardHTML(p, { actions: true })).join('');
    }

    renderPagination(totalPages);
    if (mapOpen) renderMap(list);
  }

  function renderPagination(totalPages) {
    if (totalPages <= 1) { paginationEl.innerHTML = ''; return; }
    let html = `<button class="page-btn" data-page="${state.page - 1}" ${state.page === 1 ? 'disabled' : ''}>‹</button>`;
    for (let i = 1; i <= totalPages; i++) {
      if (totalPages > 7 && i > 2 && i < totalPages - 1 && Math.abs(i - state.page) > 1) {
        if (html.endsWith('…</button>') === false) html += '<button class="page-btn" disabled>…</button>';
        continue;
      }
      html += `<button class="page-btn ${i === state.page ? 'active' : ''}" data-page="${i}">${i}</button>`;
    }
    html += `<button class="page-btn" data-page="${state.page + 1}" ${state.page === totalPages ? 'disabled' : ''}>›</button>`;
    paginationEl.innerHTML = html;
  }

  paginationEl.addEventListener('click', (e) => {
    const btn = e.target.closest('.page-btn');
    if (!btn || btn.disabled) return;
    state.page = +btn.dataset.page;
    render();
    window.scrollTo({ top: resultsEl.getBoundingClientRect().top + window.scrollY - 90, behavior: 'smooth' });
  });

  /* ---------------- View toggle ---------------- */
  $('#view-toggle').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-view]');
    if (!btn) return;
    state.view = btn.dataset.view;
    $$('#view-toggle .icon-btn').forEach((b) => b.classList.toggle('active', b === btn));
    resultsEl.classList.toggle('listing-grid', state.view === 'grid');
    resultsEl.classList.toggle('listing-list', state.view === 'list');
  });

  /* ---------------- Filter bindings ---------------- */
  function syncCheckPills(container) {
    if (!container) return;
    container.addEventListener('change', (e) => {
      const pill = e.target.closest('.check-pill');
      if (pill) {
        if (e.target.type === 'radio') {
          container.querySelectorAll('input[type="radio"]').forEach((r) => {
            if (r.closest('.check-pill')) r.closest('.check-pill').classList.remove('on');
          });
          pill.classList.add('on');
        } else {
          pill.classList.toggle('on', e.target.checked);
        }
      }
      applyAndRender();
    });
  }

  function syncSelect(sel, key) {
    const el = $(sel);
    el.addEventListener('change', () => { state[key] = +el.value; applyAndRender(); });
  }

  function syncNumber(sel, key) {
    const el = $(sel);
    el.addEventListener('input', () => {
      state[key] = el.value === '' ? null : +el.value;
      applyAndRender();
    });
  }

  function applyAndRender() {
    // category group
    state.categories = $$('#cat-group input:checked').map((i) => i.value);
    // type group
    state.types = $$('#type-group input:checked').map((i) => i.value);
    // status radio
    const statusRadio = $('#filters input[name="status"]:checked');
    state.status = statusRadio ? statusRadio.value : 'any';
    // amenities (status radio excluded)
    state.amenities = $$('.filters .fg-check input:checked')
      .filter((i) => i.name !== 'status')
      .filter((i) => !i.closest('#cat-group') && !i.closest('#type-group'))
      .map((i) => i.value);
    state.page = 1;
    render();
  }

  syncCheckPills($('.filters'));
  syncSelect('#f-beds', 'beds');
  syncSelect('#f-baths', 'baths');
  syncNumber('#f-price-min', 'priceMin');
  syncNumber('#f-price-max', 'priceMax');
  syncNumber('#f-sqft-min', 'sqftMin');
  syncNumber('#f-sqft-max', 'sqftMax');
  syncNumber('#f-year-min', 'yearMin');
  syncNumber('#f-year-max', 'yearMax');
  syncNumber('#f-lot-min', 'lotMin');

  $('#sort-select').addEventListener('change', (e) => { state.sort = e.target.value; state.page = 1; render(); });

  /* ---------------- Reset ---------------- */
  $('#reset-filters').addEventListener('click', resetFilters);
  function resetFilters() {
    state = Object.assign({}, state, {
      q: '', status: 'any', categories: [], priceMin: null, priceMax: null,
      beds: 0, baths: 0, types: [], sqftMin: null, sqftMax: null,
      yearMin: null, yearMax: null, lotMin: null, amenities: [],
      sort: 'newest', page: 1, savedOnly: false,
    });
    $('#browse-search').value = '';
    $('#sort-select').value = 'newest';
    $$('#filters input').forEach((i) => { i.checked = false; i.closest('.check-pill').classList.remove('on'); });
    const anyStatus = $('#filters input[name="status"][value="any"]');
    if (anyStatus) { anyStatus.checked = true; anyStatus.closest('.check-pill').classList.add('on'); }
    render();
  }

  /* ---------------- Search ---------------- */
  const searchInput = $('#browse-search');
  let searchTimer;
  searchInput.addEventListener('input', () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => { state.q = searchInput.value.trim(); state.page = 1; render(); }, 250);
  });
  $('#browse-search-clear').addEventListener('click', () => {
    searchInput.value = ''; state.q = ''; state.page = 1; render(); searchInput.focus();
  });

  /* ---------------- Nav search focuses browse search ---------------- */
  const navSearch = $('#nav-search');
  if (navSearch) {
    navSearch.addEventListener('click', (e) => {
      e.preventDefault();
      searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => searchInput.focus(), 350);
    });
  }

  /* ---------------- Save search ---------------- */
  function buildSearchQuery() {
    const p = new URLSearchParams();
    if (state.q) p.set('q', state.q);
    if (state.status !== 'any') p.set('status', state.status);
    if (state.categories.length) p.set('category', state.categories.join(','));
    if (state.types.length) p.set('type', state.types.join(','));
    if (state.priceMin != null) p.set('pmin', state.priceMin);
    if (state.priceMax != null) p.set('pmax', state.priceMax);
    if (state.beds) p.set('beds', state.beds);
    if (state.baths) p.set('baths', state.baths);
    if (state.sort !== 'newest') p.set('sort', state.sort);
    return p.toString();
  }
  function searchSummary() {
    const parts = [];
    if (state.status !== 'any') parts.push(state.status === 'rent' ? 'Rent' : 'For sale');
    if (state.categories.length && state.categories.length < 4) parts.push(state.categories.map(c => c[0].toUpperCase() + c.slice(1)).join(', '));
    if (state.priceMin != null || state.priceMax != null) parts.push('$' + (state.priceMin ?? 0) + '–' + (state.priceMax ?? '∞'));
    if (state.beds) parts.push(state.beds + '+ beds');
    if (state.types.length) parts.push(state.types.join(', '));
    return parts.join(' · ') || 'All homes';
  }
  const saveSearchBtn = $('#save-search');
  if (saveSearchBtn) {
    saveSearchBtn.addEventListener('click', () => {
      let searches = (window.Dash && window.Dash.getSearches) ? window.Dash.getSearches() : [];
      searches.unshift({
        id: Date.now(),
        name: state.q ? 'Search: "' + state.q + '"' : 'All homes',
        query: buildSearchQuery(),
        summary: searchSummary(),
        at: Date.now(),
      });
      if (window.Dash && window.Dash.saveSearches) window.Dash.saveSearches(searches.slice(0, 20));
      else localStorage.setItem('realtor_searches', JSON.stringify(searches.slice(0, 20)));
      window.Realty.toast('Search saved! Find it in your client dashboard.');
    });
  }

  /* ---------------- Init from URL ---------------- */
  function setNumber(sel, val) { const el = $(sel); if (el) el.value = val; }
  function initFromParams() {
    if (params.get('q')) {
      searchInput.value = params.get('q');
    }
    if (params.get('status')) {
      const pill = $('#filters input[name="status"][value="' + params.get('status') + '"]');
      if (pill) {
        $$('#filters input[name="status"]').forEach((i) => { i.checked = false; i.closest('.check-pill').classList.remove('on'); });
        pill.checked = true;
        pill.closest('.check-pill').classList.add('on');
      }
    }
    if (params.get('category')) {
      const cats = params.get('category').split(',');
      $$('#cat-group input').forEach((i) => { i.checked = false; i.closest('.check-pill').classList.remove('on'); });
      cats.forEach((cat) => {
        const pill = $('#cat-group input[value="' + cat.trim() + '"]');
        if (pill) { pill.checked = true; pill.closest('.check-pill').classList.add('on'); }
      });
    }
    if (params.get('type')) {
      const types = params.get('type').split(',');
      $$('#type-group input').forEach((i) => { i.checked = false; i.closest('.check-pill').classList.remove('on'); });
      types.forEach((t) => {
        const pill = $('#type-group input[value="' + t.trim() + '"]');
        if (pill) { pill.checked = true; pill.closest('.check-pill').classList.add('on'); }
      });
    }
    if (params.get('pmin')) { state.priceMin = +params.get('pmin'); setNumber('#f-price-min', params.get('pmin')); }
    if (params.get('pmax')) { state.priceMax = +params.get('pmax'); setNumber('#f-price-max', params.get('pmax')); }
    if (params.get('beds')) { state.beds = +params.get('beds'); $('#f-beds').value = params.get('beds'); }
    if (params.get('baths')) { state.baths = +params.get('baths'); $('#f-baths').value = params.get('baths'); }
    if (params.get('sort') && $('#sort-select').querySelector('option[value="' + params.get('sort') + '"]')) {
      state.sort = params.get('sort');
      $('#sort-select').value = params.get('sort');
    }
  }

  whenFirebase(() => {
    initFromParams();
    applyAndRender();
    const openId = params.get('id');
    if (openId) window.Realty.openProperty(+openId);
  });
})();


/* ---------------- next module ---------------- */

/* =========================================================
   Realty Homes — admin dashboard controller
   ========================================================= */
(function () {
  'use strict';

  if (!document.getElementById('props-table')) return;

  const D = window.Dash;
  if (!D) return;
  const { $, $$, esc, getStore, setStore, initials, timeAgo, fmtDate, toast } = D;

  let user = null;
  function gateAdmin() {
    const u = D.requireAuth('admin');
    if (!u) return false;
    user = u;
    return true;
  }

  window.Dash.pageTitle = 'Admin Dashboard';
  const AGENT_EMAIL = primaryAgentEmail() || 'admin@realtyhomes.com';

  /* ---------------- Badges ---------------- */
  function refreshBadges() {
    const props = D.getProps();
    const leads = getStore('realtor_leads');
    const viewings = getStore('realtor_viewings');
    setBadge('nav-count-props', props.length);
    setBadge('nav-count-users', getStore('realtor_users').length);
    setBadge('nav-count-leads', leads.filter((l) => l.status === 'new' && (l.at || 0) >= D.seenSince('leads')).length);
    setBadge('nav-count-viewings', viewings.filter((v) => (v.viewingStatus === 'new' || v.viewingStatus === 'confirmed') && (v.at || 0) >= D.seenSince('viewings')).length);
    const F = window.Firebase;
    if (F && F.listUsers) F.listUsers().then(() => setBadge('nav-count-users', F.usersCache.list.length));
  }
  function setBadge(id, n) {
    const el = $('#' + id);
    if (!el) return;
    el.textContent = n;
    el.style.display = n ? 'inline-flex' : 'none';
  }

  /* ---------------- Overview ---------------- */
  function statCard(icon, cls, val, label, trend) {
    return `<div class="stat-card">
      <div class="stat-ico ${cls}">${icon}</div>
      <div><b>${val}</b><span>${label}</span>
      ${trend ? `<span class="trend ${trend.cls}">${trend.txt}</span>` : ''}</div>
    </div>`;
  }

  function renderOverview() {
    const props = D.getProps();
    const leads = getStore('realtor_leads');
    const viewings = getStore('realtor_viewings');
    const forSale = props.filter((p) => p.status === 'sale').length;
    const forRent = props.filter((p) => p.status === 'rent').length;
    const totalValue = props.reduce((s, p) => s + (p.status === 'sale' ? +p.price || 0 : 0), 0);
    const newLeads = leads.filter((l) => l.status === 'new').length;
    const pending = viewings.filter((v) => v.viewingStatus === 'new' || v.viewingStatus === 'confirmed').length;

    $('#stat-cards').innerHTML =
      statCard(ICONS.home, '', props.length, 'Total listings', { cls: 'up', txt: forSale + ' for sale · ' + forRent + ' for rent' }) +
      statCard(ICONS.location, 'blue', forSale, 'Properties for sale') +
      statCard(ICONS.area, 'purple', forRent, 'Rental listings') +
      statCard(ICONS.grid, 'amber', '$' + (totalValue / 1e6).toFixed(1) + 'M', 'Portfolio value (sales)') +
      statCard(ICONS.users, 'green', newLeads, 'New leads', { cls: 'up', txt: 'need follow-up' }) +
      statCard(ICONS.calendar, 'blue', pending, 'Pending viewings');

    renderCategoryChart(props);
    renderStatusChart(props);
    renderRecentLeads(leads);
    renderRecentMessages(getStore('realtor_messages'));
  }

  const CAT_LABELS = { luxury: 'Luxury', residential: 'Residential', commercial: 'Commercial', land: 'Land' };
  function renderCategoryChart(props) {
    const cats = ['luxury', 'residential', 'commercial', 'land'];
    const counts = cats.map((c) => ({ label: CAT_LABELS[c], val: props.filter((p) => p.category === c).length }));
    const max = Math.max.apply(null, counts.map((c) => c.val).concat([1]));
    $('#chart-category').innerHTML = counts.map((c, i) => `
      <div class="chart-bar-row">
        <span class="lbl">${c.label}</span>
        <div class="chart-track"><div class="chart-fill ${['', 'blue', 'purple', 'green'][i]}" style="width:${Math.round((c.val / max) * 100)}%"></div></div>
        <span class="val">${c.val}</span>
      </div>`).join('');
  }

  function renderStatusChart(props) {
    const sale = props.filter((p) => p.status === 'sale').length;
    const rent = props.filter((p) => p.status === 'rent').length;
    const total = sale + rent || 1;
    const items = [
      { label: 'For sale', val: sale, color: '#0f766e' },
      { label: 'For rent', val: rent, color: '#60a5fa' },
    ];
    let acc = 0;
    const stops = items.map((it) => {
      const from = (acc / total) * 360; acc += it.val;
      const to = (acc / total) * 360;
      return `${it.color} ${from}deg ${to}deg`;
    });
    $('#chart-status').innerHTML = `
      <div class="donut-wrap">
        <div class="donut" style="background:conic-gradient(${stops.join(',')})">
          <div class="donut-center"><b>${sale + rent}</b><span>listings</span></div>
        </div>
        <div class="legend">${items.map((it) => `
          <span><i style="background:${it.color}"></i>${it.label}<b>${it.val}</b></span>`).join('')}
        </div>
      </div>`;
  }

  function leadRow(l) {
    return `<div class="msg-item">
      <div class="dash-avatar">${initials(l.name || l.email)}</div>
      <div style="flex:1;min-width:0">
        <b>${esc(l.name || l.email)}</b>
        <span class="tag-badge status-${l.status}">${l.status}</span>
        <p>${esc(l.type === 'valuation' ? (l.address || l.message || 'Valuation request') : (l.phone || 'Consultation request'))}</p>
      </div>
      <time>${timeAgo(l.at)}</time>
    </div>`;
  }
  function renderRecentLeads(leads) {
    const list = leads.slice().sort((a, b) => (b.at || 0) - (a.at || 0)).slice(0, 4);
    $('#recent-leads').innerHTML = list.length ? list.map(leadRow).join('') : `<p class="dash-hint">No leads yet.</p>`;
  }
  function renderRecentMessages(msgs) {
    const list = msgs.slice().sort((a, b) => (b.at || 0) - (a.at || 0)).slice(0, 4);
    $('#recent-messages').innerHTML = list.length ? list.map((m) => `
      <div class="msg-item ${m.read ? '' : 'unread'}">
        <div class="dash-avatar">${initials(m.fromName || m.from)}</div>
        <div style="flex:1;min-width:0">
          <b class="name">${esc(m.fromName || m.from)}</b>
          <p>${esc(m.subject || '')} — ${esc(m.body || '')}</p>
        </div>
        <time>${timeAgo(m.at)}</time>
      </div>`).join('') : `<p class="dash-hint">No messages yet.</p>`;
  }

  /* ---------------- Properties ---------------- */
  let propSearch = '', propStatus = 'all', propCat = 'all';

  function renderProps() {
    const props = D.getProps().filter((p) => {
      const q = propSearch.toLowerCase();
      const matchQ = !q || (p.title + ' ' + p.city + ' ' + p.address).toLowerCase().indexOf(q) !== -1;
      return matchQ && (propStatus === 'all' || p.status === propStatus) && (propCat === 'all' || p.category === propCat);
    });
    $('#props-empty').hidden = props.length > 0;
    $('#props-table').innerHTML = props.length ? `
      <thead><tr>
        <th>Property</th><th>Status</th><th>Price</th><th>Beds</th><th>Baths</th><th>Views</th><th>Featured</th><th></th>
      </tr></thead>
      <tbody>
      ${props.map((p) => `
        <tr>
          <td><div class="td-prop"><img src="${p.primary}" alt=""><div><b>${esc(p.title)}</b><span>${esc(p.address)}, ${esc(p.city)}</span></div></div></td>
          <td><span class="tag-badge ${p.status}">${p.status === 'rent' ? 'Rent' : 'Sale'}</span> <span class="tag-badge ${p.category}">${CAT_LABELS[p.category] || p.category}</span></td>
          <td><b>${formatPrice(p)}</b></td>
          <td>${p.beds}</td>
          <td>${p.baths}</td>
          <td>${p.views || 0}</td>
          <td>${p.featured ? '<span style="color:var(--brand);font-weight:800">★</span>' : '—'}</td>
          <td><div class="td-actions">
            <button class="icon-btn" data-edit-prop="${p.id}" title="Edit">${ICONS.pencil || '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>'}</button>
            <button class="icon-btn danger" data-del-prop="${p.id}" title="Delete">${ICONS.trash || '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>'}</button>
          </div></td>
        </tr>`).join('')}
      </tbody>` : '';
    refreshBadges();
  }

  const PROP_FORM = (p) => {
    p = p || {};
    const sel = (name, val) => val === p[name] ? ' selected' : '';
    return `
    <form id="prop-form" class="form-grid">
      <div class="field full"><label>Title</label><input name="title" required value="${esc(p.title || '')}" placeholder="Modern Family Home"></div>
      <div class="field"><label>Type</label><select name="type">
        ${['House', 'Villa', 'Apartment', 'Condo', 'Townhouse', 'Commercial', 'Land'].map((t) => `<option${sel('type', t)}>${t}</option>`).join('')}
      </select></div>
      <div class="field"><label>Status</label><select name="status">
        <option value="sale"${sel('status', 'sale')}>For sale</option>
        <option value="rent"${sel('status', 'rent')}>For rent</option>
      </select></div>
      <div class="field"><label>Category</label><select name="category">
        ${['luxury', 'residential', 'commercial', 'land'].map((c) => `<option value="${c}"${sel('category', c)}>${CAT_LABELS[c]}</option>`).join('')}
      </select></div>
      <div class="field"><label>Price</label><input type="number" name="price" min="0" required value="${p.price || ''}"></div>
      <div class="field"><label>Address</label><input name="address" required value="${esc(p.address || '')}"></div>
      <div class="field"><label>City</label><input name="city" required value="${esc(p.city || '')}"></div>
      <div class="field"><label>State</label><input name="state" value="${esc(p.state || '')}"></div>
      <div class="field"><label>ZIP</label><input name="zip" value="${esc(p.zip || '')}"></div>
      <div class="field"><label>Bedrooms</label><input type="number" name="beds" min="0" value="${p.beds != null ? p.beds : 3}"></div>
      <div class="field"><label>Bathrooms</label><input type="number" name="baths" min="0" value="${p.baths != null ? p.baths : 2}"></div>
      <div class="field"><label>Area (sqft)</label><input type="number" name="area" min="0" value="${p.area != null ? p.area : 1800}"></div>
      <div class="field"><label>Year built</label><input type="number" name="yearBuilt" min="0" value="${p.yearBuilt || 2015}"></div>
      <div class="field"><label>Lot size (acres)</label><input type="number" name="lotSize" step="0.01" min="0" value="${p.lotSize || ''}"></div>
      <div class="field"><label>Image URL</label><input name="img" id="prop-img-url" value="${esc(p.primary || '')}" placeholder="https://…"></div>
      <div class="field"><label>Sample image</label><select id="prop-img-pick">
        <option value="">Choose a sample…</option>
        ${HOUSE_IMGS.slice(0, 12).map((id, i) => `<option value="${id}">Sample ${i + 1}</option>`).join('')}
      </select></div>
      <div class="field full checks-row">
        ${[['featured', 'Featured'], ['parking', 'Parking'], ['pool', 'Pool'], ['garden', 'Garden'], ['pets', 'Pets allowed'], ['furnished', 'Furnished']].map(([k, l]) => `
          <label class="check-tag ${p[k] ? 'on' : ''}"><input type="checkbox" name="${k}" ${p[k] ? 'checked' : ''}>${l}</label>`).join('')}
      </div>
      <div class="field full"><label>Description</label><textarea name="desc" rows="3" placeholder="Describe the property…">${esc(p.desc || '')}</textarea></div>
      <div class="field full" style="display:flex;gap:10px">
        <button class="btn btn-primary" type="submit">${p.id ? 'Save changes' : 'Add property'}</button>
        <button class="btn btn-ghost" type="button" data-dm-close>Cancel</button>
      </div>
    </form>`;
  };

  function savePropFromForm(id) {
    const form = $('#prop-form');
    const f = Object.fromEntries(new FormData(form).entries());
    const props = D.getProps();
    const base = {
      type: f.type, status: f.status, category: f.category,
      price: +f.price || 0, address: f.address, city: f.city, state: f.state || 'CA', zip: f.zip || '90210',
      beds: +f.beds || 0, baths: +f.baths || 0, area: +f.area || 0, yearBuilt: +f.yearBuilt || 0,
      lotSize: +f.lotSize || 0, desc: f.desc || '',
      parking: !!f.parking, pool: !!f.pool, garden: !!f.garden, pets: !!f.pets,
      furnished: !!f.furnished, featured: !!f.featured,
    };
    let prop;
    if (id) {
      prop = props.find((x) => x.id === id);
      if (prop) Object.assign(prop, base);
    } else {
      const next = Math.max(0, ...props.map((x) => +x.id || 0)) + 1;
      const img = f.img || U(HOUSE_IMGS[(next - 1) % HOUSE_IMGS.length], 800);
      prop = Object.assign({ id: next, imgs: [img], primary: img, img, views: 0 }, base);
      props.push(prop);
    }
    if (id && prop) { prop.primary = f.img || prop.primary; prop.imgs = [prop.primary, ...(prop.imgs || []).slice(1, 3)]; }
    D.saveProps();
    D.closeDashModal();
    renderProps();
    toast(id ? 'Property updated' : 'Property added', 'success');
  }

  function openPropModal(id) {
    const p = id ? D.getProps().find((x) => x.id === id) : null;
    const box = D.openDashModal(PROP_FORM(p), p ? 'Edit property' : 'Add property');
    const pick = $('#prop-img-pick');
    if (pick) pick.addEventListener('change', () => {
      if (pick.value) $('#prop-img-url').value = U(pick.value, 800);
    });
    $('#prop-form').addEventListener('submit', (e) => { e.preventDefault(); savePropFromForm(id); });
  }

  function confirmDelete(title, msg, onYes) {
    D.openDashModal(`
      <div style="text-align:center;padding:8px 4px">
        <div class="big" style="font-size:2.2rem;margin-bottom:10px">🗑️</div>
        <h3 style="margin-bottom:6px">${esc(title)}</h3>
        <p style="color:var(--muted);margin-bottom:20px">${esc(msg)}</p>
        <div style="display:flex;gap:10px;justify-content:center">
          <button class="btn btn-danger" id="confirm-yes">Yes, delete</button>
          <button class="btn btn-ghost" data-dm-close>Cancel</button>
        </div>
      </div>`);
    $('#confirm-yes').addEventListener('click', () => { D.closeDashModal(); onYes(); });
  }

  /* ---------------- Leads ---------------- */
  let leadFilter = 'all';
  function renderLeads() {
    const leads = getStore('realtor_leads').slice().sort((a, b) => (b.at || 0) - (a.at || 0));
    const list = leads.filter((l) => {
      if (leadFilter === 'new') return l.status === 'new';
      if (leadFilter === 'all') return true;
      return l.type === leadFilter;
    });
    $('#leads-empty').hidden = list.length > 0;
    $('#leads-table').innerHTML = list.length ? `
      <thead><tr><th>Lead</th><th>Type</th><th>Details</th><th>Status</th><th>Received</th><th></th></tr></thead>
      <tbody>${list.map((l) => `
        <tr>
          <td><div class="td-prop"><div class="dash-avatar">${initials(l.name || l.email)}</div><div><b>${esc(l.name || '—')}</b><span>${esc(l.email || '')}</span></div></div></td>
          <td><span class="tag-badge ${l.type === 'valuation' ? 'luxury' : 'commercial'}">${l.type}</span></td>
          <td style="max-width:240px"><span style="color:var(--muted)">${esc(l.type === 'valuation' ? (l.address || l.message || '—') : ((l.phone || '') + (l.date ? ' · ' + l.date : '')))}</span></td>
          <td><select class="select-field" data-lead-status="${l.at}">
            ${['new', 'contacted', 'closed'].map((s) => `<option value="${s}"${l.status === s ? ' selected' : ''}>${s}</option>`).join('')}
          </select></td>
          <td>${timeAgo(l.at)}</td>
          <td><div class="td-actions"><button class="icon-btn danger" data-del-lead="${l.at}" title="Delete"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></button></div></td>
        </tr>`).join('')}</tbody>` : '';
    refreshBadges();
  }

  /* ---------------- Viewings ---------------- */
  function renderViewings() {
    const viewings = getStore('realtor_viewings').slice().sort((a, b) => (b.at || 0) - (a.at || 0));
    $('#viewings-empty').hidden = viewings.length > 0;
    $('#viewings-table').innerHTML = viewings.length ? `
      <thead><tr><th>Property</th><th>Client</th><th>Preferred</th><th>Requested</th><th>Status</th><th></th></tr></thead>
      <tbody>${viewings.map((v) => `
        <tr>
          <td><b>${esc(v.title || 'Property #' + v.propId)}</b><br><span class="tag-badge ${v.status}">${v.status === 'rent' ? 'Rent' : 'Sale'}</span></td>
          <td><b>${esc(v.name || '—')}</b><br><span style="color:var(--muted);font-size:.82rem">${esc(v.email || '')}</span></td>
          <td>${esc(v.date || '—')}<br><span style="color:var(--muted);font-size:.82rem">${esc(v.time || '')}</span></td>
          <td>${timeAgo(v.at)}</td>
          <td><select class="select-field" data-view-status="${v.at}">
            ${['new', 'confirmed', 'completed', 'cancelled'].map((s) => `<option value="${s}"${v.viewingStatus === s ? ' selected' : ''}>${s}</option>`).join('')}
          </select></td>
          <td><div class="td-actions"><button class="icon-btn danger" data-del-view="${v.at}" title="Delete"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></button></div></td>
        </tr>`).join('')}</tbody>` : '';
    refreshBadges();
  }

  /* ---------------- Messages ---------------- */
  let activeConvo = null;

  function conversations() {
    const msgs = getStore('realtor_messages');
    const map = {};
    msgs.forEach((m) => {
      const fromClient = m.to && m.to.toLowerCase().indexOf('realtyhomes') !== -1;
      const key = (fromClient ? m.from : m.to) || '';
      if (!key) return;
      if (!map[key]) map[key] = { email: key, name: fromClient ? m.fromName : key, msgs: [] };
      map[key].msgs.push(m);
    });
    return Object.keys(map).map((k) => {
      const c = map[k];
      c.msgs.sort((a, b) => (a.at || 0) - (b.at || 0));
      c.last = c.msgs[c.msgs.length - 1];
      return c;
    }).sort((a, b) => (b.last.at || 0) - (a.last.at || 0));
  }

  function renderConvos() {
    const convos = conversations();
    $('#convo-empty').hidden = convos.length > 0;
    $('#convo-list').innerHTML = convos.map((c) => {
      const phoneMsg = c.msgs.find((m) => m.phone);
      return `
      <div class="msg-item ${c.msgs.some((m) => !m.read && m.to && m.to.indexOf('realtyhomes') !== -1) ? 'unread' : ''}" data-convo="${esc(c.email)}">
        <div class="dash-avatar">${initials(c.name)}</div>
        <div style="flex:1;min-width:0">
          <b class="name">${esc(c.name)}</b>
          ${phoneMsg && phoneMsg.phone ? `<span style="font-size:.75rem;color:var(--muted)">${esc(phoneMsg.phone)}</span>` : ''}
          <p>${esc(c.last.body || '')}</p>
        </div>
        <time>${timeAgo(c.last.at)}</time>
      </div>`;
    }).join('');
  }

  function renderThread() {
    const title = $('#thread-title');
    const body = $('#thread-body');
    const form = $('#thread-form');
    if (!activeConvo) {
      title.textContent = 'Select a conversation';
      body.innerHTML = `<p class="dash-hint">Choose a conversation from the list to read and reply.</p>`;
      form.hidden = true;
      return;
    }
    const conv = conversations().find((c) => c.email === activeConvo);
    if (!conv) { title.textContent = 'Select a conversation'; form.hidden = true; body.innerHTML = ''; return; }
    const phoneMsg = conv.msgs.find((m) => m.phone);
    title.innerHTML = `<span style="font-size:1rem">${esc(conv.name)}</span>` +
      (phoneMsg && phoneMsg.phone ? `<span style="font-size:.78rem;color:var(--muted);margin-left:8px">· ${esc(phoneMsg.phone)}</span>` : '');
    const msgs = getStore('realtor_messages');
    let changed = false;
    msgs.forEach((m) => {
      if (m.from === conv.email && m.to && m.to.indexOf('realtyhomes') !== -1 && !m.read) { m.read = true; changed = true; }
    });
    if (changed) { setStore('realtor_messages', msgs); refreshBadges(); D.renderUser(); }
    body.innerHTML = conv.msgs.map((m) => {
      const fromClient = m.from === conv.email;
      return `<div class="bubble ${fromClient ? 'in' : 'out'}">${esc(m.body || '')}<time>${fmtDate(m.at)} · ${timeAgo(m.at)}</time></div>`;
    }).join('');
    form.hidden = false;
    $('#thread-input').placeholder = 'Reply to ' + esc(conv.name) + '…';
  }

  const ADMIN_NAME = (user && user.name) || 'Realty Homes Admin';

  function sendReply() {
    const input = $('#thread-input');
    if (!input || !activeConvo || !input.value.trim()) return;
    const msgs = getStore('realtor_messages');
    const last = msgs.slice().sort((a, b) => (b.at || 0) - (a.at || 0))[0];
    msgs.push({
      id: (last ? last.id : 0) + 1,
      from: AGENT_EMAIL, fromName: ADMIN_NAME,
      to: activeConvo,
      subject: 'RE: your message',
      body: input.value.trim(), read: true, at: Date.now(),
    });
    setStore('realtor_messages', msgs);
    input.value = '';
    renderConvos();
    renderThread();
    refreshBadges();
  }

  function openComposeModal() {
    const box = D.openDashModal(`
      <form id="compose-msg-form" class="form-grid">
        <div class="field full"><label>Recipient email</label><input type="email" name="to" required placeholder="client@email.com"></div>
        <div class="field full"><label>Subject</label><input name="subject" required value="Hello from Realty Homes"></div>
        <div class="field full"><label>Message</label><textarea name="body" rows="4" required placeholder="Write your message…"></textarea></div>
        <div class="field full" style="display:flex;gap:10px">
          <button class="btn btn-primary" type="submit">Send message</button>
          <button class="btn btn-ghost" type="button" data-dm-close>Cancel</button>
        </div>
      </form>`, 'New message');
    $('#compose-msg-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const f = Object.fromEntries(new FormData(e.target).entries());
      const msgs = getStore('realtor_messages');
      const last = msgs.slice().sort((a, b) => (b.id || 0) - (a.id || 0))[0];
      msgs.push({
        id: (last ? last.id : 0) + 1,
        from: AGENT_EMAIL, fromName: ADMIN_NAME,
        to: f.to.trim(),
        subject: f.subject.trim(),
        body: f.body.trim(),
        read: true, at: Date.now(),
      });
      setStore('realtor_messages', msgs);
      activeConvo = f.to.trim();
      D.closeDashModal();
      renderConvos(); renderThread();
      refreshBadges();
      toast('Message sent', 'success');
    });
  }

  /* ---------------- Agents ---------------- */
  function defaultAgents() { return D.getAgents(); }
  function getAgents() { return D.getAgents(); }
  function renderAgents() {
    const agents = getAgents();
    $('#agent-grid').innerHTML = agents.map((a) => `
      <div class="agent-card-mini">
        ${a.photo
          ? `<div class="dash-avatar img" data-src="${esc(a.photo)}"></div>`
          : `<div class="dash-avatar">${initials(a.name)}</div>`}
        <div style="flex:1;min-width:0">
          <h3>${esc(a.name)}</h3>
          <div class="role">${esc(a.role)}</div>
          <div class="stats">
            <div><b>${a.sales || 0}</b> sales</div>
            <div><b>${a.rating || '—'}</b> rating</div>
          </div>
          <p style="font-size:.82rem;color:var(--muted)">${esc(a.email)}</p>
          <div class="td-actions" style="margin-top:10px">
            <button class="btn btn-ghost btn-sm" data-edit-agent="${a.id}">Edit</button>
            <button class="btn btn-danger-soft btn-sm" data-del-agent="${a.id}">Remove</button>
          </div>
        </div>
      </div>`).join('') || `<p class="dash-hint">No agents yet.</p>`;
    $$('.dash-avatar.img').forEach((el) => {
      const src = el.dataset.src;
      el.innerHTML = src ? `<img src="${src}" alt="">` : initials(el.parentElement.querySelector('h3').textContent);
    });
  }
  function openAgentModal(id) {
    const a = id ? getAgents().find((x) => x.id === id) : null;
    const box = D.openDashModal(`
      <form id="agent-form" class="form-grid">
        <div class="field full"><label>Full name</label><input name="name" required value="${esc(a ? a.name : '')}"></div>
        <div class="field full"><label>Role</label><input name="role" required value="${esc(a ? a.role : '')}"></div>
        <div class="field"><label>Email</label><input type="email" name="email" value="${esc(a ? a.email : '')}"></div>
        <div class="field"><label>Phone</label><input name="phone" value="${esc(a ? a.phone : '')}"></div>
        <div class="field"><label>Years experience</label><input type="number" name="years" min="0" value="${a && a.years != null ? a.years : 0}"></div>
        <div class="field"><label>Sales</label><input type="number" name="sales" min="0" value="${a ? a.sales : 0}"></div>
        <div class="field"><label>Rating</label><input type="number" name="rating" step="0.1" min="0" max="5" value="${a ? a.rating : 4.9}"></div>
        <div class="field full"><label>Photo URL (optional)</label><input name="photo" value="${esc(a ? a.photo : '')}"></div>
        <div class="field full"><label>Bio (shown on the homepage)</label><textarea name="intro" rows="3">${esc(a ? (a.intro || '') : '')}</textarea></div>
        <div class="field full" style="display:flex;gap:10px">
          <button class="btn btn-primary" type="submit">${a ? 'Save changes' : 'Add agent'}</button>
          <button class="btn btn-ghost" type="button" data-dm-close>Cancel</button>
        </div>
      </form>`, a ? 'Edit agent' : 'Add agent');
    $('#agent-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const f = Object.fromEntries(new FormData(e.target).entries());
      const agents = getAgents();
      if (id) {
        const t = agents.find((x) => x.id === id);
        if (t) Object.assign(t, f, { sales: +f.sales || 0, rating: +f.rating || 0, years: +f.years || 0 });
      } else {
        agents.push({ id: Math.max(0, ...agents.map((x) => x.id)) + 1, ...f, sales: +f.sales || 0, rating: +f.rating || 0, years: +f.years || 0 });
      }
      D.saveAgents(agents);
      D.closeDashModal();
      renderAgents();
      toast(id ? 'Agent updated' : 'Agent added', 'success');
    });
  }

  /* ---------------- Settings ---------------- */
  function getSettings() {
    return D.getSettings();
  }
  function renderSettings() {
    const s = getSettings();
    const form = $('#settings-form');
    if (!form) return;
    const fields = ['siteName', 'phone', 'email', 'commission', 'facebook', 'instagram'];
    fields.forEach((k) => {
      const el = form.querySelector('[name="' + k + '"]');
      if (el) el.value = s[k] || '';
    });
    renderUsers();
  }

  function renderUsers() {
    const el = $('#users-table');
    if (!el) return;
    const F = window.Firebase;
    if (!F) return;
    F.listUsers().then(() => {
      const users = F.usersCache.list;
      const me = D.currentUser();
      const myEmail = me && me.email ? String(me.email).toLowerCase() : '';
      const sorted = users.slice().sort((a, b) => (b.at || 0) - (a.at || 0));
      $('#users-empty').hidden = sorted.length > 0;
      el.innerHTML = sorted.length ? `
        <thead><tr><th>User</th><th>Role</th><th>Status</th><th>Joined</th><th></th></tr></thead>
        <tbody>${sorted.map((u) => {
          const active = u.active !== false;
          const isMe = String(u.email || '').toLowerCase() === myEmail;
          return `
          <tr class="${active ? '' : 'row-muted'}">
            <td><div class="td-prop"><div class="dash-avatar">${initials(u.name || u.email)}</div><div><b>${esc(u.name || '—')}${isMe ? ' <em style="color:var(--muted);font-weight:600">(you)</em>' : ''}</b><span>${esc(u.email || '')}</span></div></div></td>
            <td><span class="tag-badge ${u.role === 'admin' ? 'status-confirmed' : 'status-contacted'}">${u.role === 'admin' ? 'Admin' : 'Client'}</span></td>
            <td><span class="tag-badge ${active ? 'status-confirmed' : 'status-cancelled'}">${active ? 'Active' : 'Deactivated'}</span></td>
            <td>${u.at ? fmtDate(u.at) : '—'}</td>
            <td><div class="td-actions">${isMe
              ? '<span class="dash-hint" style="margin:0">—</span>'
              : `<button class="btn btn-soft btn-sm" data-user-role="${esc(u.email)}">${u.role === 'admin' ? 'Make client' : 'Make admin'}</button>
                 <button class="btn ${active ? 'btn-danger-soft' : 'btn-primary'} btn-sm" data-user-toggle="${esc(u.email)}">${active ? 'Deactivate' : 'Activate'}</button>`}
            </div></td>
          </tr>`; }).join('')}</tbody>` : '';
      setBadge('nav-count-users', sorted.length);
    });
  }

  const sf = $('#settings-form');
  if (sf) sf.addEventListener('submit', (e) => {
    e.preventDefault();
    const s = {};
    new FormData(sf).forEach((v, k) => { s[k] = v; });
    const F = window.Firebase;
    if (F && F.store) {
      F.store.set('realtor_settings', s);
      F.store.commit();
    }
    toast('Settings saved');
  });

  /* ---------------- Hero ---------------- */
  function getHero() {
    return window.Firebase ? window.Firebase.store.getObj('realtor_hero', {}) : {};
  }
  function setHero(h) {
    if (!window.Firebase) return;
    window.Firebase.store.set('realtor_hero', h);
    window.Firebase.store.commit();
  }
  function addHeroImg(url) {
    url = String(url || '').trim();
    if (!/^https?:\/\//i.test(url)) { toast('Enter a valid image URL'); return; }
    const h = getHero();
    if (!Array.isArray(h.images)) h.images = [];
    if (h.images.includes(url)) { toast('That image is already in the hero'); return; }
    h.images.push(url);
    setHero(h);
    renderHero();
    toast('Hero image added');
  }
  function renderHero() {
    const h = getHero();
    const imgs = Array.isArray(h.images) ? h.images : [];
    const list = $('#hero-imgs');
    if (list) {
      list.innerHTML = imgs.length
        ? imgs.map((url, i) =>
            '<div class="hero-row">' +
              '<span class="hero-thumb" style="background-image:url(\'' + esc(url) + '\')"></span>' +
              '<span class="grow hero-img-url" title="' + esc(url) + '">' + esc(url) + '</span>' +
              '<button class="btn btn-danger btn-sm" data-del-hero-img="' + i + '">Remove</button>' +
            '</div>').join('')
        : '<p class="dash-hint">No custom hero images yet — the default hero image is used.</p>';
    }
    const feat = $('#hero-featured');
    if (feat) {
      feat.innerHTML = D.getProps().map((p) =>
        '<div class="hero-row">' +
          '<span class="hero-thumb" style="background-image:url(\'' + esc(p.primary) + '\')"></span>' +
          '<span class="grow hero-feat-name">' + esc(p.title) + ' <em>' + esc(p.city) + '</em></span>' +
          '<span class="hero-feat-price">' + D.formatPrice(p) + '</span>' +
          '<button class="btn btn-sm ' + (p.featured ? 'btn-primary' : 'btn-soft') + '" data-hero-feat="' + p.id + '">' +
            (p.featured ? '&#9733; Featured' : '&#9734; Add to hero') + '</button>' +
        '</div>').join('');
    }
  }

  /* ---------------- Delegated events ---------------- */
  document.addEventListener('click', (e) => {
    const t = e.target;
    if (t.closest('[data-convo]')) {
      activeConvo = t.closest('[data-convo]').dataset.convo;
      renderConvos(); renderThread();
    } else if (t.closest('#btn-new-msg')) {
      openComposeModal();
    } else if (t.closest('#btn-add-prop')) {
      openPropModal();
    } else if (t.closest('[data-edit-prop]')) {
      openPropModal(+t.closest('[data-edit-prop]').dataset.editProp);
    } else if (t.closest('[data-del-prop]')) {
      const id = +t.closest('[data-del-prop]').dataset.delProp;
      const p = D.getProps().find((x) => x.id === id);
      confirmDelete('Delete property?', (p ? p.title : 'Property') + ' will be removed from the site.', () => {
        recordDeletedProp(id);
        D.getProps().splice(D.getProps().findIndex((x) => x.id === id), 1);
        D.saveProps().then(() => renderProps());
        toast('Property deleted');
      });
    } else if (t.closest('[data-del-lead]')) {
      const key = t.closest('[data-del-lead]').dataset.delLead;
      setStore('realtor_leads', getStore('realtor_leads').filter((l) => String(l.at) !== key));
      renderLeads(); toast('Lead deleted');
    } else if (t.closest('[data-del-view]')) {
      const key = t.closest('[data-del-view]').dataset.delView;
      setStore('realtor_viewings', getStore('realtor_viewings').filter((v) => String(v.at) !== key));
      renderViewings(); toast('Viewing deleted');
    } else if (t.closest('#btn-add-agent')) {
      openAgentModal();
    } else if (t.closest('[data-edit-agent]')) {
      openAgentModal(+t.closest('[data-edit-agent]').dataset.editAgent);
    } else if (t.closest('[data-del-agent]')) {
      const id = +t.closest('[data-del-agent]').dataset.delAgent;
      const agents = getAgents();
      D.saveAgents(agents.filter((a) => a.id !== id));
      renderAgents(); toast('Agent removed');
    } else if (t.closest('[data-user-role]')) {
      const email = t.closest('[data-user-role]').dataset.userRole;
      const F = window.Firebase;
      const u = (F && F.usersCache.list) ? F.usersCache.list.find((x) => String(x.email || '').toLowerCase() === String(email || '').toLowerCase()) : null;
      if (u && u.uid) {
        const newRole = u.role === 'admin' ? 'client' : 'admin';
        F.db.collection('users').doc(u.uid).set({ role: newRole }, { merge: true })
          .then(() => { u.role = newRole; renderUsers(); toast((u.name || 'User') + ' is now a ' + newRole); })
          .catch(() => toast('Could not update user role'));
      }
    } else if (t.closest('[data-user-toggle]')) {
      const email = t.closest('[data-user-toggle]').dataset.userToggle;
      const F = window.Firebase;
      const u = (F && F.usersCache.list) ? F.usersCache.list.find((x) => String(x.email || '').toLowerCase() === String(email || '').toLowerCase()) : null;
      if (u && u.uid) {
        const active = u.active === false;
        F.db.collection('users').doc(u.uid).set({ active }, { merge: true })
          .then(() => { u.active = active; renderUsers(); toast(active ? 'User activated' : 'User deactivated'); })
          .catch(() => toast('Could not update user status'));
      }
    } else if (t.closest('#btn-add-hero-img')) {
      addHeroImg($('#hero-img-url').value);
      if ($('#hero-img-url')) $('#hero-img-url').value = '';
    } else if (t.closest('[data-del-hero-img]')) {
      const i = +t.closest('[data-del-hero-img]').dataset.delHeroImg;
      const h = getHero();
      if (Array.isArray(h.images)) h.images.splice(i, 1);
      setHero(h);
      renderHero();
      toast('Hero image removed');
    } else if (t.closest('[data-hero-feat]')) {
      const id = +t.closest('[data-hero-feat]').dataset.heroFeat;
      const p = D.getProps().find((x) => x.id === id);
      if (p) {
        p.featured = !p.featured;
        D.saveProps();
        renderHero();
        renderProps();
        toast(p.featured ? 'Added to hero cards' : 'Removed from hero cards');
      }
    }
  });

  document.addEventListener('change', (e) => {
    const t = e.target;
    if (t.closest('[data-lead-status]')) {
      const key = t.closest('[data-lead-status]').dataset.leadStatus;
      const leads = getStore('realtor_leads');
      const l = leads.find((x) => String(x.at) === key);
      if (l) { l.status = t.value; setStore('realtor_leads', leads); refreshBadges(); }
    } else if (t.closest('[data-view-status]')) {
      const key = t.closest('[data-view-status]').dataset.viewStatus;
      const viewings = getStore('realtor_viewings');
      const v = viewings.find((x) => String(x.at) === key);
      if (v) { v.viewingStatus = t.value; setStore('realtor_viewings', viewings); refreshBadges(); }
    }
  });

  /* ---------------- Section router ---------------- */
  const renderers = {
    overview: renderOverview,
    properties: renderProps,
    hero: renderHero,
    leads: renderLeads,
    viewings: renderViewings,
    messages: () => { renderConvos(); renderThread(); },
    agents: renderAgents,
    users: renderUsers,
    settings: renderSettings,
  };
  window.DashOnSection = (id) => {
    if (id === 'leads' || id === 'viewings' || id === 'messages') D.markSeen(id);
    if (renderers[id]) renderers[id]();
    if (id === 'messages') D.renderUser();
    refreshBadges();
  };

  /* ---------------- Wire static controls ---------------- */
  $('#prop-search').addEventListener('input', (e) => { propSearch = e.target.value; renderProps(); });
  $('#prop-status-filter').addEventListener('change', (e) => { propStatus = e.target.value; renderProps(); });
  $('#prop-cat-filter').addEventListener('change', (e) => { propCat = e.target.value; renderProps(); });
  $$('#lead-tabs button').forEach((b) => b.addEventListener('click', () => {
    $$('#lead-tabs button').forEach((x) => x.classList.toggle('active', x === b));
    leadFilter = b.dataset.lf; renderLeads();
  }));
  const tf = $('#thread-form');
  if (tf) tf.addEventListener('submit', (e) => { e.preventDefault(); sendReply(); });

  /* ---------------- Boot ---------------- */
  whenFirebase(() => {
    if (!gateAdmin()) return;
    D.initSidebar();
    D.renderUser();
    refreshBadges();
    renderOverview();
    renderProps();
    const hash = location.hash.slice(1);
    if (hash && document.getElementById(hash)) D.goTo(hash);
  });
})();


/* ---------------- next module ---------------- */

/* =========================================================
   Realty Homes — client dashboard controller
   ========================================================= */
(function () {
  'use strict';

  if (!document.getElementById('saved-grid')) return;

  const D = window.Dash;
  if (!D) return;
  const { $, $$, esc, getStore, setStore, initials, timeAgo, fmtDate, toast } = D;

  let user = null;
  function gateClient() {
    const u = D.requireAuth();
    if (!u) return false;
    user = u;
    return true;
  }

  window.Dash.pageTitle = 'My Dashboard';
  const AGENT_EMAIL = primaryAgentEmail() || 'admin@realtyhomes.com';
  const AGENT_NAME = primaryAgent().name || 'Realty Homes';

  /* ---------------- Data ---------------- */
  function myViewings() {
    return getStore('realtor_viewings')
      .filter((v) => v.email && String(v.email).toLowerCase() === String(user.email).toLowerCase())
      .sort((a, b) => (b.at || 0) - (a.at || 0));
  }
  function mySearches() {
    return D.getSearches ? D.getSearches() : [];
  }
  function myUnread() {
    return getStore('realtor_messages').filter((m) => !m.read && m.to && m.to.toLowerCase() === user.email.toLowerCase()).length;
  }

  function refreshBadges() {
    setBadge('nav-count-favs', D.getFavorites().length);
    setBadge('nav-count-searches', mySearches().length);
    D.renderUser();
  }
  function setBadge(id, n) {
    const el = $('#' + id);
    if (!el) return;
    el.textContent = n;
    el.style.display = n ? 'inline-flex' : 'none';
  }

  /* ---------------- Overview ---------------- */
  function renderOverview() {
    $('#ov-name').textContent = user.name.split(' ')[0];
    const favs = D.getFavorites().length;
    const viewings = myViewings();
    const upcoming = viewings.filter((v) => v.viewingStatus === 'new' || v.viewingStatus === 'confirmed');
    const searches = mySearches().length;
    const unread = myUnread();

    $('#stat-cards').innerHTML = `
      <div class="stat-card"><div class="stat-ico">${ICONS.heart}</div><div><b>${favs}</b><span>Saved homes</span></div></div>
      <div class="stat-card"><div class="stat-ico blue">${ICONS.calendar}</div><div><b>${upcoming.length}</b><span>Upcoming viewings</span></div></div>
      <div class="stat-card"><div class="stat-ico purple">${ICONS.search}</div><div><b>${searches}</b><span>Saved searches</span></div></div>
      <div class="stat-card"><div class="stat-ico green">${ICONS.email}</div><div><b>${unread}</b><span>Unread messages</span></div></div>`;

    const favProps = D.getFavorites().map((id) => D.getProps().find((p) => p.id === id)).filter(Boolean);
    $('#recent-saved').innerHTML = favProps.length
      ? favProps.slice(0, 3).map(D.dashCard).join('')
      : `<p class="dash-hint">Nothing saved yet — tap the heart on any home.</p>`;

    $('#recent-viewings').innerHTML = viewings.length ? viewings.slice(0, 4).map((v) => `
      <div class="msg-item">
        <div class="dash-avatar">${ICONS.calendar}</div>
        <div style="flex:1;min-width:0">
          <b>${esc(v.title || 'Property viewing')}</b>
          <p>${esc(v.date || '')} · ${esc(v.time || '')}</p>
        </div>
        <span class="tag-badge status-${v.viewingStatus}">${v.viewingStatus}</span>
      </div>`).join('') : `<p class="dash-hint">No viewings yet.</p>`;
  }

  /* ---------------- Saved homes ---------------- */
  function renderSaved() {
    const favs = D.getFavorites();
    const props = favs.map((id) => D.getProps().find((p) => p.id === id)).filter(Boolean);
    $('#saved-empty').hidden = props.length > 0;
    $('#saved-grid').innerHTML = props.map(D.dashCard).join('');
    refreshBadges();
  }

  /* ---------------- Viewings ---------------- */
  function renderViewings() {
    const viewings = myViewings();
    $('#viewings-empty').hidden = viewings.length > 0;
    $('#viewings-table').innerHTML = viewings.length ? `
      <thead><tr><th>Property</th><th>Preferred</th><th>Requested</th><th>Status</th><th></th></tr></thead>
      <tbody>${viewings.map((v) => `
        <tr>
          <td><b>${esc(v.title || 'Property #' + v.propId)}</b><br><span style="color:var(--muted);font-size:.82rem">${esc(v.address || '')}</span></td>
          <td>${esc(v.date || '—')}<br><span style="color:var(--muted);font-size:.82rem">${esc(v.time || '')}</span></td>
          <td>${timeAgo(v.at)}</td>
          <td><span class="tag-badge status-${v.viewingStatus}">${v.viewingStatus}</span></td>
          <td>${v.viewingStatus !== 'cancelled' && v.viewingStatus !== 'completed'
            ? `<button class="btn btn-danger-soft btn-sm" data-cancel-view="${v.at}">Cancel</button>` : '—'}</td>
        </tr>`).join('')}</tbody>` : '';
  }

  /* ---------------- Saved searches ---------------- */
  function renderSearches() {
    const searches = mySearches();
    $('#searches-empty').hidden = searches.length > 0;
    $('#searches-list').innerHTML = searches.length ? searches.map((s) => `
      <div class="msg-item">
        <div class="dash-avatar">${ICONS.search}</div>
        <div style="flex:1;min-width:0">
          <b>${esc(s.name || 'Search')}</b>
          <p>${esc(s.summary || '')}</p>
        </div>
        <div style="display:flex;gap:8px;align-items:center">
          <time>${timeAgo(s.at)}</time>
          <a class="btn btn-soft btn-sm" href="browse.html?${esc(s.query || '')}">View results</a>
          <button class="icon-btn danger" data-del-search="${s.id}" title="Delete"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg></button>
        </div>
      </div>`).join('') : '';
    refreshBadges();
  }

  /* ---------------- Messages ---------------- */
  let activeConvo = null;

  function conversations() {
    const msgs = getStore('realtor_messages');
    const me = user.email.toLowerCase();
    const map = {};
    msgs.forEach((m) => {
      const mine = m.from && m.from.toLowerCase() === me;
      const toMe = m.to && m.to.toLowerCase() === me;
      if (!mine && !toMe) return;
      const key = mine ? m.to : m.from;
      if (!key) return;
      if (!map[key]) map[key] = { email: key, name: mine ? key : (m.fromName || key), msgs: [] };
      map[key].msgs.push(m);
    });
    return Object.keys(map).map((k) => {
      const c = map[k];
      c.msgs.sort((a, b) => (a.at || 0) - (b.at || 0));
      c.last = c.msgs[c.msgs.length - 1];
      return c;
    }).sort((a, b) => (b.last.at || 0) - (a.last.at || 0));
  }

  function renderConvos() {
    const convos = conversations();
    $('#convo-empty').hidden = convos.length > 0;
    $('#convo-list').innerHTML = convos.map((c) => `
      <div class="msg-item ${c.msgs.some((m) => !m.read && m.to && m.to.toLowerCase() === user.email.toLowerCase()) ? 'unread' : ''}" data-convo="${esc(c.email)}">
        <div class="dash-avatar">${initials(c.name)}</div>
        <div style="flex:1;min-width:0">
          <b class="name">${esc(c.name)}</b>
          <p>${esc(c.last.body || '')}</p>
        </div>
        <time>${timeAgo(c.last.at)}</time>
      </div>`).join('');
  }

  function renderThread() {
    const title = $('#thread-title');
    const body = $('#thread-body');
    const form = $('#thread-form');
    if (!activeConvo) {
      title.textContent = 'Select a conversation';
      body.innerHTML = `<p class="dash-hint">Choose a conversation from the list to read and reply.</p>`;
      form.hidden = true;
      return;
    }
    const conv = conversations().find((c) => c.email === activeConvo);
    if (!conv) { title.textContent = 'Select a conversation'; form.hidden = true; body.innerHTML = ''; return; }
    title.innerHTML = `<span style="font-size:1rem">${esc(conv.name)}</span>`;
    const msgs = getStore('realtor_messages');
    let changed = false;
    msgs.forEach((m) => {
      if (m.to && m.to.toLowerCase() === user.email.toLowerCase() && m.from === conv.email && !m.read) { m.read = true; changed = true; }
    });
    if (changed) { setStore('realtor_messages', msgs); refreshBadges(); }
    body.innerHTML = conv.msgs.map((m) => {
      const mine = m.from && m.from.toLowerCase() === user.email.toLowerCase();
      return `<div class="bubble ${mine ? 'out' : 'in'}">${esc(m.body || '')}<time>${fmtDate(m.at)} · ${timeAgo(m.at)}</time></div>`;
    }).join('');
    form.hidden = false;
    $('#thread-input').placeholder = 'Reply to ' + esc(conv.name) + '…';
  }

  function sendMsg(from, to, subject, body) {
    const msgs = getStore('realtor_messages');
    const last = msgs.slice().sort((a, b) => (b.id || 0) - (a.id || 0))[0];
    msgs.push({ id: (last ? last.id : 0) + 1, from, fromName: user.name, to, subject, body, read: false, at: Date.now() });
    setStore('realtor_messages', msgs);
  }

  /* ---------------- Profile ---------------- */
  function renderProfile() {
    const form = $('#profile-form');
    if (!form) return;
    form.querySelector('[name="name"]').value = user.name || '';
    form.querySelector('[name="email"]').value = user.email || '';
    form.querySelector('[name="phone"]').value = user.phone || '';
    form.querySelector('[name="location"]').value = user.location || '';
    form.querySelector('[name="bio"]').value = user.bio || '';
  }

  /* ---------------- Delegated events ---------------- */
  document.addEventListener('click', (e) => {
    const t = e.target;
    if (t.closest('[data-convo]')) {
      activeConvo = t.closest('[data-convo]').dataset.convo;
      renderConvos(); renderThread();
    } else if (t.closest('[data-cancel-view]')) {
      const key = t.closest('[data-cancel-view]').dataset.cancelView;
      const viewings = getStore('realtor_viewings');
      const v = viewings.find((x) => String(x.at) === key);
      if (v) { v.viewingStatus = 'cancelled'; setStore('realtor_viewings', viewings); renderViewings(); toast('Viewing cancelled'); }
    } else if (t.closest('[data-del-search]')) {
      const id = +t.closest('[data-del-search]').dataset.delSearch;
      const searches = mySearches().filter((s) => s.id !== id);
      if (D.saveSearches) D.saveSearches(searches);
      else localStorage.setItem('realtor_searches', JSON.stringify(searches));
      renderSearches(); toast('Search removed');
    }
  });

  /* ---------------- Section router ---------------- */
  const renderers = {
    overview: renderOverview,
    'saved-homes': renderSaved,
    viewings: renderViewings,
    searches: renderSearches,
    messages: () => { renderConvos(); renderThread(); },
    profile: renderProfile,
  };
  window.DashOnSection = (id) => { if (renderers[id]) renderers[id](); };

  /* ---------------- Wire static controls ---------------- */
  const tf = $('#thread-form');
  if (tf) tf.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = $('#thread-input');
    if (!activeConvo || !input.value.trim()) return;
    sendMsg(user.email, activeConvo, 'RE: your message', input.value.trim());
    input.value = '';
    renderConvos(); renderThread(); refreshBadges();
    toast('Message sent', 'success');
  });

  const nf = $('#new-msg-form');
  if (nf) nf.addEventListener('submit', (e) => {
    e.preventDefault();
    const f = Object.fromEntries(new FormData(e.target).entries());
    if (!f.body.trim()) return;
    sendMsg(user.email, AGENT_EMAIL, f.subject.trim() || 'Question', f.body.trim());
    nf.reset();
    activeConvo = AGENT_EMAIL;
    renderConvos(); renderThread(); refreshBadges();
    toast('Message sent to ' + AGENT_NAME, 'success');
  });

  const pf = $('#profile-form');
  if (pf) pf.addEventListener('submit', (e) => {
    e.preventDefault();
    const f = Object.fromEntries(new FormData(e.target).entries());
    const u = D.currentUser() || {};
    const updated = Object.assign({}, u, {
      name: f.name || u.name, phone: f.phone || '', location: f.location || '', bio: f.bio || '',
    });
    D.saveUser(updated);
    D.renderUser();
    renderProfile();
    toast('Profile saved', 'success');
  });

  /* ---------------- Boot ---------------- */
  whenFirebase(() => {
    if (!gateClient()) return;
    D.initSidebar();
    D.renderUser();
    refreshBadges();
    renderOverview();
    const hash = location.hash.slice(1);
    if (hash && document.getElementById(hash)) D.goTo(hash);
  });
})();


/* ---------------- next module ---------------- */

/* =========================================================
   Realty Homes — contact page logic
   ========================================================= */
(function () {
  'use strict';

  const form = document.getElementById('contact-form');
  if (!form) return;

  const AGENT_EMAIL = primaryAgentEmail() || 'admin@realtyhomes.com';

  function getMessages() {
    return window.Firebase ? window.Firebase.store.getArray('realtor_messages') : [];
  }
  function storeMessages(list) {
    if (!window.Firebase) return;
    window.Firebase.store.set('realtor_messages', list);
    window.Firebase.store.commit();
  }
  function toast(msg, type) {
    const el = document.getElementById('toast');
    if (!el) return;
    el.textContent = msg;
    el.className = 'toast show' + (type ? ' ' + type : '');
    clearTimeout(window.__contactToastTimer);
    window.__contactToastTimer = setTimeout(() => { el.className = 'toast'; }, 3200);
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    const subject = [data.topic, data.subject].filter(Boolean).join(': ');
    whenFirebase(() => {
      const msgs = getMessages();
      msgs.push({
        id: Date.now(),
        from: (data.email || '').trim(),
        fromName: (data.name || '').trim(),
        phone: (data.phone || '').trim(),
        to: AGENT_EMAIL,
        subject: subject,
        body: (data.message || '').trim(),
        read: false,
        at: Date.now(),
      });
      storeMessages(msgs);
    });
    form.reset();
    toast('Message sent! We\'ll get back to you within 24 hours.', 'success');
  });
})();
