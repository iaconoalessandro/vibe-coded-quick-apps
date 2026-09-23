/* ---------------------------------------------------------------------------
 * Results-page tools shared by the three calculators. Nothing here scores
 * anything: each page passes in what its own model says, and this file only
 * draws it and wires it up.
 *
 *   filters     Pills over the league tables — All / UK / Europe / US, and
 *               Safe / Target / Dream — so a long list can be cut to the part
 *               you care about. Rows carry data-region and data-tier.
 *   what-if     A slider (and a picker of what it moves) that re-scores your
 *               answers with some of them changed and updates every row in
 *               place: score, verdict, and whether it moved. Changes to
 *               several answers add up, and a side-by-side "Me now / Me after"
 *               panel compares the two files. Nothing is saved unless you
 *               choose to keep it.
 *   deadlines   The next application deadline for a programme as a countdown,
 *               with the official admissions page beside it and the date the
 *               entry was last checked, from data/deadlines.js. When the
 *               oldest check is more than STALE_DAYS old, results pages say
 *               so, loudly.
 *   battle plan A two-page printable summary — targets, strengths, gaps and a
 *               dated checklist — sent to the browser's print dialog, where
 *               "Save as PDF" makes the file. The site ships no PDF library,
 *               and the print route keeps its own typefaces.
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
  /* js/i18n.js in the browser; the tests load this file without it. */
  var I = window.I18N || {
    t: function (s, v) { return v ? s.replace(/\{(\w+)\}/g, function (m, k) { return k in v ? v[k] : m; }) : s; },
    month: function (i) { return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i]; }
  };
  var T = I.t;
  function tn(n, one, many, v) {
    var o = { n: n };
    if (v) Object.keys(v).forEach(function (k) { o[k] = v[k]; });
    return T(n === 1 ? one : many, o);
  }

  /* Past this, the deadlines are old enough that the page says so. The
   * dates are meant to be re-read every three or four months. */
  var STALE_DAYS = 120;

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

  function parse(iso) {
    var p = iso.split('-');
    return new Date(+p[0], +p[1] - 1, +p[2]);
  }
  function fmtDate(iso, withYear) {
    var d = parse(iso);
    return d.getDate() + ' ' + I.month(d.getMonth()) + (withYear === false ? '' : ' ' + d.getFullYear());
  }
  /* Whole days until the end of the deadline's day: 0 means it closes today. */
  function daysUntil(iso, now) {
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return Math.round((parse(iso) - today) / 864e5);
  }
  function inDays(n) {
    if (n === 0) return T('closes today');
    if (n === 1) return T('closes tomorrow');
    if (n < 60) return T('in {n} days', { n: n });
    return T('in {n} weeks', { n: Math.round(n / 7) });
  }

  var SRC_TEXT = { OFF: 'school', OFF2: 'school, via summary', TP: 'third-party list' };

  /* When an entry was last read: its own date if it was re-checked on its
   * own, otherwise the date of the last full pass over the file. */
  function checkedOf(c) { return (c && c.checked) || CAL.checked; }

  /* Everything the results page and the battle plan need about one
   * programme's calendar, relative to `now`. */
  function calendar(key, now) {
    now = now || new Date();
    var c = CAL.schools[key];
    if (!c) return null;
    var checked = checkedOf(c);
    var out = { url: c.url, src: c.src, rolling: !!c.rolling, note: c.note || null,
                rounds: c.rounds || [], next: null, after: null, passed: false,
                checked: checked, stale: !!checked && -daysUntil(checked, now) > STALE_DAYS };
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

  /* How old the oldest check in the file is, or null while every entry is
   * inside STALE_DAYS. `keys` limits it to the programmes on screen. */
  function staleness(now, keys) {
    now = now || new Date();
    var oldest = null;
    (keys || Object.keys(CAL.schools)).forEach(function (k) {
      var c = CAL.schools[k];
      if (!c) return;
      var d = checkedOf(c);
      if (d && (!oldest || d < oldest)) oldest = d;
    });
    if (!oldest) return null;
    var days = -daysUntil(oldest, now);
    if (days <= STALE_DAYS) return null;
    return { date: oldest, days: days, months: Math.round(days / 30.4) };
  }

  /* The warning at the top of a results page when the dates have gone stale.
   * It is aimed at the developer as much as at the reader. */
  function staleNotice(keys, now) {
    var s = staleness(now, keys);
    if (!s) return null;
    var box = el('div', 'note-card warn stale-notice reveal');
    box.setAttribute('role', 'status');
    box.appendChild(el('strong', null, T('These deadlines are getting old.')));
    box.appendChild(document.createTextNode(' ' + T('They were last checked on {date} — {months} months ago. ' +
      'The developer should move their ass and update the dates. Until then, trust each ' +
      'school’s official page over the countdowns below.', { date: fmtDate(s.date), months: s.months })));
    return box;
  }

  function deadlineNode(key, now) {
    var c = calendar(key, now);
    if (!c) return null;
    var box = el('div', 'dl');

    if (c.next) {
      var soon = c.next.days <= 14 ? ' soon' : (c.next.days <= 45 ? ' near' : '');
      var badge = el('span', 'dl-badge' + soon);
      badge.appendChild(el('b', null, T(c.next.label)));
      badge.appendChild(document.createTextNode(' ' + fmtDate(c.next.date) + ' · ' + inDays(c.next.days)));
      box.appendChild(badge);
      if (c.after) box.appendChild(el('span', 'dl-after', T('then {round}, {date}', { round: T(c.after.label), date: fmtDate(c.after.date) })));
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

    /* How fresh this entry is, on every programme: the countdown is only as
     * good as the day somebody last read the school's page. */
    if (c.checked) {
      var chk = el('span', 'dl-checked' + (c.stale ? ' stale' : ''),
        c.stale ? T('Checked {date} · may be out of date', { date: fmtDate(c.checked) })
                : T('Checked {date}', { date: fmtDate(c.checked) }));
      box.appendChild(chk);
    }

    var title = c.rounds.map(function (r) { return T(r[0]) + ': ' + fmtDate(r[1]); });
    if (c.note) title.push(c.note);
    title.push(T('Dates read {date} — confirm on the school’s own page.', { date: fmtDate(c.checked || CAL.checked) }));
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
      bar.setAttribute('aria-label', T('Filter the programmes below'));

      var pills = [];
      function pill(kind, id, label, hint) {
        var b = el('button', 'pill');
        b.type = 'button';
        b.appendChild(el('span', 't', label));
        var c = el('span', 'c');
        b.appendChild(c);
        if (hint) b.title = T(label) + ': ' + T(hint);
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

        status.textContent = active ? T('Showing {shown} of {total}', { shown: shown, total: total })
                                    : T('{n} programmes', { n: total });
      }

      filters = { el: bar, refresh: apply };
      /* Built before the rows exist; the page calls refresh() once they do. */
      return filters;
    }

    /* ---------------------------------------------------------------- */
    /* What-if, and Me now / Me after                                    */
    /* ---------------------------------------------------------------- */

    /* opts.levers:  [{ id, label, steps: [{ label, patch }], start, unit }]
     * opts.project: function (patch) -> { rows: { key: { num, verdict, tier, value, name } },
     *                                     summary: string, score: string, scoreLabel: string }
     * opts.onKeep:  function (patch) — write the patch into the saved answers
     *
     * Each lever remembers where it was left, so moving the test score and
     * then the essays tries both at once; "Me after" is every change made. */
    function whatIf(opts) {
      var levers = opts.levers.filter(function (l) { return l.steps.length > 1; });
      if (!levers.length) return null;
      var base = opts.project({});
      var li = 0;                                    // lever on the slider
      var chosen = levers.map(function (l) { return l.start; });
      var patch = {};
      var frame = null;
      var counted = false;

      var box = el('section', 'whatif reveal');
      box.setAttribute('aria-label', T('What if'));
      var head = el('div', 'whatif-head');
      head.appendChild(el('h3', null, 'What if…'));
      head.appendChild(el('p', null, 'Change your answers and watch every programme below re-score — ' +
        'then compare “me now” with “me after”. Nothing is saved unless you keep it.'));
      box.appendChild(head);

      var controls = el('div', 'whatif-controls');
      var pickWrap = el('label', 'whatif-pick');
      pickWrap.appendChild(el('span', null, 'Change'));
      var pick = document.createElement('select');
      levers.forEach(function (l, i) {
        var o = document.createElement('option');
        o.value = String(i); o.textContent = T(l.label);
        pick.appendChild(o);
      });
      pickWrap.appendChild(pick);
      if (levers.length > 1) controls.appendChild(pickWrap);
      else controls.appendChild(el('span', 'whatif-single', levers[0].label));

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

      var compare = el('div', 'compare');
      compare.hidden = true;
      box.appendChild(compare);

      var btns = el('div', 'whatif-actions');
      var reset = el('button', 'btn small', 'Back to my answers');
      reset.type = 'button';
      var keep = el('button', 'btn small primary', 'Keep these answers');
      keep.type = 'button';
      btns.appendChild(reset);
      btns.appendChild(keep);
      box.appendChild(btns);

      function lever() { return levers[li]; }

      function setLever(i) {
        li = i;
        var l = lever();
        range.max = String(l.steps.length - 1);
        range.value = String(chosen[i]);
        lo.textContent = T(l.steps[0].label);
        hi.textContent = T(l.steps[l.steps.length - 1].label);
        range.setAttribute('aria-label', T(l.label));
        draw();
      }

      /* Every lever moved away from your own answer, in picker order. */
      function changes() {
        var list = [];
        levers.forEach(function (l, i) {
          if (chosen[i] !== l.start) list.push({ lever: l, from: l.steps[l.start], to: l.steps[chosen[i]] });
        });
        return list;
      }

      function draw() {
        var l = lever();
        chosen[li] = +range.value;
        var step = l.steps[chosen[li]];
        var mine = chosen[li] === l.start;
        out.textContent = mine ? T('{answer} — your answer', { answer: T(step.label) }) : T(step.label);
        range.setAttribute('aria-valuetext', T(step.label));
        range.style.setProperty('--fill', (chosen[li] / Math.max(1, l.steps.length - 1) * 100) + '%');

        var list = changes();
        patch = {};
        list.forEach(function (c) {
          Object.keys(c.to.patch).forEach(function (k) { patch[k] = c.to.patch[k]; });
        });
        var trying = list.length > 0;
        box.classList.toggle('trying', trying);
        keep.disabled = !trying;
        reset.disabled = !trying;
        if (trying && !counted && window.Stats) { counted = true; Stats.event('what-if'); }
        if (frame) cancelAnimationFrame(frame);
        frame = requestAnimationFrame(function () {
          frame = null;
          var p = trying ? opts.project(patch) : base;
          paint(p);
          drawCompare(p, list);
        });
      }

      var up = 0, down = 0;
      function paint(p) {
        up = 0; down = 0;
        Object.keys(registry).forEach(function (key) {
          var r = registry[key], now = p.rows[key], was = base.rows[key];
          if (!now || !was) return;
          r.num.textContent = now.num;
          var cls = 'badge ' + now.verdict.tone;
          var label = T(now.verdict.label);
          if (r.badge.className !== cls || r.badge.textContent !== label) {
            r.badge.className = cls;
            r.badge.textContent = label;
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
        if (up) moves.push(tn(up, '{n} programme moves up a tier', '{n} programmes move up a tier'));
        if (down) moves.push(T('{n} down', { n: down }));
        result.textContent = p === base
          ? base.summary
          : p.summary + (moves.length ? ' — ' + moves.join(', ') + '.' : ' — ' + T('no programme changes tier.'));
        if (filters) filters.refresh();
      }

      /* ---- Me now / Me after, side by side ---- */

      function tierCounts(p) {
        var n = { safe: 0, target: 0, dream: 0, out: 0 };
        Object.keys(p.rows).forEach(function (k) { n[p.rows[k].tier] = (n[p.rows[k].tier] || 0) + 1; });
        return n;
      }

      var CMP_TIERS = [['safe', 'Safe'], ['target', 'Target'], ['dream', 'Dream'], ['out', 'Ruled out']];

      function card(kind, title, p, counts, other, lines) {
        var c = el('div', 'cmp-card ' + kind);
        c.appendChild(el('p', 'cmp-k', title));
        var sc = el('p', 'cmp-score');
        sc.appendChild(el('b', null, p.score));
        if (other) {
          var d = Math.round((parseFloat(p.score) - parseFloat(other.score)) * 100) / 100;
          if (d) sc.appendChild(el('em', d > 0 ? 'up' : 'down', (d > 0 ? '+' : '−') + Math.abs(d)));
        }
        sc.appendChild(el('span', null, p.scoreLabel));
        c.appendChild(sc);

        var ul = el('ul', 'cmp-tiers');
        CMP_TIERS.forEach(function (t) {
          if (t[0] === 'out' && !counts.out && !(other && other.counts.out)) return;
          var li_ = el('li', t[0]);
          li_.appendChild(el('b', null, String(counts[t[0]])));
          li_.appendChild(el('span', null, t[1]));
          if (other) {
            var dd = counts[t[0]] - other.counts[t[0]];
            if (dd) li_.appendChild(el('em', (dd > 0) === (t[0] !== 'out') ? 'up' : 'down', (dd > 0 ? '+' : '−') + Math.abs(dd)));
          }
          ul.appendChild(li_);
        });
        c.appendChild(ul);

        var what = el('ul', 'cmp-what');
        lines.forEach(function (x) { what.appendChild(el('li', null, x)); });
        c.appendChild(what);
        return c;
      }

      function drawCompare(p, list) {
        compare.innerHTML = '';
        compare.hidden = !list.length;
        if (!list.length) return;

        var nowCounts = tierCounts(base), afterCounts = tierCounts(p);
        var row = el('div', 'cmp-row');
        row.appendChild(card('now', 'Me now', base, nowCounts, null,
          list.map(function (c) { return T(c.lever.label) + ': ' + T(c.from.label); })));
        var arrow = el('div', 'cmp-arrow', '→');
        arrow.setAttribute('aria-hidden', 'true');
        row.appendChild(arrow);
        row.appendChild(card('after', 'Me after', p, afterCounts, { score: base.score, counts: nowCounts },
          list.map(function (c) { return T(c.lever.label) + ': ' + T(c.to.label); })));
        compare.appendChild(row);

        /* The programmes whose verdict changes, best news first. */
        var moved = [];
        Object.keys(p.rows).forEach(function (k) {
          var a = base.rows[k], b = p.rows[k];
          if (!a || !b || a.verdict.label === b.verdict.label) return;
          /* Tiers first, then the size of the move within a tier. */
          var tiers = TIER_RANK[b.tier] - TIER_RANK[a.tier];
          moved.push({ name: b.name || k, from: a.verdict, to: b.verdict,
                       up: tiers > 0 || (!tiers && b.value >= a.value),
                       rank: tiers * 1000 + (b.value - a.value) });
        });
        moved.sort(function (x, y) { return y.rank - x.rank; });

        var mv = el('div', 'cmp-moves');
        mv.appendChild(el('h4', null, moved.length
          ? tn(moved.length, 'One programme changes verdict', '{n} programmes change verdict')
          : T('No verdict changes — the scores still move')));
        if (moved.length) {
          var ul = el('ul');
          moved.slice(0, 12).forEach(function (m) {
            var li_ = el('li', m.up ? 'up' : 'down');
            li_.appendChild(el('span', 'nm', m.name));
            li_.appendChild(el('span', 'badge ' + m.from.tone, m.from.label));
            li_.appendChild(el('span', 'to', '→'));
            li_.appendChild(el('span', 'badge ' + m.to.tone, m.to.label));
            ul.appendChild(li_);
          });
          if (moved.length > 12) ul.appendChild(el('li', 'more', T('and {n} more', { n: moved.length - 12 })));
          mv.appendChild(ul);
        }
        compare.appendChild(mv);
      }

      pick.addEventListener('change', function () { setLever(+pick.value); });
      range.addEventListener('input', draw);
      reset.addEventListener('click', function () {
        chosen = levers.map(function (l) { return l.start; });
        range.value = String(chosen[li]);
        draw();
      });
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
    mast.appendChild(el('span', 'plan-date', T('Battle plan · {date}', { date: fmtDate(isoOf(now)) })));
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
      var h = el('h2', 'plan-h', T(t[1]) + ' — ' + T(TIER_NOTE[t[0]]));
      if (list.length > shown.length) h.appendChild(el('span', 'plan-more', ' ' + T('({shown} of {total})', { shown: shown.length, total: list.length })));
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
          : c.next ? T(c.next.label) + ', ' + fmtDate(c.next.date) + ' (' + inDays(c.next.days) + ')'
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
      if (c && c.next) dated.push({ days: c.next.days, text: T('Submit {name} by {date} — {round}, {when}', {
        name: r.name, date: fmtDate(c.next.date), round: T(c.next.label).toLowerCase(), when: inDays(c.next.days) }) });
    });
    dated.sort(function (a, b) { return a.days - b.days; });

    p2.appendChild(el('h2', 'plan-h2', 'Checklist'));
    var ol = el('ul', 'plan-check');
    plan.steps.concat(dated.slice(0, 9).map(function (d) { return d.text; })).forEach(function (s) {
      ol.appendChild(el('li', null, s));
    });
    var stale = staleness(now, picked.map(function (r) { return r.key; }));
    ol.appendChild(el('li', null, T('Confirm every date on the school’s own admissions page — ' +
      'the deadlines here were read on {date} and schools do move them.', { date: fmtDate(stale ? stale.date : CAL.checked) })));
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
    if (window.Stats) Stats.event('battle-plan');
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
    b.title = T('A two-page summary: your list by tier, your strengths and gaps, and a dated ' +
      'checklist. Opens the print dialog — choose “Save as PDF”.');
    b.addEventListener('click', function () { battlePlan(build()); });
    return b;
  }

  return {
    regionOf: regionOf,
    regionLabel: function (place) {
      var id = regionOf(place);
      for (var i = 0; i < REGIONS.length; i++) if (REGIONS[i][0] === id) return T(REGIONS[i][1]);
      return id;
    },
    tag: tag,
    calendar: calendar,
    staleness: staleness,
    staleNotice: staleNotice,
    deadlineNode: deadlineNode,
    session: session,
    radioLever: radioLever,
    battlePlan: battlePlan,
    planButton: planButton,
    fmtDate: fmtDate,
    STALE_DAYS: STALE_DAYS
  };
}());
