/* ---------------------------------------------------------------------------
 * Career Explorer: the pages, from the data tools/build-careers.js parsed.
 *
 * Every page is the site's own paper: the strip with the edition and
 * language pickers, the compact nameplate and the section navigation are
 * read from index.html at build time, so they never drift from the rest of
 * the site. Report text is wrapped in translate="no" lang="en": the Italian
 * edition translates the interface around it, never the research.
 *
 * Interface strings go through ui(), which records them so the build can
 * list any that js/i18n-it.js does not translate yet.
 * ------------------------------------------------------------------------- */

'use strict';

const fs = require('fs');
const path = require('path');
const M = require('./md');
const P = require('./parse');

const esc = M.escHtml;
const SITE = 'https://iaconoalessandro.github.io/admetia/';
const LEVEL = { S: 'strong', P: 'possible', X: 'stretch' };
const LEVEL_NAME = { S: 'Strong fit', P: 'Possible fit', X: 'Stretch' };

function site(ROOT, data) {
  const used = new Set();
  const ui = (s) => { used.add(s); return esc(s); };
  /* A sentence with links in it: the walker in js/i18n.js translates each
   * text fragment on its own, so those are the keys. */
  const uiRaw = (s) => {
    s.split(/<[^>]+>/).map((x) => x.replace(/\s+/g, ' ').trim()).filter((x) => /[a-z]{3}/i.test(x)).forEach((x) => used.add(x));
    return s;
  };
  /* Names from the research (fields, backgrounds, roles) stay in English. */
  const nm = (s) => `<span translate="no">${esc(s)}</span>`;

  const indexHtml = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  const strip = /<div class="ticker"[\s\S]*?<\/div>\n<\/div>/.exec(indexHtml);
  const nav = /<nav class="sections"[\s\S]*?<\/nav>/.exec(indexHtml);
  if (!strip || !nav) throw new P.ParseError('index.html: strip or section nav not found');
  const edition = /<div class="edition">[\s\S]*?<\/div><\/div>/.exec(strip[0]);
  if (!edition) throw new P.ParseError('index.html: edition picker not found');
  if (!/data-sec="careers"/.test(nav[0])) throw new P.ParseError('index.html: the section nav has no Careers link');

  const roleById = new Map(data.roles.map((r) => [r.id, r]));
  const fieldBySlug = new Map(data.fields.map((f) => [f.slug, f]));
  const bgByKey = new Map(data.backgrounds.map((b) => [b.key, b]));

  /* Paths: every target is written from the site root ("careers/roles/x.html",
   * "css/app.css", "masters.html?track=mif") and made relative per page. */
  const U = {
    home: 'careers/index.html', roles: 'careers/roles/index.html', compare: 'careers/compare.html',
    sources: 'careers/sources.html', italy: 'careers/italy-pay.html', compass: 'careers/compass.html',
    calendar: 'careers/recruiting-calendar.html', toolkit: 'careers/toolkit.html', interview: 'careers/interview-prep.html',
    field: (s) => `careers/fields/${s}.html`, role: (id) => `careers/roles/${roleById.get(id).slug}.html`,
    bg: (s) => `careers/backgrounds/${s}.html`
  };
  function rel(from, to) {
    const m = /^([^?#]*)(.*)$/.exec(to);
    let r = path.posix.relative(path.posix.dirname(from), m[1]);
    if (!r) r = path.posix.basename(m[1]);
    return r + m[2];
  }

  /* Report links → explorer pages. */
  const mdLink = (from) => (url) => {
    let to = null;
    if (/(^|\/)italy-pay-addendum\.md$/.test(url)) to = U.italy;
    else if (url === '../index.md' || url === 'index.md') to = U.sources;
    else {
      const m = /^(?:reports\/)?([a-z-]+)\.md$/.exec(url);
      if (m && fieldBySlug.has(m[1])) to = U.field(m[1]);
    }
    if (!to) throw new P.ParseError(`${from}: report link "${url}" has no page in the explorer`);
    return rel(from, to);
  };
  function md(from, text, opts = {}) {
    return M.render(text, { link: mdLink(from), ...opts });
  }
  function mdInline(from, text) { return M.inline(text, { link: mdLink(from) }); }

  /* Unique heading ids on a page. */
  function slugger() {
    const seen = new Map();
    return (text) => {
      let s = P.slugify(P.stripMd(text)) || 'section';
      const n = seen.get(s) || 0;
      seen.set(s, n + 1);
      return n ? `${s}-${n + 1}` : s;
    };
  }

  /* ---------------------------------------------------------------- shell */

  function shell(page) {
    const from = page.path;
    const r = (to) => rel(from, to);
    const navHtml = nav[0]
      .replace(/href="([^"#:]+)"/g, (m, h) => `href="${r(h)}"`)
      .replace('<a class="sec-group" href', '<a class="sec-group" href')
      .replace(/(<a class="sec-group)(" href="[^"]+" data-sec="careers")/, '$1 on" aria-current="page$2');
    const crumbs = page.crumbs ? `<nav class="cx-crumbs" aria-label="${ui('Breadcrumb')}"><ol>` +
      page.crumbs.map((c, i) => i === page.crumbs.length - 1
        ? `<li><span aria-current="page">${c.name ? nm(c.label) : ui(c.label)}</span></li>`
        : `<li><a href="${r(c.href)}">${c.name ? nm(c.label) : ui(c.label)}</a></li>`).join('') + '</ol></nav>' : '';
    const local = [['Explorer', U.home], ['Compass', U.compass], ['By background', U.home + '#backgrounds'], ['By field', U.home + '#fields'],
      ['All roles', U.roles], ['Compare', U.compare], ['Calendar', U.calendar], ['Toolkit', U.toolkit], ['Interview prep', U.interview], ['Sources', U.sources]]
      .map(([l, h]) => `<a href="${r(h)}"${h === from ? ' aria-current="page"' : ''}>${ui(l)}</a>`).join('');
    const title = page.title === 'Career Explorer' ? 'Career Explorer — Admetia' : `${page.title} — Career Explorer — Admetia`;
    if (page.static) { used.add(title); used.add(page.description); }
    return `<!doctype html>
<html lang="en" class="no-js">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(page.description)}">
<link rel="canonical" href="${SITE}${from.replace(/(^|\/)index\.html$/, '$1')}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Admetia">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(page.description)}">
<meta property="og:url" content="${SITE}${from.replace(/(^|\/)index\.html$/, '$1')}">
<meta property="og:image" content="${SITE}img/og-admetia.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Admetia, the way in: MBA, business and computing master’s calculators.">
<meta property="og:locale" content="en_GB">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="${r('img/favicon.svg')}" type="image/svg+xml">
<link rel="apple-touch-icon" href="${r('img/apple-touch-icon.png')}">
<script src="${r('js/theme.js')}"></script>
<link rel="stylesheet" href="${r('css/fonts.css')}">
<link rel="stylesheet" href="${r('css/app.css')}">
<link rel="stylesheet" href="${r('careers/assets/careers.css')}">
</head>
<body class="cx">
<a class="cx-skip" href="#main">${ui('Skip to content')}</a>

<div class="ticker cx-strip" role="region" aria-label="${ui('Career Explorer')}">
  <div class="ticker-label"><span class="ticker-arrow">↗</span><span class="ticker-name">${ui('Career Explorer')}</span></div>
  <div class="ticker-view"></div>
  ${edition[0]}
</div>

<header class="masthead compact">
  <a class="nameplate" href="${r('index.html')}">Admetia</a>
  <p class="motto">The way in — an independent calculator for MBA, business and computing master’s degrees</p>
</header>

${navHtml}

<main class="shell cx-main" id="main" tabindex="-1">
${crumbs}
<nav class="cx-local" aria-label="${ui('Career Explorer sections')}">${local}</nav>
<p class="cx-en-note" lang="it">Questa sezione è in inglese. Abbiamo tradotto solo menu ed etichette: i testi della ricerca restano nella lingua originale, così cifre, fonti e avvertenze non cambiano.</p>

${page.body}

${footer(from)}
</main>

<script defer src="${r('js/i18n.js')}"></script>
<script defer src="${r('js/i18n-it.js')}"></script>
<script defer src="${r('js/stats.js')}"></script>
<script defer src="${r('careers/assets/careers.js')}"></script>
${(page.scripts || []).map((s) => `<script defer src="${r(s)}"></script>`).join('\n')}${page.scripts ? '\n' : ''}</body>
</html>
`;
  }

  /* The footer's reality check: the three gaps in index.md that touch nearly
   * every role, word for word, then the site's own colophon. */
  function footer(from) {
    const items = [2, 5, 6].map((n) => data.gaps.find((g) => g.n === n));
    return `<footer class="foot">
    <aside class="reality" aria-labelledby="reality-title">
      <p class="reality-k">${ui('Read this before you rely on the explorer')}</p>
      <h2 id="reality-title">${ui('A reality check on pay, hours and tiers')}</h2>
      <p class="reality-lead">${ui('Every figure here is dated and approximate, copied from the research with its source and year. Pay is in local currency and never converted. Tier lists reflect industry consensus and practitioner perception, not objective fact. Three limits apply to almost every page:')}</p>
      <ul class="reality-list" translate="no" lang="en">
${items.map((g) => `        <li>${mdInline(from, g.head)}${g.subs.length ? '<ul>' + g.subs.map((s) => `<li>${mdInline(from, s)}</li>`).join('') + '</ul>' : ''}</li>`).join('\n')}
      </ul>
      <p class="reality-close">${uiRaw('The full list of gaps, the rating scales and the researchers’ assumptions are on the <a href="' + rel(from, U.sources) + '">sources page</a>.')}</p>
    </aside>
    <p><b class="rubric-in">${ui('The research')}</b>${ui('Thirteen branch reports and an Italy pay add-on, researched on 9 October 2026 for Admetia. Nothing on these pages is advice; check the sources before relying on a number.')}</p>
    <p><b class="rubric-in">Colophon</b>Your choices never leave this browser. Visits are counted anonymously — which page, never which country.</p>
  </footer>`;
  }

  /* --------------------------------------------------------- components */

  function pips(range) {
    let out = '';
    for (let i = 1; i <= 5; i++) out += `<i class="${i <= range[0] ? 'on' : i <= range[1] ? 'part' : ''}"></i>`;
    return `<span class="cx-pips" aria-hidden="true">${out}</span>`;
  }
  /* A score: the bar, then the number as the research wrote it. */
  function score(label, cell, range, from) {
    const plain = /^\d(\s*-\s*\d)?$/.test(P.stripMd(cell));
    const txt = plain ? `${esc(P.stripMd(cell).replace(/\s*-\s*/, '–'))}<span class="cx-of">/5</span>` : `<span translate="no" lang="en">${mdInline(from, cell)}</span>`;
    return `<div class="cx-score"><dt>${ui(label)}</dt><dd>${pips(range)}<span class="cx-score-n">${txt}</span></dd></div>`;
  }
  function miniScores(r) {
    return `<span class="cx-mini">${['people', 'quant', 'stress', 'difficulty'].map((k) =>
      `<span><abbr title="${ui({ people: 'People/communication', quant: 'Quantitative/technical', stress: 'Stress', difficulty: 'Entry difficulty' }[k])}">${ui({ people: 'People', quant: 'Quant', stress: 'Stress', difficulty: 'Entry' }[k])}</abbr> ${pips(r.scores[k])}<b>${esc(r.scores[k][0] === r.scores[k][1] ? String(r.scores[k][0]) : r.scores[k].join('–'))}</b></span>`).join('')}</span>`;
  }

  function verifyBox(from, list, where) {
    if (!list.length) return '';
    const items = list.map(({ n, sub }) => {
      const g = data.gaps.find((x) => x.n === n);
      const head = mdInline(from, g.head);
      const subs = sub !== undefined ? `<ul><li>${mdInline(from, g.subs[sub])}</li></ul>`
        : g.subs.length ? '<ul>' + g.subs.map((s) => `<li>${mdInline(from, s)}</li>`).join('') + '</ul>' : '';
      return `<li>${head}${subs}</li>`;
    }).join('\n');
    return `<aside class="cx-verify" role="note" aria-labelledby="verify-title">
  <p class="reality-k">${ui('Verify before relying')}</p>
  <h2 id="verify-title">${ui(where)}</h2>
  <p>${uiRaw('The research index lists these as gaps or low-confidence areas to check against primary sources. Quoted from index.md, section 6 (full list on the <a href="' + rel(from, U.sources) + '#gaps">sources page</a>):')}</p>
  <ul class="cx-verify-list" translate="no" lang="en">
${items}
  </ul>
</aside>`;
  }

  function toc(entries, label = 'On this page') {
    return `<nav class="cx-toc" aria-labelledby="toc-title"><details open><summary id="toc-title">${ui(label)}</summary><ol>
${entries.map(([id, text]) => `<li><a href="#${id}">${text}</a></li>`).join('\n')}
</ol></details></nav>`;
  }

  function roleLink(from, id, extra = '') {
    const r = roleById.get(id);
    return `<a href="${rel(from, U.role(id))}"><span translate="no" lang="en">${esc(r.title)}</span></a>${extra}`;
  }
  function roleItem(from, id, opts = {}) {
    const r = roleById.get(id);
    const f = fieldBySlug.get(r.field);
    return `<li class="cx-roleitem"><a class="cx-roleitem-t" href="${rel(from, U.role(id))}" translate="no" lang="en">${esc(r.title)}</a>` +
      `${opts.field ? `<span class="cx-roleitem-f" translate="no">${esc(f.name)}</span>` : ''}${opts.scores !== false ? miniScores(r) : ''}${opts.note || ''}</li>`;
  }

  /* ---------------------------------------------------------------- pages */

  const pages = [];
  const add = (p) => { pages.push({ path: p.path.replace(/^careers\//, ''), html: shell(p), title: p.title }); };

  /* Home */
  (function home() {
    const from = U.home;
    const nRoles = data.roles.length;
    const body = `<header class="sec-head cx-sec-head">
  <div>
    <p class="kicker">${ui('Careers desk · what the jobs are, and the way in')}</p>
    <h1 class="headline">${ui('Career Explorer')}</h1>
    <p class="standfirst"><span>${nRoles}</span> <span>${ui('role families in')}</span> <span>${data.fields.length}</span> <span>${ui('fields: what the work is like, what it pays, how hard it is to get in and which degrees lead there. Start from what you studied, from a field, or from the job you want.')}</span></p>
  </div>
  <div class="cx-search-box">
    <label class="cx-label" for="cx-q">${ui('Search every role')}</label>
    <input id="cx-q" class="cx-input" type="search" placeholder="${ui('e.g. private equity, SOC analyst, brand manager')}" autocomplete="off" data-cx-search="${rel(from, 'careers/data/search-index.json')}" data-cx-base="${rel(from, U.home).replace(/index\.html$/, '')}" aria-controls="cx-q-results">
    <div id="cx-q-results" class="cx-results" aria-live="polite"></div>
    <p class="form-meta">${uiRaw(`Or browse <a href="${rel(from, U.roles)}">every role</a>, or <a href="${rel(from, U.compare)}">compare them side by side</a>.`)}</p>
  </div>
</header>

<aside class="cx-compass-band" aria-labelledby="compass-door">
  <p class="kicker">${ui('Door zero')}</p>
  <h2 id="compass-door" class="cx-door-h">${ui('I don’t know yet')}</h2>
  <p>${ui('Answer 8 to 17 questions about what you studied, what you would enjoy doing and how you want to work. The Career Compass ranks the role families against your answers and shows why, what stands in the way, and a door that is still open.')}</p>
  <p><a class="btn primary" href="${rel(from, U.compass)}">${ui('Take the Career Compass')}</a></p>
</aside>

<section class="gi-band" aria-labelledby="gi-band-h">
  <p class="kicker">${ui('Getting in')}</p>
  <h2 id="gi-band-h" class="cx-door-h">${ui('Know the job? Get the offer')}</h2>
  <ul class="gi-band-links">
    <li><a href="${rel(from, U.calendar)}"><b>${ui('Recruiting calendar')}</b><span>${ui('When each internship, graduate scheme and stage opens, by sector and country, with the official portals.')}</span></a></li>
    <li><a href="${rel(from, U.toolkit)}"><b>${ui('Application toolkit')}</b><span>${ui('One-column CV templates in Word and LaTeX, and motivation letters sized to each school’s limit.')}</span></a></li>
    <li><a href="${rel(from, U.interview)}"><b>${ui('Interview prep')}</b><span>${ui('What each area asks and how often, your five stories, finance cards, case primer and practice cases.')}</span></a></li>
  </ul>
</section>

<div class="stories cx-doors">
  <section class="story-col" id="backgrounds" aria-labelledby="door-1">
    <p class="kicker">${ui('Door one')}</p>
    <h2 id="door-1" class="cx-door-h">${ui('I know what I studied')}</h2>
    <p>${ui('Pick your background. You will see every field and role family it leads to, grouped by how well it fits.')}</p>
    <ul class="cx-links">
${data.backgrounds.map((b) => `      <li><a href="${rel(from, U.bg(b.slug))}">${nm(b.name)}</a></li>`).join('\n')}
    </ul>
  </section>
  <section class="story-col" id="fields" aria-labelledby="door-2">
    <p class="kicker">${ui('Door two')}</p>
    <h2 id="door-2" class="cx-door-h">${ui('I know the field')}</h2>
    <p>${ui('Open a field for its map of areas and sectors, its role families with their scores, the employers and the backgrounds that fit.')}</p>
    <ul class="cx-links">
${data.fields.map((f) => `      <li><a href="${rel(from, U.field(f.slug))}">${nm(f.name)}</a> <span class="cx-count">${f.roles.length}</span></li>`).join('\n')}
    </ul>
  </section>
  <section class="story-col" id="destinations" aria-labelledby="door-3">
    <p class="kicker">${ui('Door three')}</p>
    <h2 id="door-3" class="cx-door-h">${ui('I know where I want to end up')}</h2>
    <p>${ui('Find the role you want and read how people get there: the degrees, the programmes, the timeline and the exits.')}</p>
    <ul class="cx-links">
      <li><a href="${rel(from, U.roles)}">${ui('All role families, searchable')}</a></li>
      <li><a href="${rel(from, U.compare)}">${ui('Compare roles: hours, stress, pay, entry')}</a></li>
      <li><a href="${rel(from, U.italy)}">${ui('Italy pay add-on')}</a></li>
      <li><a href="${rel(from, U.sources)}">${ui('Sources, scales and gaps')}</a></li>
    </ul>
  </section>
</div>

<section class="cx-band" aria-labelledby="fields-title">
  <h2 class="rubric" id="fields-title">${ui('The thirteen fields')}</h2>
  <div class="cx-table" role="region" tabindex="0" aria-labelledby="fields-title"><table class="cx-fields">
  <thead><tr><th scope="col">${ui('Field')}</th><th scope="col">${ui('Depth')}</th><th scope="col">${ui('Role families')}</th><th scope="col">${ui('What it is')}</th></tr></thead>
  <tbody>
${data.fields.map((f) => `  <tr><th scope="row"><a href="${rel(from, U.field(f.slug))}">${nm(f.name)}</a></th><td translate="no" lang="en">${esc(f.depth)}</td><td>${f.roles.length}</td><td translate="no" lang="en">${mdInline(from, f.what)}</td></tr>`).join('\n')}
  </tbody></table></div>
  <div class="cx-prose" translate="no" lang="en">${md(from, data.index.branchesNote)}</div>
</section>`;
    add({ path: from, title: 'Career Explorer', static: true, description: `What ${nRoles} graduate jobs in ${data.fields.length} fields are really like: the work, hours, stress, pay by region, the way in and the exits. Start from your degree, a field or the job you want.`, body });
  }());

  /* Backgrounds */
  data.backgrounds.forEach((b, bi) => {
    const from = U.bg(b.slug);
    const prev = data.backgrounds[bi - 1], next = data.backgrounds[bi + 1];
    const scaleLine = (data.index.scales.split('\n').find((l) => /Background fit/.test(l)) || '').replace(/^-\s*/, '');
    const sections = ['S', 'P', 'X'].map((lv) => {
      const fields = data.fields.filter((f) => f.overall[b.key] === lv);
      const roles = data.roles.filter((r) => r.matrix[b.key] === lv);
      const byField = data.fields.map((f) => [f, roles.filter((r) => r.field === f.slug)]).filter(([, rs]) => rs.length);
      const reasonLine = (f, part) => {
        const t = f.reasons.find((x) => x.part === part) || f.reasons[0];
        const rr = t.by[b.key];
        return `<p class="cx-reason"><span class="cx-reason-k">${part ? `<span translate="no">${esc(part.replace(/:.*/, ''))}</span> <span>${ui('rating')}</span>` : ui('Field rating')}</span> <span translate="no" lang="en"><b>${esc(P.stripMd(rr.rating))}</b> — ${mdInline(from, rr.reason)}</span></p>`;
      };
      return `<section class="cx-level cx-${LEVEL[lv]}" id="${LEVEL[lv]}" aria-labelledby="h-${LEVEL[lv]}">
  <h2 id="h-${LEVEL[lv]}" class="headline-2 cx-h2"><span>${ui(LEVEL_NAME[lv])}</span> <span class="cx-count"><b>${roles.length}</b> <span>${ui(roles.length === 1 ? 'role family' : 'role families')}</span></span></h2>
  <h3 class="rubric">${ui('Fields rated ' + LEVEL[lv] + ' overall')}</h3>
  ${fields.length ? `<ul class="cx-fieldfit">
${fields.map((f) => `    <li><a href="${rel(from, U.field(f.slug))}">${nm(f.name)}</a>${reasonLine(f, null)}</li>`).join('\n')}
  </ul>` : `<p class="cx-empty">${ui('No field is rated ' + LEVEL[lv] + ' overall for this background.')}</p>`}
  <h3 class="rubric">${ui('Role families rated ' + LEVEL[lv])}</h3>
  ${byField.length ? byField.map(([f, rs]) => {
        const parts = [...new Set(rs.map((r) => r.part))];
        return `<div class="cx-fieldgroup"><h4><a href="${rel(from, U.field(f.slug))}">${nm(f.name)}</a></h4>
${parts.map((part) => `${part ? `<p class="cx-part" translate="no" lang="en">${esc(part)}</p>` : ''}${reasonLine(f, part)}
<ul class="cx-rolelist">
${rs.filter((r) => r.part === part).map((r) => roleItem(from, r.id)).join('\n')}
</ul>`).join('\n')}</div>`;
      }).join('\n') : `<p class="cx-empty">${ui('No role family is rated ' + LEVEL[lv] + ' for this background.')}</p>`}
</section>`;
    }).join('\n');
    const counts = ['S', 'P', 'X'].map((lv) => [lv, data.roles.filter((r) => r.matrix[b.key] === lv).length]);
    const body = `<header class="cx-head">
  <p class="kicker">${ui('By background')}</p>
  <h1 class="headline cx-h1"><span>${ui('If you studied')}</span> ${nm(b.name)}</h1>
  <p class="standfirst">${ui('Every field and role family in the research, grouped by how well this background fits. A strong fit means the background is a standard feeder, not that entry is easy: check each role’s entry difficulty.')}</p>
  <p class="cx-scale" translate="no" lang="en">${mdInline(from, scaleLine)}</p>
  <ul class="cx-tally">${counts.map(([lv, n]) => `<li><a href="#${LEVEL[lv]}">${ui(LEVEL_NAME[lv])}</a> <b>${n}</b></li>`).join('')}</ul>
</header>
${sections}
<p class="cx-src-note">${uiRaw(`Ratings: the background fit matrix in the research index (section 3), one letter per role family; reasons: section 5 of each field’s report. See also <a href="${rel(from, U.sources)}#fit-matrix">the whole matrix</a>.`)}</p>
<nav class="cx-pager" aria-label="${ui('Other backgrounds')}">
  ${prev ? `<a rel="prev" href="${rel(from, U.bg(prev.slug))}"><span>${ui('Previous background')}</span>${nm(prev.name)}</a>` : '<span></span>'}
  ${next ? `<a rel="next" href="${rel(from, U.bg(next.slug))}"><span>${ui('Next background')}</span>${nm(next.name)}</a>` : '<span></span>'}
</nav>`;
    add({ path: from, title: `If you studied ${b.name}`, crumbs: [{ href: U.home, label: 'Career Explorer' }, { href: U.home + '#backgrounds', label: 'By background' }, { label: b.name, name: true }],
      description: `Which fields and role families a ${b.name} background leads to, rated strong, possible or stretch, with the reason for each.`, body });
  });

  /* Fields */
  data.fields.forEach((f, fi) => {
    const from = U.field(f.slug);
    const sl = slugger();
    ['what-it-is', 'map', 'roles', 'employers', 'backgrounds', 'italy-pay', 'sources', 'verify-title', 'toc-title', 'reality-title', 'scores'].forEach((x) => sl(x));
    const hid = (t) => sl(t);
    const s = f.sections;
    const prev = data.fields[fi - 1], next = data.fields[fi + 1];

    const scoreTable = `<div class="cx-table" role="region" tabindex="0" aria-labelledby="scores"><table class="cx-scoretable">
<caption id="scores">${ui('Role families and their scores')} <span>${ui('(from the research index; 1-5 scales on the sources page)')}</span></caption>
<thead><tr><th scope="col">${ui('Role family')}</th><th scope="col">${ui('Hours/week (peak)')}</th><th scope="col">${ui('Stress')}</th><th scope="col">${ui('People')}</th><th scope="col">${ui('Quant')}</th><th scope="col">${ui('Entry difficulty')}</th></tr></thead>
<tbody>
${f.roles.map((id) => { const r = roleById.get(id); const tl = (l) => `<span class="cx-tl" aria-hidden="true">${ui(l)}</span>`; return `<tr><th scope="row">${roleLink(from, id)}</th><td>${tl('Hours/week (peak)')}<span translate="no" lang="en">${mdInline(from, r.compare.hours)}</span></td>${['stress', 'people', 'quant', 'difficulty'].map((k) => `<td>${tl({ stress: 'Stress', people: 'People', quant: 'Quant', difficulty: 'Entry difficulty' }[k])}${pips(r.scores[k])} <span translate="no" lang="en">${mdInline(from, r.compare[k])}</span></td>`).join('')}</tr>`; }).join('\n')}
</tbody></table></div>`;

    let s3 = '';
    let list = [];
    const flush = () => { if (list.length) { s3 += `<ul class="cx-rolelist">\n${list.join('\n')}\n</ul>\n`; list = []; } };
    for (const blk of f.s3blocks) {
      if (blk.type === 'role') { list.push(roleItem(from, `${f.slug}/${blk.num}`)); continue; }
      flush();
      if (blk.type === 'heading') s3 += `<h3 id="${hid(blk.title)}" translate="no" lang="en">${mdInline(from, blk.title)}</h3>\n`;
      else s3 += `<div class="cx-prose" translate="no" lang="en">${md(from, blk.md, { headingId: hid })}</div>\n`;
    }
    flush();

    const itRows = f.italy.rows;
    const italyMd = [`| ${f.italy.header.join(' | ')} |`, `|${f.italy.header.map(() => '---').join('|')}|`, ...itRows.map((r) => `| ${r.join(' | ')} |`)].join('\n');

    const tocE = [['what-it-is', esc(s1Title(1))], ['map', esc(s1Title(2))], ['roles', esc(s1Title(3))], ['employers', esc(s1Title(4))],
      ['backgrounds', esc(s1Title(5))], ['italy-pay', ui('Italy pay (add-on)')], ['sources', esc(s1Title(6))]];
    function s1Title(n) { return ['', '1. What this branch is', '2. Map of areas and sectors', '3. Role families', '4. Banks vs. other employer types', '5. Which backgrounds fit this branch', '6. Sources'][n]; }

    const body = `<header class="cx-head">
  <p class="kicker"><span>${ui('Field')}</span> · <span translate="no" lang="en">${esc(f.depth)}</span> · <span>${f.roles.length}</span> <span>${ui('role families')}</span></p>
  <h1 class="headline cx-h1" translate="no" lang="en">${esc(f.name)}</h1>
  <p class="standfirst" translate="no" lang="en">${mdInline(from, f.what)}</p>
</header>
${verifyBox(from, f.gaps, 'Parts of this field to check first')}
<div class="cx-layout">
${toc(tocE)}
<div class="cx-body">
<div class="cx-prose cx-preface" translate="no" lang="en">${md(from, f.preface, { headingId: hid })}</div>
<section id="what-it-is" class="cx-sec"><h2 translate="no" lang="en">${esc(s1Title(1))}</h2><div class="cx-prose" translate="no" lang="en">${md(from, s[1], { headingId: hid })}</div></section>
<section id="map" class="cx-sec"><h2 translate="no" lang="en">${esc(s1Title(2))}</h2><div class="cx-prose" translate="no" lang="en">${md(from, s[2], { headingId: hid })}</div></section>
<section id="roles" class="cx-sec"><h2 translate="no" lang="en">${esc(s1Title(3))}</h2>
${scoreTable}
${s3}</section>
<section id="employers" class="cx-sec"><h2 translate="no" lang="en">${esc(s1Title(4))}</h2><div class="cx-prose" translate="no" lang="en">${md(from, s[4], { headingId: hid })}</div></section>
<section id="backgrounds" class="cx-sec"><h2 translate="no" lang="en">${esc(s1Title(5))}</h2>
<p class="cx-links-inline"><span>${ui('Each background’s full list of roles:')}</span> ${data.backgrounds.map((b) => `<a href="${rel(from, U.bg(b.slug))}">${nm(b.name)}</a>`).join(' · ')}</p>
<div class="cx-prose" translate="no" lang="en">${md(from, s[5], { headingId: hid })}</div></section>
<section id="italy-pay" class="cx-sec"><h2>${ui('Italy pay (add-on)')}</h2>
<p class="cx-note">${uiRaw(`From the Italy pay addendum (compiled 9 October 2026), which fills Italian gaps across all thirteen reports. How to read RAL, net pay and the 13th month: <a href="${rel(from, U.italy)}">Italy pay add-on</a>.`)}</p>
<div class="cx-prose" translate="no" lang="en">${f.italy.before ? md(from, f.italy.before) : ''}${md(from, italyMd)}${f.italy.after ? md(from, f.italy.after) : ''}</div></section>
<section id="sources" class="cx-sec"><h2 translate="no" lang="en">${esc(s1Title(6))}</h2><div class="cx-prose cx-sources" translate="no" lang="en">${md(from, s[6], { headingId: hid })}</div></section>
</div>
</div>
<nav class="cx-pager" aria-label="${ui('Other fields')}">
  ${prev ? `<a rel="prev" href="${rel(from, U.field(prev.slug))}"><span>${ui('Previous field')}</span>${nm(prev.name)}</a>` : '<span></span>'}
  ${next ? `<a rel="next" href="${rel(from, U.field(next.slug))}"><span>${ui('Next field')}</span>${nm(next.name)}</a>` : '<span></span>'}
</nav>`;
    add({ path: from, title: f.name, crumbs: [{ href: U.home, label: 'Career Explorer' }, { href: U.home + '#fields', label: 'By field' }, { label: f.name, name: true }],
      description: P.stripMd(f.what).slice(0, 300), body });
  });

  /* Roles */
  data.fields.forEach((f) => f.roles.forEach((id, ri) => {
    const r = roleById.get(id);
    const from = U.role(id);
    const sl = slugger();
    const T = P.TEMPLATE;
    T.forEach((t) => sl(t.anchor));
    ['glance', 'italy-pay', 'connections', 'verify-title', 'toc-title', 'reality-title'].forEach((x) => sl(x));
    const prev = f.roles[ri - 1], next = f.roles[ri + 1];

    const glance = `<section class="cx-glance" aria-labelledby="glance">
  <h2 id="glance" class="rubric">${ui('At a glance')}</h2>
  <dl class="cx-scores">
    ${score('People/communication', r.compare.people, r.scores.people, from)}
    ${score('Quantitative/technical', r.compare.quant, r.scores.quant, from)}
    ${score('Stress', r.compare.stress, r.scores.stress, from)}
    ${score('Entry difficulty', r.compare.difficulty, r.scores.difficulty, from)}
  </dl>
  <dl class="cx-facts">
    <div><dt>${ui('Hours a week, typical (peak)')}</dt><dd translate="no" lang="en">${mdInline(from, r.compare.hours)}</dd></div>
    <div class="cx-pay"><dt>${ui('Entry pay: US / UK / Italy (approx.)')}</dt><dd translate="no" lang="en">${mdInline(from, r.compare.pay)}</dd></div>
  </dl>
  <p class="cx-glance-foot"><a class="cx-jump" href="#how-to-enter">${ui('How to get there')} <span aria-hidden="true">↓</span></a>
  <span class="cx-src-note">${uiRaw(`From the cross-field comparison in the research index; scales on the <a href="${rel(from, U.sources)}#scales">sources page</a>. “n.r.d.” means no reliable data found.`)}</span></p>
</section>`;

    const secs = T.map((t) => {
      const s = r.sections[t.key];
      return `<section id="${t.anchor}" class="cx-sec" data-src="${t.key}" translate="no" lang="en"><h2>${mdInline(from, s.label)}</h2>
<div class="cx-prose">${md(from, s.md, { headingId: sl, headingShift: 1 })}</div></section>`;
    }).join('\n');

    let italy;
    if (r.italy) {
      const groups = new Map();
      for (const x of r.italy) { if (!groups.has(x.branch)) groups.set(x.branch, []); groups.get(x.branch).push(x.row); }
      italy = [...groups.entries()].map(([bname, rows]) => {
        const sec = data.italy.branches[bname];
        const tmd = [`| ${sec.header.join(' | ')} |`, `|${sec.header.map(() => '---').join('|')}|`, ...rows.map((i) => `| ${sec.rows[i].join(' | ')} |`)].join('\n');
        const other = bname !== f.name ? `<p class="cx-note"><span>${ui('From the add-on’s table for')}</span> <a href="${rel(from, U.field(data.fields.find((x) => x.name === bname).slug))}#italy-pay">${nm(bname)}</a>.</p>` : '';
        return `${other}<div class="cx-prose" data-src="italy" translate="no" lang="en">${md(from, tmd)}${sec.after ? md(from, sec.after) : ''}</div>`;
      }).join('\n');
    } else {
      italy = `<p class="cx-empty">${ui('The Italy pay add-on has no row for this role family. The Italian figures the report itself found, if any, are under the pay section above.')}</p>`;
    }

    /* Connections */
    const bgs = ['S', 'P', 'X'].map((lv) => {
      const list = data.backgrounds.filter((b) => r.matrix[b.key] === lv);
      return `<div><dt>${ui(LEVEL_NAME[lv])}</dt><dd>${list.length ? list.map((b) => `<a href="${rel(from, U.bg(b.slug))}#${LEVEL[lv]}">${nm(b.name)}</a>`).join(', ') : '—'}</dd></div>`;
    }).join('');
    const conn = `<section id="connections" class="cx-sec cx-connections" aria-labelledby="connections-h">
<h2 id="connections-h">${ui('Where this role connects')}</h2>
<h3>${ui('Roles named in its exit opportunities')}</h3>
${r.exitLinks.length ? `<ul class="cx-rolelist">${r.exitLinks.map((l) => roleItem(from, l.id, { field: true, scores: false, note: `<span class="cx-matched"><span>${ui('named as')}</span> <span translate="no" lang="en">“${esc(l.name)}”</span></span>` })).join('\n')}</ul>`
    : `<p class="cx-empty">${ui('None of the exits above names another role family exactly. Read them in full, or browse the related roles below.')}</p>`}
<h3>${ui('Roles whose exits lead here')}</h3>
${r.reachedFrom.length ? `<ul class="cx-rolelist">${r.reachedFrom.map((x) => roleItem(from, x, { field: true, scores: false })).join('\n')}</ul>` : `<p class="cx-empty">${ui('No other role family names this one in its exits.')}</p>`}
<h3><span>${ui('Other roles in')}</span> <a href="${rel(from, U.field(f.slug))}">${nm(f.name)}</a></h3>
<ul class="cx-rolelist">${f.roles.filter((x) => x !== id).map((x) => roleItem(from, x)).join('\n')}</ul>
<h3>${ui('Similar scores in other fields')}</h3>
<p class="cx-note">${ui('The closest matches on the four 1-5 scores (people, quant, stress, entry difficulty). A similar profile, not the same work.')}</p>
<ul class="cx-rolelist">${r.similar.map((x) => roleItem(from, x, { field: true })).join('\n')}</ul>
<h3>${ui('Which backgrounds fit')}</h3>
<dl class="cx-bgfit">${bgs}</dl>
<p class="cx-note">${uiRaw(`From the background fit matrix in the research index. The reasons are on each background’s page and in section 5 of the field’s report:`)} <a href="${rel(from, U.field(f.slug))}#backgrounds">${nm(f.name)}</a>.</p>
${r.calculators.length ? `<h3>${ui('Master’s calculators on this site')}</h3>
<ul class="cx-links">${r.calculators.map((c) => `<li><a href="${rel(from, c.href)}">${ui(c.label)}</a></li>`).join('')}</ul>` : ''}
</section>`;

    const tocE = [...T.map((t) => [t.anchor, mdInline(from, r.sections[t.key].label)]), ['italy-pay', ui('Italy pay (add-on)')], ['connections', ui('Where this role connects')]];
    const body = `<article class="cx-role">
<header class="cx-head">
  <p class="kicker"><a href="${rel(from, U.field(f.slug))}">${nm(f.name)}</a>${r.part ? ` · <span translate="no" lang="en">${esc(r.part)}</span>` : ''}</p>
  <h1 class="headline cx-h1" translate="no" lang="en">${esc(r.title)}</h1>
  <p class="cx-meta"><span>${ui('Role family')}</span> <span translate="no">${esc(r.num)}</span> · <a href="${rel(from, U.field(f.slug))}#roles"><span>${ui('All roles in')}</span> ${nm(f.name)}</a>${prev ? ` · <a href="${rel(from, U.role(prev))}" rel="prev">${ui('previous')}</a>` : ''}${next ? ` · <a href="${rel(from, U.role(next))}" rel="next">${ui('next')}</a>` : ''}</p>
</header>
${glance}
${verifyBox(from, r.gaps, 'Parts of this page to check first')}
<div class="cx-layout">
${toc(tocE)}
<div class="cx-body">
${r.preamble ? `<div class="cx-prose cx-preface" data-src="preamble" translate="no" lang="en">${md(from, r.preamble)}</div>` : ''}
${secs}
<section id="italy-pay" class="cx-sec"><h2>${ui('Italy pay (add-on)')}</h2>
<p class="cx-note">${uiRaw(`Rows from the Italy pay addendum (9 October 2026) that match this role. The match is the editors’; each row keeps the add-on’s own label, source and confidence. All rows for the field:`)} <a href="${rel(from, U.field(f.slug))}#italy-pay">${nm(f.name)}</a>${uiRaw(`; how to read Italian pay: <a href="${rel(from, U.italy)}">Italy pay add-on</a>.`)}</p>
${italy}
</section>
${conn}
</div>
</div>
<nav class="cx-pager" aria-label="${ui('Other roles in this field')}">
  ${prev ? `<a rel="prev" href="${rel(from, U.role(prev))}"><span>${ui('Previous role')}</span><span translate="no" lang="en">${esc(roleById.get(prev).title)}</span></a>` : `<a href="${rel(from, U.field(f.slug))}#roles"><span>${ui('Back to')}</span>${nm(f.name)}</a>`}
  ${next ? `<a rel="next" href="${rel(from, U.role(next))}"><span>${ui('Next role')}</span><span translate="no" lang="en">${esc(roleById.get(next).title)}</span></a>` : `<a href="${rel(from, U.field(f.slug))}#roles"><span>${ui('Back to')}</span>${nm(f.name)}</a>`}
</nav>
</article>`;
    add({ path: from, title: r.title, crumbs: [{ href: U.home, label: 'Career Explorer' }, { href: U.field(f.slug), label: f.name, name: true }, { label: r.title, name: true }],
      description: `${r.title} (${f.name}): what you do, hours and stress, pay by region with sources, career path, exits, employers and how to get in.`, body });
  }));

  /* All roles (door three) */
  (function roles() {
    const from = U.roles;
    const items = data.fields.map((f) => `<section class="cx-fieldblock" data-field="${f.slug}" aria-labelledby="rf-${f.slug}">
<h2 id="rf-${f.slug}" class="rubric"><a href="${rel(from, U.field(f.slug))}">${nm(f.name)}</a> <span class="cx-count">${f.roles.length}</span></h2>
<ul class="cx-rolelist">
${f.roles.map((id) => { const r = roleById.get(id); return roleItem(from, id).replace('<li class="cx-roleitem">', `<li class="cx-roleitem" data-id="${esc(r.slug)}" data-field="${f.slug}" data-stress="${r.scores.stress[0]}" data-people="${r.scores.people[0]}" data-quant="${r.scores.quant[0]}" data-difficulty="${r.scores.difficulty[0]}" data-hours="${r.scores.hours[0]}">`); }).join('\n')}
</ul></section>`).join('\n');
    const body = `<header class="cx-head">
  <p class="kicker">${ui('Door three')}</p>
  <h1 class="headline cx-h1">${ui('All role families')}</h1>
  <p class="standfirst">${ui('Every role in the research. Search by job title, employer or skill, or narrow the list by field and scores, then open a role for how to get there.')}</p>
</header>
<form class="cx-filters" data-cx-filters role="search" aria-label="${ui('Filter roles')}" hidden>
  <div class="cx-f-q"><label class="cx-label" for="rq">${ui('Search')}</label>
  <input id="rq" class="cx-input" type="search" name="q" placeholder="${ui('Job title, employer or skill')}" autocomplete="off" data-cx-search="${rel(from, 'careers/data/search-index.json')}" data-cx-base="${rel(from, U.home).replace(/index\.html$/, '')}" data-cx-inline></div>
  <div><label class="cx-label" for="rf">${ui('Field')}</label>
  <select id="rf" class="cx-input" name="field"><option value="">${ui('All fields')}</option>${data.fields.map((f) => `<option value="${f.slug}" translate="no">${esc(f.name)}</option>`).join('')}</select></div>
  <div><label class="cx-label" for="rd">${ui('Entry difficulty at most')}</label>
  <select id="rd" class="cx-input" name="difficulty"><option value="">${ui('Any')}</option>${[1, 2, 3, 4].map((n) => `<option value="${n}">${n}</option>`).join('')}</select></div>
  <div><label class="cx-label" for="rs">${ui('Stress at most')}</label>
  <select id="rs" class="cx-input" name="stress"><option value="">${ui('Any')}</option>${[1, 2, 3, 4].map((n) => `<option value="${n}">${n}</option>`).join('')}</select></div>
  <div><label class="cx-label" for="rl">${ui('Leans')}</label>
  <select id="rl" class="cx-input" name="lean"><option value="">${ui('Either way')}</option><option value="quant">${ui('More quantitative than people')}</option><option value="people">${ui('More people than quantitative')}</option><option value="even">${ui('Even')}</option></select></div>
  <p class="cx-f-count" aria-live="polite" data-cx-count></p>
</form>
<div class="cx-allroles">
${items}
</div>
<p class="cx-empty" data-cx-none hidden>${ui('No role matches these filters.')}</p>`;
    add({ path: from, title: 'All role families', static: true, crumbs: [{ href: U.home, label: 'Career Explorer' }, { label: 'All roles' }],
      description: `Search and filter all ${data.roles.length} role families by field, entry difficulty, stress and profile.`, body });
  }());

  /* Compare */
  (function compare() {
    const from = U.compare;
    const head = ['Role family', 'Field', 'Hours/week (peak)', 'Stress', 'People', 'Quant', 'Entry pay: US / UK / Italy (approx.)', 'Entry difficulty'];
    const sortKey = [null, 'field', 'hours', 'stress', 'people', 'quant', null, 'difficulty'];
    const rows = data.roles.map((r) => {
      const f = fieldBySlug.get(r.field);
      return `<tr data-id="${esc(r.slug)}" data-field="${r.field}" data-hours="${r.scores.hours[0]}" data-stress="${r.scores.stress[0]}" data-people="${r.scores.people[0]}" data-quant="${r.scores.quant[0]}" data-difficulty="${r.scores.difficulty[0]}" data-name="${esc(r.title.toLowerCase())}" data-fname="${esc(f.name)}">
<td class="cx-pick"><input type="checkbox" id="pk-${esc(r.slug)}" value="${esc(r.slug)}" aria-labelledby="pkl pt-${esc(r.slug)}"></td>
<th scope="row"><a id="pt-${esc(r.slug)}" href="${rel(from, U.role(r.id))}" translate="no" lang="en">${esc(r.title)}</a></th>
<td translate="no">${esc(f.name)}</td>
<td translate="no" lang="en">${mdInline(from, r.compare.hours)}</td>
${['stress', 'people', 'quant'].map((k) => `<td class="cx-n">${pips(r.scores[k])} <span translate="no" lang="en">${mdInline(from, r.compare[k])}</span></td>`).join('')}
<td class="cx-paycell" translate="no" lang="en">${mdInline(from, r.compare.pay)}</td>
<td class="cx-n">${pips(r.scores.difficulty)} <span translate="no" lang="en">${mdInline(from, r.compare.difficulty)}</span></td>
</tr>`;
    }).join('\n');
    const body = `<header class="cx-head">
  <p class="kicker">${ui('Compare')}</p>
  <h1 class="headline cx-h1">${ui('Compare roles')}</h1>
  <p class="standfirst">${ui('Hours, stress, how much of the job is people or numbers, entry pay and how hard it is to get in, for every role family. Sort a column, filter, or tick up to three roles to set them side by side.')}</p>
</header>
<div class="cx-prose cx-note" translate="no" lang="en">${md(from, data.index.compareIntro)}</div>
<form class="cx-filters" data-cx-compare-filters aria-label="${ui('Filter the table')}" hidden>
  <div class="cx-f-q"><label class="cx-label" for="cq">${ui('Role name')}</label><input id="cq" class="cx-input" type="search" name="q" autocomplete="off"></div>
  <div><label class="cx-label" for="cf">${ui('Field')}</label><select id="cf" class="cx-input" name="field"><option value="">${ui('All fields')}</option>${data.fields.map((f) => `<option value="${f.slug}" translate="no">${esc(f.name)}</option>`).join('')}</select></div>
  <div><label class="cx-label" for="cd">${ui('Entry difficulty at most')}</label><select id="cd" class="cx-input" name="difficulty"><option value="">${ui('Any')}</option>${[1, 2, 3, 4].map((n) => `<option value="${n}">${n}</option>`).join('')}</select></div>
  <div><label class="cx-label" for="cs">${ui('Stress at most')}</label><select id="cs" class="cx-input" name="stress"><option value="">${ui('Any')}</option>${[1, 2, 3, 4].map((n) => `<option value="${n}">${n}</option>`).join('')}</select></div>
  <div><label class="cx-label" for="cl">${ui('Leans')}</label><select id="cl" class="cx-input" name="lean"><option value="">${ui('Either way')}</option><option value="quant">${ui('More quantitative than people')}</option><option value="people">${ui('More people than quantitative')}</option><option value="even">${ui('Even')}</option></select></div>
  <p class="cx-f-count" aria-live="polite" data-cx-count></p>
</form>
<section class="cx-side" data-cx-side aria-labelledby="side-title" hidden>
  <h2 id="side-title" class="rubric">${ui('Side by side')}</h2>
  <p class="cx-note" data-cx-side-help>${ui('Tick up to three roles in the table.')}</p>
  <div class="cx-side-grid" data-cx-side-grid></div>
</section>
<div class="cx-table cx-compare" role="region" tabindex="0" aria-labelledby="cmp-cap"><table data-cx-compare>
<caption id="cmp-cap" class="visually-hidden">${ui('All role families compared')}</caption>
<thead><tr><th scope="col"><span class="visually-hidden" id="pkl">${ui('Compare')}</span></th>${head.map((h, i) => `<th scope="col"${sortKey[i] ? ` data-sort="${sortKey[i]}" aria-sort="none"` : ''}>${sortKey[i] ? `<button type="button" class="cx-sort">${ui(h)}<span aria-hidden="true"></span></button>` : ui(h)}</th>`).join('')}</tr></thead>
<tbody>
${rows}
</tbody></table></div>
<p class="cx-src-note">${uiRaw(`Entry pay cannot be sorted: the research gives it in local currency, base or total, by city and year, and does not convert it. Scores sort on the lowest figure given (“3-4” as 3, “4 (5 at top boutiques)” as 4); hours on the first (“75-85 (100-120)” as 75). Scales: <a href="${rel(from, U.sources)}#scales">sources page</a>.`)}</p>`;
    add({ path: from, title: 'Compare roles', static: true, crumbs: [{ href: U.home, label: 'Career Explorer' }, { label: 'Compare' }],
      description: 'Sort and filter every role family by hours, stress, people vs quantitative work, entry pay and entry difficulty; set up to three side by side.', body });
  }());

  /* Sources */
  (function sources() {
    const from = U.sources;
    const sl = slugger();
    ['scales', 'fit-matrix', 'assumptions', 'gaps', 'reports', 'branches-note', 'toc-title', 'reality-title'].forEach((x) => sl(x));
    const hid = (t) => sl(t);
    const body = `<header class="cx-head">
  <p class="kicker">${ui('Sources')}</p>
  <h1 class="headline cx-h1">${ui('Sources, scales and gaps')}</h1>
  <p class="standfirst">${ui('How the research was done, the scales every score uses, what the researchers assumed, what is still uncertain, and every source each report cites.')}</p>
</header>
<div class="cx-layout">
${toc([['about', ui('About the research')], ['scales', ui('Shared scales and conventions')], ['fit-matrix', ui('Background fit matrix')], ['assumptions', ui('Assumptions made')], ['gaps', ui('Gaps and low-confidence areas')], ['reports', ui('Sources by report')]])}
<div class="cx-body">
<section id="about" class="cx-sec"><h2>${ui('About the research')}</h2><div class="cx-prose" translate="no" lang="en">${md(from, data.index.intro)}${md(from, data.index.branchesNote)}</div>
<p class="cx-note">${uiRaw(`Italian pay has its own page: <a href="${rel(from, U.italy)}">Italy pay add-on</a>.`)}</p></section>
<section id="scales" class="cx-sec"><h2>${ui('Shared scales and conventions')}</h2><div class="cx-prose" translate="no" lang="en">${md(from, data.index.scales)}</div></section>
<section id="fit-matrix" class="cx-sec"><h2>${ui('Background fit matrix')}</h2><div class="cx-prose" translate="no" lang="en">${md(from, data.index.matrixIntro)}${md(from, data.index.matrixOverall)}</div>
<p class="cx-note"><span>${ui('Role-family ratings are on each background’s page:')}</span> ${data.backgrounds.map((b) => `<a href="${rel(from, U.bg(b.slug))}">${nm(b.name)}</a>`).join(' · ')}</p></section>
<section id="assumptions" class="cx-sec"><h2>${ui('Assumptions made')}</h2><div class="cx-prose" translate="no" lang="en">${md(from, data.index.assumptions)}</div></section>
<section id="gaps" class="cx-sec"><h2>${ui('Gaps and low-confidence areas to verify')}</h2><div class="cx-prose" translate="no" lang="en">${md(from, data.gaps.map((g) => g.md).join('\n'))}</div></section>
<section id="reports" class="cx-sec"><h2>${ui('Sources by report')}</h2>
${data.fields.map((f) => `<details class="cx-srcfold" id="src-${f.slug}"><summary><span translate="no" lang="en">${esc(f.name)}</span></summary><div class="cx-prose cx-sources" translate="no" lang="en">${md(from, f.sections[6], { headingId: hid })}</div><p class="cx-note"><a href="${rel(from, U.field(f.slug))}"><span>${ui('Open the field')}</span> ${nm(f.name)}</a></p></details>`).join('\n')}
</section>
</div></div>`;
    add({ path: from, title: 'Sources, scales and gaps', static: true, crumbs: [{ href: U.home, label: 'Career Explorer' }, { label: 'Sources' }],
      description: 'The sources behind every Career Explorer page, the 1-5 rating scales, the researchers’ assumptions and the list of gaps to verify.', body });
  }());

  /* Italy pay add-on */
  (function italyPage() {
    const from = U.italy;
    const sl = slugger();
    ['how-to-read', 'by-field', 'benchmarks', 'italy-sources', 'verify-title', 'toc-title', 'reality-title'].forEach((x) => sl(x));
    const hid = (t) => sl(t);
    const I = data.italy;
    const gapItaly = Object.entries(require('./config').GAPS).filter(([, v]) => v.italyPage).map(([n]) => ({ n: Number(n) }));
    const body = `<header class="cx-head">
  <p class="kicker">${ui('Italy pay add-on')}</p>
  <h1 class="headline cx-h1">${ui('Italian pay, field by field')}</h1>
  <div class="standfirst cx-prose" translate="no" lang="en">${md(from, I.preface)}</div>
</header>
${verifyBox(from, gapItaly, 'Italian pay: what is still missing')}
<div class="cx-layout">
${toc([['how-to-read', ui('How to read Italian pay')], ['by-field', ui('Pay by field and role family')], ['benchmarks', ui('Graduate outcome benchmarks')], ['italy-sources', ui('Sources')]])}
<div class="cx-body">
<section id="how-to-read" class="cx-sec"><h2 translate="no" lang="en">1. How to read Italian pay</h2><div class="cx-prose" translate="no" lang="en">${md(from, I.howToRead, { headingId: hid })}</div></section>
<section id="by-field" class="cx-sec"><h2 translate="no" lang="en">2. Pay by branch and role family</h2><div class="cx-prose" translate="no" lang="en">${md(from, I.intro)}</div>
${Object.entries(I.branches).map(([bname, sec]) => {
      const f = data.fields.find((x) => x.name === bname);
      const tmd = [`| ${sec.header.join(' | ')} |`, `|${sec.header.map(() => '---').join('|')}|`, ...sec.rows.map((r) => `| ${r.join(' | ')} |`)].join('\n');
      return `<h3 id="${hid(bname)}"><a href="${rel(from, U.field(f.slug))}">${nm(bname)}</a></h3><div class="cx-prose" translate="no" lang="en">${sec.before ? md(from, sec.before) : ''}${md(from, tmd)}${sec.after ? md(from, sec.after) : ''}</div>`;
    }).join('\n')}
</section>
<section id="benchmarks" class="cx-sec"><h2 translate="no" lang="en">3. Graduate outcome benchmarks</h2><div class="cx-prose" translate="no" lang="en">${md(from, I.benchmarks, { headingId: hid })}</div></section>
<section id="italy-sources" class="cx-sec"><h2 translate="no" lang="en">4. Sources</h2><div class="cx-prose cx-sources" translate="no" lang="en">${md(from, I.sources, { headingId: hid })}</div></section>
</div></div>`;
    add({ path: from, title: 'Italy pay add-on', static: true, crumbs: [{ href: U.home, label: 'Career Explorer' }, { label: 'Italy pay' }],
      description: 'Italian gross pay (RAL) by field and role family from recruiter guides, contract tables and postings, with source, year and confidence for every row.', body });
  }());

  /* Career Compass: a static introduction (and a way round for readers
   * without scripts); careers/assets/compass.js draws the questionnaire and
   * the results into it from careers/data/compass-data.js. */
  (function compassPage() {
    const from = U.compass;
    const body = `<header class="cx-head">
  <p class="kicker">${ui('Career Compass · for when you have not decided yet')}</p>
  <h1 class="headline cx-h1">${ui('Career Compass')}</h1>
  <p class="standfirst">${ui('A short questionnaire that ranks all 124 role families in the Career Explorer against what you studied, what you would enjoy doing and how you want to work, and shows the reasons, the obstacles and the research behind each one.')}</p>
</header>
<div class="cc-app" data-cc-app>
<div class="cc-intro" data-cc-intro>
  <div class="cc-resume resume-bar" data-cc-resume hidden><span>${ui('You have answers saved in this browser.')}</span><button type="button" class="btn small primary" data-cc-resume-go>${ui('Pick up where you left off')}</button><button type="button" class="btn small ghost" data-cc-resume-clear>${ui('Clear them')}</button></div>
  <div class="cc-modes">
    <div class="cc-mode">
      <h2 class="cx-door-h">${ui('Quick')}</h2>
      <p>${ui('8 questions, about 2 minutes: your degree, your stage, the work you would enjoy, and how you want to work.')}</p>
      <button type="button" class="btn primary" data-cc-start="quick" hidden>${ui('Start the quick version')}</button>
    </div>
    <div class="cc-mode">
      <h2 class="cx-door-h">${ui('Full')}</h2>
      <p>${ui('17 questions, about 6 minutes. Adds citizenship, languages and where you want to work, pressure and competition, employers, sectors, more study and AI.')}</p>
      <button type="button" class="btn primary" data-cc-start="full" hidden>${ui('Start the full version')}</button>
    </div>
  </div>
  <noscript><p class="cc-warn">${uiRaw('The Career Compass needs JavaScript. Without it, start from <a href="' + rel(from, U.home) + '#backgrounds">what you studied</a> or <a href="' + rel(from, U.compare) + '">compare every role</a>.')}</p></noscript>
  <div class="stories cc-promise">
    <section class="story-col">
      <h2 class="rubric">${ui('What you get')}</h2>
      <ul>
        <li>${ui('Three fields and eight role families that fit now, plus those that fit later, after a PhD or a first job elsewhere.')}</li>
        <li>${ui('For each role, the answers that moved it up or down, its scores, and the research’s own lines on the main door, language, visas, AI and whether a master’s helps.')}</li>
        <li>${ui('A door that is still open for every hard-to-enter role, and what would change your list.')}</li>
        <li>${ui('The myths and constraints your answers run into, quoted from the research.')}</li>
      </ul>
    </section>
    <section class="story-col">
      <h2 class="rubric">${ui('What it is not')}</h2>
      <ul>
        <li>${ui('Not a personality test: no types, no labels, nothing said about you that you did not say.')}</li>
        <li>${ui('Not a prediction. Interest tests predict job satisfaction only weakly; the results end with cheap ways to test a career for real.')}</li>
        <li>${ui('Not advice. Every figure is dated and approximate, with its source on the role pages.')}</li>
      </ul>
    </section>
    <section class="story-col">
      <h2 class="rubric">${ui('Your answers')}</h2>
      <ul>
        <li>${ui('Scored in this browser. Nothing is sent anywhere, and there is no account.')}</li>
        <li>${ui('Saved in this browser so you can come back; “Start again” clears them.')}</li>
        <li>${ui('A share link carries them after the “#” in the address, which browsers do not send to servers.')}</li>
      </ul>
    </section>
  </div>
</div>
<div class="cc-stage" data-cc-stage hidden></div>
</div>`;
    add({ path: from, title: 'Career Compass', static: true, crumbs: [{ href: U.home, label: 'Career Explorer' }, { label: 'Compass' }],
      scripts: ['careers/data/compass-data.js', 'careers/assets/compass-core.js', 'careers/assets/compass.js'],
      description: 'A short questionnaire for undecided students: ranks 124 graduate role families against your degree, interests and constraints, and shows why, what stands in the way, and what to check next.', body });
  }());

  /* Getting in: recruiting calendar, application toolkit, interview prep,
   * and the template files they offer (tools/careers/getting-in.js). */
  const gettingIn = require('./getting-in').build({ ROOT, ui, uiRaw, rel, U, esc, nm, add, md, mdInline });

  function searchIndex() {
    const clip = (s, n) => { s = P.stripMd(s).replace(/https?:\/\/\S+/g, '').replace(/\s+/g, ' ').trim(); return s.length > n ? s.slice(0, n) : s; };
    return data.roles.map((r) => ({
      u: `roles/${r.slug}.html`, t: r.title, f: fieldBySlug.get(r.field).name, s: r.field,
      n: [r.shortName, r.compare.name].filter((x, i, a) => x && a.indexOf(x) === i).join(' · '),
      w: clip(r.sections.what.md, 500), e: clip(r.sections.tiers.md, 700),
      x: [r.scores.people[0], r.scores.quant[0], r.scores.stress[0], r.scores.difficulty[0]]
    }));
  }

  /* Interface strings that js/i18n-it.js does not translate. */
  function missingIt() {
    const src = fs.readFileSync(path.join(ROOT, 'js/i18n-it.js'), 'utf8');
    const s = { I18N: { add: (l, d) => { s.dict = d; } } };
    require('vm').runInNewContext(src, s);
    const norm = (x) => x.replace(/\s+/g, ' ').trim();
    return [...used].map(norm).filter((k) => /[a-z]{3}/.test(k) && s.dict[k] === undefined && s.dict[k.replace(/&/g, '&amp;')] === undefined);
  }

  return { pages: () => pages, files: () => gettingIn.files, searchIndex, missingIt, used, U, rel };
}

module.exports = { site };
