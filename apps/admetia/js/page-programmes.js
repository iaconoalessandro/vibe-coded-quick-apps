/* ---------------------------------------------------------------------------
 * Programme Directory (programmes.html): every programme the three
 * calculators score, searchable and filterable without answering anything.
 *
 * Everything shown comes from the calculators' own models, read as they are:
 *
 *   data/masters-model.js     business master's (MiM, MiF, Marketing)
 *   data/computing-model.js   computing master's (CS, Data & AI, Conversion)
 *   data/mba-model.js         MBA schools
 *   data/deadlines.js         official admissions pages and 2026–27 rounds
 *   data/programme-fees.js    fees, transcribed from research/money/ and
 *                             research/decisions/ (see that file)
 *
 * Nothing is scored here. The calibrated bar (`threshold`) is shown as the
 * model's own number and as a rank within its track, and every published
 * requirement keeps its source tag. "Test my chances" opens the calculator
 * with ?school=<key>, and the calculator opens its results at that row.
 *
 * Filters: within a group, any ticked option matches; across groups, every
 * group must match. The state lives in the address after "#", so a filtered
 * list can be shared or bookmarked.
 * ------------------------------------------------------------------------- */

(function () {
  'use strict';

  var MM = window.MASTERS_MODEL, IT = window.IT_MODEL, MB = window.MBA_MODEL;
  var FEES = window.PROGRAMME_FEES || {};
  var root = document.getElementById('programmes');
  if (!root || !MM || !IT || !MB || !window.ResultsKit) return;

  var T = I18N.t, tn = I18N.tn;
  var el = Wizard.el;
  var RK = window.ResultsKit;

  function norm(s) { return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  function has(a, x) { return !!a && a.indexOf(x) > -1; }

  var SRC = { OFF: 'school', OFF2: 'school doc', TP: 'third-party', FOI: 'FOI', NP: 'not published', NV: 'unverified', CAL: 'calibration', EST: 'estimate' };
  function srcTag(code) {
    if (!code || !SRC[code]) return null;
    return el('span', 'provenance ' + code, T(SRC[code]));
  }

  /* ---------------------------------------------------------- tracks --- */

  var TRACKS = [
    { id: 'mim', label: 'Management', calc: 'masters' },
    { id: 'mif', label: 'Finance', calc: 'masters' },
    { id: 'marketing', label: 'Marketing', calc: 'masters' },
    { id: 'mba', label: 'MBA', calc: 'mba' },
    { id: 'cs', label: 'Computer Science', calc: 'computing' },
    { id: 'dsai', label: 'Data & AI', calc: 'computing' },
    { id: 'conversion', label: 'Conversion', calc: 'computing' }
  ];
  function trackLabel(id) { for (var i = 0; i < TRACKS.length; i++) if (TRACKS[i].id === id) return T(TRACKS[i].label); return id; }
  function calcHref(p, track) {
    var key = encodeURIComponent(p.key);
    if (track === 'mba') return 'mba.html?school=' + key;
    var page = has(['mim', 'mif', 'marketing'], track) ? 'masters.html' : 'computing.html';
    return page + '?track=' + track + '&school=' + key;
  }

  /* ---------------------------------------------------- the records --- */

  /* Gate types, grouped the way a reader asks: "do I need maths credits?",
   * "do I need a particular degree?". English and test floors are shown on
   * the row but are filters of their own. */
  var PREREQ = {
    minEctsQuant: 'quant', minMathsEcts: 'quant', minModules: 'quant', minCsEcts: 'quant',
    minEctsBusiness: 'business',
    quantDegree: 'degree', degreeFields: 'degree', csDegreeRequired: 'degree', bachelorLength: 'degree',
    minDegreeClass: 'grade',
    noCsDegree: 'convert'
  };

  function fromModel(s, kind) {
    var gates = s.gates || [];
    var cap = null, minExp = null, floor = null, english = null, prereq = [];
    gates.forEach(function (g) {
      if (g.type === 'maxWorkMonths') cap = g;
      else if (g.type === 'minWorkMonths') minExp = g;
      else if (g.type === 'testMinGmat') floor = g;
      else if (g.type === 'minEnglish') english = g;
      else if (PREREQ[g.type]) prereq.push({ kind: PREREQ[g.type], g: g });
    });
    return {
      key: s.id, name: s.name, kind: kind, tracks: s.tracks.slice(), place: s.region, area: RK.regionOf(s.region),
      test: s.test || null, floor: floor, cap: cap, minExp: minExp, english: english, prereq: prereq,
      gates: gates, bar: s.threshold, strong: s.strong, profile: s.profile, because: s.because,
      regime: (kind === 'masters' ? MM : IT).regimes[s.regime] || null, facts: s.facts || [], est: s.est || null
    };
  }

  var ALL = [];
  MM.schools.forEach(function (s) { ALL.push(fromModel(s, 'masters')); });
  IT.schools.forEach(function (s) { ALL.push(fromModel(s, 'computing')); });
  MB.adjustedSchools.forEach(function (s) {
    ALL.push({ key: 'mba:' + s.name, name: s.name, kind: 'mba', tracks: ['mba'], place: s.region, area: RK.regionOf(s.region),
      test: null, floor: null, cap: null, minExp: null, english: null, prereq: [], gates: [],
      bar: s.competitive, strong: s.strong, mbaAdjusted: true, facts: [] });
  });
  MB.generalSchools.forEach(function (s) {
    ALL.push({ key: 'mba:' + s.name, name: s.name, kind: 'mba', tracks: ['mba'], place: s.region, area: RK.regionOf(s.region),
      test: null, floor: null, cap: null, minExp: null, english: null, prereq: [], gates: [],
      bar: s.points, strong: null, facts: [] });
  });

  /* Rank by the calibrated bar within each track: "3rd highest of 26". */
  TRACKS.forEach(function (t) {
    var inTrack = ALL.filter(function (p) { return has(p.tracks, t.id); })
      .sort(function (a, b) { return b.bar - a.bar; });
    inTrack.forEach(function (p, i) {
      p.rank = p.rank || {};
      /* Ties share a rank. */
      var r = i + 1;
      if (i && inTrack[i - 1].bar === p.bar) r = inTrack[i - 1].rank[t.id];
      p.rank[t.id] = r;
      p.of = p.of || {};
      p.of[t.id] = inTrack.length;
    });
  });

  ALL.forEach(function (p) {
    p.fee = FEES[p.key] || null;
    p.cal = RK.calendar(p.key);
    p.search = norm([p.name, p.place, T(p.place), p.tracks.map(trackLabel).join(' ')].concat(p.facts.map(function (f) { return f.v; })).join(' '));
    p.prereqKinds = p.prereq.map(function (x) { return x.kind; });
  });

  /* -------------------------------------------------------------- fees --- */

  var CUR = { EUR: '€', GBP: '£', CHF: 'CHF ', USD: '$', SEK: 'SEK ' };
  var PER = { total: 'total', year: 'a year', semester: 'a semester' };
  function money(f) {
    var n = f[0] % 1 ? f[0].toLocaleString('en-GB', { minimumFractionDigits: 2 }) : f[0].toLocaleString('en-GB');
    if (window.I18N && I18N.locale === 'it-IT') n = n.replace(/,/g, ' ').replace(/\./g, ',');
    return (f[0] === 0 ? T('Free') : CUR[f[1]] + n) + (f[0] === 0 ? '' : ' ' + T(PER[f[2]]));
  }
  function feeFor(p, passport) {
    if (!p.fee) return null;
    return passport === 'other' && !p.fee.same ? p.fee.other : p.fee.eu;
  }
  /* Bands on the figure in its own currency, a semester counted twice to
   * make a year. €, £ and CHF figures are close enough for four coarse
   * bands; anything else is not banded. */
  var BANDS = [['free', 'Free or under 2,000'], ['lt20', 'Under 20,000'], ['20to40', '20,000–40,000'], ['gt40', '40,000 or more'], ['none', 'Not in our data']];
  function band(p, passport) {
    var f = feeFor(p, passport);
    if (!f) return 'none';
    if (!has(['EUR', 'GBP', 'CHF', 'USD'], f[1])) return 'nb';
    var v = f[2] === 'semester' ? f[0] * 2 : f[0];
    return v < 2000 ? 'free' : v < 20000 ? 'lt20' : v < 40000 ? '20to40' : 'gt40';
  }

  /* ---------------------------------------------------------- filters --- */

  var GROUPS = [
    { id: 't', label: 'Track', opts: TRACKS.map(function (t) { return [t.id, t.label]; }),
      test: function (p, v) { return has(p.tracks, v); } },
    { id: 'r', label: 'Region', opts: [['uk', 'UK'], ['eu', 'Europe'], ['us', 'US'], ['ca', 'Canada'], ['as', 'Asia']],
      test: function (p, v) { return p.area === v; } },
    { id: 'fee', label: 'Fee', opts: BANDS,
      test: function (p, v) { return band(p, state.pass) === v; } },
    { id: 'test', label: 'GMAT/GRE', note: 'Business master’s only: the computing and MBA models do not record test policy.',
      opts: [['required', 'Required'], ['conditional', 'Required unless'], ['optional', 'Optional'], ['none', 'Not used'], ['floor', 'Published minimum score']],
      test: function (p, v) { return v === 'floor' ? !!p.floor : !!p.test && p.test.policy === v; } },
    { id: 'exp', label: 'Experience', opts: [['fresh', 'Takes fresh graduates'], ['cap', 'Caps experience'], ['needs', 'Needs experience']],
      test: function (p, v) {
        if (v === 'cap') return !!p.cap;
        if (v === 'needs') return !!p.minExp || p.kind === 'mba';
        return !p.minExp && p.kind !== 'mba';
      } },
    { id: 'pre', label: 'Prerequisites', opts: [['quant', 'Maths or quant credits'], ['business', 'Business credits'], ['degree', 'A specific degree'], ['grade', 'A minimum degree class'], ['convert', 'Only if you did not study computing'], ['nopre', 'No hard prerequisite']],
      test: function (p, v) { return v === 'nopre' ? !p.prereq.length && p.kind !== 'mba' : has(p.prereqKinds, v); } },
    { id: 'dl', label: 'Deadline', opts: [['soon', 'Within 60 days'], ['open', 'A dated round still ahead'], ['rolling', 'Rolling']],
      test: function (p, v) {
        var c = p.cal;
        if (!c) return false;
        if (v === 'soon') return !!c.next && c.next.days <= 60;
        if (v === 'open') return !!c.next;
        return !!c.rolling;
      } }
  ];

  var state = { q: '', sort: 'name', pass: 'eu', on: {}, pick: [] };
  GROUPS.forEach(function (g) { state.on[g.id] = []; });

  function matches(p, skip) {
    if (state.q && p.search.indexOf(state.q) < 0) return false;
    for (var i = 0; i < GROUPS.length; i++) {
      var g = GROUPS[i];
      if (g.id === skip) continue;
      var on = state.on[g.id];
      if (on.length && !on.some(function (v) { return g.test(p, v); })) return false;
    }
    return true;
  }

  /* ------------------------------------------------------------ order --- */

  function barShare(p) {
    /* Best rank across its tracks, as a share of the track: 0 is the top. */
    var best = 1;
    p.tracks.forEach(function (t) { best = Math.min(best, (p.rank[t] - 1) / p.of[t]); });
    return best;
  }
  function feeValue(p) {
    var f = feeFor(p, state.pass);
    if (!f || !has(['EUR', 'GBP', 'CHF', 'USD'], f[1])) return Infinity;
    return f[2] === 'semester' ? f[0] * 2 : f[0];
  }
  function sorted(list) {
    var by = {
      name: function (a, b) { return a.name.localeCompare(b.name); },
      bar: function (a, b) { return barShare(a) - barShare(b) || a.name.localeCompare(b.name); },
      fee: function (a, b) { return feeValue(a) - feeValue(b) || a.name.localeCompare(b.name); },
      deadline: function (a, b) {
        var x = a.cal && a.cal.next ? a.cal.next.days : Infinity, y = b.cal && b.cal.next ? b.cal.next.days : Infinity;
        return x - y || a.name.localeCompare(b.name);
      }
    }[state.sort];
    return list.slice().sort(by);
  }

  /* --------------------------------------------------------- the hash --- */

  function write() {
    var parts = [];
    if (state.q) parts.push('q=' + encodeURIComponent(state.q));
    GROUPS.forEach(function (g) { if (state.on[g.id].length) parts.push(g.id + '=' + state.on[g.id].join(',')); });
    if (state.sort !== 'name') parts.push('sort=' + state.sort);
    if (state.pass !== 'eu') parts.push('pass=' + state.pass);
    if (state.pick.length) parts.push('cmp=' + state.pick.map(encodeURIComponent).join(','));
    var h = parts.length ? '#' + parts.join(';') : '';
    try { history.replaceState(null, '', location.pathname + location.search + h); } catch (e) { /* file:// */ }
  }
  function readHash() {
    location.hash.replace(/^#/, '').split(';').forEach(function (kv) {
      var i = kv.indexOf('=');
      if (i < 1) return;
      var k = kv.slice(0, i), v = kv.slice(i + 1);
      if (k === 'q') state.q = norm(decodeURIComponent(v));
      else if (k === 'sort' && /^(name|bar|fee|deadline)$/.test(v)) state.sort = v;
      else if (k === 'pass' && v === 'other') state.pass = 'other';
      else if (k === 'cmp') state.pick = v.split(',').map(decodeURIComponent).filter(function (x) { return ALL.some(function (p) { return p.key === x; }); }).slice(0, 3);
      else if (state.on[k]) {
        var g = GROUPS.filter(function (x) { return x.id === k; })[0];
        state.on[k] = v.split(',').filter(function (x) { return g.opts.some(function (o) { return o[0] === x; }); });
      }
    });
  }

  /* ------------------------------------------------------------- view --- */

  var bar, listEl, countEl, sideEl, pills = [];

  function pill(g, o) {
    var b = el('button', 'pill');
    b.type = 'button';
    b.appendChild(el('span', 't', T(o[1])));
    var c = el('span', 'c');
    b.appendChild(c);
    b.setAttribute('aria-pressed', 'false');
    b.addEventListener('click', function () {
      var on = state.on[g.id];
      var i = on.indexOf(o[0]);
      if (i > -1) on.splice(i, 1); else on.push(o[0]);
      update();
    });
    pills.push({ el: b, g: g, v: o[0], count: c });
    return b;
  }

  function buildBar() {
    var bar = el('div', 'filters pg-filters');
    bar.setAttribute('role', 'toolbar');
    bar.setAttribute('aria-label', T('Filter the programmes'));
    var search = document.createElement('input');
    search.type = 'search';
    search.className = 'filter-search';
    search.placeholder = T('Find a school, city or requirement…');
    search.setAttribute('aria-label', T('Find a programme'));
    search.value = state.q;
    search.addEventListener('input', function () { state.q = norm(search.value.trim()); update(); });
    bar.appendChild(search);

    var sort = document.createElement('select');
    sort.className = 'filter-sort';
    sort.setAttribute('aria-label', T('Order'));
    [['name', 'A to Z'], ['bar', 'Highest bar first'], ['fee', 'Lowest fee first'], ['deadline', 'Next deadline first']].forEach(function (o) {
      var opt = document.createElement('option');
      opt.value = o[0];
      opt.textContent = T(o[1]);
      sort.appendChild(opt);
    });
    sort.value = state.sort;
    sort.addEventListener('change', function () { state.sort = sort.value; update(); });
    bar.appendChild(sort);

    var pass = document.createElement('select');
    pass.className = 'filter-sort';
    pass.setAttribute('aria-label', T('Fees shown for'));
    [['eu', 'Fees for EU/EEA citizens'], ['other', 'Fees for everyone else']].forEach(function (o) {
      var opt = document.createElement('option');
      opt.value = o[0];
      opt.textContent = T(o[1]);
      pass.appendChild(opt);
    });
    pass.value = state.pass;
    pass.addEventListener('change', function () { state.pass = pass.value; update(); });
    bar.appendChild(pass);

    GROUPS.forEach(function (g) {
      var grp = el('span', 'pill-group');
      grp.appendChild(el('span', 'pill-k', T(g.label)));
      g.opts.forEach(function (o) { grp.appendChild(pill(g, o)); });
      if (g.note) grp.title = T(g.note);
      bar.appendChild(grp);
    });

    var foot = el('div', 'pg-status');
    countEl = el('span', 'filter-status');
    countEl.setAttribute('aria-live', 'polite');
    foot.appendChild(countEl);
    var clear = el('button', 'filter-clear', T('Clear all filters'));
    clear.type = 'button';
    clear.addEventListener('click', function () {
      GROUPS.forEach(function (g) { state.on[g.id] = []; });
      state.q = ''; search.value = '';
      update();
    });
    foot.appendChild(clear);
    bar.appendChild(foot);
    return bar;
  }

  /* One line per fact the filters use, so a reader sees why a row matched. */
  function testLine(p) {
    if (p.kind === 'mba') return T('Not recorded in the MBA model');
    if (!p.test) return T('Not recorded in the computing model');
    var s = T({ required: 'Required', conditional: 'Required unless…', optional: 'Optional', none: 'Not used' }[p.test.policy] || p.test.policy);
    if (p.floor) s += ' · ' + T(p.floor.label);
    return s;
  }
  function expLine(p) {
    if (p.kind === 'mba') return T('Post-experience: MBA classes average 5–6 years');
    var out = [];
    if (p.cap) out.push(T(p.cap.label));
    if (p.minExp) out.push(T(p.minExp.label));
    return out.length ? out.join(' · ') : T('No published rule');
  }
  function feeNode(p) {
    var f = feeFor(p, state.pass);
    var s = el('span', 'pg-fee');
    if (!f) { s.textContent = T('Not in our data'); s.classList.add('none'); return s; }
    s.appendChild(el('b', null, money(f)));
    if (p.fee.intake && p.fee.intake !== 'current') s.appendChild(document.createTextNode(' · ' + p.fee.intake));
    if (!p.fee.same) s.appendChild(document.createTextNode(' · ' + (state.pass === 'other' ? T('non-EU fee') : T('EU/EEA fee'))));
    return s;
  }
  function barLine(p) {
    var t = p.tracks[0];
    var r = p.rank[t], of = p.of[t];
    if (p.kind === 'mba') {
      return p.mbaAdjusted ? T('Competitive at {n} on the MBA points scale · {r} highest of {of} MBAs', { n: p.bar, r: I18N.ordinal(r), of: of })
        : T('{n} on the MBA points scale · {r} highest of {of} MBAs', { n: p.bar, r: I18N.ordinal(r), of: of });
    }
    return T('{n} on our 0–100 scale · {r} highest of {of} {track} programmes', { n: p.bar, r: I18N.ordinal(r), of: of, track: trackLabel(t) });
  }

  function dlRow(label, node) {
    var row = el('div', 'pg-kv');
    row.appendChild(el('span', 'k', T(label)));
    var v = el('span', 'v');
    if (typeof node === 'string') v.textContent = node; else v.appendChild(node);
    row.appendChild(v);
    return row;
  }

  function card(p) {
    var row = el('div', 'row pg-row');
    row.dataset.key = p.key;
    if (has(state.pick, p.key)) row.classList.add('pg-picked');
    var name = el('div', 'name');
    name.appendChild(document.createTextNode(p.name));
    var meta = el('small', null, T(p.place));
    p.tracks.forEach(function (t) { meta.appendChild(el('span', 'chip-emph pg-track', trackLabel(t))); });
    name.appendChild(meta);

    var kv = el('div', 'pg-kvs');
    kv.appendChild(dlRow('GMAT/GRE', testLine(p)));
    kv.appendChild(dlRow('Experience', expLine(p)));
    if (p.prereq.length || p.english) {
      var ul = el('ul', 'pg-reqs');
      p.prereq.concat(p.english ? [{ g: p.english }] : []).forEach(function (x) {
        var li = el('li', null, T(x.g.label));
        var tag = srcTag(x.g.src); if (tag) li.appendChild(tag);
        ul.appendChild(li);
      });
      kv.appendChild(dlRow('Requirements', ul));
    } else {
      kv.appendChild(dlRow('Requirements', p.kind === 'mba' ? T('Not recorded in the MBA model') : T('No hard prerequisite published')));
    }
    var fee = feeNode(p);
    kv.appendChild(dlRow('Fee', fee));
    var barSpan = el('span', null, barLine(p));
    var cal = srcTag('CAL'); if (cal) barSpan.appendChild(cal);
    kv.appendChild(dlRow('Our bar', barSpan));
    name.appendChild(kv);

    var dl = RK.deadlineNode(p.key);
    if (dl) name.appendChild(dl);

    if (p.facts.length || p.because || (p.fee && p.fee.note)) {
      var more = RK.fold('What the school publishes, and how it selects');
      var body = el('div', 'more-body');
      if (p.because) {
        var sel = el('p', 'pg-because');
        sel.appendChild(el('b', null, T('How it selects') + ': '));
        sel.appendChild(document.createTextNode(T(p.because)));
        body.appendChild(sel);
      }
      if (p.regime) {
        var reg = el('p', 'pg-because');
        reg.appendChild(el('b', null, T('Rounds') + ': '));
        reg.appendChild(document.createTextNode(T(p.regime.label) + '. ' + T(p.regime.note)));
        body.appendChild(reg);
      }
      if (p.facts.length) {
        var facts = el('div', 'facts');
        p.facts.forEach(function (f) {
          var fr = el('div', 'fact');
          fr.appendChild(el('span', 'fk', T(f.k)));
          var v = el('span', 'fv');
          v.appendChild(document.createTextNode(T(f.v)));
          var tag = srcTag(f.src); if (tag) v.appendChild(tag);
          fr.appendChild(v);
          facts.appendChild(fr);
        });
        body.appendChild(facts);
      }
      if (p.fee) {
        var fn = el('p', 'pg-feenote');
        var parts = [T('Fee for EU/EEA citizens') + ': ' + money(p.fee.eu)];
        if (!p.fee.same) parts.push(T('everyone else') + ': ' + money(p.fee.other));
        fn.textContent = parts.join(' · ') + (p.fee.note ? '. ' + T(p.fee.note) : '');
        fn.appendChild(el('span', 'pg-src', ' ' + { money: 'research/money/costs-and-funding.md', mba: 'research/decisions/mba-and-career-switchers.md', model: T('the calculator’s own fact') }[p.fee.src]));
        body.appendChild(fn);
      }
      more.appendChild(body);
      name.appendChild(more);
    }
    row.appendChild(name);

    var act = el('div', 'pg-act');
    p.tracks.forEach(function (t) {
      var a = el('a', 'btn small primary', p.tracks.length > 1 ? T('Test my chances · {track}', { track: trackLabel(t) }) : T('Test my chances'));
      a.href = calcHref(p, t);
      act.appendChild(a);
    });
    var lab = el('label', 'pg-cmp');
    var cb = document.createElement('input');
    cb.type = 'checkbox';
    cb.checked = has(state.pick, p.key);
    cb.disabled = !cb.checked && state.pick.length >= 3;
    cb.addEventListener('change', function () {
      if (cb.checked) { if (state.pick.length < 3) state.pick.push(p.key); }
      else state.pick = state.pick.filter(function (k) { return k !== p.key; });
      update(true);
    });
    lab.appendChild(cb);
    lab.appendChild(document.createTextNode(' ' + T('Compare')));
    act.appendChild(lab);
    row.appendChild(act);
    return row;
  }

  /* Up to three side by side, on the same rows as the cards. */
  function side() {
    sideEl.textContent = '';
    var picked = state.pick.map(function (k) { return ALL.filter(function (p) { return p.key === k; })[0]; }).filter(Boolean);
    sideEl.hidden = !picked.length;
    if (!picked.length) return;
    sideEl.appendChild(el('h2', 'section', T('Side by side')));
    var wrap = el('div', 'pg-side-wrap');
    var tbl = el('table', 'pg-side');
    var head = el('tr');
    head.appendChild(el('th'));
    picked.forEach(function (p) {
      var th = el('th');
      th.setAttribute('scope', 'col');
      th.appendChild(el('span', 'pg-side-name', p.name));
      var rm = el('button', 'filter-clear', T('Remove'));
      rm.type = 'button';
      rm.addEventListener('click', function () { state.pick = state.pick.filter(function (k) { return k !== p.key; }); update(true); });
      th.appendChild(document.createTextNode(' '));
      th.appendChild(rm);
      head.appendChild(th);
    });
    var thead = el('thead'); thead.appendChild(head); tbl.appendChild(thead);
    var tb = el('tbody');
    function line(label, fn) {
      var tr = el('tr');
      var th = el('th', null, T(label));
      th.setAttribute('scope', 'row');
      tr.appendChild(th);
      picked.forEach(function (p) {
        var td = el('td');
        var v = fn(p);
        if (typeof v === 'string') td.textContent = v; else if (v) td.appendChild(v);
        tr.appendChild(td);
      });
      tb.appendChild(tr);
    }
    line('Track', function (p) { return p.tracks.map(trackLabel).join(', '); });
    line('Place', function (p) { return T(p.place); });
    line('GMAT/GRE', testLine);
    line('Experience', expLine);
    line('Requirements', function (p) {
      var reqs = p.prereq.concat(p.english ? [{ g: p.english }] : []);
      return reqs.length ? reqs.map(function (x) { return T(x.g.label); }).join('; ') : (p.kind === 'mba' ? T('Not recorded in the MBA model') : T('No hard prerequisite published'));
    });
    line('Fee', feeNode);
    line('Our bar', barLine);
    line('How it selects', function (p) { return p.because ? T(p.because) : '—'; });
    line('Next deadline', function (p) {
      var c = p.cal;
      if (!c) return '—';
      if (c.next) return T(c.next.label) + ' · ' + RK.fmtDate(c.next.date);
      return c.rolling ? T('Rolling') : T('No dated round ahead');
    });
    line('', function (p) {
      var box = el('span', 'pg-side-act');
      p.tracks.forEach(function (t) {
        var a = el('a', 'btn small primary', p.tracks.length > 1 ? T('Test my chances · {track}', { track: trackLabel(t) }) : T('Test my chances'));
        a.href = calcHref(p, t);
        box.appendChild(a);
      });
      return box;
    });
    tbl.appendChild(tb);
    wrap.appendChild(tbl);
    sideEl.appendChild(wrap);
  }

  var LIMIT = 30, shown = LIMIT;

  function update(keepLimit) {
    if (!keepLimit) shown = LIMIT;
    write();
    var hits = sorted(ALL.filter(function (p) { return matches(p); }));
    pills.forEach(function (x) {
      var on = has(state.on[x.g.id], x.v);
      x.el.classList.toggle('on', on);
      x.el.setAttribute('aria-pressed', on ? 'true' : 'false');
      var n = ALL.filter(function (p) { return matches(p, x.g.id) && x.g.test(p, x.v); }).length;
      x.count.textContent = String(n);
      x.el.disabled = !n && !on;
    });
    countEl.textContent = tn(hits.length, '{n} programme of {total}', '{n} programmes of {total}', { total: ALL.length });

    listEl.textContent = '';
    if (!hits.length) {
      listEl.appendChild(el('div', 'empty', T('No programme matches every filter. Untick one, or clear them all.')));
    } else {
      var t = el('div', 'table');
      hits.slice(0, shown).forEach(function (p) { t.appendChild(card(p)); });
      listEl.appendChild(t);
      if (hits.length > shown) {
        var more = el('button', 'btn pg-more', T('Show {n} more', { n: Math.min(LIMIT, hits.length - shown) }));
        more.type = 'button';
        more.addEventListener('click', function () { shown += LIMIT; update(true); });
        listEl.appendChild(more);
      }
    }
    side();
  }

  /* ------------------------------------------------------------ mount --- */

  readHash();
  root.textContent = '';
  var stale = RK.staleNotice(ALL.map(function (p) { return p.key; }));
  if (stale) root.appendChild(stale);
  bar = buildBar();
  root.appendChild(bar);
  sideEl = el('section', 'pg-sidebox');
  sideEl.setAttribute('aria-live', 'polite');
  root.appendChild(sideEl);
  listEl = el('div', 'pg-list');
  root.appendChild(listEl);
  update(true);

  /* A pasted or edited address (or Back to one) redraws the bar to match;
   * the page's own replaceState does not fire this. */
  window.addEventListener('hashchange', function () {
    state.q = ''; state.sort = 'name'; state.pass = 'eu'; state.pick = [];
    GROUPS.forEach(function (g) { state.on[g.id] = []; });
    readHash();
    pills = [];
    var fresh = buildBar();
    root.replaceChild(fresh, bar);
    bar = fresh;
    update();
  });
}());
