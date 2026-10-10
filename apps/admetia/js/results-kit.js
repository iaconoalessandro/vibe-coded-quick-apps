/* ---------------------------------------------------------------------------
 * Results-page tools shared by the three calculators. Nothing here scores
 * anything: each page passes in what its own model says, and this file only
 * draws it and wires it up.
 *
 *   filters     Pills over the league tables — All / UK / Europe / US, and
 *               Strong / Competitive / Below Competitive — so a long list can be cut to the part
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
 *   calendar    Every programme you can still apply to, by its next closing
 *               date, laid out like a markets page's earnings calendar.
 *   stamps      The first time results appear in a visit, the verdicts on
 *               screen land like ink stamps. Once only: never on a re-render.
 *   battle plan A two-page summary — targets, strengths, gaps and a dated
 *               checklist — set as a newspaper page and sent to the browser's
 *               print dialog, where "Save as PDF" makes the file. Printing a
 *               results page any other way (Ctrl+P) prints the same thing.
 *               The site ships no PDF library, and the print route keeps its
 *               own typefaces.
 *   share       An image of your shortlist, drawn in the browser — nothing is
 *               sent anywhere — for the phone's share sheet or to download.
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

  var REGIONS = [['uk', 'UK'], ['eu', 'Europe'], ['us', 'US'], ['ca', 'Canada'], ['as', 'Asia']];
  /* Named with the same words as the verdict badges on each programme, so
   * a filter and the rows it keeps visibly agree. */
  var TIERS = [['safe', 'Strong'], ['target', 'Competitive'], ['dream', 'Below Competitive']];
  var TIER_NOTE = {
    safe: 'at or above the Strong line',
    target: 'at or above Competitive, short of Strong',
    dream: 'eligible, below Competitive'
  };

  /* The models write regions as places ("UK", "France / Singapore",
   * "Europe (multi-campus)", "USA"). INSEAD's Singapore campus does not make
   * it an Asian school for this purpose: it recruits and admits as one. Only
   * a place that starts with an Asian country counts as Asia. */
  function regionOf(place) {
    var p = String(place || '');
    if (/^UK\b/.test(p)) return 'uk';
    if (/USA|United States/.test(p)) return 'us';
    if (/Canada/.test(p)) return 'ca';
    if (/^(China|Singapore|Hong Kong|India|Japan)\b/.test(p)) return 'as';
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

  /* The search text and the order survive a re-render of the same page (the
   * what-if's "keep these answers" rebuilds the results). */
  var kept = { q: '', sort: 'score' };

  /* Lower-case, accents off: "Hautes Études" is found by "etudes". */
  function norm(s) {
    return String(s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  function session(root) {
    var registry = {};     // key -> { row, num, badge, base }
    var filters = null;

    function register(key, row, numEl, badgeEl, base) {
      registry[key] = { row: row, num: numEl, badge: badgeEl, base: base, shown: base };
      pressable(badgeEl);
      if (!stamped && !stampQueued) {
        stampQueued = true;
        requestAnimationFrame(function () { requestAnimationFrame(stamp); });
      }
    }

    /* The verdicts on screen land like ink stamps, a beat apart, the first
     * time results appear in a visit. Only the first few, and only visible
     * ones: a re-render (the what-if's "keep these answers") stays still. */
    var stampQueued = false;
    function stamp() {
      if (stamped) return;
      stamped = true;
      if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      var i = 0;
      Object.keys(registry).forEach(function (key) {
        var b = registry[key].badge;
        if (i >= 10 || !b || !b.isConnected || !b.offsetWidth || b.closest('details:not([open])')) return;
        b.style.animationDelay = (160 + i * 70) + 'ms';
        b.classList.add('stamp');
        b.addEventListener('animationend', function done() {
          b.classList.remove('stamp');
          b.style.animationDelay = '';
          b.removeEventListener('animationend', done);
        });
        i++;
      });
    }

    /* ---------------------------------------------------------------- */
    /* Deadline calendar                                                 */
    /* ---------------------------------------------------------------- */

    /* Every programme on the page you can still apply to, by its next
     * closing date, grouped by month like an earnings calendar. The first
     * dozen show; the rest fold. Null when no programme has a dated round
     * ahead. */
    function deadlineCalendar(now) {
      now = now || new Date();
      var items = [];
      Object.keys(registry).forEach(function (key) {
        var r = registry[key], tier = r.row.dataset.tier;
        if (!tier || tier === 'out') return;
        var c = calendar(key, now);
        if (!c || !c.next) return;
        var n = r.row.querySelector('.name');
        items.push({ name: n && n.firstChild ? n.firstChild.textContent.trim() : key,
                     badge: r.badge, next: c.next });
      });
      if (!items.length) return null;
      items.sort(function (a, b) { return a.next.days - b.next.days || (a.name < b.name ? -1 : 1); });

      var sec = el('section', 'dlcal reveal');
      sec.setAttribute('aria-label', T('Deadline calendar'));
      var head = el('div', 'dlcal-head');
      head.appendChild(el('h3', null, 'Deadline calendar'));
      head.appendChild(el('p', null, 'The next closing date at every programme you can still apply to, soonest first.'));
      sec.appendChild(head);

      var loc = I.locale || 'en-GB';
      function entry(it) {
        var d = parse(it.next.date);
        var li = el('li', 'dlcal-row' + (it.next.days <= 14 ? ' soon' : it.next.days <= 45 ? ' near' : ''));
        var day = el('div', 'dlcal-day');
        day.appendChild(el('b', null, String(d.getDate())));
        day.appendChild(el('span', null, d.toLocaleDateString(loc, { weekday: 'short' })));
        li.appendChild(day);
        var what = el('div', 'dlcal-what');
        what.appendChild(el('span', 'nm', it.name));
        what.appendChild(el('span', 'rd', T(it.next.label)));
        li.appendChild(what);
        if (it.badge) li.appendChild(pressable(el('span', it.badge.className.replace(/\s*\bstamp\b/, ''), it.badge.textContent)));
        var t = el('div', 'dlcal-t');
        t.appendChild(el('b', null, it.next.days === 0 ? T('today') : String(it.next.days)));
        if (it.next.days) t.appendChild(el('span', null, it.next.days === 1 ? T('day') : T('days')));
        li.appendChild(t);
        return li;
      }
      function list(from, to, parent) {
        var month = null, ul = null;
        items.slice(from, to).forEach(function (it) {
          var d = parse(it.next.date), m = d.getFullYear() * 12 + d.getMonth();
          if (m !== month) {
            month = m;
            var label = d.toLocaleDateString(loc, { month: 'long', year: 'numeric' });
            parent.appendChild(el('h4', 'dlcal-month', label.charAt(0).toUpperCase() + label.slice(1)));
            ul = el('ul', 'dlcal-list');
            parent.appendChild(ul);
          }
          ul.appendChild(entry(it));
        });
      }
      var FIRST = 12;
      list(0, FIRST, sec);
      if (items.length > FIRST) {
        var more = fold(T('Show all {n}', { n: items.length }));
        more.classList.add('dlcal-more');
        list(FIRST, items.length, more);
        sec.appendChild(more);
      }
      sec.count = items.length;
      return sec;
    }

    /* ---------------------------------------------------------------- */
    /* Filter pills                                                      */
    /* ---------------------------------------------------------------- */

    function filterBar() {
      var state = { region: null, tier: null, q: norm(kept.q), sort: kept.sort };
      var bar = el('div', 'filters reveal');
      bar.setAttribute('role', 'toolbar');
      bar.setAttribute('aria-label', T('Filter the programmes below'));

      /* Find a programme by name, and put the lists in deadline order. */
      var search = document.createElement('input');
      search.type = 'search';
      search.className = 'filter-search';
      search.placeholder = T('Find a programme…');
      search.setAttribute('aria-label', T('Find a programme by name'));
      search.value = kept.q;
      search.addEventListener('input', function () {
        kept.q = search.value;
        state.q = norm(search.value.trim());
        apply();
      });
      bar.appendChild(search);

      var sort = document.createElement('select');
      sort.className = 'filter-sort';
      sort.setAttribute('aria-label', T('Order'));
      [['score', 'Best chance first'], ['deadline', 'Next deadline first']].forEach(function (o) {
        var opt = document.createElement('option');
        opt.value = o[0];
        opt.textContent = T(o[1]);
        sort.appendChild(opt);
      });
      sort.value = state.sort;
      sort.addEventListener('change', function () {
        kept.sort = state.sort = sort.value;
        order();
        apply();
      });
      bar.appendChild(sort);

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

      /* Labelled, so a row of words reads as a row of controls. */
      bar.appendChild(el('span', 'pill-k', 'Filter'));
      bar.appendChild(pill('all', null, 'All'));
      var g1 = el('span', 'pill-group');
      g1.appendChild(el('span', 'pill-k', 'Region'));
      REGIONS.forEach(function (r) { g1.appendChild(pill('region', r[0], r[1])); });
      bar.appendChild(g1);
      var g2 = el('span', 'pill-group');
      g2.appendChild(el('span', 'pill-k', 'Verdict'));
      TIERS.forEach(function (t) { g2.appendChild(pill('tier', t[0], t[1], TIER_NOTE[t[0]])); });
      bar.appendChild(g2);

      var status = el('span', 'filter-status');
      status.setAttribute('aria-live', 'polite');
      bar.appendChild(status);

      /* One line above the bar that says what can be pressed. */
      var hint = el('p', 'filter-hint');
      hint.appendChild(el('b', null, 'Tap to filter.'));
      hint.appendChild(document.createTextNode(' ' + T('Pick a region or a verdict to narrow the lists; pick it again to undo. ' +
        'Every verdict next to a score, marked +, opens what it means in practice.')));

      function rows() { return root.querySelectorAll('.row'); }
      /* A row's name is the first text in its name cell. */
      function nameOf(row) {
        if (row.dataset.name === undefined) {
          var n = row.querySelector('.name');
          row.dataset.name = norm(n && n.firstChild ? n.firstChild.textContent : '');
        }
        return row.dataset.name;
      }
      function matches(row, region, tier) {
        return (!region || row.dataset.region === region) && (!tier || row.dataset.tier === tier) &&
          (!state.q || nameOf(row).indexOf(state.q) !== -1);
      }

      /* Days to the next deadline; open rolling admissions after every dated
       * programme, and no published date at all last. */
      function due(row) {
        var c = calendar(row.dataset.key);
        if (c && c.next) return c.next.days;
        return c && c.rolling ? 1e5 : 1e6;
      }

      /* Score order is the order the page drew; deadline order sorts the
       * rows of each table and keeps each one's rank beside it, since a
       * running count would no longer mean anything. */
      function order() {
        root.querySelectorAll('.table').forEach(function (t) {
          var kids = Array.prototype.slice.call(t.children);
          var rs = kids.filter(function (k) { return k.classList.contains('row') && k.dataset.key; });
          if (!rs.length) return;
          if (!t.origOrder) {
            t.origOrder = kids.filter(function (k) { return !k.classList.contains('filter-empty'); });
            rs.forEach(function (r, i) { r.dataset.rank = String(i + 1); r.dataset.pos = String(i); });
          }
          if (state.sort === 'deadline') {
            rs.slice().sort(function (a, b) { return due(a) - due(b) || a.dataset.pos - b.dataset.pos; })
              .forEach(function (r) { t.appendChild(r); });
          } else {
            t.origOrder.forEach(function (k) { t.appendChild(k); });
          }
          var empty = t.querySelector(':scope > .filter-empty');
          if (empty) t.appendChild(empty);
        });
        root.classList.toggle('by-deadline', state.sort === 'deadline');
      }

      function apply() {
        var active = !!(state.region || state.tier || state.q);
        var shown = 0, total = 0;

        Array.prototype.forEach.call(rows(), function (row) {
          var tagged = !!row.dataset.region;
          if (tagged) total++;
          var ok = !active || (tagged && matches(row, state.region, state.tier));
          row.hidden = !ok;
          if (ok && tagged) shown++;
        });

        /* Searching for a programme that is ruled out opens its list. */
        if (state.q) {
          root.querySelectorAll('details.out-list').forEach(function (d) {
            if (d.querySelector('.row[data-key]:not([hidden])')) d.open = true;
          });
        }

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
            /* Verdict headings only make sense in score order. */
            k.hidden = !vis || state.sort === 'deadline';
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
          var on = p.kind === 'all' ? !(state.region || state.tier) : state[p.kind] === p.id;
          p.el.classList.toggle('on', on);
          p.el.setAttribute('aria-pressed', on ? 'true' : 'false');
          var n = 0;
          Array.prototype.forEach.call(rows(), function (row) {
            if (!row.dataset.region) return;
            if (p.kind === 'all') { if (matches(row, null, null)) n++; }
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
        if (active) {
          status.appendChild(document.createTextNode(' · '));
          var clear = el('button', 'filter-clear', 'Show all');
          clear.type = 'button';
          clear.addEventListener('click', function () {
            state.region = null; state.tier = null; state.q = ''; kept.q = ''; search.value = '';
            apply();
          });
          status.appendChild(clear);
        }
      }

      filters = { el: bar, refresh: function () {
        if (!hint.parentNode && bar.parentNode) bar.parentNode.insertBefore(hint, bar);
        order();
        apply();
      } };
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

      var CMP_TIERS = TIERS.concat([['out', 'Ruled out']]);

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

    return { register: register, filterBar: filterBar, whatIf: whatIf, deadlineCalendar: deadlineCalendar };
  }

  var TIER_RANK = { out: 0, dream: 1, target: 2, safe: 3 };
  var stamped = false;

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
  /* The plan's two pages, set as a newspaper: the nameplate between two
   * ears, a dateline under a heavy rule, then the story. Built into the page
   * (hidden on screen) for the print route to show. */
  function planDoc(plan) {
    var now = new Date();
    var old = document.getElementById('battle-plan');
    if (old) old.remove();
    var doc = el('section', 'plan');
    doc.id = 'battle-plan';
    doc.setAttribute('aria-hidden', 'true');
    var dateLong = now.toLocaleDateString(I.locale || 'en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
    function masthead(page, into) {
      var m = el('header', 'plan-mast');
      m.appendChild(el('span', 'plan-ear', 'Battle plan'));
      m.appendChild(el('span', 'plan-name', 'Admetia'));
      m.appendChild(el('span', 'plan-ear r', 'The way in'));
      into.appendChild(m);
      var line = el('div', 'plan-dateline');
      line.appendChild(el('span', null, dateLong));
      line.appendChild(el('span', null, plan.kicker));
      line.appendChild(el('span', null, T('Page {n} of 2', { n: page })));
      into.appendChild(line);
    }

    /* ---- page one: where you stand, and the list ---- */
    var p1 = el('div', 'plan-page');
    masthead(1, p1);
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
        tr.appendChild(el('td', 'v ' + r.tier, r.verdict));
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
    masthead(2, p2);
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
    return doc;
  }

  function battlePlan(plan) {
    planDoc(plan);
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

  /* The results on screen, for the print route: the page's own plan
   * builder, while its jump bar is showing. */
  var current = null;
  function currentPlan() {
    return current && current.nav.isConnected && current.nav.offsetParent !== null ? current.build : null;
  }

  /* ------------------------------------------------------------------ */
  /* Share image                                                         */
  /* ------------------------------------------------------------------ */

  /* Lines of `text` no wider than `w` in the context's current font. */
  function wrap(ctx, text, w) {
    var lines = [], line = '';
    String(text).split(' ').forEach(function (word) {
      var t = line ? line + ' ' + word : word;
      if (line && ctx.measureText(t).width > w) { lines.push(line); line = word; } else line = t;
    });
    if (line) lines.push(line);
    return lines;
  }
  function clip(ctx, text, w) {
    text = String(text);
    if (ctx.measureText(text).width <= w) return text;
    while (text.length > 1 && ctx.measureText(text + '…').width > w) text = text.slice(0, -1);
    return text.replace(/\s+$/, '') + '…';
  }

  /* A 1080 × 1350 card of your shortlist in the edition you are reading:
   * nameplate, what the model says, your best eight, and the line that says
   * what this is — an estimate, not a decision. Resolves to a PNG blob. */
  function shareImage(plan) {
    var root = document.documentElement, css = getComputedStyle(root);
    function v(name, dflt) { return css.getPropertyValue(name).trim() || dflt; }
    var paper = v('--paper', '#fff1e5'), ink = v('--ink', '#33302e'), accent = v('--accent', '#990f3d');
    var mast = v('--font-mast', 'serif'), disp = v('--font-display', 'serif'), head = v('--font-head', 'serif'), ui = v('--font-ui', 'sans-serif');
    var mastW = v('--mast-weight', '700'), dispW = v('--display-weight', '600');
    var TONE = { safe: v('--high', ink), target: v('--good', ink), dream: v('--mid', ink) };
    var W = 1080, H = 1350, X = 84;
    var fonts = [mastW + ' 100px ' + mast, dispW + ' 60px ' + disp, '700 28px ' + ui, '600 34px ' + ui, 'italic 400 30px ' + head];
    return Promise.all(fonts.map(function (f) { return document.fonts.load(f).catch(function () {}); })).then(function () {
      var cv = document.createElement('canvas');
      cv.width = W; cv.height = H;
      var c = cv.getContext('2d');
      function face(f, s) { c.font = f; if ('fontStretch' in c) c.fontStretch = s || 'normal'; }
      c.fillStyle = paper;
      c.fillRect(0, 0, W, H);

      /* The City nameplate and slogan. */
      c.textAlign = 'center';
      c.fillStyle = ink;
      face(mastW + ' 118px ' + mast);
      c.fillText(v('--mast-case', 'uppercase') === 'none' ? 'Admetia' : 'ADMETIA', W / 2, 172);
      face('italic 400 30px ' + head);
      c.fillStyle = ink;
      c.fillText('The way in', W / 2, 224);

      /* Dateline between rules. */
      var y = 262, date = new Date().toLocaleDateString(I.locale || 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
      c.fillStyle = ink;
      c.fillRect(X, y, W - 2 * X, 5);
      c.fillRect(X, y + 9, W - 2 * X, 1.5);
      face('700 22px ' + ui);
      c.textAlign = 'left';
      c.fillText(date.toUpperCase(), X, y + 48);
      c.textAlign = 'right';
      c.fillText(T('My shortlist').toUpperCase(), W - X, y + 48);
      c.fillRect(X, y + 66, W - 2 * X, 1.5);

      /* Kicker and headline. */
      c.textAlign = 'left';
      y += 126;
      c.fillStyle = accent;
      face('700 26px ' + ui);
      c.fillText(clip(c, String(plan.kicker).toUpperCase(), W - 2 * X), X, y);
      c.fillStyle = ink;
      face(dispW + ' 62px ' + disp);
      wrap(c, plan.title, W - 2 * X).slice(0, 3).forEach(function (l) { y += 70; c.fillText(l, X, y); });

      /* Three facts, as a markets strip. */
      y += 44;
      var facts = (plan.facts || []).slice(0, 3), fw = (W - 2 * X) / Math.max(1, facts.length);
      c.fillRect(X, y, W - 2 * X, 2);
      facts.forEach(function (f, i) {
        var fx = X + i * fw + (i ? 24 : 0);
        if (i) { c.globalAlpha = .35; c.fillRect(X + i * fw, y + 18, 1.5, 92); c.globalAlpha = 1; }
        face(dispW + ' 50px ' + disp);
        c.fillText(clip(c, f[1], fw - 30), fx, y + 70);
        face('700 20px ' + ui);
        c.globalAlpha = .7;
        c.fillText(clip(c, T(f[0]).toUpperCase(), fw - 30), fx, y + 104);
        c.globalAlpha = 1;
      });
      y += 128;
      c.fillRect(X, y, W - 2 * X, 2);

      /* The best you can apply to — as many as fit above the footer, eight at
       * most — verdict on the right. */
      y += 20;
      (plan.rows || []).filter(function (r) { return r.tier !== 'out'; }).slice(0, 8).forEach(function (r) {
        if (y + 64 + 22 > H - 172) return;
        y += 64;
        face('700 22px ' + ui);
        var verdict = String(T(r.verdict)).toUpperCase(), vw = c.measureText(verdict).width;
        c.textAlign = 'right';
        c.fillStyle = TONE[r.tier] || accent;
        c.fillText(verdict, W - X, y);
        c.textAlign = 'left';
        c.fillStyle = ink;
        face('600 32px ' + ui);
        c.fillText(clip(c, r.name, W - 2 * X - vw - 40), X, y);
        c.globalAlpha = .18;
        c.fillRect(X, y + 22, W - 2 * X, 1.5);
        c.globalAlpha = 1;
      });

      /* What this is, and where. */
      c.fillRect(X, H - 150, W - 2 * X, 2);
      face('italic 400 26px ' + head);
      wrap(c, T('An independent estimate from a points model — not an admission decision.'), W - 2 * X)
        .slice(0, 2).forEach(function (l, i) { c.fillText(l, X, H - 104 + i * 34); });
      face('700 20px ' + ui);
      c.globalAlpha = .7;
      c.fillText((location.host + location.pathname.replace(/[^\/]*$/, '')).replace(/\/$/, ''), X, H - 36);
      c.globalAlpha = 1;
      return new Promise(function (ok) { cv.toBlob(ok, 'image/png'); });
    });
  }

  /* The share button: the phone's share sheet where there is one, a
   * download everywhere else. */
  function shareButton(build) {
    var b = el('button', 'btn small', 'Share my shortlist');
    b.type = 'button';
    b.title = T('Makes an image of your shortlist in this browser — nothing is sent anywhere — to share or save.');
    b.addEventListener('click', function () {
      b.disabled = true;
      shareImage(build()).then(function (blob) {
        var file = new File([blob], 'admetia-shortlist.png', { type: 'image/png' });
        if (window.Stats) Stats.event('share');
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          return navigator.share({ files: [file], title: 'Admetia', text: T('My shortlist on Admetia — the way in.') })
            .catch(function () { /* closed the sheet */ });
        }
        var a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = file.name;
        document.body.appendChild(a);
        a.click();
        setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
      }).then(function () { b.disabled = false; }, function () { b.disabled = false; });
    });
    return b;
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

  /* ------------------------------------------------------------------ */
  /* What the verdicts mean                                              */
  /* ------------------------------------------------------------------ */

  /* Each verdict as it looks on the page, the rule behind it, and what it
   * means in practice. The MBA model is someone else's and states rough
   * odds for its bands; the master's and computing models are a ranking
   * with calibrated lines, and say no percentage at all. */
  var VERDICTS = {
    mba: {
      rule: 'The model’s own figure',
      rows: [
        ['high', 'Strong', 'Roughly 75–80%', 'Your profile is above the school’s bar, possibly with a scholarship. Likely, not certain.'],
        ['good', 'Competitive', 'Roughly 50%', 'You look like the people they admit. A coin flip, decided by your essays, interview and application round.'],
        ['mid', 'Between Stretch and Competitive', 'In between', 'The labels between the bands (“closer to…”, “between…”) are transition zones: read them as the nearer band.'],
        ['low', 'Stretch', 'Roughly 10%', 'Well below the bar. It happens, but rarely.']
      ],
      note: 'The percentages are the model author’s own stated figures, not measured outcomes. No verdict is a guarantee: committees read the whole file — essays, interview, and who else applies that year.'
    },
    rules: {
      rule: 'The rule',
      rows: [
        ['high', 'Strong', 'At or above the school’s Strong line', 'Comfortably above a typical admitted profile. A solid place on your list.'],
        ['good', 'Competitive', 'At or above its Competitive line', 'In range: your essays and interview decide.'],
        ['mid', 'Possible', 'Up to 8 points below Competitive', 'Realistic with a strong application or an improvement — each programme shows what would close the gap.'],
        ['low', 'Stretch', 'More than 8 points below Competitive', 'Unlikely, unless something else in your file really stands out.'],
        ['high', 'Meets the requirements', 'Programmes that admit everyone who meets their rules, until they are full', 'Apply early: timing matters more than score.', 'masters'],
        ['gate', 'Ineligible', 'Fails a published entry rule', 'Not eligible as things stand, whatever the score. The row says which rule, and whether it can still be met.']
      ],
      note: 'These are a ranking, not probabilities: the lines are the model’s own calibration, because no school publishes a points requirement. No verdict is a guarantee: committees read the whole file.'
    }
  };
  var LIST_ADVICE = [
    ['2–3', 'Strong', 'your safety net'],
    ['3–5', 'Competitive', 'the core of your list'],
    ['1–3', 'Possible or Stretch', 'the ones you would love']
  ];

  /* A verdict badge is a button: it opens the key at its own row. */
  function pressable(b) {
    if (b) {
      b.setAttribute('role', 'button');
      b.tabIndex = 0;
      b.title = T('What this verdict means');
    }
    return b;
  }

  var keyDialog = null, keyKind = null, badgeKind = null;
  function verdictDialog(kind) {
    if (keyDialog && keyKind === kind) return keyDialog;
    if (keyDialog) keyDialog.remove();
    var v = VERDICTS[kind === 'mba' ? 'mba' : 'rules'];
    var d = el('dialog', 'vkey');
    d.setAttribute('aria-labelledby', 'vkey-title');
    var head = el('div', 'vkey-head');
    head.appendChild(el('p', 'vkey-kicker', 'How to read the verdicts'));
    var h = el('h2', null, 'What each verdict means in practice');
    h.id = 'vkey-title';
    head.appendChild(h);
    var x = el('button', 'vkey-close', '×');
    x.type = 'button';
    x.setAttribute('aria-label', T('Close'));
    x.addEventListener('click', function () { d.close(); });
    head.appendChild(x);
    d.appendChild(head);

    var cols = el('div', 'vkey-row vkey-cols');
    cols.appendChild(el('span', null, 'Verdict'));
    cols.appendChild(el('span', null, v.rule));
    cols.appendChild(el('span', null, 'In practice'));
    d.appendChild(cols);
    v.rows.forEach(function (r) {
      if (r[4] && r[4] !== kind) return;
      var row = el('div', 'vkey-row');
      row.dataset.label = T(r[1]);
      if (kind === 'mba' && r[0] === 'mid') row.dataset.mid = '1';
      var b = el('span', 'badge ' + r[0], r[1]);
      row.appendChild(el('div', 'vkey-v')).appendChild(b);
      row.appendChild(el('div', 'vkey-rule', r[2]));
      row.appendChild(el('div', 'vkey-what', r[3]));
      d.appendChild(row);
    });
    d.appendChild(el('p', 'vkey-note', v.note));

    var list = el('div', 'vkey-list');
    list.appendChild(el('h3', null, 'Building your list'));
    var ul = el('ul');
    LIST_ADVICE.forEach(function (a) {
      var li = el('li');
      li.appendChild(el('b', null, a[0]));
      li.appendChild(document.createTextNode(' ' + T(a[1]) + ' — ' + T(a[2])));
      ul.appendChild(li);
    });
    list.appendChild(ul);
    d.appendChild(list);

    /* A click on the backdrop closes it, as Esc does. */
    d.addEventListener('click', function (e) { if (e.target === d) d.close(); });
    document.body.appendChild(d);
    keyDialog = d;
    keyKind = kind;
    return d;
  }

  /* The key's row for a badge's words: the same words; else, for the MBA
   * model's in-between labels, the in-between row; else the verdict the
   * words start with ("Competitive, with scholarship potential"). */
  function keyRow(rows, label) {
    var i;
    for (i = 0; i < rows.length; i++) if (rows[i].dataset.label === label) return rows[i];
    if (/^(closer|between|più vicino|tra)\b/i.test(label)) {
      for (i = 0; i < rows.length; i++) if (rows[i].dataset.mid) return rows[i];
    }
    for (i = 0; i < rows.length; i++) if (label.indexOf(rows[i].dataset.label) === 0) return rows[i];
    return null;
  }

  /* Opens the key; given a verdict's words (from a badge), marks its row. */
  function openVerdicts(kind, label) {
    var d = verdictDialog(kind);
    var rows = Array.prototype.slice.call(d.querySelectorAll('.vkey-row[data-label]'));
    var hit = label ? keyRow(rows, label) : null;
    rows.forEach(function (r) { r.classList.toggle('on', r === hit); });
    if (d.showModal) { if (!d.open) d.showModal(); } else d.setAttribute('open', '');
    if (hit) hit.scrollIntoView({ block: 'nearest' });
    if (window.Stats) Stats.event('verdict-key');
  }

  /* Every verdict badge on a results page opens the key at its own row. */
  var badgeKeys = false;
  function watchBadges() {
    if (badgeKeys) return;
    badgeKeys = true;
    function open(e) {
      var b = e.target.closest && e.target.closest('.row .badge, .dlcal-row .badge');
      if (b && badgeKind) { e.preventDefault(); openVerdicts(badgeKind, b.textContent.trim()); }
    }
    document.addEventListener('click', open);
    document.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') open(e); });
  }

  function verdictButton(kind) {
    var b = el('button', 'jump-link vkey-btn', 'What the verdicts mean');
    b.type = 'button';
    b.addEventListener('click', function () { openVerdicts(kind); });
    return b;
  }

  /* Under the headline numbers: a line of buttons to each section of a
   * long results page, and the battle plan beside them, so neither sits
   * twenty screens down a phone. `links` is [{ label, count, target }];
   * `kind` ('mba', 'masters' or 'it') adds the key to the verdicts. */
  function jumpBar(links, build, kind) {
    var nav = el('nav', 'jump');
    nav.setAttribute('aria-label', T('On this page'));
    nav.appendChild(el('span', 'jump-k', 'Jump to'));
    links.forEach(function (l) {
      if (!l.target) return;
      var b = el('button', 'jump-link', l.label);
      b.type = 'button';
      if (l.count !== undefined) b.appendChild(el('span', 'c', String(l.count)));
      b.addEventListener('click', function () {
        if (l.open) l.open.open = true;
        l.target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      nav.appendChild(b);
    });
    if (build) {
      var plan = planButton(build);
      plan.classList.add('small');
      nav.appendChild(plan);
      nav.appendChild(shareButton(build));
      current = { nav: nav, build: build, kind: kind };
    }
    if (kind) {
      nav.insertBefore(verdictButton(kind), nav.querySelector('.btn'));
      badgeKind = kind;
      document.documentElement.classList.add('has-key');
      watchBadges();
    }
    return nav;
  }

  /* ------------------------------------------------------------------ */
  /* Folded school rows                                                  */
  /*                                                                     */
  /* A results table lists twenty-odd programmes, and fully expanded     */
  /* each one ran to a phone screen or more. Every row now shows its      */
  /* verdict, score, deadline and any rule that blocks it, and folds the  */
  /* explanation — what the school weighs, how to close the gap, what it  */
  /* publishes — into one toggle.                                         */
  /* ------------------------------------------------------------------ */

  function fold(label, open) {
    var d = el('details', 'more');
    if (open) d.open = true;
    d.appendChild(el('summary', null, label));
    return d;
  }

  /* How many rows start open: the closest three on a wide screen, only the
   * closest one on a phone, where each open row runs to two screens. */
  function openCount() {
    return window.matchMedia && window.matchMedia('(max-width: 640px)').matches ? 1 : 3;
  }

  /* The ruled-out table, closed behind one toggle. Those programmes cannot
   * be applied to as things stand, and open they ran to more of a phone
   * screen than the ones that can. A search that matches one opens it. */
  function outList(n, nodes) {
    var d = el('details', 'more out-list');
    var sum = el('summary');
    function label() {
      sum.textContent = d.open ? T('Hide the ruled-out programmes')
        : tn(n, 'Show the programme and the rule that rules it out',
            'Show the {n} programmes and the rule that rules out each');
    }
    label();
    d.appendChild(sum);
    nodes.forEach(function (x) { d.appendChild(x); });
    d.addEventListener('toggle', function (e) { if (e.target === d) label(); });
    return d;
  }

  /* ------------------------------------------------------------------ */
  /* A programme picked in the directory (programmes.html)               */
  /* ------------------------------------------------------------------ */

  /* "Test my chances" in the directory opens a calculator with ?school=<key>
   * (a model id, or mba:<name>). `name(key)` returns the programme's name
   * when this calculator scores it, so a stale or foreign key is ignored. */
  function picked(name) {
    var key = null;
    try { key = new URLSearchParams(location.search).get('school'); } catch (e) { return null; }
    if (!key) return null;
    var n = name(key);
    return n ? { key: key, name: n } : null;
  }

  /* Above the questions: which programme the reader came to test, and a way
   * straight to the results when this browser already holds answers. */
  function pickedBanner(view, p, opts) {
    if (!p || !view) return null;
    var box = el('div', 'note-card picked-card');
    box.setAttribute('role', 'status');
    box.appendChild(el('strong', null, T('Testing your chances at {name}.', { name: p.name })));
    box.appendChild(document.createTextNode(' ' + T('Answer the questions as usual: the results open at this programme, with every other one in the track below it.')));
    var row = el('span', 'picked-actions');
    if (opts && opts.hasAnswers && opts.hasAnswers()) {
      var b = el('button', 'btn small primary', T('See it with the answers saved here'));
      b.type = 'button';
      b.addEventListener('click', opts.show);
      row.appendChild(b);
    }
    var a = el('a', 'picked-back', T('Back to the programme directory'));
    a.href = 'programmes.html';
    row.appendChild(a);
    box.appendChild(row);
    /* Below the page's own headline, just above the questions. */
    var grid = view.querySelector('.q-grid');
    if (grid && grid.parentNode === view) view.insertBefore(box, grid);
    else view.insertBefore(box, view.firstChild);
    return box;
  }

  /* On the results: open the picked programme's row, mark it, and put a line
   * at the top that jumps to it. A row in the ruled-out list opens that list
   * first, so the rule that blocks it is in view. */
  function pickedResults(view, p) {
    if (!p || !view) return null;
    var row = null;
    Array.prototype.forEach.call(view.querySelectorAll('[data-key]'), function (r) {
      if (!row && r.dataset.key === p.key) row = r;
    });
    var box = el('div', 'note-card picked-card');
    box.appendChild(el('strong', null, T('Your programme: {name}.', { name: p.name })));
    if (!row) {
      box.appendChild(document.createTextNode(' ' + T('It is not scored on this page.')));
    } else {
      row.classList.add('picked');
      var out = row.closest && row.closest('details.out-list');
      box.appendChild(document.createTextNode(' ' + (out
        ? T('A published requirement rules it out for your answers; its row says which.')
        : T('Its row is marked below, with its verdict and what it weighs.'))));
      var b = el('button', 'btn small', T('Jump to it'));
      b.type = 'button';
      b.addEventListener('click', function () {
        if (out) out.open = true;
        var more = row.querySelector('details.more');
        if (more) more.open = true;
        row.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      var actions = el('span', 'picked-actions');
      actions.appendChild(b);
      var a = el('a', 'picked-back', T('Back to the programme directory'));
      a.href = 'programmes.html';
      actions.appendChild(a);
      box.appendChild(actions);
      if (out) out.open = true;
      var more = row.querySelector('details.more');
      if (more) more.open = true;
    }
    var head = view.querySelector('.results-head, header');
    if (head && head.parentNode === view) view.insertBefore(box, head.nextSibling);
    else view.insertBefore(box, view.firstChild);
    return box;
  }

  /* One control above a table that opens or closes every fold in it. */
  function foldAll(table) {
    var b = el('button', 'fold-all', 'Show all details');
    b.type = 'button';
    function folds() { return Array.prototype.slice.call(table.querySelectorAll('details.more')); }
    function label() {
      var all = folds();
      b.textContent = T(all.length && all.every(function (d) { return d.open; }) ? 'Hide all details' : 'Show all details');
    }
    b.addEventListener('click', function () {
      var open = folds().some(function (d) { return !d.open; });
      folds().forEach(function (d) { d.open = open; });
      label();
    });
    table.addEventListener('toggle', label, true);
    return b;
  }

  /* A printed or saved page should carry everything, folded or not; the
   * folds go back to how they were afterwards. */
  var printOpened = [], printedPlan = false;
  if (window.addEventListener) {
    window.addEventListener('beforeprint', function () {
      /* Printing a results page any way at all prints the plan. */
      var html = document.documentElement, build = currentPlan();
      if (build && !html.classList.contains('print-plan')) {
        planDoc(build());
        html.classList.add('print-plan');
        printedPlan = true;
        return;
      }
      printOpened = Array.prototype.filter.call(document.querySelectorAll('details.more'), function (d) {
        if (d.open) return false;
        d.open = true;
        return true;
      });
    });
    window.addEventListener('afterprint', function () {
      if (printedPlan) { document.documentElement.classList.remove('print-plan'); printedPlan = false; }
      printOpened.forEach(function (d) { d.open = false; });
      printOpened = [];
    });
  }

  return {
    fold: fold,
    foldAll: foldAll,
    openCount: openCount,
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
    shareImage: shareImage,
    jumpBar: jumpBar,
    outList: outList,
    fmtDate: fmtDate,
    picked: picked,
    pickedBanner: pickedBanner,
    pickedResults: pickedResults,
    STALE_DAYS: STALE_DAYS
  };
}());
