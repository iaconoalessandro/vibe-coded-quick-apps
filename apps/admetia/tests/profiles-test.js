/* Per-school selection profiles.
 *
 * The claim being tested is narrow: a profile redistributes emphasis without
 * handing anyone points. So the things that must hold are that the weights
 * still sum to the track total, that a balanced applicant barely moves, that a
 * lopsided one moves a lot and in the right direction, and that the advice
 * follows the weighting rather than the track average. */

const fs = require('fs'), path = require('path'), vm = require('vm');
const APP = path.join(__dirname, '..');
const s = { window: {}, Math, console, parseFloat, parseInt, isNaN, Object, Infinity, String, Number };
vm.createContext(s);
for (const f of ['data/conversions.js', 'data/masters-model.js', 'js/score-masters.js'])
  vm.runInContext(fs.readFileSync(path.join(APP, f), 'utf8'), s, { filename: f });
const S = s.window.MASTERS_SCORE, M = s.window.MASTERS_MODEL;

let pass = 0, fail = 0;
function t(label, cond, extra) {
  if (cond) { pass++; console.log('PASS  ' + label); }
  else { fail++; console.log('FAIL  ' + label + (extra ? '  → ' + extra : '')); }
}

const base = {
  gradeScale: 'sc_it', english: 'en_c1', ectsQuant: 'eq_30', ectsBusiness: 'eb_90',
  ectsAccFin: 'ea_20', fullTime: 'ft_0', round: 'rd_first', testType: 'tt_gmat'
};

/* Great transcript and test, nothing else at all. */
const numbers = Object.assign({}, base, {
  gradeBand: 'gb_top5', institution: 'inst_target', degreeField: 'fld_econ',
  testStatus: 'ts_yes', testScore: 760, ma_calc: true, ma_prob: true, programming: 'pr_basic',
  internMonths: 'im_0', internQuality: 'iq_none', leadership: 'ld_none',
  international: 'in_none', essays: 'es_weak', recs: 'rc_strong', languages: 'lg_1'
});

/* The mirror image: a strong story on a mediocre transcript. */
const story = Object.assign({}, base, {
  gradeBand: 'gb_mid', institution: 'inst_solid', degreeField: 'fld_social',
  testStatus: 'ts_yes', testScore: 590, programming: 'pr_none',
  internMonths: 'im_more', internQuality: 'iq_global', leadership: 'ld_nat',
  international: 'in_multi', essays: 'es_strong', recs: 'rc_strong', languages: 'lg_3'
});

/* Nothing exceptional in either direction. */
const even = Object.assign({}, base, {
  gradeBand: 'gb_top25', institution: 'inst_target', degreeField: 'fld_business',
  testStatus: 'ts_yes', testScore: 680, ma_calc: true, programming: 'pr_basic',
  internMonths: 'im_6', internQuality: 'iq_national', leadership: 'ld_lead',
  international: 'in_exch', essays: 'es_medium', recs: 'rc_medium', languages: 'lg_2'
});

const IDS = Object.keys(M.profiles);

/* ---- the arithmetic ---- */

let sumsOk = true, worst = null;
for (const track of Object.keys(M.tracks)) {
  const want = Object.values(M.tracks[track].weights).reduce((a, b) => a + b, 0);
  for (const p of IDS) {
    const got = Object.values(S.profileWeights(track, p)).reduce((a, b) => a + b, 0);
    if (Math.abs(got - want) > 1e-9) { sumsOk = false; worst = track + '/' + p + ' = ' + got; }
  }
}
t('every profile renormalises to the track total', sumsOk, worst);

t('an unknown profile falls back to balanced rather than throwing',
  S.score(even, 'mim', null, 'no-such-profile').total === S.score(even, 'mim').total);

t('the balanced profile is exactly the track weighting',
  IDS.includes('balanced') &&
  JSON.stringify(S.profileWeights('mif', 'balanced')) === JSON.stringify(M.tracks.mif.weights));

/* ---- direction ---- */

const nMetric = S.score(numbers, 'mim', null, 'metric').total;
const nHolistic = S.score(numbers, 'mim', null, 'holistic').total;
t('a numbers-only profile scores far better where numbers decide',
  nMetric - nHolistic > 20, nMetric + ' vs ' + nHolistic);

const sMetric = S.score(story, 'mim', null, 'metric').total;
const sHolistic = S.score(story, 'mim', null, 'holistic').total;
t('and a story-led profile is the mirror image',
  sHolistic - sMetric > 20, sHolistic + ' vs ' + sMetric);

function spread(a, track) {
  const v = IDS.map(p => S.score(a, track, null, p).total);
  return Math.round((Math.max(...v) - Math.min(...v)) * 10) / 10;
}
t('an evenly balanced applicant barely moves between profiles',
  spread(even, 'mim') < 10, 'spread ' + spread(even, 'mim'));
t('   while a lopsided one moves several times as much',
  spread(numbers, 'mim') > 2.5 * spread(even, 'mim'),
  spread(numbers, 'mim') + ' vs ' + spread(even, 'mim'));

/* ---- modifiers are part of the weighting ---- */

const recs = a => (S.score(a, 'mim', null, 'metric').mods.find(m => m.label === 'References') || { pts: 0 }).pts;
t('a school that takes no reference letters awards no points for strong ones',
  recs(numbers) === 0,
  'got ' + recs(numbers));
t('   but a holistic one does',
  (S.score(numbers, 'mim', null, 'holistic').mods.find(m => m.label === 'References') || { pts: 0 }).pts > 2);

/* ---- the data ---- */

const missing = M.schools.filter(sc => !sc.profile || !M.profiles[sc.profile]);
t('every school names a defined profile', missing.length === 0, missing.map(x => x.id).join(', '));

const unexplained = M.schools.filter(sc => !sc.because || sc.because.length < 30);
t('every profile assignment says what it rests on', unexplained.length === 0,
  unexplained.map(x => x.id).join(', '));

const unused = IDS.filter(p => !M.schools.some(sc => sc.profile === p));
t('no profile is defined and then never used', unused.length === 0, unused.join(', '));

/* ---- it reaches the school rows ---- */

const r = S.evaluate(numbers, 'mif');
const boc = r.rows.find(x => x.school.id === 'bocconi-fin');
const hec = r.rows.find(x => x.school.id === 'hec-mif');
t('Bocconi Finance is scored as numbers-led', boc.profile.id === 'metric');
t('   and a numbers-only profile beats its headline score there',
  boc.profileScore > r.score.total + 10,
  boc.profileScore + ' vs headline ' + r.score.total);
t('HEC Finance is scored holistically', hec.profile.id === 'holistic');
t('   and the same profile is penalised there',
  hec.profileScore < r.score.total,
  hec.profileScore + ' vs headline ' + r.score.total);
t('the reported shift matches the two scores',
  Math.abs(boc.profileShift - (boc.profileScore - r.score.total)) < 0.05);

/* ---- advice follows the weighting ---- */

const bocTop = boc.improvements.slice(0, 3).map(i => i.groupId);
const hecTop = hec.improvements.slice(0, 3).map(i => i.groupId);
t('the top suggestions differ between a numbers-led and a holistic school',
  JSON.stringify(bocTop) !== JSON.stringify(hecTop),
  bocTop + ' | ' + hecTop);
t('a holistic school suggests the soft factors this profile is missing',
  ['essays', 'leadership', 'international', 'internQuality', 'internMonths']
    .some(g => hecTop.includes(g)), hecTop.join(', '));

/* Every claimed gain must survive a recomputation under the same profile. */
let gainsOk = true, badGain = null;
for (const row of r.rows) {
  for (const imp of row.improvements.slice(0, 3)) {
    const trial = Object.assign({}, numbers);
    const group = M.steps.flatMap(st => st.groups).find(g => g.id === imp.groupId);
    const opt = group.options.find(o => o.label === imp.optionLabel);
    if (group.type === 'radio') trial[group.id] = opt.id; else trial[opt.id] = true;
    const actual = S.score(trial, 'mif', null, row.school.profile).total
                 - S.score(numbers, 'mif', null, row.school.profile).total;
    if (Math.abs(actual - imp.gain) > 0.11) { gainsOk = false; badGain = row.school.id + ' ' + imp.groupId + ': claimed ' + imp.gain + ', got ' + actual; }
  }
}
t('every claimed gain recomputes under that school\'s own weighting', gainsOk, badGain);

/* ---- gates are unaffected by weighting ---- */

const capped = Object.assign({}, numbers, { fullTime: 'ft_59' });
const rc = S.evaluate(capped, 'mif');
t('a hard rule still blocks regardless of how well the weighting suits you',
  !rc.rows.find(x => x.school.id === 'lbs-mfa').eligible);

console.log('\n' + pass + ' passed, ' + fail + ' failed');
process.exit(fail ? 1 : 0);
