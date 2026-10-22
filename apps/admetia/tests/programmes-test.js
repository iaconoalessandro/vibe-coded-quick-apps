/* The Programme Directory (programmes.html, js/page-programmes.js) and the
 * hand-off to the calculators (?school=, js/results-kit.js picked*):
 *
 *   count      the page's numbers match the models: 136 programmes
 *   fees       every fee belongs to a programme, in a known shape, with a
 *              source the file names
 *   calendar   every programme has an official admissions page
 *   hand-off   every "Test my chances" link names a programme its
 *              calculator scores, and each calculator reads ?school=
 *   site       the page is built, kept offline, in the sitemap, linked from
 *              the front page and both pickers, and makes no request */
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const APP = path.join(__dirname, '..');
const read = (f) => fs.readFileSync(path.join(APP, f), 'utf8');

let pass = 0, fail = 0;
function t(label, cond, extra) { if (cond) { pass++; console.log('PASS  ' + label); } else { fail++; console.log('FAIL  ' + label + (extra ? '  → ' + extra : '')); } }

const ctx = { console };
ctx.window = ctx;
vm.createContext(ctx);
for (const f of ['data/masters-model.js', 'data/computing-model.js', 'data/mba-model.js', 'data/deadlines.js', 'data/programme-fees.js']) {
  vm.runInContext(read(f), ctx, { filename: f });
}
const MM = ctx.MASTERS_MODEL, IT = ctx.IT_MODEL, MB = ctx.MBA_MODEL, CAL = ctx.ADMISSIONS_CALENDAR, FEES = ctx.PROGRAMME_FEES;

/* ---------------------------------------------------------------- count --- */
const mba = MB.adjustedSchools.concat(MB.generalSchools);
const keys = MM.schools.map((s) => s.id).concat(IT.schools.map((s) => s.id), mba.map((s) => 'mba:' + s.name));
t('136 programmes: 67 business, 26 computing, 43 MBA', MM.schools.length === 67 && IT.schools.length === 26 && mba.length === 43 && keys.length === 136,
  [MM.schools.length, IT.schools.length, mba.length].join(' / '));
t('every programme key is unique', new Set(keys).size === keys.length);
const html = read('programmes.html');
t('the page states the same counts', /All 136 programmes/.test(html) && /67 business master’s, 26 computing master’s\s+and 43 MBAs/.test(html));

/* ----------------------------------------------------------------- fees --- */
const feeKeys = Object.keys(FEES);
t('every fee belongs to a programme', feeKeys.every((k) => keys.includes(k)), feeKeys.filter((k) => !keys.includes(k)).join(', '));
const shape = (f) => Array.isArray(f) && typeof f[0] === 'number' && f[0] >= 0 && ['EUR', 'GBP', 'CHF', 'USD', 'SEK'].includes(f[1]) && ['total', 'year', 'semester'].includes(f[2]);
t('every fee is [amount, currency, per] with a known currency and period', feeKeys.every((k) => shape(FEES[k].eu) && (FEES[k].same ? FEES[k].other === null : shape(FEES[k].other))),
  feeKeys.filter((k) => !shape(FEES[k].eu)).join(', '));
t('every fee names its source and intake', feeKeys.every((k) => ['money', 'mba', 'model'].includes(FEES[k].src) && FEES[k].intake));
const money = read('research/money/costs-and-funding.md');
t('fees taken from the research table appear there', feeKeys.filter((k) => FEES[k].src === 'money').every((k) => {
  const n = FEES[k].eu[0];
  return n === 0 || money.includes(n.toLocaleString('en-US', { maximumFractionDigits: 2 }));
}));
const modelFee = feeKeys.filter((k) => FEES[k].src === 'model');
t('fees taken from a model match its own Tuition fact', modelFee.every((k) => {
  const s = MM.schools.find((x) => x.id === k);
  const f = s && s.facts.find((x) => /Tuition/.test(x.k));
  return f && f.v.replace(/,/g, '').replace(/[^\d]/g, ' ').split(' ').includes(String(FEES[k].eu[0]));
}), modelFee.join(', '));

/* ------------------------------------------------------------- calendar --- */
const noCal = keys.filter((k) => !CAL.schools[k]);
t('every programme has an official admissions page', noCal.length === 0, noCal.slice(0, 5).join(', '));

/* ------------------------------------------------------------- hand-off --- */
const pageJs = read('js/page-programmes.js');
t('the directory links to each calculator with ?school=', /mba\.html\?school=/.test(pageJs) && /\?track=' \+ track \+ '&school='/.test(pageJs));
for (const [page, re] of [['js/page-masters.js', /ResultsKit\.picked\(/], ['js/page-computing.js', /ResultsKit\.picked\(/], ['js/page-mba.js', /ResultsKit\.picked\(/]]) {
  const js = read(page);
  t(page + ' reads ?school=, shows the banner and marks the row', re.test(js) && /pickedBanner\(/.test(js) && /pickedResults\(resultsView, pick\)/.test(js));
}
/* The same lookups the three pages make, for every link the directory can
 * produce (one per track a programme belongs to). */
const lookups = {
  masters: (id, track) => MM.schools.some((x) => x.id === id && x.tracks.includes(track)),
  computing: (id, track) => IT.schools.some((x) => x.id === id && x.tracks.includes(track)),
  mba: (key) => key.startsWith('mba:') && mba.some((s) => s.name === key.slice(4))
};
const links = [];
MM.schools.forEach((s) => s.tracks.forEach((tr) => links.push(['masters', s.id, tr])));
IT.schools.forEach((s) => s.tracks.forEach((tr) => links.push(['computing', s.id, tr])));
mba.forEach((s) => links.push(['mba', 'mba:' + s.name]));
t(`every "Test my chances" link names a programme its calculator scores (${links.length})`, links.every(([c, k, tr]) => lookups[c](k, tr)));
t('a key from another track is not picked up', !lookups.masters('hec-mim', 'mif') && !lookups.computing('kth-ml', 'cs') && !lookups.mba('mba:Nowhere'));
const kit = read('js/results-kit.js');
t('ResultsKit exports picked, pickedBanner and pickedResults', /picked: picked,/.test(kit) && /pickedBanner: pickedBanner,/.test(kit) && /pickedResults: pickedResults,/.test(kit));

/* ----------------------------------------------------------------- site --- */
t('programmes.html loads the models, fees, calendar and its script', ['data/masters-model.js', 'data/computing-model.js', 'data/mba-model.js', 'data/deadlines.js', 'data/programme-fees.js', 'js/engine.js', 'js/results-kit.js', 'js/page-programmes.js']
  .every((f) => html.includes(`<script defer src="${f}"></script>`)));
t('tools/build.js publishes it', /'programmes\.html': \{/.test(read('tools/shell.js')) && /require\('\.\/shell'\)\.ROOT_PAGES/.test(read('tools/build.js')));
t('sw.js keeps it offline', /'programmes\.html'/.test(read('sw.js')) && /'js\/page-programmes\.js'/.test(read('sw.js')) && /'data\/programme-fees\.js'/.test(read('sw.js')));
t('the sitemap lists it', /admetia\/programmes\.html<\/loc>/.test(read('sitemap.xml')));
t('the front page and both pickers link to it', ['index.html', 'business.html', 'it.html'].every((p) => /<a href="programmes\.html">Programme Directory<\/a>/.test(read(p))));
t('the 404 page lists it', /<li><a href="programmes\.html"/.test(read('404.html')));
t('the directory sends nothing: no fetch, XMLHttpRequest or beacon', !/fetch\(|XMLHttpRequest|sendBeacon/.test(pageJs));
t('the directory shows every requirement with its source tag', /srcTag\(x\.g\.src\)/.test(pageJs) && /srcTag\(f\.src\)/.test(pageJs));

console.log('\n' + pass + ' passed, ' + fail + ' failed');
process.exit(fail ? 1 : 0);
