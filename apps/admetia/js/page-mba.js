/* MBA page controller: drives the wizard, then renders results. */

(function () {
  'use strict';

  var M = window.MBA_MODEL;
  var S = window.MBA_SCORE;
  var el = Wizard.el;

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

  function showResults(answers) {
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

    var gapNote = Wizard.incompleteNote(S.completeness(answers), function () {
      resultsView.hidden = true; wizardView.hidden = false;
      wiz.go(wiz.firstMissingStep());
    });
    if (gapNote) resultsView.appendChild(gapNote);

    var sum = el('div', 'summary');
    sum.appendChild(cell('Your score', fmt(active.base), mode === 'published' ? 'published model' : 'corrected model'));
    sum.appendChild(cell('Competitive or better', String(reached.length),
      'of ' + M.generalSchools.length + ' on the shared scale'));
    sum.appendChild(cell('Scholarship range', String(top.length), 'schools at or above their threshold'));
    resultsView.appendChild(sum);

    /* ---- mode switch ---- */
    var bar = el('div', 'modebar');
    var sw = el('div', 'switch');
    [['published', 'As published'], ['corrected', 'Corrected']].forEach(function (p) {
      var b = el('button', mode === p[0] ? 'on' : '', p[1]);
      b.addEventListener('click', function () { mode = p[0]; showResults(answers); });
      sw.appendChild(b);
    });
    bar.appendChild(sw);
    bar.appendChild(el('span', null, differs
      ? 'The two models disagree on your profile — ' + fmt(published.base) + ' vs ' + fmt(corrected.base) + ' base, and the school-level scores differ too.'
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
      var detail = 'Stretch ' + school.stretch + ' · Competitive ' + school.competitive + ' · Strong ' + school.strong;
      if (notes.length) detail += ' — ' + notes.join(', ');
      name.appendChild(el('small', null, detail));

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

      r.appendChild(el('div', 'badge ' + v.tone, v.label));
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
        name.appendChild(el('small', null, 'needs ' + school.points + ' points'));

        /* "Competitive" starts at a gap of −2, so that is the bar to explain
         * against rather than the school's headline number. */
        if (gap < -2) {
          name.appendChild(whyBox(
            Math.round((school.points - 2 - active.base) * 10) / 10,
            school.points - 2, improvementList));
        }
        r.appendChild(name);

        var num = el('div', 'num');
        num.appendChild(el('b', null, signed(gap)));
        r.appendChild(num);

        r.appendChild(el('div', 'badge ' + v.tone, v.label));
        t2.appendChild(r);
      });
    resultsView.appendChild(t2);

    /* ---- breakdown ---- */
    var det = el('details', 'breakdown');
    det.appendChild(el('summary', null, 'Where your ' + fmt(active.base) + ' points came from'));
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
    var print = el('button', 'btn', 'Print or save as PDF');
    print.addEventListener('click', function () { window.print(); });
    actions.appendChild(print);
    resultsView.appendChild(actions);

    if (chip) chip.textContent = fmt(active.base);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* --------------------------------------------------------------------- */

  /* Why you are short here, and what would close it. Only ever suggests things
   * you could still change before submitting — never your age, GPA or the
   * university you already attended. */
  function whyBox(needed, target, improvementList) {
    var box = el('div', 'why');
    box.appendChild(el('p', 'why-head',
      'You are ' + fmt(needed) + ' points below Competitive here, which starts at ' +
      fmt(target) + '.'));

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
      item.appendChild(el('span', 'why-text', st.groupLabel + ' → ' + st.optionLabel));
      item.appendChild(el('span', 'why-gain', '+' + fmt(st.gain)));
      box.appendChild(item);
    });

    if (!path.reached) {
      box.appendChild(el('small', 'why-note',
        'Everything actionable adds up to +' + fmt(path.total) + ', leaving you ' +
        fmt(Math.round((needed - path.total) * 10) / 10) + ' short. The rest of this ' +
        'model is fixed history.'));
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
    h.appendChild(document.createTextNode(title));
    if (sub) h.appendChild(el('span', 'count', sub));
    return h;
  }

  function note(text, kind) {
    return el('div', 'note-card' + (kind ? ' ' + kind : ''), text);
  }
}());
