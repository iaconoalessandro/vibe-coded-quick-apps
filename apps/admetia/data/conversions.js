/* ---------------------------------------------------------------------------
 * Score and grade conversions.
 *
 * The GMAT / GMAT Focus / GRE equivalences are the published table that ships
 * with the source MBA calculator. The percentile figures are approximations
 * used to put three incomparable scales on one axis — they are good enough to
 * rank a profile and are NOT official percentile ranks.
 * ------------------------------------------------------------------------- */

window.CONVERT = (function () {
  'use strict';

  /* Anchor points: [score, approximate percentile] */
  var GMAT_PCT = [
    [800, 99.9], [760, 99], [740, 97], [730, 96], [710, 91], [700, 88],
    [680, 82], [660, 75], [640, 68], [620, 60], [600, 53], [580, 45],
    [550, 35], [520, 25], [500, 20], [400, 5], [200, 0]
  ];
  var FOCUS_PCT = [
    [805, 99.9], [715, 99], [705, 97], [685, 96], [665, 91], [655, 88],
    [635, 82], [615, 75], [605, 68], [585, 60], [575, 53], [555, 45],
    [525, 35], [505, 25], [485, 20], [405, 5], [205, 0]
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
  /* The 66-110 degree mark is NOT a transcript average. It starts from  */
  /* the ECTS-weighted average of 18-30 exam marks (x11/3), then the     */
  /* graduation committee adds discretionary points for the thesis, time */
  /* to completion, Erasmus and so on. Two identical transcripts can     */
  /* graduate several points apart, so the projected mark below is a     */
  /* floor, not a prediction — and the derived US GPA is only a rough    */
  /* indication. Many universities recalculate GPA themselves.           */
  /* ------------------------------------------------------------------ */

  function italian(weightedExamAverage) {
    var m = parseFloat(weightedExamAverage);
    if (isNaN(m) || m < 18 || m > 30) return null;
    var projected = m * 11 / 3;                 // before committee points
    /* Exam-mark to letter mapping in common use: 27-30 A, 24-26 B, 21-23 C. */
    var gpa;
    if (m >= 29) gpa = 4.0;
    else if (m >= 27) gpa = 3.7 + (m - 27) / 2 * 0.3;
    else if (m >= 24) gpa = 3.0 + (m - 24) / 3 * 0.7;
    else if (m >= 21) gpa = 2.0 + (m - 21) / 3 * 1.0;
    else gpa = 1.0 + (m - 18) / 3 * 1.0;
    return {
      projectedBase: Math.round(projected * 10) / 10,
      projectedCeiling: Math.min(110, Math.round((projected + 8) * 10) / 10),
      gpa: Math.round(gpa * 100) / 100
    };
  }

  return {
    percentile: percentile,
    fromPercentile: fromPercentile,
    zAgainst: zAgainst,
    toGmat: toGmat,
    toFocus: toFocus,
    italian: italian
  };
}());
