/* ---------------------------------------------------------------------------
 * IT & Computing scorer.
 *
 * Same two-stage shape as the master's scorer — gates, then a 0–100 score
 * reweighted per school — with three deliberate differences:
 *
 *   1. There is no test factor. The GRE is close to absent in this geography,
 *      so scoring it would mostly be scoring a blank. Where a programme
 *      genuinely requires one it is a gate, and a strong quantitative score is
 *      worth a small modifier at the schools that look at it. Nobody is
 *      penalised for not having sat it.
 *
 *   2. The gates carry much more of the decision than they do on the business
 *      side. Computing programmes publish named prerequisite modules, credit
 *      floors and degree-class minimums, and they enforce them. At the
 *      rule-based European schools the gates are very nearly the whole answer,
 *      which is why the results page puts them above the score.
 *
 *   3. One gate inverts. Conversion programmes exist for people without a
 *      computing degree, and several will not take you if you hold one. That
 *      is `noCsDegree`, and it is the only rule here that a stronger profile
 *      makes worse rather than better.
 * ------------------------------------------------------------------------- */

(function () {
  'use strict';

  var M = window.IT_MODEL;

  /* Sentences built here are shown on the results page. js/i18n.js
   * translates them in the browser; the tests run without it. */
  var T = window.I18N ? window.I18N.t : function (s, v) {
    return v ? s.replace(/\{(\w+)\}/g, function (m, k) { return k in v ? v[k] : m; }) : s;
  };

  var OPTION = {}, GROUP = {};
  M.steps.forEach(function (step) {
    step.groups.forEach(function (group) {
      GROUP[group.id] = group;
      (group.options || []).forEach(function (o) { OPTION[o.id] = o; });
    });
  });

  var ENGLISH_RANK = { none: 0, B2: 1, C1: 2, C1H: 3, C2: 4 };
  var CLASS_RANK = { '2:2': 0, '2:1': 1, '2:1h': 2, 'first': 3 };

  function opt(a, groupId) {
    var id = a[groupId];
    return (typeof id === 'string' && OPTION[id]) ? OPTION[id] : null;
  }
  function val(a, groupId, key, dflt) {
    var o = opt(a, groupId);
    return (o && o[key] !== undefined) ? o[key] : dflt;
  }

  /* Checkbox groups are scored as a capped sum of their option values, so
   * ticking everything reaches 1 and no further. */
  function ticked(a, groupId) {
    var g = GROUP[groupId];
    if (!g || !g.options) return 0;
    var sum = 0;
    g.options.forEach(function (o) { if (a[o.id] === true) sum += (o.v || 0); });
    return Math.min(1, sum);
  }

  function clamp01(x) { return Math.max(0, Math.min(1, x)); }

  function factors(a) {
    /* Named modules dominate, with the credit count and self-reported
     * programming ability as corroboration rather than as the measurement. */
    var foundations =
      0.62 * ticked(a, 'core') +
      0.24 * val(a, 'csEcts', 'v', 0) +
      0.14 * val(a, 'programming', 'v', 0);

    var maths =
      0.70 * ticked(a, 'mathsCore') +
      0.30 * val(a, 'mathsEcts', 'v', 0);

    var evidence =
      0.55 * val(a, 'research', 'v', 0) +
      0.32 * val(a, 'projects', 'v', 0) +
      0.13 * val(a, 'competitive', 'v', 0);

    /* Months and kind multiply rather than add: four years of unrelated work
     * is not four years of engineering, and saying so is the point. */
    var months = val(a, 'workMonths', 'v', 0);
    var kind = val(a, 'workKind', 'v', null);
    var experience = kind === null ? months * 0.6 : months * (0.35 + 0.65 * kind);

    return {
      academic: val(a, 'gradeBand', 'v', 0),
      institution: val(a, 'institution', 'v', 0),
      foundations: clamp01(foundations),
      maths: clamp01(maths),
      evidence: clamp01(evidence),
      experience: clamp01(experience),
      essays: val(a, 'statement', 'v', 0),
      references: val(a, 'references', 'v', 0)
    };
  }

  /* Track weights reshaped by a school's selection profile and renormalised
   * back to the track's own total, so a profile redistributes the same points
   * rather than handing anyone extra. Identical mechanism to the business
   * model, and for the same reason: it keeps the thresholds comparable. */
  function profileWeights(trackId, profileId) {
    var base = M.tracks[trackId].weights;
    var prof = M.profiles[profileId] || M.profiles.balanced;
    var out = {}, before = 0, after = 0;
    Object.keys(base).forEach(function (k) {
      var m = prof.mult[k] === undefined ? 1 : prof.mult[k];
      before += base[k];
      out[k] = base[k] * m;
      after += out[k];
    });
    if (after > 0) {
      Object.keys(out).forEach(function (k) { out[k] = out[k] * before / after; });
    }
    return out;
  }

  function emphasis(trackId, profileId) {
    var base = M.tracks[trackId].weights;
    var w = profileWeights(trackId, profileId);
    return Object.keys(w).map(function (k) {
      return {
        key: k,
        weight: Math.round(w[k] * 10) / 10,
        baseWeight: base[k],
        ratio: base[k] ? w[k] / base[k] : 1,
        delta: Math.round((w[k] - base[k]) * 10) / 10
      };
    }).sort(function (x, y) { return y.weight - x.weight; });
  }

  function score(a, trackId, profileId) {
    a = a || {};
    var prof = M.profiles[profileId] || M.profiles.balanced;
    var f = factors(a);
    var weights = profileWeights(trackId, prof.id);

    var contributions = [];
    var total = 0;
    Object.keys(weights).forEach(function (k) {
      var v = f[k] || 0;
      var pts = weights[k] * v;
      total += pts;
      contributions.push({ key: k, weight: weights[k], value: v, pts: pts });
    });

    /* No modifiers. There is deliberately no experience curve — nothing here is
     * non-monotonic in experience the way the business tracks are, and how much
     * each track values it is already in the weights — and deliberately no test
     * modifier, because no programme modelled here asks for a test at all. The
     * array is kept so the results breakdown renders the same way. */
    var mods = [];

    total = Math.max(0, Math.min(100, total));

    return {
      total: Math.round(total * 10) / 10,
      contributions: contributions,
      mods: mods,
      factors: f,
      profile: prof
    };
  }

  /* --------------------------------------------------------------------- */
  /* Gates                                                                  */
  /* --------------------------------------------------------------------- */

  function checkGates(a, school) {
    var failures = [], warnings = [];

    function fail(gate, extra) {
      failures.push({ label: gate.label + (extra || ''), src: gate.src });
    }
    function warn(gate, extra) {
      warnings.push({ label: gate.label + (extra || ''), src: gate.src });
    }

    (school.gates || []).forEach(function (gate) {
      var have;
      switch (gate.type) {

        case 'minDegreeClass':
          have = val(a, 'gradeBand', 'cls', null);
          if (have && CLASS_RANK[have] < CLASS_RANK[gate.value]) fail(gate);
          break;

        case 'csDegreeRequired':
          if (a.degreeField !== undefined && val(a, 'degreeField', 'cs', false) !== true) {
            /* A mathematics or physics degree with enough computing credit is
             * accepted at most of these, so it is a warning rather than a bar
             * when the rest of the transcript carries it. */
            if (val(a, 'degreeField', 'quant', false) === true && val(a, 'csEcts', 'n', 0) >= 30) {
              warn(gate, ' — ' + T('your degree is not computing, but your computing credit may satisfy it'));
            } else {
              fail(gate);
            }
          }
          break;

        /* The inverting one. Conversion programmes exist for people without a
         * computing degree; holding one is the disqualification. */
        case 'noCsDegree':
          if (a.degreeField !== undefined && val(a, 'degreeField', 'cs', false) === true) fail(gate);
          else if (val(a, 'csEcts', 'n', 0) >= 75) {
            warn(gate, ' — ' + T('your degree is not computing, but this much computing credit may still exclude you'));
          }
          break;

        case 'minModules':
          if (anyTicked(a)) {
            var n = countTicked(a, gate.modules);
            if (n < gate.value) {
              fail(gate, ' — ' + T('you have {n} of the {required} required', { n: n, required: gate.value }));
            }
          }
          break;

        case 'minCsEcts':
          if (a.csEcts !== undefined && val(a, 'csEcts', 'n', 0) < gate.value) fail(gate);
          break;

        case 'minMathsEcts':
          if (a.mathsEcts !== undefined && val(a, 'mathsEcts', 'n', 0) < gate.value) fail(gate);
          break;

        case 'bachelorLength':
          if (a.bachelorLength !== undefined && val(a, 'bachelorLength', 'n', 0) < gate.value) fail(gate);
          break;

        case 'minEnglish':
          have = val(a, 'english', 'level', null);
          if (have && ENGLISH_RANK[have] < ENGLISH_RANK[gate.value]) fail(gate);
          break;

      }
    });

    return { failures: failures, warnings: warnings };
  }

  var MODULE_GROUPS = ['core', 'mathsCore'];

  function anyTicked(a) {
    var found = false;
    MODULE_GROUPS.forEach(function (gid) {
      var g = GROUP[gid];
      if (!g || !g.options) return;
      g.options.forEach(function (o) { if (a[o.id] === true) found = true; });
    });
    return found;
  }

  /* Counts ticked modules against a named list, across BOTH the computing and
   * the mathematics questions. Prerequisite rules cross that boundary freely —
   * Edinburgh's names calculus, linear algebra, discrete mathematics and
   * probability in one breath — so counting within a single question would
   * silently score every such rule as zero. */
  function countTicked(a, only) {
    var n = 0;
    MODULE_GROUPS.forEach(function (gid) {
      var g = GROUP[gid];
      if (!g || !g.options) return;
      g.options.forEach(function (o) {
        if (a[o.id] !== true) return;
        if (only && only.indexOf(o.id) === -1) return;
        n++;
      });
    });
    return n;
  }

  /* --------------------------------------------------------------------- */
  /* Counterfactuals                                                        */
  /* --------------------------------------------------------------------- */

  /* Answers there is no point advising anyone to change. Note what is *not*
   * here: the prerequisite modules are suggestable, because taking a discrete
   * mathematics course before you apply is a real thing a person can do, and
   * at a prerequisite-audited school it is usually the only thing that helps. */
  var NO_SUGGEST = ['round', 'english', 'gradeScale'];

  function suggestable(groupId) {
    return M.fixedGroups.indexOf(groupId) === -1 && NO_SUGGEST.indexOf(groupId) === -1;
  }

  function improvements(a, trackId, profileId) {
    var base = score(a, trackId, profileId).total;
    var best = {};

    M.steps.forEach(function (step) {
      step.groups.forEach(function (g) {
        if (!suggestable(g.id) || !g.options) return;

        g.options.forEach(function (o) {
          var trial = Object.assign({}, a), applied;
          if (g.type === 'radio') {
            if (a[g.id] === o.id) return;
            trial[g.id] = o.id;
            applied = o.label;
          } else if (g.type === 'checkbox') {
            if (a[o.id] === true) return;
            trial[o.id] = true;
            applied = o.label;
          } else return;

          var gain = score(trial, trackId, profileId).total - base;
          if (gain < 0.05) return;
          if (!best[g.id] || gain > best[g.id].gain) {
            best[g.id] = {
              groupId: g.id, groupLabel: g.label,
              optionLabel: applied,
              gain: Math.round(gain * 10) / 10
            };
          }
        });
      });
    });

    return Object.keys(best).map(function (k) { return best[k]; })
      .sort(function (x, y) { return y.gain - x.gain; });
  }

  function pathTo(gap, improvementList) {
    if (gap <= 0) return { reached: true, steps: [] };
    var acc = 0, steps = [];
    for (var i = 0; i < improvementList.length && acc < gap; i++) {
      steps.push(improvementList[i]);
      acc += improvementList[i].gain;
    }
    return { reached: acc >= gap, steps: steps, total: Math.round(acc * 10) / 10 };
  }

  /* --------------------------------------------------------------------- */

  function evaluate(a, trackId) {
    var s = score(a, trackId);
    var roundIdx = val(a, 'round', 'idx', 0);

    var perProfile = {};
    function forProfile(pid) {
      if (!perProfile[pid]) {
        perProfile[pid] = {
          score: score(a, trackId, pid),
          improvements: improvements(a, trackId, pid)
        };
      }
      return perProfile[pid];
    }

    var improvementList = improvements(a, trackId);

    var rows = M.schools.filter(function (sc) {
      return sc.tracks.indexOf(trackId) !== -1;
    }).map(function (sc) {
      var gates = checkGates(a, sc);
      var regime = M.regimes[sc.regime];
      var roundMod = regime.mods[roundIdx] || 0;
      var profileId = sc.profile || 'balanced';
      var pv = forProfile(profileId);
      var raw = pv.score.total;
      var adjusted = Math.max(0, Math.min(100, raw + roundMod));
      var blocked = gates.failures.length > 0;

      /* Banded whether or not a gate blocks it. Being short a prerequisite
       * says nothing about whether the rest of the profile is competitive, and
       * separating the two is what tells you whether the missing module is
       * worth going and getting. */
      var band;
      if (adjusted >= sc.strong) band = { label: 'Strong', tone: 'high' };
      else if (adjusted >= sc.threshold) band = { label: 'Competitive', tone: 'good' };
      else if (adjusted >= sc.threshold - 8) band = { label: 'Possible', tone: 'mid' };
      else band = { label: 'Stretch', tone: 'low' };

      var gap = Math.round((sc.threshold - adjusted) * 10) / 10;

      var roundGain = 0;
      if (roundIdx > 0) roundGain = (regime.mods[0] || 0) - roundMod;

      return {
        school: sc, adjusted: Math.round(adjusted * 10) / 10,
        roundMod: roundMod, roundGain: roundGain, regime: regime,
        gates: gates, eligible: !blocked,
        band: band, gap: gap, path: pathTo(gap, pv.improvements),
        verdict: blocked ? { label: 'Ineligible', tone: 'gate' } : band,
        evidence: (window.IT_EVIDENCE && window.IT_EVIDENCE.schools[sc.id]) || null,

        profile: M.profiles[profileId],
        emphasis: emphasis(trackId, profileId),
        profileScore: Math.round(raw * 10) / 10,
        profileShift: Math.round((raw - s.total) * 10) / 10,
        contributions: pv.score.contributions,
        improvements: pv.improvements
      };
    });

    rows.sort(function (x, y) {
      if (x.eligible !== y.eligible) return x.eligible ? -1 : 1;
      return (y.adjusted - y.school.threshold) - (x.adjusted - x.school.threshold);
    });

    return {
      score: s, rows: rows, improvements: improvementList,
      profilesUsed: Object.keys(perProfile)
    };
  }

  function completeness(a) {
    var total = 0, done = 0;
    M.steps.forEach(function (step) {
      step.groups.forEach(function (g) {
        if (g.optional || g.type === 'checkbox' || g.type === 'custom') return;
        total++;
        if (g.type === 'number') { if (a[g.id] !== undefined && a[g.id] !== '') done++; }
        else if (a[g.id]) done++;
      });
    });
    return total ? Math.round(done / total * 100) : 0;
  }

  window.IT_SCORE = {
    score: score,
    profileWeights: profileWeights,
    emphasis: emphasis,
    evaluate: evaluate,
    completeness: completeness,
    improvements: improvements,
    checkGates: checkGates,
    factors: factors
  };
}());
