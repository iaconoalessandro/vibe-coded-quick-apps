/* Master's page controller. Track comes from ?track= on the URL. */

(function () {
  'use strict';

  var M = window.MASTERS_MODEL;
  var S = window.MASTERS_SCORE;
  var C = window.CONVERT;
  var el = Wizard.el;

  var FACTOR_NAMES = {
    academic: 'Academic record', test: 'Test score', institution: 'Undergraduate institution',
    quant: 'Quantitative preparation', internship: 'Internships', leadership: 'Leadership',
    international: 'International exposure', essays: 'Essays and motivation'
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

  document.getElementById('crumb').textContent = track.name;
  document.title = track.name + " master's — Admission Chances Calculator";

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
      l1.appendChild(document.createTextNode('Projected degree mark before committee points: '));
      l1.appendChild(el('b', null, r.projectedBase + ' / 110'));
      out.appendChild(l1);

      var l2 = el('div');
      l2.appendChild(document.createTextNode('With typical discretionary points, plausibly up to '));
      l2.appendChild(el('b', null, r.projectedCeiling + ' / 110'));
      out.appendChild(l2);

      var l3 = el('div');
      l3.appendChild(document.createTextNode('Transcript-average GPA equivalent: '));
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

  /* 1st, 2nd, 3rd, 4th … 11th, 12th, 13th … 21st */
  function ordinal(n) {
    var s = ['th', 'st', 'nd', 'rd'], v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  }

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

  function showResults(answers) {
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

    resultsView.appendChild(Wizard.resultsHead('Your results \u00b7 ' + track.name,
      headline(competitive.length, eligible.length, blocked.length),
      'Your answers score ' + fmt(s.total) + ' on the ' + track.name.toLowerCase() +
      ' weighting, and ' + fmt(worstFit.profileScore) + '\u2013' + fmt(bestFit.profileScore) +
      ' once each school applies its own emphasis. ' + blockedLine(blocked.length, pct)));

    var sum = el('div', 'summary reveal');
    sum.appendChild(dialCell('Profile score', s.total,
      track.name.toLowerCase() + ' weighting, before any school\u2019s own emphasis'));
    var rangeCell = cell('Under each school\u2019s own weighting',
      fmt(worstFit.profileScore) + '\u2013' + fmt(bestFit.profileScore),
      'the same answers, reweighted');
    rangeCell.querySelector('.v').classList.add('range');
    sum.appendChild(rangeCell);
    sum.appendChild(cell('Competitive or better', String(competitive.length), 'of ' + eligible.length + ' eligible programmes'));
    sum.appendChild(cell('Ruled out by a hard rule', String(blocked.length),
      blocked.length ? 'see below' : (pct < 100 ? 'none so far — some answers missing' : 'none')));
    var gapNote = Wizard.incompleteNote(pct, function () {
      resultsView.hidden = true; wizardView.hidden = false;
      wiz.go(wiz.firstMissingStep());
    });
    if (gapNote) resultsView.appendChild(gapNote);
    resultsView.appendChild(sum);

    resultsView.appendChild(profileExplainer(res, bestFit, worstFit));

    if (s.testDropped) {
      resultsView.appendChild(note(
        'You are not submitting a test score, so the test weight has been removed and the ' +
        'other factors rescaled — this is neutral, not a penalty. Schools that require a ' +
        'test are listed as ineligible rather than scored low.'));
    }
    if (s.test && s.test.submitting) {
      resultsView.appendChild(note(
        'Your score sits at roughly the ' + ordinal(Math.round(s.test.pct)) + ' percentile, ' +
        'which converts to about ' + s.test.gmat + ' on the GMAT 10th Edition scale. ' +
        'Cross-scale conversion is approximate — GMAT Focus and the GMAT 10th Edition are ' +
        'different instruments, and many published "averages" do not say which one they mean.'));
    }

    /* ---- eligible schools ---- */
    resultsView.appendChild(section('Programmes you are eligible for',
      eligible.length + ' of ' + res.rows.length));

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
    det.appendChild(el('summary', null, 'How your ' + fmt(s.total) + ' was calculated'));
    var inner = el('div', 'inner');
    var NAMES = FACTOR_NAMES;
    s.contributions.forEach(function (c) {
      var r = el('div', 'bd-row');
      r.appendChild(el('span', null, NAMES[c.key] + '  ·  ' +
        Math.round(c.value * 100) + '% of a possible ' + Math.round(c.weight * 10) / 10));
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
    other.textContent = 'Try another track';
    actions.appendChild(other);
    var print = el('button', 'btn', 'Print or save as PDF');
    print.addEventListener('click', function () { window.print(); });
    actions.appendChild(print);
    resultsView.appendChild(actions);

    if (chip) chip.textContent = fmt(s.total);

    /* Results are built after load, so the reveal observer has to be pointed
     * at the new nodes explicitly. */
    if (window.UI) UI.reveal(resultsView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    lead.textContent =
      'A track weighting says what a ' + track.name.toLowerCase() + ' applicant is generally ' +
      'judged on. It does not say what any one school does with the file, and that difference ' +
      'is large. Bocconi runs no interview and takes no reference letters on the standard ' +
      'route, names GPA as a compulsory pillar, may recalculate that GPA from your transcript ' +
      'itself, and applies a test floor to everyone — grades and the test are close to the ' +
      'whole ranking there. HEC and IE run essays, recorded answers and live interviews ' +
      'instead. So every programme below is scored under its own weighting.';
    body.appendChild(lead);

    var spread = Math.round((bestFit.profileScore - worstFit.profileScore) * 10) / 10;
    if (spread >= 4) {
      var p2 = el('p');
      p2.textContent =
        'For your answers that is a ' + fmt(spread) + '-point swing. Your profile suits ' +
        bestFit.school.name + ' \u2014 ' + bestFit.profile.short + ', ' +
        fmt(bestFit.profileScore) + ' \u2014 and works against you at ' + worstFit.school.name +
        ' \u2014 ' + worstFit.profile.short + ', ' + fmt(worstFit.profileScore) +
        '. Choosing where to apply is doing more work here than any single thing you could ' +
        'change about the application.';
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
        names.length + (names.length === 1 ? ' programme: ' : ' programmes: ') + names.join(' · ')));
      legend.appendChild(row);
    });
    body.appendChild(legend);

    var legend = el('p', 'prof-caveat');
    legend.textContent =
      'In the bars above and on every programme below: a green bar with a + means this ' +
      'school weighs that factor more heavily than the track average, and a grey bar with ' +
      'a \u2212 means it weighs it less. The number is the weight out of 100.';
    body.appendChild(legend);

    var caveat = el('p', 'prof-caveat');
    caveat.appendChild(document.createTextNode(
      'Which profile a school belongs to is my reading of its published process, not ' +
      'something any school states as a formula. The multipliers rescale back to the same ' +
      'hundred points, so a profile moves emphasis around rather than handing anyone free ' +
      'marks — an evenly balanced applicant scores about the same everywhere, and only a ' +
      'lopsided one moves much.'));
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
    head.textContent = 'What this school weighs \u00b7 ' + r.profile.label;
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
        ? 'Worth ' + fmt(r.profileShift) + ' points to you against the track average — this ' +
          'school leans on the parts of your file that are strong.'
        : 'Costs you ' + fmt(-r.profileShift) + ' points against the track average — it leans ' +
          'on the parts of your file that are thin.';
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
      head.textContent = 'You are ' + fmt(r.gap) + ' points short of this programme\'s ' +
        'Competitive threshold of ' + sc.threshold + '.';
    } else {
      head.textContent = 'You are ' + fmt(-r.gap) + ' points clear of the Competitive ' +
        'threshold of ' + sc.threshold + '.';
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
        'Sit a test scoring about ' + r.minTest.gmat + ' (GMAT) / ' + r.minTest.focus + ' (Focus)',
        'reaches ' + sc.threshold,
        'Roughly the ' + ordinal(r.minTest.percentile) + ' percentile. That alone would close the gap.'));

    } else if (r.gap > 0 && !r.minTest && notSubmitting) {
      box.appendChild(bullet('A test score alone will not close this gap', null,
        'Even a perfect score leaves you short here — the other factors have to move.'));

    } else if (r.gap <= 0 && mustTest && r.minTest) {
      /* Already clear on profile, but the school demands a score anyway. The
       * useful number is the floor that keeps you clear, not a target. */
      box.appendChild(bullet(
        'You need a test here, but only a modest one',
        'about ' + r.minTest.gmat,
        'Your profile is ' + fmt(-r.gap) + ' points clear of the threshold without a score, so ' +
        'anything from roughly the ' + ordinal(r.minTest.percentile) + ' percentile up — about ' +
        r.minTest.gmat + ' GMAT or ' + r.minTest.focus + ' Focus — keeps you at or above ' +
        sc.threshold + '. A weaker score than that would pull you back under it.'));

    } else if (r.gap <= 0 && !mustTest && breakEven) {
      box.appendChild(bullet(
        'You clear this without a test, and it does not require one', null,
        'Submitting anyway only helps above roughly the ' + ordinal(breakEven.percentile) +
        ' percentile — about ' + breakEven.gmat + ' GMAT or ' + breakEven.focus +
        ' Focus. Below that it would lower your score for no reason.'));
    }

    /* Everything else that would move the number, cheapest first. */
    if (r.gap > 0 && r.path.steps.length) {
      var intro = el('p', 'why-sub');
      intro.textContent = r.path.reached
        ? 'These changes together would get you there:'
        : 'The biggest available gains — not enough on their own, but they close most of it:';
      box.appendChild(intro);
      r.path.steps.slice(0, 4).forEach(function (st) {
        box.appendChild(bullet(st.groupLabel + ' → ' + st.optionLabel, '+' + fmt(st.gain)));
      });
    }

    return box;
  }

  function bullet(text, gain, note) {
    var li = el('div', 'why-item');
    var main = el('span', 'why-text');
    main.textContent = text;
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
    var meta = sc.region + ' · test: ' + sc.test.policy + ' · rounds: ' + r.regime.label.toLowerCase();
    if (r.roundMod) meta += ' (' + r.roundMod + ' for your timing)';
    var m = el('small', null, meta);
    m.appendChild(el('span', 'chip-emph ' + r.profile.id, r.profile.short));
    name.appendChild(m);

    if (r.gates.failures.length) {
      var ul = el('ul', 'gatelist');
      r.gates.failures.forEach(function (f) {
        var li = el('li');
        li.appendChild(document.createTextNode(f.label));
        var t = src(f.src); if (t) li.appendChild(t);
        ul.appendChild(li);
      });
      name.appendChild(ul);

      /* Blocked, but say where the profile itself lands. */
      var stand = el('p', 'standing ' + r.band.tone);
      stand.textContent = 'On score alone you would be ' + r.band.label.toLowerCase() +
        ' here — ' + fmt(r.adjusted) + ' against a threshold of ' + sc.threshold +
        '. The rule above is what blocks you, not your profile.';
      name.appendChild(stand);
    }
    if (r.gates.warnings.length) {
      var uw = el('ul', 'gatelist warn');
      r.gates.warnings.forEach(function (f) {
        var li = el('li');
        li.appendChild(document.createTextNode(f.label));
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
    sm.textContent = 'What this school actually publishes';
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
    pv.appendChild(document.createTextNode(sc.profile ? r.profile.label : 'Track weighting, unchanged'));
    pv.appendChild(src('CAL'));
    if (sc.because) pv.appendChild(el('small', 'why-note', sc.because));
    prow.appendChild(pv);
    facts.appendChild(prow);

    var thr = el('div', 'fact');
    thr.appendChild(el('span', 'fk', 'Score threshold used here'));
    var tv = el('span', 'fv');
    tv.appendChild(document.createTextNode(sc.threshold + ' competitive, ' + sc.strong + ' strong'));
    tv.appendChild(src('CAL'));
    thr.appendChild(tv);
    facts.appendChild(thr);
    det.appendChild(facts);
    name.appendChild(det);

    wrap.appendChild(name);

    /* The score is shown whether or not a gate blocks the school. */
    var num = el('div', 'num');
    num.appendChild(el('b', null, fmt(r.adjusted)));
    num.appendChild(document.createTextNode(' / ' + sc.threshold));
    if (window.UI && UI.meter) num.appendChild(UI.meter(r.adjusted, sc.threshold, 50, 95));
    wrap.appendChild(num);
    wrap.appendChild(el('div', 'badge ' + r.verdict.tone, r.verdict.label));
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
      'median ~' + e.median + ', about 68% between ' + lo + ' and ' + hi +
      ' (±1 SD ' + e.sd + ')'));
    v.appendChild(src('EST'));
    v.appendChild(el('small', 'why-note', 'Estimated from ' + e.from +
      (e.basis === 'published'
        ? '. The school publishes the anchor; the spread and any scale conversion are mine.'
        : '. The school publishes no admitted average — this whole figure is inferred.')));

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
        'Your ~' + t.gmat + ' sits ' + where + ' (' + (z >= 0 ? '+' : '') +
        (Math.round(z * 100) / 100) + ' SD).'));
    }
    row.appendChild(v);
    return row;
  }

  /* The results headline, in words. */
  function headline(competitive, eligible, blocked) {
    if (!eligible) return 'Every programme here is ruled out by a published rule.';
    var of = Wizard.words(eligible) + (blocked ? ' eligible' : '');
    if (!competitive) return 'Not yet competitive at any of the ' + of + '.';
    return 'Competitive or better at ' + Wizard.words(competitive) + ' of ' + of + '.';
  }
  function blockedLine(blocked, pct) {
    if (blocked) {
      var n = Wizard.words(blocked);
      return n.charAt(0).toUpperCase() + n.slice(1) + (blocked === 1 ? ' programme is' : ' programmes are') +
        ' ruled out by a published requirement.';
    }
    return pct < 100 ? 'No hard rule rules you out on the answers so far.' : 'No hard rule rules you out.';
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
    h.appendChild(document.createTextNode(title));
    if (sub) h.appendChild(el('span', 'count', String(sub)));
    return h;
  }
  function note(text, kind) {
    return el('div', 'note-card reveal' + (kind ? ' ' + kind : ''), text);
  }
}());
