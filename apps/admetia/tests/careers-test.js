/* The Career Explorer (careers/), checked against the research it is built
 * from (research/branches/):
 *
 *   current     the committed pages are what `npm run careers` makes now
 *   counts      one page per field, background and role family parsed
 *   sections    every role page has all ten template sections, none empty
 *   fidelity    each role page's words match its source, within 1%
 *   links       every internal link and #anchor resolves, on the new pages
 *               and on the pages that link to them; search results too
 *   requests    nothing is loaded from another host
 *   weight      no page is heavier than the limit below
 *   sitemap     lists every page, old and new
 *   nav         every page carries the Careers link
 *   compass     the Career Compass's data is current, every role is tagged,
 *               every quoted passage was found, every interface string has
 *               Italian, and the scoring behaves on known profiles */
'use strict';
const fs = require('fs'), path = require('path');
const APP = path.join(__dirname, '..');
const { buildData } = require('../tools/build-careers');
const R = require('../tools/careers/render');
const M = require('../tools/careers/md');
const P = require('../tools/careers/parse');

let pass = 0, fail = 0;
function t(label, cond, extra) { if (cond) { pass++; console.log('PASS  ' + label); } else { fail++; console.log('FAIL  ' + label + (extra ? '  → ' + extra : '')); } }
const read = (f) => fs.readFileSync(path.join(APP, f), 'utf8');
const list = (d) => fs.readdirSync(path.join(APP, d)).filter((f) => f.endsWith('.html'));

/* -------------------------------------------------------------- current --- */
const data = buildData();
const site = R.site(APP, data);
const pages = site.pages();
const stale = pages.filter((p) => !fs.existsSync(path.join(APP, 'careers', p.path)) || read('careers/' + p.path) !== p.html).map((p) => p.path);
t('the committed pages match a fresh build (run npm run careers)', stale.length === 0, stale.slice(0, 5).join(', '));
const idxNow = JSON.stringify(site.searchIndex()) + '\n';
t('the search index matches a fresh build', read('careers/data/search-index.json') === idxNow);

const untranslated = site.missingIt();
t('every interface string has an Italian entry in js/i18n-it.js', untranslated.length === 0, untranslated.slice(0, 5).join(' | '));

/* --------------------------------------------------------------- counts --- */
t('13 fields parsed', data.fields.length === 13, String(data.fields.length));
t('11 backgrounds parsed', data.backgrounds.length === 11, String(data.backgrounds.length));
const declared = data.fields.reduce((s, f) => s + f.roleCount, 0);
t('role families parsed = the count index.md declares (' + declared + ')', data.roles.length === declared, String(data.roles.length));
t('one field page per field', list('careers/fields').length === data.fields.length, String(list('careers/fields').length));
t('one background page per background', list('careers/backgrounds').length === data.backgrounds.length);
const rolePages = list('careers/roles').filter((f) => f !== 'index.html');
t('one role page per role family', rolePages.length === data.roles.length, rolePages.length + ' vs ' + data.roles.length);
t('every role family has its own page file', data.roles.every((r) => rolePages.includes(r.slug + '.html')));
const htmlFiles = [];
(function walk(d) {
  for (const e of fs.readdirSync(path.join(APP, d), { withFileTypes: true })) {
    const rel = d + '/' + e.name;
    if (e.isDirectory()) walk(rel); else if (e.name.endsWith('.html')) htmlFiles.push(rel);
  }
}('careers'));
t('no stray pages in careers/ (every file is one the build makes)', htmlFiles.length === pages.length, htmlFiles.length + ' files, ' + pages.length + ' built');

/* ------------------------------------------------------------- sections --- */
/* The element that opens at `start`, with everything inside it. */
function element(html, start) {
  const tag = /^<([a-z0-9]+)/i.exec(html.slice(start))[1];
  const re = new RegExp(`<(/?)${tag}\\b[^>]*>`, 'gi');
  re.lastIndex = start;
  let depth = 0, m;
  while ((m = re.exec(html))) {
    depth += m[1] ? -1 : 1;
    if (!depth) return html.slice(start, re.lastIndex);
  }
  throw new Error('unclosed ' + tag);
}
const text = (h) => h.replace(/<[^>]+>/g, ' ').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&amp;/g, '&');
const missing = [], emptyS = [], words = [];
for (const r of data.roles) {
  const html = read(`careers/roles/${r.slug}.html`);
  let got = 0, want = 0;
  for (const tp of P.TEMPLATE) {
    const at = html.indexOf(`<section id="${tp.anchor}" class="cx-sec" data-src="${tp.key}"`);
    if (at < 0) { missing.push(`${r.id} ${tp.key}`); continue; }
    const el = element(html, at);
    const body = el.replace(/<h2>[\s\S]*?<\/h2>/, '');
    if (M.countWords(text(body)) === 0) emptyS.push(`${r.id} ${tp.key}`);
    got += M.countWords(text(el));
    want += M.words(r.sections[tp.key].label) + M.words(r.sections[tp.key].md);
  }
  if (r.preamble) {
    const at = html.indexOf('data-src="preamble"');
    got += M.countWords(text(element(html, html.lastIndexOf('<', at))));
    want += M.words(r.preamble);
  }
  /* The add-on rows: the table header, each matched row and the notes. */
  const groups = new Map();
  for (const x of r.italy || []) { if (!groups.has(x.branch)) groups.set(x.branch, []); groups.get(x.branch).push(x.row); }
  for (const [b, rows] of groups) {
    const s = data.italy.branches[b];
    want += M.words('| ' + s.header.join(' | ') + ' |') + rows.reduce((n, i) => n + M.words('| ' + s.rows[i].join(' | ') + ' |'), 0) + (s.after ? M.words(s.after) : 0);
  }
  let from = 0, at;
  while ((at = html.indexOf('data-src="italy"', from)) > -1) {
    got += M.countWords(text(element(html, html.lastIndexOf('<', at))));
    from = at + 1;
  }
  const tol = Math.max(3, Math.ceil(want * 0.01));
  if (Math.abs(got - want) > tol) words.push(`${r.id}: ${got} rendered vs ${want} in the source`);
}
t('every role page has all ten template sections', missing.length === 0, missing.slice(0, 5).join(', '));
t('no template section is empty', emptyS.length === 0, emptyS.slice(0, 5).join(', '));
t('every role page carries its source’s words (within 1%)', words.length === 0, words.slice(0, 5).join(' | '));

/* ---------------------------------------------------------------- links --- */
const ROOT_PAGES = Object.keys(require('../tools/shell.js').ROOT_PAGES);
const idCache = new Map();
function ids(file) {
  if (!idCache.has(file)) idCache.set(file, new Set([...read(file).matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
  return idCache.get(file);
}
/* Two pages read their address as a route, not an anchor: a country's guide
 * (map.html#de, #de/hiring, #de/hiring/apply) and a hiring plan
 * (hiring.html#de/graduated/first, or "-" before a country is chosen). A
 * route counts as resolving when its country and its view exist. */
const ATLAS_IDS = new Set(require('../tools/visuals.js').atlas().countries.map((c) => c.id.toLowerCase()));
const ATLAS_VIEWS = new Set([...read('js/page-map.js').matchAll(/\{ id: '([a-z]+)', nav: '/g)].map((m) => m[1]));
function isRoute(file, hash) {
  if (file === 'map.html') {
    const m = /^([a-z]{2})(?:\/([a-z0-9-]+))?(?:\/([a-z0-9-]+))?$/.exec(hash);
    return !!m && ATLAS_IDS.has(m[1]) && (!m[2] || ATLAS_VIEWS.has(m[2]));
  }
  if (file === 'hiring.html') {
    const m = /^([a-z]{2}|-)\/(studying|graduated|working)\/(first|intern|exp)(?:\/[a-z]+)?$/.exec(hash);
    return !!m && (m[1] === '-' || ATLAS_IDS.has(m[1]));
  }
  return false;
}
const broken = [];
let checked = 0;
for (const file of [...htmlFiles, ...ROOT_PAGES]) {
  const html = read(file);
  for (const m of html.matchAll(/\s(?:href|src)="([^"]*)"/g)) {
    const url = m[1];
    if (/^(https?:|mailto:|data:)/.test(url)) continue;
    checked++;
    const [pathPart, hash] = url.split('#');
    const target = pathPart ? path.posix.normalize(path.posix.join(path.posix.dirname(file), pathPart.split('?')[0])) : file;
    const resolved = target.endsWith('/') ? target + 'index.html' : target;
    if (!fs.existsSync(path.join(APP, resolved))) { broken.push(`${file} → ${url}`); continue; }
    if (hash && resolved.endsWith('.html') && !ids(resolved).has(hash) && !isRoute(resolved, hash)) broken.push(`${file} → ${url} (no #${hash})`);
  }
}
t(`every internal link and anchor resolves (${checked} checked)`, broken.length === 0, broken.slice(0, 6).join(' | '));
const idx = JSON.parse(read('careers/data/search-index.json'));
t('every search result points to a page', idx.length === data.roles.length && idx.every((x) => fs.existsSync(path.join(APP, 'careers', x.u))));
const calc = data.roles.flatMap((r) => r.calculators.map((c) => c.href));
t('calculator links name tracks the site has', calc.every((h) => {
  const [page, q] = h.split('?');
  const track = q && q.split('=')[1];
  const tracks = { masters: ['mif', 'mim', 'marketing'], computing: ['cs', 'dsai', 'conversion'] };
  return fs.existsSync(path.join(APP, page)) && (!track || (tracks[page.replace('.html', '')] || []).includes(track));
}));

/* ------------------------------------------------------------- requests --- */
const external = [];
for (const file of htmlFiles) {
  const html = read(file);
  for (const m of html.matchAll(/<(script|img|iframe|source|audio|video)\b[^>]*\ssrc="(https?:)?\/\//gi)) external.push(`${file}: <${m[1]}>`);
  for (const m of html.matchAll(/<link\b[^>]*>/gi)) if (!/rel="canonical"/.test(m[0]) && /href="(https?:)?\/\//.test(m[0])) external.push(`${file}: ${m[0].slice(0, 60)}`);
  if (/@import|url\(\s*['"]?(https?:)?\/\//.test(html)) external.push(`${file}: css url`);
}
const css = read('careers/assets/careers.css');
for (const f of ['careers.js', 'compass.js', 'compass-core.js']) {
  const js = read('careers/assets/' + f);
  if (/(fetch|XMLHttpRequest|import)\s*\(\s*['"`]https?:/.test(js) || /https?:\/\//.test(js.replace(/\/\*[\s\S]*?\*\//g, ''))) external.push(f);
}
if (/url\(|@import/.test(css)) external.push('careers.css');
t('nothing is loaded from another host', external.length === 0, external.slice(0, 5).join(' | '));

/* --------------------------------------------------------------- weight --- */
const LIMIT = 400 * 1024;
const sizes = htmlFiles.map((f) => [f, fs.statSync(path.join(APP, f)).size]).sort((a, b) => b[1] - a[1]);
t(`no page is over ${LIMIT / 1024} KB (largest: ${sizes[0][0]}, ${(sizes[0][1] / 1024).toFixed(0)} KB)`, sizes[0][1] <= LIMIT);
const roleMax = sizes.find(([f]) => f.startsWith('careers/roles/') && !f.endsWith('/index.html'));
t(`role pages stay under 120 KB (largest ${(roleMax[1] / 1024).toFixed(0)} KB)`, roleMax[1] <= 120 * 1024);
t('the search index stays under 200 KB', fs.statSync(path.join(APP, 'careers/data/search-index.json')).size <= 200 * 1024);

/* -------------------------------------------------------------- sitemap --- */
const sm = read('sitemap.xml');
const locs = new Set([...sm.matchAll(/<loc>https:\/\/iaconoalessandro\.github\.io\/admetia\/([^<]*)<\/loc>/g)].map((m) => m[1]));
const want = [...ROOT_PAGES.map((p) => p === 'index.html' ? '' : p), ...htmlFiles.map((f) => f.replace(/(^|\/)index\.html$/, '$1'))];
const absent = want.filter((u) => !locs.has(u));
t(`the sitemap lists every page (${locs.size})`, absent.length === 0, absent.slice(0, 5).join(', '));

/* ------------------------------------------------------------------ nav --- */
const noNav = ROOT_PAGES.filter((p) => !/<a href="careers\/index\.html" data-section="careers"[^>]*>Explore careers<\/a>/.test(read(p)));
t('every page of the site has Explore careers in its global navigation', noNav.length === 0, noNav.join(', '));
/* The three getting-in pages sit in "Find an internship or job"; every
 * other explorer page marks "Explore careers" as where it is. */
const JOBS_PAGES = ['careers/recruiting-calendar.html', 'careers/toolkit.html', 'careers/interview-prep.html'];
const navOff = htmlFiles.filter((f) => !new RegExp('data-section="' + (JOBS_PAGES.includes(f) ? 'jobs' : 'careers') + '" aria-current="(page|true)"').test(read(f)));
t('explorer pages mark their own section as current in the global navigation', navOff.length === 0, navOff.slice(0, 3).join(', '));
const noTrail = htmlFiles.filter((f) => !/<nav class="trail" aria-label="Breadcrumb"><ol id="trail"><li><a href="[^"]*index\.html">Home<\/a><\/li>/.test(read(f)));
t('every explorer page has breadcrumbs that start at Home', noTrail.length === 0, noTrail.slice(0, 3).join(', '));
t('Hiring and the Atlas link to the explorer once each', ['hiring.html', 'map.html'].every((p) => (read(p).match(/class="form-meta">[^<]*<a href="careers\/index\.html">Career Explorer<\/a>/g) || []).length === 1));
const noSkip = htmlFiles.filter((f) => !/<a class="skip" href="#main">/.test(read(f)) || !/<main [^>]*id="main"/.test(read(f)));
t('every explorer page has a skip link to its main content', noSkip.length === 0, noSkip.slice(0, 3).join(', '));
const h1 = htmlFiles.filter((f) => (read(f).match(/<h1\b/g) || []).length !== 1);
t('every explorer page has exactly one h1', h1.length === 0, h1.slice(0, 3).join(', '));

const enOnly = htmlFiles.filter((f) => !/<p class="cx-en-note" lang="it">/.test(read(f)));
t('every explorer page tells Italian readers the research is in English', enOnly.length === 0, enOnly.slice(0, 3).join(', '));

/* -------------------------------------------------------------- compass --- */
const { compassData } = require('../tools/build-careers');
t('the Career Compass data matches a fresh build (run npm run careers)', read('careers/data/compass-data.js') === compassData(data, site));
t('the Career Compass data stays under 200 KB', fs.statSync(path.join(APP, 'careers/data/compass-data.js')).size <= 200 * 1024);
const box = {};
require('vm').runInNewContext(read('careers/data/compass-data.js'), { window: box });
const CD = box.COMPASS_DATA;
const K = require('../careers/assets/compass-core');
t('every role family has compass tags', CD.roles.length === data.roles.length && CD.roles.every((r) => r.a.length && r.o.length));
t('every compass role link and calculator link resolves', CD.roles.every((r) => fs.existsSync(path.join(APP, 'careers', r.u)) &&
  r.calc.every((c) => fs.existsSync(path.join(APP, 'careers', c.href.split('?')[0])))));
t('the 15 myths, the cross-career rows and the quoted passages were all found', Object.keys(CD.myths).length === 15 &&
  Object.values(CD.df).every((r) => r.cells.door && r.cells.language) && Object.values(CD.quotes).every((q) => q.html.length > 40) &&
  Object.values(CD.sectors).every((x) => x.items.every((h) => h.length > 40)));
{
  const src = read('js/i18n-it.js');
  const sb = { I18N: { add: (l, d) => { sb.dict = d; } } };
  require('vm').runInNewContext(src, sb);
  const ui = [...read('careers/assets/compass.js').matchAll(/\bT\('((?:[^'\\]|\\.)*)'/g)].map((m) => m[1].replace(/\\'/g, "'"));
  const lack = [...new Set(ui)].filter((k) => sb.dict[k] === undefined);
  t(`every Career Compass interface string has Italian (${new Set(ui).size})`, lack.length === 0, lack.slice(0, 4).join(' | '));
}
const fieldOf = (id) => CD.roles.find((r) => r.id === id).f;
const PERSONA = {
  builder: { bg: ['CS'], stage: 'final', act: ['build', 'data'], avoid: 'sell', people: 2, quant: 5, hours: 50, prio: ['balance'] },
  banker: { bg: ['Fin'], stage: 'master', act: ['deals', 'invest', 'quant'], people: 4, quant: 3, hours: 75, stress: 5, diff: 5, prio: ['pay'], org: ['bank'] },
  calm: { act: ['data', 'operate'], hours: 40, stress: 2 },
  noGerman: { bg: ['Mkt'], cit: 'eu', langs: ['en', 'it'], where: ['dach'], act: ['create', 'sell'], people: 4, quant: 2 },
  nonEU: { cit: 'other', where: ['fr'], act: ['operate', 'people', 'research'], org: ['public'] },
  worker: { stage: 'work', act: ['deals', 'invest'] }
};
const res = Object.fromEntries(Object.entries(PERSONA).map(([k, a]) => [k, K.results(CD, a)]));
const techFields = ['computer-science', 'data-analytics', 'artificial-intelligence', 'data-science', 'logistics-supply-chain', 'marketing'];
t('compass: a CS graduate who likes building and data gets technical roles, and no sales role', res.builder.now.every((x) => techFields.includes(fieldOf(x.id))) && !res.builder.now.some((x) => x.id === 'marketing/3.8'));
t('compass: a finance student who likes deals gets M&A in the top five and private equity under "later"', res.banker.now.slice(0, 5).some((x) => x.id === 'finance/P1-3.1') && res.banker.later.some((x) => x.id === 'finance/P3-3.4'));
t('compass: someone who accepts 40 hours gets no 60-hour role in the list', res.calm.now.every((x) => CD.roles.find((r) => r.id === x.id).s.h[0] < 60));
t('compass: no German and a DACH target flags the brand-manager language rule', K.results(CD, PERSONA.noGerman).all.find((x) => x.id === 'marketing/3.1').why.some((w) => w.k === 'lang'));
t('compass: a non-EU citizen sees the citizenship condition on public-sector management', res.nonEU.all.find((x) => x.id === 'management/3.6').why.some((w) => w.k === 'cit' && w.strong));
t('compass: PhD-gated roles are never listed as open now', Object.values(res).every((r) => r.now.every((x) => CD.roles.find((y) => y.id === x.id).gate !== 'phd')));
t('compass: experience-gated roles open up for someone already working', res.worker.now.some((x) => CD.roles.find((y) => y.id === x.id).gate === 'exp'));
t('compass: every "door still open" is easier to enter than the role it stands in for', Object.values(res).every((r) => r.alternatives.every((a) => {
  const from = CD.roles.find((x) => x.id === a.from), to = CD.roles.find((x) => x.id === a.to);
  return to.s.d[1] <= 3 && from.s.d[0] >= 4;
})));
const disliked = res.banker.now[0].id;
t('compass: a role marked "not for me" leaves the list', !K.results(CD, { ...PERSONA.banker, disliked: [disliked] }).now.some((x) => x.id === disliked));
t('compass: no answers still gives eight roles, the same every time', K.results(CD, {}).now.length === 8 && JSON.stringify(K.results(CD, {}).now) === JSON.stringify(K.results(CD, {}).now));
t('compass: every score is between 0 and 100', Object.values(res).every((r) => r.all.every((x) => x.score >= 0 && x.score <= 100)));

/* ----------------------------------------------------------- getting in --- */
/* The recruiting calendar, application toolkit and interview prep
 * (tools/careers/getting-in.js). The build itself stops if a quoted research
 * passage has gone; these check the outputs. */
const files = site.files();
const staleT = files.filter((f) => {
  const p = path.join(APP, f.path);
  return !fs.existsSync(p) || !fs.readFileSync(p).equals(Buffer.from(f.content));
}).map((f) => f.path);
t('the template downloads match a fresh build (run npm run careers)', staleT.length === 0, staleT.slice(0, 4).join(', '));
const tplOnDisk = fs.readdirSync(path.join(APP, 'careers/templates'));
t('8 Word and 8 LaTeX templates, and nothing else in careers/templates', tplOnDisk.length === 16 && tplOnDisk.filter((f) => f.endsWith('.docx')).length === 8 && tplOnDisk.filter((f) => f.endsWith('.tex')).length === 8, tplOnDisk.join(', '));

/* Read a part out of a .docx (a zip) without dependencies. */
function unzipPart(buf, name) {
  const zlib = require('zlib');
  let at = buf.lastIndexOf(Buffer.from([0x50, 0x4b, 0x05, 0x06]));
  if (at < 0) throw new Error('no zip end record');
  let cd = buf.readUInt32LE(at + 16);
  const n = buf.readUInt16LE(at + 10);
  for (let i = 0; i < n; i++) {
    const nameLen = buf.readUInt16LE(cd + 28), extra = buf.readUInt16LE(cd + 30), comment = buf.readUInt16LE(cd + 32);
    const fname = buf.slice(cd + 46, cd + 46 + nameLen).toString();
    const local = buf.readUInt32LE(cd + 42), size = buf.readUInt32LE(cd + 20), method = buf.readUInt16LE(cd + 10);
    if (fname === name) {
      const start = local + 30 + buf.readUInt16LE(local + 26) + buf.readUInt16LE(local + 28);
      const data = buf.slice(start, start + size);
      return (method === 8 ? zlib.inflateRawSync(data) : data).toString('utf8');
    }
    cd += 46 + nameLen + extra + comment;
  }
  return null;
}
const docxBad = [];
for (const f of tplOnDisk.filter((x) => x.endsWith('.docx'))) {
  const buf = fs.readFileSync(path.join(APP, 'careers/templates', f));
  const doc = unzipPart(buf, 'word/document.xml');
  const types = unzipPart(buf, '[Content_Types].xml');
  if (!doc || !types) { docxBad.push(f + ': missing parts'); continue; }
  if (/<w:tbl\b|<w:txbxContent|<w:drawing|<w:hdr|<w:ftr/.test(doc)) docxBad.push(f + ': table, text box, image, header or footer');
  if (!/w:val="Heading1"/.test(doc)) docxBad.push(f + ': no Heading 1');
  if ((doc.match(/<w:p>/g) || []).length !== (doc.match(/<\/w:p>/g) || []).length) docxBad.push(f + ': unbalanced paragraphs');
}
t('every Word template is a readable .docx with real headings and no tables, text boxes, images, headers or footers', docxBad.length === 0, docxBad.join(' | '));
const texBad = [];
for (const f of tplOnDisk.filter((x) => x.endsWith('.tex'))) {
  const tex = read('careers/templates/' + f);
  const body = tex.replace(/\\[{}%&$#_]/g, '').replace(/%.*$/gm, '');
  let depth = 0;
  for (const ch of body) { if (ch === '{') depth++; else if (ch === '}' && --depth < 0) break; }
  if (depth !== 0) texBad.push(f + ': unbalanced braces');
  if ((tex.match(/\\begin\{itemize\}/g) || []).length !== (tex.match(/\\end\{itemize\}/g) || []).length) texBad.push(f + ': itemize not closed');
  if (!/\\begin\{document\}[\s\S]*\\end\{document\}\s*$/.test(tex)) texBad.push(f + ': document environment');
  if (/tabular|\\includegraphics|multicol/.test(tex)) texBad.push(f + ': table, image or columns');
  if (/\\item \[/.test(tex)) texBad.push(f + ': an item starting with [ would be read as a label');
  if (/[≥≤×→]/.test(tex)) texBad.push(f + ': a character pdfLaTeX cannot typeset in text');
}
t('every LaTeX template is balanced, one column and pdfLaTeX-safe', texBad.length === 0, texBad.join(' | '));
const toolkit = read('careers/toolkit.html');
const snips = [...toolkit.matchAll(/overleaf\.com\/docs\?snip_uri=([^&"]+)/g)].map((m) => decodeURIComponent(m[1]));
t('every Overleaf button opens a template the site publishes', snips.length === 8 && snips.every((u) => u.startsWith('https://iaconoalessandro.github.io/admetia/careers/templates/') &&
  fs.existsSync(path.join(APP, u.replace('https://iaconoalessandro.github.io/admetia/', '')))), String(snips.length));

const CAL = require('../tools/careers/calendar');
const cal = read('careers/recruiting-calendar.html');
t(`the calendar draws every window (${CAL.ROWS.length})`, (cal.match(/<li class="rc-row" /g) || []).length === CAL.ROWS.length);
t('every calendar window has a confidence flag, a bar and the research it rests on', CAL.ROWS.every((r) => /^[HML]$/.test(r.flag) && r.segs.length && r.quotes.length));
t('every portal link is an https address on the employer’s or school’s own site', Object.values(CAL.P).every(([, u]) => /^https:\/\/[a-z0-9.-]+\.[a-z]{2,}\//.test(u)));
t('the calendar does not use the unsourced front-loading figures', !/reduces interview odds|30% and 50%|Prime Window/.test(cal.replace(/<p class="cx-src-note">[\s\S]*?<\/p>/g, '')));

const IV = require('../tools/careers/interview');
const prep = read('careers/interview-prep.html');
t('32 finance study cards, 8 per deck', IV.DECKS.length === 4 && IV.DECKS.every((d) => d.cards.length === 8) && (prep.match(/class="iv-card"/g) || []).length === 32);
t(`every practice case has a worked answer (${IV.PRACTICE.length})`, IV.PRACTICE.every((c) => c.sizing || c.answer.length) && (prep.match(/class="iv-ans"/g) || []).length === IV.PRACTICE.length);
t('every career area shows its exercises with a frequency', IV.AREAS.every(([k]) => prep.includes(`id="area-${k}"`)) && (prep.match(/class="iv-pill iv-(always|usually|often|sometimes)"/g) || []).length >= 30);
/* The worked numbers, recomputed. */
const close = (a, b, tol = 1e-9) => Math.abs(a - b) <= tol;
t('worked numbers: depreciation walk-through balances (−7.5 assets, −7.5 equity)', close(-10 + (10 - 7.5), -7.5));
t('worked numbers: treasury stock method gives 50 new shares', close(100 - 100 * 10 / 20, 50));
t('worked numbers: terminal value 100 × 1.02 / 6% = 1,700', close(100 * 1.02 / 0.06, 1700, 1e-6));
t('worked numbers: WACC 0.6 × 10% + 0.4 × 5% × 0.75 = 7.5%', close(0.6 * 0.10 + 0.4 * 0.05 * 0.75, 0.075));
t('worked numbers: paper LBO 3.0× and about 25% IRR', close((150 * 10 - 300) / 400, 3) && close(Math.pow(3, 1 / 5) - 1, 0.2457, 0.001));
t('worked numbers: the gym case adds up (€9.36m revenue, €1.40m profit)', close(14000 * 40 * 12 + 8800 * 25 * 12, 9.36e6) && close(9.36e6 - 7.96e6, 1.4e6, 1) && close(6000 * 15 * 12 - 2800 * 25 * 12, 0.24e6, 1));
t('worked numbers: the shampoo case is −8% (0.84 × 101 / 92)', close(0.84 * 101 / 92 - 1, -0.078, 0.001));
t('worked numbers: rerolling a die below 3.5 is worth 4.25', close(0.5 * 5 + 0.5 * 3.5, 4.25));
t('worked numbers: espresso sizing (15m a day × 365 × €1.20 ≈ €6.6bn)', close(15e6 * 365 * 1.2 / 1e9, 6.57, 0.01));
{
  const Drill = require('../careers/assets/getting-in.js');
  let bad = 0;
  for (let i = 0; i < 2000; i++) for (const k of IV.DRILL) { const q = Drill.make(k); if (!(q.a > 0) || !Drill.right(q, q.a)) bad++; }
  t('the arithmetic drill accepts its own answers (10,000 questions)', bad === 0, String(bad));
  t('the drill reads 1,200, 1.2k, 40,8 and 3.5m as numbers', Drill.parse('1,200') === 1200 && Drill.parse('1.2k') === 1200 && Drill.parse('40,8') === 40.8 && Drill.parse('3.5m') === 3.5e6 && isNaN(Drill.parse('abc')));
}
{
  const src = read('js/i18n-it.js');
  const sb = { I18N: { add: (l, d) => { sb.dict = d; } } };
  require('vm').runInNewContext(src, sb);
  const ui = [...read('careers/assets/getting-in.js').matchAll(/\bT\('((?:[^'\\]|\\.)*)'/g)].map((m) => m[1].replace(/\\'/g, "'"));
  const lack = [...new Set(ui)].filter((k) => sb.dict[k] === undefined);
  t(`every getting-in script string has Italian (${new Set(ui).size})`, lack.length === 0, lack.slice(0, 4).join(' | '));
  const js = read('careers/assets/getting-in.js');
  t('the getting-in script loads nothing from another host', !/https?:\/\//.test(js.replace(/\/\*[\s\S]*?\*\//g, '')));
}

console.log('\n' + pass + ' passed, ' + fail + ' failed');
process.exit(fail ? 1 : 0);
