'use strict';
/*
 * build-evidence.js — turns cached applicant reports into data/it-evidence.js.
 *
 * Two rules govern everything here, and both exist because the UK/EU sample is
 * thin:
 *
 *  1. Aggregates are computed per INSTITUTION, not per programme. Applicants
 *     file their results under free-text programme names, and no institution
 *     here has enough of them to separate one MSc from another reliably. So
 *     every figure is labelled as covering that institution's computing
 *     master's results, and the page says so rather than implying the numbers
 *     describe one course.
 *
 *  2. A grade distribution is only emitted above MIN_GPA_N reports. Below it,
 *     `gpa` is null and the page says outright that nothing can be said. A
 *     median computed from thirteen self-selected posts is noise wearing a
 *     decimal point.
 *
 * Decision dates survive small samples in a way grades do not — a date
 * distribution needs no inference — so timing is emitted from MIN_TIMING_N up.
 */

const fs = require('fs');

const MIN_GPA_N = 40;
const MIN_ACC_GPA_N = 20;
const MIN_TIMING_N = 8;

/* GradCafe institution names are user-supplied and inconsistent: EPFL is filed
 * as "Ecole Polytechnique Federale de Lausanne", TU Delft as "Delft University
 * of Technology", TUM under at least four spellings. Matching is on lowercased
 * substrings, and every school in the model is listed so that a school finding
 * zero rows is visible rather than silently absent. */
const INSTITUTIONS = {
  'University of Oxford':        ['university of oxford', 'oxford university'],
  'University of Cambridge':     ['university of cambridge', 'cambridge university'],
  'Imperial College London':     ['imperial college'],
  'University College London':   ['university college london', '(ucl)', 'ucl'],
  'University of Edinburgh':     ['university of edinburgh'],
  "King's College London":       ["king's college london", 'kings college london'],
  'University of Warwick':       ['university of warwick'],
  'University of Manchester':    ['university of manchester'],
  'University of Bristol':       ['university of bristol'],
  'University of Southampton':   ['university of southampton'],
  'University of Glasgow':       ['university of glasgow'],
  'University of St Andrews':    ['st andrews'],
  'ETH Zürich':                  ['eth zurich', 'eth zürich', 'swiss federal institute of technology zurich'],
  'EPFL':                        ['ecole polytechnique federale de lausanne', 'école polytechnique fédérale',
                                  'swiss federal institute of technology la', 'epfl'],
  'TU Delft':                    ['delft university of technology', 'tu delft'],
  'TU München':                  ['technical university of munich', 'technische universität münchen',
                                  'technische universitat munchen', 'tum'],
  'KTH':                         ['kth royal institute', 'royal institute of technology'],
  'University of Amsterdam':     ['university of amsterdam', 'universiteit van amsterdam']
};

/* Which institution's rows each modelled programme draws on. */
const SCHOOL_INSTITUTION = {
  'oxford-acs': 'University of Oxford',
  'cambridge-acs': 'University of Cambridge',
  'imperial-advcomp': 'Imperial College London',
  'imperial-aiml': 'Imperial College London',
  'imperial-computing': 'Imperial College London',
  'ucl-dsml': 'University College London',
  'ucl-cs-conv': 'University College London',
  'edinburgh-ai': 'University of Edinburgh',
  'edinburgh-informatics': 'University of Edinburgh',
  'kcl-ai': "King's College London",
  'warwick-cs': 'University of Warwick',
  'manchester-acs': 'University of Manchester',
  'southampton-ai': 'University of Southampton',
  'bristol-cs-conv': 'University of Bristol',
  'glasgow-it': 'University of Glasgow',
  'standrews-cs-conv': 'University of St Andrews',
  'eth-cs': 'ETH Zürich',
  'epfl-cs': 'EPFL',
  'tudelft-cs': 'TU Delft',
  'tum-informatics': 'TU München',
  'kth-ml': 'KTH',
  'uva-ai': 'University of Amsterdam'
};

/* Pools for the transcript-axis picture that individual institutions are too
 * thin to support on their own. */
const TIERS = {
  'uk-most-selective': ['University of Oxford', 'University of Cambridge', 'Imperial College London'],
  'uk-selective': ['University College London', 'University of Edinburgh', "King's College London",
                   'University of Warwick', 'University of Manchester', 'University of Bristol',
                   'University of Southampton', 'University of Glasgow', 'University of St Andrews'],
  'eu-technical': ['ETH Zürich', 'EPFL', 'TU Delft', 'TU München', 'KTH', 'University of Amsterdam']
};

function institutionOf(name) {
  const n = (name || '').toLowerCase();
  for (const canonical of Object.keys(INSTITUTIONS)) {
    for (const frag of INSTITUTIONS[canonical]) {
      if (n.indexOf(frag) !== -1) return canonical;
    }
  }
  return null;
}

function median(xs) {
  if (!xs.length) return null;
  const s = xs.slice().sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
}
function quantile(xs, q) {
  if (!xs.length) return null;
  const s = xs.slice().sort((a, b) => a - b);
  const i = Math.min(s.length - 1, Math.max(0, Math.round((s.length - 1) * q)));
  return s[i];
}
function round2(x) { return x === null ? null : Math.round(x * 100) / 100; }

/* Grades arrive on whatever scale the applicant used. Anything above 4.3 is
 * not a 4-point GPA — percentages, 10-point scales, CGPA out of 100 — and
 * mixing them would produce a meaningless median, so they are dropped rather
 * than guessed at. The count of what was dropped is reported. */
function usableGpa(raw) {
  const v = parseFloat(raw);
  if (isNaN(v)) return null;
  if (v <= 0 || v > 4.3) return null;
  return v;
}

function aggregate(rows) {
  const dec = { accepted: 0, rejected: 0, waitlisted: 0, interview: 0, other: 0 };
  const accGpa = [], rejGpa = [], dates = [];
  let gpaOffScale = 0, gpaAny = 0;

  for (const r of rows) {
    const d = (r.decision || '').toLowerCase();
    if (d === 'accepted') dec.accepted++;
    else if (d === 'rejected') dec.rejected++;
    else if (d.indexOf('wait') === 0) dec.waitlisted++;
    else if (d === 'interview') dec.interview++;
    else dec.other++;

    if (r.gpa !== null && r.gpa !== undefined && r.gpa !== '') {
      gpaAny++;
      const g = usableGpa(r.gpa);
      if (g === null) gpaOffScale++;
      else if (d === 'accepted') accGpa.push(g);
      else if (d === 'rejected') rejGpa.push(g);
    }
    if (r.date) dates.push(r.date.slice(0, 10));
  }

  dates.sort();
  const out = {
    n: rows.length,
    reported: { accepted: dec.accepted, rejected: dec.rejected, waitlisted: dec.waitlisted },
    gpaReported: gpaAny,
    gpaOffScale: gpaOffScale,
    timing: null,
    gpa: null
  };

  if (dates.length >= MIN_TIMING_N) {
    out.timing = {
      earliest: dates[0],
      median: dates[Math.floor(dates.length / 2)],
      latest: dates[dates.length - 1]
    };
  }

  /* The bar the whole design rests on. Both halves matter: enough reports for
   * the institution to be represented at all, AND enough of them carrying an
   * accepted applicant's grade for a median and quartiles to mean anything.
   * Oxford passes the first and fails the second — 54 reports, but only nine
   * accepted grades behind them — so it publishes no distribution. */
  if (rows.length >= MIN_GPA_N && accGpa.length >= MIN_ACC_GPA_N) {
    out.gpa = {
      accN: accGpa.length,
      accMedian: round2(median(accGpa)),
      accP25: round2(quantile(accGpa, 0.25)),
      accP75: round2(quantile(accGpa, 0.75)),
      rejN: rejGpa.length,
      rejMedian: round2(median(rejGpa))
    };
  }
  return out;
}

function build(rows, outPath) {
  const byInstitution = {};
  let matched = 0;
  for (const r of rows) {
    const inst = institutionOf(r.school);
    if (!inst) continue;
    matched++;
    (byInstitution[inst] = byInstitution[inst] || []).push(r);
  }

  const instAgg = {};
  for (const inst of Object.keys(INSTITUTIONS)) {
    instAgg[inst] = aggregate(byInstitution[inst] || []);
  }

  const tierAgg = {};
  for (const tier of Object.keys(TIERS)) {
    const pooled = [];
    for (const inst of TIERS[tier]) pooled.push(...(byInstitution[inst] || []));
    tierAgg[tier] = aggregate(pooled);
  }
  const tierOf = {};
  for (const tier of Object.keys(TIERS)) for (const inst of TIERS[tier]) tierOf[inst] = tier;

  const schools = {};
  for (const id of Object.keys(SCHOOL_INSTITUTION)) {
    const inst = SCHOOL_INSTITUTION[id];
    const a = instAgg[inst];
    schools[id] = {
      institution: inst,
      scope: 'institution',
      window: 'decisions reported since January 2021',
      n: a.n,
      reported: a.reported,
      gpaReported: a.gpaReported,
      timing: a.timing,
      gpa: a.gpa,
      tier: tierOf[inst] || null,
      src: 'GC'
    };
  }

  const header = `/* ---------------------------------------------------------------------------
 * Applicant-reported outcomes for the IT & Computing track.
 *
 * GENERATED FILE — do not edit by hand.
 *   node tools/gradcafe-aggregate.js fetch && node tools/gradcafe-aggregate.js build
 *
 * Source: results posted by applicants to TheGradCafe, decisions from January
 * 2021 onward. Aggregates only; no applicant's own text is reproduced here.
 *
 * Read these numbers for what they are. This is a self-selected sample of
 * people who chose to post an outcome, it skews international, and it is NOT
 * an acceptance rate — the denominator is "people who posted", not "people who
 * applied". Where a programme publishes a real rate, that is in the model file
 * with an OFF or FOI tag, and it is the figure that should be believed.
 *
 * Two deliberate silences:
 *
 *  - Figures are per INSTITUTION, not per programme. Applicants file under
 *    free-text course names and no institution here has enough reports to
 *    separate one MSc from another.
 *  - \`gpa\` is null below ${MIN_GPA_N} reports. Most institutions here are below that
 *    bar, and a median from a dozen posts would be noise with a decimal point.
 *    Timing survives small samples in a way grades do not, so it is emitted
 *    from ${MIN_TIMING_N} reports up.
 *
 * Grades are reported on whatever scale the applicant used. Only values on a
 * 4-point scale are pooled; anything above 4.3 is counted in \`gpaOffScale\`
 * and excluded rather than converted by guesswork.
 * ------------------------------------------------------------------------- */

window.IT_EVIDENCE = {
  generated: ${JSON.stringify(new Date().toISOString().slice(0, 10))},
  source: 'TheGradCafe, applicant-reported results',
  minGpaN: ${MIN_GPA_N},
  minAcceptedGpaN: ${MIN_ACC_GPA_N},
  minTimingN: ${MIN_TIMING_N},
  schools: ${JSON.stringify(schools, null, 2).replace(/\n/g, '\n  ')},
  tiers: ${JSON.stringify(tierAgg, null, 2).replace(/\n/g, '\n  ')}
};
`;
  fs.writeFileSync(outPath, header);

  console.log('rows loaded:      ' + rows.length);
  console.log('rows matched:     ' + matched);
  console.log('');
  for (const inst of Object.keys(INSTITUTIONS)) {
    const a = instAgg[inst];
    console.log('  ' + inst.padEnd(28) + String(a.n).padStart(5) +
      '   gpa block: ' + (a.gpa ? 'yes' : 'no') +
      '   timing: ' + (a.timing ? 'yes' : 'no'));
  }
  console.log('');
  for (const t of Object.keys(tierAgg)) {
    console.log('  pool ' + t.padEnd(23) + String(tierAgg[t].n).padStart(5) +
      '   gpa block: ' + (tierAgg[t].gpa ? 'yes' : 'no'));
  }
  console.log('\nwrote ' + outPath);
}

module.exports = { build, institutionOf, aggregate, MIN_GPA_N, MIN_ACC_GPA_N, MIN_TIMING_N };
