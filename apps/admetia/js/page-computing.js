/* IT & Computing page controller. Track comes from ?track= on the URL. */

(function () {
  'use strict';

  var M = window.IT_MODEL;
  var S = window.IT_SCORE;
  var EV = window.IT_EVIDENCE || null;
  var el = Wizard.el;
  var T = I18N.t, tn = I18N.tn, W = Wizard.words;

  var FACTOR_NAMES = {
    academic: T('Degree class'), institution: T('Undergraduate institution'),
    foundations: T('Computing foundations'), maths: T('Mathematics'),
    evidence: T('What you have built'), experience: T('Professional experience'),
    essays: T('Statement and motivation'), references: T('References')
  };

  var SRC_LABEL = {
    OFF: 'programme', OFF2: 'programme doc', TP: 'third-party',
    FOI: 'FOI', GC: 'applicants', NP: 'not published',
    NV: 'unverified', CAL: 'calibration'
  };

  var params = new URLSearchParams(window.location.search);
  var trackId = params.get('track');
  if (!M.tracks[trackId]) trackId = 'cs';
  var track = M.tracks[trackId];

  var crumb = document.getElementById('crumb');
  if (crumb) crumb.textContent = track.name;
  document.title = T('{track} — Admetia', { track: track.name });

  /* One photograph per track, chosen for what the track actually selects on
   * rather than for a campus: computer science is people reading code, data
   * science is the analysis itself, and the conversion degree is somebody
   * learning to write their first lines. */
  var TRACK_SHOT = {
    cs: { src: 'img/photo/cs.jpg', w: 1200, h: 800,
          alt: 'Two people reading source code on a large wall-mounted display.' },
    dsai: { src: 'img/photo/datascience.jpg', w: 1200, h: 800,
            alt: 'A laptop showing data dashboards, with printed charts on the desk beside it.' },
    conversion: { src: 'img/photo/conversion.jpg', w: 1200, h: 800,
                  alt: 'Hands typing beginner HTML and JavaScript on a laptop, a notebook open alongside.' }
  };

  var intro = document.getElementById('intro');
  var shot = TRACK_SHOT[trackId] || TRACK_SHOT.cs;

  intro.appendChild(Wizard.sectionHead(track.full,
    ['Do you clear the ', 'rules', '?'], track.blurb, shot, Wizard.formMeta(M)));

  var wizardView = document.getElementById('wizard-view');
  var resultsView = document.getElementById('results-view');
  var chip = document.getElementById('chip');

  var wiz = Wizard.create({
    key: 'it:' + trackId,
    model: M,
    migrate: Wizard.migrateGradeScale,
    mount: '#wizard',
    nav: '#stepnav',
    progress: '#bar',
    chip: '#chip',
    completeness: function (a) { return S.completeness(a); },
    chipValue: function (a) { return String(S.score(a, trackId).total); },
    onFinish: showResults
  });

  var route = Wizard.resultsRoute({
    show: function () { showResults(wiz.answers()); },
    hide: function () {
      resultsView.hidden = true; wizardView.hidden = false;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    isShown: function () { return !resultsView.hidden; },
    hasAnswers: function () { return Object.keys(wiz.answers()).length > 0; }
  });

  function fmt(n) { return (Math.round(n * 10) / 10).toString(); }

  function src(tag) {
    if (!tag) return null;
    return el('span', 'provenance ' + tag, SRC_LABEL[tag] || tag);
  }

  /* --------------------------------------------------------------------- */
  /* Results                                                                */
  /* --------------------------------------------------------------------- */

  function showResults(a, keepScroll) {
    if (!keepScroll && window.Stats) Stats.event('results-computing-' + trackId);
    var res = S.evaluate(a, trackId);
    resultsView.innerHTML = '';
    wizardView.hidden = true;
    resultsView.hidden = false;
    if (chip) chip.textContent = String(res.score.total);

    var eligible = res.rows.filter(function (r) { return r.eligible; });
    var blocked = res.rows.filter(function (r) { return !r.eligible; });
    var competitive = eligible.filter(function (r) { return r.adjusted >= r.school.threshold; });

    var best = null, worst = null;
    res.rows.forEach(function (r) {
      if (!best || r.adjusted > best.adjusted) best = r;
      if (!worst || r.adjusted < worst.adjusted) worst = r;
    });

    var pct = S.completeness(a);
    resultsView.appendChild(Wizard.resultsHead(T('Your results · {track}', { track: track.name }),
      headline(competitive.length, eligible.length, blocked.length),
      closestLine(competitive, eligible) +
      (best && worst && best !== worst
        ? T('Your answers score {score} on the track weighting, and {lo}–{hi} once each programme reads the file its own way.',
            { score: fmt(res.score.total), lo: fmt(worst.adjusted), hi: fmt(best.adjusted) })
        : T('Your answers score {score} on the track weighting.', { score: fmt(res.score.total) })) + ' ' +
      blockedLine(blocked.length, pct), backToAnswers));

    var grid = el('div', 'summary reveal');
    grid.appendChild(dialCell('Profile score', res.score.total, 'track weighting'));
    if (best && worst && best !== worst) {
      var range = el('div');
      range.appendChild(el('div', 'k', 'Under each programme’s own weighting'));
      range.appendChild(el('div', 'v range', fmt(worst.adjusted) + '–' + fmt(best.adjusted)));
      range.appendChild(el('div', 'sub', 'same answers, read differently'));
      grid.appendChild(range);
    }
    grid.appendChild(cell('Competitive or better', String(competitive.length),
      T('of {total} modelled', { total: res.rows.length })));
    grid.appendChild(cell('Ruled out by a published rule', String(blocked.length),
      blocked.length ? 'a rule, not a judgement'
                     : (pct < 100 ? 'none so far — some answers missing' : 'nothing blocks you')));
    var gapNote = Wizard.incompleteNote(pct, function () {
      route.leave(function () { wiz.go(wiz.firstMissingStep()); });
    });
    if (gapNote) resultsView.appendChild(gapNote);
    var stale = window.ResultsKit && ResultsKit.staleNotice(res.rows.map(function (r) { return r.school.id; }));
    if (stale) resultsView.appendChild(stale);
    resultsView.appendChild(grid);

    /* The thing that most needs saying on this track, said first. */
    resultsView.appendChild(note(
      'Read the gates before the score. Computing programmes publish hard entry rules — named ' +
      'modules, credit floors, degree classes — and enforce them. Being ruled out is not the same ' +
      'as scoring badly, and a strong profile does not buy a missing prerequisite. Where you are ' +
      'blocked, the score is still shown so you can see whether the prerequisite is worth going ' +
      'and getting.', 'warn'));

    var kit = window.ResultsKit ? ResultsKit.session(resultsView) : null;
    var filters = null;
    if (kit) {
      var wi = kit.whatIf({
        levers: levers(a),
        project: function (patch) { return project(a, patch); },
        onKeep: function (patch) { wiz.update(patch); showResults(wiz.answers(), true); }
      });
      if (wi) resultsView.appendChild(wi);
      filters = kit.filterBar();
      resultsView.appendChild(filters.el);
    }
    currentKit = kit;

    resultsView.appendChild(profileExplainer(res));

    var hEligible = section(pct < 100
      ? 'No published rule blocks you on the answers so far'
      : 'You meet the published requirements', eligible.length);
    resultsView.appendChild(hEligible);
    if (eligible.length) {
      var t1 = el('div', 'table ranked reveal');
      /* The closest to Competitive without being there start open. */
      var opened = eligible.filter(function (r) { return r.gap > 0; })
        .sort(function (x, y) { return x.gap - y.gap; }).slice(0, ResultsKit.openCount());
      var runs = Wizard.verdictRuns(eligible, function (r) { return r.verdict.label; });
      (runs && runs.length > 1 ? runs : [{ rows: eligible }]).forEach(function (run) {
        if (run.label) {
          var d = el('div', 'table-div', run.label);
          d.appendChild(el('span', 'n', String(run.rows.length)));
          t1.appendChild(d);
        }
        run.rows.forEach(function (r) { t1.appendChild(schoolRow(r, opened.indexOf(r) !== -1)); });
      });
      resultsView.appendChild(ResultsKit.foldAll(t1));
      resultsView.appendChild(t1);
    } else {
      resultsView.appendChild(el('div', 'empty reveal',
        'Every modelled programme on this track has a published rule you do not currently meet. ' +
        'The list below says which rule, for each one.'));
    }

    var hBlocked = null, outList = null;
    if (blocked.length) {
      hBlocked = section('Ruled out by a published requirement', blocked.length);
      resultsView.appendChild(hBlocked);
      resultsView.appendChild(note(
        'These are not "low chance" — they are rules the programme publishes and applies. Some ' +
        'are permanent, like a degree class. Others are a module you could go and take before ' +
        'the next cycle, which is worth knowing separately.', 'warn'));
      var t2 = el('div', 'table');
      blocked.forEach(function (r) { t2.appendChild(schoolRow(r, false)); });
      outList = ResultsKit.outList(blocked.length, [ResultsKit.foldAll(t2), t2]);
      resultsView.appendChild(outList);
    }

    if (M.excluded && M.excluded.length) {
      resultsView.appendChild(section('Deliberately not modelled here', M.excluded.length));
      var t3 = el('div', 'table reveal');
      M.excluded.forEach(function (x) {
        var row = el('div', 'row');
        row.style.gridTemplateColumns = '1fr auto';
        var n = el('div', 'name');
        n.appendChild(document.createTextNode(x.name));
        n.appendChild(el('small', null, x.why));
        row.appendChild(n);
        row.appendChild(el('div', 'badge gate', 'Not modelled'));
        t3.appendChild(row);
      });
      resultsView.appendChild(t3);
    }

    var det = breakdown(res);
    resultsView.appendChild(det);

    resultsView.appendChild(note(
      'The score is a ranking device, not a probability. No computing programme publishes a ' +
      'points requirement, and unlike the business calculators there is no admitted-student ' +
      'profile to anchor the thresholds against either — so every threshold here is ' +
      'calibration. What is not calibration is the rules: those are quoted, and each one says ' +
      'where it came from.', 'warn'));

    var actions = el('div', 'actions');
    var back = el('a', 'btn', '← Edit answers');
    back.href = '#';
    back.onclick = function (e) { e.preventDefault(); backToAnswers(); };
    actions.appendChild(back);
    var other = el('a', 'btn', 'Try another track');
    other.href = 'it.html';
    actions.appendChild(other);
    if (window.ResultsKit) {
      actions.appendChild(ResultsKit.planButton(function () { return battlePlan(a, res); }));
    }
    resultsView.appendChild(actions);
    var cal = kit && kit.deadlineCalendar();
    if (cal) resultsView.insertBefore(cal, actions);

    if (window.ResultsKit) {
      resultsView.insertBefore(ResultsKit.jumpBar([
        { label: 'Eligible', count: eligible.length, target: hEligible },
        { label: 'Ruled out', count: blocked.length, target: hBlocked, open: outList },
        { label: 'Deadlines', count: cal && cal.count, target: cal },
        { label: 'How your score was calculated', target: det }
      ], function () { return battlePlan(a, res); }, 'it'), grid.nextSibling);
    }

    if (filters) filters.refresh();
    if (window.UI && UI.reveal) UI.reveal(resultsView);
    if (!keepScroll) window.scrollTo({ top: 0, behavior: 'smooth' });
    route.shown();
    ResultsKit.pickedResults(resultsView, pick);
  }

  /* --------------------------------------------------------------------- */
  /* Tiers, what-if and the battle plan                                     */
  /* --------------------------------------------------------------------- */

  var currentKit = null;

  function tierOf(r) {
    if (!r.eligible) return 'out';
    return r.band.tone === 'high' ? 'safe' : r.band.tone === 'good' ? 'target' : 'dream';
  }

  function merged(answers, patch) {
    var out = Object.assign({}, answers);
    Object.keys(patch).forEach(function (k) {
      if (patch[k] === undefined) delete out[k]; else out[k] = patch[k];
    });
    return out;
  }

  function project(answers, patch) {
    var res = S.evaluate(merged(answers, patch), trackId);
    var rows = {}, comp = 0, elig = 0;
    res.rows.forEach(function (r) {
      rows[r.school.id] = { num: fmt(r.adjusted), verdict: r.verdict, tier: tierOf(r), value: r.adjusted, name: r.school.name };
      if (r.eligible) { elig++; if (r.adjusted >= r.school.threshold) comp++; }
    });
    return { rows: rows, score: fmt(res.score.total), scoreLabel: 'Profile score',
      summary: T('Profile score {score} — Competitive or better at {n} of {total} eligible',
        { score: fmt(res.score.total), n: comp, total: elig }) };
  }

  /* No test factor on this track, so the levers are the parts of the file
   * still open to change, led by whichever could move your score most. */
  function levers(answers) {
    var byId = {};
    M.steps.forEach(function (st) { st.groups.forEach(function (g) { byId[g.id] = g; }); });
    var scoreOf = function (p) { return S.score(merged(answers, p), trackId).total; };
    var base = scoreOf({});
    return ['mathsEcts', 'research', 'projects', 'workMonths', 'references', 'statement', 'programming', 'csEcts']
      .filter(function (gid) { return byId[gid] && byId[gid].type === 'radio'; })
      .map(function (gid) {
        var l = ResultsKit.radioLever(byId[gid], answers, scoreOf);
        l.room = l.steps[l.steps.length - 1].v - base;
        return l;
      })
      .sort(function (x, y) { return y.room - x.room; });
  }

  function battlePlan(answers, res) {
    var sc = res.score;
    var eligible = res.rows.filter(function (r) { return r.eligible; });
    var blocked = res.rows.filter(function (r) { return !r.eligible; });
    var comp = eligible.filter(function (r) { return r.adjusted >= r.school.threshold; });

    var rows = eligible.map(function (r) {
      return { key: r.school.id, name: r.school.name, region: ResultsKit.regionLabel(r.school.region),
        tier: tierOf(r), verdict: r.verdict.label, score: fmt(r.adjusted) + ' / ' + r.school.threshold };
    });

    var contrib = sc.contributions.filter(function (c) { return c.weight > 0; });
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
    blocked.slice(0, 3).forEach(function (r) {
      steps.push(T('Ruled out at {school}: {rule}.', { school: r.school.name,
        rule: T(r.gates.failures[0].label).replace(/^./, function (c) { return c.toLowerCase(); }) }));
    });
    if (S.completeness(answers) < 100) steps.unshift('Answer the questions you skipped — a missing answer scores nothing.');

    return {
      kicker: track.full,
      title: headline(comp.length, eligible.length, blocked.length),
      standfirst: T('A profile score of {score} on the track weighting, before any programme’s own emphasis.',
        { score: fmt(sc.total) }) + ' ' + blockedLine(blocked.length, S.completeness(answers)),
      facts: [['Profile score', fmt(sc.total) + ' / 100'], ['Competitive or better', comp.length + ' / ' + eligible.length],
              ['Ruled out by a rule', String(blocked.length)], ['Answered', S.completeness(answers) + '%']],
      rows: rows, strengths: strengths, gaps: gaps, steps: steps
    };
  }

  /* --------------------------------------------------------------------- */

  function profileExplainer(res) {
    var box = el('div', 'prof-legend reveal');
    var intro_ = el('p', 'why-note');
    intro_.textContent = T('The same answers are worth different amounts at different programmes. ' +
      'Each one below is read the way its published process suggests it is actually read.');
    box.appendChild(intro_);
    var more = ResultsKit.fold('How the programmes read a file differently');
    var detail = el('div', 'more-body');
    more.appendChild(detail);
    box.appendChild(more);

    var byProfile = {};
    res.rows.forEach(function (r) {
      var id = r.profile.id;
      if (!byProfile[id]) byProfile[id] = { profile: r.profile, score: r.profileScore, emphasis: r.emphasis, schools: [] };
      byProfile[id].schools.push(r.school.name);
    });

    Object.keys(byProfile).forEach(function (id) {
      var p = byProfile[id];
      var row = el('div', 'prof-row');
      var head = el('div', 'prof-row-head');
      head.appendChild(el('span', 'prof-name', p.profile.label));
      head.appendChild(el('span', 'prof-score', fmt(p.score)));
      row.appendChild(head);
      row.appendChild(el('p', 'prof-blurb', p.profile.blurb));
      row.appendChild(weightBars(p.emphasis, 4));
      row.appendChild(el('p', 'prof-schools', p.schools.join(' · ')));
      detail.appendChild(row);
    });

    var caveat = el('p', 'prof-caveat');
    caveat.appendChild(document.createTextNode(T(
      'Which programme gets which reading is my judgement of its published process, not ' +
      'something any of them state in these terms.')));
    caveat.appendChild(src('CAL'));
    detail.appendChild(caveat);
    return box;
  }

  function weightBars(em, n) {
    var wrap = el('div', 'wbars');
    var max = em[0] ? em[0].weight : 1;
    em.slice(0, n).forEach(function (e) {
      var row = el('div', 'wbar');
      row.appendChild(el('span', 'wbar-k', FACTOR_NAMES[e.key]));
      var trackEl = el('span', 'wbar-track');
      var fill = el('i');
      fill.style.setProperty('--w', Math.round(e.weight / max * 100) + '%');
      if (e.delta > 0.5) fill.className = 'up';
      else if (e.delta < -0.5) fill.className = 'down';
      trackEl.appendChild(fill);
      row.appendChild(trackEl);
      var v = el('span', 'wbar-v');
      v.textContent = fmt(e.weight);
      if (Math.abs(e.delta) >= 0.5) {
        v.appendChild(el('em', e.delta > 0 ? 'up' : 'down',
          (e.delta > 0 ? '+' : '−') + fmt(Math.abs(e.delta))));
      }
      row.appendChild(v);
      wrap.appendChild(row);
    });
    return wrap;
  }

  function emphasisPanel(r) {
    var box = el('div', 'why emph');
    box.appendChild(el('p', 'why-head', T('How this programme reads a file · {profile}', { profile: r.profile.label })));

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
          'programme leans on the parts of your file that are strong.', { n: fmt(r.profileShift) })
        : T('Costs you {n} points against the track average — it leans ' +
          'on the parts of your file that are thin.', { n: fmt(-r.profileShift) });
      box.appendChild(shift);
    }
    return box;
  }

  function whyBox(r) {
    var box = el('div', 'why');
    var sc = r.school;

    var head = el('p', 'why-head');
    if (r.gap > 0) {
      head.textContent = T('You are {n} points short of the Competitive threshold used here, which is {threshold}.',
        { n: fmt(r.gap), threshold: sc.threshold });
    } else {
      head.textContent = T('On score you clear the threshold used here by {n} points.', { n: fmt(-r.gap) });
    }
    box.appendChild(head);

    if (!r.eligible) {
      box.appendChild(el('p', 'why-sub',
        'The rule above is what blocks you. Closing the points gap will not change that — ' +
        'but if the rule is a module rather than a degree class, it is worth reading the two ' +
        'together.'));
    }

    if (r.roundGain > 0) {
      box.appendChild(bullet(
        T('Applying earlier in the cycle would be worth {n} points here.', { n: fmt(r.roundGain) }),
        '+' + fmt(r.roundGain), r.regime.note));
    }

    if (r.gap > 0 && r.path.steps.length) {
      r.path.steps.slice(0, 4).forEach(function (st) {
        box.appendChild(bullet(T(st.groupLabel) + ' → ' + T(st.optionLabel), '+' + fmt(st.gain)));
      });
      if (!r.path.reached) {
        box.appendChild(el('p', 'why-note',
          'Even together these do not close the gap. This programme is a genuine stretch on the ' +
          'profile as it stands.'));
      }
    } else if (r.gap > 0) {
      box.appendChild(el('p', 'why-note',
        'Nothing in the answers you gave can be changed to close this gap — what is short ' +
        'here is fixed by your degree.'));
    }
    return box;
  }

  function bullet(text, gain, note_) {
    var li = el('div', 'why-item');
    var main = el('span', 'why-text');
    main.textContent = T(text);
    li.appendChild(main);
    if (gain) li.appendChild(el('span', 'why-gain', gain));
    if (note_) li.appendChild(el('small', 'why-note', note_));
    return li;
  }

  /* What applicants reported. Deliberately never called an acceptance rate,
   * and deliberately silent about grades below the sample-size bar. */
  function evidenceFact(r) {
    var e = r.evidence;
    if (!e) return null;
    var row = el('div', 'fact');
    row.appendChild(el('span', 'fk', 'What applicants reported'));
    var v = el('span', 'fv');

    if (!e.n) {
      v.appendChild(document.createTextNode(
        T('No applicant has posted a computing master’s result for {institution} since January 2021.', { institution: e.institution })));
      v.appendChild(src('GC'));
      row.appendChild(v);
      return row;
    }

    var line = tn(e.n, '{n} result posted for computing master’s at {institution}, {window}',
        '{n} results posted for computing master’s at {institution}, {window}', { institution: e.institution, window: T(e.window) }) +
      ' — ' + T('{acc} accepted, {rej} rejected', { acc: e.reported.accepted, rej: e.reported.rejected }) +
      (e.reported.waitlisted ? ', ' + T('{n} waitlisted', { n: e.reported.waitlisted }) : '') + '.';
    v.appendChild(document.createTextNode(line));
    v.appendChild(src('GC'));

    /* Said before any number is read: these cover the institution, not this
     * particular MSc. Nobody here has enough reports to separate courses. */
    v.appendChild(el('small', 'why-note',
      'These cover every computing master\u2019s at this institution, not this course on ' +
      'its own \u2014 applicants file under free-text course names and there are too few ' +
      'reports to separate them.'));

    if (e.timing && e.timing.median) {
      v.appendChild(el('small', 'why-note',
        T('Decisions reported between {earliest} and {latest}, with the middle of them around {median}.',
          { earliest: T(e.timing.earliest), latest: T(e.timing.latest), median: T(e.timing.median) })));
    }
    if (e.gpa) {
      v.appendChild(el('small', 'why-note',
        T('Reported grade average among those accepted: median {median} (middle half {p25}–{p75}, from {n} reports on a four-point scale)',
          { median: e.gpa.accMedian, p25: e.gpa.accP25, p75: e.gpa.accP75, n: e.gpa.accN }) +
        (e.gpa.rejMedian ? T('; among those rejected, {median}', { median: e.gpa.rejMedian }) : '') + '.'));
    } else {
      v.appendChild(el('small', 'why-note',
        'Too few reports to say anything about the grades of people admitted here, so ' +
        'nothing is claimed about them.'));

      /* What can honestly be said instead: the pooled picture for comparable
       * programmes. Pooling is the price of saying anything at all at this
       * sample size, and the sentence says so rather than implying the figure
       * describes this programme. */
      var pool = e.tier && EV && EV.tiers[e.tier];
      if (pool && pool.gpa) {
        v.appendChild(el('small', 'why-note',
          T('Pooled across comparable programmes ({n} reports), applicants who were accepted reported a median of ' +
            '{acc} and those rejected {rej}. That is a group pattern, not this programme’s bar.',
            { n: pool.n, acc: pool.gpa.accMedian, rej: pool.gpa.rejMedian })));
      }
    }
    v.appendChild(el('small', 'why-note',
      'This is a self-selected sample of people who chose to post, not the applicant pool. It ' +
      'is not an acceptance rate and must not be read as one.'));
    row.appendChild(v);
    return row;
  }

  function schoolRow(r, open) {
    var sc = r.school;
    var wrap = el('div', 'row');

    var name = el('div', 'name');
    name.appendChild(document.createTextNode(sc.name));
    /* A ruled-out row keeps only its country: timing and weighting are
     * beside the point until the rule is met, and wait in the fold. */
    var meta = T(sc.region);
    if (r.eligible) {
      meta = T(sc.region) + ' · ' + tn((sc.gates || []).length, '{n} published rule', '{n} published rules');
      if (r.roundMod) meta += ' · ' + T('{n} for applying in a late round', { n: r.roundMod });
    }
    var m = el('small', null, meta);
    if (r.eligible) m.appendChild(el('span', 'chip-emph ' + r.profile.id, r.profile.short));
    name.appendChild(m);
    /* A ruled-out row stays short — its name and the rule that blocks it.
     * The deadline and where the score would land wait inside the fold. */
    var dl = window.ResultsKit && ResultsKit.deadlineNode(sc.id);
    if (dl && r.eligible) name.appendChild(dl);
    var stand = null;

    if (r.gates.failures.length) {
      var ul = el('ul', 'gatelist');
      r.gates.failures.forEach(function (f) {
        var li = el('li');
        li.appendChild(document.createTextNode(T(f.label)));
        var t = src(f.src); if (t) li.appendChild(t);
        ul.appendChild(li);
      });
      name.appendChild(ul);

      stand = el('p', 'standing ' + r.band.tone);
      stand.textContent = T('On score alone you would be {band} here — {score} against a threshold of {threshold}. ' +
        'The rule above is what blocks you, not your profile.',
        { band: T(r.band.label).toLowerCase(), score: fmt(r.adjusted), threshold: sc.threshold });
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

    /* Everything below the verdict is folded: how to close the gap, how
     * this programme reads a file, and what it publishes. */
    var explain = r.gap > 0 || !r.eligible;
    var more = ResultsKit.fold(!r.eligible ? 'More on this programme'
      : explain ? 'How to close the gap, and how this programme reads a file'
      : 'How this programme reads a file, and what it publishes', open);
    var body = el('div', 'more-body');
    more.appendChild(body);
    if (stand) body.appendChild(stand);
    if (dl && !r.eligible) body.appendChild(dl);
    if (explain) body.appendChild(whyBox(r));
    body.appendChild(emphasisPanel(r));
    /* The programme's own facts fold again: reference, not advice. */
    var pub = ResultsKit.fold('What this programme actually publishes');
    var facts = el('div', 'facts');
    sc.facts.forEach(function (f) {
      var row = el('div', 'fact');
      row.appendChild(el('span', 'fk', f.k));
      var v = el('span', 'fv');
      v.appendChild(document.createTextNode(f.v));
      var tag = src(f.src); if (tag) v.appendChild(tag);
      row.appendChild(v);
      facts.appendChild(row);
    });

    var ef = evidenceFact(r);
    if (ef) facts.appendChild(ef);

    var prow = el('div', 'fact');
    prow.appendChild(el('span', 'fk', 'Weighting applied here'));
    var pv = el('span', 'fv');
    pv.appendChild(document.createTextNode(r.profile.label));
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
    pub.appendChild(facts);
    body.appendChild(pub);
    name.appendChild(more);

    wrap.appendChild(name);

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

  function breakdown(res) {
    var det = el('details', 'breakdown reveal');
    var sm = el('summary');
    sm.textContent = T('How the headline score was built');
    det.appendChild(sm);
    var inner = el('div', 'inner');
    res.score.contributions.slice().sort(function (a, b) { return b.pts - a.pts; })
      .forEach(function (c) {
        var row = el('div', 'bd-row');
        row.appendChild(el('span', null, FACTOR_NAMES[c.key] + ' · ' +
          T('{pct}% of a possible {weight}', { pct: Math.round(c.value * 100), weight: fmt(c.weight) })));
        row.appendChild(el('span', 'p', fmt(c.pts)));
        inner.appendChild(row);
      });
    res.score.mods.forEach(function (mod) {
      var row = el('div', 'bd-row');
      row.appendChild(el('span', null, mod.label));
      row.appendChild(el('span', 'p' + (mod.pts < 0 ? ' neg' : ''), fmt(mod.pts)));
      inner.appendChild(row);
    });
    var tot = el('div', 'bd-row');
    tot.appendChild(el('span', null, 'Total'));
    tot.appendChild(el('span', 'p', fmt(res.score.total)));
    inner.appendChild(tot);
    det.appendChild(inner);
    return det;
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
  /* Back from the results to the questions. */
  function backToAnswers() { route.leave(); }

  /* With nothing Competitive yet, the most useful fact is where you are
   * nearest. Empty otherwise, so it adds nothing to a good result. */
  function closestLine(competitive, eligible) {
    if (competitive.length || !eligible.length) return '';
    var c = eligible.slice().sort(function (x, y) { return x.gap - y.gap; })[0];
    return T('Closest: {name}, {n} points short of Competitive.', { name: c.school.name, n: fmt(c.gap) }) + ' ';
  }
  function blockedLine(blocked, pct) {
    if (blocked) {
      return tn(blocked, '{N} programme is ruled out by a published rule.',
        '{N} programmes are ruled out by a published rule.', { N: I18N.cap(W(blocked)) });
    }
    return T(pct < 100 ? 'No published rule blocks you on the answers so far.' : 'No published rule blocks you.');
  }

  function cell(k, v, sub) {
    var d = el('div');
    d.appendChild(el('div', 'k', k));
    d.appendChild(el('div', 'v', v));
    if (sub) d.appendChild(el('div', 'sub', sub));
    return d;
  }
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
    if (sub !== undefined && sub !== null) h.appendChild(el('span', 'count', String(sub)));
    return h;
  }
  function note(text, kind) {
    return el('div', 'note-card reveal' + (kind ? ' ' + kind : ''), text);
  }

  /* Opened from the programme directory with ?school=<id>. */
  var pick = ResultsKit.picked(function (id) {
    var sc = M.schools.filter(function (x) { return x.id === id && x.tracks.indexOf(trackId) > -1; })[0];
    return sc && sc.name;
  });
  ResultsKit.pickedBanner(wizardView, pick, {
    hasAnswers: function () { return Object.keys(wiz.answers()).length > 0; },
    show: function () { showResults(wiz.answers()); }
  });

  /* Opened on #results (a reload, or "See your results" from another page). */
  if (route.initial()) showResults(wiz.answers());
}());
