/* ---------------------------------------------------------------------------
 * Getting in: the interactive parts of three Career Explorer pages.
 *
 *   recruiting-calendar.html   filters, and a line at today's date
 *   toolkit.html               the motivation-letter draft checker
 *   interview-prep.html        STAR story builder, flashcards, arithmetic drill
 *
 * Everything works on the HTML the build wrote; without scripts the pages
 * still show every row, card and case. Nothing is sent anywhere: drafts and
 * stories stay in this browser (localStorage), and the reader can clear them.
 * ------------------------------------------------------------------------- */

(function () {
  'use strict';

  function T(s, v) { return typeof window !== 'undefined' && window.I18N ? I18N.t(s, v) : String(s).replace(/\{(\w+)\}/g, function (m, k) { return v && v[k] !== undefined ? v[k] : m; }); }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined && text !== null) e.textContent = text;
    return e;
  }
  function load(key, fallback) {
    try { var v = JSON.parse(localStorage.getItem(key) || 'null'); return v === null ? fallback : v; } catch (e) { return fallback; }
  }
  function save(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* private mode */ } }
  function drop(key) { try { localStorage.removeItem(key); } catch (e) { /* ignore */ } }
  function words(s) { var t = String(s || '').trim(); return t ? t.split(/\s+/).length : 0; }
  function fmt(n) { return Number(n).toLocaleString('en-GB'); }

  /* ------------------------------------------------------- arithmetic drill */

  var Drill = {
    rnd: function (a, b) { return a + Math.floor(Math.random() * (b - a + 1)); },
    pickOne: function (xs) { return xs[Math.floor(Math.random() * xs.length)]; },
    /* Each question: text, the answer, and how close counts as right. */
    make: function (kind) {
      var r = Drill.rnd, p = Drill.pickOne;
      if (kind === 'percent') {
        var pc = p([5, 10, 12, 15, 20, 25, 30, 35, 40, 45, 60, 75]), base = r(2, 49) * 20;
        return { q: T('{p}% of {b}', { p: pc, b: fmt(base) }), a: pc * base / 100, tol: 0.005 };
      }
      if (kind === 'multiply') {
        var x = r(12, 99) * Math.pow(10, r(0, 2)), y = r(2, 9) * Math.pow(10, r(0, 2));
        return { q: fmt(x) + ' × ' + fmt(y), a: x * y, tol: 0.005 };
      }
      if (kind === 'divide') {
        var d = p([4, 5, 8, 12, 15, 20, 25, 40]), qn = r(3, 60) * p([1, 10, 100]);
        return { q: fmt(qn * d) + ' ÷ ' + d, a: qn, tol: 0 };
      }
      if (kind === 'growth') {
        var g = p([3, 4, 6, 8, 9, 12, 18]);
        return { q: T('At {g}% a year, about how many years to double?', { g: g }), a: 72 / g, tol: 0.1 };
      }
      var v = r(2, 30), m = p([5, 8, 10, 12, 15, 20, 25]), u = r(2, 40) * 500;
      return { q: T('Fixed costs €{f}; price €{p}; variable cost €{v} a unit. Break-even units?', { f: fmt(u * m), p: v + m, v: v }), a: u, tol: 0 };
    },
    /* "1,200", "1.2k", "40,8" (Italian decimal comma), "3.5m". */
    parse: function (s) {
      s = String(s).trim().toLowerCase().replace(/\s|€|%/g, '');
      var mult = 1, mm = /(k|m|bn|b)$/.exec(s);
      if (mm) { mult = { k: 1e3, m: 1e6, bn: 1e9, b: 1e9 }[mm[1]]; s = s.slice(0, -mm[1].length); }
      if (s.indexOf(',') > -1 && s.indexOf('.') === -1) s = /^\d{1,3}(,\d{3})+$/.test(s) ? s.replace(/,/g, '') : s.replace(',', '.');
      else s = s.replace(/,/g, '');
      var n = Number(s);
      return isFinite(n) && s !== '' ? n * mult : NaN;
    },
    right: function (q, n) { return q.tol ? Math.abs(n - q.a) <= q.tol * Math.abs(q.a) : Math.abs(n - q.a) < 1e-9; }
  };
  /* The tests load this file in Node to check the drill's arithmetic. */
  if (typeof document === 'undefined') { if (typeof module !== 'undefined') module.exports = Drill; return; }

  /* ------------------------------------------------------------ calendar */

  (function calendar() {
    var gantt = $('[data-rc-gantt]'), form = $('[data-rc-filters]');
    if (!gantt) return;
    var KEY = 'admetia:calendar';
    var rows = $$('.rc-row', gantt), count = $('[data-rc-count]'), none = $('[data-rc-none]');

    /* Today, on the season's axis: July is 0, so Jan–Jun are 6–11. */
    var d = new Date(), m = d.getMonth();
    var days = new Date(d.getFullYear(), m + 1, 0).getDate();
    var at = (m >= 6 ? m - 6 : m + 6) + (d.getDate() - 1) / days;
    gantt.style.setProperty('--today', at.toFixed(3));
    gantt.classList.add('rc-has-today');
    var key = $('.rc-today-key');
    if (key) key.hidden = false;

    if (!form) return;
    form.hidden = false;
    var saved = load(KEY, {});
    ['sector', 'place', 'who'].forEach(function (n) { if (saved[n] && form.elements[n]) form.elements[n].value = saved[n]; });
    function apply() {
      var f = { sector: form.elements.sector.value, place: form.elements.place.value, who: form.elements.who.value };
      var shown = 0;
      rows.forEach(function (r) {
        var ok = (!f.sector || r.getAttribute('data-sectors').split(' ').indexOf(f.sector) > -1) &&
          (!f.place || r.getAttribute('data-places').split(' ').indexOf(f.place) > -1) &&
          (!f.who || r.getAttribute('data-who').split(' ').indexOf(f.who) > -1);
        r.hidden = !ok;
        if (ok) shown++;
      });
      count.textContent = T('{n} of {total} windows', { n: shown, total: rows.length });
      none.hidden = shown > 0;
      save(KEY, f);
    }
    form.addEventListener('change', apply);
    form.addEventListener('submit', function (e) { e.preventDefault(); });
    apply();
  }());

  /* --------------------------------------------------------- draft checker */

  (function checker() {
    var box = $('[data-tk-check]');
    if (!box) return;
    var cfg = JSON.parse(box.getAttribute('data-tk-config'));
    var sel = $('[data-tk-school]', box), text = $('[data-tk-text]', box), counts = $('[data-tk-counts]', box);
    var meter = $('[data-tk-meter]', box), flags = $('[data-tk-flags]', box);
    var ALIAS = { Bocconi: ['Bocconi'], 'Imperial Business School': ['Imperial'], LSE: ['LSE', 'London School of Economics'], ESCP: ['ESCP'] };
    var opts = [];
    cfg.letters.forEach(function (L) {
      if (L.parts.length) L.parts.forEach(function (p, i) { opts.push({ id: L.slug + '|' + i, L: L, label: L.school + ' — ' + T(p.label), max: p.max, min: 0 }); });
      else opts.push({ id: L.slug, L: L, label: L.school + ' — ' + (L.unit === 'chars' ? T('{n} characters', { n: fmt(L.max) }) : L.min ? T('{min}–{max} words', { min: fmt(L.min), max: fmt(L.max) }) : T('about {n} words', { n: fmt(L.max) })), max: L.max, min: L.min });
    });
    opts.forEach(function (o) { var e = el('option', null, o.label); e.value = o.id; sel.appendChild(e); });
    box.hidden = false;
    var last = load('admetia:toolkit-school', null);
    if (last && opts.some(function (o) { return o.id === last; })) sel.value = last;
    function cur() { for (var i = 0; i < opts.length; i++) if (opts[i].id === sel.value) return opts[i]; return opts[0]; }
    function draftKey() { return 'admetia:toolkit-draft:' + sel.value; }

    function update() {
      var o = cur(), s = text.value, w = words(s), c = s.length, ns = s.replace(/\s/g, '').length;
      var used = o.L.unit === 'chars' ? c : w, over = used > o.max, under = o.min && used < o.min;
      counts.innerHTML = '';
      var main = el('span', over ? 'over' : null, o.L.unit === 'chars'
        ? T('{used} of {max} characters', { used: fmt(c), max: fmt(o.max) })
        : o.min ? T('{used} words; the school asks for {min}–{max}', { used: fmt(w), min: fmt(o.min), max: fmt(o.max) }) : T('{used} of about {max} words', { used: fmt(w), max: fmt(o.max) }));
      counts.appendChild(main);
      counts.appendChild(document.createTextNode(' · ' + (o.L.unit === 'chars'
        ? T('{w} words, {ns} characters without spaces', { w: fmt(w), ns: fmt(ns) })
        : T('{c} characters', { c: fmt(c) }))));
      meter.style.width = Math.min(100, o.max ? 100 * used / o.max : 0) + '%';
      meter.className = over ? 'over' : '';

      flags.innerHTML = '';
      if (!s.trim()) return;
      var found = 0;
      function flag(msg, ok) { var li = el('li', ok ? 'ok' : null, msg); flags.appendChild(li); found += ok ? 0 : 1; }
      if (over) flag(T('Over the limit by {n}.', { n: fmt(used - o.max) }));
      if (under) flag(T('Under the minimum by {n} words.', { n: fmt(o.min - used) }));
      cfg.checks.boilerplate.forEach(function (b) {
        var re = new RegExp(b.re, 'gi'), hits = s.match(re);
        if (hits) flag(T('“{word}”: {why}', { word: hits[0], why: T(b.why) }));
      });
      var mine = ALIAS[o.L.school] || [o.L.school];
      cfg.checks.schools.forEach(function (name) {
        if (mine.some(function (a) { return name.indexOf(a) > -1 || a.indexOf(name) > -1; })) return;
        var re = new RegExp('\\b' + name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b');
        if (re.test(s)) flag(T('Names another school: {name}. Check that this letter was written for {school}.', { name: name, school: o.L.school }));
      });
      if (!found) flag(T('Within the limit, and nothing from the schools’ “avoid” lists.'), true);
    }
    function loadDraft() { text.value = load(draftKey(), ''); update(); }
    sel.addEventListener('change', function () { save('admetia:toolkit-school', sel.value); loadDraft(); });
    text.addEventListener('input', function () { save(draftKey(), text.value); update(); });
    $('[data-tk-clear]', box).addEventListener('click', function () { text.value = ''; drop(draftKey()); update(); text.focus(); });
    loadDraft();
  }());

  /* ------------------------------------------------------------ STAR stories */

  (function star() {
    var box = $('[data-iv-star]');
    if (!box) return;
    var KEY = 'admetia:star';
    var data = load(KEY, {});
    var tabs = $$('[data-iv-tab]', box), panels = $$('[data-iv-panel]', box);
    var flash = $('[data-iv-flash]', box);
    box.hidden = false;
    var stat = $('[data-iv-static]');
    if (stat) stat.hidden = true;

    var NAMES = {}, FIELD = { title: T('Title'), s: T('Situation'), t: T('Task'), a: T('Action'), r: T('Result'), l: T('What I learned') };
    tabs.forEach(function (t) { NAMES[t.getAttribute('data-iv-tab')] = t.firstChild.textContent; });
    var crits = [];
    $$('[data-iv-c]', panels[0]).forEach(function (c) { crits.push(c.getAttribute('data-iv-c')); });

    function story(k) { return data[k] || (data[k] = { c: [] }); }
    function select(k, focus) {
      tabs.forEach(function (t) {
        var on = t.getAttribute('data-iv-tab') === k;
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        t.tabIndex = on ? 0 : -1;
        if (on && focus) t.focus();
      });
      panels.forEach(function (p) { p.hidden = p.getAttribute('data-iv-panel') !== k; });
    }
    tabs.forEach(function (t, i) {
      t.addEventListener('click', function () { select(t.getAttribute('data-iv-tab')); });
      t.addEventListener('keydown', function (e) {
        var j = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : e.key === 'Home' ? 0 : e.key === 'End' ? tabs.length - 1 : null;
        if (j === null) return;
        e.preventDefault();
        select(tabs[(j + tabs.length) % tabs.length].getAttribute('data-iv-tab'), true);
      });
    });

    function checks(k) {
      var s = story(k), out = [];
      var missing = ['s', 't', 'a', 'r'].filter(function (f) { return !String(s[f] || '').trim(); });
      out.push(missing.length ? [false, T('Fill in all four parts. Missing: {list}.', { list: missing.map(function (f) { return FIELD[f].toLowerCase(); }).join(', ') })] : [true, T('Situation, task, action and result are all there.')]);
      var act = String(s.a || '');
      if (act.trim()) {
        var me = (act.match(/\b(I|I'm|I've|I'd|my|me)\b/g) || []).length, we = (act.match(/\b(we|our|us)\b/gi) || []).length;
        out.push(me >= we ? [true, T('Your action is in the first person.')] : [false, T('Your action says “we” more than “I”: interviewers want your own part.')]);
      }
      if (String(s.r || '').trim()) out.push(/\d/.test(s.r) ? [true, T('Your result has a number in it.')] : [false, T('Add a number to the result if there is one: how much, how many, how fast.')]);
      var setup = words(s.s) + words(s.t), total = setup + words(s.a) + words(s.r) + words(s.l);
      if (total > 40) out.push(setup <= total * 0.35 ? [true, T('Most of the story is about what you did.')] : [false, T('Situation and task take more than a third of it: cut the scene-setting.')]);
      if (total) {
        var min = Math.max(0.5, Math.round(total / 140 * 2) / 2);
        out.push(total <= 400 ? [true, T('About {m} minutes to say at a normal pace.', { m: String(min) })] : [false, T('About {m} minutes to say: aim for about two.', { m: String(min) })]);
      }
      out.push(s.c.length ? [true, T('Criteria tagged: {n}.', { n: s.c.length })] : [false, T('Tag the criteria this story shows.')]);
      return out;
    }
    function render(k) {
      var p = $('[data-iv-panel="' + k + '"]', box), ul = $('[data-iv-checks]', p);
      ul.innerHTML = '';
      checks(k).forEach(function (c) { ul.appendChild(el('li', c[0] ? 'ok' : 'todo', c[1])); });
      var s = story(k), done = ['s', 't', 'a', 'r'].every(function (f) { return String(s[f] || '').trim(); });
      var tick = $('[data-iv-done="' + k + '"]', box);
      tick.className = 'iv-tick' + (done ? ' done' : '');
      tick.setAttribute('aria-label', done ? T('complete') : '');
    }
    function cover() {
      var t = $('[data-iv-cover]', box);
      t.innerHTML = '';
      var head = el('thead'), tr = el('tr');
      tr.appendChild(el('th', null, T('Criterion')));
      tabs.forEach(function (tab) { var th = el('th', null, NAMES[tab.getAttribute('data-iv-tab')]); th.scope = 'col'; tr.appendChild(th); });
      head.appendChild(tr); t.appendChild(head);
      var body = el('tbody');
      crits.forEach(function (c) {
        var row = el('tr'), th = el('th', null, c);
        th.scope = 'row'; th.setAttribute('translate', 'no');
        row.appendChild(th);
        var any = false;
        tabs.forEach(function (tab) {
          var on = story(tab.getAttribute('data-iv-tab')).c.indexOf(c) > -1;
          any = any || on;
          var td = el('td', on ? 'on' : null, on ? '✓' : '');
          row.appendChild(td);
        });
        if (any) body.appendChild(row);
      });
      if (!body.children.length) {
        var r = el('tr'), td = el('td', null, T('Tag criteria in each story to see what your five stories cover.'));
        td.colSpan = tabs.length + 1;
        r.appendChild(td); body.appendChild(r);
      }
      t.appendChild(body);
      var total = 0;
      tabs.forEach(function (tab) { var s = story(tab.getAttribute('data-iv-tab')); total += words(s.s) + words(s.t) + words(s.a) + words(s.r) + words(s.l); });
      $('[data-iv-time]', box).textContent = total ? T('All five stories: {w} words, about {m} minutes to say.', { w: fmt(total), m: String(Math.round(total / 140)) }) : '';
    }
    panels.forEach(function (p) {
      var k = p.getAttribute('data-iv-panel'), s = story(k);
      $$('[data-iv-f]', p).forEach(function (f) {
        var n = f.getAttribute('data-iv-f');
        f.value = s[n] || '';
        f.addEventListener('input', function () { s[n] = f.value; save(KEY, data); render(k); cover(); });
      });
      $$('[data-iv-c]', p).forEach(function (c) {
        var v = c.getAttribute('data-iv-c');
        c.checked = s.c.indexOf(v) > -1;
        c.addEventListener('change', function () {
          s.c = s.c.filter(function (x) { return x !== v; });
          if (c.checked) s.c.push(v);
          save(KEY, data); render(k); cover();
        });
      });
      render(k);
    });
    cover();

    function asText() {
      return tabs.map(function (tab) {
        var k = tab.getAttribute('data-iv-tab'), s = story(k);
        var lines = [NAMES[k].toUpperCase() + (s.title ? ' — ' + s.title : '')];
        ['s', 't', 'a', 'r', 'l'].forEach(function (f) { if (String(s[f] || '').trim()) lines.push(FIELD[f] + ': ' + s[f].trim()); });
        if (s.c.length) lines.push(T('Shows') + ': ' + s.c.join('; '));
        return lines.join('\n');
      }).join('\n\n') + '\n';
    }
    function say(msg) { flash.textContent = msg; setTimeout(function () { if (flash.textContent === msg) flash.textContent = ''; }, 4000); }
    $('[data-iv-copy]', box).addEventListener('click', function () {
      var txt = asText();
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(function () { say(T('Copied.')); }, function () { say(T('Your browser blocked copying; use “Download as text”.')); });
      else say(T('Your browser blocked copying; use “Download as text”.'));
    });
    $('[data-iv-download]', box).addEventListener('click', function () {
      var a = el('a');
      a.href = URL.createObjectURL(new Blob([asText()], { type: 'text/plain;charset=utf-8' }));
      a.download = 'my-interview-stories.txt';
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
    });
    $('[data-iv-clear]', box).addEventListener('click', function () {
      if (!window.confirm(T('Clear all five stories from this browser?'))) return;
      data = {}; drop(KEY);
      panels.forEach(function (p) {
        $$('[data-iv-f]', p).forEach(function (f) { f.value = ''; });
        $$('[data-iv-c]', p).forEach(function (c) { c.checked = false; });
        render(p.getAttribute('data-iv-panel'));
      });
      cover(); say(T('Cleared.'));
    });
  }());

  /* ------------------------------------------------------------- flashcards */

  (function cards() {
    var box = $('[data-iv-decks]');
    if (!box) return;
    var bar = $('[data-iv-deckbar]', box), pick = $('[data-iv-deck]', box), card = $('[data-iv-card]', box);
    var sets = $$('[data-iv-deckset]', box);
    var q = $('[data-iv-fc-q]', card), a = $('[data-iv-fc-a]', card), meta = $('[data-iv-fc-meta]', card);
    var bShow = $('[data-iv-fc-show]', card), bAgain = $('[data-iv-fc-again]', card), bKnow = $('[data-iv-fc-know]', card);
    var queue = [], seen = 0, total = 0;
    bar.hidden = false;

    function showSets() {
      var v = pick.value;
      sets.forEach(function (s) { s.hidden = card.hidden ? (v !== 'all' && s.getAttribute('data-iv-deckset') !== v) : true; });
    }
    pick.addEventListener('change', showSets);
    function next() {
      if (!queue.length) {
        meta.textContent = T('Deck finished: {n} cards.', { n: total });
        q.textContent = T('Pick a deck and start again, or go back to the list.');
        a.hidden = true; bShow.hidden = true; bAgain.hidden = true; bKnow.hidden = true;
        return;
      }
      var c = queue[0];
      seen++;
      meta.textContent = T('{left} of {n} left', { left: queue.length, n: total });
      q.textContent = $('summary', c).textContent;
      a.innerHTML = $('.iv-a', c).innerHTML;
      a.hidden = true; bShow.hidden = false; bAgain.hidden = true; bKnow.hidden = true;
      bShow.focus();
    }
    $('[data-iv-flash-start]', box).addEventListener('click', function () {
      var v = pick.value;
      queue = $$('[data-iv-q]', box).filter(function (d) { return v === 'all' || d.getAttribute('data-iv-q').indexOf(v + '-') === 0; });
      for (var i = queue.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = queue[i]; queue[i] = queue[j]; queue[j] = t; }
      total = queue.length; seen = 0;
      card.hidden = false; showSets(); next();
    });
    bShow.addEventListener('click', function () { a.hidden = false; bShow.hidden = true; bAgain.hidden = false; bKnow.hidden = false; bKnow.focus(); });
    bAgain.addEventListener('click', function () { queue.push(queue.shift()); next(); });
    bKnow.addEventListener('click', function () { queue.shift(); next(); });
    $('[data-iv-fc-stop]', card).addEventListener('click', function () { card.hidden = true; showSets(); pick.focus(); });
  }());


  (function drill() {
    var box = $('[data-iv-drill]');
    if (!box) return;
    var form = $('[data-iv-drill-form]', box), input = $('[data-iv-drill-a]', box), qEl = $('[data-iv-drill-q]', box);
    var meta = $('[data-iv-drill-meta]', box), flash = $('[data-iv-drill-flash]', box), start = $('[data-iv-drill-start]', box);
    var KINDS = ['percent', 'multiply', 'divide', 'growth', 'breakeven'];
    var cur = null, right = 0, done = 0, ends = 0, timer = null;
    box.hidden = false; form.hidden = true;
    function fmtAns(q) { return q.tol >= 0.1 ? T('about {n}', { n: (Math.round(q.a * 10) / 10).toString() }) : fmt(Math.round(q.a * 100) / 100); }
    function ask() { cur = Drill.make(Drill.pickOne(KINDS)); qEl.textContent = cur.q; input.value = ''; input.focus(); }
    function tick() {
      var left = Math.max(0, Math.round((ends - Date.now()) / 1000));
      meta.textContent = T('{s} seconds left · {r} right out of {d}', { s: left, r: right, d: done });
      if (left <= 0) stop();
    }
    function stop() {
      clearInterval(timer); timer = null;
      form.hidden = true; qEl.textContent = ''; start.hidden = false;
      meta.textContent = T('Time. {r} right out of {d}.', { r: right, d: done });
      start.textContent = T('Go again');
      start.focus();
    }
    start.addEventListener('click', function () {
      right = 0; done = 0; ends = Date.now() + 120000;
      start.hidden = true; form.hidden = false; flash.textContent = '';
      ask(); tick(); timer = setInterval(tick, 1000);
    });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!cur || !timer) return;
      var n = Drill.parse(input.value);
      if (isNaN(n)) { flash.textContent = T('Type a number.'); return; }
      done++;
      if (Drill.right(cur, n)) { right++; flash.textContent = T('Right.'); }
      else flash.textContent = T('Not quite: {q} = {a}.', { q: cur.q, a: fmtAns(cur) });
      tick(); ask();
    });
  }());
}());
