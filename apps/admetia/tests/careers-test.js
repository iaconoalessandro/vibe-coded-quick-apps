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
 *   nav         every page carries the Careers link */
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
const ROOT_PAGES = ['index.html', 'business.html', 'it.html', 'mba.html', 'masters.html', 'computing.html', 'map.html', 'hiring.html'];
const idCache = new Map();
function ids(file) {
  if (!idCache.has(file)) idCache.set(file, new Set([...read(file).matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
  return idCache.get(file);
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
    if (hash && resolved.endsWith('.html') && !ids(resolved).has(hash)) broken.push(`${file} → ${url} (no #${hash})`);
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
const js = read('careers/assets/careers.js'), css = read('careers/assets/careers.css');
if (/(fetch|XMLHttpRequest|import)\s*\(\s*['"`]https?:/.test(js) || /https?:\/\//.test(js.replace(/\/\*[\s\S]*?\*\//g, ''))) external.push('careers.js');
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
const noNav = ROOT_PAGES.filter((p) => !/<a class="sec-group" href="careers\/index\.html" data-sec="careers">Careers<\/a>/.test(read(p)));
t('every page of the site has Careers in its section nav', noNav.length === 0, noNav.join(', '));
const navOff = htmlFiles.filter((f) => !/<a class="sec-group on" aria-current="page" href="[^"]*index\.html" data-sec="careers">Careers<\/a>/.test(read(f)));
t('Career Explorer pages mark Careers as the current section', navOff.length === 0, navOff.slice(0, 3).join(', '));
t('Hiring and the Atlas link to the explorer once each', ['hiring.html', 'map.html'].every((p) => (read(p).match(/class="form-meta">[^<]*<a href="careers\/index\.html">Career Explorer<\/a>/g) || []).length === 1));
const noSkip = htmlFiles.filter((f) => !/<a class="cx-skip" href="#main">/.test(read(f)) || !/<main [^>]*id="main"/.test(read(f)));
t('every explorer page has a skip link to its main content', noSkip.length === 0, noSkip.slice(0, 3).join(', '));
const h1 = htmlFiles.filter((f) => (read(f).match(/<h1\b/g) || []).length !== 1);
t('every explorer page has exactly one h1', h1.length === 0, h1.slice(0, 3).join(', '));

const enOnly = htmlFiles.filter((f) => !/<p class="cx-en-note" lang="it">/.test(read(f)));
t('every explorer page tells Italian readers the research is in English', enOnly.length === 0, enOnly.slice(0, 3).join(', '));

console.log('\n' + pass + ' passed, ' + fail + ' failed');
process.exit(fail ? 1 : 0);
