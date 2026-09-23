/* MBA page controller: drives the wizard, then renders results. */

(function () {
  'use strict';

  var M = window.MBA_MODEL;
  var S = window.MBA_SCORE;
  var el = Wizard.el;
  var T = I18N.t, tn = I18N.tn, W = Wizard.words;

  var wizardView = document.getElementById('wizard-view');
  var resultsView = document.getElementById('results-view');
  var chip = document.getElementById('chip');

  var mode = 'published';

  /* Answers saved before the model's option ids changed cannot be restored
   * into the new ids, so the old entry is dropped rather than left to linger. */
  Store.clear('mba');

  var wiz = Wizard.create({
    key: 'mba2',
    model: M,
    mount: '#wizard',
    nav: '#stepnav',
    progress: '#bar',
    chip: '#chip',
    completeness: function (a) { return S.completeness(a); },
    chipValue: function (a) { return String(S.score(a, mode).base); },
    onFinish: showResults
  });

  function fmt(n) {
    return (Math.round(n * 100) / 100).toString();
  }
  function signed(n) {
    return (n > 0 ? '+' : '') + fmt(n);
  }

  /* --------------------------------------------------------------------- */

  function modelName() {
    return T(mode === 'published' ? 'model as published' : 'corrected model');
  }

  function showResults(answers, keepScroll) {
    if (!keepScroll && window.Stats) Stats.event('results-mba');
    var published = S.score(answers, 'published');
    var corrected = S.score(answers, 'corrected');
    var active = mode === 'corrected' ? corrected : published;
    var differs = published.base !== corrected.base ||
      M.adjustedSchools.some(function (s) {
        return published.schools[s.id] !== corrected.schools[s.id];
      });

    resultsView.innerHTML = '';
    resultsView.hidden = false;
    wizardView.hidden = true;

    /* ---- headline numbers ---- */
    var reached = M.generalSchools.filter(function (s) { return active.base - s.points >= -2; });
    var top = M.generalSchools.filter(function (s) { return active.base - s.points >= 0; });

    var n = M.generalSchools.length;
    resultsView.appendChild(Wizard.resultsHead(T('Your results · MBA'),
      reached.length
        ? T('Competitive or better at {n} of {total} schools.', { n: W(reached.length), total: W(n) })
        : T('Not yet competitive at any of the {total} schools.', { total: W(n) }),
      T('A base score of {score} on the {model}, against {total} schools on the shared scale.',
        { score: fmt(active.base), model: modelName(), total: W(n) }) + ' ' +
      (top.length
        ? tn(top.length, '{N} is at or above the point requirement — the scholarship range.',
            '{N} are at or above the point requirement — the scholarship range.', { N: I18N.cap(W(top.length)) })
        : T('None is yet in the scholarship range.'))));

    var gapNote = Wizard.incompleteNote(S.completeness(answers), function () {
      resultsView.hidden = true; wizardView.hidden = false;
      wiz.go(wiz.firstMissingStep());
    });
    if (gapNote) resultsView.appendChild(gapNote);
    var stale = window.ResultsKit && ResultsKit.staleNotice(allKeys());
    if (stale) resultsView.appendChild(stale);

    var sum = el('div', 'summary');
    sum.appendChild(cell('Your score', fmt(active.base), mode === 'published' ? 'published model' : 'corrected model'));
    sum.appendChild(cell('Competitive or better', String(reached.length),
      T('of {total} on the shared scale', { total: M.generalSchools.length })));
    sum.appendChild(cell('Scholarship range', String(top.length), 'schools at or above their threshold'));
    resultsView.appendChild(sum);

    /* ---- mode switch ---- */
    var bar = el('div', 'modebar');
    var sw = el('div', 'switch');
    [['published', 'As published'], ['corrected', 'Corrected']].forEach(function (p) {
      var b = el('button', mode === p[0] ? 'on' : '', p[1]);
      b.addEventListener('click', function () { mode = p[0]; showResults(answers, true); });
      sw.appendChild(b);
    });
    bar.appendChild(sw);
    bar.appendChild(el('span', null, differs
      ? T('The two models disagree on your profile — {a} vs {b} base, and the school-level scores differ too.',
          { a: fmt(published.base), b: fmt(corrected.base) })
      : 'Both models agree on your profile. The corrected model only changes results for scores the published model mishandles.'));
    resultsView.appendChild(bar);

    if (mode === 'published') {
      resultsView.appendChild(note(
        'You are seeing the model exactly as published, including two faulty score tests: ' +
        'the high-score bonus fires only at exactly 750 or 780, and the low-score penalty ' +
        'only at 550, 580, 600, 630, 650 or 680. A 760 gets no bonus and a 690 no penalty. ' +
        'Switch to Corrected to score those as ranges.', 'warn'));
    }

    var improvementList = S.improvements(answers, mode);

    /* ---- what-if and filters ---- */
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

    /* ---- individually modelled schools ---- */
    resultsView.appendChild(section('Schools modelled individually',
      'Each recalculates from your base score using its own adjustments and thresholds.'));

    var t1 = el('div', 'table');
    M.adjustedSchools.forEach(function (school) {
      var sc = active.schools[school.id];
      var v = S.verdictForSchool(sc, school);
      var notes = active.notes[school.id] || [];
      var r = el('div', 'row');

      var name = el('div', 'name');
      name.appendChild(document.createTextNode(school.name));
      var detail = T('{region} · Stretch {stretch} · Competitive {competitive} · Strong {strong}',
        { region: T(school.region), stretch: school.stretch, competitive: school.competitive, strong: school.strong });
      if (notes.length) detail += ' — ' + notes.join(', ');
      name.appendChild(el('small', null, detail));
      addDeadline(name, school.name);

      if (sc < school.competitive) {
        name.appendChild(whyBox(
          Math.round((school.competitive - sc) * 10) / 10,
          school.competitive, improvementList));
      }
      r.appendChild(name);

      var num = el('div', 'num');
      var b = el('b', null, fmt(sc));
      num.appendChild(b);
      num.appendChild(document.createTextNode(' / ' + school.competitive));
      r.appendChild(num);

      var badge = el('div', 'badge ' + v.tone, v.label);
      r.appendChild(badge);
      if (kit) {
        ResultsKit.tag(r, KEY(school.name), school.region, adjustedTier(sc, school));
        kit.register(KEY(school.name), r, b, badge);
      }
      t1.appendChild(r);
    });
    resultsView.appendChild(t1);

    /* ---- shared-scale schools ---- */
    resultsView.appendChild(section('Schools on the shared scale',
      'Your base score against each school\'s point requirement. The gap decides the verdict.'));

    var t2 = el('div', 'table');
    M.generalSchools.slice().sort(function (a, b) { return b.points - a.points; })
      .forEach(function (school) {
        var gap = active.base - school.points;
        var v = S.verdictForGap(gap);
        var r = el('div', 'row');

        var name = el('div', 'name');
        name.appendChild(document.createTextNode(school.name));
        name.appendChild(el('small', null, T('{region} · needs {points} points', { region: T(school.region), points: school.points })));
        addDeadline(name, school.name);

        /* "Competitive" starts at a gap of −2, so that is the bar to explain
         * against rather than the school's headline number. */
        if (gap < -2) {
          name.appendChild(whyBox(
            Math.round((school.points - 2 - active.base) * 10) / 10,
            school.points - 2, improvementList));
        }
        r.appendChild(name);

        var num = el('div', 'num');
        var gb = el('b', null, signed(gap));
        num.appendChild(gb);
        r.appendChild(num);

        var badge = el('div', 'badge ' + v.tone, v.label);
        r.appendChild(badge);
        if (kit) {
          ResultsKit.tag(r, KEY(school.name), school.region, generalTier(gap));
          kit.register(KEY(school.name), r, gb, badge);
        }
        t2.appendChild(r);
      });
    resultsView.appendChild(t2);

    /* ---- breakdown ---- */
    var det = el('details', 'breakdown');
    det.appendChild(el('summary', null, T('Where your {score} points came from', { score: fmt(active.base) })));
    var inner = el('div', 'inner');
    if (!active.breakdown.length) {
      inner.appendChild(el('p', 'help', 'Nothing answered yet.'));
    }
    active.breakdown.forEach(function (b) {
      var r = el('div', 'bd-row');
      r.appendChild(el('span', null, b.label));
      r.appendChild(el('span', 'p' + (b.pts < 0 ? ' neg' : ''), signed(b.pts)));
      inner.appendChild(r);
    });
    var tot = el('div', 'bd-row');
    tot.appendChild(el('strong', null, 'Total'));
    tot.appendChild(el('strong', 'p', fmt(active.base)));
    inner.appendChild(tot);
    det.appendChild(inner);
    resultsView.appendChild(det);

    resultsView.appendChild(note(
      'The verdict bands come from the model: roughly 50% odds at "Competitive", ' +
      'roughly 10% at "Stretch", roughly 75–80% at "Strong". Those are the model\'s own ' +
      'stated figures, not measured outcomes.'));

    /* ---- actions ---- */
    var actions = el('div', 'actions');
    var back = el('button', 'btn', '← Edit answers');
    back.addEventListener('click', function () {
      resultsView.hidden = true; wizardView.hidden = false;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    actions.appendChild(back);
    actions.appendChild(el('span', 'spacer'));
    var print = el('button', 'btn', 'Print the page');
    print.addEventListener('click', function () { window.print(); });
    actions.appendChild(print);
    if (window.ResultsKit) {
      actions.appendChild(ResultsKit.planButton(function () {
        return battlePlan(answers, active, reached, top, improvementList);
      }));
    }
    resultsView.appendChild(actions);

    if (filters) filters.refresh();
    if (window.UI) UI.reveal(resultsView);
    if (chip) chip.textContent = fmt(active.base);
    if (!keepScroll) window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ---------------------------------------------------------------------
   * Tiers, what-if and the battle plan
   * ------------------------------------------------------------------ */

  function KEY(name) { return 'mba:' + name; }
  function allKeys() {
    return M.adjustedSchools.concat(M.generalSchools).map(function (s) { return KEY(s.name); });
  }

  /* Safe at or above a school's Strong line; Target from Competitive up;
   * Dream below it. On the shared scale Competitive starts at a gap of −2,
   * the same line the headline counts from, and Strong above +1. */
  function adjustedTier(sc, school) {
    return sc >= school.strong ? 'safe' : sc >= school.competitive ? 'target' : 'dream';
  }
  function generalTier(gap) {
    return gap > 1 ? 'safe' : gap >= -2 ? 'target' : 'dream';
  }

  function addDeadline(name, schoolName) {
    if (!window.ResultsKit) return;
    var d = ResultsKit.deadlineNode(KEY(schoolName));
    if (d) name.appendChild(d);
  }

  function merged(answers, patch) {
    var a = Object.assign({}, answers);
    Object.keys(patch).forEach(function (k) {
      if (patch[k] === undefined) delete a[k]; else a[k] = patch[k];
    });
    return a;
  }

  /* Every school's score and verdict for the answers with `patch` applied,
   * in the currently selected reading of the model. */
  function project(answers, patch) {
    var res = S.score(merged(answers, patch), mode);
    var rows = {};
    M.adjustedSchools.forEach(function (school) {
      var sc = res.schools[school.id];
      rows[KEY(school.name)] = { num: fmt(sc), verdict: S.verdictForSchool(sc, school),
        tier: adjustedTier(sc, school), value: sc - school.competitive, name: school.name };
    });
    var reached = 0;
    M.generalSchools.forEach(function (school) {
      var gap = res.base - school.points;
      if (gap >= -2) reached++;
      rows[KEY(school.name)] = { num: signed(gap), verdict: S.verdictForGap(gap),
        tier: generalTier(gap), value: gap, name: school.name };
    });
    return { rows: rows, score: fmt(res.base), scoreLabel: 'Base score',
      summary: T('Base score {score} — Competitive or better at {n} of {total} schools on the shared scale',
        { score: fmt(res.base), n: reached, total: M.generalSchools.length }) };
  }

  /* The test score first — the question people most want to try — then the
   * answers the model counts as still changeable before you apply. */
  function levers(answers) {
    var scoreOf = function (p) { return S.score(merged(answers, p), mode).base; };
    var byId = {};
    M.steps.forEach(function (st) { st.groups.forEach(function (g) { byId[g.id] = g; }); });

    var test = M.conversion.slice().sort(function (x, y) { return x.gmat - y.gmat; }).map(function (c) {
      return { label: 'GMAT ' + c.gmat + ' · Focus ' + c.focus + ' · GRE ' + c.gre, patch: { gmat: c.id } };
    });
    var start = -1;
    test.forEach(function (t, i) { if (answers.gmat === t.patch.gmat) start = i; });
    if (start < 0) { test.unshift({ label: 'No score yet', patch: { gmat: undefined } }); start = 0; }
    var out = [{ id: 'gmat', label: 'Test score', steps: test, start: start }];

    ['essays', 'recs', 'resume', 'round', 'community'].forEach(function (gid) {
      if (byId[gid]) out.push(ResultsKit.radioLever(byId[gid], answers, scoreOf));
    });
    return out;
  }

  function battlePlan(answers, active, reached, top, improvementList) {
    var rows = [];
    M.adjustedSchools.forEach(function (school) {
      var sc = active.schools[school.id];
      rows.push({ key: KEY(school.name), name: school.name, region: ResultsKit.regionLabel(school.region),
        tier: adjustedTier(sc, school), verdict: S.verdictForSchool(sc, school).label,
        score: fmt(sc) + ' / ' + school.competitive, margin: sc - school.competitive });
    });
    M.generalSchools.forEach(function (school) {
      var gap = active.base - school.points;
      rows.push({ key: KEY(school.name), name: school.name, region: ResultsKit.regionLabel(school.region),
        tier: generalTier(gap), verdict: S.verdictForGap(gap).label,
        score: T('{gap} vs {points}', { gap: signed(gap), points: school.points }), margin: gap });
    });
    rows.sort(function (x, y) { return y.margin - x.margin; });

    var strengths = active.breakdown.filter(function (b) { return b.pts > 0; })
      .sort(function (x, y) { return y.pts - x.pts; }).slice(0, 4)
      .map(function (b) { return { label: b.label, detail: T('{pts} points', { pts: signed(b.pts) }) }; });
    var gaps = active.breakdown.filter(function (b) { return b.pts < 0; })
      .map(function (b) { return { label: b.label, detail: T('{pts} points', { pts: signed(b.pts) }) }; })
      .concat(improvementList.slice(0, 4).map(function (i) {
        return { label: T(i.groupLabel), detail: T('{option} would add +{gain}', { option: T(i.optionLabel), gain: fmt(i.gain) }) };
      })).slice(0, 5);

    var steps = improvementList.slice(0, 4).map(function (i) {
      return T('{group} → {option} (+{gain} on the base score)', { group: T(i.groupLabel), option: T(i.optionLabel), gain: fmt(i.gain) });
    });
    if (S.completeness(answers) < 100) steps.unshift('Answer the questions you skipped — a missing answer scores nothing.');

    return {
      kicker: 'MBA · ' + modelName(),
      title: reached.length
        ? T('Competitive or better at {n} of {total} schools.', { n: reached.length, total: M.generalSchools.length })
        : T('Not yet competitive at any of the {total} schools.', { total: M.generalSchools.length }),
      standfirst: T('A base score of {score}.', { score: fmt(active.base) }) + ' ' +
        tn(top.length, '{n} school is at or above the point requirement.', '{n} schools are at or above the point requirement.'),
      facts: [['Base score', fmt(active.base)], ['Competitive or better', reached.length + ' / ' + M.generalSchools.length],
              ['Scholarship range', String(top.length)], ['Answered', S.completeness(answers) + '%']],
      rows: rows, strengths: strengths, gaps: gaps, steps: steps
    };
  }

  /* --------------------------------------------------------------------- */

  /* Why you are short here, and what would close it. Only ever suggests things
   * you could still change before submitting — never your age, GPA or the
   * university you already attended. */
  function whyBox(needed, target, improvementList) {
    var box = el('div', 'why');
    box.appendChild(el('p', 'why-head',
      T('You are {needed} points below Competitive here, which starts at {target}.', { needed: fmt(needed), target: fmt(target) })));

    var path = S.pathTo(needed, improvementList);
    if (!path.steps.length) {
      box.appendChild(el('div', 'why-item',
        'Nothing left to change in the model — the remaining factors are all fixed history.'));
      return box;
    }

    box.appendChild(el('p', 'why-sub', path.reached
      ? 'These changes together would get you there:'
      : 'The biggest gains still available — not enough on their own:'));

    path.steps.slice(0, 4).forEach(function (st) {
      var item = el('div', 'why-item');
      item.appendChild(el('span', 'why-text', T(st.groupLabel) + ' → ' + T(st.optionLabel)));
      item.appendChild(el('span', 'why-gain', '+' + fmt(st.gain)));
      box.appendChild(item);
    });

    if (!path.reached) {
      box.appendChild(el('small', 'why-note',
        T('Everything actionable adds up to +{total}, leaving you {short} short. The rest of this ' +
          'model is fixed history.', { total: fmt(path.total), short: fmt(Math.round((needed - path.total) * 10) / 10) })));
    }
    return box;
  }

  function cell(k, v, sub) {
    var d = el('div');
    d.appendChild(el('div', 'k', k));
    d.appendChild(el('div', 'v', v));
    if (sub) d.appendChild(el('div', 'sub', sub));
    return d;
  }

  function section(title, sub) {
    var h = el('h2', 'section');
    h.appendChild(document.createTextNode(T(title)));
    if (sub) h.appendChild(el('span', 'count', sub));
    return h;
  }

  function note(text, kind) {
    return el('div', 'note-card' + (kind ? ' ' + kind : ''), text);
  }
}());
