/* ---------------------------------------------------------------------------
 * How hiring works in 46 countries (hiring.html).
 *
 * Two things over the per-country files in data/atlas/entry/:
 *   the planner   stage + path + role family + country → the route most used
 *                 there for that path, what it needs, and which dates apply
 *   the table     the same rows for every country, filterable by route,
 *                 role family, master's, language and sponsorship
 *
 * Nothing chosen here leaves the browser. Entry files load together the
 * first time the page opens (one script per country); the country record
 * (for the recruiting calendar) loads only for the country planned for.
 * ------------------------------------------------------------------------- */

(function () {
  'use strict';

  var A = window.ATLAS;
  if (!A || !A.entryRoutes) return;
  var T = window.I18N ? I18N.t : function (s) { return s; };
  var IT = window.I18N && I18N.lang === 'it';
  var O = window.ATLAS_OUTCOMES || null;

  /* ------------------------------------------------------------------ */
  /* Helpers                                                              */
  /* ------------------------------------------------------------------ */

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined && text !== null) n.textContent = T(text);
    return n;
  }
  function raw(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined && text !== null) n.textContent = text;
    return n;
  }
  function L(pair) { return Array.isArray(pair) ? (IT && pair[1] ? pair[1] : pair[0]) : T(pair); }
  function vocab(list, id) { return (list || []).filter(function (x) { return x.id === id; })[0]; }
  function custom(e, k) { return (e.customs || []).filter(function (x) { return x.k === k; })[0]; }
  function customName(k, v) {
    var C = vocab(A.entryCustoms, k), V = C && vocab(C.values, v);
    return V ? V.name : null;
  }
  function chip(k, v) {
    var n = customName(k, v);
    return n ? el('span', 'verdict entry-v cv-' + k + '-' + v, n) : raw('span', 'not-rated', '—');
  }
  function monthName(m) {
    var s = new Date(2020, m - 1, 15).toLocaleString((window.I18N && I18N.locale) || 'en-GB', { month: 'long' });
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
  function countryName(id) { return T(A.byId[id].name); }

  /* ------------------------------------------------------------------ */
  /* Loading                                                              */
  /* ------------------------------------------------------------------ */

  var loadingEntry = {};
  function loadEntry(id) {
    if (A.entries[id]) return Promise.resolve(A.entries[id]);
    if (loadingEntry[id]) return loadingEntry[id];
    loadingEntry[id] = new Promise(function (ok) {
      var s = document.createElement('script');
      s.src = A.entryFile(id);
      s.onload = function () { ok(A.entries[id] || null); };
      s.onerror = function () { delete loadingEntry[id]; ok(null); };
      document.head.appendChild(s);
    });
    return loadingEntry[id];
  }
  var loadingRec = {};
  function loadRec(id) {
    if (A.records[id]) return Promise.resolve(A.records[id]);
    if (loadingRec[id]) return loadingRec[id];
    loadingRec[id] = new Promise(function (ok) {
      var s = document.createElement('script');
      s.src = A.file(id);
      s.onload = function () { ok(A.records[id] || null); };
      s.onerror = function () { delete loadingRec[id]; ok(null); };
      document.head.appendChild(s);
    });
    return loadingRec[id];
  }

  /* ------------------------------------------------------------------ */
  /* Sources, listed under whatever the planner shows                      */
  /* ------------------------------------------------------------------ */

  function noteList(notes) {
    var box = el('ol', 'hiring-src');
    notes.forEach(function (n) {
      var li = el('li');
      var t = n.href ? raw('a', null, n.title) : raw('span', null, n.title);
      if (n.href) { t.href = n.href; t.rel = 'noopener'; }
      li.appendChild(t);
      li.appendChild(raw('span', 'ev', ' — ' + T(n.tag === 'reading' ? 'Our reading' : n.tag) + (n.seen ? ', ' + T('as of {date}', { date: n.seen }) : '')));
      box.appendChild(li);
    });
    return box;
  }
  /* A run of [English, Italian, ids] lines with numbered marks into one list. */
  function Run(e, pool) {
    var p = el('p', 'claim');
    return {
      node: p,
      add: function (lines) {
        (lines || []).forEach(function (x, i) {
          if (p.childNodes.length) p.appendChild(document.createTextNode(' '));
          p.appendChild(raw('span', 'claim-t', L(x)));
          String(x[2] || '').split(/\s+/).filter(Boolean).forEach(function (k) {
            var note = k === 'ours' ? { tag: 'reading', title: T('Admetia’s own reading of how hiring works here; no single source was read for it'), href: null, seen: e.checked }
              : ((e.sources || {})[k] ? { tag: e.sources[k][0], title: e.sources[k][1], href: e.sources[k][2], seen: e.sources[k][3] || e.checked } : null);
            if (!note) return;
            var at = -1;
            pool.forEach(function (q, j) { if (q.title === note.title && q.href === note.href) at = j; });
            if (at < 0) { pool.push(note); at = pool.length - 1; }
            p.appendChild(raw('sup', 'cite', ' [' + (at + 1) + ']'));
          });
        });
      }
    };
  }

  /* ------------------------------------------------------------------ */
  /* The planner                                                          */
  /* ------------------------------------------------------------------ */

  var STAGES = [
    { id: 'studying', name: 'Still studying', path: 'intern' },
    { id: 'graduated', name: 'Just graduated, or about to', path: 'first' },
    { id: 'working', name: 'Already working', path: 'exp' }
  ];
  var plan = { stage: 'graduated', path: 'first', field: '', country: '' };

  function select(id, label, options, value, onchange) {
    var w = el('label', 'hiring-pick');
    w.appendChild(el('span', 'item-k', label));
    var s = document.createElement('select');
    s.id = id;
    options.forEach(function (o) {
      var op = raw('option', null, o[1]);
      op.value = o[0];
      if (o[0] === value) op.selected = true;
      s.appendChild(op);
    });
    s.addEventListener('change', function () { onchange(s.value); });
    w.appendChild(s);
    return w;
  }

  function drawPlanner() {
    var box = document.getElementById('hiring-planner');
    box.textContent = '';
    box.appendChild(el('h2', 'section', 'Plan your route'));
    var form = el('div', 'hiring-form');
    form.appendChild(select('pl-country', 'Country', [['', T('Choose a country')]].concat(A.countries.map(function (c) { return [c.id, countryName(c.id)]; }).sort(function (a, b) { return a[1].localeCompare(b[1]); })), plan.country, function (v) { plan.country = v; setHash(); drawPlanner(); }));
    form.appendChild(select('pl-stage', 'Where you are now', STAGES.map(function (s) { return [s.id, T(s.name)]; }), plan.stage, function (v) {
      plan.stage = v; plan.path = vocab(STAGES, v).path; setHash(); drawPlanner();
    }));
    form.appendChild(select('pl-path', 'What you want', A.entryPaths.map(function (p) { return [p.id, T(p.name)]; }), plan.path, function (v) { plan.path = v; setHash(); drawPlanner(); }));
    form.appendChild(select('pl-field', 'Role family', [['', T('Any')]].concat(A.entryFields.map(function (f) { return [f.id, T(f.name)]; })), plan.field, function (v) { plan.field = v; setHash(); drawPlanner(); }));
    box.appendChild(form);
    var out = el('div', 'hiring-out');
    box.appendChild(out);
    if (!plan.country) {
      out.appendChild(el('p', 'atlas-note', 'Pick a country to see the route most people take there for what you want to do, what it needs, and when it opens.'));
      return;
    }
    var id = plan.country;
    out.appendChild(el('p', 'atlas-note', 'Loading…'));
    Promise.all([loadEntry(id), loadRec(id)]).then(function (got) {
      if (plan.country !== id) return;
      out.textContent = '';
      var e = got[0], rec = got[1];
      if (!e) { out.appendChild(el('p', 'atlas-note', 'This country’s hiring research could not be loaded.')); return; }
      showPlan(out, e, rec);
    });
  }

  function showPlan(out, e, rec) {
    var pool = [], path = plan.path, field = plan.field;
    var ways = e.ways || [];
    var fits = ways.filter(function (w) { return (' ' + (w.p || '') + ' ').indexOf(' ' + path + ' ') > -1; });
    var best = fits[0] || ways[0];
    var head = el('h3', 'hiring-h');
    head.appendChild(raw('span', null, countryName(e.id) + ' · ' + T(vocab(A.entryPaths, path).name)));
    out.appendChild(head);

    /* The route. */
    if (best) {
      var step = el('div', 'hiring-step');
      step.appendChild(el('p', 'item-k', 'The route most used'));
      var nm = raw('h4', 'hiring-way', L(best.name));
      step.appendChild(nm);
      var tags = el('p', 'entry-tags');
      if (best.r) tags.appendChild(el('span', 'verdict entry-v entry-route', vocab(A.entryRoutes, best.r).name));
      var rank = ways.indexOf(best) + 1;
      tags.appendChild(raw('span', 'entry-basis', T('number {n} of {m} routes here', { n: rank, m: ways.length })));
      if (best.basis) tags.appendChild(raw('span', 'entry-basis', T('Ranked on: {b}', { b: T(vocab(A.entryBasis, best.basis).name).toLowerCase() })));
      step.appendChild(tags);
      var r = Run(e, pool); r.add(best.t); step.appendChild(r.node);
      if (!fits.length) step.appendChild(el('p', 'not-rated', 'No route here is marked as specific to this path; this is the most common route overall.'));
      else if (fits.length > 1) {
        var other = el('p', 'not-rated');
        other.appendChild(raw('span', null, T('Also used:') + ' ' + fits.slice(1).map(function (w) { return L(w.name); }).join(' · ')));
        step.appendChild(other);
      }
      out.appendChild(step);
    }

    /* What it needs. */
    var need = el('div', 'hiring-step');
    need.appendChild(el('p', 'item-k', 'What it needs'));
    var list = el('div', 'atlas-items entry-customs');
    function row(k, cell) { var d = el('div', 'atlas-item'); d.appendChild(el('h3', 'item-k', k)); d.appendChild(cell); list.appendChild(d); }
    var lg = (e.lang || []).filter(function (x) { return !field || x.f === field; })[0];
    if (lg) {
      var c = el('div', 'entry-cell');
      c.appendChild(el('span', 'verdict entry-v cv-lang-' + lg.v, vocab(A.entryLang, lg.v).name));
      if (lg.lv) c.appendChild(raw('span', 'entry-lv', lg.lv));
      var rr = Run(e, pool); rr.add(lg.t); c.appendChild(rr.node);
      row(T('Language at work') + (field ? ' · ' + T(vocab(A.entryFields, lg.f).name) : ''), c);
    } else {
      var lc = custom(e, 'language');
      if (lc) { var c2 = el('div', 'entry-cell'); c2.appendChild(chip('language', lc.v)); var r2 = Run(e, pool); r2.add(lc.t); c2.appendChild(r2.node); row(T('Language'), c2); }
    }
    ['masters', 'degrees', 'abroad', 'sponsorr', 'docs'].forEach(function (k) {
      var x = custom(e, k);
      if (!x) return;
      var C = vocab(A.entryCustoms, k), c3 = el('div', 'entry-cell');
      c3.appendChild(chip(k, x.v));
      var r3 = Run(e, pool); r3.add(x.t); c3.appendChild(r3.node);
      row(T(C.name), c3);
    });
    if (field) {
      var f = (e.fields || []).filter(function (x) { return x.f === field; })[0];
      if (f) { var c4 = el('div', 'entry-cell'), r4 = Run(e, pool); r4.add(f.t); c4.appendChild(r4.node); row(T(vocab(A.entryFields, field).name), c4); }
    }
    need.appendChild(list);
    out.appendChild(need);

    /* Dates. */
    var dates = el('div', 'hiring-step');
    dates.appendChild(el('p', 'item-k', 'When it opens'));
    var any = false;
    var progs = (e.programmes || []).filter(function (p) { return p.w && (!field || p.f === field); });
    if (progs.length) {
      any = true;
      var ul = el('ul', 'hiring-dates');
      progs.forEach(function (p) {
        var li = el('li');
        li.appendChild(raw('b', null, p.n));
        li.appendChild(raw('span', null, ' · ' + p.o + ': ' + (p.w[0] === p.w[1] ? monthName(p.w[0]) : monthName(p.w[0]) + ' – ' + monthName(p.w[1]))));
        var note = e.sources && String(p.ids || '').split(/\s+/)[0];
        if (note && e.sources[note]) {
          var s = e.sources[note], at = -1;
          pool.forEach(function (q, j) { if (q.title === s[1] && q.href === s[2]) at = j; });
          if (at < 0) { pool.push({ tag: s[0], title: s[1], href: s[2], seen: s[3] }); at = pool.length - 1; }
          li.appendChild(raw('sup', 'cite', ' [' + (at + 1) + ']'));
        }
        ul.appendChild(li);
      });
      dates.appendChild(ul);
    }
    var cal = rec && (rec.work || []).filter(function (w) { return w.k === 'Recruiting calendar'; })[0];
    if (cal) {
      (cal.c || []).forEach(function (cid) {
        var cl = rec.claims[cid];
        if (!cl) return;
        any = true;
        var p = el('p', 'claim');
        p.appendChild(raw('span', 'claim-t', T(cl.t)));
        var at = -1;
        pool.forEach(function (q, j) { if (q.title === cl.by && q.href === cl.src) at = j; });
        if (at < 0) { pool.push({ tag: cl.tag, title: cl.by, href: cl.src, seen: cl.seen }); at = pool.length - 1; }
        p.appendChild(raw('sup', 'cite', ' [' + (at + 1) + ']'));
        dates.appendChild(p);
      });
    }
    if (!any) dates.appendChild(el('p', 'not-rated', 'No dates found for this country and role family. See its page for the full picture.'));
    out.appendChild(dates);

    if (pool.length) { out.appendChild(el('p', 'item-k', 'Sources')); out.appendChild(noteList(pool)); }
    var more = el('p', 'atlas-note');
    var a = raw('a', null, T('Open {country}’s page', { country: countryName(e.id) }));
    a.href = 'map.html#' + e.id.toLowerCase();
    more.appendChild(a);
    out.appendChild(more);
  }

  /* ------------------------------------------------------------------ */
  /* The table                                                            */
  /* ------------------------------------------------------------------ */

  var flt = { route: '', field: '', masters: '', lang: '', sponsor: '', sort: 'name' };

  function drawFilters() {
    var box = document.getElementById('hiring-filters');
    box.textContent = '';
    box.appendChild(el('h2', 'section', 'Compare the countries'));
    var f = el('div', 'hiring-form');
    f.appendChild(select('f-route', 'A route in use', [['', T('Any')]].concat(A.entryRoutes.map(function (r) { return [r.id, T(r.name)]; })), flt.route, function (v) { flt.route = v; drawTable(); }));
    f.appendChild(select('f-field', 'Role family', [['', T('Any')]].concat(A.entryFields.map(function (x) { return [x.id, T(x.name)]; })), flt.field, function (v) { flt.field = v; drawFilters(); drawTable(); }));
    f.appendChild(select('f-lang', 'Language at work', [['', T('Any')]].concat(A.entryLang.map(function (x) { return [x.id, T(x.name)]; })), flt.lang, function (v) { flt.lang = v; drawTable(); }));
    f.appendChild(select('f-masters', 'Is a master’s expected', [['', T('Any')]].concat(vocab(A.entryCustoms, 'masters').values.map(function (x) { return [x.id, T(x.name)]; })), flt.masters, function (v) { flt.masters = v; drawTable(); }));
    f.appendChild(select('f-sponsor', 'Employers who sponsor visas', [['', T('Any')]].concat(vocab(A.entryCustoms, 'sponsorr').values.map(function (x) { return [x.id, T(x.name)]; })), flt.sponsor, function (v) { flt.sponsor = v; drawTable(); }));
    box.appendChild(f);
  }

  function langFor(e, field) {
    var xs = e.lang || [];
    if (field) return xs.filter(function (x) { return x.f === field; })[0] || null;
    /* No role family chosen: the country's general verdict. */
    var c = custom(e, 'language');
    return c ? { v: c.v === 'local' ? 'local' : c.v === 'english' ? 'english' : 'bilingual', general: true } : null;
  }

  function recentGrad(id) {
    var m = O && O.country[id] && O.country[id].recentGrad;
    return m || null;
  }

  function drawTable() {
    var box = document.getElementById('hiring-table');
    box.textContent = '';
    var rows = A.countries.map(function (c) { return { c: c, e: A.entries[c.id] }; }).filter(function (r) { return r.e; });
    rows = rows.filter(function (r) {
      var e = r.e;
      if (flt.route && !(e.ways || []).some(function (w) { return w.r === flt.route; })) return false;
      if (flt.masters) { var m = custom(e, 'masters'); if (!m || m.v !== flt.masters) return false; }
      if (flt.sponsor) { var s = custom(e, 'sponsorr'); if (!s || s.v !== flt.sponsor) return false; }
      if (flt.lang) { var l = langFor(e, flt.field); if (!l || l.v !== flt.lang) return false; }
      else if (flt.field && !langFor(e, flt.field)) { /* no account for that family: keep, shown as a dash */ }
      return true;
    });
    function rankOf(e) { if (!flt.route) return 0; var at = -1; (e.ways || []).forEach(function (w, i) { if (w.r === flt.route && at < 0) at = i; }); return at; }
    rows.sort(function (a, b) {
      if (flt.route) { var d = rankOf(a.e) - rankOf(b.e); if (d) return d; }
      return countryName(a.c.id).localeCompare(countryName(b.c.id));
    });
    box.appendChild(raw('p', 'filter-status', T('{n} of {m} countries', { n: rows.length, m: A.countries.length })));
    if (!rows.length) { box.appendChild(el('p', 'filter-empty', 'No country matches all of these. Loosen one filter.')); return; }

    var cols = [['Country'], ['Most-used route']];
    if (flt.route) cols.push(['Where this route ranks']);
    cols.push(['Hiring calendar'], ['Is a master’s expected']);
    cols.push([flt.field ? T('Language at work') + ' · ' + T(vocab(A.entryFields, flt.field).name) : 'Language']);
    cols.push(['School name'], ['Apprenticeship and dual-study culture'], ['Public-sector weight'], ['Employers who sponsor visas'], ['Recent graduates in work']);
    var t = el('table', 'life-t hiring-t'), th = el('thead'), tr = el('tr');
    cols.forEach(function (h) { tr.appendChild(raw('th', null, T(h[0]))); });
    th.appendChild(tr); t.appendChild(th);
    var tb = el('tbody');
    rows.forEach(function (r) {
      var e = r.e, row = el('tr');
      var h = raw('th', null, '');
      var a = raw('a', null, countryName(r.c.id));
      a.href = 'map.html#' + r.c.id.toLowerCase();
      h.appendChild(a);
      row.appendChild(h);
      var w0 = (e.ways || [])[0];
      row.appendChild(raw('td', null, w0 && w0.r ? T(vocab(A.entryRoutes, w0.r).name) : '—'));
      if (flt.route) { var k = rankOf(e) + 1; row.appendChild(raw('td', null, '#' + k)); }
      var cells = [['season'], ['masters']];
      cells.forEach(function (c) { var x = custom(e, c[0]), td = el('td'); td.appendChild(x ? chip(c[0], x.v) : raw('span', 'not-rated', '—')); row.appendChild(td); });
      var lg = langFor(e, flt.field), tdl = el('td');
      if (lg) {
        tdl.appendChild(el('span', 'verdict entry-v cv-lang-' + lg.v, vocab(A.entryLang, lg.v).name));
        if (lg.lv) tdl.appendChild(raw('span', 'entry-lv', lg.lv));
      } else tdl.appendChild(raw('span', 'not-rated', '—'));
      row.appendChild(tdl);
      [['brand'], ['dual'], ['publicw'], ['sponsorr']].forEach(function (c) { var x = custom(e, c[0]), td = el('td'); td.appendChild(x ? chip(c[0], x.v) : raw('span', 'not-rated', '—')); row.appendChild(td); });
      var rg = recentGrad(r.c.id), tdo = raw('td', 'out-v', rg ? (rg.v.toLocaleString((window.I18N && I18N.locale) || 'en-GB', { maximumFractionDigits: 1 }) + '% (' + rg.year + ')' + (rg.group === 'national' ? ' †' : '')) : '—');
      if (rg) tdo.title = IT && rg.defIt ? rg.defIt : T(rg.def);
      row.appendChild(tdo);
      tb.appendChild(row);
    });
    t.appendChild(tb);
    var wrap = el('div', 'life-scroll');
    wrap.appendChild(t);
    box.appendChild(wrap);
    box.appendChild(el('p', 'not-rated', '† This country is not in Eurostat’s survey: its figure has its own definition (hover for it), so do not compare it with the others. The Eurostat figure is the employment rate of graduates aged 20-34 who finished 1 to 3 years ago.'));
    box.appendChild(el('p', 'atlas-note', 'Open a country for the evidence behind every cell, its sources and the dates it was read.'));
  }

  /* ------------------------------------------------------------------ */
  /* Address: #country/path/field keeps a plan linkable                    */
  /* ------------------------------------------------------------------ */

  function setHash() {
    var h = plan.country ? '#' + plan.country.toLowerCase() + '/' + plan.stage + '/' + plan.path + (plan.field ? '/' + plan.field : '') : '';
    try { history.replaceState(null, '', location.pathname + location.search + h); } catch (e) { /* file:// */ }
  }
  function readHash() {
    var m = /^#([a-z]{2})\/(studying|graduated|working)\/(first|intern|exp)(?:\/([a-z]+))?$/.exec(location.hash.toLowerCase());
    if (!m || !A.byId[m[1].toUpperCase()]) return;
    plan.country = m[1].toUpperCase(); plan.stage = m[2]; plan.path = m[3];
    plan.field = m[4] && vocab(A.entryFields, m[4]) ? m[4] : '';
  }

  /* ------------------------------------------------------------------ */
  /* Boot                                                                 */
  /* ------------------------------------------------------------------ */

  readHash();
  drawPlanner();
  drawFilters();
  Promise.all(A.countries.map(function (c) { return loadEntry(c.id); })).then(function () {
    drawTable();
    document.title = T('How hiring works in 46 countries — Admetia');
  });
})();
