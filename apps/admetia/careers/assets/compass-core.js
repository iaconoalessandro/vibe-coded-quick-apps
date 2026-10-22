/* ---------------------------------------------------------------------------
 * Career Compass: the scoring. No page, no DOM: the same file runs in the
 * browser (careers/compass.html) and in the tests (tests/careers-test.js).
 *
 * A role's fit is out of 100, from six parts. Each part says how many points
 * it gave and why, so the results page can show its working:
 *
 *   interest    35   the activities you picked against what the role mostly is
 *   style       25   people and technical depth (distance from the role's
 *                    1-5 scores), hours and pressure (penalised only when the
 *                    role asks more than you said you would accept)
 *   background  15   the research's fit rating for what you studied
 *   motives     10   the two things you said matter most
 *   realism     10   entry difficulty against how competitive a door you
 *                    are ready to try
 *   employer     5   the kinds of employer you would enjoy
 *
 * Then adjustments, each shown on the page: a sector you chose (+4), local
 * language you lack where you want to work, visa conditions, AI exposure if
 * it worries you, and the roles you marked "interested" or "not for me".
 * Nothing is ever hidden: a role that clashes with an answer drops down the
 * list with the reason, and "What would change your list" shows how far.
 * ------------------------------------------------------------------------- */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.CompassCore = factory();
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var W = { interest: 35, style: 25, background: 15, motives: 10, realism: 10, employer: 5 };
  var EN = ['uk', 'us', 'gulfasia'];          /* English is enough to start */
  var LANG_OF = { dach: ['de'], fr: ['fr'], it: ['it'], iberia: ['es', 'pt'], benelux: ['nl', 'fr'], nordics: ['nordic'] };
  var SOFT = { benelux: 1, nordics: 1 };      /* English-heavy hubs (Amsterdam, Luxembourg, Stockholm) */
  var EU_REGIONS = ['dach', 'fr', 'it', 'iberia', 'benelux', 'nordics'];
  var LABELS = [[75, 'strong'], [60, 'good'], [45, 'look'], [0, 'weak']];

  function mid(r) { return (r[0] + r[1]) / 2; }
  function clamp(x, lo, hi) { return Math.max(lo, Math.min(hi, x)); }
  function has(arr, x) { return !!arr && arr.indexOf(x) > -1; }
  function round1(x) { return Math.round(x * 10) / 10; }

  function label(score) {
    for (var i = 0; i < LABELS.length; i++) if (score >= LABELS[i][0]) return LABELS[i][1];
    return 'weak';
  }

  /* -------------------------------------------------------------- parts */

  function interest(role, ans, why) {
    var picks = ans.act || [];
    var hits = 0, matched = [];
    picks.forEach(function (a) {
      var at = role.a.indexOf(a);
      if (at > -1) { hits += at === 0 ? 1 : 0.75; matched.push(a); }
    });
    /* The role's core activity among your picks counts extra, so a role
     * that is mostly one thing you love is not outranked by a role that is
     * partly two. */
    if (has(picks, role.a[0])) hits += 0.5;
    var v = picks.length ? Math.min(1, hits / Math.min(2, picks.length)) : 0.5;
    if (ans.avoid) {
      var av = role.a.indexOf(ans.avoid);
      if (av > -1) { v -= av === 0 ? 0.6 : 0.35; why.push({ k: 'avoid', v: ans.avoid, core: av === 0 }); }
    }
    v = clamp(v, -0.5, 1);
    if (matched.length) why.push({ k: 'act', v: matched });
    else if (picks.length) why.push({ k: 'actNone' });
    return W.interest * v;
  }

  /* Distance outside the role's range, in scale points. */
  function outside(x, r) { return x < r[0] ? r[0] - x : x > r[1] ? x - r[1] : 0; }

  function style(role, ans, why) {
    var pts = 0;
    /* People (8): either way is a mismatch. */
    if (ans.people) {
      var dp = outside(ans.people, role.s.p);
      pts += 8 * Math.max(0, 1 - dp / 2.5);
      if (dp >= 1.5) why.push({ k: 'people', role: role.s.p, you: ans.people });
    } else pts += 4;
    /* Technical depth (8): a role more technical than you want costs full;
     * less technical costs half. */
    if (ans.quant) {
      var dq = outside(ans.quant, role.s.q);
      if (ans.quant < role.s.q[0]) dq *= 1; else dq *= 0.5;
      pts += 8 * Math.max(0, 1 - dq / 2.5);
      if (dq >= 1.5) why.push({ k: 'quant', role: role.s.q, you: ans.quant });
    } else pts += 4;
    /* Hours (5): only when the role's typical week is above what you accept. */
    if (ans.hours) {
      var over = role.s.h[0] - ans.hours;
      var hv = over <= 0 ? 1 : Math.max(-1, 1 - over / 10);
      pts += 5 * hv;
      if (over > 0) why.push({ k: 'hours', role: role.hours, you: ans.hours, pts: round1(5 * hv - 5) });
    } else pts += 2.5;
    /* Pressure (4). */
    if (ans.stress) {
      var os = role.s.st[0] - ans.stress;
      var sv = os <= 0 ? 1 : Math.max(-1, 1 - os * 0.6);
      pts += 4 * sv;
      if (os > 0) why.push({ k: 'stress', role: role.s.st, you: ans.stress });
    } else pts += 2;
    return pts;
  }

  function background(role, ans, why) {
    var bg = (ans.bg || []).filter(function (b) { return role.m[b]; });
    if (!bg.length) return W.background * 0.5;
    var best = 'X';
    bg.forEach(function (b) { if (role.m[b] === 'S' || (role.m[b] === 'P' && best === 'X')) best = role.m[b]; });
    why.push({ k: 'bg', v: best, bg: bg.filter(function (b) { return role.m[b] === best; })[0] });
    return W.background * (best === 'S' ? 1 : best === 'P' ? 0.5 : 0);
  }

  function balance(role) {
    var h = clamp((55 - role.s.h[0]) / 15, 0, 1);
    var s = role.s.st[0] <= 2 ? 1 : role.s.st[0] === 3 ? 0.6 : 0;
    return 0.6 * h + 0.4 * s;
  }
  function motive(role, k) {
    switch (k) {
      case 'pay': return (role.pay3 - 1) / 2;
      case 'upside': return (role.up - 1) / 2;
      case 'balance': return balance(role);
      case 'exits': return (role.ex - 1) / 2;
      case 'stability': return (role.stab - 1) / 2;
      case 'mission': return role.mi;
      case 'creativity': return role.cr;
    }
    return 0.5;
  }
  function motives(role, ans, why) {
    var p = ans.prio || [];
    if (!p.length) return W.motives * 0.5;
    var v = 0;
    p.forEach(function (k) {
      var m = motive(role, k);
      v += m;
      if (m >= 0.75) why.push({ k: 'prio', v: k, good: true });
      else if (m <= 0.25) why.push({ k: 'prio', v: k, good: false });
    });
    return W.motives * v / p.length;
  }

  function realism(role, ans, why) {
    if (!ans.diff) return W.realism * 0.5;
    var over = mid(role.s.d) - ans.diff;
    if (over > 0.5) why.push({ k: 'diff', role: role.s.d, you: ans.diff });
    return W.realism * (over <= 0 ? 1 : Math.max(0, 1 - over * 0.45));
  }

  function employer(role, ans, why) {
    var o = (ans.org || []).filter(function (x) { return x !== 'any'; });
    if (!o.length) return W.employer * 0.5;
    var hit = o.filter(function (x) { return has(role.o, x); });
    if (hit.length) why.push({ k: 'org', v: hit });
    return W.employer * (hit.length ? 1 : 0);
  }

  /* -------------------------------------------------------- constraints */

  /* Places the student wants that need a language they do not have. */
  function langGaps(ans) {
    var langs = ans.langs || [];
    return (ans.where || []).filter(function (w) {
      var need = LANG_OF[w];
      return need && !need.some(function (l) { return has(langs, l); });
    });
  }
  /* Places where the student would need a visa or sponsor. */
  function visaNeeds(ans) {
    var c = ans.cit;
    if (!c) return [];
    return (ans.where || []).filter(function (w) {
      if (w === 'open') return false;
      if (c === 'eu') return !has(EU_REGIONS, w);
      if (c === 'uk') return w !== 'uk';
      if (c === 'us') return w !== 'us';
      return true;
    });
  }

  function adjust(role, ans, why, ctx) {
    var pts = 0;
    var where = (ans.where || []).filter(function (w) { return w !== 'open'; });
    /* Language: the smallest penalty across the places chosen, because the
     * student can go where it works. */
    if (where.length && role.lang > 0) {
      var worst = Infinity, binding = [];
      where.forEach(function (w) {
        var p = 0;
        if (has(ctx.langGaps, w)) {
          p = role.lang === 2 ? (SOFT[w] ? 4 : 8) : (SOFT[w] ? 0 : 3);
          if (p) binding.push(w);
        }
        worst = Math.min(worst, p);
      });
      if (worst > 0) { pts -= worst; why.push({ k: 'lang', v: binding, pts: -worst }); }
      else if (binding.length) why.push({ k: 'langSome', v: binding });
    }
    /* Visas: employers that rarely sponsor, when every place chosen needs one. */
    if (where.length && ctx.visa.length === where.length) {
      if (role.spons === 'rare') { pts -= 5; why.push({ k: 'spons', pts: -5 }); }
    }
    /* Citizenship conditions (public bodies, clearance). */
    if (role.cit) {
      if (ans.cit && ans.cit !== 'eu') { pts -= 6; why.push({ k: 'cit', strong: true, pts: -6 }); }
      else why.push({ k: 'cit', strong: false });
    }
    /* Sector lens. */
    if ((ans.sec || []).some(function (s) { return has(role.sec, s); })) {
      pts += 4; why.push({ k: 'sec', v: (ans.sec || []).filter(function (s) { return has(role.sec, s); }), pts: 4 });
    }
    /* AI exposure of junior work. */
    if (ans.ai === 'high' || ans.ai === 'some') {
      var ap = (role.ai - 1) * (ans.ai === 'high' ? 3 : 1.5);
      if (ap) { pts -= ap; why.push({ k: 'ai', v: role.ai, pts: -ap }); }
    }
    /* Further study. */
    var study = ans.study || [];
    if (role.qual && has(study, 'qual')) { pts += 2; why.push({ k: 'qual', pts: 2 }); }
    if (role.gate === 'phd') {
      if (has(study, 'phd')) why.push({ k: 'phdYes' });
      else { pts -= 4; why.push({ k: 'phdNo', pts: -4 }); }
    }
    if (role.ms === 'corp' && has(study, 'none')) why.push({ k: 'msRequired' });
    return pts;
  }

  /* ------------------------------------------------------------- refine */

  function jaccard(a, b) {
    var inter = a.filter(function (x) { return has(b, x); }).length;
    var uni = a.length + b.length - inter;
    return uni ? inter / uni : 0;
  }
  /* How alike two roles are: what the work is (60%) and how it feels
   * (people, quant, stress, entry difficulty; 40%). */
  function similarity(r1, r2) {
    var d = 0;
    ['p', 'q', 'st', 'd'].forEach(function (k) { var x = mid(r1.s[k]) - mid(r2.s[k]); d += x * x; });
    return 0.6 * jaccard(r1.a, r2.a) + 0.4 * (1 - Math.sqrt(d) / 8);
  }

  /* -------------------------------------------------------------- score */

  /* "Later" means rarely a first job: a PhD first, or an earlier job first
   * (which a student who has already worked 2+ years may have). */
  function band(role, ans) {
    if (role.gate === 'phd') return 'later';
    if (role.gate === 'exp' && ans.stage !== 'work') return 'later';
    return 'now';
  }

  function scoreRole(role, ans, ctx) {
    var why = [];
    var parts = {
      interest: interest(role, ans, why),
      style: style(role, ans, why),
      background: background(role, ans, why),
      motives: motives(role, ans, why),
      realism: realism(role, ans, why),
      employer: employer(role, ans, why)
    };
    var base = 0;
    for (var k in parts) base += parts[k];
    var adj = adjust(role, ans, why, ctx);
    var refine = 0;
    if (ctx.liked.length || ctx.disliked.length) {
      var best = 0, worst = 0;
      ctx.liked.forEach(function (r) { if (r.id !== role.id) best = Math.max(best, similarity(role, r)); });
      ctx.disliked.forEach(function (r) { if (r.id !== role.id) worst = Math.max(worst, similarity(role, r)); });
      refine = 12 * best - 12 * worst;
      if (refine >= 3) why.push({ k: 'liked', pts: round1(refine) });
      if (refine <= -3) why.push({ k: 'disliked', pts: round1(refine) });
    }
    var score = clamp(base + adj + refine, 0, 100);
    for (var p in parts) parts[p] = round1(parts[p]);
    return { id: role.id, score: Math.round(score), raw: score, parts: parts, adj: round1(adj), refine: round1(refine), why: why, band: band(role, ans), label: label(score) };
  }

  function context(data, ans) {
    var byId = {};
    data.roles.forEach(function (r) { byId[r.id] = r; });
    return {
      byId: byId,
      langGaps: langGaps(ans),
      visa: visaNeeds(ans),
      liked: (ans.liked || []).map(function (id) { return byId[id]; }).filter(Boolean),
      disliked: (ans.disliked || []).map(function (id) { return byId[id]; }).filter(Boolean)
    };
  }

  /* Every role, best first. Ties go to the easier door, then the shorter
   * week, then the research's own order, so the order never depends on the
   * browser. */
  function rank(data, ans) {
    var ctx = context(data, ans);
    var order = {};
    data.roles.forEach(function (r, i) { order[r.id] = i; });
    var out = data.roles.map(function (r) { return scoreRole(r, ans, ctx); });
    out.sort(function (x, y) {
      if (y.raw !== x.raw) return y.raw - x.raw;
      var rx = ctx.byId[x.id], ry = ctx.byId[y.id];
      if (mid(rx.s.d) !== mid(ry.s.d)) return mid(rx.s.d) - mid(ry.s.d);
      if (rx.s.h[0] !== ry.s.h[0]) return rx.s.h[0] - ry.s.h[0];
      return order[x.id] - order[y.id];
    });
    return out;
  }

  /* ------------------------------------------------------------ results */

  var TOP = 8;

  function results(data, ans) {
    var ctx = context(data, ans);
    var all = rank(data, ans);
    var dis = ans.disliked || [];
    var shown = all.filter(function (x) { return !has(dis, x.id); });
    var now = shown.filter(function (x) { return x.band === 'now'; }).slice(0, TOP);
    var later = shown.filter(function (x) { return x.band === 'later' && x.score >= 50; }).slice(0, 3);

    /* Fields: the mean of each field's three best roles. */
    var byField = {};
    shown.forEach(function (x) {
      var f = ctx.byId[x.id].f;
      (byField[f] = byField[f] || []).push(x);
    });
    var fields = Object.keys(byField).map(function (f) {
      var top = byField[f].slice(0, 3);
      var s = top.reduce(function (a, x) { return a + x.raw; }, 0) / top.length;
      return { slug: f, score: Math.round(s), roles: top.map(function (x) { return x.id; }) };
    }).sort(function (a, b) { return b.score - a.score || (a.slug < b.slug ? -1 : 1); }).slice(0, 3);

    /* A door still open, for each top role that is hard to enter
     * (decision-framework.md R1.1): first a role the research names as a
     * route into it (its exits lead there) that is easier to get into; if
     * there is none, the best-scoring easier role with the same core
     * activity. */
    var listed = {};
    now.forEach(function (x) { listed[x.id] = 1; });
    var scoreOf = {};
    shown.forEach(function (y) { scoreOf[y.id] = y; });
    var alternatives = [];
    now.concat(later).slice(0, 5).forEach(function (x) {
      if (alternatives.length >= 3) return;
      var r = ctx.byId[x.id];
      if (r.s.d[0] < 4) return;
      var best = null, kind = 'route';
      (r.rf || []).forEach(function (id) {
        var y = scoreOf[id], ry = ctx.byId[id];
        if (!y || ry.s.d[1] > 3 || ry.gate) return;
        if (!best || y.raw > best.raw) best = y;
      });
      /* Same field first, then any field with the same core activity. */
      [true, false].forEach(function (sameField) {
        if (best) return;
        kind = 'close';
        shown.forEach(function (y) {
          var ry = ctx.byId[y.id];
          if (listed[y.id] || y.band !== 'now' || ry.s.d[1] > 3 || y.score < 40) return;
          if (sameField ? !(ry.f === r.f && has(ry.a, r.a[0])) : ry.a[0] !== r.a[0]) return;
          if (!best || y.raw > best.raw) best = y;
        });
      });
      if (best) { alternatives.push({ from: x.id, to: best.id, score: best.score, kind: kind, listed: !!listed[best.id] }); listed[best.id] = 1; }
    });

    return { all: all, now: now, later: later, fields: fields, alternatives: alternatives,
      whatIf: whatIf(data, ans, now), langGaps: ctx.langGaps, visa: ctx.visa };
  }

  /* What would change your list: for each answer that holds roles back,
   * the best role it holds back and where that role would rank without it. */
  function whatIf(data, ans, now) {
    var inTop = {};
    now.forEach(function (x) { inTop[x.id] = 1; });
    var base = rank(data, ans);
    var pos = {};
    base.filter(function (x) { return x.band === 'now'; }).forEach(function (x, i) { pos[x.id] = i + 1; });
    var tries = [];
    if (ans.hours && ans.hours < 75) tries.push({ k: 'hours', set: { hours: 75 } });
    if (ans.stress && ans.stress < 5) tries.push({ k: 'stress', set: { stress: 5 } });
    if (ans.diff && ans.diff < 5) tries.push({ k: 'diff', set: { diff: 5 } });
    if (ans.avoid) tries.push({ k: 'avoid', set: { avoid: null } });
    if (langGaps(ans).length) tries.push({ k: 'lang', set: { langs: (ans.langs || []).concat(['de', 'fr', 'it', 'es', 'nl', 'nordic']) } });
    var out = [];
    tries.forEach(function (t) {
      var a2 = {};
      for (var k in ans) a2[k] = ans[k];
      for (var s in t.set) a2[s] = t.set[s];
      var r2 = rank(data, a2).filter(function (x) { return x.band === 'now' && !has(ans.disliked, x.id); });
      for (var i = 0; i < TOP && i < r2.length; i++) {
        if (!inTop[r2[i].id]) { out.push({ k: t.k, id: r2[i].id, rank: i + 1, was: pos[r2[i].id] || null }); break; }
      }
    });
    return out;
  }

  return { W: W, rank: rank, results: results, scoreRole: scoreRole, similarity: similarity, label: label,
    langGaps: langGaps, visaNeeds: visaNeeds, motive: motive, TOP: TOP };
}));
