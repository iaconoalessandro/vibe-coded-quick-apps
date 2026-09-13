/* ---------------------------------------------------------------------------
 * MBA scorer.
 *
 * Everything it knows comes from MBA_MODEL: `total` lists the lines of the
 * base score in order, and each individually modelled school lists its own
 * adjustments. Two orderings matter, and both are fixed by the model data:
 *
 *   - "managed more people before" is added to the management subtotal before
 *     the matrix division is applied;
 *   - the two sport adjustments multiply the sport subtotal in turn, so
 *     together they leave an eighth of it.
 *
 * `mode` is 'published' (the test-score checks as the model lists them) or
 * 'corrected' (the same checks read as ranges).
 * ------------------------------------------------------------------------- */

(function () {
  'use strict';

  var M = window.MBA_MODEL;

  /* id -> option and id -> group, across every step */
  var OPTION = {};
  var GROUP = {};
  M.steps.forEach(function (step) {
    step.groups.forEach(function (group) {
      GROUP[group.id] = group;
      (group.options || []).forEach(function (opt) { OPTION[opt.id] = opt; });
    });
  });

  function round4(n) { return Math.round(n * 10000) / 10000; }

  /* Selected option id for a radio group, or null. */
  function chosen(a, groupId) {
    var v = a[groupId];
    return (typeof v === 'string' && OPTION[v]) ? v : null;
  }

  function ticked(a, optId) { return a[optId] === true; }

  /* Does the answer to a radio group carry this tag? */
  function hasTag(a, req) {
    var id = chosen(a, req.group);
    return !!id && OPTION[id].tag === req.tag;
  }

  function signed(d) { return d > 0 ? '+' + d : '−' + (-d); }

  function gmatValue(a) {
    var id = chosen(a, 'gmat');
    return id ? OPTION[id].gmat : null;
  }

  function testFires(a, name, mode) {
    var g = gmatValue(a);
    if (g === null) return false;
    var t = M.gmatTests[name];
    if (mode === 'corrected') {
      if (t.corrected.gte !== undefined) return g >= t.corrected.gte;
      if (t.corrected.lt !== undefined) return g < t.corrected.lt;
      return false;
    }
    return t.published.indexOf(g) !== -1;
  }

  /* GPA and test score share one table: a row per band of scores, a column per
   * GPA band. */
  function jointPoints(a) {
    var g = gmatValue(a);
    var gpaId = chosen(a, 'gpa');
    if (g === null || !gpaId) return 0;
    var col = -1;
    M.gpaBands.forEach(function (b, i) { if (b.id === gpaId) col = i; });
    if (col < 0) return 0;
    var row = null;
    M.gpaGmatRows.forEach(function (r) { if (r.gmats.indexOf(g) !== -1) row = r; });
    return row ? row.pts[col] : 0;
  }

  /* Points for one line of the base score. */
  function lineValue(a, line) {
    if (line.ifTicked && !ticked(a, line.ifTicked)) return 0;

    var n;
    if (line.joint) {
      n = jointPoints(a);
    } else if (line.number) {
      n = parseFloat(a[line.number]);
      if (isNaN(n)) n = 0;
    } else if (line.ticks) {
      n = 0;
      GROUP[line.ticks].options.forEach(function (o) { if (ticked(a, o.id)) n += o.pts; });
    } else {
      var id = chosen(a, line.group);
      n = id ? (OPTION[id][line.field || 'pts'] || 0) : 0;
    }

    if (line.adjustedBy) {
      GROUP[line.adjustedBy].options.forEach(function (o) {
        if (!ticked(a, o.id)) return;
        if (o.requires && !hasTag(a, o.requires)) return;
        if (o.add !== undefined) n += o.add;
        if (o.divide !== undefined) n = n / o.divide;
        if (o.multiply !== undefined) n = n * o.multiply;
      });
    }
    return n;
  }

  /* What one school adjustment is worth for these answers. */
  function adjustmentValue(a, adj, fires) {
    if (adj.test && !fires[adj.test]) return 0;
    if (adj.ticked && !ticked(a, adj.ticked)) return 0;
    if (adj.unlessTicked && ticked(a, adj.unlessTicked)) return 0;
    if (adj.answer) {
      var id = chosen(a, adj.answer);
      if (!id) return 0;
      return adj.table ? (adj.table[id] || 0) : (OPTION[id].pts || 0);
    }
    return adj.delta || 0;
  }

  function score(a, mode) {
    a = a || {};
    mode = mode === 'corrected' ? 'corrected' : 'published';

    var points = 0;
    var breakdown = [];
    M.total.forEach(function (line) {
      var n = lineValue(a, line);
      if (!n) return;
      points += n;
      breakdown.push({ label: line.label, pts: n });
    });

    var fires = {};
    Object.keys(M.gmatTests).forEach(function (name) {
      fires[name] = testFires(a, name, mode);
    });

    var schools = {};
    var notes = {};
    M.adjustedSchools.forEach(function (school) {
      var p = points, n = [];
      school.adjust.forEach(function (adj) {
        var d = adjustmentValue(a, adj, fires);
        if (!d) return;
        p += d;
        n.push(adj.label + ' ' + signed(d));
      });
      schools[school.id] = round4(p);
      notes[school.id] = n;
    });

    return { base: round4(points), schools: schools, notes: notes, breakdown: breakdown, mode: mode };
  }

  /* Verdict for a general-table school, from the gap to its point requirement */
  function verdictForGap(gap) {
    for (var i = 0; i < M.gapLegend.length; i++) {
      if (gap <= M.gapLegend[i].max) return M.gapLegend[i];
    }
    return M.gapLegend[M.gapLegend.length - 1];
  }

  /* Verdict for an individually modelled school, from its own thresholds */
  function verdictForSchool(schoolScore, school) {
    if (schoolScore >= school.strong) {
      return { label: 'Strong', tone: 'high' };
    }
    if (schoolScore >= school.competitive) {
      return { label: 'Competitive', tone: 'good' };
    }
    if (schoolScore >= school.stretch) {
      return { label: 'Between Stretch and Competitive', tone: 'mid' };
    }
    return { label: 'Stretch', tone: 'low' };
  }

  /* --------------------------------------------------------------------- */
  /* Counterfactuals                                                        */
  /*                                                                        */
  /* Only things you could still change before you apply. There is no point  */
  /* telling someone to have been younger, gone to a different university or */
  /* had more promotions.                                                    */
  /* --------------------------------------------------------------------- */

  var ACTIONABLE = ['essays', 'recs', 'resume', 'round', 'community'];

  function improvements(a, mode) {
    var base = score(a, mode).base;
    var out = [];

    ACTIONABLE.forEach(function (gid) {
      var g = GROUP[gid];
      if (!g) return;
      var best = null;
      g.options.forEach(function (o) {
        if (a[gid] === o.id) return;
        var trial = Object.assign({}, a);
        trial[gid] = o.id;
        var gain = score(trial, mode).base - base;
        if (gain > 0.05 && (!best || gain > best.gain)) {
          best = { groupId: gid, groupLabel: g.label, optionLabel: o.label,
                   gain: Math.round(gain * 10) / 10 };
        }
      });
      if (best) out.push(best);
    });

    /* Retaking the test: advise the next band up, not a perfect score. */
    var cur = chosen(a, 'gmat');
    if (cur) {
      var curScore = OPTION[cur].gmat;
      var rowIdx = -1;
      M.gpaGmatRows.forEach(function (r, i) { if (r.gmats.indexOf(curScore) !== -1) rowIdx = i; });
      if (rowIdx >= 0 && rowIdx < M.gpaGmatRows.length - 1) {
        var target = M.gpaGmatRows[rowIdx + 1].gmats[0];
        var targetId = null;
        M.conversion.forEach(function (c) { if (c.gmat === target) targetId = c.id; });
        if (targetId) {
          var trial = Object.assign({}, a);
          trial.gmat = targetId;
          var gain = Math.round((score(trial, mode).base - base) * 10) / 10;
          if (gain > 0.05) {
            out.push({
              groupId: 'gmat', groupLabel: 'Test score',
              optionLabel: 'retake and reach ' + target,
              gain: gain
            });
          }
        }
      }
    }

    return out.sort(function (x, y) { return y.gain - x.gain; });
  }

  /* Greedy cheapest route to close a gap. */
  function pathTo(gap, list) {
    if (gap <= 0) return { reached: true, steps: [] };
    var acc = 0, steps = [];
    for (var i = 0; i < list.length && acc < gap; i++) {
      steps.push(list[i]);
      acc += list[i].gain;
    }
    return { reached: acc >= gap, steps: steps, total: Math.round(acc * 10) / 10 };
  }

  /* How complete is the form? Used for the progress indicator. */
  function completeness(a) {
    var total = 0, done = 0;
    M.steps.forEach(function (step) {
      step.groups.forEach(function (g) {
        if (g.optional || g.type === 'checkbox') return;
        total++;
        if (g.type === 'number') { if (a[g.id] !== undefined && a[g.id] !== '') done++; }
        else if (chosen(a, g.id)) done++;
      });
    });
    return total ? Math.round(done / total * 100) : 0;
  }

  window.MBA_SCORE = {
    score: score,
    verdictForGap: verdictForGap,
    verdictForSchool: verdictForSchool,
    completeness: completeness,
    improvements: improvements,
    pathTo: pathTo,
    optionIndex: OPTION
  };
}());
