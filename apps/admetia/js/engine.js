/* ---------------------------------------------------------------------------
 * Wizard runtime, shared by the MBA and master's calculators.
 *
 * A model supplies `steps`, each with `groups`. A group is one of:
 *   radio    — one selection; options may be split under sub-headings via `groupsOf`
 *   checkbox — independent ticks, each option keyed by its own id
 *   number   — a numeric field, optionally with a searchable picker
 *
 * Answers are a flat object: radios store answers[groupId] = optionId,
 * checkboxes store answers[optionId] = true, numbers store answers[groupId].
 * ------------------------------------------------------------------------- */

window.Wizard = (function () {
  'use strict';

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined) n.textContent = text;
    return n;
  }

  /* Steps are the parts of the questionnaire, numbered like a printed form. */
  function roman(n) {
    return ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'][n] || String(n);
  }

  /* Newspaper style: one to nine in words, 10 and up in figures. */
  var WORDS = ['none', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  function words(n) { return WORDS[n] || String(n); }

  function create(cfg) {
    var model = cfg.model;
    var steps = model.steps;
    var answers = Object.assign({}, Store.load(cfg.key));
    var current = 0;
    var furthest = 0;          // highest step index the person has moved past
    var skipNote = null;

    var mount = document.querySelector(cfg.mount);
    var navEl = document.querySelector(cfg.nav);
    var barEl = document.querySelector(cfg.progress);
    var chipEl = cfg.chip ? document.querySelector(cfg.chip) : null;

    if (navEl) navEl.setAttribute('aria-label', 'Steps');
    if (barEl && barEl.parentNode) {
      barEl.parentNode.setAttribute('role', 'progressbar');
      barEl.parentNode.setAttribute('aria-label', 'Main questions answered');
      barEl.parentNode.setAttribute('aria-valuemin', '0');
      barEl.parentNode.setAttribute('aria-valuemax', '100');
    }

    /* ------------------------------------------------------------------ */

    function persist() { Store.save(cfg.key, answers); }

    function refreshMeta() {
      var pct = cfg.completeness(answers);
      if (barEl) {
        barEl.style.width = pct + '%';
        if (barEl.parentNode) barEl.parentNode.setAttribute('aria-valuenow', String(pct));
      }
      if (chipEl) drawChip(cfg.chipValue(answers));
      if (navEl) {
        Array.prototype.forEach.call(navEl.children, function (b, i) {
          var gaps = i !== current && i <= furthest ? missingIn(i).length : 0;
          b.className = (i === current ? 'current' : (isStepTouched(i) ? 'done' : '')) +
            (gaps ? ' missing' : '');
          if (i === current) b.setAttribute('aria-current', 'step');
          else b.removeAttribute('aria-current');
          b.setAttribute('aria-label', b.textContent +
            (gaps ? ' — ' + gaps + ' unanswered' : ''));
        });
      }
      drawSkipped();
    }

    /* The running score, updated as each box is filled: the value, and for a
     * moment after a change, by how much it moved. On phones the same figure
     * is repeated in the Back / Next bar pinned to the bottom of the screen,
     * because the score beside the contents has scrolled away by then. */
    var chipShown = null, deltaTimer = null;
    function drawChip(value) {
      var n = parseFloat(value);
      var moved = chipShown !== null && !isNaN(n) && Math.abs(n - chipShown) >= 0.05
        ? Math.round((n - chipShown) * 10) / 10 : 0;
      chipShown = isNaN(n) ? null : n;
      chipEl.textContent = value;
      mount.querySelectorAll('.bar-score .n').forEach(function (b) { b.textContent = value; });

      var box = chipEl.parentNode;
      var delta = box.querySelector('.delta');
      if (moved && delta) {
        delta.textContent = (moved > 0 ? '+' : '−') + Math.abs(moved);
        delta.className = 'delta ' + (moved > 0 ? 'up' : 'down');
        box.classList.remove('bump');
        void box.offsetWidth;            // restart the animation
        box.classList.add('bump');
        clearTimeout(deltaTimer);
        deltaTimer = setTimeout(function () { delta.className = 'delta'; }, 1600);
      }
      box.setAttribute('aria-label', 'Score so far: ' + value + ' ' +
        ((box.querySelector('.k') || {}).textContent || ''));
    }

    /* Main questions left empty: everything that is not optional, and not a
     * checkbox list (where no tick is a real answer). The same rule the
     * completeness bar uses. */
    function isAnswered(g) {
      if (g.type === 'number') return answers[g.id] !== undefined && answers[g.id] !== '';
      return !!answers[g.id];
    }
    function missingIn(i) {
      return steps[i].groups.filter(function (g) {
        return !g.optional && g.type !== 'checkbox' && g.type !== 'custom' && !isAnswered(g);
      });
    }
    function missingSteps() {
      var out = [];
      steps.forEach(function (s, i) {
        var n = missingIn(i).length;
        if (n) out.push({ index: i, count: n });
      });
      return out;
    }

    /* On the last step, say what was skipped and offer a way back to it.
     * Never blocks: an estimate from a partial file is still useful. */
    function drawSkipped() {
      if (!skipNote) return;
      var gaps = missingSteps();
      skipNote.innerHTML = '';
      skipNote.hidden = !gaps.length;
      if (!gaps.length) return;
      var total = gaps.reduce(function (t, g) { return t + g.count; }, 0);
      skipNote.appendChild(el('strong', null, total === 1
        ? '1 question is still unanswered.'
        : total + ' questions are still unanswered.'));
      skipNote.appendChild(document.createTextNode(
        ' You can see results now, but they will be less accurate.'));
      var links = el('div', 'skip-links');
      gaps.forEach(function (g) {
        var b = el('button', 'btn small', 'Go to ' + (g.index + 1) + '. ' + steps[g.index].title);
        b.type = 'button';
        b.addEventListener('click', function () { go(g.index); });
        links.appendChild(b);
      });
      skipNote.appendChild(links);
    }

    function isStepTouched(i) {
      return steps[i].groups.some(function (g) {
        if (g.type === 'checkbox') return (g.options || []).some(function (o) { return answers[o.id]; });
        if (g.type === 'number') return answers[g.id] !== undefined && answers[g.id] !== '';
        return !!answers[g.id];
      });
    }

    function set(k, v) {
      if (v === undefined || v === null || v === '') delete answers[k];
      else answers[k] = v;
      persist();
      refreshMeta();
      if (cfg.onChange) cfg.onChange(answers);
    }

    /* ------------------------------------------------------------------ */
    /* Rendering                                                           */
    /* ------------------------------------------------------------------ */

    /* Re-syncing the existing inputs is preferable to re-rendering the step:
     * it keeps scroll position, and keeps element identity stable. */
    var syncers = [];
    function syncAll() { syncers.forEach(function (fn) { fn(); }); }

    function optionNode(group, opt, kind) {
      var isCheck = kind === 'checkbox';
      var compact = group.layout === 'grid';
      var label = el('label', 'opt' + (isCheck ? ' check' : '') + (compact ? ' compact' : ''));

      var input = document.createElement('input');
      input.type = isCheck ? 'checkbox' : 'radio';
      input.name = group.id;
      input.value = opt.id;

      var mark = el('span', 'mark');
      var body = el('span', 'body');
      body.appendChild(document.createTextNode(opt.label || ''));
      if (opt.note) body.appendChild(el('small', 'note', opt.note));

      label.appendChild(input);
      label.appendChild(mark);
      label.appendChild(body);

      function sync() {
        var on = isCheck ? answers[opt.id] === true : answers[group.id] === opt.id;
        input.checked = !!on;
        label.classList.toggle('on', !!on);

        /* An option can depend on another answer: "managed more in the past"
         * only becomes available once a current management level is chosen. */
        if (opt.requires) {
          var chosen = answers[opt.requires.group];
          var ok = !!chosen && steps.some(function (s) {
            return s.groups.some(function (g) {
              return g.id === opt.requires.group && (g.options || []).some(function (o) {
                return o.id === chosen && o.tag === opt.requires.tag;
              });
            });
          });
          label.classList.toggle('disabled', !ok);
          input.disabled = !ok;
          if (!ok && answers[opt.id]) { delete answers[opt.id]; persist(); }
        }
      }

      /* Drive off the input's own change event rather than intercepting the
       * label click. A real pointer click on a label wrapping an input fires
       * twice — once on the clicked child and once via label activation — and
       * a toggle written against the click would cancel itself out. */
      input.addEventListener('change', function () {
        if (isCheck) set(opt.id, input.checked ? true : undefined);
        else if (input.checked) set(group.id, opt.id);
        syncAll();
      });

      syncers.push(sync);
      sync();
      return label;
    }

    function companyPicker(group) {
      var wrap = el('div');
      var search = document.createElement('input');
      search.type = 'search';
      search.placeholder = 'Search employers…';
      var row = el('div', 'numrow');

      var num = document.createElement('input');
      num.type = 'number';
      num.min = group.min; num.max = group.max; num.step = group.step;
      num.value = answers[group.id] !== undefined ? answers[group.id] : '';
      num.addEventListener('input', function () {
        var v = num.value === '' ? undefined : Math.max(group.min, Math.min(group.max, parseFloat(num.value)));
        set(group.id, v);
      });

      row.appendChild(search);
      row.appendChild(num);
      wrap.appendChild(row);

      var results = el('div', 'company-results');
      wrap.appendChild(results);

      function draw(q) {
        results.innerHTML = '';
        if (!q || q.length < 2) return;
        var needle = q.toLowerCase(), hits = [];
        (window.MBA_COMPANIES || []).forEach(function (grp) {
          grp.items.forEach(function (c) {
            if (c.name.toLowerCase().indexOf(needle) !== -1) hits.push({ c: c, g: grp.group });
          });
        });
        if (!hits.length) {
          results.appendChild(el('div', 'company-empty',
            'No match. Employers outside the published list score 0 here.'));
          return;
        }
        hits.slice(0, 12).forEach(function (h) {
          var r = el('div', 'company-row');
          var left = el('span');
          left.appendChild(document.createTextNode(h.c.name));
          r.appendChild(left);
          r.appendChild(el('span', 'pts', String(h.c.pts)));
          r.addEventListener('click', function () {
            num.value = h.c.pts;
            set(group.id, h.c.pts);
            search.value = '';
            results.innerHTML = '';
          });
          results.appendChild(r);
        });
      }
      search.addEventListener('input', function () { draw(search.value.trim()); });
      return wrap;
    }

    /* A collapsed <details> disclosure listing real companies, so a person can
     * place their own employer by comparison instead of guessing blind. */
    function examplesNode(examples) {
      var det = document.createElement('details');
      det.className = 'examples';
      det.appendChild(el('summary', null, 'See some examples'));

      var body = el('div', 'ex-body');
      if (examples.intro) body.appendChild(el('p', 'ex-intro', examples.intro));

      (examples.sections || []).forEach(function (sec) {
        var wrap = el('div', 'ex-section');
        wrap.appendChild(el('h4', null, sec.heading));
        if (sec.kind === 'why') {
          var ul = el('ul', 'ex-why-list');
          sec.items.forEach(function (pair) {
            var li = document.createElement('li');
            li.appendChild(document.createTextNode(pair[0]));
            li.appendChild(el('span', 'ex-why', ' — ' + pair[1]));
            ul.appendChild(li);
          });
          wrap.appendChild(ul);
        } else {
          wrap.appendChild(el('p', null, sec.items.join(', ') + '.'));
        }
        body.appendChild(wrap);
      });

      if (examples.note) body.appendChild(el('p', 'ex-note', examples.note));
      det.appendChild(body);
      return det;
    }

    function groupNode(group, index) {
      var box = el('div', 'group');
      var h = el('h3');
      h.appendChild(el('span', 'qno', (current + 1) + '.' + (index + 1)));
      h.appendChild(document.createTextNode(group.label));
      if (group.optional) h.appendChild(el('span', 'optional-tag', 'optional'));
      box.appendChild(h);
      if (group.help) box.appendChild(el('p', 'help', group.help));
      if (group.examples) box.appendChild(examplesNode(group.examples));

      if (group.type === 'custom') {
        var renderer = (window.CustomGroups || {})[group.render];
        if (renderer) box.appendChild(renderer(group, answers, set));
        return box;
      }

      if (group.type === 'number') {
        box.appendChild(group.picker === 'companies' ? companyPicker(group) : (function () {
          var row = el('div', 'numrow');
          var num = document.createElement('input');
          num.type = 'number';
          num.min = group.min; num.max = group.max; num.step = group.step;
          num.value = answers[group.id] !== undefined ? answers[group.id] : '';
          num.addEventListener('input', function () {
            set(group.id, num.value === '' ? undefined : parseFloat(num.value));
          });
          row.appendChild(num);
          if (group.unit) row.appendChild(el('span', 'help', group.unit));
          return row;
        }()));
        return box;
      }

      var kind = group.type;
      var buckets = group.groupsOf;

      if (buckets) {
        buckets.forEach(function (b) {
          box.appendChild(el('div', 'subhead', b.heading));
          var list = el('div', 'options' + (group.layout === 'grid' ? ' grid' : ' stack'));
          group.options.filter(function (o) { return b.tag ? o.tag === b.tag : b.match.test(o.id); })
            .forEach(function (o) { list.appendChild(optionNode(group, o, kind)); });
          box.appendChild(list);
        });
      } else {
        var wide = group.options.some(function (o) { return (o.label || '').length > 34; });
        var cls = group.layout === 'grid' ? ' grid' : (wide || kind === 'checkbox' ? ' stack' : '');
        var list = el('div', 'options' + cls);
        group.options.forEach(function (o) { list.appendChild(optionNode(group, o, kind)); });
        box.appendChild(list);
      }

      /* Radios cannot be unset by clicking again, so optional groups need an
       * explicit way back to "no answer". */
      if (kind === 'radio' && group.optional) {
        var clear = el('button', 'clear-link', 'Clear this answer');
        function syncClear() { clear.hidden = !answers[group.id]; }
        clear.addEventListener('click', function () {
          set(group.id, undefined);
          var inputs = box.querySelectorAll('input[type="radio"]');
          Array.prototype.forEach.call(inputs, function (i) { i.checked = false; });
          syncAll();
        });
        syncers.push(syncClear);
        syncClear();
        box.appendChild(clear);
      }
      return box;
    }

    function renderStep() {
      var step = steps[current];
      mount.innerHTML = '';
      syncers = [];

      var head = el('div', 'step-head');
      head.appendChild(el('p', 'kicker', 'Part ' + roman(current + 1) + ' of ' + roman(steps.length)));
      var title = el('h1', null, step.title);
      title.tabIndex = -1;       // focus target when moving between steps
      head.appendChild(title);
      /* A drop cap only where there is enough text to wrap round it. */
      if (step.blurb) head.appendChild(el('p', step.blurb.length > 110 ? 'dropcap' : null, step.blurb));
      mount.appendChild(head);

      step.groups.forEach(function (g, i) { mount.appendChild(groupNode(g, i)); });

      skipNote = null;
      if (current === steps.length - 1) {
        skipNote = el('div', 'note-card warn skipped');
        mount.appendChild(skipNote);
      }

      var actions = el('div', 'actions');
      if (current > 0) {
        var back = el('button', 'btn', '← Back');
        back.addEventListener('click', function () { go(current - 1); });
        actions.appendChild(back);
      }
      actions.appendChild(el('span', 'spacer'));

      /* "answers" drops out on narrow screens, where the bar is pinned to the
       * bottom of the screen and has to fit three buttons in one row. */
      var reset = el('button', 'btn ghost reset', 'Reset');
      reset.appendChild(el('span', 'long', ' answers'));
      reset.addEventListener('click', function () {
        if (!confirm('Clear every answer and start over?')) return;
        answers = {}; furthest = 0; Store.clear(cfg.key); go(0);
        if (cfg.onChange) cfg.onChange(answers);
      });
      actions.appendChild(reset);

      if (chipEl) {
        var mini = el('span', 'bar-score');
        mini.setAttribute('aria-hidden', 'true');   // the full score box is the one read out
        mini.appendChild(el('span', 'k', 'Score'));
        mini.appendChild(el('span', 'n', chipEl.textContent));
        actions.appendChild(mini);
      }

      var next = el('button', 'btn primary',
        current === steps.length - 1 ? 'See results →' : 'Next →');
      next.addEventListener('click', function () {
        if (current === steps.length - 1) cfg.onFinish(answers);
        else go(current + 1);
      });
      actions.appendChild(next);

      mount.appendChild(actions);
      refreshMeta();
      centreCurrentStep();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    /* On phones the step menu is one row that scrolls sideways; keep the
     * current step in view. Adjusts only the row, never the page. */
    function centreCurrentStep() {
      var b = navEl && navEl.children[current];
      if (!b || navEl.scrollWidth <= navEl.clientWidth) return;
      var nr = navEl.getBoundingClientRect(), br = b.getBoundingClientRect();
      navEl.scrollLeft += (br.left - nr.left) - (nr.width - br.width) / 2;
    }

    function go(i) {
      furthest = Math.max(furthest, current);
      current = Math.max(0, Math.min(steps.length - 1, i));
      renderStep();
      var h = mount.querySelector('.step-head h1');
      if (h) h.focus({ preventScroll: true });
    }

    function buildNav() {
      if (!navEl) return;
      navEl.innerHTML = '';
      steps.forEach(function (s, i) {
        var b = el('button');
        b.appendChild(el('span', 'n', roman(i + 1) + '.'));
        b.appendChild(document.createTextNode(' ' + s.title));
        b.addEventListener('click', function () { go(i); });
        navEl.appendChild(b);
      });
    }

    buildNav();
    renderStep();

    return {
      answers: function () { return answers; },
      /* Write several answers at once — the results page's what-if panel,
       * when you choose to keep what you tried. */
      update: function (patch) {
        Object.keys(patch).forEach(function (k) {
          var v = patch[k];
          if (v === undefined || v === null || v === '') delete answers[k];
          else answers[k] = v;
        });
        persist();
        refreshMeta();
        if (cfg.onChange) cfg.onChange(answers);
      },
      go: go,
      refresh: refreshMeta,
      firstMissingStep: function () {
        var gaps = missingSteps();
        return gaps.length ? gaps[0].index : 0;
      }
    };
  }

  /* Shown at the top of a results page when main questions were skipped.
   * `pct` is the page's own completeness figure; `onEdit` returns to the
   * wizard. Returns null when there is nothing to warn about. */
  function incompleteNote(pct, onEdit) {
    if (pct >= 100) return null;
    var box = el('div', 'note-card warn incomplete');
    box.appendChild(el('strong', null, pct < 30
      ? 'You have answered very little so far.'
      : 'Some main questions are still unanswered.'));
    box.appendChild(document.createTextNode(
      ' You have answered ' + pct + '% of the main questions. A missing answer usually scores nothing, ' +
      'and an entry rule that depends on it cannot be checked — so treat these results ' +
      'as a rough first look.'));
    var row = el('div', 'skip-links');
    var b = el('button', 'btn small', '← Answer the rest');
    b.type = 'button';
    b.addEventListener('click', onEdit);
    row.appendChild(b);
    box.appendChild(row);
    return box;
  }

  /* The header of a calculator page: kicker, a headline with one emphasised
   * word (`title` is [before, emphasised, after]), standfirst, and the track's
   * photograph with its credit. */
  function sectionHead(kicker, title, standfirst, shot) {
    var head = el('header', 'sec-head');
    var text = el('div', 'sec-text');
    text.appendChild(el('p', 'kicker', kicker));
    var h = el('h1', 'headline');
    h.appendChild(document.createTextNode(title[0]));
    h.appendChild(el('em', null, title[1]));
    h.appendChild(document.createTextNode(title[2]));
    text.appendChild(h);
    text.appendChild(el('p', 'standfirst', standfirst));
    head.appendChild(text);
    if (shot) {
      var fig = el('figure', 'photo');
      var plate = el('span', 'plate');
      var pic = document.createElement('picture');
      /* Phones hide this photo (css/app.css, max-width: 640px); an empty
       * source there keeps them from downloading it anyway. */
      var none = document.createElement('source');
      none.media = '(max-width: 640px)';
      none.srcset = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
      pic.appendChild(none);
      /* Sized WebP variants from tools/build-images.sh; the JPEG stays as
       * the fallback. */
      var base = shot.src.replace(/\.jpg$/, '');
      var source = document.createElement('source');
      source.type = 'image/webp';
      source.srcset = [480, 800, 1240].map(function (w) { return base + '-' + w + '.webp ' + w + 'w'; }).join(', ');
      source.sizes = '(max-width: 900px) 100vw, 620px';
      pic.appendChild(source);
      var img = document.createElement('img');
      img.src = shot.src;
      img.width = shot.w; img.height = shot.h;
      img.alt = shot.alt;
      img.setAttribute('fetchpriority', 'high');
      pic.appendChild(img);
      plate.appendChild(pic);
      fig.appendChild(plate);
      head.appendChild(fig);
    }
    return head;
  }

  /* The headline over a results page: a kicker, one sentence that says what
   * happened, and a standfirst with the numbers behind it. */
  function resultsHead(kicker, title, standfirst) {
    var head = el('header', 'res-head reveal');
    head.appendChild(el('p', 'kicker', kicker));
    head.appendChild(el('h1', 'headline', title));
    if (standfirst) head.appendChild(el('p', 'standfirst', standfirst));
    return head;
  }

  /* Split an ordered list of result rows into runs that share a verdict, so a
   * table can print a heading over each run. Returns null when the rows are
   * not grouped that way — a heading would then repeat. */
  function verdictRuns(rows, labelOf) {
    var runs = [];
    rows.forEach(function (r) {
      var label = labelOf(r);
      var last = runs[runs.length - 1];
      if (last && last.label === label) last.rows.push(r);
      else runs.push({ label: label, rows: [r] });
    });
    var seen = {};
    for (var i = 0; i < runs.length; i++) {
      if (seen[runs[i].label]) return null;
      seen[runs[i].label] = true;
    }
    return runs;
  }

  return {
    create: create, el: el, incompleteNote: incompleteNote,
    words: words, sectionHead: sectionHead, resultsHead: resultsHead, verdictRuns: verdictRuns
  };
}());
