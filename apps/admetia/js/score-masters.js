/* ---------------------------------------------------------------------------
 * Master's scorer.
 *
 * Two stages, in this order:
 *
 *   1. Gates. Published requirements at this level are overwhelmingly pass/fail
 *      — ECTS prerequisites, experience caps, test floors, language levels. A
 *      school that fails a gate is reported ineligible and is not scored at
 *      all, because scoring it would imply a strong profile could compensate.
 *      It cannot.
 *
 *   2. Score, 0–100, from track-specific weights. If you are not submitting a
 *      test, the test weight is removed and the remaining weights are rescaled
 *      — so declining to submit is neutral rather than a silent zero.
 *
 *   3. Reweight per school. The track weighting says what a finance applicant
 *      is generally judged on; it does not say what any one school does with
 *      the file. Bocconi runs no interview, takes no reference letters, names
 *      GPA as a compulsory pillar and applies a test floor to everyone — there,
 *      the transcript and the test are close to the whole ranking. HEC and IE
 *      run essays, recorded answers and live interviews instead. Each school
 *      carries a selection profile whose multipliers reshape the track weights
 *      and are then renormalised back to the same total, so a profile moves
 *      emphasis around rather than handing anyone free points. Every number
 *      below — base score, gates, counterfactuals — is computed under the
 *      profile of the school it is being reported for.
 * ------------------------------------------------------------------------- */

(function () {
  'use strict';

  var M = window.MASTERS_MODEL;
  var C = window.CONVERT;

  var OPTION = {}, GROUP_OF = {};
  M.steps.forEach(function (step) {
    step.groups.forEach(function (group) {
      (group.options || []).forEach(function (o) {
        OPTION[o.id] = o;
        GROUP_OF[o.id] = group.id;
      });
    });
  });

  var ENGLISH_RANK = { none: 0, B2: 1, C1: 2, C2: 3 };

  function opt(a, groupId) {
    var id = a[groupId];
    return (typeof id === 'string' && OPTION[id]) ? OPTION[id] : null;
  }
  function val(a, groupId, key, dflt) {
    var o = opt(a, groupId);
    return (o && o[key] !== undefined) ? o[key] : dflt;
  }

  /* Test score as an old-GMAT equivalent, so gates written in those terms can
   * be tested against a Focus or GRE score. */
  function testInfo(a) {
    var status = a.testStatus;
    if (status !== 'ts_yes') return { submitting: false, pct: null, gmat: null };
    var kindOpt = opt(a, 'testType');
    var kind = kindOpt ? kindOpt.kind : null;
    var raw = parseFloat(a.testScore);
    var greQ = parseFloat(a.greQuant);
    var pct = null, gmat = null;

    if (kind === 'gre') {
      if (!isNaN(greQ)) { pct = C.percentile('greq', greQ); gmat = C.toGmat('greq', greQ); }
    } else if (kind === 'focus') {
      if (!isNaN(raw)) { pct = C.percentile('focus', raw); gmat = C.toGmat('focus', raw); }
    } else if (kind === 'gmat') {
      if (!isNaN(raw)) { pct = C.percentile('gmat', raw); gmat = raw; }
    }
    return { submitting: pct !== null, pct: pct, gmat: gmat, kind: kind };
  }

  function factors(a, testPctOverride) {
    var mathsSum = 0;
    var mathsGroup = null;
    M.steps.forEach(function (s) {
      s.groups.forEach(function (g) { if (g.id === 'maths') mathsGroup = g; });
    });
    if (mathsGroup) {
      mathsGroup.options.forEach(function (o) { if (a[o.id] === true) mathsSum += o.v; });
    }
    mathsSum = Math.min(1, mathsSum);

    var quant =
      0.30 * val(a, 'ectsQuant', 'v', 0) +
      0.15 * val(a, 'ectsAccFin', 'v', 0) +
      0.25 * mathsSum +
      0.15 * val(a, 'programming', 'v', 0) +
      0.05 * (a.cfa_l1 === true ? 1 : 0) +
      0.10 * val(a, 'degreeField', 'v', 0);

    var t = testInfo(a);
    var pct = (testPctOverride === undefined || testPctOverride === null) ? t.pct : testPctOverride;

    return {
      academic: val(a, 'gradeBand', 'v', 0),
      test: pct === null ? null : Math.max(0, Math.min(1, pct / 100)),
      institution: val(a, 'institution', 'v', 0),
      quant: Math.max(0, Math.min(1, quant)),
      internship: 0.65 * val(a, 'internMonths', 'v', 0) + 0.35 * val(a, 'internQuality', 'v', 0),
      leadership: val(a, 'leadership', 'v', 0),
      international: val(a, 'international', 'v', 0),
      essays: val(a, 'essays', 'v', 0)
    };
  }

  /* Track weights reshaped by a school's selection profile, renormalised back
   * to the track's own total. Renormalising is what keeps the thresholds
   * meaningful: a profile redistributes the same 100 points, so an evenly
   * balanced applicant scores about the same everywhere and only a lopsided
   * one moves. */
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

  /* The factors this school leans on hardest, and how far each one has moved
   * from the track's own weighting. Drives the "what this school actually
   * weighs" panel. */
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

  function score(a, trackId, testPctOverride, profileId) {
    a = a || {};
    var track = M.tracks[trackId];
    var prof = M.profiles[profileId] || M.profiles.balanced;
    var f = factors(a, testPctOverride);
    var weights = profileWeights(trackId, prof.id);

    /* Not submitting a test: drop the weight and rescale the rest, rather than
     * scoring an absent number as zero. */
    var testDropped = f.test === null;
    if (testDropped) {
      var freed = weights.test;
      delete weights.test;
      var rest = Object.keys(weights).reduce(function (s, k) { return s + weights[k]; }, 0);
      Object.keys(weights).forEach(function (k) {
        weights[k] = weights[k] + freed * (weights[k] / rest);
      });
    }

    var contributions = [];
    var total = 0;
    Object.keys(weights).forEach(function (k) {
      var v = f[k] || 0;
      var pts = weights[k] * v;
      total += pts;
      contributions.push({ key: k, weight: weights[k], value: v, pts: pts });
    });

    /* Modifiers sit outside the weighted sum because they are curves or small
     * adjustments, not proportions of a whole. */
    var mods = [];
    var ftMonths = val(a, 'fullTime', 'n', null);
    if (ftMonths !== null) {
      var curve = track.fullTimeCurve[ftMonths] || 0;
      if (curve) {
        mods.push({ label: 'Full-time experience', pts: curve });
        total += curve;
      }
    }
    /* Modifier scaling is part of the profile too. A school that takes no
     * reference letters at all should not be handing out points for strong
     * ones — scale 0 removes the line rather than quietly keeping it. */
    var modScale = prof.mods || {};
    function scaled(key) { return modScale[key] === undefined ? 1 : modScale[key]; }

    var recMod = val(a, 'recs', 'mod', 0) * scaled('recs');
    if (recMod) { mods.push({ label: 'References', pts: recMod }); total += recMod; }
    var langMod = val(a, 'languages', 'mod', 0) * scaled('languages');
    if (langMod) { mods.push({ label: 'Languages', pts: langMod }); total += langMod; }

    total = Math.max(0, Math.min(100, total));

    return {
      total: Math.round(total * 10) / 10,
      contributions: contributions,
      mods: mods,
      testDropped: testDropped,
      test: testInfo(a),
      factors: f,
      profile: prof
    };
  }

  /* --------------------------------------------------------------------- */
  /* Gates                                                                  */
  /* --------------------------------------------------------------------- */

  function checkGates(a, school) {
    var failures = [], warnings = [];
    var t = testInfo(a);
    var ftMonths = val(a, 'fullTime', 'n', null);
    var internMonths = val(a, 'internMonths', 'n', 0);

    /* Test policy */
    if (!t.submitting && a.testStatus !== undefined) {
      if (school.test.policy === 'required') {
        failures.push({
          label: 'Requires a test score, and you are not submitting one',
          detail: school.test.note, src: school.test.src
        });
      } else if (school.test.policy === 'conditional') {
        warnings.push({
          label: 'May require a test score depending on your degree',
          detail: school.test.note, src: school.test.src
        });
      }
    }

    (school.gates || []).forEach(function (gate) {
      switch (gate.type) {
        case 'maxWorkMonths':
          if (ftMonths !== null && ftMonths > gate.value) {
            failures.push({ label: gate.label, src: gate.src });
          }
          break;
        case 'minWorkMonths':
          if (ftMonths !== null && (ftMonths + internMonths) < gate.value) {
            failures.push({ label: gate.label, src: gate.src });
          }
          break;
        case 'minEctsQuant':
          if (a.ectsQuant !== undefined && val(a, 'ectsQuant', 'n', 0) < gate.value) {
            failures.push({ label: gate.label, src: gate.src });
          }
          break;
        case 'minEctsBusiness':
          if (a.ectsBusiness !== undefined && val(a, 'ectsBusiness', 'n', 0) < gate.value) {
            failures.push({ label: gate.label, src: gate.src });
          }
          break;
        case 'quantDegree':
          if (a.degreeField !== undefined && val(a, 'degreeField', 'quant', false) !== true) {
            failures.push({ label: gate.label, src: gate.src });
          }
          break;
        case 'testMinGmat':
          if (t.submitting && t.gmat !== null && t.gmat < gate.value) {
            failures.push({ label: gate.label + ' — your score converts to about ' + t.gmat, src: gate.src });
          }
          break;
        case 'minEnglish':
          var have = val(a, 'english', 'level', null);
          if (have && ENGLISH_RANK[have] < ENGLISH_RANK[gate.value]) {
            failures.push({ label: gate.label, src: gate.src });
          }
          break;
      }
    });

    return { failures: failures, warnings: warnings };
  }

  /* --------------------------------------------------------------------- */
  /* Counterfactuals — what would actually move the number                  */
  /* --------------------------------------------------------------------- */

  /* Answers there is no point advising anyone to change: either fixed by
   * history, or handled per-school rather than in the base score. */
  var NO_SUGGEST = ['fullTime', 'round', 'cems', 'testStatus', 'testType'];

  function suggestable(groupId) {
    return M.fixedGroups.indexOf(groupId) === -1 && NO_SUGGEST.indexOf(groupId) === -1;
  }

  /* Every single-answer change that raises the score, best-per-group, sorted
   * by how much it gains. */
  function improvements(a, trackId, profileId) {
    var base = score(a, trackId, null, profileId).total;
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

          var gain = score(trial, trackId, null, profileId).total - base;
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

  /* Smallest test percentile that reaches `target`, or null if even a perfect
   * score falls short. Answers "would a test get me there, and how good a one?" */
  function minTestPercentile(a, trackId, target, profileId) {
    if (score(a, trackId, 100, profileId).total < target) return null;
    var lo = 0, hi = 100;
    for (var i = 0; i < 24; i++) {
      var mid = (lo + hi) / 2;
      if (score(a, trackId, mid, profileId).total >= target) hi = mid; else lo = mid;
    }
    var pct = Math.ceil(hi);
    return {
      percentile: pct,
      gmat: C.fromPercentile('gmat', pct),
      focus: C.fromPercentile('focus', pct),
      greQuant: C.fromPercentile('greq', pct)
    };
  }

  /* If you are not submitting a test, this is the percentile at which
   * submitting one starts to help. Below it, adding a score actively lowers
   * your standing — worth knowing before booking a test date. */
  function breakEvenTestPercentile(a, trackId, profileId) {
    var without = score(a, trackId, null, profileId).total;
    if (score(a, trackId, 100, profileId).total < without) return null;
    var lo = 0, hi = 100;
    for (var i = 0; i < 24; i++) {
      var mid = (lo + hi) / 2;
      if (score(a, trackId, mid, profileId).total >= without) hi = mid; else lo = mid;
    }
    var pct = Math.ceil(hi);
    return {
      percentile: pct,
      gmat: C.fromPercentile('gmat', pct),
      focus: C.fromPercentile('focus', pct)
    };
  }

  /* Cheapest set of changes that closes a gap, taken greedily. */
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
    /* The headline figure is the track weighting with no school's emphasis
     * applied. It is what the chip and the summary report, and every school
     * row below is then recomputed under that school's own profile — which is
     * the point: the same profile is worth more at some schools than others. */
    var s = score(a, trackId);
    var roundIdx = val(a, 'round', 'idx', 0);

    /* Counterfactuals depend on the weighting, so they are computed per
     * profile rather than once. Only six profiles exist, so cache them. */
    var perProfile = {};
    function forProfile(pid) {
      if (!perProfile[pid]) {
        perProfile[pid] = {
          score: score(a, trackId, null, pid),
          improvements: improvements(a, trackId, pid),
          breakEven: null
        };
        if (!perProfile[pid].score.test.submitting) {
          perProfile[pid].breakEven = breakEvenTestPercentile(a, trackId, pid);
        }
      }
      return perProfile[pid];
    }

    var improvementList = improvements(a, trackId);
    var breakEven = s.test.submitting ? null : breakEvenTestPercentile(a, trackId);

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

      /* The score band is computed regardless of eligibility. Being blocked by
       * a prerequisite says nothing about whether the profile is competitive,
       * and knowing that separately is what tells you whether the prerequisite
       * is worth going and getting. */
      var band;
      if (adjusted >= sc.strong) band = { label: 'Strong', tone: 'high' };
      else if (adjusted >= sc.threshold) band = { label: 'Competitive', tone: 'good' };
      else if (adjusted >= sc.threshold - 8) band = { label: 'Possible', tone: 'mid' };
      else band = { label: 'Stretch', tone: 'low' };

      var gap = Math.round((sc.threshold - adjusted) * 10) / 10;

      /* What it would take to reach Competitive here — under this school's own
       * weighting, so the advice matches the school. Telling someone to
       * strengthen their essays for Bocconi would be worse than useless. */
      var path = pathTo(gap, pv.improvements);
      /* Computed whether or not there is a gap. When you are already clear
       * without a test, this is the score you would need in order to *stay*
       * clear — which is the number that matters at a school that requires
       * one regardless. */
      var minTest = !s.test.submitting
        ? minTestPercentile(a, trackId, sc.threshold - roundMod, profileId) : null;

      /* Applying earlier only helps where the school's regime says it does. */
      var roundGain = 0;
      if (roundIdx > 0) roundGain = (regime.mods[0] || 0) - roundMod;

      return {
        school: sc, adjusted: Math.round(adjusted * 10) / 10,
        roundMod: roundMod, roundGain: roundGain, regime: regime,
        gates: gates, eligible: !blocked,
        band: band, gap: gap, path: path, minTest: minTest,
        verdict: blocked ? { label: 'Ineligible', tone: 'gate' } : band,

        /* How this school's weighting treated you, relative to the headline
         * figure. A positive shift means its emphasis suits your profile. */
        profile: M.profiles[profileId],
        emphasis: emphasis(trackId, profileId),
        profileScore: Math.round(raw * 10) / 10,
        profileShift: Math.round((raw - s.total) * 10) / 10,
        contributions: pv.score.contributions,
        breakEven: pv.breakEven,
        improvements: pv.improvements
      };
    });

    rows.sort(function (x, y) {
      if (x.eligible !== y.eligible) return x.eligible ? -1 : 1;
      return (y.adjusted - y.school.threshold) - (x.adjusted - x.school.threshold);
    });

    return {
      score: s, rows: rows, improvements: improvementList, breakEven: breakEven,
      /* Every profile actually in play for this track, for the explainer. */
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

  window.MASTERS_SCORE = {
    score: score,
    profileWeights: profileWeights,
    emphasis: emphasis,
    evaluate: evaluate,
    completeness: completeness,
    testInfo: testInfo,
    improvements: improvements,
    minTestPercentile: minTestPercentile
  };
}());
