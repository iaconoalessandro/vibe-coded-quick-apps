/* ---------------------------------------------------------------------------
 * Results-page tools shared by the three calculators. Nothing here scores
 * anything: each page passes in what its own model says, and this file only
 * draws it and wires it up.
 *
 *   filters     Pills over the league tables — All / UK / Europe / US, and
 *               Safe / Target / Dream — so a long list can be cut to the part
 *               you care about. Rows carry data-region and data-tier.
 *   what-if     A slider (and a picker of what it moves) that re-scores your
 *               answers with one of them changed and updates every row in
 *               place: score, verdict, and whether it moved. Nothing is saved
 *               unless you choose to keep it.
 *   deadlines   The next application deadline for a programme as a countdown,
 *               with the official admissions page beside it, from
 *               data/deadlines.js.
 *   battle plan A two-page printable summary — targets, strengths, gaps and a
 *               dated checklist — sent to the browser's print dialog, where
 *               "Save as PDF" makes the file. The site makes no network calls
 *               and ships no PDF library, and the print route keeps its own
 *               typefaces.
 *
 * Tiers are the page's call, from its own model's thresholds:
 *   safe   at or above the Strong line
 *   target Competitive, short of Strong
 *   dream  eligible, but below Competitive
 *   out    ruled out by a published rule (not offered as a filter of its own:
 *          those rows sit in their own table already)
 * ------------------------------------------------------------------------- */

window.ResultsKit = (function () {
  'use strict';

  var el = Wizard.el;
  var CAL = window.ADMISSIONS_CALENDAR || { schools: {} };

  /* ------------------------------------------------------------------ */
  /* Regions and tiers                                                   */
  /* ------------------------------------------------------------------ */

  var REGIONS = [['uk', 'UK'], ['eu', 'Europe'], ['us', 'US'], ['ca', 'Canada']];
  var TIERS = [['safe', 'Safe'], ['target', 'Target'], ['dream', 'Dream']];
  var TIER_NOTE = {
    safe: 'at or above the Strong line',
    target: 'Competitive, short of Strong',
    dream: 'eligible, below Competitive'
  };

  /* The models write regions as places ("UK", "France / Singapore",
   * "Europe (multi-campus)", "USA"). INSEAD's Singapore campus does not make
   * it an Asian school for this purpose: it recruits and admits as one. */
  function regionOf(place) {
    var p = String(place || '');
    if (/^UK\b/.test(p)) return 'uk';
    if (/USA|United States/.test(p)) return 'us';
    if (/Canada/.test(p)) return 'ca';
    return 'eu';
  }

  function tag(row, key, place, tier) {
    row.dataset.key = key;
    row.dataset.region = regionOf(place);
    row.dataset.tier = tier;
  }

  /* ------------------------------------------------------------------ */
  /* Dates                                                               */
  /* ------------------------------------------------------------------ */

  var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  function parse(iso) {
    var p = iso.split('-');
    return new Date(+p[0], +p[1] - 1, +p[2]);
  }
  function fmtDate(iso, withYear) {
    var d = parse(iso);
    return d.getDate() + ' ' + MONTHS[d.getMonth()] + (withYear === false ? '' : ' ' + d.getFullYear());
  }
  /* Whole days until the end of the deadline's day: 0 means it closes today. */
  function daysUntil(iso, now) {
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return Math.round((parse(iso) - today) / 864e5);
  }
  function inDays(n) {
    if (n === 0) return 'closes today';
    if (n === 1) return 'closes tomorrow';
    if (n < 60) return 'in ' + n + ' days';
    var w = Math.round(n / 7);
    return 'in ' + w + ' weeks';
  }

  var SRC_TEXT = { OFF: 'school', OFF2: 'school, via summary', TP: 'third-party list' };

  /* Everything the results page and the battle plan need about one
   * programme's calendar, relative to `now`. */
  function calendar(key, now) {
    now = now || new Date();
    var c = CAL.schools[key];
    if (!c) return null;
    var out = { url: c.url, src: c.src, rolling: !!c.rolling, note: c.note || null,
                rounds: c.rounds || [], next: null, after: null, passed: false };
    for (var i = 0; i < out.rounds.length; i++) {
      var d = daysUntil(out.rounds[i][1], now);
      if (d >= 0) {
        out.next = { label: out.rounds[i][0], date: out.rounds[i][1], days: d };
        if (out.rounds[i + 1]) out.after = { label: out.rounds[i + 1][0], date: out.rounds[i + 1][1] };
        break;
      }
    }
    out.passed = out.rounds.length > 0 && !out.next;
    return out;
  }

  function deadlineNode(key, now) {
    var c = calendar(key, now);
    if (!c) return null;
    var box = el('div', 'dl');

    if (c.next) {
      var soon = c.next.days <= 14 ? ' soon' : (c.next.days <= 45 ? ' near' : '');
      var badge = el('span', 'dl-badge' + soon);
      badge.appendChild(el('b', null, c.next.label));
      badge.appendChild(document.createTextNode(' ' + fmtDate(c.next.date) + ' · ' + inDays(c.next.days)));
      box.appendChild(badge);
      if (c.after) box.appendChild(el('span', 'dl-after', 'then ' + c.after.label + ', ' + fmtDate(c.after.date)));
    } else if (c.passed) {
      box.appendChild(el('span', 'dl-badge past', 'This cycle’s listed deadlines have passed'));
    } else if (c.rolling) {
      box.appendChild(el('span', 'dl-badge rolling', 'Rolling admission — earlier is better'));
    }

    var a = el('a', 'dl-link', 'Official admissions page');
    a.href = c.url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    box.appendChild(a);

    if (c.src && (c.next || c.passed || c.rolling)) {
      box.appendChild(el('span', 'provenance ' + c.src, SRC_TEXT[c.src] || c.src));
    }

    var title = c.rounds.map(function (r) { return r[0] + ': ' + fmtDate(r[1]); });
    if (c.note) title.push(c.note);
    title.push('Dates read ' + fmtDate(CAL.checked) + ' — confirm on the school’s own page.');
    box.title = title.join('\n');
    if (c.note && (c.next || c.rolling)) box.appendChild(el('small', 'dl-note', c.note));
    return box;
  }

  /* ------------------------------------------------------------------ */
  /* A results session: one per render of a results page                 */
  /* ------------------------------------------------------------------ */

  function session(root) {
    var registry = {};     // key -> { row, num, badge, base }
    var filters = null;

    function register(key, row, numEl, badgeEl, base) {
      registry[key] = { row: row, num: numEl, badge: badgeEl, base: base, shown: base };
    }

    /* ---------------------------------------------------------------- */
    /* Filter pills                                                      */
    /* ---------------------------------------------------------------- */

    function filterBar() {
      var state = { region: null, tier: null };
      var bar = el('div', 'filters reveal');
      bar.setAttribute('role', 'toolbar');
      bar.setAttribute('aria-label', 'Filter the programmes below');

      var pills = [];
      function pill(kind, id, label, hint) {
        var b = el('button', 'pill');
        b.type = 'button';
        b.appendChild(el('span', 't', label));
        var c = el('span', 'c');
        b.appendChild(c);
        if (hint) b.title = label + ': ' + hint;
        b.addEventListener('click', function () {
          if (kind === 'all') { state.region = null; state.tier = null; }
          else state[kind] = state[kind] === id ? null : id;
          apply();
        });
        pills.push({ el: b, kind: kind, id: id, count: c });
        return b;
      }

      bar.appendChild(pill('all', null, 'All'));
      var g1 = el('span', 'pill-group');
      REGIONS.forEach(function (r) { g1.appendChild(pill('region', r[0], r[1])); });
      bar.appendChild(g1);
      var g2 = el('span', 'pill-group');
      TIERS.forEach(function (t) { g2.appendChild(pill('tier', t[0], t[1], TIER_NOTE[t[0]])); });
      bar.appendChild(g2);

      var status = el('span', 'filter-status');
      status.setAttribute('aria-live', 'polite');
      bar.appendChild(status);

      function rows() { return root.querySelectorAll('.row'); }
      function matches(row, region, tier) {
        return (!region || row.dataset.region === region) && (!tier || row.dataset.tier === tier);
      }

      function apply() {
        var active = !!(state.region || state.tier);
        var shown = 0, total = 0;

        Array.prototype.forEach.call(rows(), function (row) {
          var tagged = !!row.dataset.region;
          if (tagged) total++;
          var ok = !active || (tagged && matches(row, state.region, state.tier));
          row.hidden = !ok;
          if (ok && tagged) shown++;
        });

        /* A run heading with nothing under it, and a table with nothing in
         * it, say so rather than leaving a gap. */
        root.querySelectorAll('.table').forEach(function (t) {
          var kids = Array.prototype.slice.call(t.children);
          var any = false;
          kids.forEach(function (k, i) {
            if (!k.classList.contains('table-div')) return;
            var j = i + 1, vis = false;
            while (kids[j] && !kids[j].classList.contains('table-div')) {
              if (kids[j].classList.contains('row') && !kids[j].hidden) vis = true;
              j++;
            }
            k.hidden = !vis;
          });
          kids.forEach(function (k) { if (k.classList.contains('row') && !k.hidden) any = true; });
          var empty = t.querySelector(':scope > .filter-empty');
          if (!any && active && kids.some(function (k) { return k.classList.contains('row'); })) {
            if (!empty) {
              empty = el('div', 'filter-empty', 'Nothing in this table matches the filter.');
              t.appendChild(empty);
            }
            empty.hidden = false;
          } else if (empty) empty.hidden = true;
        });

        pills.forEach(function (p) {
          var on = p.kind === 'all' ? !active : state[p.kind] === p.id;
          p.el.classList.toggle('on', on);
          p.el.setAttribute('aria-pressed', on ? 'true' : 'false');
          var n = 0;
          Array.prototype.forEach.call(rows(), function (row) {
            if (!row.dataset.region) return;
            if (p.kind === 'all') n++;
            else if (p.kind === 'region' && matches(row, p.id, state.tier)) n++;
            else if (p.kind === 'tier' && matches(row, state.region, p.id)) n++;
          });
          p.count.textContent = String(n);
          /* A region the calculator has no programmes in is left off
           * altogether; a filter that is merely empty right now stays, so
           * the row of pills does not jump about as you use it. */
          if (p.kind === 'region') {
            var exists = Array.prototype.some.call(rows(), function (r) { return r.dataset.region === p.id; });
            p.el.hidden = !exists;
          }
          p.el.disabled = !on && n === 0 && p.kind !== 'all';
        });

        status.textContent = active ? 'Showing ' + shown + ' of ' + total : total + ' programmes';
      }

      filters = { el: bar, refresh: apply };
      /* Built before the rows exist; the page calls refresh() once they do. */
      return filters;
    }

    /* ---------------------------------------------------------------- */
    /* What-if                                                           */
    /* ---------------------------------------------------------------- */

    /* opts.levers:  [{ id, label, steps: [{ label, patch }], start, unit }]
     * opts.project: function (patch) -> { rows: { key: { num, verdict, tier, value } },
     *                                     summary: string }
     * opts.onKeep:  function (patch) — write the patch into the saved answers */
    function whatIf(opts) {
      var levers = opts.levers.filter(function (l) { return l.steps.length > 1; });
      if (!levers.length) return null;
      var base = opts.project({});
      var lever = levers[0];
      var idx = lever.start;
      var patch = {};
      var frame = null;

      var box = el('section', 'whatif reveal');
      box.setAttribute('aria-label', 'What if');
      var head = el('div', 'whatif-head');
      head.appendChild(el('h3', null, 'What if…'));
      head.appendChild(el('p', null, 'Change one answer and watch every programme below re-score. ' +
        'Nothing is saved unless you keep it.'));
      box.appendChild(head);

      var controls = el('div', 'whatif-controls');
      var pickWrap = el('label', 'whatif-pick');
      pickWrap.appendChild(el('span', null, 'Change'));
      var pick = document.createElement('select');
      levers.forEach(function (l, i) {
        var o = document.createElement('option');
        o.value = String(i); o.textContent = l.label;
        pick.appendChild(o);
      });
      pickWrap.appendChild(pick);
      if (levers.length > 1) controls.appendChild(pickWrap);
      else controls.appendChild(el('span', 'whatif-single', lever.label));

      var sliderRow = el('div', 'whatif-slider');
      var range = document.createElement('input');
      range.type = 'range';
      range.min = '0';
      range.step = '1';
      var out = el('output', 'whatif-value');
      out.setAttribute('aria-live', 'polite');
      var ends = el('div', 'whatif-ends');
      var lo = el('span'), hi = el('span');
      ends.appendChild(lo); ends.appendChild(hi);
      sliderRow.appendChild(out);
      sliderRow.appendChild(range);
      sliderRow.appendChild(ends);
      controls.appendChild(sliderRow);
      box.appendChild(controls);

      var result = el('p', 'whatif-result');
      result.setAttribute('aria-live', 'polite');
      box.appendChild(result);

      var btns = el('div', 'whatif-actions');
      var reset = el('button', 'btn small', 'Back to my answers');
      reset.type = 'button';
      var keep = el('button', 'btn small primary', 'Keep this answer');
      keep.type = 'button';
      btns.appendChild(reset);
      btns.appendChild(keep);
      box.appendChild(btns);

      function setLever(i) {
        lever = levers[i];
        range.max = String(lever.steps.length - 1);
        idx = lever.start;
        range.value = String(idx);
        lo.textContent = lever.steps[0].label;
        hi.textContent = lever.steps[lever.steps.length - 1].label;
        range.setAttribute('aria-label', lever.label);
        draw();
      }

      function draw() {
        idx = +range.value;
        var step = lever.steps[idx];
        var trying = idx !== lever.start;
        patch = trying ? step.patch : {};
        out.textContent = step.label + (trying ? '' : ' — your answer');
        range.setAttribute('aria-valuetext', step.label);
        range.style.setProperty('--fill', (idx / Math.max(1, lever.steps.length - 1) * 100) + '%');
        box.classList.toggle('trying', trying);
        keep.disabled = !trying;
        reset.disabled = !trying;
        if (frame) cancelAnimationFrame(frame);
        frame = requestAnimationFrame(function () { frame = null; paint(trying ? opts.project(patch) : base); });
      }

      var up = 0, down = 0;
      function paint(p) {
        up = 0; down = 0;
        Object.keys(registry).forEach(function (key) {
          var r = registry[key], now = p.rows[key], was = base.rows[key];
          if (!now || !was) return;
          r.num.textContent = now.num;
          var cls = 'badge ' + now.verdict.tone;
          if (r.badge.className !== cls || r.badge.textContent !== now.verdict.label) {
            r.badge.className = cls;
            r.badge.textContent = now.verdict.label;
            r.row.classList.remove('flip');
            void r.row.offsetWidth;
            r.row.classList.add('flip');
          }
          r.row.dataset.tier = now.tier;
          var rank = TIER_RANK[now.tier] - TIER_RANK[was.tier];
          var mv = rank || (now.value > was.value + 0.05 ? 0.5 : now.value < was.value - 0.05 ? -0.5 : 0);
          r.row.classList.toggle('moved-up', mv > 0);
          r.row.classList.toggle('moved-down', mv < 0);
          if (rank > 0) up++;
          if (rank < 0) down++;
        });
        var moves = [];
        if (up) moves.push(up + (up === 1 ? ' programme moves' : ' programmes move') + ' up a tier');
        if (down) moves.push(down + ' down');
        result.textContent = p === base
          ? base.summary
          : p.summary + (moves.length ? ' — ' + moves.join(', ') + '.' : ' — no programme changes tier.');
        if (filters) filters.refresh();
      }

      pick.addEventListener('change', function () { setLever(+pick.value); });
      range.addEventListener('input', draw);
      reset.addEventListener('click', function () { range.value = String(lever.start); draw(); });
      keep.addEventListener('click', function () { if (opts.onKeep) opts.onKeep(patch); });

      setLever(0);
      return box;
    }

    return { register: register, filterBar: filterBar, whatIf: whatIf };
  }

  var TIER_RANK = { out: 0, dream: 1, target: 2, safe: 3 };

  /* Helpers for building a lever out of a radio question: its options,
   * ordered by what they do to the headline score, weakest first. `scoreOf`
   * scores a patch. An unanswered question starts from a "Not answered" step. */
  function radioLever(group, answers, scoreOf, label) {
    var opts = (group.options || []).map(function (o) {
      var p = {}; p[group.id] = o.id;
      return { label: o.label, patch: p, v: scoreOf(p) };
    }).sort(function (a, b) { return a.v - b.v; });
    var start = -1;
    opts.forEach(function (o, i) { if (answers[group.id] === o.patch[group.id]) start = i; });
    if (start < 0) {
      var none = {}; none[group.id] = undefined;
      opts.unshift({ label: 'Not answered', patch: none, v: 0 });
      start = 0;
    }
    return { id: group.id, label: label || group.label, steps: opts, start: start };
  }

  /* ------------------------------------------------------------------ */
  /* Battle plan                                                         */
  /* ------------------------------------------------------------------ */

  /* plan: { kicker, title, standfirst, facts: [[k, v]],
   *         rows: [{ key, name, region, tier, verdict, score }],
   *         strengths: [{ label, detail }], gaps: [{ label, detail }],
   *         steps: [string] } */
  function battlePlan(plan) {
    var now = new Date();
    var old = document.getElementById('battle-plan');
    if (old) old.remove();
    var doc = el('section', 'plan');
    doc.id = 'battle-plan';
    doc.setAttribute('aria-hidden', 'true');

    /* ---- page one: where you stand, and the list ---- */
    var p1 = el('div', 'plan-page');
    var mast = el('header', 'plan-mast');
    mast.appendChild(el('span', 'plan-name', 'Admission Chances'));
    mast.appendChild(el('span', 'plan-date', 'Battle plan · ' + fmtDate(isoOf(now))));
    p1.appendChild(mast);
    p1.appendChild(el('p', 'plan-kicker', plan.kicker));
    p1.appendChild(el('h1', 'plan-title', plan.title));
    if (plan.standfirst) p1.appendChild(el('p', 'plan-stand', plan.standfirst));

    var facts = el('div', 'plan-facts');
    plan.facts.forEach(function (f) {
      var d = el('div');
      d.appendChild(el('b', null, f[1]));
      d.appendChild(el('span', null, f[0]));
      facts.appendChild(d);
    });
    p1.appendChild(facts);

    var LIMIT = { safe: 7, target: 9, dream: 9 };
    var picked = [];
    TIERS.forEach(function (t) {
      var list = plan.rows.filter(function (r) { return r.tier === t[0]; });
      if (!list.length) return;
      var shown = list.slice(0, LIMIT[t[0]]);
      picked = picked.concat(shown);
      var h = el('h2', 'plan-h', t[1] + ' — ' + TIER_NOTE[t[0]]);
      if (list.length > shown.length) h.appendChild(el('span', 'plan-more', ' (' + shown.length + ' of ' + list.length + ')'));
      p1.appendChild(h);
      var tbl = el('table', 'plan-table');
      var tr0 = el('tr');
      ['Programme', 'Region', 'Score', 'Verdict', 'Next deadline'].forEach(function (x) { tr0.appendChild(el('th', null, x)); });
      tbl.appendChild(tr0);
      shown.forEach(function (r) {
        var tr = el('tr');
        tr.appendChild(el('td', 'nm', r.name));
        tr.appendChild(el('td', null, r.region));
        tr.appendChild(el('td', 'sc', r.score));
        tr.appendChild(el('td', null, r.verdict));
        var c = calendar(r.key, now);
        tr.appendChild(el('td', null, !c ? '—'
          : c.next ? c.next.label + ', ' + fmtDate(c.next.date) + ' (' + inDays(c.next.days) + ')'
          : c.rolling ? 'Rolling' : c.passed ? 'Passed this cycle' : 'See school’s page'));
        tbl.appendChild(tr);
      });
      p1.appendChild(tbl);
    });
    doc.appendChild(p1);

    /* ---- page two: what to do about it ---- */
    var p2 = el('div', 'plan-page');
    p2.appendChild(el('h2', 'plan-h2', 'Your file'));
    var cols = el('div', 'plan-cols');
    [['Strengths', plan.strengths], ['Gaps worth closing', plan.gaps]].forEach(function (c) {
      var col = el('div');
      col.appendChild(el('h3', null, c[0]));
      var ul = el('ul');
      (c[1].length ? c[1] : [{ label: 'Nothing stands out either way yet.' }]).forEach(function (s) {
        var li = el('li');
        li.appendChild(el('b', null, s.label));
        if (s.detail) li.appendChild(document.createTextNode(' — ' + s.detail));
        ul.appendChild(li);
      });
      col.appendChild(ul);
      cols.appendChild(col);
    });
    p2.appendChild(cols);

    /* The dated half of the checklist: every upcoming deadline among the
     * programmes on page one, soonest first. */
    var dated = [];
    picked.forEach(function (r) {
      var c = calendar(r.key, now);
      if (c && c.next) dated.push({ days: c.next.days, text: 'Submit ' + r.name + ' by ' + fmtDate(c.next.date) +
        ' — ' + c.next.label.toLowerCase() + ', ' + inDays(c.next.days) });
    });
    dated.sort(function (a, b) { return a.days - b.days; });

    p2.appendChild(el('h2', 'plan-h2', 'Checklist'));
    var ol = el('ul', 'plan-check');
    plan.steps.concat(dated.slice(0, 9).map(function (d) { return d.text; })).forEach(function (s) {
      ol.appendChild(el('li', null, s));
    });
    ol.appendChild(el('li', null, 'Confirm every date on the school’s own admissions page — ' +
      'the deadlines here were read on ' + fmtDate(CAL.checked) + ' and schools do move them.'));
    p2.appendChild(ol);

    p2.appendChild(el('p', 'plan-foot', 'An estimate from a points model, not a prediction. Verdict ' +
      'thresholds are the model’s own calibration; admissions committees decide holistically. ' +
      'Made from answers stored only in your browser.'));
    doc.appendChild(p2);

    document.body.appendChild(doc);
    var html = document.documentElement;
    html.classList.add('print-plan');
    function done() {
      html.classList.remove('print-plan');
      window.removeEventListener('afterprint', done);
    }
    window.addEventListener('afterprint', done);
    window.print();
  }

  function isoOf(d) {
    function p(n) { return (n < 10 ? '0' : '') + n; }
    return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate());
  }

  /* The battle-plan button, with the one line that explains what it does. */
  function planButton(build) {
    var b = el('button', 'btn primary', 'Battle plan (PDF)');
    b.type = 'button';
    b.title = 'A two-page summary: your list by tier, your strengths and gaps, and a dated ' +
      'checklist. Opens the print dialog — choose “Save as PDF”.';
    b.addEventListener('click', function () { battlePlan(build()); });
    return b;
  }

  return {
    regionOf: regionOf,
    regionLabel: function (place) {
      var id = regionOf(place);
      for (var i = 0; i < REGIONS.length; i++) if (REGIONS[i][0] === id) return REGIONS[i][1];
      return id;
    },
    tag: tag,
    calendar: calendar,
    deadlineNode: deadlineNode,
    session: session,
    radioLever: radioLever,
    battlePlan: battlePlan,
    planButton: planButton,
    fmtDate: fmtDate
  };
}());
