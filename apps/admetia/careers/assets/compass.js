/* ---------------------------------------------------------------------------
 * Career Compass: the questionnaire and the results page.
 *
 * Reads window.COMPASS_DATA (careers/data/compass-data.js, built by
 * `npm run careers`) and scores with CompassCore (compass-core.js). Nothing
 * is sent anywhere: answers live in this page, in localStorage so a reader
 * can come back, and in the address after "#" when they choose to share.
 *
 * Every sentence the results show is either the reader's own answer echoed
 * back or a passage quoted from research/*.md with its file named. There
 * are no personality labels and no adjectives about the reader.
 * ------------------------------------------------------------------------- */

(function () {
  'use strict';

  var D = window.COMPASS_DATA, K = window.CompassCore;
  var app = document.querySelector('[data-cc-app]');
  if (!app || !D || !K) return;

  var KEY = 'admetia:compass';
  function T(s, v) { return window.I18N ? I18N.t(s, v) : String(s).replace(/\{(\w+)\}/g, function (m, k) { return v && v[k] !== undefined ? v[k] : m; }); }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined && text !== null) e.textContent = text;
    return e;
  }
  /* Research HTML is built from this repository's own files at build time. */
  function rich(tag, cls, html) {
    var e = el(tag, cls);
    e.innerHTML = html;
    e.setAttribute('translate', 'no');
    e.setAttribute('lang', 'en');
    return e;
  }
  function en(text, tag) {
    var e = el(tag || 'span', null, text);
    e.setAttribute('translate', 'no');
    return e;
  }
  function has(a, x) { return !!a && a.indexOf(x) > -1; }
  function byId(id) { for (var i = 0; i < D.roles.length; i++) if (D.roles[i].id === id) return D.roles[i]; return null; }
  function field(slug) { for (var i = 0; i < D.fields.length; i++) if (D.fields[i].slug === slug) return D.fields[i]; return null; }
  function bgName(key) { for (var i = 0; i < D.backgrounds.length; i++) if (D.backgrounds[i].key === key) return D.backgrounds[i].name; return key; }
  function range(r) { return r[0] === r[1] ? String(r[0]) : r[0] + '–' + r[1]; }

  /* ------------------------------------------------------------ questions */

  function scale(kind) {
    return {
      people: [[1, T('Mostly solo work')], [2, T('Mostly solo, with some teamwork')], [3, T('Regular team and stakeholder contact')], [4, T('A lot of client or team contact')], [5, T('The job is mainly relationships and persuasion')]],
      quant: [[1, T('Basic numeracy')], [2, T('Comfortable with spreadsheets')], [3, T('Solid spreadsheets, modelling or statistics, some scripting')], [4, T('Strong statistics or programming')], [5, T('Advanced maths, statistics or programming is the job')]],
      stress: [[1, T('Low, predictable deadlines')], [2, T('Occasional crunch')], [3, T('Regular deadlines and steady pressure')], [4, T('Frequent high-stakes pressure')], [5, T('Sustained extreme pressure')]],
      diff: [[1, T('Many openings, open to most graduates')], [2, T('Some competition')], [3, T('Competitive: needs a relevant internship or skills')], [4, T('Very competitive')], [5, T('Extremely selective: low single-digit acceptance rates')]]
    }[kind];
  }

  function questions() {
    var acts = [
      ['build', T('Build software and systems'), T('back ends, apps, data pipelines')],
      ['data', T('Analyse data to answer business questions'), T('SQL, dashboards, experiments')],
      ['quant', T('Build models with maths, statistics or code'), T('pricing, forecasting, machine learning')],
      ['protect', T('Protect systems and investigate incidents'), T('security monitoring, forensics')],
      ['advise', T('Advise clients on their problems'), T('consulting, advisory work')],
      ['deals', T('Negotiate, structure and close deals'), T('M&A, financing, buying')],
      ['invest', T('Judge markets and pick investments'), T('trading, asset management')],
      ['sell', T('Persuade, sell and win customers'), T('sales, client relationships')],
      ['create', T('Create brands, products and campaigns'), T('marketing, product design')],
      ['operate', T('Plan operations and make things run'), T('supply chains, projects, programmes')],
      ['check', T('Check, audit and report numbers or rules'), T('audit, controlling, compliance')],
      ['research', T('Research and write about economies, markets or policy'), T('economics, research, policy')],
      ['people', T('Lead and develop people'), T('HR, managing teams')]
    ];
    return [
      { id: 'bg', part: 0, quick: true, type: 'many', max: 2, q: T('What did you study, or are you studying?'),
        sub: T('Up to two, for a double degree.'),
        help: T('The research rates eleven degree backgrounds as a strong, possible or stretch fit for every role (research/branches/index.md, section 3). Other degrees are not rated, so they do not move your scores.'),
        opts: D.backgrounds.map(function (b) { return [b.key, b.name, null, true]; }).concat([
          ['eng', T('Engineering, maths or physics')], ['sci', T('Natural or life sciences')], ['hum', T('Humanities, law or social sciences')], ['oth', T('Something else')]]) },
      { id: 'stage', part: 0, quick: true, type: 'one', q: T('Where are you now?'),
        help: T('Graduate schemes and pre-experience master’s count their windows from your graduation date, so the right next step depends on where you are (decisions/decision-framework.md).'),
        opts: [['y12', T('Bachelor’s, first or second year')], ['final', T('Bachelor’s, final year')], ['master', T('In a master’s')], ['grad', T('Graduated less than two years ago')], ['work', T('Working, two years or more')]] },
      { id: 'cit', part: 0, type: 'one', q: T('Your citizenship'),
        help: T('Citizenship and languages prune more options than anything else: since Brexit an EU citizen needs a UK visa like anyone else (decisions/decision-framework.md, step 0).'),
        opts: [['eu', T('EU, EEA or Swiss')], ['uk', T('United Kingdom')], ['us', T('United States')], ['other', T('Another country')]] },
      { id: 'langs', part: 0, type: 'many', q: T('Languages you speak at B2/C1 or better'),
        help: T('Only 2–3% of German job postings waive German, and German-speaking strategy consulting treats fluent German as mandatory (decisions/decision-framework.md).'),
        opts: [['en', T('English')], ['de', T('German')], ['fr', T('French')], ['it', T('Italian')], ['es', T('Spanish')], ['pt', T('Portuguese')], ['nl', T('Dutch')], ['nordic', T('A Nordic language')]] },
      { id: 'where', part: 0, type: 'many', max: 3, q: T('Where would you like to start working?'),
        sub: T('Up to three.'),
        help: T('The research’s advice is to choose the country you want to work in first, then study there or in a school that feeds it (decisions/decision-framework.md, step 2).'),
        opts: [['uk', T('United Kingdom')], ['dach', T('Germany, Austria or Switzerland')], ['fr', T('France')], ['it', T('Italy')], ['benelux', T('Belgium, Netherlands or Luxembourg')], ['nordics', T('Nordic countries')], ['iberia', T('Spain or Portugal')], ['us', T('United States')], ['gulfasia', T('The Gulf or Asia')], ['open', T('Open, or I don’t know yet')]] },

      { id: 'act', part: 1, quick: true, type: 'many', max: 4, q: T('Which of these would you most enjoy spending your days on?'),
        sub: T('Pick up to four. This counts most.'),
        help: T('Interest is the best starting point for a shortlist; skills and credentials decide whether you can get in, and the later questions cover those.'),
        opts: acts },
      { id: 'avoid', part: 1, quick: true, type: 'one', q: T('And one you would rather avoid?'),
        help: T('A role whose core is something you would rather avoid moves down the list; it is never removed.'),
        opts: [[null, T('Nothing in particular')]].concat(acts.map(function (a) { return [a[0], a[1]]; })) },

      { id: 'people', part: 2, quick: true, type: 'one', q: T('How much of the job should be about people?'),
        help: T('The research scores every role from 1 (mostly solo) to 5 (the job is mainly relationships, persuasion and client work).'),
        opts: scale('people') },
      { id: 'quant', part: 2, quick: true, type: 'one', q: T('How technical should it be?'),
        help: T('Scored 1 (basic numeracy) to 5 (advanced maths, statistics or programming is the core of the job). A role more technical than you want costs more than one less technical.'),
        opts: scale('quant') },
      { id: 'hours', part: 2, quick: true, type: 'one', q: T('What working week would you accept for the first three years?'),
        help: T('Hours are the researchers’ estimates from practitioner accounts; no systematic hours survey by role exists (research/branches/index.md, section 6).'),
        opts: [[40, T('About 40 hours')], [50, T('About 50 hours')], [60, T('About 60 hours')], [75, T('70 hours or more')]] },
      { id: 'stress', part: 2, type: 'one', q: T('The most pressure you would accept'),
        help: T('Only roles above what you accept lose points; a calmer role never does.'),
        opts: scale('stress') },
      { id: 'diff', part: 2, type: 'one', q: T('How competitive a door are you ready to try?'),
        help: T('Entry difficulty is scored 1 to 5. A hard door is not a reason to skip a role: the results pair each one with a door that is still open.'),
        opts: scale('diff') },

      { id: 'prio', part: 3, quick: true, type: 'many', max: 2, q: T('What matters most to you?'),
        sub: T('Pick two.'),
        help: T('Pay, upside, exits and stability are our reading of each role’s research page, on a three-step scale; time for a life outside work comes from the role’s hours and stress scores.'),
        opts: [['pay', T('A high starting salary')], ['upside', T('High pay in the long run')], ['balance', T('Time for a life outside work')], ['exits', T('Learning, and options to move later')], ['stability', T('A stable way in')], ['mission', T('Public impact or a mission')], ['creativity', T('Making things: creative work')]] },
      { id: 'study', part: 3, type: 'many', q: T('More study you would consider'),
        help: T('Some roles are rarely a first job without a PhD; others train you for a qualification on the job.'),
        opts: [['master', T('A master’s')], ['phd', T('A PhD')], ['qual', T('A professional qualification (ACA/ACCA, CPA, CFA)')], ['none', T('No more study')]] },
      { id: 'org', part: 3, type: 'many', max: 2, q: T('What kind of employer would you enjoy?'),
        sub: T('Up to two.'),
        help: T('Each field’s report compares its employer types (banks, consultancies, companies, public bodies); each role is tagged with where it mostly sits.'),
        opts: [['bank', T('A bank, fund or financial firm')], ['consult', T('A consulting or professional-services firm')], ['corp', T('A large company')], ['tech', T('A tech company')], ['startup', T('A startup')], ['public', T('The public sector or an international organisation')], ['agency', T('An agency or boutique')], ['lab', T('A university or research lab')], ['any', T('No preference')]] },
      { id: 'sec', part: 3, type: 'many', q: T('Any sectors that attract you?'),
        sub: T('Optional.'),
        help: T('Sector research that is not in the role pages: pharma, luxury, commodities, industry and defence, public policy, tech business, and a few smaller sectors (research/careers/).'),
        opts: [['pharma', T('Pharma and health')], ['luxury', T('Luxury and fashion')], ['energy', T('Energy and commodities')], ['industrial', T('Industry, automotive and defence')], ['public', T('Public sector and EU institutions')], ['tech', T('Tech and startups')], ['sports', T('Sports and gaming')], ['realestate', T('Real estate')], ['sustainability', T('Sustainability and climate')]] },
      { id: 'ai', part: 3, type: 'one', q: T('How much does AI pressure on junior hiring worry you?'),
        help: T('Junior hiring is falling in the most AI-exposed jobs, not wages, and not yet whole professions (evidence/trends.md).'),
        opts: [['low', T('Not much')], ['some', T('Somewhat')], ['high', T('A lot')]] }
    ];
  }

  function parts() {
    return [
      { title: T('Where you start'), lead: T('Constraints first: they prune more options than preferences do.') },
      { title: T('What you would enjoy doing'), lead: T('The activities behind each job, not the job titles.') },
      { title: T('How you want to work'), lead: T('People, technical depth, hours, pressure and competition, on the research’s own scales.') },
      { title: T('What matters, and what next'), lead: T('Motives, more study, employers and sectors.') }
    ];
  }

  /* ---------------------------------------------------------------- state */

  var S = { mode: null, step: 0, ans: {}, view: 'intro' };

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify({ mode: S.mode, step: S.step, ans: S.ans, view: S.view })); } catch (e) { /* private mode */ }
  }
  function load() {
    try { var s = JSON.parse(localStorage.getItem(KEY) || 'null'); return s && s.ans ? s : null; } catch (e) { return null; }
  }

  /* The share link: plain words after "#", so a reader can see what it holds. */
  var LIST = ['bg', 'langs', 'where', 'act', 'prio', 'study', 'org', 'sec', 'liked', 'disliked'];
  var NUM = ['people', 'quant', 'hours', 'stress', 'diff'];
  function encode() {
    var out = ['m=' + (S.mode === 'quick' ? 'q' : 'f')];
    Object.keys(S.ans).forEach(function (k) {
      var v = S.ans[k];
      if (v === undefined || v === null || (Array.isArray(v) && !v.length)) return;
      out.push(k + '=' + encodeURIComponent(Array.isArray(v) ? v.join(',') : String(v)));
    });
    return out.join(';');
  }
  function decode(hash) {
    var ans = {}, mode = null;
    hash.replace(/^#/, '').split(';').forEach(function (kv) {
      var i = kv.indexOf('=');
      if (i < 1) return;
      var k = kv.slice(0, i), v = decodeURIComponent(kv.slice(i + 1));
      if (k === 'm') { mode = v === 'q' ? 'quick' : 'full'; return; }
      if (has(LIST, k)) ans[k] = v.split(',').filter(Boolean);
      else if (has(NUM, k)) ans[k] = Number(v);
      else if (['stage', 'cit', 'avoid', 'ai'].indexOf(k) > -1) ans[k] = v;
    });
    return mode ? { mode: mode, ans: ans } : null;
  }

  function visible() {
    var qs = questions();
    return S.mode === 'quick' ? qs.filter(function (q) { return q.quick; }) : qs;
  }
  function stepsInUse() {
    var used = [];
    visible().forEach(function (q) { if (!has(used, q.part)) used.push(q.part); });
    return used;
  }

  /* ---------------------------------------------------------------- intro */

  var intro = $('[data-cc-intro]', app);
  var stage = $('[data-cc-stage]', app);

  function start(mode) {
    S.mode = mode; S.step = 0; S.view = 'steps';
    if (!S.ans) S.ans = {};
    save();
    render();
  }

  function setupIntro() {
    $$('[data-cc-start]', intro).forEach(function (b) {
      b.hidden = false;
      b.addEventListener('click', function () { S.ans = {}; start(b.getAttribute('data-cc-start')); });
    });
    var saved = load();
    var bar = $('[data-cc-resume]', intro);
    if (saved && bar && Object.keys(saved.ans).length) {
      bar.hidden = false;
      $('[data-cc-resume-go]', bar).addEventListener('click', function () {
        S.mode = saved.mode || 'full'; S.ans = saved.ans; S.step = saved.step || 0;
        S.view = saved.view === 'results' ? 'results' : 'steps';
        render();
      });
      $('[data-cc-resume-clear]', bar).addEventListener('click', function () {
        try { localStorage.removeItem(KEY); } catch (e) { /* ignore */ }
        bar.hidden = true;
      });
    }
  }

  /* ---------------------------------------------------------------- steps */

  function optionEl(q, o) {
    var multi = q.type === 'many';
    var lab = el('label', 'opt' + (multi ? ' check' : ''));
    var input = el('input');
    input.type = multi ? 'checkbox' : 'radio';
    input.name = 'cc-' + q.id;
    input.value = o[0] === null ? '' : String(o[0]);
    var cur = S.ans[q.id];
    var on = multi ? has(cur, String(o[0])) : cur === o[0];
    input.checked = !!on;
    if (on) lab.classList.add('on');
    lab.appendChild(input);
    lab.appendChild(el('span', 'mark'));
    var body = el('span', 'body');
    if (o[3]) body.appendChild(en(o[1])); else body.appendChild(document.createTextNode(o[1]));
    if (o[2]) body.appendChild(el('span', 'note', o[2]));
    lab.appendChild(body);
    input.addEventListener('change', function () {
      if (multi) {
        var list = (S.ans[q.id] || []).slice();
        var v = String(o[0]);
        if (input.checked) {
          if (q.id === 'org' && v === 'any') list = [];
          if (q.id === 'org' && v !== 'any') list = list.filter(function (x) { return x !== 'any'; });
          if (q.id === 'study' && v === 'none') list = [];
          if (q.id === 'study' && v !== 'none') list = list.filter(function (x) { return x !== 'none'; });
          if (q.id === 'where' && v === 'open') list = [];
          if (q.id === 'where' && v !== 'open') list = list.filter(function (x) { return x !== 'open'; });
          if (list.indexOf(v) < 0) list.push(v);
          if (q.max && list.length > q.max) list = list.slice(list.length - q.max);
        } else list = list.filter(function (x) { return x !== v; });
        S.ans[q.id] = list;
      } else {
        S.ans[q.id] = o[0] === null ? null : o[0];
      }
      save();
      paintGroup(q);
    });
    return lab;
  }

  function paintGroup(q) {
    var g = $('[data-q="' + q.id + '"]', stage);
    if (!g) return;
    var cur = S.ans[q.id];
    $$('label.opt', g).forEach(function (lab) {
      var input = $('input', lab);
      var v = input.value;
      var on = q.type === 'many' ? has(cur, v) : (cur === null ? v === '' : cur !== undefined && String(cur) === v);
      input.checked = on;
      lab.classList.toggle('on', on);
    });
    var count = $('.cc-count', g);
    if (count && q.max) count.textContent = T('{n} of {max} chosen', { n: (cur || []).length, max: q.max });
    paintNotes();
  }

  /* Short notes under the constraint questions, as soon as they bite. */
  function paintNotes() {
    var box = $('[data-cc-live]', stage);
    if (!box) return;
    box.textContent = '';
    var a = S.ans;
    var visa = K.visaNeeds(a), gaps = K.langGaps(a);
    var names = whereNames();
    if (visa.length) box.appendChild(el('p', 'cc-live-note', T('You would need a visa or a sponsoring employer in: {places}.', { places: visa.map(function (w) { return names[w]; }).join(', ') })));
    if (a.cit === 'eu' && has(a.where, 'uk')) box.appendChild(el('p', 'cc-live-note', T('Since Brexit an EU citizen needs a UK visa, and from 1 January 2027 the Graduate visa lasts 18 months.')));
    if (gaps.length) box.appendChild(el('p', 'cc-live-note', T('No working language yet for: {places}. Roles where the local language is usually required will say so and move down.', { places: gaps.map(function (w) { return names[w]; }).join(', ') })));
    box.hidden = !box.childNodes.length;
  }

  function whereNames() {
    var q = questions().filter(function (x) { return x.id === 'where'; })[0];
    var m = {};
    q.opts.forEach(function (o) { m[o[0]] = o[1]; });
    return m;
  }

  function renderStep() {
    var used = stepsInUse();
    if (S.step >= used.length) S.step = used.length - 1;
    var part = used[S.step];
    var P = parts()[part];
    var qs = visible().filter(function (q) { return q.part === part; });
    var all = visible();
    stage.textContent = '';

    var prog = el('div', 'progress');
    var bar = el('i');
    bar.style.width = Math.round((S.step) / used.length * 100) + '%';
    prog.appendChild(bar);
    prog.setAttribute('role', 'progressbar');
    prog.setAttribute('aria-valuemin', '0');
    prog.setAttribute('aria-valuemax', String(used.length));
    prog.setAttribute('aria-valuenow', String(S.step));
    prog.setAttribute('aria-label', T('Progress'));
    stage.appendChild(prog);

    var head = el('header', 'step-head');
    head.appendChild(el('p', 'kicker', T('Part {n} of {total}', { n: S.step + 1, total: used.length }) + ' · ' + (S.mode === 'quick' ? T('Quick version') : T('Full version'))));
    var h = el('h2', 'cc-step-h', P.title);
    h.tabIndex = -1;
    head.appendChild(h);
    head.appendChild(el('p', null, P.lead));
    stage.appendChild(head);

    qs.forEach(function (q) {
      var g = el('fieldset', 'group cc-group');
      g.setAttribute('data-q', q.id);
      var lg = el('legend', 'visually-hidden', q.q);
      g.appendChild(lg);
      var h3 = el('h3');
      h3.setAttribute('aria-hidden', 'true');
      h3.appendChild(el('span', 'qno', String(all.map(function (x) { return x.id; }).indexOf(q.id) + 1)));
      h3.appendChild(document.createTextNode(q.q));
      if (q.max) h3.appendChild(el('span', 'optional-tag cc-count', T('{n} of {max} chosen', { n: (S.ans[q.id] || []).length, max: q.max })));
      g.appendChild(h3);
      if (q.sub) g.appendChild(el('p', 'subhead', q.sub));
      var opts = el('div', 'options');
      q.opts.forEach(function (o) { opts.appendChild(optionEl(q, o)); });
      g.appendChild(opts);
      var clear = el('button', 'clear-link', T('Clear this answer'));
      clear.type = 'button';
      clear.addEventListener('click', function () { delete S.ans[q.id]; save(); paintGroup(q); });
      g.appendChild(clear);
      g.appendChild(el('p', 'help', q.help));
      stage.appendChild(g);
    });

    if (part === 0) {
      var live = el('div', 'cc-live');
      live.setAttribute('data-cc-live', '');
      live.setAttribute('aria-live', 'polite');
      stage.appendChild(live);
      paintNotes();
    }

    var act = el('div', 'actions');
    var back = el('button', 'btn', S.step === 0 ? T('Back to the start') : T('Back'));
    back.type = 'button';
    back.addEventListener('click', function () {
      if (S.step === 0) { S.view = 'intro'; save(); render(); return; }
      S.step--; save(); render();
    });
    act.appendChild(back);
    act.appendChild(el('span', 'spacer'));
    var last = S.step === used.length - 1;
    var next = el('button', 'btn primary', last ? T('See my shortlist') : T('Next'));
    next.type = 'button';
    next.addEventListener('click', function () {
      if (last) { S.view = 'results'; save(); render(); return; }
      S.step++; save(); render();
    });
    act.appendChild(next);
    stage.appendChild(act);
    stage.appendChild(el('p', 'form-meta cc-skip-note', T('Every question can be skipped; a skipped answer counts as neutral.')));
    focusTop(h);
  }

  function focusTop(h) {
    try { h.focus({ preventScroll: true }); } catch (e) { h.focus(); }
    var top = app.getBoundingClientRect().top + window.pageYOffset - 12;
    if (window.pageYOffset > top) window.scrollTo(0, top);
  }

  /* -------------------------------------------------------------- results */

  var LABEL = function (k) { return { strong: T('Strong match'), good: T('Good match'), look: T('Worth a look'), weak: T('Weak match') }[k]; };
  var ACT = function (k) {
    var q = questions().filter(function (x) { return x.id === 'act'; })[0];
    for (var i = 0; i < q.opts.length; i++) if (q.opts[i][0] === k) return q.opts[i][1];
    return k;
  };
  var PRIO = function (k) {
    var q = questions().filter(function (x) { return x.id === 'prio'; })[0];
    for (var i = 0; i < q.opts.length; i++) if (q.opts[i][0] === k) return q.opts[i][1];
    return k;
  };
  var ORG = function (k) {
    var q = questions().filter(function (x) { return x.id === 'org'; })[0];
    for (var i = 0; i < q.opts.length; i++) if (q.opts[i][0] === k) return q.opts[i][1];
    return k;
  };
  var SEC = function (k) {
    var q = questions().filter(function (x) { return x.id === 'sec'; })[0];
    for (var i = 0; i < q.opts.length; i++) if (q.opts[i][0] === k) return q.opts[i][1];
    return k;
  };
  var HOURS = { 40: T('about 40'), 50: T('about 50'), 60: T('about 60'), 75: T('70 or more') };

  /* One line per reason, with its sign: what you said, and what the role is. */
  function reasonLines(role, why) {
    var out = [];
    why.forEach(function (w) {
      switch (w.k) {
        case 'act': out.push(['+', T('You picked: {list}', { list: w.v.map(ACT).join('; ') })]); break;
        case 'actNone': out.push(['−', T('None of the activities you picked is a main part of this role')]); break;
        case 'avoid': out.push(['−', w.core ? T('Its core is something you would rather avoid: {a}', { a: ACT(w.v) }) : T('Part of it is something you would rather avoid: {a}', { a: ACT(w.v) })]); break;
        case 'people': out.push(['−', T('People/communication {r}/5; you said {y}/5', { r: range(w.role), y: w.you })]); break;
        case 'quant': out.push(['−', T('Quantitative/technical {r}/5; you said {y}/5', { r: range(w.role), y: w.you })]); break;
        case 'hours': out.push(['−', T('Typical week {r} hours; you would accept {y}', { r: w.role, y: HOURS[w.you] })]); break;
        case 'stress': out.push(['−', T('Stress {r}/5; your limit is {y}/5', { r: range(w.role), y: w.you })]); break;
        case 'diff': out.push(['−', T('Entry difficulty {r}/5; you said up to {y}/5', { r: range(w.role), y: w.you })]); break;
        case 'bg':
          if (w.v === 'S') out.push(['+', T('{bg} is a standard feeder (strong fit)', { bg: bgName(w.bg) })]);
          else if (w.v === 'P') out.push(['·', T('{bg} is hired regularly with extra preparation (possible fit)', { bg: bgName(w.bg) })]);
          else out.push(['−', T('{bg} is a stretch: it needs a deliberate route', { bg: bgName(w.bg) })]);
          break;
        case 'prio': out.push([w.good ? '+' : '−', (w.good ? T('Scores high on what you said matters: {p}') : T('Scores low on what you said matters: {p}')).replace('{p}', PRIO(w.v))]); break;
        case 'org': out.push(['+', T('Mostly at the kind of employer you chose: {o}', { o: w.v.map(ORG).join('; ') })]); break;
        case 'lang': out.push(['−', T('The local language is usually required where you want to work')]); break;
        case 'langSome': break;
        case 'spons': out.push(['−', T('Employers of this kind rarely sponsor visas, and every place you chose would need one')]); break;
        case 'cit': out.push(w.strong ? ['−', T('Many posts require citizenship of the country or of the EU')] : ['·', T('Some posts require citizenship of the country')]); break;
        case 'sec': out.push(['+', T('In a sector you chose: {s}', { s: w.v.map(SEC).join('; ') })]); break;
        case 'ai': out.push(['−', w.v === 3 ? T('Junior work here is among the most exposed to AI') : T('Some junior work here is exposed to AI')]); break;
        case 'qual': out.push(['+', T('Trains you for a professional qualification on the job, which you said you would consider')]); break;
        case 'phdYes': out.push(['+', T('Needs a PhD, which you said you would consider')]); break;
        case 'phdNo': out.push(['−', T('Rarely open without a PhD')]); break;
        case 'liked': out.push(['+', T('Close to a role you marked “interested”')]); break;
        case 'disliked': out.push(['−', T('Close to a role you marked “not for me”')]); break;
      }
    });
    return out;
  }

  function bar(score) {
    var b = el('span', 'cc-bar');
    var i = el('i');
    i.style.width = score + '%';
    b.appendChild(i);
    b.setAttribute('aria-hidden', 'true');
    return b;
  }

  function pips(r) {
    var s = el('span', 'cx-pips');
    s.setAttribute('aria-hidden', 'true');
    for (var i = 1; i <= 5; i++) s.appendChild(el('i', i <= r[0] ? 'on' : i <= r[1] ? 'part' : ''));
    return s;
  }
  function mini(role) {
    var m = el('span', 'cx-mini');
    [['People', 'p'], ['Quant', 'q'], ['Stress', 'st'], ['Entry', 'd']].forEach(function (x) {
      var s = el('span');
      s.appendChild(el('abbr', null, T(x[0])));
      s.appendChild(document.createTextNode(' '));
      s.appendChild(pips(role.s[x[1]]));
      s.appendChild(el('b', null, range(role.s[x[1]])));
      m.appendChild(s);
    });
    var h = el('span', 'cc-hours');
    h.appendChild(el('abbr', null, T('Hours')));
    h.appendChild(document.createTextNode(' '));
    h.appendChild(en(role.hours, 'b'));
    m.appendChild(h);
    return m;
  }

  /* The research's own rows for this kind of job. */
  function facts(role) {
    var box = el('div', 'cc-facts');
    var dl = el('dl');
    function row(label, html, src) {
      dl.appendChild(el('dt', null, label));
      var dd = rich('dd', null, html);
      if (src) { var s = el('span', 'cc-src', ' · ' + src); s.setAttribute('translate', 'no'); dd.appendChild(s); }
      dl.appendChild(dd);
    }
    if (role.df) {
      var r = D.df[role.df];
      var head = el('p', 'cc-facts-h');
      head.appendChild(document.createTextNode(T('From the cross-career table, row') + ' '));
      head.appendChild(en('“' + r.name + '”', 'b'));
      head.appendChild(el('span', 'cc-src', ' · decisions/decision-framework.md'));
      box.appendChild(head);
      row(T('Main door'), r.cells.door);
      row(T('Language need'), r.cells.language);
      row(T('Visa-friendliness'), r.cells.visa);
      row(T('AI exposure of junior work'), r.cells.ai);
      row(T('Does a master’s help?'), r.cells.masters);
    }
    if (role.ms) {
      var m = D.ms[role.ms];
      var mh = el('p', 'cc-facts-h');
      mh.appendChild(document.createTextNode(T('Does a master’s change the outcome?') + ' '));
      mh.appendChild(en('“' + m.name + '”', 'b'));
      mh.appendChild(el('span', 'cc-src', ' · decisions/should-you-do-a-masters.md'));
      box.appendChild(mh);
      var dl2 = dl;
      dl = el('dl');
      row(T('Without a master’s'), m.without);
      row(T('What a master’s adds'), m.adds);
      row(T('Verdict'), m.verdict);
      box.insertBefore(dl2, mh);
    }
    box.appendChild(dl);
    var pay = el('p', 'cc-pay');
    pay.appendChild(el('b', null, T('Entry pay (approx.)') + ' '));
    pay.appendChild(rich('span', null, role.pay));
    pay.appendChild(el('span', 'cc-src', ' · research/branches/index.md'));
    box.appendChild(pay);
    return box;
  }

  function roleCard(x, rank, opts) {
    var role = byId(x.id);
    var li = el('li', 'cc-role' + (opts && opts.small ? ' small' : ''));
    li.setAttribute('data-id', role.id);
    var head = el('div', 'cc-role-head');
    if (rank) head.appendChild(el('span', 'cc-rank', String(rank)));
    var t = el('div', 'cc-role-t');
    var a = el('a', null);
    a.href = role.u;
    a.appendChild(en(role.t));
    t.appendChild(a);
    var f = el('span', 'cx-roleitem-f', role.fn);
    f.setAttribute('translate', 'no');
    t.appendChild(f);
    head.appendChild(t);
    var sc = el('div', 'cc-score');
    sc.appendChild(el('b', null, String(x.score)));
    sc.appendChild(el('span', 'cc-label cc-' + x.label, LABEL(x.label)));
    sc.appendChild(bar(x.score));
    head.appendChild(sc);
    li.appendChild(head);
    li.appendChild(mini(role));

    var lines = reasonLines(role, x.why);
    var plus = lines.filter(function (l) { return l[0] === '+'; }).slice(0, 3);
    var minus = lines.filter(function (l) { return l[0] === '−'; }).slice(0, 3);
    var neutral = lines.filter(function (l) { return l[0] === '·'; }).slice(0, 2);
    if (plus.length || minus.length || neutral.length) {
      var ul = el('ul', 'cc-why');
      plus.concat(neutral, minus).forEach(function (l) {
        var item = el('li', l[0] === '+' ? 'up' : l[0] === '−' ? 'down' : 'even');
        item.appendChild(el('span', 'cc-sign', l[0] === '·' ? '±' : l[0]));
        item.appendChild(document.createTextNode(l[1]));
        ul.appendChild(item);
      });
      li.appendChild(ul);
    }
    if (role.gateNote) li.appendChild(el('p', 'cc-gate', role.gateNote));
    if (role.note) li.appendChild(el('p', 'cc-gate', role.note));

    if (!(opts && opts.small)) {
      var det = el('details', 'cc-more');
      det.appendChild(el('summary', null, T('What the research says about this kind of job')));
      det.appendChild(facts(role));
      li.appendChild(det);

      var tools = el('div', 'cc-react');
      var liked = has(S.ans.liked, role.id), disliked = has(S.ans.disliked, role.id);
      var up = el('button', 'btn small' + (liked ? ' primary' : ''), liked ? T('Interested ✓') : T('Interested'));
      up.type = 'button';
      up.setAttribute('aria-pressed', liked ? 'true' : 'false');
      up.addEventListener('click', function () { react(role.id, 'liked'); });
      var down = el('button', 'btn small ghost', T('Not for me'));
      down.type = 'button';
      down.addEventListener('click', function () { react(role.id, 'disliked'); });
      tools.appendChild(up);
      tools.appendChild(down);
      li.appendChild(tools);
    }
    return li;
  }

  function react(id, kind) {
    var other = kind === 'liked' ? 'disliked' : 'liked';
    var list = (S.ans[kind] || []).slice();
    if (has(list, id)) list = list.filter(function (x) { return x !== id; }); else list.push(id);
    S.ans[kind] = list;
    S.ans[other] = (S.ans[other] || []).filter(function (x) { return x !== id; });
    save();
    var y = window.pageYOffset;
    renderResults(true);
    window.scrollTo(0, y);
    var flash = $('[data-cc-flash]', stage);
    if (flash) flash.textContent = kind === 'liked' ? T('List re-ranked: roles like this one moved up.') : T('Removed, and roles like it moved down. “Undo” is under “Your answers”.');
  }

  function section(title, id, lead) {
    var s = el('section', 'cc-sec');
    if (id) s.id = id;
    var h = el('h2', 'cc-sec-h', title);
    s.appendChild(h);
    if (lead) s.appendChild(el('p', 'cc-lead', lead));
    return s;
  }

  function quote(q, cls) {
    var b = el('blockquote', 'cc-quote' + (cls ? ' ' + cls : ''));
    b.appendChild(rich('div', null, q.html));
    var c = el('p', 'cc-src', q.file);
    c.setAttribute('translate', 'no');
    b.appendChild(c);
    return b;
  }

  function answered() {
    var vis = visible();
    var n = vis.filter(function (q) { var v = S.ans[q.id]; return v !== undefined && !(Array.isArray(v) && !v.length); }).length;
    return { n: n, total: vis.length };
  }

  function renderResults(keepFocus) {
    var a = S.ans;
    var R = K.results(D, a);
    stage.textContent = '';
    var cnt = answered();

    /* Head */
    var head = el('header', 'res-head cc-res-head');
    head.appendChild(el('p', 'kicker', T('Career Compass · your shortlist')));
    var h = el('h2', 'headline cc-res-h', T('Fields and roles that fit your answers'));
    h.tabIndex = -1;
    head.appendChild(h);
    head.appendChild(el('p', 'standfirst', T('A starting point for exploring, not a verdict. Each role shows the answers that moved it and the research behind it; the best test of a career is still talking to people who do it and trying the work.')));
    var meta = el('p', 'form-meta cc-meta');
    meta.textContent = T('Compass {v} · research of {d} · {mode} · {n} of {total} questions answered', {
      v: D.version, d: D.researched, mode: S.mode === 'quick' ? T('quick version') : T('full version'), n: cnt.n, total: cnt.total });
    head.appendChild(meta);
    var tools = el('div', 'cc-tools');
    var edit = el('button', 'btn small', T('Change my answers'));
    edit.type = 'button';
    edit.addEventListener('click', function () { S.view = 'steps'; S.step = 0; save(); render(); });
    tools.appendChild(edit);
    if (S.mode === 'quick') {
      var full = el('button', 'btn small', T('Answer the full version'));
      full.type = 'button';
      full.addEventListener('click', function () { S.mode = 'full'; S.view = 'steps'; S.step = 0; save(); render(); });
      tools.appendChild(full);
    }
    var share = el('button', 'btn small', T('Copy a link to these results'));
    share.type = 'button';
    share.addEventListener('click', function () {
      var url = location.href.replace(/#.*$/, '') + '#' + encode();
      history.replaceState(null, '', '#' + encode());
      var done = function () { share.textContent = T('Link copied'); };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(url).then(done, function () { window.prompt(T('Copy this link'), url); });
      else window.prompt(T('Copy this link'), url);
    });
    tools.appendChild(share);
    var pr = el('button', 'btn small', T('Print'));
    pr.type = 'button';
    pr.addEventListener('click', function () { window.print(); });
    tools.appendChild(pr);
    var again = el('button', 'btn small ghost', T('Start again'));
    again.type = 'button';
    again.addEventListener('click', function () {
      S.ans = {}; S.view = 'intro'; S.step = 0;
      try { localStorage.removeItem(KEY); } catch (e) { /* ignore */ }
      history.replaceState(null, '', location.pathname + location.search);
      render();
    });
    tools.appendChild(again);
    head.appendChild(tools);
    head.appendChild(el('p', 'cc-share-note form-meta', T('The link holds your answers in the address after “#”, which browsers do not send to any server. Anyone you give it to can read them.')));
    stage.appendChild(head);

    var flash = el('p', 'cc-flash');
    flash.setAttribute('data-cc-flash', '');
    flash.setAttribute('aria-live', 'polite');
    stage.appendChild(flash);

    if (cnt.n < 3 || !(a.act && a.act.length)) {
      var warn = el('p', 'cc-warn', T('You skipped most questions, or the activities question, so the list below is close to arbitrary. Answer at least the activities you would enjoy.'));
      stage.appendChild(warn);
    }

    /* Labels */
    var key = el('p', 'cc-key form-meta');
    key.textContent = T('Scores are out of 100: 75 and above is a strong match, 60–74 good, 45–59 worth a look. They compare roles with each other for your answers; they are not a probability of getting in or of liking the job.');
    stage.appendChild(key);

    /* Fields */
    var fs = section(T('Three fields to explore first'), 'cc-fields', T('Each field is scored by its three best roles for your answers.'));
    var cols = el('div', 'stories cc-fields');
    R.fields.forEach(function (fx, i) {
      var f = field(fx.slug);
      var c = el('div', 'story-col cc-field');
      c.appendChild(el('p', 'kicker', T('Field {n}', { n: i + 1 }) + ' · ' + fx.score));
      var ah = el('h3', 'cx-door-h');
      var lk = el('a', null);
      lk.href = 'fields/' + f.slug + '.html';
      lk.appendChild(en(f.name));
      ah.appendChild(lk);
      c.appendChild(ah);
      c.appendChild(bar(fx.score));
      c.appendChild(rich('p', 'cc-field-what', f.what));
      var ul = el('ul', 'cx-links');
      fx.roles.forEach(function (id) {
        var r = byId(id);
        var li = el('li');
        var l = el('a');
        l.href = r.u;
        l.appendChild(en(r.n));
        li.appendChild(l);
        ul.appendChild(li);
      });
      c.appendChild(ul);
      cols.appendChild(c);
    });
    fs.appendChild(cols);
    stage.appendChild(fs);

    /* Roles now */
    var ns = section(T('Roles that fit now'), 'cc-now', T('Open to someone at your stage. Ranked by fit; the reasons are your own answers set against the research’s scores. Mark roles “interested” or “not for me” to re-rank the list by how alike the roles are.'));
    var ol = el('ol', 'cc-roles');
    R.now.forEach(function (x, i) { ol.appendChild(roleCard(x, i + 1)); });
    ns.appendChild(ol);
    stage.appendChild(ns);

    /* Later */
    if (R.later.length) {
      var ls = section(T('Later, after more preparation'), 'cc-later', T('These fit your answers but are rarely a first job: they need a PhD, or most people arrive from another job first.'));
      var ol2 = el('ol', 'cc-roles small');
      R.later.forEach(function (x) { ol2.appendChild(roleCard(x, null, { small: true })); });
      ls.appendChild(ol2);
      stage.appendChild(ls);
    }

    /* Doors still open */
    if (R.alternatives.length) {
      var as = section(T('Doors still open'), 'cc-alt', null);
      as.appendChild(quote(D.quotes.adjacent));
      var ul2 = el('ul', 'cc-alts');
      R.alternatives.forEach(function (x) {
        var from = byId(x.from), to = byId(x.to);
        var li = el('li');
        li.appendChild(el('span', null, T('If you aim for') + ' '));
        li.appendChild(en(from.n, 'b'));
        li.appendChild(el('span', null, ' (' + T('entry {r}/5', { r: range(from.s.d) }) + '): '));
        var l = el('a');
        l.href = to.u;
        l.appendChild(en(to.n));
        li.appendChild(l);
        li.appendChild(el('span', null, ' (' + T('entry {r}/5', { r: range(to.s.d) }) + ', ' + T('fit {n}', { n: x.score }) + ') — ' +
          (x.kind === 'route' ? T('the research names it as a route in: its exits lead there.') : T('same core activity, easier to enter.'))));
        ul2.appendChild(li);
      });
      as.appendChild(ul2);
      stage.appendChild(as);
    }

    /* What would change your list */
    if (R.whatIf.length) {
      var ws = section(T('What would change your list'), 'cc-whatif', T('The answers that hold roles back, and the role each one holds back most.'));
      var ul3 = el('ul', 'cc-whatif');
      var what = { hours: T('If you accepted 70+ hour weeks'), stress: T('If you accepted sustained high pressure'), diff: T('If you tried the most selective doors'),
        avoid: T('If you did not rule out the activity you would rather avoid'), lang: T('If you spoke the local language where you want to work') };
      R.whatIf.forEach(function (w) {
        var r = byId(w.id);
        var li = el('li');
        li.appendChild(document.createTextNode(what[w.k] + ', '));
        li.appendChild(en(r.n, 'b'));
        li.appendChild(document.createTextNode(' ' + (w.was ? T('would rank {n} (now {was}).', { n: w.rank, was: w.was }) : T('would rank {n}.', { n: w.rank }))));
        ul3.appendChild(li);
      });
      ws.appendChild(ul3);
      stage.appendChild(ws);
    }

    /* Watch-outs */
    var outs = watchOuts(a, R);
    if (outs.length) {
      var os = section(T('Things to be alert for'), 'cc-alert', T('Triggered by your answers. Quoted from the research, with the file each passage comes from.'));
      outs.forEach(function (o) {
        if (o.myth) {
          var m = D.myths[o.myth];
          var box = el('div', 'cc-myth');
          box.appendChild(el('p', 'cc-myth-k', T('Myth {n} of 15, ranked by damage', { n: o.myth })));
          box.appendChild(rich('p', 'cc-myth-m', m.myth));
          box.appendChild(rich('p', 'cc-myth-r', m.reality));
          var src = el('p', 'cc-src', 'decisions/decision-framework.md · ' + m.file);
          src.setAttribute('translate', 'no');
          box.appendChild(src);
          os.appendChild(box);
        } else {
          if (o.title) os.appendChild(el('h3', 'cc-h3', o.title));
          os.appendChild(quote(D.quotes[o.q]));
        }
      });
      stage.appendChild(os);
    }

    /* Sectors */
    if (a.sec && a.sec.length) {
      var ss = section(T('Sector notes'), 'cc-sectors', T('From the sector research, which the role pages do not cover. Quoted from each file’s bottom line.'));
      a.sec.forEach(function (k) {
        var sx = D.sectors[k];
        if (!sx) return;
        var d = el('details', 'cc-sector');
        d.open = a.sec.length === 1;
        var sum = el('summary', null, SEC(k));
        d.appendChild(sum);
        var ul = el('ul', 'cc-sector-list');
        sx.items.forEach(function (h) { ul.appendChild(rich('li', null, h)); });
        d.appendChild(ul);
        if (sx.df) {
          var r = D.df[sx.df];
          var p = el('p', 'cc-pay');
          p.appendChild(el('b', null, T('Main door') + ': '));
          p.appendChild(rich('span', null, r.cells.door));
          d.appendChild(p);
        }
        if (sx.ms) {
          var m = D.ms[sx.ms];
          var p2 = el('p', 'cc-pay');
          p2.appendChild(el('b', null, T('Does a master’s change the outcome?') + ' '));
          p2.appendChild(rich('span', null, m.verdict + ' — ' + m.adds));
          d.appendChild(p2);
        }
        var c = el('p', 'cc-src', 'research/' + sx.file);
        c.setAttribute('translate', 'no');
        d.appendChild(c);
        ss.appendChild(d);
      });
      stage.appendChild(ss);
    }

    /* Test it cheaply */
    var ts = section(T('Test it before you commit'), 'cc-test', T('Career tests predict little on their own. Three cheap checks for your top roles, in the next month:'));
    var steps = el('ol', 'cc-steps');
    var top3 = R.now.slice(0, 3).map(function (x) { return byId(x.id); });
    var s1 = el('li');
    s1.appendChild(el('b', null, T('Talk to two people who do each job.') + ' '));
    s1.appendChild(document.createTextNode(T('Alumni and second-degree contacts answer more often than strangers. Ask what a second-year does that a tool cannot, and last year’s average and peak weekly hours.')));
    steps.appendChild(s1);
    var s2 = el('li');
    s2.appendChild(el('b', null, T('Read the way in, then try a piece of the work.') + ' '));
    s2.appendChild(document.createTextNode(T('Each role page has “How to enter” and “Honest downsides”: ')));
    top3.forEach(function (r, i) {
      var l = el('a');
      l.href = r.u + '#how-to-enter';
      l.appendChild(en(r.n));
      s2.appendChild(l);
      if (i < top3.length - 1) s2.appendChild(document.createTextNode(' · '));
    });
    s2.appendChild(document.createTextNode('. ' + T('A short task (a model, a dashboard, a campaign brief, a small program) tells you more than any quiz.')));
    steps.appendChild(s2);
    var s3 = el('li');
    s3.appendChild(el('b', null, T('Check the door and its date.') + ' '));
    s3.appendChild(document.createTextNode(T('Internships are the hiring channel, and their windows close early. Missing one costs a year.')));
    steps.appendChild(s3);
    ts.appendChild(steps);
    var qs = [];
    if (top3.some(function (r) { return r.s.h[0] >= 55; })) qs.push('askHours');
    if (top3.some(function (r) { return r.ai >= 2; })) qs.push('askAI');
    qs.push('channel');
    if (has(a.prio, 'exits')) qs.push('exits');
    if (has(a.prio, 'pay')) qs.push('netRent');
    var det = el('details', 'cc-more');
    det.appendChild(el('summary', null, T('The research’s rules behind these checks')));
    qs.forEach(function (k) { det.appendChild(quote(D.quotes[k])); });
    ts.appendChild(det);
    stage.appendChild(ts);

    /* Next steps */
    var nx = section(T('Next steps on this site'), 'cc-next', null);
    var ul4 = el('ul', 'cx-links cc-next-list');
    var calcs = {};
    R.now.slice(0, 5).forEach(function (x) { byId(x.id).calc.forEach(function (c) { calcs[c.href] = c.label; }); });
    Object.keys(calcs).forEach(function (href) {
      var li = el('li');
      var l = el('a', null, T(calcs[href]));
      l.href = href;
      li.appendChild(l);
      ul4.appendChild(li);
    });
    var dir = el('li');
    var dirl = el('a', null, T('Every programme the calculators score, filtered by what you studied and where you want to work'));
    dirl.href = '../programmes.html#' + programmeFilter(a);
    dir.appendChild(dirl);
    ul4.appendChild(dir);
    var hire = el('li');
    var hl = el('a', null, T('How hiring works in 46 countries, and the route most used for your path'));
    hl.href = '../hiring.html';
    hire.appendChild(hl);
    ul4.appendChild(hire);
    var atlas = el('li');
    var al = el('a', null, T('The Atlas: cities, employers and visas by country'));
    al.href = '../map.html';
    atlas.appendChild(al);
    ul4.appendChild(atlas);
    var cmp = el('li');
    var cl = el('a', null, T('Compare every role side by side'));
    cl.href = 'compare.html';
    cmp.appendChild(cl);
    ul4.appendChild(cmp);
    nx.appendChild(ul4);
    stage.appendChild(nx);

    /* How this works */
    stage.appendChild(howItWorks(a));

    if (!keepFocus) focusTop(h);
  }

  /* The Programme Directory pre-filtered to the tracks behind the top roles'
   * calculators and the regions the reader chose. */
  function programmeFilter(a) {
    var R = K.results(D, a);
    var tracks = {};
    R.now.slice(0, 5).forEach(function (x) {
      byId(x.id).calc.forEach(function (c) {
        var m = /track=([a-z]+)/.exec(c.href);
        if (m) tracks[m[1]] = 1;
        else if (/mba\.html/.test(c.href)) tracks.mba = 1;
      });
    });
    var region = { uk: 'uk', us: 'us', gulfasia: 'as' };
    var regs = {};
    (a.where || []).forEach(function (w) { regs[region[w] || (w === 'open' ? '' : 'eu')] = 1; });
    delete regs[''];
    var out = [];
    if (Object.keys(tracks).length) out.push('t=' + Object.keys(tracks).join(','));
    if (Object.keys(regs).length) out.push('r=' + Object.keys(regs).join(','));
    if (a.cit && a.cit !== 'eu') out.push('pass=other');
    return out.join(';');
  }

  function watchOuts(a, R) {
    var out = [];
    var topIds = R.now.map(function (x) { return x.id; });
    var topFields = R.now.map(function (x) { return byId(x.id).f; });
    var gaps = K.langGaps(a), visa = K.visaNeeds(a);
    var hasMaster = has(a.study, 'master');
    if (visa.length || gaps.length) out.push({ q: 'constraints', title: T('Visas and languages') });
    /* Myths, by the number in the research's table (1 = most damaging). */
    var myths = [];
    if (a.cit === 'eu' && has(a.where, 'uk')) myths.push(1);
    if ((a.stage === 'final' || a.stage === 'master' || a.stage === 'y12') && (has(topFields, 'finance') || has(topFields, 'management-consulting'))) myths.push(2);
    if (gaps.some(function (w) { return w === 'dach' || w === 'fr' || w === 'it' || w === 'iberia'; })) myths.push(3);
    if (hasMaster) myths.push(4);
    if (hasMaster && has(topFields, 'marketing')) myths.push(5);
    if ((a.stage === 'grad' || a.stage === 'work') && hasMaster) myths.push(6);
    if (has(topIds, 'accounting/3.1') || has(topIds, 'accounting/3.2') || has(topIds, 'management-consulting/3.2')) myths.push(7);
    if (has(a.prio, 'pay')) myths.push(8);
    if (a.ai === 'high' || a.ai === 'some') myths.push(10);
    if (a.cit === 'eu' && has(a.where, 'uk') && hasMaster) myths.push(12);
    if (has(a.study, 'qual') && has(topFields, 'finance')) myths.push(14);
    if ((a.stage === 'grad' || a.stage === 'work') && hasMaster) myths.push(15);
    myths.slice(0, 5).forEach(function (n) { out.push({ myth: n }); });
    /* Where you are now. */
    var st = { y12: ['b1', 'b3', 'b4'], final: ['internship', 'window'], master: ['internship', 'window'], grad: ['window'], work: ['deadzone', 'nonDegree'] }[a.stage] || [];
    if (a.stage === 'y12' && gaps.length) st.splice(1, 0, 'b2');
    if (a.stage === 'master' && has(a.where, 'uk')) st.push('ukmsc');
    st.forEach(function (q, i) { out.push({ q: q, title: i === 0 ? T('For where you are now') : null }); });
    if (hasMaster) out.push({ q: 'mastersWhy', title: T('If you are weighing a master’s') }, { q: 'mastersWhyNot' });
    if (a.ai === 'high') out.push({ q: 'aiTrend', title: T('AI and junior hiring') }, { q: 'aiRule' });
    return out;
  }

  function howItWorks(a) {
    var d = el('details', 'cc-how');
    d.id = 'cc-how';
    d.appendChild(el('summary', null, T('How this works, your answers, and its limits')));

    d.appendChild(el('h3', 'cc-h3', T('The score')));
    var tbl = el('table', 'cc-weights');
    var tb = el('tbody');
    [[T('What you would enjoy doing'), K.W.interest, T('Your activities against what each role mostly is; a role’s core activity counts most.')],
     [T('How you want to work'), K.W.style, T('People and technical depth against the role’s 1–5 scores; hours and pressure only when the role asks more than you accept.')],
     [T('What you studied'), K.W.background, T('Strong, possible or stretch, from the research’s background matrix.')],
     [T('What matters to you'), K.W.motives, T('Your two motives against the role’s pay, upside, exits, stability, mission or creative work.')],
     [T('How competitive a door'), K.W.realism, T('Entry difficulty against the competition you are ready for.')],
     [T('Kind of employer'), K.W.employer, T('Where the role mostly sits.')]].forEach(function (r) {
      var tr = el('tr');
      tr.appendChild(el('th', null, r[0]));
      tr.appendChild(el('td', 'cx-n', String(r[1])));
      tr.appendChild(el('td', null, r[2]));
      tb.appendChild(tr);
    });
    tbl.appendChild(tb);
    d.appendChild(tbl);
    d.appendChild(el('p', null, T('Then, each shown on the role: +4 for a sector you chose; up to −8 where the local language is usually required and you lack it; −5 for employers that rarely sponsor visas when every place you chose needs one; −6 where citizenship conditions are common and you are not an EU citizen; up to −6 for AI exposure if it worries you; −4 for PhD-gated roles unless you would consider a PhD; up to ±12 for roles like the ones you marked.')));

    d.appendChild(el('h3', 'cc-h3', T('What is research and what is our reading')));
    d.appendChild(el('p', null, T('Hours, stress, people, quant, entry difficulty, background fit and pay come from the thirteen branch reports (research/branches/index.md). Every quoted passage comes from the file named under it. What each role mostly involves, the kind of employer, relative pay, upside, exits, stability, AI exposure and language need are our reading of each role’s research page, made once for all 124 roles and listed in tools/careers/compass.js.')));

    d.appendChild(el('h3', 'cc-h3', T('Limits')));
    var ul = el('ul');
    [T('This is not a psychometric test and has not been validated against anyone’s later satisfaction. Interest inventories in general predict job satisfaction only weakly.'),
     T('Hours and stress are the researchers’ estimates from practitioner accounts, not a survey.'),
     T('Your answers are a snapshot. Take it again when your plans change.'),
     T('Nothing here is advice; check the role pages and their sources before relying on a number.')].forEach(function (t) { ul.appendChild(el('li', null, t)); });
    d.appendChild(ul);

    d.appendChild(el('h3', 'cc-h3', T('Your answers')));
    var dl = el('dl', 'cc-answers');
    visible().forEach(function (q) {
      var v = a[q.id];
      dl.appendChild(el('dt', null, q.q));
      var txt;
      if (v === undefined || (Array.isArray(v) && !v.length)) txt = T('Skipped');
      else {
        var vals = Array.isArray(v) ? v : [v];
        txt = vals.map(function (x) {
          for (var i = 0; i < q.opts.length; i++) if (String(q.opts[i][0]) === String(x)) return q.opts[i][1];
          return x === null ? T('Nothing in particular') : String(x);
        }).join('; ');
      }
      dl.appendChild(el('dd', null, txt));
    });
    if ((a.liked && a.liked.length) || (a.disliked && a.disliked.length)) {
      dl.appendChild(el('dt', null, T('Roles you marked')));
      var dd = el('dd');
      (a.liked || []).concat(a.disliked || []).forEach(function (id) {
        var r = byId(id);
        if (!r) return;
        var sp = el('span', 'cc-marked');
        sp.appendChild(document.createTextNode((has(a.liked, id) ? T('Interested') : T('Not for me')) + ': '));
        sp.appendChild(en(r.n));
        var u = el('button', 'cx-btn-text', T('Undo'));
        u.type = 'button';
        u.addEventListener('click', function () {
          S.ans.liked = (S.ans.liked || []).filter(function (x) { return x !== id; });
          S.ans.disliked = (S.ans.disliked || []).filter(function (x) { return x !== id; });
          save();
          renderResults(true);
          var how = $('#cc-how');
          if (how) { how.open = true; how.scrollIntoView(); }
        });
        sp.appendChild(document.createTextNode(' '));
        sp.appendChild(u);
        dd.appendChild(sp);
      });
      dl.appendChild(dd);
    }
    d.appendChild(dl);
    return d;
  }

  /* ---------------------------------------------------------------- views */

  function render() {
    intro.hidden = S.view !== 'intro';
    stage.hidden = S.view === 'intro';
    if (S.view === 'steps') renderStep();
    else if (S.view === 'results') renderResults();
    else {
      var h = $('h2', intro) || intro;
      if (h.tabIndex < 0) h.tabIndex = -1;
    }
  }

  setupIntro();
  var shared = location.hash && location.hash.length > 3 ? decode(location.hash) : null;
  if (shared) {
    S.mode = shared.mode; S.ans = shared.ans; S.view = 'results';
    save();
  }
  render();
}());
