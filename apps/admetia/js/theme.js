/* Edition picker. Three looks for the same paper — The City, Wall Street and
 * FBI Watchlist — chosen from the top strip and remembered in this browser. Runs in
 * <head>, before first paint, so the page never flashes the wrong edition.
 *
 * Also marks the current page in the section navigation. */

(function () {
  'use strict';

  var KEY = 'admissions-calc:theme';
  var DEFAULT = 'city';
  var EDITIONS = [
    { id: 'city', label: 'The City', title: 'Salmon financial paper' },
    { id: 'wallstreet', label: 'Wall Street', title: 'Wall Street — black and white, Times New Roman' },
    { id: 'watchlist', label: 'FBI Watchlist', title: 'Black masthead, white page, full colour' }
  ];
  /* Earlier names for the same three, so a stored choice survives. */
  var RENAMED = { salmon: 'city', newsprint: 'wallstreet', editorial: 'city' };

  function valid(id) {
    return EDITIONS.some(function (e) { return e.id === id; });
  }
  /* Anything else stored under the key — including the old light/dark
   * setting — falls back to the default edition. */
  function stored() {
    try {
      var v = localStorage.getItem(KEY);
      v = RENAMED[v] || v;
      return valid(v) ? v : null;
    } catch (e) { return null; }
  }
  function apply(id) { document.documentElement.setAttribute('data-theme', id); }

  /* The faces each edition sets above the fold (see css/fonts.css). Preloading
   * them here, rather than with static <link> tags, means a reader on Wall
   * Street never downloads The City's fonts, and the fetch starts before the
   * stylesheet is parsed instead of after first layout. */
  var FONTS = {
    city: ['source-serif-4-roman', 'hanken-grotesk'],
    wallstreet: ['roboto-serif-condensed', 'hanken-grotesk'],
    watchlist: ['noto-serif-display', 'hanken-grotesk']
  };
  function preloadFonts(id) {
    /* Once sw.js controls the page the fonts come from its cache at once, and
     * a preload would only fetch each one a second time. */
    if (navigator.serviceWorker && navigator.serviceWorker.controller) return;
    (FONTS[id] || []).forEach(function (f) {
      var l = document.createElement('link');
      l.rel = 'preload';
      l.as = 'font';
      l.type = 'font/woff2';
      l.crossOrigin = 'anonymous';
      l.href = 'fonts/' + f + '.woff2';
      document.head.appendChild(l);
    });
  }

  apply(stored() || DEFAULT);
  preloadFonts(current());

  /* .reveal elements start hidden once `no-js` is gone (css/app.css). Drop it
   * here, before first paint, rather than in the deferred js/ui.js — otherwise
   * a slow script shows them, hides them, then fades them in. If ui.js never
   * arrives, put the class back so nothing stays invisible. */
  var root = document.documentElement;
  root.classList.remove('no-js');

  /* Italian readers: set the page language now, and keep the page hidden
   * until js/i18n.js has translated it (it removes i18n-wait), so there is
   * no flash of English. If that script never arrives, show the page anyway
   * — English is better than nothing. */
  try {
    if (localStorage.getItem('admissions-calc:lang') === 'it') {
      root.lang = 'it';
      root.classList.add('i18n-wait');
      setTimeout(function () { root.classList.remove('i18n-wait'); }, 3000);
    }
  } catch (e) { /* storage blocked: English */ }
  window.addEventListener('load', function () {
    if (!window.UI) root.classList.add('no-js');
  });

  function current() { return document.documentElement.getAttribute('data-theme'); }

  function sync() {
    var id = current();
    var buttons = document.querySelectorAll('.edition button');
    Array.prototype.forEach.call(buttons, function (b) {
      var ed = b.getAttribute('data-ed');
      if (!ed) return;
      var on = ed === id;
      b.setAttribute('aria-checked', on ? 'true' : 'false');
      b.tabIndex = on ? 0 : -1;
    });
  }

  function choose(id) {
    try { localStorage.setItem(KEY, id); } catch (e) { /* ignore */ }
    apply(id);
    sync();
    try { document.dispatchEvent(new CustomEvent('editionchange', { detail: id })); } catch (e) { /* old browser */ }
  }

  function buildPicker() {
    var bar = document.querySelector('.ticker') || document.querySelector('.topbar-inner');
    if (!bar) return;

    var wrap = bar.querySelector('.edition');
    if (wrap && wrap.querySelector('button')) {
      sync();
      return;
    }

    var set = null;
    if (wrap) {
      set = wrap.querySelector('.edition-set');
      if (!set) {
        set = document.createElement('div');
        set.className = 'edition-set';
        set.setAttribute('role', 'radiogroup');
        set.setAttribute('aria-labelledby', 'edition-label');
        wrap.appendChild(set);
      }
    } else {
      wrap = document.createElement('div');
      wrap.className = 'edition';
      var label = document.createElement('span');
      label.className = 'edition-label';
      label.id = 'edition-label';
      label.textContent = window.I18N ? I18N.t('Edition') : 'Edition';
      wrap.appendChild(label);

      set = document.createElement('div');
      set.className = 'edition-set';
      set.setAttribute('role', 'radiogroup');
      set.setAttribute('aria-labelledby', 'edition-label');
      wrap.appendChild(set);
      bar.appendChild(wrap);
    }

    var buttons = EDITIONS.map(function (ed) {
      var b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('role', 'radio');
      b.setAttribute('data-ed', ed.id);
      b.title = ed.label + ' — ' + ed.title;
      var sw = document.createElement('i');
      sw.className = 'sw ' + ed.id;
      sw.setAttribute('aria-hidden', 'true');
      b.appendChild(sw);
      var t = document.createElement('span');
      t.className = 't';
      t.textContent = ed.label;
      if (window.I18N) b.title = ed.label + ' — ' + I18N.t(ed.title);
      b.appendChild(t);
      b.addEventListener('click', function () { choose(ed.id); });
      set.appendChild(b);
      return b;
    });

    /* Arrow keys move the choice, as in any radio group. */
    set.addEventListener('keydown', function (e) {
      var dir = e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1
              : e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? -1 : 0;
      if (!dir) return;
      e.preventDefault();
      var i = EDITIONS.map(function (x) { return x.id; }).indexOf(current());
      var next = EDITIONS[(i + dir + EDITIONS.length) % EDITIONS.length].id;
      choose(next);
      buttons.forEach(function (b) { if (b.getAttribute('data-ed') === next) b.focus(); });
    });

    if (!wrap.contains(set)) wrap.appendChild(set);
    sync();
    if (!bar.contains(wrap)) bar.appendChild(wrap);
    window.Theme = { choose: choose, sync: sync, buildPicker: buildPicker, current: current };
  }

  /* The section nav marks where you are: masters.html?track=mif is Finance,
   * computing.html with no track is Computer Science, and so on. */
  function markSection() {
    var page = (location.pathname.split('/').pop() || 'index.html').replace(/\.html$/, '') || 'index';
    var track = new URLSearchParams(location.search).get('track');
    var DEFAULT_TRACK = { masters: 'mim', computing: 'cs' };
    var TRACKS = { masters: ['mif', 'mim', 'marketing'], computing: ['cs', 'dsai', 'conversion'] };
    var key = page;
    if (TRACKS[page]) key = page + ':' + (TRACKS[page].indexOf(track) > -1 ? track : DEFAULT_TRACK[page]);
    var links = document.querySelectorAll('.sections a[data-sec]');
    Array.prototype.forEach.call(links, function (a) {
      if (a.getAttribute('data-sec') === key) {
        a.classList.add('on');
        a.setAttribute('aria-current', 'page');
      }
    });
  }

  /* Today's date in the dateline, as a paper prints it. Local, not fetched. */
  function dateline() {
    var d = document.querySelector('.dateline .date');
    if (!d) return;
    try {
      d.textContent = new Date().toLocaleDateString(window.I18N ? I18N.locale : 'en-GB',
        { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
    } catch (e) { d.textContent = new Date().toDateString(); }
  }

  document.addEventListener('DOMContentLoaded', function () {
    buildPicker();
    markSection();
    dateline();
  });
}());
