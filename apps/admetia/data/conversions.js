/* ---------------------------------------------------------------------------
 * Score and grade conversions.
 *
 * The GMAT / GMAT Focus / GRE equivalences map concordant score bands.
 * The percentile figures are approximations used to put three incomparable
 * scales on one axis — they are good enough to rank a profile and are NOT
 * official percentile ranks.
 * ------------------------------------------------------------------------- */

window.CONVERT = (function () {
  'use strict';

  /* Anchor points: [score, approximate percentile] */
  var GMAT_PCT = [
    [800, 99.9], [760, 99], [740, 97], [730, 96], [710, 91], [700, 88],
    [680, 82], [660, 75], [640, 68], [620, 60], [600, 53], [580, 45],
    [550, 35], [520, 25], [500, 20], [400, 5], [200, 0]
  ];
  /* GMAT Focus anchors are GMAC's own percentiles (concordance table
   * published Aug 2026, data July 2021 to June 2026). */
  var FOCUS_PCT = [
    [805, 99.9], [715, 98.6], [705, 97.5], [685, 95.1], [665, 91.2], [655, 89.6],
    [635, 80.9], [615, 75.4], [605, 69.4], [585, 59.9], [575, 56.7], [555, 47.4],
    [525, 34.0], [505, 27.3], [485, 21.7], [405, 7.7], [205, 0]
  ];
  var GRE_Q_PCT = [
    [170, 96], [169, 93], [168, 90], [167, 87], [166, 83], [165, 78],
    [164, 74], [163, 69], [162, 65], [161, 60], [160, 56], [159, 52],
    [157, 45], [155, 38], [152, 30], [150, 25], [140, 5], [130, 0]
  ];

  /* Piecewise-linear interpolation down a descending anchor table. */
  function interp(table, x) {
    if (x === null || x === undefined || isNaN(x)) return null;
    if (x >= table[0][0]) return table[0][1];
    var last = table[table.length - 1];
    if (x <= last[0]) return last[1];
    for (var i = 0; i < table.length - 1; i++) {
      var a = table[i], b = table[i + 1];
      if (x <= a[0] && x >= b[0]) {
        var t = (x - b[0]) / (a[0] - b[0]);
        return b[1] + t * (a[1] - b[1]);
      }
    }
    return null;
  }

  function percentile(kind, score) {
    var n = parseFloat(score);
    if (isNaN(n)) return null;
    if (kind === 'gmat') return interp(GMAT_PCT, n);
    if (kind === 'focus') return interp(FOCUS_PCT, n);
    if (kind === 'greq') return interp(GRE_Q_PCT, n);
    return null;
  }

  /* Cross-scale equivalents, so a gate written in old-GMAT terms can be tested
   * against a Focus score and vice versa. Derived by matching percentiles. */
  function toGmat(kind, score) {
    var p = percentile(kind, score);
    if (p === null) return null;
    for (var i = 0; i < GMAT_PCT.length - 1; i++) {
      var a = GMAT_PCT[i], b = GMAT_PCT[i + 1];
      if (p <= a[1] && p >= b[1]) {
        var t = (a[1] - b[1]) === 0 ? 0 : (p - b[1]) / (a[1] - b[1]);
        return Math.round(b[0] + t * (a[0] - b[0]));
      }
    }
    return null;
  }
  function toFocus(kind, score) {
    var p = percentile(kind, score);
    if (p === null) return null;
    for (var i = 0; i < FOCUS_PCT.length - 1; i++) {
      var a = FOCUS_PCT[i], b = FOCUS_PCT[i + 1];
      if (p <= a[1] && p >= b[1]) {
        var t = (a[1] - b[1]) === 0 ? 0 : (p - b[1]) / (a[1] - b[1]);
        return Math.round(b[0] + t * (a[0] - b[0]));
      }
    }
    return null;
  }

  /* Inverse of `percentile`: what score sits at a given percentile. Used to
   * answer "what would I need to score to reach this school". */
  function fromPercentile(kind, pct) {
    var table = kind === 'gmat' ? GMAT_PCT : kind === 'focus' ? FOCUS_PCT : GRE_Q_PCT;
    if (pct === null || pct === undefined || isNaN(pct)) return null;
    if (pct >= table[0][1]) return table[0][0];
    var last = table[table.length - 1];
    if (pct <= last[1]) return last[0];
    for (var i = 0; i < table.length - 1; i++) {
      var a = table[i], b = table[i + 1];
      if (pct <= a[1] && pct >= b[1]) {
        var t = (a[1] - b[1]) === 0 ? 0 : (pct - b[1]) / (a[1] - b[1]);
        return Math.round(b[0] + t * (a[0] - b[0]));
      }
    }
    return null;
  }

  /* Where a score sits inside an estimated admitted distribution, in standard
   * deviations. Positive means above the estimated median. */
  function zAgainst(score, est) {
    if (!est || score === null || score === undefined || isNaN(score) || !est.sd) return null;
    return (score - est.median) / est.sd;
  }

  /* ------------------------------------------------------------------ */
  /* Italian grades                                                      */
  /*                                                                     */
  /* The calculators ask Italian graduates for the ECTS-weighted average */
  /* of their 18-30 exam marks, never the 66-110 degree mark. The degree */
  /* mark starts from that average (x11/3) and the graduation committee  */
  /* then adds discretionary points for the thesis, time to completion,  */
  /* Erasmus and so on, so two identical transcripts can graduate        */
  /* several points apart and the mark does not compare across schools.  */
  /*                                                                     */
  /* The average gives a rough US GPA and a place in the cohort. The     */
  /* cohort anchors are CAL: AlmaLaurea puts the average bachelor's      */
  /* degree mark at about 99-102/110, which after typical committee      */
  /* points is an exam average of about 26 — the median here. Faculties  */
  /* differ (engineering grades lower than economics), so it is a rough  */
  /* placement. Many universities recalculate the GPA themselves.        */
  /* ------------------------------------------------------------------ */

  /* Exam average -> academic factor, matching the cohort bands the
   * foreign-grade question uses (median 0.4, top 5% 1.0). */
  var IT_COHORT = [[30, 1.0], [29.5, 1.0], [28.8, 0.9], [27.8, 0.74], [26.8, 0.56], [26, 0.4], [24.5, 0.2], [18, 0.2]];
  var IT_BANDS = [
    { min: 29.5, band: 'gb_top5', cls: 'first' },
    { min: 28.8, band: 'gb_top10', cls: 'first' },
    { min: 27.8, band: 'gb_top25', cls: '2:1h' },
    { min: 26.8, band: 'gb_top50', cls: '2:1' },
    { min: 25.6, band: 'gb_mid', cls: '2:1' },
    { min: 0, band: 'gb_low', cls: '2:2' }
  ];

  function italian(weightedExamAverage) {
    var m = parseFloat(weightedExamAverage);
    if (isNaN(m) || m < 18 || m > 30) return null;
    /* Exam-mark to letter mapping in common use: 27-30 A, 24-26 B, 21-23 C. */
    var gpa;
    if (m >= 29) gpa = 4.0;
    else if (m >= 27) gpa = 3.7 + (m - 27) / 2 * 0.3;
    else if (m >= 24) gpa = 3.0 + (m - 24) / 3 * 0.7;
    else if (m >= 21) gpa = 2.0 + (m - 21) / 3 * 1.0;
    else gpa = 1.0 + (m - 18) / 3 * 1.0;
    var b = IT_BANDS.filter(function (x) { return m >= x.min; })[0];
    return {
      gpa: Math.round(gpa * 100) / 100,
      v: Math.round(interp(IT_COHORT, m) * 1000) / 1000,
      band: b.band,
      cls: b.cls
    };
  }

  /* The grade a scorer should use. Italian graduates give an exam average;
   * everyone else picks a cohort band. An Italian answer saved before the
   * average was asked for still has a band, and that is used instead. */
  function grade(a, bandOption) {
    if (a.gradeScale === 'sc_it') {
      var r = italian(a.itAvg);
      if (r) return { v: r.v, cls: r.cls, band: r.band };
    }
    return bandOption
      ? { v: bandOption.v, cls: bandOption.cls || null, band: bandOption.id }
      : { v: 0, cls: null, band: null };
  }

  /* Whether a question is showing, given the answers so far. A group with
   * `showIf: { group, is }` appears only when that answer is chosen. */
  function shown(g, a) {
    return !g.showIf || a[g.showIf.group] === g.showIf.is;
  }

  return {
    percentile: percentile,
    fromPercentile: fromPercentile,
    zAgainst: zAgainst,
    toGmat: toGmat,
    toFocus: toFocus,
    italian: italian,
    grade: grade,
    shown: shown
  };
}());
