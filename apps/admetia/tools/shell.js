/* ---------------------------------------------------------------------------
 * The site's shared chrome, written once here and stamped into every page:
 *
 *   skip link · top strip (language picker; the Admissions
 *   Index only on the master's pages) · nameplate · global navigation (the
 *   five sections, named by task) · the current section's own navigation ·
 *   breadcrumbs · the footer's site index.
 *
 * Two consumers:
 *
 *   tools/build-shell.js      rewrites the blocks between the shell markers
 *                             in the hand-written root pages (npm run shell)
 *   tools/careers/render.js   builds the Career Explorer's pages with it
 *
 * tests/ux-test.js fails when a page's stamped block is not what this file
 * produces, so the navigation cannot drift from page to page.
 *
 * Every link is written from the site root ("careers/toolkit.html") and made
 * relative to the page that carries it, so pages work from any folder and
 * under GitHub Pages' /admetia/ path.
 * ------------------------------------------------------------------------- */

'use strict';

const path = require('path');

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const MOTTO = 'The way in — independent guides to master’s admissions, careers and working abroad';

/* The five sections. The label is the task a reader arrives with. */
const SECTIONS = [
  { id: 'study', label: 'Choose a master’s', href: 'study.html',
    blurb: 'Compare programmes, check what each one requires and costs, and test your chances.' },
  { id: 'careers', label: 'Explore careers', href: 'careers/index.html',
    blurb: 'What each role involves, what it pays, and which degrees lead there.' },
  { id: 'jobs', label: 'Find an internship or job', href: 'jobs.html',
    blurb: 'How hiring works in each country, when to apply, and how to prepare.' },
  { id: 'move', label: 'Plan a move', href: 'map.html',
    blurb: 'Countries and cities, the route on your passport, costs, and the first weeks.' },
  { id: 'method', label: 'Sources and method', href: 'method.html',
    blurb: 'Where every figure comes from, how it was checked, and what is still unknown.' }
];
const sectionById = Object.fromEntries(SECTIONS.map((s) => [s.id, s]));

/* Each section's own navigation. `key` is what a page names as its current
 * item; in the master's section it is also the data-sec js/theme.js marks
 * for the calculator tracks (masters.html?track=mif is "masters:mif"). */
const LOCAL = {
  study: [
    { key: 'study', label: 'Overview', href: 'study.html' },
    { key: 'programmes', label: 'Programme Directory', href: 'programmes.html' },
    { key: 'business', label: 'Business calculators', href: 'business.html', items: [
      { key: 'mba', label: 'MBA', href: 'mba.html' },
      { key: 'masters:mif', label: 'Finance', href: 'masters.html?track=mif' },
      { key: 'masters:mim', label: 'Management', href: 'masters.html?track=mim' },
      { key: 'masters:marketing', label: 'Marketing', href: 'masters.html?track=marketing' }
    ] },
    { key: 'it', label: 'Computing calculators', href: 'it.html', items: [
      { key: 'computing:cs', label: 'Computer Science', href: 'computing.html?track=cs' },
      { key: 'computing:dsai', label: 'Data & AI', href: 'computing.html?track=dsai' },
      { key: 'computing:conversion', label: 'Conversion', href: 'computing.html?track=conversion' }
    ] }
  ],
  careers: [
    { key: 'careers/index.html', label: 'Overview', href: 'careers/index.html' },
    { key: 'careers/compass.html', label: 'Career Compass', href: 'careers/compass.html' },
    { key: 'careers/index.html#backgrounds', label: 'By what you studied', href: 'careers/index.html#backgrounds' },
    { key: 'careers/index.html#fields', label: 'By field', href: 'careers/index.html#fields' },
    { key: 'careers/roles/index.html', label: 'All roles', href: 'careers/roles/index.html' },
    { key: 'careers/compare.html', label: 'Compare roles', href: 'careers/compare.html' },
    { key: 'careers/italy-pay.html', label: 'Italian pay', href: 'careers/italy-pay.html' },
    { key: 'careers/sources.html', label: 'Research sources', href: 'careers/sources.html' }
  ],
  jobs: [
    { key: 'jobs', label: 'Overview', href: 'jobs.html' },
    { key: 'hiring', label: 'Hiring by country', href: 'hiring.html' },
    { key: 'careers/recruiting-calendar.html', label: 'Recruiting calendar', href: 'careers/recruiting-calendar.html' },
    { key: 'careers/toolkit.html', label: 'Application toolkit', href: 'careers/toolkit.html' },
    { key: 'careers/interview-prep.html', label: 'Interview prep', href: 'careers/interview-prep.html' }
  ],
  /* Plan a move: the country's own views are drawn by js/page-map.js, which
   * knows which country is open. */
  move: [],
  method: []
};

/* The hand-written root pages and what each one is. `ticker`: the page
 * carries the moving Admissions Index (the master's pages only). `intro`:
 * the opening titles may play on arrival from another site. */
const ROOT_PAGES = {
  'index.html': { section: null, strip: 'The way in', full: true },
  'study.html': { section: 'study', current: 'study', ticker: true, intro: true, crumbs: [] },
  'programmes.html': { section: 'study', current: 'programmes', ticker: true, crumbs: [['Programme Directory']] },
  'business.html': { section: 'study', current: 'business', ticker: true, intro: true, crumbs: [['Business calculators']] },
  'it.html': { section: 'study', current: 'it', ticker: true, intro: true, crumbs: [['Computing calculators']] },
  'mba.html': { section: 'study', current: 'mba', ticker: true, crumbs: [['Business calculators', 'business.html'], ['MBA calculator']] },
  'masters.html': { section: 'study', current: null, ticker: true, crumbs: [['Business calculators', 'business.html'], ['Master’s calculator']] },
  'computing.html': { section: 'study', current: null, ticker: true, crumbs: [['Computing calculators', 'it.html'], ['Computing calculator']] },
  'jobs.html': { section: 'jobs', current: 'jobs', crumbs: [] },
  'hiring.html': { section: 'jobs', current: 'hiring', crumbs: [['Hiring by country']] },
  'map.html': { section: 'move', current: null, crumbs: [], dynamicCrumbs: true },
  'method.html': { section: 'method', current: null, crumbs: [] }
};

function rel(from, to) {
  const m = /^([^?#]*)(.*)$/.exec(to);
  let r = path.posix.relative(path.posix.dirname(from), m[1]);
  if (!r) r = path.posix.basename(m[1]);
  return r + m[2];
}

/* opts:
 *   path      the page, from the site root ("careers/roles/x.html")
 *   section   one of SECTIONS' ids, or null on the front page
 *   current   the key of the page's item in the section's navigation
 *   crumbs    [[label, href?], …] after the section; the last has no href
 *   ticker    carry the Admissions Index
 *   strip     the label in the top strip (default: the section's name)
 *   full      the full nameplate with its motto (the front page)
 *   t         (label) → html, for interface strings (default: escape)
 *   name      (label) → html, for names that are never translated
 */
function top(opts) {
  const from = opts.path;
  const r = (to) => rel(from, to);
  const t = opts.t || esc;
  const sec = opts.section ? sectionById[opts.section] : null;
  const stripLabel = opts.strip || (sec ? sec.label : 'Admetia');

  const strip = opts.ticker
    ? `<div class="ticker" role="region" aria-label="${t('Admissions index')}">
  <div class="ticker-label"><span class="ticker-arrow" aria-hidden="true">↗</span><span class="ticker-name">${t('Admissions index')}</span></div>
  <div class="ticker-view"><div class="ticker-track"></div></div>
  <button type="button" class="ticker-pause" aria-pressed="false">${t('Pause')}</button>
  <div class="language"></div>
</div>`
    : `<div class="ticker strip" role="region" aria-label="${t('Display settings')}">
  <div class="ticker-label"><span class="ticker-name">${t(stripLabel)}</span></div>
  <div class="ticker-view"></div>
  <div class="language"></div>
</div>`;

  const mast = `<header class="masthead${opts.full ? '' : ' compact'}">
  <a class="nameplate" href="${r('index.html')}">Admetia</a>
  <p class="motto">${t(MOTTO)}</p>
</header>`;

  const globalNav = `<nav class="site-nav" aria-label="${t('Main')}">
  <button type="button" class="site-nav-toggle" aria-expanded="false" aria-controls="site-nav-list" hidden><span class="site-nav-toggle-k">${t('Menu')}</span>${sec ? `<span class="visually-hidden">: </span><span class="site-nav-toggle-here">${t(sec.label)}</span>` : ''}</button>
  <ul class="site-nav-list" id="site-nav-list">
${SECTIONS.map((s) => `    <li><a href="${r(s.href)}" data-section="${s.id}"${sec && s.id === sec.id ? ` aria-current="${opts.current === s.id || (s.id === 'careers' && opts.current === 'careers/index.html') ? 'page' : 'true'}"` : ''}>${t(s.label)}</a></li>`).join('\n')}
  </ul>
</nav>`;

  const cur = (key) => (key === opts.current ? ' class="on" aria-current="page"' : '');
  const item = (x) => `<a href="${r(x.href)}" data-sec="${x.key}"${cur(x.key)}>${t(x.label)}</a>`;
  const local = sec && LOCAL[sec.id].length ? `<nav class="sections" aria-label="${t(sec.label)}">
  <div class="sections-inner">
${LOCAL[sec.id].map((x) => x.items
    ? `    <div class="sec-cluster">
      <a class="sec-group${x.key === opts.current ? ' on' : ''}" href="${r(x.href)}" data-sec="${x.key}"${x.key === opts.current ? ' aria-current="page"' : ''}>${t(x.label)}</a>
      <span class="sec-items">
${x.items.map((y) => '        ' + item(y)).join('\n')}
      </span>
    </div>`
    : '    ' + item(x)).join('\n')}
  </div>
</nav>` : '';

  /* Breadcrumbs: Home, the section, then the page's own trail. The section
   * hub itself shows only "Home › section" when it has a trail to anchor
   * (the Atlas fills its own when a country is open). */
  let crumbs = '';
  if (sec && opts.crumbs) {
    const trail = [[t('Home'), 'index.html']];
    if (opts.crumbs.length || opts.dynamicCrumbs) trail.push([t(sec.label), sec.href]);
    else trail.push([t(sec.label)]);
    for (const c0 of opts.crumbs) {
      const c = Array.isArray(c0) ? { label: c0[0], href: c0[1] } : c0;
      trail.push([c.name ? (opts.name || esc)(c.label) : t(c.label), c.href]);
    }
    if (opts.dynamicCrumbs) trail[trail.length - 1].length = 1;
    crumbs = `<nav class="trail" aria-label="${t('Breadcrumb')}"><ol id="trail">` + trail.map((c, i) => {
      const last = i === trail.length - 1;
      return last || !c[1] ? `<li><span${last ? ' aria-current="page"' : ''}>${c[0]}</span></li>` : `<li><a href="${r(c[1])}">${c[0]}</a></li>`;
    }).join('') + '</ol></nav>';
  }

  return `<a class="skip" href="#main">${t('Skip to content')}</a>

${strip}

${mast}

${globalNav}
${local ? '\n' + local + '\n' : ''}${crumbs ? '\n' + crumbs + '\n' : ''}`;
}

/* The footer's site index: every section with the pages a reader is most
 * likely to want, so no page is a dead end. */
const FOOT = [
  ['study', [['Programme Directory', 'programmes.html'], ['Business calculators', 'business.html'], ['Computing calculators', 'it.html']]],
  ['careers', [['Career Compass', 'careers/compass.html'], ['All roles', 'careers/roles/index.html'], ['Compare roles', 'careers/compare.html'], ['Italian pay', 'careers/italy-pay.html']]],
  ['jobs', [['Hiring by country', 'hiring.html'], ['Recruiting calendar', 'careers/recruiting-calendar.html'], ['Application toolkit', 'careers/toolkit.html'], ['Interview prep', 'careers/interview-prep.html']]],
  ['move', [['All 46 countries', 'map.html#countries'], ['How to read the Atlas', 'method.html#atlas']]],
  ['method', [['How the calculators score', 'method.html#calculators'], ['Research library', 'method.html#library'], ['Privacy and saved answers', 'method.html#privacy'], ['Credits', 'method.html#credits']]]
];

function foot(opts) {
  const r = (to) => rel(opts.path, to);
  const t = opts.t || esc;
  return `<nav class="site-foot" aria-label="${t('Site index')}">
${FOOT.map(([id, links]) => `  <div class="site-foot-col">
    <p class="site-foot-h"><a href="${r(sectionById[id].href)}">${t(sectionById[id].label)}</a></p>
    <ul>
${links.map(([l, h]) => `      <li><a href="${r(h)}">${t(l)}</a></li>`).join('\n')}
    </ul>
  </div>`).join('\n')}
</nav>`;
}

/* Every interface string this file prints, for the Italian checks. */
function strings() {
  const out = new Set(['Skip to content', 'Admissions index', 'Pause', 'Play', 'Display settings', 'Main', 'Menu', 'Home', 'Breadcrumb', 'Site index', MOTTO, 'The way in']);
  for (const s of SECTIONS) { out.add(s.label); out.add(s.blurb); }
  for (const list of Object.values(LOCAL)) for (const x of list) { out.add(x.label); (x.items || []).forEach((y) => out.add(y.label)); }
  for (const p of Object.values(ROOT_PAGES)) (p.crumbs || []).forEach((c) => out.add(c[0]));
  for (const [, links] of FOOT) links.forEach(([l]) => out.add(l));
  return [...out];
}

module.exports = { SECTIONS, LOCAL, ROOT_PAGES, FOOT, MOTTO, top, foot, rel, esc, strings, sectionById };
