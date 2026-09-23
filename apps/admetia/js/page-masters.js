/* Master's page controller. Track comes from ?track= on the URL. */

(function () {
  'use strict';

  var M = window.MASTERS_MODEL;
  var S = window.MASTERS_SCORE;
  var C = window.CONVERT;
  var el = Wizard.el;
  var T = I18N.t, tn = I18N.tn, W = Wizard.words;

  var FACTOR_NAMES = {
    academic: T('Academic record'), test: T('Test score'), institution: T('Undergraduate institution'),
    quant: T('Quantitative preparation'), internship: T('Internships'), leadership: T('Leadership'),
    international: T('International exposure'), essays: T('Essays and motivation')
  };

  var SRC_LABEL = {
    OFF: 'school', OFF2: 'school doc', TP: 'third-party',
    FOI: 'FOI', NP: 'not published', NV: 'unverified',
    CAL: 'calibration', EST: 'estimate'
  };

  /* The profile currently being rendered, so per-school panels can compare
   * against it without threading it through every call. */
  var lastAnswers = null;

  var params = new URLSearchParams(window.location.search);
  var trackId = params.get('track');
  if (!M.tracks[trackId]) trackId = 'mim';
  var track = M.tracks[trackId];

  var crumb = document.getElementById('crumb');
  if (crumb) crumb.textContent = track.name;
  document.title = T('{track} master’s — Admission Chances Calculator', { track: track.name });

  /* One photograph per track, chosen for the world the programme feeds into
   * rather than for a campus: finance is a business district, management a
   * business school, marketing an advertising street. */
  var TRACK_SHOT = {
    mif: {
      src: 'img/photo/finance.jpg', w: 1200, h: 800,
      alt: 'A trading desk of stacked monitors showing live candlestick charts.'
    },
    mim: {
      src: 'img/photo/management.jpg', w: 1200, h: 800,
      alt: 'Three consultants in a meeting, going through figures on a tablet together.'
    },
    marketing: {
      src: 'img/photo/marketing.jpg', w: 1200, h: 800,
      alt: 'A street wall of brand billboards \u2014 Gucci, adidas and the NBA stacked above a storefront.'
    }
  };

  var intro = document.getElementById('intro');
  var shot = TRACK_SHOT[trackId] || TRACK_SHOT.mim;

  intro.appendChild(Wizard.sectionHead(track.full,
    ['How strong is your ', 'profile', '?'], track.blurb, shot));

  var wizardView = document.getElementById('wizard-view');
  var resultsView = document.getElementById('results-view');
  var chip = document.getElementById('chip');

  /* ---------------------------------------------------------------------
   * Custom group: the Italian grade converter.
   * ------------------------------------------------------------------ */
  window.CustomGroups = window.CustomGroups || {};
  window.CustomGroups.italian = function (group, answers, set) {
    var wrap = el('div', 'converter');
    var row = el('div', 'numrow');
    row.appendChild(el('span', null, 'ECTS-weighted average of your exam marks (18–30):'));
    var input = document.createElement('input');
    input.type = 'number'; input.min = 18; input.max = 30; input.step = 0.1;
    input.value = answers.itAvg !== undefined ? answers.itAvg : '';
    row.appendChild(input);
    wrap.appendChild(row);

    var out = el('div', 'out');
    wrap.appendChild(out);

    function draw() {
      out.innerHTML = '';
      var r = C.italian(input.value);
      if (!r) {
        out.appendChild(el('p', 'help', 'Enter a value between 18 and 30 to see the two figures side by side.'));
        return;
      }
      var l1 = el('div');
      l1.appendChild(document.createTextNode(T('Projected degree mark before committee points:') + ' '));
      l1.appendChild(el('b', null, r.projectedBase + ' / 110'));
      out.appendChild(l1);

      var l2 = el('div');
      l2.appendChild(document.createTextNode(T('With typical discretionary points, plausibly up to') + ' '));
      l2.appendChild(el('b', null, r.projectedCeiling + ' / 110'));
      out.appendChild(l2);

      var l3 = el('div');
      l3.appendChild(document.createTextNode(T('Transcript-average GPA equivalent:') + ' '));
      l3.appendChild(el('b', null, r.gpa + ' / 4.0'));
      out.appendChild(l3);

      out.appendChild(el('p', 'help',
        'These are two different measurements and only the second is comparable to a US ' +
        'published average. The 110 mark is not a transcript average: it starts from your ' +
        'weighted exam average and the graduation committee then adds discretionary points, ' +
        'so two identical transcripts can graduate several points apart. Do not compare ' +
        '110 e lode against a figure like Duke\'s published 3.48. Bocconi states outright ' +
        'that it may recalculate your GPA from the transcript itself.'));
    }

    input.addEventListener('input', function () {
      set('itAvg', input.value === '' ? undefined : parseFloat(input.value));
      draw();
    });
    draw();
    return wrap;
  };

  /* ------------------------------------------------------------------ */

  var wiz = Wizard.create({
    key: 'masters:' + trackId,
    model: M,
    mount: '#wizard',
    nav: '#stepnav',
    progress: '#bar',
    chip: '#chip',
    completeness: function (a) { return S.completeness(a); },
    chipValue: function (a) { return String(S.score(a, trackId).total); },
    onFinish: showResults
  });

  function fmt(n) { return (Math.round(n * 10) / 10).toString(); }

  /* 1st, 2nd, 3rd, 4th … 11th, 12th, 13th … 21st (75º in Italian) */
  function ordinal(n) { return I18N.ordinal(n); }

  /* Inline SVG rather than a CSS mask. A mask referencing an external SVG is
   * treated as a cross-origin image by Chrome, and every file:// document is
   * its own origin — so a page opened by double-clicking index.html would draw
   * empty boxes where the icons should be. Inline markup has no such problem
   * and still takes its colour from the surrounding text. */
  var SVGNS = 'http://www.w3.org/2000/svg';

  function scaleMark() {
    var svg = document.createElementNS(SVGNS, 'svg');
    svg.setAttribute('class', 'art scale');
    svg.setAttribute('viewBox', '0 0 48 48');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('focusable', 'false');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '2.2');
    svg.setAttribute('stroke-linecap', 'round');
    svg.setAttribute('stroke-linejoin', 'round');
    [['M24 8v32M14 40h20', null], ['M8 15h32', null],
     ['M14 15 8 28h12zM34 15l-6 13h12z', '.75']].forEach(function (d) {
      var path = document.createElementNS(SVGNS, 'path');
      path.setAttribute('d', d[0]);
      if (d[1]) path.setAttribute('opacity', d[1]);
      svg.appendChild(path);
    });
    var dot = document.createElementNS(SVGNS, 'circle');
    dot.setAttribute('cx', '24'); dot.setAttribute('cy', '12'); dot.setAttribute('r', '2.4');
    dot.setAttribute('fill', 'currentColor'); dot.setAttribute('stroke', 'none');
    svg.appendChild(dot);
    return svg;
  }

  function src(tag) {
    if (!tag) return null;
    var s = el('span', 'provenance ' + tag, SRC_LABEL[tag] || tag);
    return s;
  }

  function showResults(answers, keepScroll) {
    if (!keepScroll && window.Stats) Stats.event('results-masters-' + trackId);
    lastAnswers = answers;
    var res = S.evaluate(answers, trackId);
    var s = res.score;
    var eligible = res.rows.filter(function (r) { return r.eligible; });
    var blocked = res.rows.filter(function (r) { return !r.eligible; });
    var competitive = eligible.filter(function (r) {
      return r.verdict.tone === 'good' || r.verdict.tone === 'high';
    });

    resultsView.innerHTML = '';
    resultsView.hidden = false;
    wizardView.hidden = true;

    /* Where this profile scores best and worst once each school's own
     * weighting is applied. The spread is the interesting number: a wide one
     * means the choice of school matters more than any single improvement. */
    var spread = res.rows.slice().sort(function (x, y) { return y.profileScore - x.profileScore; });
    var bestFit = spread[0], worstFit = spread[spread.length - 1];
    var pct = S.completeness(answers);

    resultsView.appendChild(Wizard.resultsHead(T('Your results · {track}', { track: track.name }),
      headline(competitive.length, eligible.length, blocked.length),
      T('Your answers score {score} on the {track} weighting, and {lo}–{hi} once each school applies its own emphasis.',
        { score: fmt(s.total), track: track.name.toLowerCase(), lo: fmt(worstFit.profileScore), hi: fmt(bestFit.profileScore) }) +
      ' ' + blockedLine(blocked.length, pct)));

    var sum = el('div', 'summary reveal');
    sum.appendChild(dialCell('Profile score', s.total,
      T('{track} weighting, before any school’s own emphasis', { track: track.name.toLowerCase() })));
    var rangeCell = cell('Under each school\u2019s own weighting',
      fmt(worstFit.profileScore) + '\u2013' + fmt(bestFit.profileScore),
      'the same answers, reweighted');
    rangeCell.querySelector('.v').classList.add('range');
    sum.appendChild(rangeCell);
    sum.appendChild(cell('Competitive or better', String(competitive.length), T('of {total} eligible programmes', { total: eligible.length })));
    sum.appendChild(cell('Ruled out by a hard rule', String(blocked.length),
      blocked.length ? 'see below' : (pct < 100 ? 'none so far — some answers missing' : 'none')));
    var gapNote = Wizard.incompleteNote(pct, function () {
      resultsView.hidden = true; wizardView.hidden = false;
      wiz.go(wiz.firstMissingStep());
    });
    if (gapNote) resultsView.appendChild(gapNote);
    var stale = window.ResultsKit && ResultsKit.staleNotice(res.rows.map(function (r) { return r.school.id; }));
    if (stale) resultsView.appendChild(stale);
    resultsView.appendChild(sum);

    /* What-if and the filter pills sit above the explainer, so the tables
     * can be cut down before anything else is read. */
    var kit = window.ResultsKit ? ResultsKit.session(resultsView) : null;
    var filters = null;
    if (kit) {
      var wi = kit.whatIf({
        levers: levers(answers),
        project: function (patch) { return project(answers, patch); },
        onKeep: function (patch) { wiz.update(patch); showResults(wiz.answers(), true); }
      });
      if (wi) resultsView.appendChild(wi);
      filters = kit.filterBar();
      resultsView.appendChild(filters.el);
    }
    currentKit = kit;

    resultsView.appendChild(profileExplainer(res, bestFit, worstFit));

    if (s.testDropped) {
      resultsView.appendChild(note(
        'You are not submitting a test score, so the test weight has been removed and the ' +
        'other factors rescaled — this is neutral, not a penalty. Schools that require a ' +
        'test are listed as ineligible rather than scored low.'));
    }
    if (s.test && s.test.submitting) {
      resultsView.appendChild(note(T(
        'Your score sits at roughly the {pct} percentile, which converts to about {gmat} on the GMAT 10th Edition scale. ' +
        'Cross-scale conversion is approximate — GMAT Focus and the GMAT 10th Edition are ' +
        'different instruments, and many published "averages" do not say which one they mean.',
        { pct: ordinal(Math.round(s.test.pct)), gmat: s.test.gmat })));
    }

    /* ---- eligible schools ---- */
    resultsView.appendChild(section('Programmes you are eligible for',
      T('{n} of {total}', { n: eligible.length, total: res.rows.length })));

    if (!eligible.length) {
      resultsView.appendChild(el('div', 'table', '')).appendChild(
        el('div', 'empty', 'Every programme in this track is blocked by a hard rule. See below.'));
    } else {
      var t = el('div', 'table ranked');
      var runs = Wizard.verdictRuns(eligible, function (r) { return r.verdict.label; });
      (runs && runs.length > 1 ? runs : [{ rows: eligible }]).forEach(function (run) {
        if (run.label) {
          var d = el('div', 'table-div', run.label);
          d.appendChild(el('span', 'n', String(run.rows.length)));
          t.appendChild(d);
        }
        run.rows.forEach(function (r) { t.appendChild(schoolRow(r, res.breakEven)); });
      });
      resultsView.appendChild(t);
    }

    /* ---- blocked schools ---- */
    if (blocked.length) {
      resultsView.appendChild(section('Ruled out by a published requirement', blocked.length));
      resultsView.appendChild(note(
        'These are not "low chance" — they are rules that a stronger profile cannot ' +
        'compensate for. An experience cap or a missing ECTS prerequisite disqualifies ' +
        'regardless of your test score. Each one still shows where your profile would ' +
        'land on score alone, so you can see whether the blocking requirement is worth ' +
        'going and satisfying.', 'warn'));
      var tb = el('div', 'table');
      blocked.forEach(function (r) { tb.appendChild(schoolRow(r, res.breakEven)); });
      resultsView.appendChild(tb);
    }

    /* ---- excluded programmes ---- */
    if (M.excluded.length) {
      resultsView.appendChild(section('Deliberately not modelled here'));
      var te = el('div', 'table');
      M.excluded.forEach(function (x) {
        var r = el('div', 'row');
        var n = el('div', 'name');
        n.appendChild(document.createTextNode(x.name));
        n.appendChild(el('small', null, x.why));
        r.appendChild(n);
        var badge = el('div', 'badge mid', 'Post-experience');
        r.appendChild(el('div', 'num'));
        r.appendChild(badge);
        te.appendChild(r);
      });
      resultsView.appendChild(te);
    }

    /* ---- breakdown ---- */
    var det = el('details', 'breakdown');
    det.appendChild(el('summary', null, T('How your {score} was calculated', { score: fmt(s.total) })));
    var inner = el('div', 'inner');
    var NAMES = FACTOR_NAMES;
    s.contributions.forEach(function (c) {
      var r = el('div', 'bd-row');
      r.appendChild(el('span', null, NAMES[c.key] + '  ·  ' +
        T('{pct}% of a possible {weight}', { pct: Math.round(c.value * 100), weight: Math.round(c.weight * 10) / 10 })));
      r.appendChild(el('span', 'p', fmt(c.pts)));
      inner.appendChild(r);
    });
    s.mods.forEach(function (m) {
      var r = el('div', 'bd-row');
      r.appendChild(el('span', null, m.label));
      r.appendChild(el('span', 'p' + (m.pts < 0 ? ' neg' : ''), (m.pts > 0 ? '+' : '') + fmt(m.pts)));
      inner.appendChild(r);
    });
    var tot = el('div', 'bd-row');
    tot.appendChild(el('strong', null, 'Total'));
    tot.appendChild(el('strong', 'p', fmt(s.total)));
    inner.appendChild(tot);
    det.appendChild(inner);
    resultsView.appendChild(det);

    resultsView.appendChild(note(
      'Read the score as a ranking device, not a probability. The thresholds are my ' +
      'calibration — no school publishes a points requirement, and only four programmes ' +
      'in this entire dataset publish a real acceptance rate (LSE Management, LSE Finance ' +
      '& Economics via FOI, Princeton, and WU Vienna). Everything else marketed as an ' +
      '"acceptance rate" for these programmes is an estimate.', 'warn'));

    var actions = el('div', 'actions');
    var back = el('button', 'btn', '← Edit answers');
    back.addEventListener('click', function () {
      resultsView.hidden = true; wizardView.hidden = false;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    actions.appendChild(back);
    actions.appendChild(el('span', 'spacer'));
    var other = el('a', 'btn');
    other.href = 'business.html';
    other.textContent = T('Try another track');
    actions.appendChild(other);
    var print = el('button', 'btn', 'Print the page');
    print.addEventListener('click', function () { window.print(); });
    actions.appendChild(print);
    if (window.ResultsKit) {
      actions.appendChild(ResultsKit.planButton(function () { return battlePlan(answers, res); }));
    }
    resultsView.appendChild(actions);

    if (filters) filters.refresh();
    if (chip) chip.textContent = fmt(s.total);

    /* Results are built after load, so the reveal observer has to be pointed
     * at the new nodes explicitly. */
    if (window.UI) UI.reveal(resultsView);
    if (!keepScroll) window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* -------------------------------------------------------------------
   * Tiers, what-if and the battle plan
   * ---------------------------------------------------------------- */

  var currentKit = null;

  function tierOf(r) {
    if (!r.eligible) return 'out';
    return r.band.tone === 'high' ? 'safe' : r.band.tone === 'good' ? 'target' : 'dream';
  }

  function merged(answers, patch) {
    var a = Object.assign({}, answers);
    Object.keys(patch).forEach(function (k) {
      if (patch[k] === undefined) delete a[k]; else a[k] = patch[k];
    });
    return a;
  }

  function project(answers, patch) {
    var res = S.evaluate(merged(answers, patch), trackId);
    var rows = {}, comp = 0, elig = 0;
    res.rows.forEach(function (r) {
      rows[r.school.id] = { num: fmt(r.adjusted), verdict: r.verdict, tier: tierOf(r), value: r.adjusted, name: r.school.name };
      if (r.eligible) { elig++; if (r.band.tone === 'good' || r.band.tone === 'high') comp++; }
    });
    return { rows: rows, score: fmt(res.score.total), scoreLabel: 'Profile score',
      summary: T('Profile score {score} — Competitive or better at {n} of {total} eligible',
        { score: fmt(res.score.total), n: comp, total: elig }) };
  }

  /* The test first, on the scale you answered in (Focus if you have not sat
   * one), then the parts of the file that can still change. */
  function levers(answers) {
    var t = S.testInfo(answers);
    var kind = t.submitting ? t.kind : 'focus';
    var steps = [{ label: 'No test submitted', patch: { testStatus: 'ts_no' } }];
    var cur = t.submitting ? (kind === 'gre' ? parseFloat(answers.greQuant) : parseFloat(answers.testScore)) : null;
    function add(lo, hi, step, fn) { for (var v = lo; v <= hi; v += step) steps.push(fn(v)); }
    if (kind === 'gre') {
      add(140, 170, 1, function (v) {
        return { label: T('GRE quant {n}', { n: v }), v: v, patch: { testStatus: 'ts_yes', testType: 'tt_gre', greQuant: v } };
      });
    } else if (kind === 'gmat') {
      add(500, 800, 10, function (v) {
        return { label: 'GMAT ' + v, v: v, patch: { testStatus: 'ts_yes', testType: 'tt_gmat', testScore: v } };
      });
    } else {
      add(505, 805, 10, function (v) {
        return { label: 'GMAT Focus ' + v, v: v, patch: { testStatus: 'ts_yes', testType: 'tt_focus', testScore: v } };
      });
    }
    var start = 0;
    if (cur !== null && !isNaN(cur)) {
      var best = Infinity;
      steps.forEach(function (st, i) {
        if (st.v !== undefined && Math.abs(st.v - cur) < best) { best = Math.abs(st.v - cur); start = i; }
      });
    }
    var out = [{ id: 'test', label: 'Test score', steps: steps, start: start }];

    var byId = {};
    M.steps.forEach(function (st) { st.groups.forEach(function (g) { byId[g.id] = g; }); });
    var scoreOf = function (p) { return S.score(merged(answers, p), trackId).total; };
    ['essays', 'internMonths', 'internQuality', 'leadership', 'international', 'ectsQuant', 'programming']
      .forEach(function (gid) {
        if (byId[gid] && byId[gid].type === 'radio') out.push(ResultsKit.radioLever(byId[gid], answers, scoreOf));
      });
    return out;
  }

  function battlePlan(answers, res) {
    var s = res.score;
    var eligible = res.rows.filter(function (r) { return r.eligible; });
    var blocked = res.rows.filter(function (r) { return !r.eligible; });
    var comp = eligible.filter(function (r) { return r.band.tone === 'good' || r.band.tone === 'high'; });

    var rows = eligible.map(function (r) {
      return { key: r.school.id, name: r.school.name, region: ResultsKit.regionLabel(r.school.region),
        tier: tierOf(r), verdict: r.verdict.label, score: fmt(r.adjusted) + ' / ' + r.school.threshold };
    });

    var contrib = s.contributions.filter(function (c) { return c.weight > 0; });
    var strengths = contrib.filter(function (c) { return c.value >= 0.6; })
      .sort(function (x, y) { return y.value * y.weight - x.value * x.weight; }).slice(0, 4)
      .map(function (c) {
        return { label: FACTOR_NAMES[c.key], detail: T('{pct}% of its {weight} points', { pct: Math.round(c.value * 100), weight: fmt(c.weight) }) };
      });
    var strong = strengths.map(function (x) { return x.label; });
    var gaps = contrib.filter(function (c) { return c.value < 0.8 && strong.indexOf(FACTOR_NAMES[c.key]) < 0; })
      .sort(function (x, y) { return (1 - y.value) * y.weight - (1 - x.value) * x.weight; }).slice(0, 4)
      .map(function (c) {
        return { label: FACTOR_NAMES[c.key], detail: T('{missing} of {weight} points not yet earned', { missing: fmt((1 - c.value) * c.weight), weight: fmt(c.weight) }) };
      });

    var steps = res.improvements.slice(0, 4).map(function (i) {
      return T('{group} → {option} (+{gain} on the track weighting)', { group: T(i.groupLabel), option: T(i.optionLabel), gain: fmt(i.gain) });
    });
    if (!s.test.submitting && res.breakEven) {
      steps.push(T('Decide on a test: it only helps above roughly the {pct} percentile — about {gmat} GMAT or {focus} Focus.',
        { pct: ordinal(res.breakEven.percentile), gmat: res.breakEven.gmat, focus: res.breakEven.focus }));
    }
    blocked.slice(0, 3).forEach(function (r) {
      steps.push(T('Ruled out at {school}: {rule}.', { school: r.school.name,
        rule: T(r.gates.failures[0].label).replace(/^./, function (c) { return c.toLowerCase(); }) }));
    });
    if (S.completeness(answers) < 100) steps.unshift('Answer the questions you skipped — a missing answer scores nothing.');

    return {
      kicker: track.full,
      title: headline(comp.length, eligible.length, blocked.length),
      standfirst: T('A profile score of {score} on the {track} weighting, before any school’s own emphasis.',
        { score: fmt(s.total), track: track.name.toLowerCase() }) + ' ' + blockedLine(blocked.length, S.completeness(answers)),
      facts: [['Profile score', fmt(s.total) + ' / 100'], ['Competitive or better', comp.length + ' / ' + eligible.length],
              ['Ruled out by a rule', String(blocked.length)], ['Answered', S.completeness(answers) + '%']],
      rows: rows, strengths: strengths, gaps: gaps, steps: steps
    };
  }

  /* -------------------------------------------------------------------
   * Selection profiles: why the same answers score differently at
   * different schools.
   * ---------------------------------------------------------------- */

  function profileExplainer(res, bestFit, worstFit) {
    var box = el('div', 'panel profile-explainer reveal');

    var head = el('div', 'panel-head');
    head.appendChild(scaleMark());
    head.appendChild(el('h3', null, 'The same answers are worth different amounts at different schools'));
    box.appendChild(head);

    var body = el('div', 'panel-body');
    var lead = el('p');
    lead.textContent = T(
      'A track weighting says what a {track} applicant is generally ' +
      'judged on. It does not say what any one school does with the file, and that difference ' +
      'is large. Bocconi runs no interview and takes no reference letters on the standard ' +
      'route, names GPA as a compulsory pillar, may recalculate that GPA from your transcript ' +
      'itself, and applies a test floor to everyone — grades and the test are close to the ' +
      'whole ranking there. HEC and IE run essays, recorded answers and live interviews ' +
      'instead. So every programme below is scored under its own weighting.', { track: track.name.toLowerCase() });
    body.appendChild(lead);

    var spread = Math.round((bestFit.profileScore - worstFit.profileScore) * 10) / 10;
    if (spread >= 4) {
      var p2 = el('p');
      p2.textContent = T(
        'For your answers that is a {spread}-point swing. Your profile suits {best} — {bestProfile}, ' +
        '{bestScore} — and works against you at {worst} — {worstProfile}, {worstScore}. ' +
        'Choosing where to apply is doing more work here than any single thing you could ' +
        'change about the application.', {
          spread: fmt(spread), best: bestFit.school.name, bestProfile: bestFit.profile.short,
          bestScore: fmt(bestFit.profileScore), worst: worstFit.school.name,
          worstProfile: worstFit.profile.short, worstScore: fmt(worstFit.profileScore) });
      body.appendChild(p2);
    }

    /* One row per profile actually in use for this track, showing how the
     * weights are redistributed and how you score under each. */
    var legend = el('div', 'prof-legend');
    (res.profilesUsed || []).forEach(function (pid) {
      var prof = M.profiles[pid];
      var em = S.emphasis(trackId, pid);
      var mine = S.score(lastAnswers || {}, trackId, undefined, pid).total;

      var schools = res.rows.filter(function (r) { return r.school.profile === pid; });

      var row = el('div', 'prof-row');
      var top = el('div', 'prof-row-head');
      top.appendChild(el('span', 'prof-name', prof.label));
      top.appendChild(el('span', 'prof-score', fmt(mine)));
      row.appendChild(top);

      row.appendChild(el('p', 'prof-blurb', prof.blurb));
      row.appendChild(weightBars(em, 4));

      var names = schools.map(function (r) { return r.school.name; });
      row.appendChild(el('p', 'prof-schools',
        tn(names.length, '{n} programme:', '{n} programmes:') + ' ' + names.join(' · ')));
      legend.appendChild(row);
    });
    body.appendChild(legend);

    var legend = el('p', 'prof-caveat');
    legend.textContent = T(
      'In the bars above and on every programme below: a green bar with a + means this ' +
      'school weighs that factor more heavily than the track average, and a grey bar with ' +
      'a − means it weighs it less. The number is the weight out of 100.');
    body.appendChild(legend);

    var caveat = el('p', 'prof-caveat');
    caveat.appendChild(document.createTextNode(T(
      'Which profile a school belongs to is my reading of its published process, not ' +
      'something any school states as a formula. The multipliers rescale back to the same ' +
      'hundred points, so a profile moves emphasis around rather than handing anyone free ' +
      'marks — an evenly balanced applicant scores about the same everywhere, and only a ' +
      'lopsided one moves much.')));
    caveat.appendChild(src('CAL'));
    body.appendChild(caveat);

    box.appendChild(body);
    return box;
  }

  /* Horizontal bars for the top `n` weights, marked with how far each has
   * moved from the track's own weighting. */
  function weightBars(em, n) {
    var wrap = el('div', 'wbars');
    var max = em[0] ? em[0].weight : 1;
    em.slice(0, n).forEach(function (e) {
      var row = el('div', 'wbar');
      row.appendChild(el('span', 'wbar-k', FACTOR_NAMES[e.key]));
      var track_ = el('span', 'wbar-track');
      var fill = el('i');
      fill.style.setProperty('--w', Math.round(e.weight / max * 100) + '%');
      if (e.delta > 0.5) fill.className = 'up';
      else if (e.delta < -0.5) fill.className = 'down';
      track_.appendChild(fill);
      row.appendChild(track_);
      var v = el('span', 'wbar-v');
      v.textContent = fmt(e.weight);
      if (Math.abs(e.delta) >= 0.5) {
        v.appendChild(el('em', e.delta > 0 ? 'up' : 'down',
          (e.delta > 0 ? '+' : '\u2212') + fmt(Math.abs(e.delta))));
      }
      row.appendChild(v);
      wrap.appendChild(row);
    });
    return wrap;
  }

  /* What this particular school leans on, and whether that suits you. */
  function emphasisPanel(r) {
    var box = el('div', 'why emph');
    var head = el('p', 'why-head');
    head.textContent = T('What this school weighs · {profile}', { profile: r.profile.label });
    box.appendChild(head);

    var why = el('p', 'why-note');
    why.style.marginBottom = '10px';
    why.appendChild(document.createTextNode(r.school.because || r.profile.blurb));
    why.appendChild(src('CAL'));
    box.appendChild(why);

    box.appendChild(weightBars(r.emphasis, 4));

    if (Math.abs(r.profileShift) >= 0.5) {
      var shift = el('p', 'shift ' + (r.profileShift > 0 ? 'up' : 'down'));
      shift.textContent = r.profileShift > 0
        ? T('Worth {n} points to you against the track average — this ' +
          'school leans on the parts of your file that are strong.', { n: fmt(r.profileShift) })
        : T('Costs you {n} points against the track average — it leans ' +
          'on the parts of your file that are thin.', { n: fmt(-r.profileShift) });
      box.appendChild(shift);
    }
    return box;
  }

  /* An explanation of the gap plus concrete ways to close it. Shown for
   * anything short of Competitive, and for blocked schools too — being ruled
   * out by a prerequisite tells you nothing about whether the rest of the
   * profile is good enough to be worth going and getting that prerequisite. */
  function whyBox(r, breakEven) {
    var box = el('div', 'why');
    var sc = r.school;

    var head = el('p', 'why-head');
    if (r.gap > 0) {
      head.textContent = T('You are {n} points short of this programme’s Competitive threshold of {threshold}.',
        { n: fmt(r.gap), threshold: sc.threshold });
    } else {
      head.textContent = T('You are {n} points clear of the Competitive threshold of {threshold}.',
        { n: fmt(-r.gap), threshold: sc.threshold });
    }
    box.appendChild(head);

    /* Round timing, but only where this school's regime says it matters. */
    if (r.roundGain > 0) {
      box.appendChild(bullet('Apply in the first round instead', '+' + fmt(r.roundGain),
        r.regime.note));
    } else if (r.roundMod === 0 && r.regime.mods[2] === 0) {
      box.appendChild(bullet('Timing does not matter here', null, r.regime.note));
    }

    /* The test question, for people not submitting one. What is useful here
     * depends on whether the school insists on a score at all. */
    var mustTest = sc.test.policy === 'required' || sc.test.policy === 'conditional';
    var notSubmitting = !S.testInfo(lastAnswers || {}).submitting;

    if (r.gap > 0 && r.minTest) {
      box.appendChild(bullet(
        T('Sit a test scoring about {gmat} (GMAT) / {focus} (Focus)', { gmat: r.minTest.gmat, focus: r.minTest.focus }),
        T('reaches {n}', { n: sc.threshold }),
        T('Roughly the {pct} percentile. That alone would close the gap.', { pct: ordinal(r.minTest.percentile) })));

    } else if (r.gap > 0 && !r.minTest && notSubmitting) {
      box.appendChild(bullet('A test score alone will not close this gap', null,
        'Even a perfect score leaves you short here — the other factors have to move.'));

    } else if (r.gap <= 0 && mustTest && r.minTest) {
      /* Already clear on profile, but the school demands a score anyway. The
       * useful number is the floor that keeps you clear, not a target. */
      box.appendChild(bullet(
        'You need a test here, but only a modest one',
        T('about {n}', { n: r.minTest.gmat }),
        T('Your profile is {n} points clear of the threshold without a score, so ' +
          'anything from roughly the {pct} percentile up — about {gmat} GMAT or {focus} Focus — keeps you at or above ' +
          '{threshold}. A weaker score than that would pull you back under it.',
          { n: fmt(-r.gap), pct: ordinal(r.minTest.percentile), gmat: r.minTest.gmat, focus: r.minTest.focus, threshold: sc.threshold })));

    } else if (r.gap <= 0 && !mustTest && breakEven) {
      box.appendChild(bullet(
        'You clear this without a test, and it does not require one', null,
        T('Submitting anyway only helps above roughly the {pct} percentile — about {gmat} GMAT or {focus} ' +
          'Focus. Below that it would lower your score for no reason.',
          { pct: ordinal(breakEven.percentile), gmat: breakEven.gmat, focus: breakEven.focus })));
    }

    /* Everything else that would move the number, cheapest first. */
    if (r.gap > 0 && r.path.steps.length) {
      var intro = el('p', 'why-sub');
      intro.textContent = T(r.path.reached
        ? 'These changes together would get you there:'
        : 'The biggest available gains — not enough on their own, but they close most of it:');
      box.appendChild(intro);
      r.path.steps.slice(0, 4).forEach(function (st) {
        box.appendChild(bullet(T(st.groupLabel) + ' → ' + T(st.optionLabel), '+' + fmt(st.gain)));
      });
    }

    return box;
  }

  function bullet(text, gain, note) {
    var li = el('div', 'why-item');
    var main = el('span', 'why-text');
    main.textContent = T(text);
    li.appendChild(main);
    if (gain) li.appendChild(el('span', 'why-gain', gain));
    if (note) li.appendChild(el('small', 'why-note', note));
    return li;
  }

  function schoolRow(r, breakEven) {
    var sc = r.school;
    var wrap = el('div', 'row');

    var name = el('div', 'name');
    name.appendChild(document.createTextNode(sc.name));
    var meta = T('{region} · test: {policy} · rounds: {regime}',
      { region: T(sc.region), policy: T(sc.test.policy), regime: r.regime.label.toLowerCase() });
    if (r.roundMod) meta += ' ' + T('({n} for your timing)', { n: r.roundMod });
    var m = el('small', null, meta);
    m.appendChild(el('span', 'chip-emph ' + r.profile.id, r.profile.short));
    name.appendChild(m);
    var dl = window.ResultsKit && ResultsKit.deadlineNode(sc.id);
    if (dl) name.appendChild(dl);

    if (r.gates.failures.length) {
      var ul = el('ul', 'gatelist');
      r.gates.failures.forEach(function (f) {
        var li = el('li');
        li.appendChild(document.createTextNode(T(f.label)));
        var t = src(f.src); if (t) li.appendChild(t);
        ul.appendChild(li);
      });
      name.appendChild(ul);

      /* Blocked, but say where the profile itself lands. */
      var stand = el('p', 'standing ' + r.band.tone);
      stand.textContent = T('On score alone you would be {band} here — {score} against a threshold of {threshold}. ' +
        'The rule above is what blocks you, not your profile.',
        { band: T(r.band.label).toLowerCase(), score: fmt(r.adjusted), threshold: sc.threshold });
      name.appendChild(stand);
    }
    if (r.gates.warnings.length) {
      var uw = el('ul', 'gatelist warn');
      r.gates.warnings.forEach(function (f) {
        var li = el('li');
        li.appendChild(document.createTextNode(T(f.label)));
        var t = src(f.src); if (t) li.appendChild(t);
        uw.appendChild(li);
      });
      name.appendChild(uw);
    }

    /* What this school actually leans on, shown for every programme — it is
     * the reason two schools give the same answers different scores. */
    name.appendChild(emphasisPanel(r));

    /* Explain anything that is not already comfortably Competitive, and
     * explain blocked schools too. */
    if (r.gap > 0 || !r.eligible) name.appendChild(whyBox(r, r.breakEven || breakEven));

    var det = el('details');
    det.style.marginTop = '8px';
    var sm = el('summary');
    sm.style.cssText = 'cursor:pointer;font-size:12.5px;color:var(--muted);list-style:none';
    sm.textContent = T('What this school actually publishes');
    det.appendChild(sm);
    var facts = el('div', 'facts');
    facts.style.marginTop = '8px';
    sc.facts.forEach(function (f) {
      var row = el('div', 'fact');
      row.appendChild(el('span', 'fk', f.k));
      var v = el('span', 'fv');
      v.appendChild(document.createTextNode(f.v));
      var tag = src(f.src); if (tag) v.appendChild(tag);
      row.appendChild(v);
      facts.appendChild(row);
    });

    /* The estimated admitted distribution, always clearly marked as mine. */
    if (sc.est) facts.appendChild(estimateFact(sc));

    var prow = el('div', 'fact');
    prow.appendChild(el('span', 'fk', 'Weighting applied here'));
    var pv = el('span', 'fv');
    pv.appendChild(document.createTextNode(sc.profile ? r.profile.label : T('Track weighting, unchanged')));
    pv.appendChild(src('CAL'));
    if (sc.because) pv.appendChild(el('small', 'why-note', sc.because));
    prow.appendChild(pv);
    facts.appendChild(prow);

    var thr = el('div', 'fact');
    thr.appendChild(el('span', 'fk', 'Score threshold used here'));
    var tv = el('span', 'fv');
    tv.appendChild(document.createTextNode(T('{c} competitive, {s} strong', { c: sc.threshold, s: sc.strong })));
    tv.appendChild(src('CAL'));
    thr.appendChild(tv);
    facts.appendChild(thr);
    det.appendChild(facts);
    name.appendChild(det);

    wrap.appendChild(name);

    /* The score is shown whether or not a gate blocks the school. */
    var num = el('div', 'num');
    var b = el('b', null, fmt(r.adjusted));
    num.appendChild(b);
    num.appendChild(document.createTextNode(' / ' + sc.threshold));
    if (window.UI && UI.meter) num.appendChild(UI.meter(r.adjusted, sc.threshold, 50, 95));
    wrap.appendChild(num);
    var badge = el('div', 'badge ' + r.verdict.tone, r.verdict.label);
    wrap.appendChild(badge);
    if (currentKit) {
      ResultsKit.tag(wrap, sc.id, sc.region, tierOf(r));
      currentKit.register(sc.id, wrap, b, badge);
    }
    return wrap;
  }

  /* Estimated admitted GMAT distribution, with where the user sits in it. */
  function estimateFact(sc) {
    var e = sc.est;
    var lo = Math.round((e.median - e.sd) / 5) * 5;
    var hi = Math.round((e.median + e.sd) / 5) * 5;

    var row = el('div', 'fact');
    row.appendChild(el('span', 'fk', 'Estimated admitted GMAT'));
    var v = el('span', 'fv');
    v.appendChild(document.createTextNode(
      T('median ~{median}, about 68% between {lo} and {hi} (±1 SD {sd})', { median: e.median, lo: lo, hi: hi, sd: e.sd })));
    v.appendChild(src('EST'));
    v.appendChild(el('small', 'why-note', T('Estimated from {from}.', { from: e.from }) + ' ' +
      T(e.basis === 'published'
        ? 'The school publishes the anchor; the spread and any scale conversion are mine.'
        : 'The school publishes no admitted average — this whole figure is inferred.')));

    var t = S.testInfo(lastAnswers || {});
    if (t.submitting && t.gmat !== null) {
      var z = C.zAgainst(t.gmat, e);
      var where;
      if (z >= 1) where = 'above the estimated top third';
      else if (z >= 0.25) where = 'above the estimated median';
      else if (z >= -0.25) where = 'around the estimated median';
      else if (z >= -1) where = 'below the estimated median but inside the estimated middle 68%';
      else where = 'below the estimated middle 68%';
      v.appendChild(el('small', 'why-note',
        T('Your ~{gmat} sits {where} ({z} SD).', { gmat: t.gmat, where: T(where), z: (z >= 0 ? '+' : '') + (Math.round(z * 100) / 100) })));
    }
    row.appendChild(v);
    return row;
  }

  /* The results headline, in words. */
  function headline(competitive, eligible, blocked) {
    if (!eligible) return T('Every programme here is ruled out by a published rule.');
    var v = { n: W(competitive), total: W(eligible) };
    if (!competitive) return blocked ? T('Not yet competitive at any of the {total} eligible.', v)
                                     : T('Not yet competitive at any of the {total}.', v);
    return blocked ? T('Competitive or better at {n} of {total} eligible.', v)
                   : T('Competitive or better at {n} of {total}.', v);
  }
  function blockedLine(blocked, pct) {
    if (blocked) {
      return tn(blocked, '{N} programme is ruled out by a published requirement.',
        '{N} programmes are ruled out by a published requirement.', { N: I18N.cap(W(blocked)) });
    }
    return T(pct < 100 ? 'No hard rule rules you out on the answers so far.' : 'No hard rule rules you out.');
  }

  function cell(k, v, sub) {
    var d = el('div');
    d.appendChild(el('div', 'k', k));
    d.appendChild(el('div', 'v', v));
    if (sub) d.appendChild(el('div', 'sub', sub));
    return d;
  }

  /* The headline figure, as an animated dial rather than a bare number. Falls
   * back to the plain cell if ui.js did not load. */
  function dialCell(k, value, sub) {
    if (!window.UI || !UI.dial) return cell(k, fmt(value), sub);
    var d = el('div', 'has-dial');
    d.appendChild(el('div', 'k', k));
    var row = el('div', 'dial');
    row.appendChild(UI.dial(value, '/ 100'));
    d.appendChild(row);
    if (sub) d.appendChild(el('div', 'sub', sub));
    return d;
  }
  function section(title, sub) {
    var h = el('h2', 'section reveal');
    h.appendChild(document.createTextNode(T(title)));
    if (sub) h.appendChild(el('span', 'count', String(sub)));
    return h;
  }
  function note(text, kind) {
    return el('div', 'note-card reveal' + (kind ? ' ' + kind : ''), text);
  }
}());
