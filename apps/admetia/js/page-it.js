/* IT & Computing page controller. Track comes from ?track= on the URL. */

(function () {
  'use strict';

  var M = window.IT_MODEL;
  var S = window.IT_SCORE;
  var EV = window.IT_EVIDENCE || null;
  var el = Wizard.el;

  var FACTOR_NAMES = {
    academic: 'Degree class', institution: 'Undergraduate institution',
    foundations: 'Computing foundations', maths: 'Mathematics',
    evidence: 'What you have built', experience: 'Professional experience',
    essays: 'Statement and motivation', references: 'References'
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
  document.title = track.name + ' — Admission Chances Calculator';

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
    ['Do you clear the ', 'rules', '?'], track.blurb, shot));

  var wizardView = document.getElementById('wizard-view');
  var resultsView = document.getElementById('results-view');
  var chip = document.getElementById('chip');

  var wiz = Wizard.create({
    key: 'it:' + trackId,
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

  function src(tag) {
    if (!tag) return null;
    return el('span', 'provenance ' + tag, SRC_LABEL[tag] || tag);
  }

  /* --------------------------------------------------------------------- */
  /* Results                                                                */
  /* --------------------------------------------------------------------- */

  function showResults(a) {
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
      if (!best || r.profileScore > best.profileScore) best = r;
      if (!worst || r.profileScore < worst.profileScore) worst = r;
    });

    var pct = S.completeness(a);
    resultsView.appendChild(Wizard.resultsHead('Your results \u00b7 ' + track.name,
      headline(competitive.length, eligible.length, blocked.length),
      'Your answers score ' + fmt(res.score.total) + ' on the track weighting' +
      (best && worst && best !== worst
        ? ', and ' + fmt(worst.profileScore) + '\u2013' + fmt(best.profileScore) +
          ' once each programme reads the file its own way. '
        : '. ') +
      blockedLine(blocked.length, pct)));

    var grid = el('div', 'summary reveal');
    grid.appendChild(dialCell('Profile score', res.score.total, 'track weighting'));
    if (best && worst && best !== worst) {
      var range = el('div');
      range.appendChild(el('div', 'k', 'Under each programme’s own weighting'));
      range.appendChild(el('div', 'v range', fmt(worst.profileScore) + '–' + fmt(best.profileScore)));
      range.appendChild(el('div', 'sub', 'same answers, read differently'));
      grid.appendChild(range);
    }
    grid.appendChild(cell('Competitive or better', String(competitive.length),
      'of ' + res.rows.length + ' modelled'));
    grid.appendChild(cell('Ruled out by a published rule', String(blocked.length),
      blocked.length ? 'a rule, not a judgement'
                     : (pct < 100 ? 'none so far — some answers missing' : 'nothing blocks you')));
    var gapNote = Wizard.incompleteNote(pct, function () {
      resultsView.hidden = true; wizardView.hidden = false;
      wiz.go(wiz.firstMissingStep());
    });
    if (gapNote) resultsView.appendChild(gapNote);
    resultsView.appendChild(grid);

    /* The thing that most needs saying on this track, said first. */
    resultsView.appendChild(note(
      'Read the gates before the score. Computing programmes publish hard entry rules — named ' +
      'modules, credit floors, degree classes — and enforce them. Being ruled out is not the same ' +
      'as scoring badly, and a strong profile does not buy a missing prerequisite. Where you are ' +
      'blocked, the score is still shown so you can see whether the prerequisite is worth going ' +
      'and getting.', 'warn'));

    resultsView.appendChild(profileExplainer(res));

    resultsView.appendChild(section(pct < 100
      ? 'No published rule blocks you on the answers so far'
      : 'You meet the published requirements', eligible.length));
    if (eligible.length) {
      var t1 = el('div', 'table ranked reveal');
      var runs = Wizard.verdictRuns(eligible, function (r) { return r.verdict.label; });
      (runs && runs.length > 1 ? runs : [{ rows: eligible }]).forEach(function (run) {
        if (run.label) {
          var d = el('div', 'table-div', run.label);
          d.appendChild(el('span', 'n', String(run.rows.length)));
          t1.appendChild(d);
        }
        run.rows.forEach(function (r) { t1.appendChild(schoolRow(r)); });
      });
      resultsView.appendChild(t1);
    } else {
      resultsView.appendChild(el('div', 'empty reveal',
        'Every modelled programme on this track has a published rule you do not currently meet. ' +
        'The list below says which rule, for each one.'));
    }

    if (blocked.length) {
      resultsView.appendChild(section('Ruled out by a published requirement', blocked.length));
      resultsView.appendChild(note(
        'These are not "low chance" — they are rules the programme publishes and applies. Some ' +
        'are permanent, like a degree class. Others are a module you could go and take before ' +
        'the next cycle, which is worth knowing separately.', 'warn'));
      var t2 = el('div', 'table reveal');
      blocked.forEach(function (r) { t2.appendChild(schoolRow(r)); });
      resultsView.appendChild(t2);
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

    resultsView.appendChild(breakdown(res));

    resultsView.appendChild(note(
      'The score is a ranking device, not a probability. No computing programme publishes a ' +
      'points requirement, and unlike the business calculators there is no admitted-student ' +
      'profile to anchor the thresholds against either — so every threshold here is ' +
      'calibration. What is not calibration is the rules: those are quoted, and each one says ' +
      'where it came from.', 'warn'));

    var actions = el('div', 'actions');
    var back = el('a', 'btn', '← Edit answers');
    back.href = '#';
    back.onclick = function (e) {
      e.preventDefault();
      resultsView.hidden = true; wizardView.hidden = false;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    actions.appendChild(back);
    var other = el('a', 'btn', 'Try another track');
    other.href = 'it.html';
    actions.appendChild(other);
    var print = el('button', 'btn ghost', 'Print or save as PDF');
    print.onclick = function () { window.print(); };
    actions.appendChild(print);
    resultsView.appendChild(actions);

    if (window.UI && UI.reveal) UI.reveal(resultsView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* --------------------------------------------------------------------- */

  function profileExplainer(res) {
    var box = el('div', 'prof-legend reveal');
    var intro_ = el('p', 'why-note');
    intro_.textContent = 'The same answers are worth different amounts at different programmes. ' +
      'Each one below is read the way its published process suggests it is actually read.';
    box.appendChild(intro_);

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
      box.appendChild(row);
    });

    var caveat = el('p', 'prof-caveat');
    caveat.appendChild(document.createTextNode(
      'Which programme gets which reading is my judgement of its published process, not ' +
      'something any of them state in these terms.'));
    caveat.appendChild(src('CAL'));
    box.appendChild(caveat);
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
    box.appendChild(el('p', 'why-head', 'How this programme reads a file · ' + r.profile.label));

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
          'programme leans on the parts of your file that are strong.'
        : 'Costs you ' + fmt(-r.profileShift) + ' points against the track average — it leans ' +
          'on the parts of your file that are thin.';
      box.appendChild(shift);
    }
    return box;
  }

  function whyBox(r) {
    var box = el('div', 'why');
    var sc = r.school;

    var head = el('p', 'why-head');
    if (r.gap > 0) {
      head.textContent = 'You are ' + fmt(r.gap) + ' points short of the Competitive threshold ' +
        'used here, which is ' + sc.threshold + '.';
    } else {
      head.textContent = 'On score you clear the threshold used here by ' +
        fmt(-r.gap) + ' points.';
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
        'Applying earlier in the cycle would be worth ' + fmt(r.roundGain) + ' points here.',
        '+' + fmt(r.roundGain), r.regime.note));
    }

    if (r.gap > 0 && r.path.steps.length) {
      r.path.steps.slice(0, 4).forEach(function (st) {
        box.appendChild(bullet(st.groupLabel + ' → ' + st.optionLabel, '+' + fmt(st.gain)));
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
    main.textContent = text;
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
        'No applicant has posted a computing master\u2019s result for ' + e.institution +
        ' since January 2021.'));
      v.appendChild(src('GC'));
      row.appendChild(v);
      return row;
    }

    var line = e.n + ' result' + (e.n === 1 ? '' : 's') + ' posted for computing ' +
      'master\u2019s at ' + e.institution + ', ' + e.window + ' \u2014 ' +
      e.reported.accepted + ' accepted, ' + e.reported.rejected + ' rejected' +
      (e.reported.waitlisted ? ', ' + e.reported.waitlisted + ' waitlisted' : '') + '.';
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
        'Decisions reported between ' + e.timing.earliest + ' and ' + e.timing.latest +
        ', with the middle of them around ' + e.timing.median + '.'));
    }
    if (e.gpa) {
      v.appendChild(el('small', 'why-note',
        'Reported grade average among those accepted: median ' + e.gpa.accMedian +
        ' (middle half ' + e.gpa.accP25 + '\u2013' + e.gpa.accP75 + ', from ' +
        e.gpa.accN + ' reports on a four-point scale)' +
        (e.gpa.rejMedian ? '; among those rejected, ' + e.gpa.rejMedian : '') + '.'));
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
          'Pooled across comparable programmes (' + pool.n + ' reports), applicants who were ' +
          'accepted reported a median of ' + pool.gpa.accMedian + ' and those rejected ' +
          pool.gpa.rejMedian + '. That is a group pattern, not this programme\u2019s bar.'));
      }
    }
    v.appendChild(el('small', 'why-note',
      'This is a self-selected sample of people who chose to post, not the applicant pool. It ' +
      'is not an acceptance rate and must not be read as one.'));
    row.appendChild(v);
    return row;
  }

  function schoolRow(r) {
    var sc = r.school;
    var wrap = el('div', 'row');

    var name = el('div', 'name');
    name.appendChild(document.createTextNode(sc.name));
    var meta = sc.region + ' · ' + (sc.gates || []).length + ' published rule' +
      ((sc.gates || []).length === 1 ? '' : 's') + ' · ' + r.regime.label.toLowerCase();
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

    name.appendChild(emphasisPanel(r));
    if (r.gap > 0 || !r.eligible) name.appendChild(whyBox(r));

    var det = el('details');
    det.style.marginTop = '8px';
    var sm = el('summary');
    sm.style.cssText = 'cursor:pointer;font-size:12.5px;color:var(--muted);list-style:none';
    sm.textContent = 'What this programme actually publishes';
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
    tv.appendChild(document.createTextNode(sc.threshold + ' competitive, ' + sc.strong + ' strong'));
    tv.appendChild(src('CAL'));
    thr.appendChild(tv);
    facts.appendChild(thr);
    det.appendChild(facts);
    name.appendChild(det);

    wrap.appendChild(name);

    var num = el('div', 'num');
    num.appendChild(el('b', null, fmt(r.adjusted)));
    num.appendChild(document.createTextNode(' / ' + sc.threshold));
    if (window.UI && UI.meter) num.appendChild(UI.meter(r.adjusted, sc.threshold, 50, 95));
    wrap.appendChild(num);
    wrap.appendChild(el('div', 'badge ' + r.verdict.tone, r.verdict.label));
    return wrap;
  }

  function breakdown(res) {
    var det = el('details', 'breakdown reveal');
    var sm = el('summary');
    sm.textContent = 'How the headline score was built';
    det.appendChild(sm);
    var inner = el('div', 'inner');
    res.score.contributions.slice().sort(function (a, b) { return b.pts - a.pts; })
      .forEach(function (c) {
        var row = el('div', 'bd-row');
        row.appendChild(el('span', null, FACTOR_NAMES[c.key] + ' · ' +
          Math.round(c.value * 100) + '% of a possible ' + fmt(c.weight)));
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
    if (!eligible) return 'Every programme here is ruled out by a published rule.';
    var of = Wizard.words(eligible) + (blocked ? ' eligible' : '');
    if (!competitive) return 'Not yet competitive at any of the ' + of + '.';
    return 'Competitive or better at ' + Wizard.words(competitive) + ' of ' + of + '.';
  }
  function blockedLine(blocked, pct) {
    if (blocked) {
      var n = Wizard.words(blocked);
      return n.charAt(0).toUpperCase() + n.slice(1) + (blocked === 1 ? ' programme is' : ' programmes are') +
        ' ruled out by a published rule.';
    }
    return pct < 100 ? 'No published rule blocks you on the answers so far.' : 'No published rule blocks you.';
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
    h.appendChild(document.createTextNode(title));
    if (sub !== undefined && sub !== null) h.appendChild(el('span', 'count', String(sub)));
    return h;
  }
  function note(text, kind) {
    return el('div', 'note-card reveal' + (kind ? ' ' + kind : ''), text);
  }
}());
