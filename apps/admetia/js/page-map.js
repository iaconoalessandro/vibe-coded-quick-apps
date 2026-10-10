/* ---------------------------------------------------------------------------
 * The Atlas (map.html): a Europe-centred world map of the 46 countries the
 * Atlas covers (Mercator, zoomable), a quick overview of each, a country page
 * that says how to get there on your passport, and a zoomable map of each
 * country's hubs and what each one hires for.
 *
 *   map.html                the world view
 *   map.html#countries      the world view, at the list of countries
 *   map.html#de             Germany's guide: the overview
 *   map.html#de/hiring      one view of it (VIEWS below): cities, hiring,
 *                           visas, work, life, arrival, sources
 *   map.html#de/hiring/apply   that view, at one of its parts (opened if it
 *                              is folded); #de/hiring/intern filters the
 *                              routes to one path
 *   map.html#de/all         the whole guide on one page, as it used to be
 *   map.html#de/munich      the cities view with Munich's detail open (the
 *                           address a picked hub has always had)
 *
 * A country's guide is long (Germany runs to some 9,000 words), so it is
 * split by what a reader came to do. Nothing is left out of the split: the
 * views together print every section "all" prints, and tests/ux-test.js
 * checks that each section builder belongs to a view.
 *
 * Data: data/atlas/index.js (the 46 countries and the vocabulary),
 * data/atlas/geo.js (shapes), and one record per country, data/atlas/<id>.js,
 * loaded the first time it is needed. Records are written in English; every
 * sentence goes through I18N.t, and each record carries its own Italian.
 *
 * Interaction is by click, tap and keyboard; hover only previews. The world
 * map is one tab stop: arrow keys move between countries in the direction
 * pressed, Enter or Space opens one. Every country is also in the list under
 * the map. Grey countries are not in either: they have no name, no role and
 * no tab stop.
 *
 * Privacy: nothing chosen here is sent anywhere. The only thing stored is the
 * passport, in this browser (js/storage.js), and "Clear everything" removes
 * it. This file never calls js/stats.js.
 * ------------------------------------------------------------------------- */

(function () {
  'use strict';

  var A = window.ATLAS, G = window.ATLAS_GEO;
  if (!A || !G) return;
  /* Five indicators per country from one source (data/atlas/stats.js). */
  var S = window.ATLAS_STATS || null;
  var T = window.I18N ? I18N.t : function (s, v) { return s; };
  var NS = 'http://www.w3.org/2000/svg';
  var STORE = 'atlas';
  var LON0 = 11;          /* the world map's central meridian: Europe in the middle */
  var MIN_HIT = 44;       /* px: every marker's hit area, at least */
  var SMALL = 26;         /* px: a country drawn smaller than this also gets a marker */

  /* ------------------------------------------------------------------ */
  /* Small helpers                                                       */
  /* ------------------------------------------------------------------ */

  /* Text is translated; names (countries aside, which index.js translates)
   * are passed through raw(). */
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined && text !== null) n.textContent = T(text);
    return n;
  }
  function raw(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined && text !== null) n.textContent = text;
    return n;
  }
  function svg(tag, attrs) {
    var n = document.createElementNS(NS, tag);
    if (attrs) for (var k in attrs) n.setAttribute(k, attrs[k]);
    return n;
  }
  function btn(cls, text) {
    var b = el('button', cls, text);
    b.type = 'button';
    return b;
  }
  function name(id) { return T(A.byId[id].name); }

  function date(iso) {
    var p = String(iso).split('-');
    if (p.length !== 3) return iso;
    return (+p[2]) + ' ' + I18N.month(+p[1] - 1) + ' ' + p[0];
  }

  /* Numbers in the reader's language: 1,234 or 1.234; 1.2m or 1,2 Mln. */
  function locale() { return (window.I18N && I18N.locale) || 'en-GB'; }
  function num(v, digits) {
    return new Intl.NumberFormat(locale(), { maximumFractionDigits: digits == null ? 0 : digits }).format(v);
  }
  function compact(v) {
    return new Intl.NumberFormat(locale(), { notation: 'compact', maximumFractionDigits: v >= 1e9 ? 1 : (v >= 1e6 ? 1 : 0) }).format(v);
  }
  function money(v, cur, isCompact) {
    try {
      return new Intl.NumberFormat(locale(), { style: 'currency', currency: cur, notation: isCompact ? 'compact' : 'standard',
        maximumFractionDigits: isCompact ? 1 : 0 }).format(v);
    } catch (e) { return num(v) + ' ' + cur; }
  }
  /* A hub metric as text: people, billions of a currency, or a monthly sum. */
  function metricText(k, m) {
    if (k === 'pop') return compact(m.v);
    if (k === 'gdp') return money(m.v * 1e9, m.cur, true);
    return money(m.v, m.cur, false);
  }
  function regionName(countryId) {
    var c = A.byId[countryId], v = A.views.filter(function (x) { return x.id === c.region; })[0];
    return v ? T(v.label) : T('Regional');
  }

  /* Role families in two groups, for the colour of a hub's marker: business
   * and finance, or computing and data. */
  var TECH = { analytics: 1, it: 1, software: 1, datasci: 1, ai: 1, cs: 1, bigdata: 1 };
  var RANK = { dominant: 4, strong: 3, present: 2, marginal: 1 };
  function hubGroup(h) {
    var biz = 0, tech = 0;
    Object.keys(h.demand || {}).forEach(function (k) {
      var d = h.demand[k];
      if (!Array.isArray(d)) return;
      var r = RANK[d[0]] || 0;
      if (TECH[k]) tech = Math.max(tech, r); else biz = Math.max(biz, r);
    });
    if (!biz && !tech) return 'none';
    if (biz === tech) return 'both';
    return biz > tech ? 'biz' : 'tech';
  }

  /* ------------------------------------------------------------------ */
  /* State: the passport is the only thing remembered                    */
  /* ------------------------------------------------------------------ */

  var saved = window.Store ? Store.load(STORE) : {};
  var state = {
    passport: A.passportById[saved.passport] ? saved.passport : null,
    view: window.innerWidth < 720 ? 'europe' : 'world',
    colour: S ? 'gdppc' : 'none',
    hover: null,
    focus: null,
    open: null,
    sel: { view: 'overview' },
    path: '',          /* Getting hired: the routes shown (all, or one path) */
    expand: false      /* every folded part of a view open */
  };
  try { state.expand = sessionStorage.getItem('admissions-calc:atlas-expand') === '1'; } catch (e) { /* storage blocked */ }
  /* The guide's views, in reading order. `nav` names it in the guide's
   * navigation; `about` says what is in it, on the overview. */
  var VIEWS = [
    { id: 'overview', nav: 'Overview' },
    { id: 'cities', nav: 'Cities and hubs', about: 'Where the work is: what each hub hires for, its named employers, and the hubs compared on demand, standing, pay and rent.' },
    { id: 'hiring', nav: 'Getting hired', about: 'The routes most people take into a job here, the hiring calendar, whether a master’s is expected, language at work, the customs of applying, sponsorship in practice and graduate outcomes.' },
    { id: 'visas', nav: 'Visas and permits', about: 'The published routes for your passport group, situation by situation: studying, an internship, the job search after a degree, a first skilled job and staying for good.' },
    { id: 'work', nav: 'Working there' },
    { id: 'life', nav: 'Life there', about: 'Climate, daylight, air quality, prices, safety, language in daily life, working hours, office culture and health care.' },
    { id: 'arrival', nav: 'First weeks', about: 'What to do after you arrive, in the order most people do it: registering, your residence document, tax number, health cover and a bank account.' },
    { id: 'sources', nav: 'Sources and research', about: 'Every source this guide cites, the research briefs behind it, and what has not been verified yet.' },
    { id: 'all', nav: 'Whole guide on one page', about: 'Every section in one long page, for reading straight through, searching with your browser’s Find, or printing.' }
  ];
  var viewById = {};
  VIEWS.forEach(function (v) { viewById[v.id] = v; });

  function passport() { return state.passport || 'eu'; }
  /* "Showing: UK passport", but not "Showing: Another passport passport". */
  function showingFor(P) {
    return /passport$/i.test(P.label) ? T('Showing: {p}', { p: T(P.label) }) : T('Showing: {p} passport', { p: T(P.label) });
  }
  function setPassport(id) {
    state.passport = id;
    if (window.Store) Store.save(STORE, { passport: id });
    document.dispatchEvent(new CustomEvent('atlas:passport'));
  }

  /* ------------------------------------------------------------------ */
  /* Country records, loaded on demand                                   */
  /* ------------------------------------------------------------------ */

  var loading = {};
  function load(id) {
    if (A.records[id]) return Promise.resolve(A.records[id]);
    if (loading[id]) return loading[id];
    loading[id] = new Promise(function (ok, fail) {
      var s = document.createElement('script');
      s.src = A.file(id);
      s.onload = function () { A.records[id] ? ok(A.records[id]) : fail(new Error(id)); };
      s.onerror = function () { delete loading[id]; fail(new Error(id)); };
      document.head.appendChild(s);
    });
    return loading[id];
  }

  /* A country's visas and permits (data/atlas/visas/<id>.js), loaded with
   * its page. A missing file is not fatal: the section says so. So is an
   * older cached index without the visa registry. */
  var loadingVisas = {};
  function loadVisas(id) {
    if (!A.visas || !A.visaFile) return Promise.resolve(null);
    if (A.visas[id]) return Promise.resolve(A.visas[id]);
    if (loadingVisas[id]) return loadingVisas[id];
    loadingVisas[id] = new Promise(function (ok) {
      var s = document.createElement('script');
      s.src = A.visaFile(id);
      s.onload = function () { ok(A.visas[id] || null); };
      s.onerror = function () { delete loadingVisas[id]; ok(null); };
      document.head.appendChild(s);
    });
    return loadingVisas[id];
  }

  /* How hiring works there (data/atlas/entry/<id>.js), loaded the same way:
   * a missing file leaves the section out. */
  var loadingEntry = {};
  function loadEntry(id) {
    if (!A.entries || !A.entryFile) return Promise.resolve(null);
    if (A.entries[id]) return Promise.resolve(A.entries[id]);
    if (loadingEntry[id]) return loadingEntry[id];
    loadingEntry[id] = new Promise(function (ok) {
      var s = document.createElement('script');
      s.src = A.entryFile(id);
      s.onload = function () { ok(A.entries[id] || null); };
      s.onerror = function () { delete loadingEntry[id]; ok(null); };
      document.head.appendChild(s);
    });
    return loadingEntry[id];
  }

  /* ------------------------------------------------------------------ */
  /* Geometry                                                            */
  /* ------------------------------------------------------------------ */

  function decode(str) {
    var a = str.split(','), out = [], x = 0, y = 0;
    for (var i = 0; i < a.length; i += 2) {
      x += +a[i]; y += +a[i + 1];
      out.push([x / 100, y / 100]);
    }
    return out;
  }

  /* Mercator, the standard web map: every country keeps its true shape
   * (Iceland, Japan and New Zealand are not stretched or curved), at the
   * cost of sizes growing towards the poles. Latitudes stop at ±85°. */
  function mercator(lon, lat) {
    var p = Math.max(-85, Math.min(85, lat)) * Math.PI / 180;
    return [lon * Math.PI / 180 * 100, -Math.log(Math.tan(Math.PI / 4 + p / 2)) * 100];
  }

  /* Longitude relative to the central meridian, wrapped. A ring that the
   * new edge of the map cuts through is pinned to the side most of it lies
   * on, so no shape streaks across the whole map (Chukotka, the Aleutians). */
  function worldRing(ring) {
    var rel = ring.map(function (p) {
      var l = p[0] - LON0;
      if (l < -180) l += 360; else if (l > 180) l -= 360;
      return [l, p[1]];
    });
    var cut = false;
    for (var i = 1; i < rel.length && !cut; i++) if (Math.abs(rel[i][0] - rel[i - 1][0]) > 180) cut = true;
    if (cut) {
      var east = rel.filter(function (p) { return p[0] > 0; }).length > rel.length / 2;
      rel = rel.map(function (p) { return [east ? (p[0] < 0 ? 180 : p[0]) : (p[0] > 0 ? -180 : p[0]), p[1]]; });
    }
    return rel.map(function (p) { return mercator(p[0], p[1]); });
  }

  function pathOf(rings) {
    return rings.map(function (r) {
      return 'M' + r.map(function (p) { return p[0].toFixed(2) + ' ' + p[1].toFixed(2); }).join('L') + 'Z';
    }).join('');
  }
  function bboxOf(points) {
    var b = [Infinity, Infinity, -Infinity, -Infinity];
    points.forEach(function (p) {
      if (p[0] < b[0]) b[0] = p[0]; if (p[1] < b[1]) b[1] = p[1];
      if (p[0] > b[2]) b[2] = p[0]; if (p[1] > b[3]) b[3] = p[1];
    });
    return b;
  }
  function ringArea(r) {
    var a = 0;
    for (var i = 0, j = r.length - 1; i < r.length; j = i++) a += (r[j][0] + r[i][0]) * (r[j][1] - r[i][1]);
    return Math.abs(a / 2);
  }
  /* The centre a marker or a label sits on: the middle of the largest ring. */
  function anchor(rings) {
    var best = rings[0], area = -1;
    rings.forEach(function (r) { var a = ringArea(r); if (a > area) { area = a; best = r; } });
    var b = bboxOf(best);
    return [(b[0] + b[2]) / 2, (b[1] + b[3]) / 2];
  }

  var shapes = G.shapes.map(function (s) {
    var geo = s.r.map(decode);
    return { id: s.id || null, geo: geo, world: geo.map(worldRing) };
  });
  var shapeById = {};
  shapes.forEach(function (s) {
    if (!s.id) return;
    s.anchor = anchor(s.world);
    s.box = bboxOf([].concat.apply([], s.world));
    shapeById[s.id] = s;
  });

  /* A view's box in projected units, from its [west, south, east, north]. */
  function viewBox(box) {
    var pts = [];
    for (var i = 0; i <= 12; i++) {
      var lon = box[0] + (box[2] - box[0]) * i / 12;
      for (var j = 0; j <= 6; j++) {
        var lat = box[1] + (box[3] - box[1]) * j / 6;
        var l = lon - LON0;
        if (l < -180) l += 360; else if (l > 180) l -= 360;
        pts.push(mercator(l, lat));
      }
    }
    var b = bboxOf(pts);
    var padX = (b[2] - b[0]) * 0.01, padY = (b[3] - b[1]) * 0.02;
    return [b[0] - padX, b[1] - padY, b[2] - b[0] + 2 * padX, b[3] - b[1] + 2 * padY];
  }

  /* ------------------------------------------------------------------ */
  /* Markers: tiny places, and hubs                                      */
  /* ------------------------------------------------------------------ */

  /* From map units to pixels inside an <svg>'s box. The drawing is scaled
   * to fit and centred (preserveAspectRatio's default), so a height limit in
   * the CSS leaves bands at the sides that the markers must allow for. */
  function fitOf(rect, box) {
    var k = Math.min(rect.width / box[2], rect.height / box[3]);
    return {
      k: k,
      x: function (u) { return (rect.width - box[2] * k) / 2 + (u - box[0]) * k; },
      y: function (v) { return (rect.height - box[3] * k) / 2 + (v - box[1]) * k; }
    };
  }

  /* Pushes overlapping markers apart (in px) and returns where each sits;
   * a marker that moved gets a leader line back to its true point. */
  function spread(items, w, h) {
    var gap = MIN_HIT + 2;
    items.forEach(function (m) { m.x = m.x0; m.y = m.y0; });
    for (var it = 0; it < 80; it++) {
      var moved = false;
      for (var i = 0; i < items.length; i++) {
        for (var j = i + 1; j < items.length; j++) {
          var a = items[i], b = items[j];
          var dx = b.x - a.x, dy = b.y - a.y, d = Math.sqrt(dx * dx + dy * dy);
          if (d >= gap) continue;
          if (d < 0.01) { dx = 1; dy = 0; d = 1; }
          var push = (gap - d) / 2;
          a.x -= dx / d * push; a.y -= dy / d * push;
          b.x += dx / d * push; b.y += dy / d * push;
          moved = true;
        }
      }
      items.forEach(function (m) {
        m.x = Math.max(MIN_HIT / 2, Math.min(w - MIN_HIT / 2, m.x));
        m.y = Math.max(MIN_HIT / 2, Math.min(h - MIN_HIT / 2, m.y));
      });
      if (!moved) break;
    }
    return items;
  }

  /* ------------------------------------------------------------------ */
  /* Zoom and pan                                                        */
  /* ------------------------------------------------------------------ */

  /* Makes a map zoomable. The wheel or a two-finger pinch zooms about the
   * pointer, a drag pans, and the + / − / reset buttons (and the + and −
   * keys on the world map) do the same without a pointer. Zooming changes
   * the viewBox, never a CSS transform, so strokes keep their width and the
   * caller re-places its pixel markers in `change`. The box keeps the
   * aspect of the first one it is given, so the map never changes height.
   *
   *   opts.box     the starting box, [x, y, w, h] in map units
   *   opts.limit   the widest box: zooming out stops at its width, and the
   *                centre of the view stays inside it
   *   opts.minW    the narrowest width (the deepest zoom)
   *   opts.apply   called with each new box, at once
   *   opts.change  called after a change, at most once a frame */
  function zoomable(sv, fig, opts) {
    var box = opts.box.slice(), home = box.slice(), limit = opts.limit.slice();
    var ratio = box[3] / box[2];
    var pts = {}, n = 0, last = null, pinch = null, moved = 0, suppress = false, frame = 0;

    function changed() {
      fig.classList.toggle('zoomed', box[2] < limit[2] * 0.98);
      opts.apply(box.slice());
      if (!frame) frame = requestAnimationFrame(function () { frame = 0; opts.change(); });
    }
    function settle() {
      box[2] = Math.max(opts.minW, Math.min(limit[2], box[2]));
      box[3] = box[2] * ratio;
      var cx = Math.max(limit[0], Math.min(limit[0] + limit[2], box[0] + box[2] / 2));
      var cy = Math.max(limit[1], Math.min(limit[1] + limit[3], box[1] + box[3] / 2));
      box[0] = cx - box[2] / 2; box[1] = cy - box[3] / 2;
    }
    /* A point on the screen, in map units. */
    function at(clientX, clientY) {
      var r = sv.getBoundingClientRect(), f = fitOf(r, box);
      return [box[0] + (clientX - r.left - f.x(box[0])) / f.k, box[1] + (clientY - r.top - f.y(box[1])) / f.k];
    }
    function zoomAt(factor, clientX, clientY) {
      var r = sv.getBoundingClientRect();
      if (clientX == null) { clientX = r.left + r.width / 2; clientY = r.top + r.height / 2; }
      var p = at(clientX, clientY), w = box[2];
      var nw = Math.max(opts.minW, Math.min(limit[2], w / factor));
      box[0] = p[0] - (p[0] - box[0]) * nw / w;
      box[1] = p[1] - (p[1] - box[1]) * nw / w;
      box[2] = nw;
      settle(); changed();
    }
    function panBy(dx, dy) {
      var f = fitOf(sv.getBoundingClientRect(), box);
      box[0] -= dx / f.k; box[1] -= dy / f.k;
      settle(); changed();
    }

    /* On the whole frame, not just the drawing: over a marker, a button or
     * the gap between them the wheel must zoom too, or the page scrolls
     * instead and the map seems to do either at random. Only the open
     * summary keeps its own scroll. */
    fig.addEventListener('wheel', function (e) {
      if (e.target.closest && e.target.closest('.atlas-pop')) return;
      e.preventDefault();
      var d = e.deltaY * (e.deltaMode === 1 ? 33 : e.deltaMode === 2 ? 400 : 1);
      if (e.ctrlKey) d *= 4; /* a trackpad pinch arrives as ctrl + wheel */
      zoomAt(Math.exp(-d * 0.0022), e.clientX, e.clientY);
    }, { passive: false });

    function skip(e) { return e.target.closest && e.target.closest('.atlas-pop, .zoom-ctl'); }
    fig.addEventListener('pointerdown', function (e) {
      if (skip(e) || (e.pointerType === 'mouse' && e.button !== 0)) return;
      pts[e.pointerId] = [e.clientX, e.clientY]; n++;
      if (n === 1) { last = [e.clientX, e.clientY]; moved = 0; }
      if (n === 2) pinch = null;
    });
    fig.addEventListener('pointermove', function (e) {
      if (!pts[e.pointerId]) return;
      pts[e.pointerId] = [e.clientX, e.clientY];
      if (n === 1) {
        var dx = e.clientX - last[0], dy = e.clientY - last[1];
        moved += Math.abs(dx) + Math.abs(dy);
        last = [e.clientX, e.clientY];
        if (moved > 6) {
          if (!fig.hasPointerCapture(e.pointerId)) try { fig.setPointerCapture(e.pointerId); } catch (x) {}
          fig.classList.add('panning');
          panBy(dx, dy);
        }
      } else if (n === 2) {
        var ids = Object.keys(pts), a = pts[ids[0]], b = pts[ids[1]];
        var mid = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2], dist = Math.hypot(a[0] - b[0], a[1] - b[1]);
        if (pinch && dist > 0) {
          panBy(mid[0] - pinch.mid[0], mid[1] - pinch.mid[1]);
          zoomAt(dist / pinch.dist, mid[0], mid[1]);
        }
        pinch = { mid: mid, dist: dist };
        moved = 99;
      }
    });
    function up(e) {
      if (!pts[e.pointerId]) return;
      delete pts[e.pointerId]; n--;
      pinch = null;
      if (n <= 0) {
        n = 0; fig.classList.remove('panning');
        if (moved > 6) suppress = true;
      } else {
        var k = Object.keys(pts)[0]; last = pts[k].slice();
      }
    }
    fig.addEventListener('pointerup', up);
    fig.addEventListener('pointercancel', up);
    /* A drag ends in a click; it must not also open a country or a hub. */
    fig.addEventListener('click', function (e) {
      if (suppress) { suppress = false; e.stopPropagation(); e.preventDefault(); }
    }, true);

    var ctl = el('div', 'zoom-ctl');
    [['+', 'Zoom in', function () { zoomAt(2); }],
     ['\u2212', 'Zoom out', function () { zoomAt(0.5); }],
     ['\u21ba', 'Reset the map', function () { api.set(home); }]].forEach(function (d) {
      var b = raw('button', 'zoom-b', d[0]);
      b.type = 'button';
      b.setAttribute('aria-label', T(d[1]));
      b.title = T(d[1]);
      b.addEventListener('click', function (e) { e.stopPropagation(); d[2](); });
      ctl.appendChild(b);
    });
    fig.appendChild(ctl);

    var api = {
      /* A new starting view (the world, Europe…): reset to it. */
      set: function (b, asHome) {
        if (asHome) { home = b.slice(); ratio = b[3] / b[2]; }
        box = b.slice(); ratio = box[3] / box[2];
        settle(); changed();
      },
      zoomAt: zoomAt,
      box: function () { return box.slice(); }
    };
    changed();
    return api;
  }

  /* ------------------------------------------------------------------ */
  /* The world view                                                      */
  /* ------------------------------------------------------------------ */

  var world = document.getElementById('atlas-world');
  var page = document.getElementById('atlas-country');
  var tools = document.getElementById('atlas-tools');
  var stage = document.getElementById('atlas-stage');
  var list = document.getElementById('atlas-list');

  /* A row of mutually exclusive buttons, used for the passport and the
   * map view. Square, like every control on the site. */
  function segmented(label, options, current, onPick) {
    var wrap = el('div', 'seg-wrap');
    var id = 'seg-' + Math.random().toString(36).slice(2, 8);
    var k = el('span', 'seg-k', label);
    k.id = id;
    wrap.appendChild(k);
    var set = el('div', 'seg');
    set.setAttribute('role', 'radiogroup');
    set.setAttribute('aria-labelledby', id);
    var buttons = options.map(function (o) {
      var b = btn('seg-b', o.label);
      b.setAttribute('role', 'radio');
      b.setAttribute('data-v', o.id);
      b.addEventListener('click', function () { onPick(o.id); sync(o.id); });
      set.appendChild(b);
      return b;
    });
    function sync(v) {
      buttons.forEach(function (b) {
        var on = b.getAttribute('data-v') === v;
        b.setAttribute('aria-checked', on ? 'true' : 'false');
        b.tabIndex = on ? 0 : -1;
      });
      if (!buttons.some(function (b) { return b.tabIndex === 0; })) buttons[0].tabIndex = 0;
    }
    set.addEventListener('keydown', function (e) {
      var dir = e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? -1 : 0;
      if (!dir) return;
      e.preventDefault();
      var i = buttons.indexOf(document.activeElement);
      var next = buttons[(i + dir + buttons.length) % buttons.length];
      next.focus();
      next.click();
    });
    sync(current);
    wrap.appendChild(set);
    wrap.sync = sync;
    return wrap;
  }

  function passportControl() {
    var wrap = segmented('Your passport', A.passports, state.passport, setPassport);
    var note = el('p', 'seg-note');
    function say() {
      wrap.sync(state.passport);
      note.textContent = state.passport ? T('Remembered in this browser only. “Clear everything” removes it.')
        : T('Not chosen yet: routes are shown for an EU passport until you pick one.');
    }
    document.addEventListener('atlas:passport', say);
    say();
    wrap.appendChild(note);
    return wrap;
  }

  /* ------------------------------------------------------------------ */
  /* Country indicators: the world map's colours and the key figures     */
  /* ------------------------------------------------------------------ */

  /* Each indicator, how to print it, and which end is "high". The map
   * colours by five classes of equal count (quintiles of the 46), so every
   * colour holds about nine countries whatever the spread. */
  var INDICATORS = [
    { id: 'gdppc', label: 'GDP per head', long: 'GDP per head, PPP (international dollars)',
      fmt: function (v) { return '$' + compact(v); } },
    { id: 'gdp', label: 'Economy size', long: 'GDP, current prices (US dollars)',
      fmt: function (v) { return '$' + compact(v * 1e9); } },
    { id: 'unemp', label: 'Unemployment', long: 'Unemployment rate (% of the labour force)',
      fmt: function (v) { return num(v, 1) + '%'; } },
    { id: 'growth', label: 'Growth', long: 'Real GDP growth (% a year)',
      fmt: function (v) { return num(v, 1) + '%'; } },
    { id: 'pop', label: 'Population', long: 'Population',
      fmt: function (v) { return compact(v * 1e6); } }
  ];
  var CLASSES = 5;
  function indicator(id) { return INDICATORS.filter(function (x) { return x.id === id; })[0]; }
  function statOf(countryId, k) {
    var v = S && S.values[countryId];
    return v && typeof v[k] === 'number' ? v[k] : null;
  }
  /* Sorted values, the class breaks, and a country's rank (1 = highest). */
  function scaleOf(k) {
    var vals = A.countries.map(function (c) { return statOf(c.id, k); })
      .filter(function (v) { return v !== null; }).sort(function (a, b) { return a - b; });
    var breaks = [];
    for (var i = 1; i < CLASSES; i++) breaks.push(vals[Math.round(vals.length * i / CLASSES)]);
    return {
      vals: vals, breaks: breaks,
      cls: function (v) { var c = 0; while (c < breaks.length && v >= breaks[c]) c++; return c; },
      rank: function (v) { return vals.length - vals.indexOf(v); }
    };
  }

  var svgEl, gLand, gGrid, marks, pop, legend, hatch;

  /* Lines of latitude and longitude every `step` degrees, drawn under the
   * land. `shift` turns a true longitude into the projection's (the world
   * map is centred on 11°E); parallels run from lon0 to lon1 as projected. */
  function graticule(proj, lon0, lon1, lat0, lat1, step, shift) {
    var d = '', seen = {};
    function line(a, b) { d += 'M' + a[0].toFixed(2) + ' ' + a[1].toFixed(2) + 'L' + b[0].toFixed(2) + ' ' + b[1].toFixed(2); }
    for (var lon = -180; lon < 180; lon += step) {
      var l = shift ? shift(lon) : lon;
      if (l < lon0 || l > lon1 || seen[l]) continue;
      seen[l] = 1;
      line(proj(l, Math.max(lat0, -80)), proj(l, Math.min(lat1, 84)));
    }
    for (var lat = Math.ceil(lat0 / step) * step; lat <= lat1; lat += step) {
      if (Math.abs(lat) <= 80) line(proj(lon0, lat), proj(lon1, lat));
    }
    return svg('path', { d: d, 'class': 'grat', 'aria-hidden': 'true' });
  }

  /* Paints every covered country by the chosen indicator, or plain. */
  function paint() {
    var k = state.colour, sc = k !== 'none' && S ? scaleOf(k) : null;
    svgEl.setAttribute('data-colour', k);
    shapes.forEach(function (s) {
      if (!s.node) return;
      var v = sc ? statOf(s.id, k) : null;
      s.node.classList.remove('q0', 'q1', 'q2', 'q3', 'q4', 'qna');
      if (sc) s.node.classList.add(v === null ? 'qna' : 'q' + sc.cls(v));
      var I = sc && indicator(k);
      s.node.setAttribute('aria-label', name(s.id) + (I ? ', ' + T(I.label) + ': ' + (v === null ? T('no IMF figure') : I.fmt(v)) : ''));
    });
    drawLegend(sc);
  }

  function drawLegend(sc) {
    legend.textContent = '';
    var k = state.colour, I = indicator(k);
    if (sc) {
      var scale = el('div', 'lg-scale');
      scale.appendChild(el('p', 'lg-title', I.long));
      var row = el('div', 'lg-steps');
      for (var c = 0; c < CLASSES; c++) {
        var lo = c === 0 ? sc.vals[0] : sc.breaks[c - 1], hi = c === CLASSES - 1 ? sc.vals[sc.vals.length - 1] : sc.breaks[c];
        var st = el('span', 'lg-step');
        st.appendChild(el('i', 'sw q' + c));
        st.appendChild(raw('span', null, I.fmt(lo) + '–' + I.fmt(hi)));
        row.appendChild(st);
      }
      if (sc.vals.length < A.countries.length) {
        var na = el('span', 'lg-step');
        na.appendChild(el('i', 'sw qna'));
        na.appendChild(el('span', null, 'no IMF figure'));
        row.appendChild(na);
      }
      scale.appendChild(row);
      scale.appendChild(raw('p', 'lg-src', T('{source}, {year} figures, partly estimates. Five classes of about nine countries each.', { source: S.source, year: S.year })));
      legend.appendChild(scale);
    }
    var keys = el('div', 'lg-keys');
    var k1 = el('span', 'lg'); k1.appendChild(el('i', 'lg-pick')); k1.appendChild(el('span', null, 'Covered: tap or press Enter for a summary'));
    var k2 = el('span', 'lg'); k2.appendChild(el('i', 'lg-grey')); k2.appendChild(el('span', null, 'Not covered (hatched)'));
    var k3 = el('span', 'lg'); k3.appendChild(el('i', 'lg-mark')); k3.appendChild(el('span', null, 'Small country or city-state'));
    keys.appendChild(k1); keys.appendChild(k2); keys.appendChild(k3);
    legend.appendChild(keys);
  }

  function buildWorld() {
    tools.textContent = '';
    tools.appendChild(passportControl());
    tools.appendChild(segmented('Map', A.views, state.view, function (v) { state.view = v; drawView(); }));
    if (S) {
      var opts = INDICATORS.filter(function (x) { return x.id !== 'pop'; }).concat([{ id: 'none', label: 'Plain' }]);
      tools.appendChild(segmented('Colour by', opts, state.colour, function (v) { state.colour = v; paint(); }));
    }

    stage.textContent = '';
    var fig = el('figure', 'atlas-map');
    svgEl = svg('svg', { 'class': 'atlas-svg', role: 'group', 'aria-label': T('World map of the countries the Atlas covers') });
    var defs = svg('defs');
    hatch = svg('pattern', { id: 'atlas-hatch', patternUnits: 'userSpaceOnUse', patternTransform: 'rotate(45)' });
    hatch.appendChild(svg('rect', { 'class': 'hatch-bg' }));
    hatch.appendChild(svg('line', { x1: '0', y1: '0', x2: '0', 'class': 'hatch-line' }));
    defs.appendChild(hatch);
    svgEl.appendChild(defs);
    gGrid = graticule(mercator, -180, 180, -80, 80, 15, function (lon) {
      var l = lon - LON0;
      return l < -180 ? l + 360 : (l > 180 ? l - 360 : l);
    });
    svgEl.appendChild(gGrid);
    gLand = svg('g');
    svgEl.appendChild(gLand);

    shapes.forEach(function (s) {
      var p = svg('path', { d: pathOf(s.world) });
      if (!s.id) {
        p.setAttribute('class', 'land');
        p.setAttribute('aria-hidden', 'true');
        gLand.appendChild(p);
        return;
      }
      p.setAttribute('class', 'cty');
      p.setAttribute('data-id', s.id);
      p.setAttribute('role', 'button');
      p.setAttribute('aria-label', name(s.id));
      p.setAttribute('tabindex', '-1');
      s.node = p;
      gLand.appendChild(p);
    });

    gLand.addEventListener('click', function (e) {
      var id = e.target.getAttribute && e.target.getAttribute('data-id');
      if (id) openPop(id, e.target);
    });
    gLand.addEventListener('pointerover', function (e) {
      var id = e.target.getAttribute && e.target.getAttribute('data-id');
      setHover(id || null);
    });
    gLand.addEventListener('pointerleave', function () { setHover(null); });
    gLand.addEventListener('focusin', function (e) {
      var id = e.target.getAttribute('data-id');
      if (id) { state.focus = id; setHover(id); }
    });
    gLand.addEventListener('focusout', function () { setHover(null); });
    gLand.addEventListener('keydown', onMapKey);

    fig.appendChild(svgEl);
    marks = el('div', 'atlas-marks');
    fig.appendChild(marks);
    pop = el('div', 'atlas-pop');
    pop.hidden = true;
    fig.appendChild(pop);
    stage.appendChild(fig);

    legend = el('div', 'atlas-legend');
    stage.appendChild(legend);
    paint();

    WORLD = viewBox(A.views[0].box);
    zoomW = zoomable(svgEl, fig, {
      box: WORLD, limit: WORLD, minW: WORLD[2] / 60,
      apply: applyWorld, change: afterZoom
    });
    buildList();
    drawView();
    watchSize(svgEl, placeMarks);
  }

  function debounce(fn, ms) {
    var t;
    return function () { clearTimeout(t); t = setTimeout(fn, ms); };
  }

  /* Markers are placed in pixels, so they are placed again whenever the map
   * changes size — on first layout too, which a hidden tab can delay. */
  function watchSize(node, fn) {
    var later = debounce(fn, 60);
    setTimeout(fn, 0);
    if (window.ResizeObserver) {
      var ro = new ResizeObserver(later);
      ro.observe(node);
      return function () { ro.disconnect(); };
    }
    window.addEventListener('resize', later);
    return function () { window.removeEventListener('resize', later); };
  }

  var vb = [0, 0, 1, 1], zoomW = null, WORLD = null;
  /* Draws the map at a box: the viewBox, and the stroke and hatch sizes,
   * which are in map units and must stay a constant width on screen. */
  function applyWorld(b) {
    vb = b;
    svgEl.setAttribute('viewBox', vb.map(function (n) { return n.toFixed(2); }).join(' '));
    svgEl.style.setProperty('--u', (vb[2] / 1000).toFixed(4));
    var ps = (vb[2] / 180).toFixed(3);
    hatch.setAttribute('width', ps); hatch.setAttribute('height', ps);
    hatch.firstChild.setAttribute('width', ps); hatch.firstChild.setAttribute('height', ps);
    hatch.lastChild.setAttribute('y2', ps);
    hatch.lastChild.style.strokeWidth = (ps * 0.4).toFixed(3);
  }
  function drawView() {
    var v = A.views.filter(function (x) { return x.id === state.view; })[0] || A.views[0];
    svgEl.setAttribute('data-view', v.id);
    closePop(true);
    zoomW.set(viewBox(v.box), true);
    rovingReset();
  }
  /* After a zoom or a pan: markers again, and the open summary follows its country. */
  function afterZoom() {
    placeMarks();
    rovingReset();
    if (pop && !pop.hidden && state.open) position(state.open);
  }

  function visible(s) {
    var a = s.anchor;
    return a[0] >= vb[0] && a[0] <= vb[0] + vb[2] && a[1] >= vb[1] && a[1] <= vb[1] + vb[3];
  }

  /* Tiny places always get a marker; in a regional view, anything else drawn
   * under SMALL px gets one too. */
  function placeMarks() {
    if (!marks) return;
    marks.textContent = '';
    var r = svgEl.getBoundingClientRect();
    if (!r.width) return;
    var f = fitOf(r, vb), k = f.k;
    var items = [];
    A.countries.forEach(function (c) {
      var s = shapeById[c.id];
      if (!s || !visible(s)) return;
      var w = (s.box[2] - s.box[0]) * k, h = (s.box[3] - s.box[1]) * k;
      /* At world scale half of Europe is "small", and thirty markers there
       * would bury the map; the regional views take care of those. */
      if (!c.marker && (vb[2] > WORLD[2] * 0.7 || Math.max(w, h) >= SMALL)) return;
      items.push({ id: c.id, x0: f.x(s.anchor[0]), y0: f.y(s.anchor[1]) });
    });
    var taken = [];
    spread(items, r.width, r.height).forEach(function (m) {
      taken.push([m.x - 12, m.y - 12, m.x + 12, m.y + 12]);
      var moved = Math.abs(m.x - m.x0) > 3 || Math.abs(m.y - m.y0) > 3;
      if (moved) {
        var line = el('i', 'mk-lead');
        var dx = m.x - m.x0, dy = m.y - m.y0;
        line.style.left = m.x0 + 'px';
        line.style.top = m.y0 + 'px';
        line.style.width = Math.sqrt(dx * dx + dy * dy) + 'px';
        line.style.transform = 'rotate(' + Math.atan2(dy, dx) + 'rad)';
        marks.appendChild(line);
      }
      /* Pointer and touch only: the keyboard reaches the same country
       * through the map's own focus and the list below. */
      var mk = el('span', 'mk');
      mk.setAttribute('aria-hidden', 'true');
      mk.setAttribute('data-id', m.id);
      mk.style.left = m.x + 'px';
      mk.style.top = m.y + 'px';
      mk.appendChild(el('i', 'mk-dot'));
      mk.appendChild(raw('span', 'mk-name', name(m.id)));
      if (m.x > r.width - 150) mk.classList.add('flip');
      mk.addEventListener('click', function (e) { e.stopPropagation(); openPop(m.id, mk); });
      mk.addEventListener('pointerenter', function () { setHover(m.id); });
      mk.addEventListener('pointerleave', function () { setHover(null); });
      marks.appendChild(mk);
    });

    /* Names on the countries big enough to carry one, largest first, each
     * only where it overlaps no marker and no other name. */
    var marked = {};
    items.forEach(function (m) { marked[m.id] = 1; });
    A.countries.map(function (c) { return shapeById[c.id]; })
      .filter(function (s) { return s && !marked[s.id] && visible(s); })
      .map(function (s) { return { s: s, w: (s.box[2] - s.box[0]) * k }; })
      .sort(function (a, b) { return b.w - a.w; })
      .forEach(function (o) {
        var txt = name(o.s.id);
        var lw = txt.length * 6.6 + 6, lh = 15;
        if (o.w < lw + 10) return;
        var x = f.x(o.s.anchor[0]), y = f.y(o.s.anchor[1]);
        var b = [x - lw / 2, y - lh / 2, x + lw / 2, y + lh / 2];
        if (b[0] < 4 || b[1] < 4 || b[2] > r.width - 56 || b[3] > r.height - 4 || !free(b, taken)) return;
        taken.push(b);
        var lab = raw('span', 'cty-label', txt);
        lab.setAttribute('aria-hidden', 'true');
        lab.setAttribute('data-for', o.s.id);
        lab.style.left = x + 'px';
        lab.style.top = y + 'px';
        marks.appendChild(lab);
      });
    syncMarks();
  }

  /* True when box b = [x0, y0, x1, y1] overlaps none of the boxes. */
  function free(b, boxes) {
    for (var i = 0; i < boxes.length; i++) {
      var o = boxes[i];
      if (b[0] < o[2] && b[2] > o[0] && b[1] < o[3] && b[3] > o[1]) return false;
    }
    return true;
  }

  function syncMarks() {
    shapes.forEach(function (s) {
      if (!s.node) return;
      s.node.classList.toggle('on', s.id === state.open);
      s.node.classList.toggle('hover', s.id === state.hover);
    });
    if (!marks) return;
    Array.prototype.forEach.call(marks.querySelectorAll('.mk'), function (m) {
      var id = m.getAttribute('data-id');
      m.classList.toggle('on', id === state.open);
      m.classList.toggle('hover', id === state.hover);
      m.classList.toggle('focus', id === state.focus && document.activeElement && document.activeElement.getAttribute('data-id') === id);
    });
    Array.prototype.forEach.call(list.querySelectorAll('button[data-id]'), function (b) {
      b.classList.toggle('on', b.getAttribute('data-id') === state.open);
    });
  }
  function setHover(id) { state.hover = id; syncMarks(); }

  /* Roving focus: one tab stop for the whole map. */
  function rovingReset() {
    var cands = shapes.filter(function (s) { return s.node && visible(s); });
    shapes.forEach(function (s) { if (s.node) s.node.setAttribute('tabindex', '-1'); });
    var start = cands.filter(function (s) { return s.id === state.focus; })[0] ||
      cands.filter(function (s) { return s.id === 'DE'; })[0] || cands[0];
    if (start) start.node.setAttribute('tabindex', '0');
  }
  function onMapKey(e) {
    var id = e.target.getAttribute && e.target.getAttribute('data-id');
    if (!id) return;
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openPop(id, e.target); return; }
    if (e.key === '+' || e.key === '=') { e.preventDefault(); zoomW.zoomAt(1.6); return; }
    if (e.key === '-' || e.key === '_') { e.preventDefault(); zoomW.zoomAt(1 / 1.6); return; }
    var dir = { ArrowRight: [1, 0], ArrowLeft: [-1, 0], ArrowDown: [0, 1], ArrowUp: [0, -1] }[e.key];
    if (!dir) return;
    e.preventDefault();
    var from = shapeById[id].anchor, best = null, bestScore = Infinity;
    shapes.forEach(function (s) {
      if (!s.node || s.id === id || !visible(s)) return;
      var dx = s.anchor[0] - from[0], dy = s.anchor[1] - from[1];
      var along = dx * dir[0] + dy * dir[1];
      if (along <= 0) return;
      var across = Math.abs(dx * dir[1] - dy * dir[0]);
      var score = along + across * 2.5;
      if (score < bestScore) { bestScore = score; best = s; }
    });
    if (!best) return;
    e.target.setAttribute('tabindex', '-1');
    best.node.setAttribute('tabindex', '0');
    best.node.focus();
    state.focus = best.id;
    syncMarks();
  }

  function buildList() {
    list.textContent = '';
    [[true, 'Europe'], [false, 'Outside Europe']].forEach(function (g) {
      var col = el('div', 'atlas-col');
      var cs = A.countries.filter(function (c) { return c.europe === g[0]; })
        .sort(function (a, b) { return name(a.id).localeCompare(name(b.id), I18N.locale); });
      var h = el('h2', 'rubric', g[1]);
      h.appendChild(raw('span', 'n', ' · ' + cs.length));
      col.appendChild(h);
      var ul = el('ul', 'atlas-names');
      cs.forEach(function (c) {
        var li = el('li');
        var b = raw('button', 'atlas-name', name(c.id));
        b.type = 'button';
        b.setAttribute('data-id', c.id);
        b.addEventListener('click', function () { openPop(c.id, b); });
        li.appendChild(b);
        ul.appendChild(li);
      });
      col.appendChild(ul);
      list.appendChild(col);
    });
  }

  /* ------------------------------------------------------------------ */
  /* Quick overview                                                      */
  /* ------------------------------------------------------------------ */

  var popReturn = null;
  function openPop(id, from) {
    state.open = id;
    popReturn = from || null;
    syncMarks();
    /* A country outside the current view: switch to the view that holds it. */
    var s = shapeById[id];
    if (s && !visible(s)) {
      var v = A.countries.indexOf(A.byId[id]) < 25 ? 'europe' : 'world';
      state.view = v;
      tools.querySelectorAll('.seg-wrap')[1].sync(v);
      drawView();
      state.open = id;
      syncMarks();
    }
    pop.hidden = false;
    pop.textContent = '';
    pop.setAttribute('role', 'dialog');
    pop.setAttribute('aria-label', name(id));
    pop.appendChild(el('p', 'pop-loading', 'Loading…'));
    position(id);
    load(id).then(function (rec) {
      if (state.open !== id) return;
      fillPop(rec);
      position(id);
      var h = pop.querySelector('h2');
      if (h) h.focus();
    }, function () {
      if (state.open !== id) return;
      pop.textContent = '';
      pop.appendChild(el('p', 'pop-loading', 'This country’s page could not be loaded. Check your connection and try again.'));
      pop.appendChild(closeButton());
    });
  }

  function closeButton() {
    var x = btn('pop-x', 'Close');
    x.addEventListener('click', function () { closePop(); });
    return x;
  }

  function closePop(silent) {
    if (!pop || pop.hidden) { state.open = null; return; }
    pop.hidden = true;
    state.open = null;
    syncMarks();
    if (!silent && popReturn && document.body.contains(popReturn) && popReturn.focus) popReturn.focus();
    popReturn = null;
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && pop && !pop.hidden) { e.preventDefault(); closePop(); }
  });
  document.addEventListener('click', function (e) {
    if (!pop || pop.hidden) return;
    if (pop.contains(e.target) || (e.target.closest && e.target.closest('[data-id]'))) return;
    closePop(true);
  });

  /* Beside the country on a wide screen; a sheet along the bottom on a
   * phone (css/app.css). */
  function position(id) {
    var s = shapeById[id];
    var r = svgEl.getBoundingClientRect();
    if (!s || !r.width || window.innerWidth < 720) { pop.style.left = pop.style.top = ''; return; }
    var f = fitOf(r, vb);
    var x = f.x(s.anchor[0]), y = f.y(s.anchor[1]);
    var w = Math.min(360, r.width - 24);
    var left = x + 28 + w > r.width ? x - 28 - w : x + 28;
    left = Math.max(8, Math.min(r.width - w - 8, left));
    var top = Math.max(8, Math.min(Math.max(8, r.height - 280), y - 60));
    pop.style.left = left + 'px';
    pop.style.top = top + 'px';
  }

  function roleName(id) {
    var r = A.roles.filter(function (x) { return x.id === id; })[0] || A.financeRoles.filter(function (x) { return x.id === id; })[0];
    return r ? T(r.name) : id;
  }

  /* The country's five IMF indicators. In full, each has a strip with a tick
   * for every one of the 46 countries, this one marked, so its place among
   * them shows at a glance; the short form (the overview) has the figure
   * and its rank only. */
  function keyFigures(id, full) {
    var wrap = el('div', 'kf' + (full ? ' full' : ''));
    if (!S) return wrap;
    var grid = el('div', 'kf-grid');
    (full ? INDICATORS : INDICATORS.filter(function (I) { return I.id !== 'gdp'; })).forEach(function (I) {
      var v = statOf(id, I.id), sc = scaleOf(I.id);
      var cell = el('div', 'kf-cell');
      cell.appendChild(el('p', 'kf-k', I.label));
      cell.appendChild(raw('p', 'kf-v', v === null ? '—' : I.fmt(v)));
      cell.appendChild(raw('p', 'kf-r', v === null ? T('no IMF figure')
        : T('{n} of {total}, highest first', { n: sc.rank(v), total: sc.vals.length })));
      if (full && v !== null) {
        var lo = sc.vals[0], hi = sc.vals[sc.vals.length - 1];
        /* GDP and population span three orders of magnitude: a log scale. */
        var lg = I.id === 'gdp' || I.id === 'pop';
        var pos = function (x) { return lg ? (Math.log(x) - Math.log(lo)) / (Math.log(hi) - Math.log(lo)) : (x - lo) / (hi - lo); };
        var strip = el('div', 'kf-strip');
        strip.setAttribute('aria-hidden', 'true');
        sc.vals.forEach(function (x) {
          var t = el('i', 'kf-t' + (x === v ? ' me' : ''));
          t.style.left = (pos(x) * 100).toFixed(2) + '%';
          strip.appendChild(t);
        });
        cell.appendChild(strip);
        var ends = el('p', 'kf-ends');
        ends.setAttribute('aria-hidden', 'true');
        ends.appendChild(raw('span', null, I.fmt(lo)));
        ends.appendChild(raw('span', null, I.fmt(hi)));
        cell.appendChild(ends);
      }
      grid.appendChild(cell);
    });
    wrap.appendChild(grid);
    var src = el('p', 'kf-src');
    var S1 = { tag: S.tag, src: S.src, by: S.source, seen: S.seen };
    src.appendChild(raw('span', null, T('{source}, {year} figures, partly estimates; ranks among the 46 Atlas countries.', { source: S.source, year: S.year }) + (full ? '' : ' ')));
    if (full) { wrap.setAttribute('data-notes', T('Key figures')); src.appendChild(cite([noteOf(S1)])); }
    else src.appendChild(evidence(S1));
    wrap.appendChild(src);
    return wrap;
  }

  function fillPop(rec) {
    pop.textContent = '';
    var c = A.byId[rec.id];
    var head = el('div', 'pop-head');
    head.appendChild(el('p', 'kicker', c.europe ? 'Europe' : 'Outside Europe'));
    var h = raw('h2', 'pop-title', name(rec.id));
    h.tabIndex = -1;
    head.appendChild(h);
    pop.appendChild(head);
    pop.appendChild(el('p', 'pop-sum', rec.summary));
    if (S) pop.appendChild(keyFigures(rec.id, false));

    var dl = el('dl', 'pop-facts');
    function row(k, node) { dl.appendChild(el('dt', null, k)); var d = el('dd'); d.appendChild(node); dl.appendChild(d); }
    row('Major sectors', raw('span', null, rec.sectors.map(function (s) { return T(s); }).join(' · ')));
    var hubs = el('ul', 'pop-hubs');
    rec.hubs.slice(0, 5).forEach(function (hb) {
      var li = el('li');
      li.appendChild(raw('b', null, hb.name));
      li.appendChild(raw('span', null, ' — ' + T(hb.knownFor)));
      hubs.appendChild(li);
    });
    if (rec.hubs.length > 5) hubs.appendChild(raw('li', 'more-hubs', T('and {n} more on the country page', { n: rec.hubs.length - 5 })));
    row(rec.hubs.length === 1 ? 'Main hub' : 'Main hubs', hubs);
    row('Most-requested roles', rec.roles.length ? raw('span', null, rec.roles.map(roleName).join(' · '))
      : el('span', 'muted-note', 'Not rated: no source read puts any family at strong or dominant in this country.'));
    pop.appendChild(dl);

    var act = el('div', 'pop-actions');
    var go = el('a', 'btn primary', 'Open the country page →');
    go.href = '#' + rec.id.toLowerCase();
    act.appendChild(go);
    act.appendChild(closeButton());
    pop.appendChild(act);
    if (!A.inScope(passport(), rec.id) && !A.isHome(passport(), rec.id)) {
      pop.appendChild(el('p', 'pop-scope', 'Routes there on your passport are outside Admetia’s scope; the hubs above still apply.'));
    }
  }

  /* ------------------------------------------------------------------ */
  /* Claims and evidence                                                 */
  /* ------------------------------------------------------------------ */

  var TAG_LABEL = { 'data': 'Data', 'employer-stated': 'Employer-stated', 'practitioner consensus': 'Practitioner consensus', 'anecdotal': 'Anecdotal', 'reading': 'Our reading' };

  /* A claim reads as its sentence and a note number, [3]. Where it comes
   * from (its tag, its source and the day it was read) is listed at the
   * foot of the country page, under the section that cites it; see
   * refreshNotes(). */
  function claim(rec, cid, tagName) {
    var p = el(tagName || 'p', 'claim');
    appendClaim(p, rec, cid);
    return p;
  }
  function appendClaim(node, rec, cid) {
    var c = rec.claims[cid];
    if (!c) { node.appendChild(raw('span', null, cid)); return; }
    node.appendChild(raw('span', 'claim-t', T(c.t)));
    node.appendChild(cite([noteOf(c)]));
  }
  /* Several claims run on as one paragraph, each with its own number. */
  function claimRun(rec, cids) {
    var p = el('p', 'claim');
    cids.forEach(function (cid, i) {
      if (i) p.appendChild(document.createTextNode(' '));
      appendClaim(p, rec, cid);
    });
    return p;
  }

  /* A note: one entry in the list of sources. A claim or a figure gives
   * one; a chart's figures from the same publisher share one, with each
   * hub named (chartNotes). */
  function noteOf(c) {
    return { tag: c.tag, title: c.by, href: c.src, seen: c.seen };
  }
  function noteKey(n) {
    return [n.tag, n.title, n.href, n.seen, (n.parts || []).map(function (p) { return p.label + '>' + p.href; }).join(',')].join('|');
  }
  /* The mark beside the text. Its numbers are filled in by refreshNotes(),
   * which runs whenever the page changes (a hub picked, a passport
   * switched), so the numbers always follow the reading order. */
  function cite(notes, inline) {
    var s = el(inline ? 'span' : 'sup', 'cite' + (inline ? ' inline' : ''));
    s._notes = notes;
    return s;
  }

  /* Numbers run through the page in reading order. Each section (or each
   * hub) lists its sources once: a source cited twice in it keeps its
   * first number. A section is any element with data-notes; one inside
   * another (Why it is a hub, inside Munich) is a subheading. */
  var lastCite = null;
  function refreshNotes() {
    var box = page._notes;
    if (!box) return;
    var groups = [], byTop = {}, count = 0;
    Array.prototype.forEach.call(page.querySelectorAll('.cite'), function (c) {
      if (box.contains(c)) return;
      var path = [];
      for (var n = c.parentElement; n && n !== page; n = n.parentElement) {
        if (n.getAttribute('data-notes')) path.unshift(n.getAttribute('data-notes'));
      }
      var top = path[0] || '', sub = path.slice(1).join(' · ');
      var g = byTop[top];
      if (!g) { g = byTop[top] = { label: top, subs: [], bySub: {}, byKey: {} }; groups.push(g); }
      var nums = [];
      (c._notes || []).forEach(function (note) {
        var k = noteKey(note), e = g.byKey[k];
        if (!e) {
          var s = g.bySub[sub];
          if (!s) { s = g.bySub[sub] = { label: sub, entries: [] }; g.subs.push(s); }
          e = g.byKey[k] = { n: ++count, note: note, cites: [] };
          s.entries.push(e);
        }
        e.cites.push(c);
        if (nums.indexOf(e.n) < 0) nums.push(e.n);
      });
      drawCite(c, nums.sort(function (a, b) { return a - b; }), g);
    });

    box.textContent = '';
    if (!count) { box.hidden = true; if (page._toc) page._toc.draw(); return; }
    box.hidden = false;
    box.appendChild(sectionHead('Sources', T('{n} sources, numbered in the order the page cites them', { n: count }), 'Sources'));
    var cols = el('div', 'notes-cols');
    groups.forEach(function (g) {
      var gb = el('div', 'notes-group');
      gb.appendChild(raw('h3', 'notes-h', g.label));
      g.subs.forEach(function (s) {
        if (s.label) gb.appendChild(raw('h4', 'notes-sub', s.label));
        var ol = el('ol', 'notes');
        s.entries.forEach(function (e) { ol.appendChild(noteItem(e)); });
        gb.appendChild(ol);
      });
      cols.appendChild(gb);
    });
    box.appendChild(cols);
    if (page._toc) page._toc.draw();
  }

  /* [3], [3–5] or [1, 4]: one button for each run of numbers. */
  function drawCite(c, nums, g) {
    c.textContent = '';
    if (!nums.length) return;
    var runs = [];
    nums.forEach(function (n) {
      var r = runs[runs.length - 1];
      if (r && n === r[1] + 1) r[1] = n; else runs.push([n, n]);
    });
    /* A word joiner keeps the mark on the line of the word before it. */
    c.appendChild(raw('span', 'cite-br', '\u2060['));
    runs.forEach(function (r, i) {
      if (i) c.appendChild(raw('span', 'cite-br', ', '));
      var b = raw('button', 'cite-b', r[0] === r[1] ? String(r[0]) : r[0] + '–' + r[1]);
      b.type = 'button';
      var titles = [];
      Object.keys(g.byKey).forEach(function (k) {
        var e = g.byKey[k];
        if (e.n >= r[0] && e.n <= r[1]) titles.push(e.n + '. ' + e.note.title);
      });
      b.title = titles.join('\n');
      b.setAttribute('aria-label', r[0] === r[1] ? T('Source {n}', { n: r[0] }) : T('Sources {a} to {b}', { a: r[0], b: r[1] }));
      b.addEventListener('click', function () { lastCite = c; goTo(document.getElementById('src-' + r[0])); });
      c.appendChild(b);
    });
    c.appendChild(raw('span', 'cite-br', ']'));
  }

  function goTo(node) {
    if (!node) return;
    var still = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    node.scrollIntoView({ behavior: still ? 'auto' : 'smooth', block: 'center' });
    node.focus({ preventScroll: true });
    node.classList.remove('hit');
    void node.offsetWidth;
    node.classList.add('hit');
  }

  /* One source: its number, its title as the link (or the hubs it covers,
   * each a link), the kind of evidence and the day it was read. */
  function noteItem(e) {
    var n = e.note;
    var li = el('li', 'note ev-' + String(n.tag).replace(/\s+/g, '-'));
    li.id = 'src-' + e.n;
    li.tabIndex = -1;
    li.appendChild(raw('span', 'note-n', e.n + '.'));
    var body = el('span', 'note-b');
    body.appendChild(n.href ? link('note-t', n.title, n.href) : raw('span', 'note-t', n.title));
    if (n.parts && n.parts.length) {
      body.appendChild(raw('span', 'note-sep', ': '));
      n.parts.forEach(function (p, i) {
        if (i) body.appendChild(raw('span', 'note-sep', ' · '));
        var x = p.href ? link('note-part', p.label, p.href) : raw('span', 'note-part', p.label);
        if (p.tip) x.title = p.tip;
        body.appendChild(x);
      });
    }
    var meta = el('span', 'note-m');
    meta.appendChild(el('span', 'ev-tag', TAG_LABEL[n.tag] || n.tag));
    meta.appendChild(raw('span', null, ' · ' + T(n.tag === 'reading' ? 'as of {date}' : 'read {date}', { date: date(n.seen) })));
    body.appendChild(meta);
    li.appendChild(body);
    var up = btn('note-up', '↑');
    up.title = T('Back to the text');
    up.setAttribute('aria-label', T('Back to the text'));
    up.addEventListener('click', function () {
      var c = lastCite && e.cites.indexOf(lastCite) > -1 ? lastCite : e.cites[0];
      var b = c && c.querySelector('button');
      if (!b) return;
      c.scrollIntoView({ behavior: 'auto', block: 'center' });
      b.focus({ preventScroll: true });
    });
    li.appendChild(up);
    return li;
  }
  function link(cls, text, href) {
    var a = raw('a', cls, text);
    a.href = href;
    if (/^https?:/.test(href)) { a.rel = 'noopener noreferrer'; a.target = '_blank'; }
    return a;
  }

  /* A chart's figures, one note per publisher: figures from the same
   * publisher (same tag, same site, read the same day) share one entry,
   * titled by what their descriptions have in common, with each hub
   * named. One page for all of them is the title's link; one page each,
   * each hub's name is. */
  function chartNotes(list) {
    var out = [], byKey = {};
    list.forEach(function (x) {
      var m = x.m, host = (/^https?:\/\/([^/]+)/.exec(m.src) || [])[1] || m.src;
      var k = [m.tag, host, m.seen].join('|');
      if (!byKey[k]) { byKey[k] = []; out.push(byKey[k]); }
      byKey[k].push(x);
    });
    var notes = [];
    out.forEach(function (xs) {
      var title = xs.length > 1 ? common(xs.map(function (x) { return x.m.by; })) : '';
      if (xs.length === 1 || title.length < 3) {
        xs.forEach(function (x) { notes.push(metricNote(x.m)); });
        return;
      }
      var one = xs.every(function (x) { return x.m.src === xs[0].m.src; });
      var years = uniq(xs.map(function (x) { return x.m.year; })), areas = uniq(xs.map(function (x) { return x.m.area; }));
      notes.push({
        tag: xs[0].m.tag, seen: xs[0].m.seen,
        title: noteTitle(title, years.length === 1 ? years[0] : null, areas.length === 1 ? areas[0] : null),
        href: one ? xs[0].m.src : null,
        parts: xs.map(function (x) {
          return { label: x.h.name + (years.length > 1 ? ' ' + x.m.year : ''), href: one ? null : x.m.src, tip: x.m.by };
        })
      });
    });
    return notes;
  }
  function metricNote(m) {
    return { tag: m.tag, title: noteTitle(m.by, m.year, m.area), href: m.src, seen: m.seen };
  }
  /* A figure's description, then its year (unless the description already
   * says it) and the area it covers. */
  function noteTitle(by, year, area) {
    var t = by.replace(/[\s.,;:]+$/, ''), a = area ? areaName(area) : '';
    var y = year && t.indexOf(String(year)) < 0 ? ', ' + year : '';
    return t + y + (a ? ' (' + a + ')' : '');
  }
  function areaName(id) {
    var a = A.areas.filter(function (x) { return x.id === id; })[0];
    return a ? T(a.name) : '';
  }
  function uniq(xs) { return xs.filter(function (x, i) { return xs.indexOf(x) === i; }); }
  /* What several descriptions share, cut back to the last comma, colon or
   * bracket, so no description is cut mid-phrase. */
  function common(xs) {
    var p = xs[0];
    xs.forEach(function (s) { while (s.indexOf(p) !== 0) p = p.slice(0, -1); });
    if (xs.indexOf(p) > -1) return p;
    var cut = Math.max(p.lastIndexOf(','), p.lastIndexOf(':'), p.lastIndexOf(' ('));
    return cut > 0 ? p.slice(0, cut).trim() : '';
  }

  /* The quick overview has no foot to send notes to: its one source is
   * written out under its figures. */
  function evidence(c) {
    var ev = el('span', 'ev ev-' + c.tag.replace(/\s+/g, '-'));
    ev.appendChild(el('span', 'ev-tag', TAG_LABEL[c.tag] || c.tag));
    ev.appendChild(raw('span', 'ev-sep', ' · '));
    var a = raw('a', 'ev-src', c.by);
    a.href = c.src;
    if (/^https?:/.test(c.src)) { a.rel = 'noopener noreferrer'; a.target = '_blank'; }
    ev.appendChild(a);
    ev.appendChild(raw('span', 'ev-sep', ' · '));
    ev.appendChild(raw('span', 'ev-date', T('read {date}', { date: date(c.seen) })));
    return ev;
  }

  /* ------------------------------------------------------------------ */
  /* The country page                                                    */
  /* ------------------------------------------------------------------ */

  /* nav: the section's short name in "On this page"; without one the
   * heading is not listed there. */
  function sectionHead(text, count, nav) {
    var h = el('h2', 'section', text);
    if (count) h.appendChild(raw('span', 'count', count));
    if (nav) {
      h.id = 'sec-' + nav.toLowerCase().replace(/[^a-z]+/g, '-');
      h.setAttribute('data-nav', T(nav));
    }
    return h;
  }

  /* On this page: one link per section the page has (one hub has nothing
   * to compare, few countries carry advisories), the one being read
   * marked, and how far down the page it is. Beside the page on a wide
   * screen; a strip pinned under the ticker on a narrow one. draw() runs
   * again whenever the sections change (Sources is redrawn with the
   * passport). */
  var TOC_LINE = 160;   /* px from the top: a section is being read once its heading passes this */
  function contents() {
    var nav = el('nav', 'atlas-toc');
    nav.setAttribute('aria-label', T('On this page'));
    nav.appendChild(el('p', 'toc-k', 'On this page'));
    var list = el('ol', 'toc-list');
    nav.appendChild(list);
    var bar = el('div', 'toc-bar'), fill = el('i');
    bar.appendChild(fill);
    nav.appendChild(bar);
    var where = el('p', 'toc-where');
    nav.appendChild(where);
    var heads = [], links = [], current = -1, frame = 0;

    function draw() {
      heads = Array.prototype.filter.call(page.querySelectorAll('h2[data-nav]'), function (h) { return !h.closest('[hidden]'); });
      list.textContent = '';
      links = heads.map(function (h) {
        var li = el('li');
        var b = raw('button', 'toc-link', h.getAttribute('data-nav'));
        b.type = 'button';
        b.addEventListener('click', function () { jump(h.id); });
        li.appendChild(b);
        list.appendChild(li);
        return b;
      });
      nav.hidden = heads.length < 2;
      current = -1;
      spy();
    }
    function jump(id) {
      var h = document.getElementById(id);
      if (!h) return;
      var still = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
      h.tabIndex = -1;
      h.scrollIntoView({ behavior: still ? 'auto' : 'smooth', block: 'start' });
      h.focus({ preventScroll: true });
    }
    function spy() {
      frame = 0;
      if (!heads.length) return;
      var at = 0;
      heads.forEach(function (h, i) { if (h.getBoundingClientRect().top <= TOC_LINE) at = i; });
      if (at === current) return;
      current = at;
      links.forEach(function (b, i) {
        b.classList.toggle('on', i === at);
        if (i === at) b.setAttribute('aria-current', 'location'); else b.removeAttribute('aria-current');
      });
      fill.style.width = ((at + 1) / heads.length * 100) + '%';
      where.textContent = T('Section {n} of {total}', { n: at + 1, total: heads.length });
      /* The strip scrolls sideways to keep the marked link in sight. */
      if (list.scrollWidth > list.clientWidth) {
        var b = links[at];
        list.scrollLeft = b.offsetLeft - (list.clientWidth - b.offsetWidth) / 2;
      }
    }
    function later() { if (!frame) frame = requestAnimationFrame(spy); }
    window.addEventListener('scroll', later, { passive: true });
    window.addEventListener('resize', later);
    var prev = page._cleanup;
    page._cleanup = function () {
      if (prev) prev();
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', later);
      window.removeEventListener('resize', later);
    };
    return { node: nav, draw: draw };
  }

  /* ------------------------------------------------------------------ */
  /* Folded parts                                                        */
  /* ------------------------------------------------------------------ */

  /* One part of a long view, as a native <details>: its heading is the
   * summary, so it is a button to assistive technology and to the keyboard
   * with no script at all. Parts a reader needs before deciding are built
   * open; the rest say in their label what they hold. `extra` is a node
   * (a verdict chip, a count) shown in the label so a blocker stays in
   * sight while its part is folded. The whole-guide view, "Open every
   * part" and printing open them all. */
  function disc(title, body, o) {
    o = o || {};
    var d = el('details', 'disc');
    if (o.id) { d.id = 'part-' + o.id; d.setAttribute('data-part', o.id); }
    d._open = !!o.open;
    d.open = !!o.open || state.expand || state.sel.view === 'all';
    var sum = el('summary');
    var h = el('h3', 'disc-t', title);
    sum.appendChild(h);
    sum.appendChild(document.createTextNode(' '));
    if (o.extra) { var x = el('span', 'disc-n'); x.appendChild(o.extra); sum.appendChild(x); }
    else if (o.count) sum.appendChild(raw('span', 'disc-n', o.count));
    d.appendChild(sum);
    var b = el('div', 'disc-body');
    b.appendChild(body);
    d.appendChild(b);
    return d;
  }
  function allDiscs() { return Array.prototype.slice.call(page.querySelectorAll('details.disc')); }
  function setExpand(on) {
    state.expand = on;
    try { sessionStorage.setItem('admissions-calc:atlas-expand', on ? '1' : '0'); } catch (e) { /* ignore */ }
    allDiscs().forEach(function (d) { d.open = on || d._open; });
  }
  /* "Open every part" beside a way to the whole guide: the working
   * alternative where a browser's Find does not look inside folded parts. */
  function discTools(rec) {
    var bar = el('div', 'disc-tools');
    var b = btn('btn small', state.expand ? 'Fold the optional parts' : 'Open every part');
    b.setAttribute('aria-pressed', state.expand ? 'true' : 'false');
    b.addEventListener('click', function () {
      setExpand(!state.expand);
      b.textContent = T(state.expand ? 'Fold the optional parts' : 'Open every part');
      b.setAttribute('aria-pressed', state.expand ? 'true' : 'false');
    });
    bar.appendChild(b);
    var a = raw('a', null, T('Read the whole guide on one page'));
    a.href = '#' + rec.id.toLowerCase() + '/all';
    bar.appendChild(a);
    return bar;
  }
  /* Printing shows everything; the folds come back afterwards. */
  window.addEventListener('beforeprint', function () { allDiscs().forEach(function (d) { d._was = d.open; d.open = true; }); });
  window.addEventListener('afterprint', function () { allDiscs().forEach(function (d) { if (d._was !== undefined) d.open = d._was; }); });

  /* ------------------------------------------------------------------ */
  /* The guide's own navigation                                          */
  /* ------------------------------------------------------------------ */

  function viewHref(rec, id) { return '#' + rec.id.toLowerCase() + (id === 'overview' ? '' : '/' + id); }
  function hasView(rec, id, entry) {
    if (id === 'hiring') return !!entry;
    if (id === 'life') return !!window.ATLAS_LIFE;
    return true;
  }
  function viewNav(rec, current, entry) {
    var nav = el('nav', 'atlas-toc viewnav');
    nav.setAttribute('aria-label', T('{country}: sections of this guide', { country: name(rec.id) }));
    nav.appendChild(el('p', 'toc-k', 'In this guide'));
    var list = el('ol', 'toc-list');
    VIEWS.forEach(function (v) {
      if (!hasView(rec, v.id, entry)) return;
      var li = el('li');
      var a = el('a', 'toc-link' + (v.id === current ? ' on' : '') + (v.id === 'all' ? ' toc-all' : ''), v.nav);
      a.href = viewHref(rec, v.id);
      if (v.id === current) a.setAttribute('aria-current', 'page');
      li.appendChild(a);
      list.appendChild(li);
    });
    nav.appendChild(list);
    return nav;
  }
  /* Breadcrumbs: the shell prints Home › Plan a move; the country and the
   * view are added here, and taken away again on the world view. */
  var trail = document.getElementById('trail');
  var trailBase = trail ? trail.innerHTML : '';
  function setTrail(rec, view) {
    if (!trail) return;
    trail.innerHTML = trailBase;
    if (!rec) {
      /* World view: "Plan a move" is where you are, not a link to itself. */
      var last = trail.lastElementChild, a0 = last && last.querySelector('a');
      if (a0) { var sp0 = raw('span', null, a0.textContent); sp0.setAttribute('aria-current', 'page'); last.replaceChild(sp0, a0); }
      return;
    }
    var cur = trail.querySelector('[aria-current]');
    if (cur) {
      var a = raw('a', null, cur.textContent);
      a.href = '#';
      cur.parentNode.replaceChild(a, cur);
    }
    function crumb(text, href) {
      var li = el('li'), n = raw(href ? 'a' : 'span', null, text);
      if (href) n.href = href; else n.setAttribute('aria-current', 'page');
      li.appendChild(n);
      trail.appendChild(li);
    }
    if (view === 'overview') crumb(name(rec.id));
    else { crumb(name(rec.id), viewHref(rec, 'overview')); crumb(T(viewById[view].nav)); }
  }

  /* Before and after: the neighbouring views, then where the same question
   * continues elsewhere on the site. */
  var ELSEWHERE = {
    cities: [['Compare how hiring works in all 46 countries', 'hiring.html#compare'], ['What each role family involves', 'careers/index.html']],
    hiring: [['Plan your route in this country', 'hiring.html#{id}/graduated/first'], ['When each recruiting window opens', 'careers/recruiting-calendar.html'], ['CV rules by country, templates and letters', 'careers/toolkit.html'], ['Interview prep', 'careers/interview-prep.html']],
    visas: [['Master’s programmes here: requirements, fees and deadlines', 'programmes.html']],
    work: [['What each role pays and how its hours run', 'careers/compare.html']],
    life: [],
    arrival: [],
    sources: [['How the Atlas was researched and checked', 'method.html#atlas'], ['The research library', 'method.html#library']]
  };
  function viewFoot(rec, current, entry) {
    var box = el('nav', 'next view-next');
    box.setAttribute('aria-label', T('Continue'));
    box.appendChild(el('h2', 'rubric', 'Where to go next'));
    var ul = el('ul', 'next-list');
    var ids = VIEWS.filter(function (v) { return v.id !== 'all' && hasView(rec, v.id, entry); }).map(function (v) { return v.id; });
    var at = ids.indexOf(current);
    function item(text, href, note) {
      var li = el('li'), a = raw('a', null, text);
      a.href = href;
      li.appendChild(a);
      if (note) li.appendChild(raw('span', null, note));
      ul.appendChild(li);
    }
    if (at > -1 && ids[at + 1]) item(T('Next in this guide: {view}', { view: T(viewById[ids[at + 1]].nav) }), viewHref(rec, ids[at + 1]), viewAbout(rec, ids[at + 1]));
    (ELSEWHERE[current] || []).forEach(function (x) { item(T(x[0]), x[1].replace('{id}', rec.id.toLowerCase())); });
    if (at > 0) item(T('Back to the overview of {country}', { country: name(rec.id) }), viewHref(rec, 'overview'));
    box.appendChild(ul);
    return box;
  }
  function viewAbout(rec, id) {
    if (id === 'work') return rec.work.map(function (it) { return T(it.k); }).join(' · ');
    return viewById[id].about ? T(viewById[id].about) : '';
  }

  /* Official advice applies whichever view is open: say so, and link to it,
   * wherever the advice itself is not printed. */
  function advisoryNotice(rec) {
    var n = el('div', 'notice warn');
    n.setAttribute('role', 'note');
    n.appendChild(el('p', 'notice-k', 'Official advice and restrictions'));
    var p = el('p');
    p.appendChild(raw('span', null, T('Official travel advice or restrictions apply to {country}. Read them before you plan around anything on this page.', { country: name(rec.id) }) + ' '));
    var a = raw('a', null, T('Read the advice'));
    a.href = '#' + rec.id.toLowerCase() + '/overview/advice';
    p.appendChild(a);
    n.appendChild(p);
    return n;
  }

  /* Topics as a ledger: the topic on the left, what the sources say on the
   * right, one ruled row each, so short and long topics sit together
   * without leaving holes. */
  function itemList(rec, items, cls) {
    var wrap = el('div', 'atlas-items ' + (cls || ''));
    items.forEach(function (it) {
      var box = el('div', 'atlas-item');
      box.appendChild(el('h3', 'item-k', it.k));
      box.appendChild(claimRun(rec, it.c));
      wrap.appendChild(box);
    });
    return wrap;
  }

  /* The sections of a guide, each built once per view that shows it. */
  function secFigures(rec, main) {
    if (!S) return;
    main.appendChild(sectionHead('Key figures', T('where it sits among the 46'), 'Key figures'));
    main.appendChild(keyFigures(rec.id, true));
  }
  function secAdvisory(rec, main) {
    if (!rec.advisory || !rec.advisory.length) return;
    var adv = el('section', 'atlas-advisory');
    adv.id = 'part-advice';
    adv.setAttribute('data-notes', T('Official advice and restrictions'));
    adv.appendChild(sectionHead('Official advice and restrictions', null, 'Advice'));
    rec.advisory.forEach(function (cid) { adv.appendChild(claim(rec, cid)); });
    main.appendChild(adv);
  }
  function secHubs(rec, main, hubId) {
    main.appendChild(sectionHead(rec.hubs.length > 1 ? 'Hubs' : 'The hub',
      rec.hubs.length > 1 ? T('{n} hubs: tap one for what it hires for', { n: rec.hubs.length }) : '',
      rec.hubs.length > 1 ? 'Hubs' : 'The hub'));
    main.appendChild(hubMap(rec, hubId));
    if (rec.hubs.length > 1) {
      main.appendChild(sectionHead('Hubs compared', T('{n} hubs side by side', { n: rec.hubs.length }), 'Compare'));
      main.appendChild(compareHubs(rec));
    }
  }
  function secWork(rec, main) {
    main.appendChild(sectionHead('Working there', null, 'Working there'));
    var work = itemList(rec, rec.work);
    work.setAttribute('data-notes', T('Working there'));
    main.appendChild(work);
  }
  /* The working notes behind a guide: which briefs it draws on, what is
   * not verified yet, and where its verification log is. Kept apart from
   * the practical sections, in the Sources and research view. */
  function secResearch(rec, main, visas) {
    main.appendChild(sectionHead('Research behind this page', null, 'Research'));
    var res = el('div', 'atlas-research');
    if (rec.briefs && rec.briefs.length) {
      res.appendChild(el('p', 'item-k', 'Briefs in the research library'));
      var ul = el('ul', 'atlas-briefs');
      rec.briefs.forEach(function (b) {
        var li = el('li');
        var a = raw('a', null, b[0]);
        a.href = 'research/' + b[0];
        li.appendChild(a);
        if (b[1]) li.appendChild(raw('span', null, ' — ' + T(b[1])));
        ul.appendChild(li);
      });
      res.appendChild(ul);
    }
    if (rec.gaps && rec.gaps.length) {
      res.appendChild(el('p', 'item-k', 'Not verified yet'));
      var ug = el('ul', 'atlas-gaps');
      rec.gaps.forEach(function (g) { ug.appendChild(el('li', null, g)); });
      res.appendChild(ug);
    }
    if (visas && visas.folder) {
      var vg = el('p', 'atlas-note');
      vg.appendChild(raw('span', null, T('Visas and permits: the full research, in Italian, with every case, trap and open question:') + ' '));
      var gp = 'research/visas_immigration/' + visas.folder + '/' + visas.folder + '_visas_immigration_guide.md';
      vg.appendChild(link(null, gp.replace('research/', ''), gp));
      res.appendChild(vg);
    }
    res.appendChild(raw('p', 'atlas-note', T('Verification log: {p} in research/verification/claims-to-verify.md.', { p: rec.log })));
    main.appendChild(res);
  }

  /* Which sections each view prints. "all" prints every one, in the order
   * the single page always had; "sources" builds them out of sight, so its
   * numbered list covers the whole guide. tests/ux-test.js reads this
   * table: every section must belong to a view other than "all". */
  var SECTIONS = {
    figures: function (c) { secFigures(c.rec, c.main); },
    advisory: function (c) { secAdvisory(c.rec, c.main); },
    hubs: function (c) { secHubs(c.rec, c.main, c.sel.hub); },
    hiring: function (c) { if (c.entry) c.main.appendChild(entrySection(c.entry, c.rec)); },
    visas: function (c) { c.main.appendChild(visaSection(c.rec, c.visas)); },
    work: function (c) { secWork(c.rec, c.main); },
    life: function (c) { if (window.ATLAS_LIFE) c.main.appendChild(lifeSection(c.rec)); },
    arrival: function (c) { c.main.appendChild(arrivalSection(c.rec, c.visas)); },
    research: function (c) { secResearch(c.rec, c.main, c.visas); }
  };
  var VIEW_SECTIONS = {
    overview: ['advisory', 'figures'],
    cities: ['hubs'],
    hiring: ['hiring'],
    visas: ['advisory', 'visas'],
    work: ['work'],
    life: ['life'],
    arrival: ['arrival'],
    sources: ['research'],
    all: ['figures', 'advisory', 'hubs', 'hiring', 'visas', 'work', 'life', 'arrival', 'research']
  };

  /* The overview's index: the passport the routes are shown for, then each
   * view with what it holds. */
  function guideIndex(rec, entry) {
    var box = el('section', 'guide-index');
    var h = el('h2', 'section', 'What do you need to know?');
    h.id = 'sec-guide';
    box.appendChild(h);
    var scope = el('div', 'guide-scope');
    scope.appendChild(passportControl());
    scope.appendChild(el('p', 'seg-note', 'Your passport changes what Visas and permits and First weeks show. Everything else in the guide is the same for everyone.'));
    box.appendChild(scope);
    var ul = el('ul', 'tasks guide-tasks');
    VIEWS.forEach(function (v) {
      if (v.id === 'overview' || !hasView(rec, v.id, entry)) return;
      var li = el('li', 'task' + (v.id === 'all' || v.id === 'sources' ? ' task-quiet' : ''));
      var h3 = el('h3'), a = el('a', null, v.nav);
      a.href = viewHref(rec, v.id);
      h3.appendChild(a);
      li.appendChild(h3);
      var about = viewAbout(rec, v.id);
      if (about) li.appendChild(raw('p', null, about));
      ul.appendChild(li);
    });
    box.appendChild(ul);
    return box;
  }

  function renderPage(rec, sel, visas, entry) {
    page.textContent = '';
    page._notes = null;
    page._toc = null;
    state.sel = sel;
    var c = A.byId[rec.id];
    var view = sel.view, V = viewById[view], whole = view === 'all';
    document.title = view === 'overview' ? T('{country} — Atlas — Admetia', { country: name(rec.id) })
      : T('{view} · {country} — Atlas — Admetia', { view: T(V.nav), country: name(rec.id) });
    setTrail(rec, view);

    var back = el('a', 'atlas-back', '← Back to the map');
    back.href = '#';
    page.appendChild(back);

    var head = el('header', 'atlas-head');
    head.appendChild(raw('p', 'kicker', (c.europe ? T('Europe') : T('Outside Europe')) + ' · ' + T('Checked {date}', { date: date(rec.checked) })));
    var h1 = raw('h1', 'headline-2', name(rec.id));
    if (view !== 'overview') {
      h1.appendChild(raw('span', 'visually-hidden', ': '));
      h1.appendChild(raw('span', 'view-name', T(V.nav)));
    }
    head.appendChild(h1);
    if (view === 'overview' || whole) head.appendChild(el('p', 'standfirst', rec.summary));
    else if (viewAbout(rec, view)) head.appendChild(raw('p', 'standfirst view-about', viewAbout(rec, view)));
    page.appendChild(head);

    var toc = whole ? contents() : null;
    var cols = el('div', 'atlas-body');
    var main = el('div', 'atlas-main');
    var side = el('div', 'atlas-side');
    side.appendChild(viewNav(rec, view, entry));
    if (toc) side.appendChild(toc.node);
    cols.appendChild(side);
    cols.appendChild(main);
    page.appendChild(cols);

    var ctx = { rec: rec, main: main, sel: sel, visas: visas, entry: entry };
    var list = VIEW_SECTIONS[view];
    if (rec.advisory && rec.advisory.length && list.indexOf('advisory') < 0) main.appendChild(advisoryNotice(rec));
    if (view === 'hiring' && !entry) main.appendChild(el('p', 'atlas-note', 'The hiring research for this country could not be loaded. Check your connection and try again.'));
    list.forEach(function (k) { SECTIONS[k](ctx); });
    if (view === 'overview') main.appendChild(guideIndex(rec, entry));
    if (view === 'sources') {
      /* Every section, built out of sight, so the list below is the whole
       * guide's: nothing here is read, only cited. */
      var hold = el('div', 'atlas-offstage');
      hold.hidden = true;
      main.appendChild(hold);
      var off = { rec: rec, main: hold, sel: { view: 'all', hub: null }, visas: visas, entry: entry };
      VIEW_SECTIONS.all.forEach(function (k) { if (k !== 'research') SECTIONS[k](off); });
    }
    if (main.querySelector('details.disc') && !whole) {
      var first = main.querySelector('details.disc');
      first.parentNode.insertBefore(discTools(rec), first);
    }

    page._notes = el('section', 'atlas-notes');
    main.appendChild(page._notes);
    if (!whole) main.appendChild(viewFoot(rec, view, entry));
    page._toc = toc;
    refreshNotes();
    if (view === 'sources') Array.prototype.forEach.call(page._notes.querySelectorAll('.note-up'), function (b) { b.hidden = true; });
    /* On a narrow screen the guide's navigation is a strip that scrolls
     * sideways: bring the view being read into sight. */
    var here = page.querySelector('.viewnav [aria-current="page"]'), strip = here && here.parentNode.parentNode;
    if (strip && strip.scrollWidth > strip.clientWidth) strip.scrollLeft = here.offsetLeft - (strip.clientWidth - here.offsetWidth) / 2;
  }

  /* A part named in the address (#de/hiring/apply): open it if it is
   * folded, bring it into view and move the keyboard there. */
  function goPart(id) {
    var n = id && (document.getElementById('part-' + id) || document.getElementById('sec-' + id));
    if (!n) return false;
    if (n.tagName === 'DETAILS') n.open = true;
    var t = n.tagName === 'DETAILS' ? n.querySelector('summary') : (n.querySelector('h2, h3') || n);
    if (t.tagName !== 'SUMMARY') t.tabIndex = -1;
    n.scrollIntoView({ block: 'start' });
    t.focus({ preventScroll: true });
    return true;
  }

  /* ------------------------------------------------------------------ */
  /* Visas and permits                                                   */
  /* ------------------------------------------------------------------ */

  /* The country's own research, research/visas_immigration/<folder>/, in a
   * reader's terms: for the passport picked, each situation (studying, an
   * internship, the job search after a degree, a first job…) with the routes
   * open to it, a verdict, what it takes, the figures that matter and the
   * trap people fall into; then the traps and the questions the research
   * has not settled. Every line cites the official sources the research
   * read, listed at the foot of the page. The research is checked against
   * those sources, not guaranteed: the section says when it was checked,
   * when it is due again, and turns into a warning once that date passes. */
  var IT = window.I18N && I18N.lang === 'it';
  function L(pair) { return Array.isArray(pair) ? (IT && pair[1] ? pair[1] : pair[0]) : T(pair); }
  function forPassport(item, pid) { return (' ' + (item.p || '') + ' ').indexOf(' ' + pid + ' ') > -1; }
  function visaNotes(v, ids) {
    return String(ids || '').split(/\s+/).filter(Boolean).map(function (k) {
      var s = (v.sources || {})[k];
      return s ? { tag: 'data', title: s[0], href: s[1], seen: s[2] || v.checked } : { tag: 'data', title: k, href: null, seen: v.checked };
    });
  }
  /* A sentence of the research and its note numbers: [English, Italian, ids]. */
  function visaLine(v, x, node) {
    node.appendChild(raw('span', 'claim-t', L(x)));
    if (x[2]) node.appendChild(cite(visaNotes(v, x[2])));
    return node;
  }
  function visaRun(v, lines) {
    var p = el('p', 'claim');
    lines.forEach(function (x, i) {
      if (i) p.appendChild(document.createTextNode(' '));
      visaLine(v, x, p);
    });
    return p;
  }
  function verdictChip(id) {
    var V = A.verdicts.filter(function (x) { return x.id === id; })[0];
    var chip = el('span', 'verdict v-' + id, V ? V.name : id);
    if (V) chip.title = T(V.note);
    return chip;
  }

  function visaSection(rec, v) {
    var box = el('section', 'atlas-visas');
    box.setAttribute('data-notes', T('Visas and permits'));
    var head = sectionHead('Visas and permits', null, 'Visas');
    var showing = raw('span', 'count', '');
    head.appendChild(showing);
    box.appendChild(head);
    if (!v) {
      box.appendChild(el('p', 'atlas-note', 'The visa research for this country could not be loaded. Check your connection and try again.'));
      return box;
    }
    var meta = el('p', 'visa-meta');
    meta.appendChild(el('b', null, 'Visa regulations, legal limits, financial thresholds, and bilateral agreements change continuously: treat this as an indicative overview and always confirm current requirements on official sources before applying.'));
    box.appendChild(meta);
    if (Date.now() > Date.parse(v.review + 'T23:59:59')) {
      box.appendChild(raw('p', 'visa-stale', T('This research is past its review date ({date}): rules and figures may have changed since.', { date: date(v.review) })));
    }
    var tools = el('div', 'atlas-tools');
    tools.appendChild(passportControl());
    box.appendChild(tools);
    var body = el('div', 'visa-body');
    box.appendChild(body);

    function draw() {
      body.textContent = '';
      var pid = passport(), P = A.passportById[pid];
      showing.textContent = showingFor(P);
      if (A.isHome(pid, rec.id)) {
        body.appendChild(el('p', 'atlas-note', 'This is your own country, so there is no route to describe. Pick another passport to see how others get here.'));
      } else if (!A.inScope(pid, rec.id)) {
        var sc = el('div', 'atlas-scope');
        sc.appendChild(el('h3', null, 'Outside Admetia’s scope'));
        sc.appendChild(el('p', null, 'Admetia covers routes into, out of and within Europe. A route from a non-European passport to a country outside Europe is not one of them, so there is no content for it here.'));
        if (state.sel.view === 'all') sc.appendChild(el('p', null, 'The hubs and the roles above still describe the job market.'));
        else {
          var hp = el('p');
          hp.appendChild(raw('span', null, T('The hubs and the roles still describe the job market:') + ' '));
          var ha = raw('a', null, T('Cities and hubs'));
          ha.href = '#' + rec.id.toLowerCase() + '/cities';
          hp.appendChild(ha);
          sc.appendChild(hp);
        }
        body.appendChild(sc);
      } else {
        drawFor(pid);
      }
      refreshNotes();
    }

    function drawFor(pid) {
      if (v.free && forPassport(v.free, pid)) {
        var fr = el('div', 'visa-free');
        var fh = el('h3', 'visa-free-h');
        fh.appendChild(verdictChip('free'));
        fh.appendChild(el('span', null, 'You move freely'));
        fr.appendChild(fh);
        fr.appendChild(visaRun(v, v.free.t));
        body.appendChild(fr);
      }
      var list = el('div', 'atlas-items visa-routes');
      A.situations.forEach(function (S) {
        var rs = (v.routes || []).filter(function (r) { return r.k === S.id && forPassport(r, pid); });
        if (!rs.length) return;
        var row = el('div', 'atlas-item');
        row.appendChild(el('h3', 'item-k', S.name));
        var cell = el('div', 'visa-cell');
        rs.forEach(function (r) {
          var one = el('div', 'visa-route');
          var nm = el('p', 'visa-name');
          nm.appendChild(verdictChip(r.v));
          nm.appendChild(raw('b', null, L(r.name)));
          if (r.law) nm.appendChild(raw('span', 'visa-law', r.law));
          one.appendChild(nm);
          if (r.t && r.t.length) one.appendChild(visaRun(v, r.t));
          if (r.f && r.f.length) {
            var dl = el('dl', 'visa-fig');
            r.f.forEach(function (f) {
              dl.appendChild(raw('dt', null, L(f[0])));
              var dd = raw('dd', null, L(f[1]));
              if (f[2]) dd.appendChild(cite(visaNotes(v, f[2])));
              dl.appendChild(dd);
            });
            one.appendChild(dl);
          }
          if (r.w) {
            var w = el('p', 'visa-watch');
            w.appendChild(el('b', null, 'Watch out:'));
            w.appendChild(raw('span', null, ' '));
            visaLine(v, r.w, w);
            one.appendChild(w);
          }
          cell.appendChild(one);
        });
        row.appendChild(cell);
        list.appendChild(row);
      });
      if (list.childNodes.length) body.appendChild(list);
      else if (!(v.free && forPassport(v.free, pid))) body.appendChild(el('p', 'atlas-note', 'Admetia’s visa research has no route for this passport here yet.'));

      var traps = (v.traps || []).filter(function (x) { return forPassport(x, pid); });
      var opens = v.open || [];
      if (traps.length || opens.length) {
        var two = el('div', 'visa-two');
        if (traps.length) {
          var tb = el('div', 'visa-traps');
          tb.appendChild(el('h3', 'item-k', 'Traps people fall into'));
          var ul = el('ul');
          traps.forEach(function (x) { ul.appendChild(visaLine(v, x.t, el('li', 'claim'))); });
          tb.appendChild(ul);
          two.appendChild(tb);
        }
        if (opens.length) {
          var ob = el('div', 'visa-open');
          ob.appendChild(el('h3', 'item-k', 'Not settled yet'));
          ob.appendChild(el('p', 'visa-open-lead', 'What the research could not confirm, or saw changing, when it was checked.'));
          var ol = el('ul');
          opens.forEach(function (x) {
            var li = el('li', 'claim');
            var st = A.openStates.filter(function (o) { return o.id === x.st; })[0];
            li.appendChild(el('span', 'os os-' + x.st, st ? st.name : x.st));
            li.appendChild(raw('span', null, ' ' + L(x.t)));
            ol.appendChild(li);
          });
          ob.appendChild(ol);
          two.appendChild(ob);
        }
        body.appendChild(two);
      }
    }

    draw();
    document.addEventListener('atlas:passport', draw);
    var before = page._cleanup;
    page._cleanup = function () { if (before) before(); document.removeEventListener('atlas:passport', draw); };
    return box;
  }

  /* ------------------------------------------------------------------ */
  /* How hiring works there                                              */
  /* ------------------------------------------------------------------ */

  /* There are always many ways in; this is the one most graduates in the
   * country actually take, and how it differs from applying online from
   * abroad. The usual way in, the routes in order of how many people each
   * carries, what a downturn does, where a field works differently, the
   * schools and people that open doors, where employers meet students, and
   * the customs of applying. A line cites the file's own sources, or is
   * marked as Admetia's own reading where no source was read. A part the
   * research found nothing reliable for is left out, not guessed. */
  function entryNotes(e, ids) {
    return String(ids || '').split(/\s+/).filter(Boolean).map(function (k) {
      if (k === 'ours') return { tag: 'reading', title: T('Admetia’s own reading of how hiring works here; no single source was read for it'), href: null, seen: e.checked };
      var s = (e.sources || {})[k];
      return s ? { tag: s[0], title: s[1], href: s[2], seen: s[3] || e.checked } : { tag: 'data', title: k, href: null, seen: e.checked };
    });
  }
  function entryRun(e, lines) {
    var p = el('p', 'claim');
    (lines || []).forEach(function (x, i) {
      if (i) p.appendChild(document.createTextNode(' '));
      p.appendChild(raw('span', 'claim-t', L(x)));
      if (x[2]) p.appendChild(cite(entryNotes(e, x[2])));
    });
    return p;
  }
  function entryRow(k, cell) {
    var row = el('div', 'atlas-item');
    row.appendChild(el('h3', 'item-k', k));
    row.appendChild(cell);
    return row;
  }

  function vocab(list, id) { return (list || []).filter(function (x) { return x.id === id; })[0]; }
  function vname(list, id) { var x = vocab(list, id); return x ? x.name : id; }

  /* The verdict rows of one group: a chip with the verdict, then the line. */
  function entryCustomRows(e, group, skip) {
    var rows = (A.entryCustoms || []).filter(function (C) {
      return (C.g || 'apply') === group && (skip || []).indexOf(C.id) < 0 && (e.customs || []).some(function (x) { return x.k === C.id; });
    });
    if (!rows.length) return null;
    var dl = el('div', 'atlas-items entry-customs');
    rows.forEach(function (C) {
      var x = e.customs.filter(function (y) { return y.k === C.id; })[0];
      var cell = el('div', 'entry-cell');
      var V = vocab(C.values, x.v);
      if (V) cell.appendChild(el('span', 'verdict entry-v cv-' + C.id + '-' + V.id, V.name));
      cell.appendChild(entryRun(e, x.t));
      dl.appendChild(entryRow(C.name, cell));
    });
    return dl;
  }

  /* A row of facts about an employer's programme. */
  function programmeTable(e) {
    var ps = e.programmes || [];
    if (!ps.length) return null;
    var t = el('table', 'life-t entry-prog'), th = el('thead'), tr = el('tr');
    ['Programme', 'Field', 'Intake', 'Applications open', 'Languages', 'International graduates'].forEach(function (h) { tr.appendChild(el('th', null, h)); });
    th.appendChild(tr); t.appendChild(th);
    var tb = el('tbody');
    ps.forEach(function (x) {
      var r = el('tr'), c0 = raw('th', null, x.n);
      c0.appendChild(raw('span', 'prog-o', ' · ' + x.o));
      if (x.ids) c0.appendChild(cite(entryNotes(e, x.ids)));
      r.appendChild(c0);
      var F = vocab(A.entryFields, x.f);
      r.appendChild(raw('td', null, F ? T(F.name) : '—'));
      r.appendChild(raw('td', null, x['in'] ? T('about {n} a year', { n: num(x['in']) }) : T('not stated')));
      r.appendChild(raw('td', null, x.w ? (x.w[0] === x.w[1] ? monthName(x.w[0]) : monthName(x.w[0]) + ' – ' + monthName(x.w[1])) : T('not stated')));
      r.appendChild(raw('td', null, x.lang || '—'));
      r.appendChild(raw('td', null, T(vname(A.entryIntl, x.intl || 'unknown'))));
      tb.appendChild(r);
    });
    t.appendChild(tb);
    var wrap = el('div', 'life-scroll');
    wrap.appendChild(t);
    return wrap;
  }

  /* Graduate outcomes: numbers only, from data/atlas/outcomes.js. */
  function outcomesBlock(e) {
    var O = window.ATLAS_OUTCOMES, C = O && O.country[e.id];
    if (!C) return null;
    var order = [['recentGrad', 'Recent graduates in work'], ['gradUnemp', 'Graduate unemployment'], ['youthUnemp', 'Youth unemployment (15-24)'],
      ['overqual', 'Graduates in jobs below their degree'], ['foreignGrad', 'Foreign-born graduates in work'],
      ['timeToJob', 'Months to a first job'], ['returnOffer', 'Interns kept on']];
    var t = el('table', 'life-t entry-out'), th = el('thead'), tr = el('tr');
    ['Measure', 'Figure', 'What it counts'].forEach(function (h) { tr.appendChild(el('th', null, h)); });
    th.appendChild(tr); t.appendChild(th);
    var tb = el('tbody'), n = 0;
    order.forEach(function (o) {
      var m = C[o[0]];
      if (!m) return;
      n++;
      var r = el('tr');
      r.appendChild(el('th', null, o[1]));
      var v = raw('td', 'out-v', (o[0] === 'timeToJob' ? T('{n} months', { n: num(m.v, 1) }) : num(m.v, 1) + '%') + ' (' + m.year + ')');
      v.appendChild(cite([{ tag: m.tag || 'data', title: m.by, href: m.src, seen: m.seen }]));
      r.appendChild(v);
      r.appendChild(raw('td', null, IT && m.defIt ? m.defIt : T(m.def)));
      tb.appendChild(r);
    });
    if (!n) return null;
    t.appendChild(tb);
    var wrap = el('div', 'life-scroll');
    wrap.appendChild(t);
    var box = el('div', 'entry-cell');
    box.appendChild(wrap);
    var groups = {};
    order.forEach(function (o) { if (C[o[0]]) groups[C[o[0]].group || 'national'] = true; });
    if (groups.national || groups.ilo) {
      box.appendChild(el('p', 'not-rated', 'This country is not in Eurostat’s survey. Graduate and youth unemployment are the ILO’s modelled estimates, the same definition for every country outside Eurostat; any other figure has its own definition and year. Do not set either beside a Eurostat country’s.'));
    } else {
      box.appendChild(el('p', 'not-rated', 'Eurostat’s labour force survey, the same definitions for every country in it, so these figures can be compared with each other. Recent graduates are people with a degree who finished 1 to 3 years ago.'));
    }
    return box;
  }

  /* How hiring works, in parts. The lead, the routes in, the market and the
   * language employers need are open: they are what a reader has to know
   * before deciding anything. The rest is folded under a label that says
   * what it holds, because it matters at one moment (writing the
   * application, reading an offer) or to one field. Nothing is dropped:
   * the parts are the same rows, in the same order, as the single page. */
  function entrySection(e, rec) {
    var box = el('section', 'atlas-entry');
    box.setAttribute('data-notes', T('How hiring works'));
    box.appendChild(sectionHead('How hiring works', null, 'Hiring'));
    var meta = el('p', 'visa-meta');
    meta.appendChild(el('b', null, 'There are many ways into a first job. This is the one most graduates here actually take, and it is rarely “apply on LinkedIn from abroad and hope”.'));
    box.appendChild(meta);
    if (Date.now() > Date.parse(e.review + 'T23:59:59')) {
      box.appendChild(raw('p', 'visa-stale', T('This research is past its review date ({date}): hiring habits may have changed since.', { date: date(e.review) })));
    }

    if (e.lead && e.lead.length) {
      var lead = entryRun(e, e.lead);
      lead.className = 'claim entry-lead';
      box.appendChild(lead);
    }

    if (e.ways && e.ways.length) {
      var waysBox = el('div', 'entry-waysbox');
      var status = el('p', 'filter-status');
      status.setAttribute('aria-live', 'polite');
      var ol = el('ol', 'atlas-items entry-ways');
      var items = e.ways.map(function (w) {
        var li = el('li', 'atlas-item'), body = el('div', 'entry-cell');
        li.appendChild(raw('h4', 'item-k', L(w.name)));
        var tags = el('p', 'entry-tags');
        if (w.r) tags.appendChild(el('span', 'verdict entry-v entry-route', vname(A.entryRoutes, w.r)));
        String(w.p || '').split(/\s+/).filter(Boolean).forEach(function (pid) {
          tags.appendChild(el('span', 'entry-path', vname(A.entryPaths, pid)));
        });
        if (w.basis) tags.appendChild(el('span', 'entry-basis', T('Ranked on: {b}', { b: T(vname(A.entryBasis, w.basis)).toLowerCase() })));
        if (tags.childNodes.length) body.appendChild(tags);
        body.appendChild(entryRun(e, w.t));
        li.appendChild(body);
        ol.appendChild(li);
        return { li: li, paths: String(w.p || '').split(/\s+/).filter(Boolean) };
      });
      /* Which paths these routes serve; the control appears only when
       * choosing one would hide something. */
      var used = (A.entryPaths || []).filter(function (P) { return items.some(function (x) { return x.paths.indexOf(P.id) > -1; }); });
      var narrows = used.some(function (P) { return items.some(function (x) { return x.paths.length && x.paths.indexOf(P.id) < 0; }); });
      function show() {
        var n = 0;
        items.forEach(function (x) {
          /* A route with no path named serves them all. */
          var on = !state.path || !x.paths.length || x.paths.indexOf(state.path) > -1;
          x.li.hidden = !on;
          if (on) n++;
        });
        status.textContent = state.path ? T('{n} of {m} routes serve this path. The ranking is among all {m}.', { n: n, m: items.length }) : '';
        status.hidden = !state.path;
      }
      if (narrows && state.sel.view !== 'all') {
        if (state.path && !used.some(function (P) { return P.id === state.path; })) state.path = '';
        var seg = segmented('Show routes for', [{ id: '', label: 'Every path' }].concat(used.map(function (P) { return { id: P.id, label: P.name }; })), state.path, function (v) {
          state.path = v;
          show();
          try { history.replaceState(null, '', '#' + e.id.toLowerCase() + '/hiring' + (v ? '/' + v : '')); } catch (err) { /* file:// */ }
          refreshNotes();
        });
        seg.classList.add('entry-pathpick');
        waysBox.appendChild(seg);
        waysBox.appendChild(status);
      }
      waysBox.appendChild(ol);
      show();
      box.appendChild(disc('Most people get in through', waysBox, { id: 'routes', open: true, count: T(items.length === 1 ? '{n} route' : '{n} routes, most used first', { n: items.length }) }));
    }

    var market = entryCustomRows(e, 'market', ['sponsorr']);
    if (market) box.appendChild(disc('The market', market, { id: 'market', open: true }));

    if (e.lang && e.lang.length) {
      var ll = el('div', 'atlas-items entry-lang');
      e.lang.forEach(function (x) {
        var F = vocab(A.entryFields, x.f), cell = el('div', 'entry-cell');
        cell.appendChild(el('span', 'verdict entry-v cv-lang-' + x.v, vname(A.entryLang, x.v)));
        if (x.lv) cell.appendChild(raw('span', 'entry-lv', x.lv));
        cell.appendChild(entryRun(e, x.t));
        ll.appendChild(entryRow(F ? F.name : x.f, cell));
      });
      box.appendChild(disc('Language at work', ll, { id: 'language', open: true, count: T('by field') }));
    }

    if (e.cycle && e.cycle.length) box.appendChild(disc('When the economy turns', entryRun(e, e.cycle), { id: 'cycle' }));
    /* One part per group (business, computing): each field the research
     * covers, then the fields it found nothing specific for. */
    (A.entryGroups || [{ id: null, name: 'Where a field works differently' }]).forEach(function (Gr) {
      var inGroup = (A.entryFields || []).filter(function (F) { return !Gr.id || F.g === Gr.id; });
      var fields = inGroup.filter(function (F) { return (e.fields || []).some(function (x) { return x.f === F.id; }); });
      if (!fields.length) return;
      var fc = el('div', 'entry-cell');
      fields.forEach(function (F) {
        e.fields.filter(function (x) { return x.f === F.id; }).forEach(function (x) {
          var one = el('div', 'entry-field');
          one.appendChild(el('p', 'entry-f', F.name));
          one.appendChild(entryRun(e, x.t));
          fc.appendChild(one);
        });
      });
      var missing = inGroup.filter(function (F) { return fields.indexOf(F) < 0; }).map(function (F) { return T(F.name); });
      if (missing.length) fc.appendChild(raw('p', 'not-rated', T('No field-specific account found for: {list}. The general route above applies as far as the research knows.', { list: missing.join(', ') })));
      box.appendChild(disc(Gr.name, fc, { id: 'fields-' + (Gr.id || 'all'), count: fields.map(function (F) { return T(F.name); }).join(' · ') }));
    });
    if (e.schools && e.schools.length) box.appendChild(disc('Schools and people that open doors', entryRun(e, e.schools), { id: 'schools' }));
    if (e.events && e.events.length) box.appendChild(disc('Where students meet employers', entryRun(e, e.events), { id: 'events' }));

    var apply = entryCustomRows(e, 'apply');
    if (apply) box.appendChild(disc('How to apply', apply, { id: 'apply', count: T('photo, CV length, cover letter, references, certificates, salary expectation, checks, how doors open, applying from abroad, language') }));

    var rows = e.rows || {};
    (A.entryRows || []).forEach(function (R) {
      var lines = rows[R.id];
      if (R.id === 'sponsor') {
        var sp = (e.customs || []).filter(function (x) { return x.k === 'sponsorr'; })[0];
        if (!sp && !(lines && lines.length)) return;
        var cell = el('div', 'entry-cell');
        var C = vocab(A.entryCustoms, 'sponsorr'), V = sp && C && vocab(C.values, sp.v);
        if (V) cell.appendChild(el('span', 'verdict entry-v cv-sponsorr-' + V.id, V.name));
        if (sp) cell.appendChild(entryRun(e, sp.t));
        if (lines && lines.length) cell.appendChild(entryRun(e, lines));
        /* The verdict stays in the label: whether employers sponsor is a
         * blocker a reader should see without opening anything. */
        box.appendChild(disc(R.name, cell, { id: R.id, extra: V ? el('span', 'verdict entry-v cv-sponsorr-' + V.id, V.name) : null }));
        return;
      }
      if (!lines || !lines.length) return;
      box.appendChild(disc(R.name, entryRun(e, lines), { id: R.id }));
    });
    var pt = programmeTable(e);
    if (pt) box.appendChild(disc('Employers with programmes', pt, { id: 'programmes', count: T('intake, window, languages, international graduates') }));

    var ob = outcomesBlock(e);
    if (ob || (e.outcomes && e.outcomes.length)) {
      var oc = el('div', 'atlas-items entry-more');
      if (ob) oc.appendChild(entryRow('In numbers', ob));
      if (e.outcomes && e.outcomes.length) oc.appendChild(entryRow('What the numbers do not show', entryRun(e, e.outcomes)));
      box.appendChild(disc('Graduate outcomes', oc, { id: 'outcomes' }));
    }
    var cmp = el('p', 'atlas-note');
    var pa = raw('a', null, T('Plan your route in this country'));
    pa.href = 'hiring.html#' + e.id.toLowerCase() + '/graduated/first';
    cmp.appendChild(pa);
    cmp.appendChild(document.createTextNode(' · '));
    var pb = raw('a', null, T('Compare all 46 countries'));
    pb.href = 'hiring.html';
    cmp.appendChild(pb);
    box.appendChild(cmp);
    return box;
  }

  /* Life there: what daily life is like, each topic from one source that
   * covers every country (data/atlas/life.js, built by tools/atlas-life.js),
   * so pages compare. Every row says whether it describes the whole country
   * or each city: city figures are read at a hub's city-centre coordinates,
   * one line per hub; country figures are national. */
  var LIFE_NATIVE = ['GB', 'IE', 'US', 'CA', 'AU', 'NZ'];
  function lifeNote(k, extra) {
    var S = window.ATLAS_LIFE.sources[k];
    return { tag: S.tag, title: S.by + (extra ? ' (' + extra + ')' : ''), href: S.src, seen: window.ATLAS_LIFE.seen };
  }
  /* nth of how many countries with a figure, counted high to low or low to
   * high. */
  function lifeRank(key, id, low) {
    var C = window.ATLAS_LIFE.country, xs = [];
    function get(c) { return key.split('.').reduce(function (o, k) { return o && o[k]; }, c); }
    Object.keys(C).forEach(function (k) { var x = get(C[k]); if (x && x.v != null) xs.push(x.v); });
    var v = get(C[id]).v;
    var n = 1 + xs.filter(function (x) { return low ? x < v : x > v; }).length;
    return { n: n, of: xs.length };
  }
  function hm(h) {
    var hh = Math.floor(h), mm = Math.round((h - hh) * 60);
    if (mm === 60) { hh++; mm = 0; }
    return T('{h} h {m} min', { h: hh, m: mm });
  }
  function utc(o) {
    var s = o < 0 ? '−' : '+', a = Math.abs(o), hh = Math.floor(a), mm = Math.round((a - hh) * 60);
    return 'UTC' + s + hh + (mm ? ':' + String(mm).padStart(2, '0') : '');
  }
  function vsCet(d) {
    if (!d) return T('same as Central European Time');
    return T(d > 0 ? '{n} h ahead of Central European Time' : '{n} h behind Central European Time', { n: num(Math.abs(d), Math.abs(d) % 1 ? 1 : 0) });
  }
  function ord(n) {
    if (IT) return n + 'º';
    var t = n % 100, u = n % 10;
    return n + (t > 10 && t < 14 ? 'th' : u === 1 ? 'st' : u === 2 ? 'nd' : u === 3 ? 'rd' : 'th');
  }
  /* "the highest" for first place, "17th highest" after. */
  function rankText(n, w) { return n === 1 ? T('the ' + w) : ord(n) + ' ' + T(w); }
  function monthName(m) { var s = new Date(2020, m - 1, 15).toLocaleString(locale(), { month: 'long' }); return s.charAt(0).toUpperCase() + s.slice(1); }
  function scopeChip(city, label) { return label ? raw('span', 'scope scope-area', label) : el('span', 'scope ' + (city ? 'scope-city' : 'scope-country'), city ? 'By city' : 'Whole country'); }

  function lifeSection(rec) {
    var L = window.ATLAS_LIFE, C = L.country[rec.id] || {};
    var box = el('section', 'atlas-life');
    box.setAttribute('data-notes', T('Life there'));
    box.appendChild(sectionHead('Life there', T('each line says whether it is about the whole country or each city'), 'Life there'));
    box.appendChild(el('p', 'life-lead', 'City figures are read at each hub’s city centre; country figures are national averages. Each topic comes from one source for all 46 countries, so pages compare; office culture is the exception, because no single source covers it, so each country cites its own pages.'));
    var list = el('div', 'atlas-items life-list');
    function row(title, city, both, area) {
      var r = el('div', 'atlas-item');
      var k = el('div', 'life-k');
      k.appendChild(el('h3', 'item-k', title));
      var chips = el('div', 'scope-set');
      if (both) chips.appendChild(scopeChip(false));
      chips.appendChild(scopeChip(city, area));
      k.appendChild(chips);
      r.appendChild(k);
      var cell = el('div', 'life-cell');
      r.appendChild(cell);
      list.appendChild(r);
      return cell;
    }
    function line(cell, text, notes) {
      var p = el('p', 'claim');
      p.appendChild(raw('span', 'claim-t', text));
      if (notes) p.appendChild(cite(notes));
      cell.appendChild(p);
      return p;
    }
    /* A table of hubs: cols [[label, fn(hubData, hub) → text]]. */
    function hubTable(cell, cols, notes, keep) {
      var t = el('table', 'life-t'), th = el('thead'), tr = el('tr');
      tr.appendChild(el('th', null, 'City'));
      cols.forEach(function (c) { tr.appendChild(raw('th', null, T(c[0]))); });
      th.appendChild(tr); t.appendChild(th);
      var tb = el('tbody'), n = 0;
      rec.hubs.forEach(function (h) {
        var d = L.hub[rec.id + '/' + h.id];
        if (!d || (keep && !keep(d))) return;
        var r = el('tr');
        r.appendChild(raw('th', null, h.name));
        cols.forEach(function (c) { r.appendChild(raw('td', null, c[1](d, h))); });
        tb.appendChild(r); n++;
      });
      t.appendChild(tb);
      if (!n) return null;
      var wrap = el('div', 'life-scroll');
      wrap.appendChild(t);
      cell.appendChild(wrap);
      if (notes) { var s = el('p', 'cmp-src'); s.appendChild(el('span', null, 'Sources')); s.appendChild(raw('span', null, ' ')); s.appendChild(cite(notes, true)); cell.appendChild(s); }
      return t;
    }
    var noData = T('no figure in this source');

    /* Climate, by city. */
    var cl = row('Climate', true);
    hubTable(cl, [
      ['Coldest month', function (d) { return d.climate ? T('{m}: {t} °C', { m: monthName(d.climate.cold.m), t: num(d.climate.cold.mean, 1) }) : noData; }],
      ['Warmest month', function (d) { return d.climate ? T('{m}: {t} °C', { m: monthName(d.climate.warm.m), t: num(d.climate.warm.mean, 1) }) : noData; }],
      ['Rain a year', function (d) { return d.climate ? T('{n} mm', { n: num(d.climate.rain) }) : noData; }],
      ['Cloud cover', function (d) { return d.climate ? num(d.climate.cloud) + '%' : noData; }]
    ], [lifeNote('climate')]);

    /* Daylight, by city. */
    var dl = row('Daylight', true);
    hubTable(dl, [
      ['Shortest day', function (d) { return hm(d.daylight.min); }],
      ['Longest day', function (d) { return hm(d.daylight.max); }]
    ], [lifeNote('daylight')]);

    /* Air, by city. */
    var ar = row('Air quality', true);
    hubTable(ar, [
      ['Fine particles (PM2.5)', function (d) { return d.air && d.air.pm25 != null ? T('{n} µg/m³', { n: num(d.air.pm25, 1) }) : noData; }],
      ['Against the WHO guideline', function (d) { return d.air && d.air.pm25 != null ? T('{n} × the guideline', { n: num(d.air.pm25 / 5, 1) }) : noData; }]
    ], [lifeNote('air'), lifeNote('airGuide')]);

    /* Time, by city, but hubs that share their offsets are one line: a
     * country in one zone reads as a single sentence, a country in several
     * as one line per zone with its cities. */
    var tm = row('Time zone', true), tgroups = [], tbyKey = {};
    rec.hubs.forEach(function (h) {
      var d = L.hub[rec.id + '/' + h.id], t = d && d.time;
      if (!t) return;
      var key = [t.jan, t.jul, t.vsJan, t.vsJul].join('|');
      if (!tbyKey[key]) { tbyKey[key] = { t: t, hubs: [] }; tgroups.push(tbyKey[key]); }
      tbyKey[key].hubs.push(h.name);
    });
    function zoneText(t) {
      var u = t.jan === t.jul ? T('{u} all year', { u: utc(t.jan) }) : T('{a} in January and {b} in July', { a: utc(t.jan), b: utc(t.jul) });
      var c, x = t.vsJan, y = t.vsJul, h = function (d) { return num(Math.abs(d), Math.abs(d) % 1 ? 1 : 0); };
      if (x === y) c = vsCet(x);
      else if (x > 0 && y > 0) c = T('{a} h ahead of Central European Time in January and {b} h in July', { a: h(x), b: h(y) });
      else if (x < 0 && y < 0) c = T('{a} h behind Central European Time in January and {b} h in July', { a: h(x), b: h(y) });
      else c = T('{a} in January and {b} in July', { a: vsCet(x), b: vsCet(y) });
      return u + ', ' + c;
    }
    if (tgroups.length === 1) {
      var g0 = tgroups[0];
      line(tm, (g0.hubs.length > 1 ? T('All {n} hubs', { n: g0.hubs.length }) : g0.hubs[0]) + ': ' + zoneText(g0.t) + '.', [lifeNote('time')]);
    } else if (tgroups.length > 1) {
      var tw = el('div', 'life-scroll'), tt = el('table', 'life-t'), tb = el('tbody');
      tgroups.forEach(function (g) {
        var r = el('tr');
        r.appendChild(raw('th', null, g.hubs.join(', ')));
        r.appendChild(raw('td', null, zoneText(g.t)));
        tb.appendChild(r);
      });
      tt.appendChild(tb); tw.appendChild(tt); tm.appendChild(tw);
      var ts = el('p', 'cmp-src'); ts.appendChild(el('span', null, 'Sources')); ts.appendChild(raw('span', null, ' ')); ts.appendChild(cite([lifeNote('time')], true)); tm.appendChild(ts);
    } else line(tm, noData, [lifeNote('time')]);

    /* Language in daily life, whole country: the official languages and the
     * share who speak them, then English below. */
    var lg = row('Language in daily life', false), LG = C.language;
    if (LG && LG.length) {
      var dn = null;
      try { dn = new Intl.DisplayNames([locale()], { type: 'language' }); } catch (e) { dn = null; }
      var nameOf = function (c) {
        if (c === 'gsw') return T('Swiss German');
        var n = null; try { n = dn && dn.of(c); } catch (e) { n = null; }
        if (!n || n === c) return c;
        return IT ? n : n.charAt(0).toUpperCase() + n.slice(1);
      };
      var national = LG.filter(function (x) { return x.st !== 'official_regional'; }), regional = LG.filter(function (x) { return x.st === 'official_regional'; });
      var fmt = function (xs) { return xs.map(function (x) { return T('{l} (spoken by about {p}%)', { l: nameOf(x.c), p: x.pct }); }).join(', '); };
      if (national.length) line(lg, T(national.length > 1 ? 'Official languages: {list}.' : 'Official language: {list}.', { list: fmt(national) }), [lifeNote('language')]);
      if (regional.length) line(lg, T('Official in some regions: {list}.', { list: fmt(regional) }), [lifeNote('language')]);
      lg.appendChild(el('p', 'not-rated', 'Shares are Unicode CLDR’s estimates of how many people speak each language. Many workplaces run in another language: see English below and Working there.'));
    } else line(lg, noData, [lifeNote('language')]);

    /* English: the country, and each city EF scores. */
    var E = C.english, edition = L.sources.english.edition;
    var efCity = rec.hubs.some(function (h) { var d = L.hub[rec.id + '/' + h.id]; return d && d.english && d.english.length; });
    var en = row('English', efCity, efCity);
    if (E && E.score) {
      line(en, T('Whole country: EF English Proficiency Index {y} score {s} ({b}), {r} in the world.', { y: edition, s: E.score, b: T(E.band), r: ord(E.rank) }),
        [{ tag: 'data', title: L.sources.english.by, href: E.src, seen: L.seen }]);
      var t = hubTable(en, [['EF city score', function (d) { return d.english.map(function (x) { return x.city + ' ' + x.score; }).join(' · '); }]],
        null, function (d) { return d.english && d.english.length; });
      if (!t) en.appendChild(el('p', 'not-rated', 'EF publishes no score for this country’s hub cities.'));
    } else if (E && E.native || LIFE_NATIVE.indexOf(rec.id) > -1) {
      line(en, T('Whole country: EF does not rank countries where English is the main language, so it publishes no score here.'), [lifeNote('english')]);
    } else {
      line(en, T('Whole country: EF publishes no English proficiency score for this country.'), [lifeNote('english')]);
    }

    /* How locals come across to foreign residents, whole country: a
     * perception survey, said as such, never a judgement of a people. */
    var pp = row('How locals come across', false), P = C.people, PS = L.sources.people;
    if (P) {
      var third = P.friendly <= Math.round(P.of / 3) ? 'among the friendliest third' : P.friendly <= Math.round(P.of * 2 / 3) ? 'in the middle third' : 'among the least friendly third';
      line(pp, T('Foreign residents surveyed by InterNations in {y} rank locals’ friendliness {n} of {of} destinations: {third}.', { y: P.year, n: ord(P.friendly), of: P.of, third: T(third) }), [lifeNote('people')]);
      line(pp, T('Making local friends: {a} of {of}. Feeling welcome and at home: {b} of {of}.', { a: ord(P.friends), b: ord(P.welcome), of: P.of }), [lifeNote('people')]);
      pp.appendChild(el('p', 'not-rated', 'How foreign residents who answered the survey see locals, not a measure of a people: experiences vary by city, group and person.'));
    } else line(pp, T('Not among the {of} destinations InterNations ranked in {y}.', { of: PS.of, y: PS.year }), [lifeNote('people')]);

    /* Prices, whole country. */
    var pr = row('Prices', false);
    if (C.prices) {
      var rp = lifeRank('prices', rec.id, false);
      line(pr, T('Price level {v} (US = 100) in {y}: {rank} of the {of} countries.', { v: C.prices.v, y: C.prices.year, rank: rankText(rp.n, 'highest'), of: rp.of }), [lifeNote('prices')]);
    } else line(pr, noData, [lifeNote('prices')]);

    /* Safety, whole country. */
    var sf = row('Safety', false);
    if (C.safety) {
      var rs = lifeRank('safety', rec.id, true);
      line(sf, T('{v} intentional homicides per 100,000 people in {y}: {rank} of the {of} countries with a figure.', { v: num(C.safety.v, 1), y: C.safety.year, rank: rankText(rs.n, 'lowest'), of: rs.of }), [lifeNote('safety')]);
    } else line(sf, T('No figure for this country in the UNODC series the World Bank publishes.'), [lifeNote('safety')]);

    /* Crime recorded by the police, whole country (England and Wales for
     * the UK): each offence's rate and its change over about five years.
     * Not ranked: countries define and record offences differently. */
    var K = C.crime;
    var cr = row('Crime recorded by the police', false, false, K && K.area ? T(K.area) : null);
    if (K) {
      [['assault', 'Serious assault'], ['robbery', 'Robbery'], ['theft', 'Theft'], ['burglary', 'Burglary']].forEach(function (o) {
        var x = K[o[0]];
        if (!x) return;
        var trend = x.change == null ? '' : ' ' + (x.change === 0 ? T('unchanged since {y}', { y: x.from }) :
          T(x.change > 0 ? 'up {n}% since {y}' : 'down {n}% since {y}', { n: Math.abs(x.change), y: x.from }));
        line(cr, T('{what}: {v} per 100,000 people in {y}', { what: T(o[1]), v: num(x.v, x.v < 10 ? 1 : 0), y: x.year }) + (trend ? ',' + trend : '') + '.', [lifeNote('crime')]);
      });
      cr.appendChild(el('p', 'not-rated', 'Each country defines and records these offences differently, and people report crime more readily in some places than others: compare a country with itself over time, not countries with each other. The homicide rate above is the most comparable measure.'));
    } else line(cr, T('No recent figure for this country in UNODC’s crime statistics.'), [lifeNote('crime')]);

    /* Working hours, whole country. */
    var wh = row('Working hours', false);
    if (C.hours) {
      var rh = lifeRank('hours', rec.id, true);
      line(wh, T('People in work put in {v} hours a week on average in {y}: {rank} of the {of} countries with a figure.', { v: num(C.hours.v, 1), y: C.hours.year, rank: rankText(rh.n, 'shortest'), of: rh.of }), [lifeNote('hours')]);
    } else line(wh, T('No figure for this country in ILOSTAT.'), [lifeNote('hours')]);

    /* Office culture, whole country: the legal minimum of paid leave and
     * public holidays, then two sentences from business-culture guides. Each
     * line cites its own page; the guides' sentences are tagged as
     * practitioner consensus, never as a rule. */
    var oc = row('Office culture', false), CU = window.ATLAS_CULTURE && window.ATLAS_CULTURE.country[rec.id];
    function cuNote(x) { return { tag: x.tag, title: x.by, href: x.src, seen: window.ATLAS_CULTURE.seen }; }
    if (CU) {
      var lv = CU.leave, hd = CU.holidays;
      if (lv && lv.days != null && hd && hd.days != null) line(oc, T('By law, at least {n} paid days of annual leave a year, plus {m} public holidays.', { n: num(lv.days), m: num(hd.days, hd.days % 1 ? 1 : 0) }), [cuNote(lv), cuNote(hd)]);
      else if (lv && lv.days != null) line(oc, T('By law, at least {n} paid days of annual leave a year.', { n: num(lv.days) }), [cuNote(lv)]);
      else if (hd && hd.days != null) line(oc, T('{m} public holidays a year.', { m: num(hd.days, hd.days % 1 ? 1 : 0) }), [cuNote(hd)]);
      if (lv && lv.days == null && lv.none) line(oc, T('There is no national legal minimum of paid annual leave for private employers: it is set by the contract.'), [cuNote(lv)]);
      if (CU.day) line(oc, CU.day[IT ? 'it' : 'en'], [cuNote(CU.day)]);
      if (CU.style) line(oc, CU.style[IT ? 'it' : 'en'], [cuNote(CU.style)]);
      oc.appendChild(el('p', 'not-rated', 'Leave and holiday counts are legal minimums for a full-time job on a five-day week: contracts, regions and years of service often add days. The sentences on the working day and office style are what business guides report, not rules: workplaces differ.'));
    } else oc.appendChild(el('p', 'not-rated', 'Not researched yet for this country.'));

    /* Health care, whole country. */
    var hc = row('Health care', false);
    if (C.oop) line(hc, T('Patients pay {v}% of health spending out of their own pocket ({y}).', { v: num(C.oop.v, 1), y: C.oop.year }), [lifeNote('oop')]);
    if (C.life) line(hc, T('Life expectancy at birth is {v} years ({y}).', { v: num(C.life.v, 1), y: C.life.year }), [lifeNote('life')]);
    var Q = C.care || {};
    if (Q.uhc) { var ru = lifeRank('care.uhc', rec.id, false); line(hc, T('Essential health services reach {v} on the UHC service coverage index (0–100, {y}): {rank} of the {of} countries.', { v: num(Q.uhc.v), y: Q.uhc.year, rank: rankText(ru.n, 'highest'), of: ru.of }), [lifeNote('uhc')]); }
    if (Q.doctors && Q.beds) line(hc, T('{d} doctors and {b} hospital beds per 1,000 people ({y}).', { d: num(Q.doctors.v, 1), b: num(Q.beds.v, 1), y: Q.doctors.year + (Q.beds.year !== Q.doctors.year ? ', ' + Q.beds.year : '') }), [lifeNote('doctors'), lifeNote('beds')]);
    else if (Q.doctors) line(hc, T('{d} doctors per 1,000 people ({y}).', { d: num(Q.doctors.v, 1), y: Q.doctors.year }), [lifeNote('doctors')]);
    else if (Q.beds) line(hc, T('{b} hospital beds per 1,000 people ({y}).', { b: num(Q.beds.v, 1), y: Q.beds.year }), [lifeNote('beds')]);
    if (Q.ncd) { var rn = lifeRank('care.ncd', rec.id, true); line(hc, T('The chance of dying between 30 and 70 from heart disease, cancer, diabetes or chronic lung disease is {v}% ({y}): {rank} of the {of} countries.', { v: num(Q.ncd.v, 1), y: Q.ncd.year, rank: rankText(rn.n, 'lowest'), of: rn.of }), [lifeNote('ncd')]); }
    if (!C.oop && !C.life && !Q.uhc && !Q.doctors && !Q.beds && !Q.ncd) line(hc, T('No figure for this country in the World Bank’s health series.'), [lifeNote('oop')]);
    else hc.appendChild(el('p', 'not-rated', 'These describe the health system as a whole, not any one hospital or doctor. Whether a newcomer can join the public scheme is covered under First weeks, health cover.'));

    box.appendChild(list);
    return box;
  }

  /* First weeks: the same seven steps on every page (A.arrivalSteps), in
   * the order most people meet them, for the passport picked in Visas and
   * permits: what to do, where and by when, each line citing the register.
   * A step the research has not covered for this passport says so. */
  function arrivalSection(rec, v) {
    var box = el('section', 'atlas-arrival');
    box.setAttribute('data-notes', T('First weeks'));
    var head = sectionHead('First weeks', null, 'First weeks');
    var showing = raw('span', 'count', '');
    head.appendChild(showing);
    box.appendChild(head);
    if (state.sel.view === 'arrival') {
      var tools = el('div', 'atlas-tools');
      tools.appendChild(passportControl());
      box.appendChild(tools);
    }
    var body = el('div');
    box.appendChild(body);
    function draw() {
      body.textContent = '';
      var pid = passport(), P = A.passportById[pid];
      showing.textContent = T('in the order most people do them') + ' · ' + showingFor(P);
      if (!v || !(v.arrival || []).length) {
        body.appendChild(el('p', 'atlas-note', 'The first-weeks research for this country could not be loaded. Check your connection and try again.'));
      } else if (A.isHome(pid, rec.id)) {
        body.appendChild(el('p', 'atlas-note', 'This is your own country, so there are no first steps to describe. Pick another passport to see what newcomers do.'));
      } else if (!A.inScope(pid, rec.id)) {
        body.appendChild(el('p', 'atlas-note', state.sel.view === 'all' ? 'Outside Admetia’s scope for this passport, as in Visas and permits above.' : 'Outside Admetia’s scope for this passport, as Visas and permits explains.'));
      } else {
        var list = el('ol', 'atlas-items atlas-steps');
        /* The same steps as a line to follow: the way in first (it differs
         * by passport), then each task in order, each a link to its text
         * below. A step the research does not cover for this passport is
         * marked, not skipped. */
        var seq = el('ol', 'move-seq');
        var first = el('li', 'move-step move-entry');
        var free = v.free && forPassport(v.free, pid);
        first.appendChild(el('span', 'move-k', 'The way in'));
        var fa = raw('a', null, T(free ? 'No permit needed: you move freely' : 'A visa or permit comes first'));
        fa.href = '#' + rec.id.toLowerCase() + '/visas';
        first.appendChild(fa);
        seq.appendChild(first);
        var stepNo = 0;
        A.arrivalSteps.forEach(function (S) {
          var xs = v.arrival.filter(function (x) { return x.k === S.id && forPassport(x, pid); });
          if (!xs.length) return;
          stepNo++;
          var st = el('li', 'move-step');
          st.appendChild(raw('span', 'move-k', T('Step {n}', { n: stepNo })));
          var sa = el('a', null, S.name);
          sa.href = '#' + rec.id.toLowerCase() + '/arrival/' + S.id;
          sa.addEventListener('click', function (ev) { ev.preventDefault(); goPart(S.id); });
          st.appendChild(sa);
          if (xs.every(function (x) { return x.none; })) st.appendChild(el('span', 'move-none', 'Not covered yet'));
          seq.appendChild(st);
          var row = el('li', 'atlas-item');
          row.id = 'part-' + S.id;
          row.appendChild(el('h3', 'item-k', S.name));
          var cell = el('div', 'arrival-cell');
          xs.forEach(function (x) {
            if (x.none) cell.appendChild(el('p', 'not-rated', 'Not covered by Admetia’s research for this passport yet.'));
            else cell.appendChild(visaRun(v, x.t));
          });
          row.appendChild(cell);
          list.appendChild(row);
        });
        if (stepNo) {
          var fig = el('figure', 'fig move-fig');
          fig.appendChild(seq);
          fig.appendChild(raw('figcaption', null, T('The usual order for the passport shown ({p}). Each step links to what it involves, below; sources are numbered there.', { p: T(P.label) })));
          body.appendChild(fig);
        }
        body.appendChild(list);
      }
      refreshNotes();
    }
    draw();
    document.addEventListener('atlas:passport', draw);
    var before = page._cleanup;
    page._cleanup = function () { if (before) before(); document.removeEventListener('atlas:passport', draw); };
    return box;
  }

  /* ------------------------------------------------------------------ */
  /* Hubs                                                                */
  /* ------------------------------------------------------------------ */

  /* The country, fitted to its main landmass and its hubs (France without
   * its overseas departments, the US without Hawaii, unless a hub is
   * there), on the same Mercator projection as the world map, with the
   * land around it hatched for context. Every country gets one, a
   * city-state included, and it zooms like the world map. */
  function hubMap(rec, hubId) {
    var wrap = el('div', 'hub-wrap');
    var s = shapeById[rec.id];
    var geo = s.geo;
    var wraps = geo.some(function (r) { return r.some(function (p) { return p[0] < -90; }); }) &&
      geo.some(function (r) { return r.some(function (p) { return p[0] > 90; }); });
    function fix(lon) { return wraps && lon < 0 ? lon + 360 : lon; }
    var rings = geo.map(function (r) { return r.map(function (p) { return [fix(p[0]), p[1]]; }); });
    var areas = rings.map(ringArea), big = rings[areas.indexOf(Math.max.apply(null, areas))];
    var hubGeo = rec.hubs.map(function (h) { return [fix(h.lon), h.lat]; });
    var core = bboxOf(big.concat(hubGeo));
    var px = (core[2] - core[0]) * 0.1, py = (core[3] - core[1]) * 0.1;
    var near = [core[0] - px, core[1] - py, core[2] + px, core[3] + py];
    var kept = rings.filter(function (r) {
      var b = bboxOf(r);
      return b[0] <= near[2] && b[2] >= near[0] && b[1] <= near[3] && b[3] >= near[1];
    });
    function proj(lon, lat) { return mercator(fix(lon), lat); }
    var pr = kept.map(function (r) { return r.map(function (p) { return proj(p[0], p[1]); }); });
    var b = bboxOf([].concat.apply([], pr).concat(rec.hubs.map(function (h) { return proj(h.lon, h.lat); })));
    /* At least about two degrees across, so Singapore or Malta is a place on
     * a map, not a shape filling the frame. */
    var minSpan = 3.5;
    if (b[2] - b[0] < minSpan) { var cx = (b[0] + b[2]) / 2; b[0] = cx - minSpan / 2; b[2] = cx + minSpan / 2; }
    if (b[3] - b[1] < minSpan * 0.7) { var cy = (b[1] + b[3]) / 2; b[1] = cy - minSpan * 0.35; b[3] = cy + minSpan * 0.35; }
    var pad = Math.max(b[2] - b[0], b[3] - b[1]) * 0.06;
    var box = [b[0] - pad, b[1] - pad, b[2] - b[0] + 2 * pad, b[3] - b[1] + 2 * pad];

    /* Neighbouring land, hatched: every other shape with a ring near the frame. */
    var around = [box[0] - box[2], box[1] - box[3], box[0] + 2 * box[2], box[1] + 2 * box[3]];
    var land = [];
    shapes.forEach(function (o) {
      if (o.id === rec.id) return;
      o.geo.forEach(function (r) {
        var q = r.map(function (p) { return proj(p[0], p[1]); }), rb = bboxOf(q);
        if (rb[0] <= around[2] && rb[2] >= around[0] && rb[1] <= around[3] && rb[3] >= around[1]) land.push(q);
      });
    });

    var fig = el('figure', 'atlas-map hub-map');
    var sv = svg('svg', { 'class': 'atlas-svg', viewBox: box.join(' '), 'aria-hidden': 'true' });
    var defs = svg('defs');
    var hh = svg('pattern', { id: 'hub-hatch', patternUnits: 'userSpaceOnUse', patternTransform: 'rotate(45)' });
    hh.appendChild(svg('rect', { 'class': 'hatch-bg' }));
    hh.appendChild(svg('line', { x1: '0', y1: '0', x2: '0', 'class': 'hatch-line' }));
    defs.appendChild(hh);
    sv.appendChild(defs);
    /* Parallels and meridians at a round step that gives a handful of lines. */
    var spanDeg = (core[2] - core[0]) * 2;
    var step = [1, 2, 5, 10, 15, 30].filter(function (x) { return spanDeg / x <= 9; })[0] || 30;
    sv.appendChild(graticule(function (lon, lat) { return proj(lon, lat); },
      Math.floor((core[0] - spanDeg) / step) * step, Math.ceil((core[2] + spanDeg) / step) * step,
      Math.max(-80, core[1] - spanDeg), Math.min(84, core[3] + spanDeg), step, function (lon) {
        return wraps && lon < 0 ? lon + 360 : lon;
      }));
    if (land.length) sv.appendChild(svg('path', { d: pathOf(land), 'class': 'land', fill: 'url(#hub-hatch)' }));
    sv.appendChild(svg('path', { d: pathOf(pr), 'class': 'cty solo' }));
    fig.appendChild(sv);
    var layer = el('div', 'atlas-marks');
    fig.appendChild(layer);
    var mapCol = el('div', 'hub-mapcol');
    mapCol.appendChild(fig);
    mapCol.appendChild(hubLegend(rec));
    wrap.appendChild(mapCol);

    /* Marker size follows population where every hub has one (the area of
     * the square, so a city twice the size is not drawn four times as big). */
    var pops = rec.hubs.map(function (h) { return h.metrics && h.metrics.pop ? h.metrics.pop.v : null; });
    var maxPop = Math.max.apply(null, pops.map(function (v) { return v || 0; }));
    function sizeOf(h) {
      var v = h.metrics && h.metrics.pop ? h.metrics.pop.v : null;
      if (!v || !maxPop || rec.hubs.length < 2) return 14;
      return Math.round(9 + 15 * Math.sqrt(v / maxPop));
    }

    var cur = box.slice();
    function apply(z) {
      cur = z;
      sv.setAttribute('viewBox', z.map(function (n) { return n.toFixed(3); }).join(' '));
      sv.style.setProperty('--u', (z[2] / 1000).toFixed(5));
      var ps = (z[2] / 120).toFixed(4);
      hh.setAttribute('width', ps); hh.setAttribute('height', ps);
      hh.firstChild.setAttribute('width', ps); hh.firstChild.setAttribute('height', ps);
      hh.lastChild.setAttribute('y2', ps);
      hh.lastChild.style.strokeWidth = (ps * 0.4).toFixed(4);
    }
    var side = el('div', 'hub-side');
    side.appendChild(el('p', 'item-k', 'Pick a hub'));
    var hl = el('ul', 'hub-list');
    var detail = el('div', 'hub-detail');
    var current = rec.hubs.filter(function (h) { return h.id === hubId; })[0] || rec.hubs[0];

    function select(h, focusDetail) {
      current = h;
      detail.textContent = '';
      detail.appendChild(hubDetail(rec, h, false));
      refreshNotes();
      Array.prototype.forEach.call(hl.querySelectorAll('button'), function (x) {
        x.setAttribute('aria-pressed', x.getAttribute('data-hub') === h.id ? 'true' : 'false');
      });
      /* The picked hub's name is placed first, so the markers are laid out again. */
      if (layer.childNodes.length) place();
      /* A hub the reader picked goes in the address, so it can be shared and
       * survives a reload; the one shown by default does not. */
      if (focusDetail) {
        var want = '#' + rec.id.toLowerCase() + '/' + h.id;
        if (location.hash !== want) history.replaceState(null, '', want);
        var t = detail.querySelector('h3');
        if (t) t.focus();
      }
    }

    rec.hubs.forEach(function (h) {
      var li = el('li');
      var b = raw('button', 'hub-b', h.name);
      b.type = 'button';
      b.setAttribute('data-hub', h.id);
      b.appendChild(raw('span', 'hub-k', T(h.knownFor)));
      b.addEventListener('click', function () { select(h, true); });
      b.addEventListener('focus', function () { hoverHub(h.id, true); });
      b.addEventListener('blur', function () { hoverHub(h.id, false); });
      li.appendChild(b);
      hl.appendChild(li);
    });
    side.appendChild(hl);
    wrap.appendChild(side);
    wrap.appendChild(detail);

    function hoverHub(id, on) {
      Array.prototype.forEach.call(layer.querySelectorAll('.mk'), function (x) {
        if (x.getAttribute('data-hub') === id) x.classList.toggle('hover', on);
      });
    }

    function place() {
      layer.textContent = '';
      var r = sv.getBoundingClientRect();
      if (!r.width) return;
      var f = fitOf(r, cur);
      /* Only the hubs inside the frame: a hub panned out of view is not
       * pinned to the edge with a line running off the map. */
      var items = rec.hubs.map(function (h) {
        var p = proj(h.lon, h.lat);
        return { h: h, x0: f.x(p[0]), y0: f.y(p[1]), size: sizeOf(h) };
      }).filter(function (m) { return m.x0 >= -4 && m.y0 >= -4 && m.x0 <= r.width + 4 && m.y0 <= r.height + 4; });
      var taken = [];
      spread(items, r.width, r.height).forEach(function (m) {
        if (Math.abs(m.x - m.x0) > 3 || Math.abs(m.y - m.y0) > 3) {
          var line = el('i', 'mk-lead');
          var dx = m.x - m.x0, dy = m.y - m.y0;
          line.style.left = m.x0 + 'px'; line.style.top = m.y0 + 'px';
          line.style.width = Math.sqrt(dx * dx + dy * dy) + 'px';
          line.style.transform = 'rotate(' + Math.atan2(dy, dx) + 'rad)';
          layer.appendChild(line);
          var pin = el('i', 'mk-pin');
          pin.style.left = m.x0 + 'px'; pin.style.top = m.y0 + 'px';
          layer.appendChild(pin);
        }
        var half = m.size / 2 + 2;
        taken.push([m.x - half, m.y - half, m.x + half, m.y + half]);
        var mk = el('span', 'mk hub g-' + hubGroup(m.h));
        mk.setAttribute('aria-hidden', 'true');
        mk.setAttribute('data-hub', m.h.id);
        mk.style.left = m.x + 'px';
        mk.style.top = m.y + 'px';
        var dot = el('i', 'mk-dot');
        dot.style.width = dot.style.height = m.size + 'px';
        mk.appendChild(dot);
        mk.classList.toggle('on', m.h.id === current.id);
        mk.addEventListener('click', function () { select(m.h, false); });
        mk.addEventListener('pointerenter', function () { mk.classList.add('hover'); });
        mk.addEventListener('pointerleave', function () { mk.classList.remove('hover'); });
        layer.appendChild(mk);
        m.node = mk;
      });
      /* Names: the picked hub first, then the biggest, each on the first of
       * four sides where it overlaps no marker, no other name and no edge or
       * zoom button; a name with no room shows when its hub is pointed at. */
      var order = items.slice().sort(function (a, b) {
        if (a.h.id === current.id) return -1;
        if (b.h.id === current.id) return 1;
        return b.size - a.size;
      });
      order.forEach(function (m) {
        var lab = raw('span', 'mk-name', m.h.name);
        m.node.appendChild(lab);
        var lw = lab.offsetWidth || m.h.name.length * 7 + 8, lh = lab.offsetHeight || 18;
        var g = m.size / 2 + 5;
        var sides = [
          ['e', m.x + g, m.y - lh / 2], ['w', m.x - g - lw, m.y - lh / 2],
          ['n', m.x - lw / 2, m.y - g - lh], ['s', m.x - lw / 2, m.y + g]
        ];
        for (var i = 0; i < sides.length; i++) {
          var b = [sides[i][1], sides[i][2], sides[i][1] + lw, sides[i][2] + lh];
          var inFrame = b[0] >= 2 && b[1] >= 2 && b[2] <= r.width - 2 && b[3] <= r.height - 2 && !(b[2] > r.width - 56 && b[1] < 150);
          if (inFrame && free(b, taken)) {
            taken.push(b);
            lab.style.left = (b[0] - m.x + 22) + 'px';
            lab.style.top = (b[1] - m.y + 22) + 'px';
            return;
          }
        }
        lab.style.left = (g + 22) + 'px';
        lab.style.top = (22 - lh / 2) + 'px';
        m.node.classList.add('lab-hidden');
      });
    }
    select(current, false);
    zoomable(sv, fig, { box: box, limit: box, minW: box[2] / 40, apply: apply, change: place });
    var stop = watchSize(sv, place);
    var prev = page._cleanup;
    page._cleanup = function () { if (prev) prev(); stop(); };
    return wrap;
  }

  /* What the hub markers mean: colour by what a hub hires for, size by
   * population. Only the kinds the country has are listed. */
  var GROUPS = [
    ['biz', 'Mostly business and finance roles'],
    ['tech', 'Mostly computing and data roles'],
    ['both', 'Both, equally'],
    ['none', 'No family rated yet']
  ];
  function hubLegend(rec) {
    var lg = el('div', 'atlas-legend hub-legend');
    var have = {};
    rec.hubs.forEach(function (h) { have[hubGroup(h)] = 1; });
    GROUPS.forEach(function (g) {
      if (!have[g[0]]) return;
      var k = el('span', 'lg');
      k.appendChild(el('i', 'lg-hub g-' + g[0]));
      k.appendChild(el('span', null, g[1]));
      lg.appendChild(k);
    });
    if (rec.hubs.length > 1 && rec.hubs.every(function (h) { return h.metrics && h.metrics.pop; })) {
      var z = el('span', 'lg');
      z.appendChild(el('i', 'lg-size'));
      z.appendChild(el('span', null, 'Bigger square, more residents'));
      lg.appendChild(z);
    }
    return lg;
  }

  /* Five squares, n of them filled: a standing step. */
  function meter5(n) {
    var m = el('span', 'm5');
    for (var i = 1; i <= 5; i++) m.appendChild(el('i', i <= n ? 'on' : null));
    return m;
  }
  function stepName(n) { return T(A.steps.filter(function (x) { return x.n === n; })[0].name); }
  function scaleNames(countryId) { return [T('National'), regionName(countryId), T('World')]; }

  /* A chart's footnote: the note numbers of the sources behind its values,
   * listed at the foot of the page. list: [{ h: hub, m: metric }]. */
  function sourcesNote(list) {
    var p = el('p', 'cmp-src');
    p.appendChild(el('span', null, 'Sources'));
    p.appendChild(raw('span', null, ' '));
    p.appendChild(cite(chartNotes(list), true));
    return p;
  }
  function panel(title, lead) {
    var f = el('figure', 'cmp-panel');
    f.setAttribute('data-notes', T(title));
    var cap = el('figcaption');
    cap.appendChild(el('p', 'item-k', title));
    if (lead) cap.appendChild(el('p', 'cmp-lead', lead));
    f.appendChild(cap);
    return f;
  }

  function compareHubs(rec) {
    var wrap = el('div', 'cmp');
    wrap.setAttribute('data-notes', T('Hubs compared'));
    wrap.appendChild(demandMatrix(rec));
    var st = standingTable(rec);
    if (st) wrap.appendChild(st);
    var row = el('div', 'cmp-row');
    ['pop', 'gdp'].forEach(function (k) { var c = barChart(rec, k); if (c) row.appendChild(c); });
    if (row.childNodes.length) wrap.appendChild(row);
    var pr = payRent(rec);
    if (pr) wrap.appendChild(pr);
    return wrap;
  }

  /* Hubs by role family: each cell shaded by the demand level, darker for
   * more. The table is the chart, so it reads without colour too: every
   * cell carries the level's name for screen readers and on hover. */
  function demandMatrix(rec) {
    var f = panel('What each hub hires for', 'Darker means more demand; a blank cell is not rated.');
    var fams = A.roles.filter(function (r) {
      return rec.hubs.some(function (h) { var d = (h.demand || {})[r.id]; return Array.isArray(d); });
    });
    var none = A.roles.filter(function (r) { return fams.indexOf(r) < 0; });
    if (!fams.length) {
      f.appendChild(el('p', 'not-rated', 'No family is rated in any hub yet.'));
      return f;
    }
    var scroll = el('div', 'dm-scroll');
    var tb = el('table', 'dm');
    var thead = el('thead'), hr = el('tr');
    hr.appendChild(el('th', 'dm-corner', 'Hub'));
    fams.forEach(function (r) { var th = el('th', 'dm-f'); th.appendChild(el('span', null, r.name)); hr.appendChild(th); });
    thead.appendChild(hr);
    tb.appendChild(thead);
    var body = el('tbody');
    rec.hubs.forEach(function (h) {
      var tr = el('tr');
      tr.appendChild(raw('th', 'dm-h', h.name));
      fams.forEach(function (r) {
        var d = (h.demand || {})[r.id], lv = Array.isArray(d) ? levelOf(d[0]) : null;
        var td = el('td', 'dm-c' + (lv ? ' lv-' + lv.id : ''));
        var label = h.name + ' · ' + T(r.name) + ': ' + (lv ? T(lv.name) : T('not rated'));
        td.title = label;
        td.appendChild(raw('span', 'vh', lv ? T(lv.name) : T('not rated')));
        tr.appendChild(td);
      });
      body.appendChild(tr);
    });
    tb.appendChild(body);
    scroll.appendChild(tb);
    f.appendChild(scroll);
    var lg = el('div', 'dm-legend');
    A.levels.slice().reverse().forEach(function (l) {
      var k = el('span', 'lg');
      k.appendChild(el('i', 'dm-sw lv-' + l.id));
      k.appendChild(el('span', null, l.name));
      lg.appendChild(k);
    });
    var k0 = el('span', 'lg'); k0.appendChild(el('i', 'dm-sw')); k0.appendChild(el('span', null, 'Not rated'));
    lg.appendChild(k0);
    f.appendChild(lg);
    if (none.length) f.appendChild(raw('p', 'not-rated', T('Not rated in any hub: {list}', { list: none.map(function (r) { return T(r.name); }).join(', ') })));
    return f;
  }

  /* Each hub's standing in its key families, at three scales. */
  function standingTable(rec) {
    var rows = [];
    rec.hubs.forEach(function (h) { (h.standing || []).forEach(function (st) { rows.push([h, st]); }); });
    if (!rows.length) return null;
    var names = scaleNames(rec.id);
    var f = panel('How far each hub’s pull reaches', 'Standing out of 5: in the country, in the region and in the world.');
    var scroll = el('div', 'dm-scroll');
    var tb = el('table', 'stand-t');
    var thead = el('thead'), hr = el('tr');
    hr.appendChild(el('th', null, 'Hub'));
    hr.appendChild(el('th', null, 'Family'));
    names.forEach(function (n) { hr.appendChild(raw('th', null, n)); });
    thead.appendChild(hr);
    tb.appendChild(thead);
    var body = el('tbody'), last = null;
    rows.forEach(function (x) {
      var h = x[0], st = x[1], tr = el('tr');
      if (h !== last) tr.className = 'first';
      /* The hub's name heads its first row only; the rows under it carry
       * a plain cell, not an empty header. */
      tr.appendChild(raw(h === last ? 'td' : 'th', 'st-h', h === last ? '' : h.name));
      last = h;
      tr.appendChild(el('td', 'st-f', A.roles.filter(function (r) { return r.id === st.f; })[0].name));
      st.s.forEach(function (n, i) {
        var td = el('td', 'st-c');
        td.appendChild(meter5(n));
        td.appendChild(raw('span', 'st-n', n + '/5'));
        td.title = names[i] + ': ' + n + '/5, ' + stepName(n);
        td.setAttribute('aria-label', td.title);
        tr.appendChild(td);
      });
      body.appendChild(tr);
    });
    tb.appendChild(body);
    scroll.appendChild(tb);
    f.appendChild(scroll);
    f.appendChild(el('p', 'cmp-src', 'Judgements from cited rankings and statistics, never measurements: 5 leading, 4 among the top five, 3 a recognised secondary centre, 2 minor, 1 negligible at that scale. The sources are in each hub’s detail.'));
    return f;
  }

  /* The metric's hubs, all in the currency most of them use. */
  function metricRows(rec, k) {
    var rows = rec.hubs.filter(function (h) { return h.metrics && h.metrics[k]; })
      .map(function (h) { return { h: h, m: h.metrics[k] }; });
    if (k === 'pop') return rows;
    var count = {};
    rows.forEach(function (x) { count[x.m.cur] = (count[x.m.cur] || 0) + 1; });
    var cur = Object.keys(count).sort(function (a, b) { return count[b] - count[a]; })[0];
    return rows.filter(function (x) { return x.m.cur === cur; });
  }

  /* One measure, one bar per hub, longest first, the value at the bar's end. */
  function barChart(rec, k) {
    var rows = metricRows(rec, k);
    if (rows.length < 2) return null;
    rows.sort(function (a, b) { return b.m.v - a.m.v; });
    var M = A.metrics.filter(function (x) { return x.id === k; })[0];
    var f = panel(M.name, k === 'pop' ? 'Residents' : 'Output of the area in a year: the volume of business done there.');
    var max = rows[0].m.v;
    var ul = el('ul', 'bars');
    rows.forEach(function (x) {
      var li = el('li');
      li.appendChild(raw('span', 'bar-k', x.h.name));
      var tr = el('span', 'bar-track');
      var b = el('i', 'bar s1');
      b.style.width = Math.max(1, x.m.v / max * 100).toFixed(1) + '%';
      tr.appendChild(b);
      li.appendChild(tr);
      li.appendChild(raw('span', 'bar-v', metricText(k, x.m)));
      li.title = x.h.name + ': ' + metricText(k, x.m) + ' (' + x.m.year + ')';
      ul.appendChild(li);
    });
    f.appendChild(ul);
    f.appendChild(sourcesNote(rows));
    return f;
  }

  /* Pay and rent on one money axis: what a typical flat takes out of
   * average gross pay in each hub. */
  function payRent(rec) {
    var wages = metricRows(rec, 'wage'), rents = metricRows(rec, 'rent');
    var cur = (wages[0] || rents[0] || { m: {} }).m.cur;
    var hubs = rec.hubs.filter(function (h) {
      var m = h.metrics || {};
      return (m.wage && m.wage.cur === cur) || (m.rent && m.rent.cur === cur);
    });
    if (hubs.length < 2 || !wages.length) return null;
    var max = 0;
    hubs.forEach(function (h) {
      ['wage', 'rent'].forEach(function (k) { var m = h.metrics[k]; if (m && m.cur === cur) max = Math.max(max, m.v); });
    });
    hubs.sort(function (a, b) { return ((b.metrics.wage || {}).v || 0) - ((a.metrics.wage || {}).v || 0); });
    var f = panel('Pay and rent', 'Average gross monthly pay against the monthly rent of a one-bedroom flat, in the same currency.');
    var lg = el('div', 'dm-legend');
    [['s1', 'Average monthly pay (gross)'], ['s2', 'Rent, one-bedroom flat']].forEach(function (x) {
      var k = el('span', 'lg'); k.appendChild(el('i', 'bar-sw ' + x[0])); k.appendChild(el('span', null, x[1])); lg.appendChild(k);
    });
    f.appendChild(lg);
    var ul = el('ul', 'bars pair');
    var used = [];
    hubs.forEach(function (h) {
      var li = el('li');
      li.appendChild(raw('span', 'bar-k', h.name));
      var tracks = el('span', 'bar-pair');
      [['wage', 's1'], ['rent', 's2']].forEach(function (x) {
        var m = h.metrics[x[0]];
        var line = el('span', 'bar-line');
        var tr = el('span', 'bar-track');
        if (m && m.cur === cur) {
          used.push({ h: h, m: m });
          var b = el('i', 'bar ' + x[1]);
          b.style.width = Math.max(1, m.v / max * 100).toFixed(1) + '%';
          tr.appendChild(b);
          line.appendChild(tr);
          line.appendChild(raw('span', 'bar-v', money(m.v, cur)));
        } else {
          line.appendChild(tr);
          line.appendChild(el('span', 'bar-v muted', 'no figure'));
        }
        tracks.appendChild(line);
      });
      li.appendChild(tracks);
      var w = h.metrics.wage, r = h.metrics.rent;
      li.appendChild(raw('span', 'bar-share', w && r && w.cur === cur && r.cur === cur
        ? T('rent {p}% of pay', { p: Math.round(r.v / w.v * 100) }) : ''));
      ul.appendChild(li);
    });
    f.appendChild(ul);
    f.appendChild(el('p', 'cmp-lead', 'The share is an author calculation on gross pay; on take-home pay it is higher.'));
    f.appendChild(sourcesNote(used));
    return f;
  }

  /* The hub's four numbers, each with its source. */
  function metricTiles(rec, h) {
    var keys = A.metrics.filter(function (M) { return h.metrics && h.metrics[M.id]; });
    if (!keys.length) return null;
    var wrap = el('div', 'tiles');
    wrap.setAttribute('data-notes', T('Figures'));
    keys.forEach(function (M) {
      var m = h.metrics[M.id];
      var t = el('div', 'tile');
      t.appendChild(el('p', 'kf-k', M.name));
      var v = raw('p', 'kf-v', metricText(M.id, m));
      v.appendChild(cite([metricNote(m)]));
      t.appendChild(v);
      t.appendChild(raw('p', 'kf-r', m.year + ' · ' + areaName(m.area) + (M.id === 'wage' ? ' · ' + T(m.basis === 'median' ? 'median' : 'mean') : '')));
      wrap.appendChild(t);
    });
    return wrap;
  }

  /* Standing in the hub's detail, with the claims it rests on. */
  function standingBlock(rec, h) {
    var wrap = el('div', 'standing');
    if (!(h.standing || []).length) return wrap;
    wrap.setAttribute('data-notes', T('Standing'));
    wrap.appendChild(el('p', 'item-k', 'Standing'));
    var names = scaleNames(rec.id);
    h.standing.forEach(function (st) {
      var box = el('div', 'st-box');
      var fam = el('p', 'st-fam', A.roles.filter(function (r) { return r.id === st.f; })[0].name);
      fam.appendChild(cite(st.c.filter(function (cid) { return rec.claims[cid]; }).map(function (cid) { return noteOf(rec.claims[cid]); })));
      box.appendChild(fam);
      st.s.forEach(function (n, i) {
        var row = el('div', 'st-row');
        row.appendChild(raw('span', 'st-scale', names[i]));
        row.appendChild(meter5(n));
        row.appendChild(raw('span', 'st-step', n + '/5 · ' + stepName(n)));
        box.appendChild(row);
      });
      wrap.appendChild(box);
    });
    return wrap;
  }

  function levelOf(id) { return A.levels.filter(function (l) { return l.id === id; })[0]; }

  /* One hub: why it is a hub, who is there, and what it hires for. */
  function hubDetail(rec, h, solo) {
    var box = el('article', 'hub-card' + (solo ? ' solo' : ''));
    box.setAttribute('data-notes', h.name);
    var t = raw('h3', 'hub-title', h.name);
    t.tabIndex = -1;
    box.appendChild(t);
    box.appendChild(el('p', 'hub-known', h.knownFor));
    var tiles = metricTiles(rec, h);
    if (tiles) box.appendChild(tiles);

    var cols = el('div', 'hub-cols');
    var left = el('div');
    var why = el('div');
    why.setAttribute('data-notes', T('Why it is a hub'));
    why.appendChild(el('p', 'item-k', 'Why it is a hub'));
    h.why.forEach(function (cid) { why.appendChild(claim(rec, cid)); });
    left.appendChild(why);
    left.appendChild(el('p', 'item-k', 'Sectors present'));
    left.appendChild(raw('p', 'hub-sectors', h.sectors.map(function (s) { return T(s); }).join(' · ')));
    left.appendChild(el('p', 'item-k', 'Named employers and ecosystems'));
    var ul = el('ul', 'hub-emp');
    ul.setAttribute('data-notes', T('Named employers and ecosystems'));
    h.employers.forEach(function (e) {
      var li = el('li');
      /* A proper name stays as written; a descriptive label (t) is translated. */
      li.appendChild(e.t ? el('b', null, e.t) : raw('b', null, e.name));
      if (e.note) li.appendChild(raw('span', null, ' — ' + T(e.note)));
      if (e.c && rec.claims[e.c]) li.appendChild(cite([noteOf(rec.claims[e.c])]));
      ul.appendChild(li);
    });
    left.appendChild(ul);
    cols.appendChild(left);

    var right = el('div');
    right.appendChild(standingBlock(rec, h));
    right.appendChild(demandTable(rec, h.demand, A.roles, 'Demand by role family'));
    if (h.finance) right.appendChild(demandTable(rec, h.finance, A.financeRoles, 'Inside finance'));
    right.appendChild(adjacentPaths(h.demand));
    cols.appendChild(right);
    box.appendChild(cols);

    if (h.programmes && h.programmes.length) {
      box.appendChild(el('p', 'item-k', 'Calculator programmes here'));
      var pl = el('ul', 'hub-prog');
      h.programmes.forEach(function (p) {
        var li = el('li');
        var a = raw('a', null, p.name);
        a.href = p.calc === 'mba' ? 'mba.html' : (p.calc === 'masters' ? 'masters.html' : 'computing.html') + '?track=' + p.track;
        li.appendChild(a);
        pl.appendChild(li);
      });
      box.appendChild(pl);
    }
    return box;
  }

  function demandTable(rec, demand, families, title) {
    var wrap = el('div', 'demand');
    wrap.setAttribute('data-notes', T(title));
    wrap.appendChild(el('p', 'item-k', title));
    var tb = el('table', 'demand-t');
    var notRated = [];
    var body = el('tbody');
    families.forEach(function (f) {
      var d = demand && demand[f.id];
      if (!d || d === A.GAP) { notRated.push(T(f.name)); return; }
      var lv = levelOf(d[0]);
      var tr = el('tr', 'lv-' + d[0]);
      tr.appendChild(el('th', null, f.name));
      var td = el('td', 'lv');
      td.appendChild(raw('span', 'lv-mark', lv.mark));
      td.appendChild(el('span', 'lv-name', lv.name));
      td.title = T(lv.note);
      tr.appendChild(td);
      var refs = el('td', 'lv-refs');
      refs.appendChild(cite(d.slice(1).filter(function (cid) { return rec.claims[cid]; }).map(function (cid) { return noteOf(rec.claims[cid]); }), true));
      tr.appendChild(refs);
      body.appendChild(tr);
    });
    if (body.childNodes.length) {
      var thead = el('thead');
      var hr = el('tr');
      hr.appendChild(el('th', null, 'Family'));
      hr.appendChild(el('th', null, 'Level'));
      hr.appendChild(el('th', null, 'Based on'));
      thead.appendChild(hr);
      tb.appendChild(thead);
      tb.appendChild(body);
      wrap.appendChild(tb);
    }
    if (notRated.length) wrap.appendChild(raw('p', 'not-rated', T('Not rated, no source found: {list}', { list: notRated.join(', ') })));
    return wrap;
  }

  function adjacentPaths(demand) {
    var wrap = el('div', 'adjacent');
    var top = A.roles.filter(function (r) {
      var d = demand && demand[r.id];
      return d && d !== A.GAP && (d[0] === 'dominant' || d[0] === 'strong');
    });
    if (!top.length) return wrap;
    wrap.appendChild(el('p', 'item-k', 'Adjacent paths'));
    var ul = el('ul', 'adj-list');
    top.forEach(function (r) {
      var li = el('li');
      li.appendChild(raw('b', null, T(r.name)));
      li.appendChild(raw('span', null, ' → ' + (A.adjacent[r.id] || []).map(roleName).join(', ')));
      ul.appendChild(li);
    });
    wrap.appendChild(ul);
    wrap.setAttribute('data-notes', T('Adjacent paths'));
    var note = el('p', 'claim small');
    note.appendChild(raw('span', 'claim-t', T(A.adjacentBasis.t)));
    note.appendChild(cite([noteOf(A.adjacentBasis)]));
    wrap.appendChild(note);
    return wrap;
  }

  /* ------------------------------------------------------------------ */
  /* Routing                                                             */
  /* ------------------------------------------------------------------ */

  /* The address, read: country, view, hub, part. A second word that is not
   * a view is a hub (#de/munich, the address hubs have always had). */
  function parse(hash) {
    var m = /^#([a-z]{2})(?:\/([a-z0-9-]+))?(?:\/([a-z0-9-]+))?$/.exec(String(hash).toLowerCase());
    var id = m && m[1].toUpperCase();
    if (!id || !A.byId[id]) return null;
    var sel = { id: id, view: 'overview', hub: null, part: null };
    if (m[2] && viewById[m[2]]) {
      sel.view = m[2];
      if (sel.view === 'cities') sel.hub = m[3] || null; else sel.part = m[3] || null;
    } else if (m[2]) { sel.view = 'cities'; sel.hub = m[2]; }
    return sel;
  }

  var shown = null;
  function route() {
    var sel = parse(location.hash);
    if (page._cleanup) { page._cleanup(); page._cleanup = null; }
    if (!sel) {
      shown = null;
      page.hidden = true;
      world.hidden = false;
      document.title = T('Atlas — Admetia');
      setTrail(null);
      if (!svgEl) buildWorld(); else { placeMarks(); syncMarks(); }
      if (location.hash.toLowerCase() === '#countries') {
        var h = document.getElementById('countries');
        list.scrollIntoView({ block: 'start' });
        if (h) h.focus({ preventScroll: true });
      }
      return;
    }
    closePop(true);
    world.hidden = true;
    page.hidden = false;
    page.textContent = '';
    page.appendChild(el('p', 'pop-loading', 'Loading…'));
    /* A path named on the hiring view (#de/hiring/intern) sets the filter. */
    if (sel.view === 'hiring' && sel.part && (A.entryPaths || []).some(function (P) { return P.id === sel.part; })) { state.path = sel.part; sel.part = 'routes'; }
    Promise.all([load(sel.id), loadVisas(sel.id), loadEntry(sel.id)]).then(function (got) {
      var rec = got[0];
      if (sel.view === 'hiring' && !got[2] && !sel.part) { /* no hiring file: the view says so */ }
      renderPage(rec, sel, got[1], got[2]);
      var same = shown && shown.id === sel.id && shown.view === sel.view;
      shown = sel;
      if (sel.part && goPart(sel.part)) return;
      if (same && sel.view === 'cities') return;
      window.scrollTo(0, 0);
      var h = page.querySelector('h1');
      if (h) { h.tabIndex = -1; h.focus({ preventScroll: true }); }
    }, function () {
      page.textContent = '';
      page.appendChild(el('p', 'atlas-note', 'This country’s page could not be loaded. Check your connection and try again.'));
    });
  }

  window.addEventListener('hashchange', route);
  route();

  window.AtlasPage = { load: load, inScope: A.inScope, mercator: mercator, spread: spread, parse: parse, VIEWS: VIEWS, VIEW_SECTIONS: VIEW_SECTIONS };
}());
