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
    { id: 'wallstreet', label: 'Wall Street', title: 'Black and white, Times New Roman' },
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

  apply(stored() || DEFAULT);

  function current() { return document.documentElement.getAttribute('data-theme'); }

  function buildPicker() {
    var bar = document.querySelector('.topbar-inner');
    if (!bar) return;

    var wrap = document.createElement('div');
    wrap.className = 'edition';
    var label = document.createElement('span');
    label.className = 'edition-label';
    label.id = 'edition-label';
    label.textContent = 'Edition';
    wrap.appendChild(label);

    var set = document.createElement('div');
    set.className = 'edition-set';
    set.setAttribute('role', 'radiogroup');
    set.setAttribute('aria-labelledby', 'edition-label');

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

    function sync() {
      var id = current();
      buttons.forEach(function (b) {
        var on = b.getAttribute('data-ed') === id;
        b.setAttribute('aria-checked', on ? 'true' : 'false');
        b.tabIndex = on ? 0 : -1;
      });
    }
    function choose(id) {
      try { localStorage.setItem(KEY, id); } catch (e) { /* ignore */ }
      apply(id);
      sync();
      /* Anything laid out per edition (the market line) listens for this. */
      try { document.dispatchEvent(new CustomEvent('editionchange', { detail: id })); } catch (e) { /* old browser */ }
    }

    wrap.appendChild(set);
    sync();
    /* Sits before the running score when there is one, otherwise at the end. */
    var chip = bar.querySelector('.score-chip');
    if (chip) bar.insertBefore(wrap, chip); else bar.appendChild(wrap);
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
      d.textContent = new Date().toLocaleDateString('en-GB',
        { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
    } catch (e) { d.textContent = new Date().toDateString(); }
  }

  document.addEventListener('DOMContentLoaded', function () {
    buildPicker();
    markSection();
    dateline();
  });
}());
