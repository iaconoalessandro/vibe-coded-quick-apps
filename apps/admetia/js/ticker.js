/* ---------------------------------------------------------------------------
 * The Admissions Index — a market ticker for programmes.
 *
 * Each programme trades as a symbol. Its "price" is the Competitive bar the
 * model uses for it. Once you have answered a calculator, the change column
 * is your margin against that bar: green and ↑ above it, red and ↓ below.
 * Every figure comes from the models on disk and from answers already saved
 * in this browser — nothing is fetched, and nothing here is market data.
 *
 * Also fills the "Highest bars" list on the front page, when there is one.
 * ------------------------------------------------------------------------- */

(function () {
  'use strict';

  var TRACK_CODE = { mim: 'MIM', mif: 'MIF', marketing: 'MKT', cs: 'CS', dsai: 'AI', conversion: 'CONV' };
  var TRACK_NAME = { mim: 'Management', mif: 'Finance', marketing: 'Marketing',
    cs: 'Computer Science', dsai: 'Data Science & AI', conversion: 'Conversion' };
  var TRACK_PAGE = { mim: 'masters.html?track=mim', mif: 'masters.html?track=mif',
    marketing: 'masters.html?track=marketing', cs: 'computing.html?track=cs',
    dsai: 'computing.html?track=dsai', conversion: 'computing.html?track=conversion' };

  /* A ticker symbol from a school name: a short all-capitals word if the name
   * has one (HEC, INSEAD, LSE), initials for a long name (London Business
   * School → LBS), otherwise the first word. */
  function symbol(name) {
    var school = String(name).split(' — ')[0].replace(/[().,]/g, '');
    var words = school.split(/\s+/);
    var caps = words.filter(function (w) { return /^[A-Z]{2,7}$/.test(w); });
    if (caps.length) return caps[0];
    if (words.length >= 3) return words.map(function (w) { return w.charAt(0); }).join('').toUpperCase();
    return words[0].toUpperCase().replace(/[^A-Z]/g, '').slice(0, 8);
  }

  function load(key) { return window.Store ? Store.load(key) : {}; }
  function has(a) { return a && Object.keys(a).length > 0; }
  function round1(n) { return Math.round(n * 10) / 10; }

  /* Every programme the loaded models know about, with your margin where
   * you have answers for that calculator. */
  function collect() {
    var out = [];
    var M = window.MASTERS_MODEL, MS = window.MASTERS_SCORE;
    var I = window.IT_MODEL, IS = window.IT_SCORE;
    var B = window.MBA_MODEL, BS = window.MBA_SCORE;

    function add(track, rows, mine) {
      rows.forEach(function (s) {
        out.push({ sym: symbol(s.name) + '·' + TRACK_CODE[track], name: s.name, track: track,
          bar: s.threshold, delta: mine ? mine[s.id] : undefined });
      });
    }
    function margins(score, track, key) {
      var a = load(key);
      if (!score || !has(a)) return null;
      try {
        var m = {};
        score.evaluate(a, track).rows.forEach(function (r) { m[r.school.id] = round1(r.adjusted - r.school.threshold); });
        return m;
      } catch (e) { return null; }
    }

    if (M) ['mim', 'mif', 'marketing'].forEach(function (t) {
      add(t, M.schools.filter(function (s) { return s.tracks.indexOf(t) > -1; }), margins(MS, t, 'masters:' + t));
    });
    if (I) ['cs', 'dsai', 'conversion'].forEach(function (t) {
      add(t, I.schools.filter(function (s) { return (s.tracks || [s.track]).indexOf(t) > -1; }), margins(IS, t, 'it:' + t));
    });
    if (B) {
      var a = load('mba2'), base = null;
      if (BS && has(a)) { try { base = BS.score(a, 'published').base; } catch (e) { base = null; } }
      B.generalSchools.forEach(function (s) {
        out.push({ sym: symbol(s.name) + '·MBA', name: s.name, track: 'mba', bar: s.points,
          delta: base === null ? undefined : round1(base - s.points) });
      });
    }
    return out;
  }

  /* One composite per track, like an index: the average bar, and your
   * average margin across it. */
  function composites(items) {
    var by = {};
    items.forEach(function (it) { (by[it.track] = by[it.track] || []).push(it); });
    return Object.keys(by).map(function (t) {
      var list = by[t];
      var bar = list.reduce(function (s, x) { return s + x.bar; }, 0) / list.length;
      var mine = list.filter(function (x) { return x.delta !== undefined; });
      return { sym: (t === 'mba' ? 'MBA' : TRACK_CODE[t]) + ' ' + list.length, name: 'Average bar', composite: true,
        bar: round1(bar), delta: mine.length === list.length
          ? round1(mine.reduce(function (s, x) { return s + x.delta; }, 0) / mine.length) : undefined };
    });
  }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined) n.textContent = text;
    return n;
  }

  function item(it) {
    var n = el('span', 'tk' + (it.composite ? ' idx' : '') +
      (it.delta === undefined ? '' : it.delta >= 0 ? ' up' : ' down'));
    n.title = it.name;
    n.appendChild(el('b', 'sym', it.sym));
    n.appendChild(el('span', 'px', it.bar.toFixed(1)));
    if (it.delta !== undefined) {
      var up = it.delta >= 0;
      n.appendChild(el('span', 'chg ' + (up ? 'up' : 'down'),
        (up ? '+' : '−') + Math.abs(it.delta).toFixed(1) + (up ? ' ↑' : ' ↓')));
    }
    return n;
  }

  var bar = null, track = null;

  function render() {
    var items = collect();
    if (!items.length) return;
    var all = composites(items).concat(items);
    var personal = items.some(function (x) { return x.delta !== undefined; });

    if (!bar) {
      bar = el('div', 'ticker');
      bar.setAttribute('role', 'region');
      bar.setAttribute('aria-label', 'Admissions index');
      var label = el('div', 'ticker-label');
      label.appendChild(el('span', 'ticker-arrow', '↗'));
      label.appendChild(el('span', 'ticker-name', 'Admissions index'));
      bar.appendChild(label);
      var view = el('div', 'ticker-view');
      track = el('div', 'ticker-track');
      view.appendChild(track);
      bar.appendChild(view);
      place();
    }
    bar.querySelector('.ticker-label').title = personal
      ? 'Price: the Competitive bar. Change: your margin against it, from your saved answers.'
      : 'Price: the Competitive bar each programme is scored against. Answer a calculator to see your margin.';

    /* Two copies, so the loop is seamless; the second is hidden from screen
     * readers, which get the first once. */
    track.innerHTML = '';
    [0, 1].forEach(function (copy) {
      var set = el('span', 'ticker-set');
      if (copy) set.setAttribute('aria-hidden', 'true');
      all.forEach(function (it) { set.appendChild(item(it)); });
      track.appendChild(set);
    });
    track.style.setProperty('--dur', Math.max(60, all.length * 2.6) + 's');
  }

  /* The financial papers print their market line at the very top, under the
   * strip; the magazine prints it under the navigation. */
  function place() {
    if (!bar) return;
    var top = document.documentElement.getAttribute('data-theme') !== 'watchlist';
    var anchor = document.querySelector(top ? '.topbar' : '.sections');
    if (!anchor) return;
    if (anchor.nextSibling !== bar) anchor.parentNode.insertBefore(bar, anchor.nextSibling);
  }
  document.addEventListener('editionchange', place);

  /* The five highest bars across the master's and computing tracks, for the
   * front page. */
  function highest() {
    var list = document.getElementById('highest');
    if (!list) return;
    var items = collect().filter(function (x) { return x.track !== 'mba'; })
      .sort(function (a, b) { return b.bar - a.bar; });
    var seen = {};
    items = items.filter(function (x) { if (seen[x.name]) return false; seen[x.name] = 1; return true; }).slice(0, 5);
    list.innerHTML = '';
    items.forEach(function (x) {
      var li = el('li');
      var a = el('a');
      a.href = TRACK_PAGE[x.track];
      a.appendChild(el('span', 't', x.name));
      a.appendChild(el('span', 'm', TRACK_NAME[x.track] + ' · bar ' + x.bar));
      li.appendChild(a);
      list.appendChild(li);
    });
  }

  /* Keep the change column current while you answer: redraw shortly after
   * any save. */
  if (window.Store && Store.save) {
    var save = Store.save, pending = null;
    Store.save = function () {
      save.apply(Store, arguments);
      clearTimeout(pending);
      pending = setTimeout(render, 400);
    };
  }

  document.addEventListener('DOMContentLoaded', function () {
    render();
    highest();
  });
}());
