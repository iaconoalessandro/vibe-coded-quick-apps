/* The City is the site's only design. Runs in <head> before first paint.
 * Also prepares the language and shared navigation. */
(function () {
  'use strict';

  document.documentElement.setAttribute('data-theme', 'city');
  /* Clear obsolete display preferences so returning readers use The City. */
  try { localStorage.removeItem('admissions-calc:theme'); } catch (e) { /* storage blocked */ }

  /* Preload The City's faces from the script's own location, including careers/. */
  var ROOT = '';
  try {
    var src = document.currentScript && document.currentScript.src;
    if (src) ROOT = new URL('../', src).href;
  } catch (e) { /* old browser: relative paths */ }
  if (!(navigator.serviceWorker && navigator.serviceWorker.controller)) {
    ['source-serif-4-roman', 'hanken-grotesk'].forEach(function (f) {
      var l = document.createElement('link');
      l.rel = 'preload';
      l.as = 'font';
      l.type = 'font/woff2';
      l.crossOrigin = 'anonymous';
      l.href = ROOT + 'fonts/' + f + '.woff2';
      document.head.appendChild(l);
    });
  }

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

  /* The five sections fold behind a Menu button on a narrow screen. Without
   * this script the list simply stays open, wrapped onto several lines. */
  function menu() {
    var nav = document.querySelector('.site-nav');
    var btn = nav && nav.querySelector('.site-nav-toggle');
    if (!btn) return;
    btn.hidden = false;
    nav.classList.add('has-toggle');
    var dropdowns = [];
    function closeSections() {
      dropdowns.forEach(function (dropdown) { dropdown.set(false); });
    }
    function set(open) {
      nav.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (!open) closeSections();
    }
    btn.addEventListener('click', function () { set(!nav.classList.contains('open')); });
    nav.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) { set(false); btn.focus(); }
    });

    /* All five menus are stamped by tools/shell.js, including on the front
     * page. Keep the local strip as a no-script fallback until setup succeeds. */
    var local = document.querySelector('.site-nav + .sections:not([data-section-menu])');
    Array.prototype.forEach.call(nav.querySelectorAll('.site-nav-list a[data-section]'), function (link) {
      var sections = document.querySelector('[data-section-menu="' + link.getAttribute('data-section') + '"]');
      if (!sections) return;
      var item = link.parentNode;
      var toggle = document.createElement('button');
      toggle.type = 'button';
      toggle.className = 'site-subnav-toggle';
      toggle.innerHTML = link.innerHTML;
      toggle.setAttribute('data-section', link.getAttribute('data-section'));
      if (link.hasAttribute('aria-current')) toggle.setAttribute('aria-current', link.getAttribute('aria-current'));
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-controls', sections.id);
      sections.classList.add('site-subnav');
      sections.hidden = true;
      item.classList.add('site-subnav-item');
      item.replaceChild(toggle, link);
      item.appendChild(sections);
      var timer;
      var hoverOpened = false;
      var keyboard = false;
      var dropdown = { set: sectionSet };
      dropdowns.push(dropdown);

      function sectionSet(open) {
        clearTimeout(timer);
        if (open) dropdowns.forEach(function (other) { if (other !== dropdown) other.set(false); });
        sections.hidden = !open;
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        if (open) {
          /* Keep the attached panel inside the viewport even in Italian. */
          sections.style.setProperty('--subnav-shift', '0px');
          var box = sections.getBoundingClientRect();
          var width = document.documentElement.clientWidth;
          var shift = box.left < 8 ? 8 - box.left : (box.right > width - 8 ? width - 8 - box.right : 0);
          sections.style.setProperty('--subnav-shift', shift + 'px');
          sections.style.setProperty('--subnav-top', box.top + 'px');
        }
      }
      toggle.addEventListener('click', function () {
        sectionSet(hoverOpened || sections.hidden);
        hoverOpened = false;
      });
      item.addEventListener('pointerenter', function (e) {
        if (e.pointerType !== 'mouse' || !window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 761px)').matches) return;
        keyboard = false;
        hoverOpened = sections.hidden;
        sectionSet(true);
      });
      item.addEventListener('pointerleave', function (e) {
        if (e.pointerType !== 'mouse') return;
        timer = setTimeout(function () {
          if (!keyboard || !item.contains(document.activeElement)) sectionSet(false);
        }, 150);
      });
      toggle.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          sectionSet(true);
          sections.querySelector('a').focus();
        }
      });
      item.addEventListener('keydown', function (e) {
        keyboard = true;
        if (e.key === 'Escape' && !sections.hidden) {
          e.preventDefault();
          e.stopPropagation();
          sectionSet(false);
          toggle.focus();
        }
      });
      item.addEventListener('focusout', function (e) {
        if (e.relatedTarget && !item.contains(e.relatedTarget)) sectionSet(false);
      });
      document.addEventListener('click', function (e) {
        if (!item.contains(e.target)) sectionSet(false);
      });
    });
    if (local && dropdowns.length) local.parentNode.removeChild(local);
    window.addEventListener('resize', closeSections);
    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target)) set(false);
    });
  }

  /* The Admissions Index moves: a reader can stop it (and it stays stopped
   * on later pages in this visit). It never starts for readers who ask for
   * less motion. */
  function tickerPause() {
    var bar = document.querySelector('.ticker');
    var btn = bar && bar.querySelector('.ticker-pause');
    if (!btn) return;
    var KEY2 = 'admissions-calc:ticker-paused';
    function t(s) { return window.I18N ? I18N.t(s) : s; }
    function set(paused) {
      bar.classList.toggle('paused', paused);
      btn.setAttribute('aria-pressed', paused ? 'true' : 'false');
      btn.textContent = '';
      var sp = document.createElement('span');
      sp.textContent = t(paused ? 'Play' : 'Pause');
      btn.appendChild(sp);
      btn.setAttribute('aria-label', t(paused ? 'Play the Admissions index' : 'Pause the Admissions index'));
    }
    var paused = false;
    try { paused = sessionStorage.getItem(KEY2) === '1'; } catch (e) { /* storage blocked */ }
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) paused = true;
    set(paused);
    btn.addEventListener('click', function () {
      paused = !paused;
      try { sessionStorage.setItem(KEY2, paused ? '1' : '0'); } catch (e) { /* ignore */ }
      set(paused);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    markSection();
    dateline();
    menu();
    tickerPause();
  });
}());
