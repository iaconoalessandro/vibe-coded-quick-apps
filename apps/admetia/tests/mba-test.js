/* MBA model regression test.
 *
 * tests/fixtures/mba-golden.json holds the scorer's outputs for 8,000 seeded
 * pseudo-random profiles, frozen before the model was restructured. Profiles
 * are stored as answer positions rather than option ids, so they replay against
 * the current ids. Every base score and school score must match exactly in both
 * modes; for the first profiles, so must every breakdown line, school note,
 * suggestion, verdict and the completeness figure. */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const APP = path.join(__dirname, '..');
const sandbox = { window: {}, Math, console, parseFloat, isNaN, Object, Infinity };
sandbox.window.MBA_COMPANIES = [];
vm.createContext(sandbox);
for (const f of ['data/mba-model.js', 'js/score-mba.js']) {
  vm.runInContext(fs.readFileSync(path.join(APP, f), 'utf8'), sandbox, { filename: f });
}
const S = sandbox.window.MBA_SCORE;
const M = sandbox.window.MBA_MODEL;
const G = JSON.parse(fs.readFileSync(path.join(__dirname, 'fixtures/mba-golden.json'), 'utf8'));

let failures = 0;
function fail(msg) {
  failures++;
  if (failures <= 5) console.log('FAIL  ' + msg);
}

/* ---- replay the frozen profiles ---------------------------------------- */

const RADIOS = [], CHECKS = [];
let NUMBER = null;
M.steps.forEach(s => s.groups.forEach(gr => {
  if (gr.type === 'radio') RADIOS.push(gr);
  if (gr.type === 'checkbox') gr.options.forEach(o => CHECKS.push(o.id));
  if (gr.type === 'number') NUMBER = gr.id;
}));

function answersFor(pos) {
  const a = {};
  pos.r.forEach(([gi, oi]) => { a[RADIOS[gi].id] = RADIOS[gi].options[oi].id; });
  pos.c.forEach(ci => { a[CHECKS[ci]] = true; });
  if (pos.n !== null) a[NUMBER] = pos.n;
  return a;
}

/* Negative school notes now use a true minus sign throughout. */
const minus = s => s.replace(/ -(\d)/g, ' −$1');
const same = (x, y) => JSON.stringify(x) === JSON.stringify(y);

const matched = { published: 0, corrected: 0 };
G.profiles.forEach((pos, i) => {
  const a = answersFor(pos);
  const want = { published: G.scores.published[i], corrected: G.scores.corrected[i] || G.scores.published[i] };
  const detail = G.detail[i];

  for (const mode of ['published', 'corrected']) {
    const r = S.score(a, mode);
    const got = [r.base].concat(G.schools.map(k => r.schools[k]));
    if (same(got, want[mode])) matched[mode]++;
    else fail(`profile ${i} ${mode}: ${JSON.stringify(got)} != ${JSON.stringify(want[mode])}`);

    if (!detail) continue;
    const d = detail[mode];
    if (!same(r.breakdown.map(b => [b.label, b.pts]), d.breakdown)) fail(`profile ${i} ${mode}: breakdown`);
    if (!same(G.schools.map(k => r.notes[k].map(minus)), d.notes.map(n => n.map(minus)))) fail(`profile ${i} ${mode}: notes`);
    if (!same(S.improvements(a, mode).map(x => [x.groupLabel, x.optionLabel, x.gain]), d.improvements)) fail(`profile ${i} ${mode}: improvements`);
    if (!same(M.adjustedSchools.map(s => S.verdictForSchool(r.schools[s.id], s).label), d.adjusted)) fail(`profile ${i} ${mode}: school verdicts`);
    if (!same(M.generalSchools.map(s => S.verdictForGap(r.base - s.points).label), d.general)) fail(`profile ${i} ${mode}: shared-scale verdicts`);
  }
  if (detail && S.completeness(a) !== detail.completeness) fail(`profile ${i}: completeness`);
});

const n = G.profiles.length;
console.log(`${matched.published}/${n} profiles match the frozen scores (as published).`);
console.log(`${matched.corrected}/${n} profiles match the frozen scores (corrected).`);
console.log(`Breakdown, notes, suggestions and verdicts checked on the first ${G.detail.length}.`);

/* ---- targeted edge cases ---------------------------------------------- */

const cases = [
  ['GMAT 550 + top-10% GPA scores 1, not 0', { gmat: 'gm_550', gpa: 'gp_top10' }, 1],
  ['GMAT 550 + GPA 3.0-3.19 scores nothing', { gmat: 'gm_550', gpa: 'gp_30' }, 0],
  ['matrix divides management by 3', { people: 'pm_now_20_49', pm_matrix: true }, 1],
  ['managing more before applies with a current selection', { people: 'pm_now_20_49', pm_more_before: true }, 3.5],
  ['managing more before is ignored without one', { people: 'pm_past_20_49', pm_more_before: true }, 1.25],
  ['both sport adjustments compound to x0.125', { sport: 'sp_individual_champ', sp_under18: true, sp_minor_sport: true }, 0.25],
  ['outside-industry penalty applies to promotions', { promotions: 'pr_same_6', pr_outside: true }, 1.5]
];
let ok = 0;
for (const [label, a, expect] of cases) {
  const got = S.score(a, 'published').base;
  const pass = got === expect;
  if (pass) ok++; else failures++;
  console.log(`${pass ? 'PASS' : 'FAIL'}  ${label} → ${got} (expected ${expect})`);
}
console.log(`${ok}/${cases.length} edge cases pass.`);

/* ---- corrected mode changes only what it should ------------------------ */

const both = (a, school) => [S.score(a, 'published').schools[school], S.score(a, 'corrected').schools[school]];
const modeChecks = [
  ['760 gets the high-score bonus only when corrected (Stanford)', both({ gmat: 'gm_760', gpa: 'gp_summa' }, 'Stanford'), true],
  ['750 gets it in both readings (Stanford)', both({ gmat: 'gm_750', gpa: 'gp_summa' }, 'Stanford'), false],
  ['690 gets the low-score penalty only when corrected (Yale)', both({ gmat: 'gm_690', gpa: 'gp_32' }, 'Yale'), true]
];
let okModes = 0;
for (const [label, [pub, cor], shouldDiffer] of modeChecks) {
  const pass = (pub !== cor) === shouldDiffer;
  if (pass) okModes++; else failures++;
  console.log(`${pass ? 'PASS' : 'FAIL'}  ${label} → published ${pub}, corrected ${cor}`);
}
console.log(`${okModes}/${modeChecks.length} corrected-mode checks pass.`);

if (failures) {
  console.log(`\n${failures} failure(s).`);
  process.exitCode = 1;
}
