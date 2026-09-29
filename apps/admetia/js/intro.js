/* Opening titles. On a reader's first visit, from whichever page they land on,
 * the three editions cut past in kinetic type — one of three lines, picked at
 * random — and the nameplate lands in its place on the page. Every later visit
 * gets a flash of under a second instead.
 *
 * Runs in <head>, right after js/theme.js (which has already set the edition
 * and the language), so the overlay is up before the page first paints. The
 * overlay is only ever a layer above the page: if anything here fails, it is
 * removed and the page is simply there.
 *
 * Nothing for readers who ask for reduced motion, and never in print. Any
 * click, tap or key ends it. The visual reference, with every timing and
 * colour, is design/intro/lab.html (version A, Watchlist "black + red"). */

(function () {
  'use strict';

  var KEY = 'admissions-calc:intro-seen';

  /* What a visit gets: 'full', 'flash' or 'none'. */
  function plan(o) {
    if (o.reduced || !o.animate || o.robot) return 'none';
    return o.seen ? 'flash' : 'full';
  }

  /* Counts shown in the corner of the titles. tests/intro-test.js checks them
   * against the models, as tests/site-test.js does for the pages' own text. */
  var COUNT = { programmes: 90, mba: 42, computing: 26 };

  var TXT = {
    en: {
      lines: [['INSEAD?', 'LBS?', 'BOCCONI?', 'YOU?'], ['GMAT.', 'GPA.', 'CV.', 'VERDICT.'], ['WHERE', 'DO YOU', 'ACTUALLY', 'STAND?']],
      data: COUNT.programmes + '+ business programmes · ' + COUNT.mba + ' MBA schools · ' + COUNT.computing + ' computing',
      loading: 'Loading', skip: 'Skip',
      motto: 'An independent calculator for MBA, business and computing master’s degrees'
    },
    it: {
      lines: [['INSEAD?', 'LBS?', 'BOCCONI?', 'E TU?'], ['GMAT.', 'MEDIA.', 'CV.', 'VERDETTO.'], ['A CHE', 'PUNTO', 'SEI', 'DAVVERO?']],
      data: COUNT.programmes + '+ programmi business · ' + COUNT.mba + ' scuole MBA · ' + COUNT.computing + ' informatica',
      loading: 'Caricamento', skip: 'Salta',
      motto: 'Un calcolatore indipendente per MBA, master in business e master in informatica'
    }
  };

  window.Intro = { plan: plan, KEY: KEY, COUNT: COUNT, TXT: TXT };

  var root = document.documentElement;
  if (typeof matchMedia !== 'function') return;

  var seen = true;
  try { seen = localStorage.getItem(KEY) === '1'; } catch (e) { /* storage blocked: flash only */ }
  var mode = plan({
    seen: seen,
    reduced: matchMedia('(prefers-reduced-motion: reduce)').matches,
    animate: typeof root.animate === 'function',
    robot: !!navigator.webdriver || /bot|crawl|spider|slurp|lighthouse/i.test(navigator.userAgent)
  });
  if (mode === 'none') return;

  /* Each edition's frame. Watchlist sits on its black masthead band with red
   * only in the rule and label; Wall Street's frame is white, so two black
   * frames never follow each other. */
  var ED = {
    city: {
      name: 'The City', paper: '#fff1e5', ink: '#33302e',
      loud: ['#990f3d', '#fff1e5'], rule: null, kick: null, rgb: ['#0d7680', '#fcd0b1'],
      rowsA: ['#990f3d', '#fff1e5'], rowsB: ['#fff1e5', '#990f3d'], mid: ['#262a33', '#fff1e5'],
      face: ['"Source Serif 4", Georgia, serif', 600, '100%'], load: '600 1em "Source Serif 4"',
      mast: null, deck: ['"Source Serif 4", Georgia, serif', 'italic', null], strip: '#990f3d'
    },
    wallstreet: {
      name: 'Wall Street', paper: '#ffffff', ink: '#111111',
      loud: ['#ffffff', '#111111'], rule: '#111111', kick: null, rgb: ['#0080c3', '#e10000'],
      rowsA: ['#111111', '#ffffff'], rowsB: ['#ffffff', '#111111'], mid: ['#0080c3', '#ffffff'],
      face: ['"Roboto Serif Condensed", "Times New Roman", serif', 700, '100%'], load: '700 1em "Roboto Serif Condensed"',
      mast: 'img/wordmark/wall-street.webp', deck: ['"Times New Roman", Times, serif', 'italic', null], strip: '#111111'
    },
    watchlist: {
      name: 'FBI Watchlist', paper: '#fcfcfc', ink: '#171717', band: '#171717',
      loud: ['#171717', '#ffffff'], rule: '#dc0000', kick: '#ff5a4f', rgb: ['#dc0000', '#007ac8'],
      rowsA: ['#171717', '#ffffff'], rowsB: ['#fcfcfc', '#171717'], mid: ['#ffffff', '#dc0000'],
      face: ['"Noto Serif Display", Georgia, serif', 800, '75%'], load: '800 1em "Noto Serif Display"',
      mast: 'img/wordmark/fbi-watchlist.webp', deck: ['"Hanken Grotesk", Helvetica, Arial, sans-serif', 'normal', '#bbbbbb'], strip: '#dc0000'
    }
  };

  var ed = ED[root.getAttribute('data-theme')] ? root.getAttribute('data-theme') : 'city';
  var T = TXT[root.lang === 'it' ? 'it' : 'en'];
  var order = ['city', 'wallstreet', 'watchlist'].filter(function (x) { return x !== ed; }).concat(ed);

  var UI = '"Hanken Grotesk", Helvetica, Arial, sans-serif';
  var RISE = 'cubic-bezier(.2,.9,.1,1)', SWEEP = 'cubic-bezier(.6,0,.2,1)', MOVE = 'cubic-bezier(.75,0,.2,1)';

  /* The faces are declared here as well as in css/fonts.css, which has not
   * loaded yet, so they can start downloading now. Same URLs: one fetch. */
  var face = function (fam, file, extra) {
    return '@font-face{font-family:"' + fam + '";font-style:normal;' + extra + 'font-display:block;src:url(fonts/' + file + '.woff2) format("woff2")}';
  };
  var CSS = [
    face('Source Serif 4', 'source-serif-4-roman', 'font-weight:200 900;'),
    face('Hanken Grotesk', 'hanken-grotesk', 'font-weight:100 900;'),
    face('Roboto Serif Condensed', 'roboto-serif-condensed', 'font-weight:400 800;'),
    face('Noto Serif Display', 'noto-serif-display', 'font-weight:100 900;font-stretch:62.5% 100%;'),
    'html.intro-on{overflow:hidden}',
    '.intro{position:fixed;inset:0;z-index:2147483000;overflow:hidden;visibility:visible!important;cursor:pointer;-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:transparent}',
    '.intro *{box-sizing:border-box}',
    '.intro-l,.intro-bg{position:absolute;inset:0}',
    '.intro-l{display:grid;place-items:center;overflow:hidden}',
    '.intro-w{display:inline-block;text-align:center;line-height:.9}',
    '.intro-w>div{white-space:nowrap}',
    '.intro-m{display:inline-block;overflow:hidden;vertical-align:top;padding:.12em 0 .08em;margin:-.12em 0 -.08em}',
    '.intro-m>span{display:inline-block}',
    '.intro-rule{position:absolute;left:7vw;right:7vw;bottom:15vh;height:2px;background:currentColor;transform-origin:left}',
    '.intro-kick,.intro-h,.intro-skip{font:600 11px/1 ' + UI + ';letter-spacing:.15em;text-transform:uppercase;white-space:nowrap}',
    '.intro-kick{position:absolute;left:7vw;top:13vh;font-size:max(10px,1.6vh);letter-spacing:.16em}',
    '.intro-hud{position:absolute;inset:0;pointer-events:none}',
    '.intro-c{position:absolute;width:2.4vmin;height:2.4vmin;border:0 solid currentColor;opacity:.8}',
    '.intro-h{position:absolute;opacity:.78;font-variant-numeric:tabular-nums}',
    '.intro-bar{position:absolute;left:5.8vmin;right:5.8vmin;bottom:1.6vmin;height:1px;background:currentColor;opacity:.5;transform-origin:left;transform:scaleX(0)}',
    '.intro-skip{position:absolute;right:5.8vmin;bottom:calc(2.4vmin + 4px);padding:9px 12px;background:transparent;color:inherit;border:1px solid currentColor;border-radius:0;cursor:pointer;opacity:.85}',
    '.intro-skip:hover{opacity:1}',
    '.intro-skip:focus-visible{outline:2px solid currentColor;outline-offset:2px}',
    '@media (orientation:portrait){.intro-h.l{display:none}}',
    '.intro-band{position:absolute;left:0;right:0;overflow:hidden}',
    '.intro-track{position:absolute;left:0;top:0;white-space:nowrap}',
    '.intro-band.mid{display:grid;place-items:center;z-index:2}',
    '.intro-g{position:absolute;inset:0;z-index:4;pointer-events:none}',
    '.intro-g i{position:absolute}',
    '.intro-lock{position:absolute;left:0;right:0;display:flex;flex-direction:column;align-items:center}',
    '.intro-np{display:block;transform-origin:0 0}',
    '.intro-npt{width:max-content;white-space:nowrap;line-height:.92;letter-spacing:.01em}',
    '.intro-motto{margin-top:1.8vh;font-size:max(13px,2.3vh);text-align:center;opacity:.8}',
    '.intro-dbl{display:block;align-self:stretch;height:6px;border-top:3px solid;border-bottom:1px solid;margin:2.2vh 7vw 0}'
  ].join('\n');

  /* ------------------------------------------------------------ helpers --- */
  var ov, stage, hud, skip, done = false, timers = [];

  function el(tag, cls, parent, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    if (parent) parent.appendChild(e);
    return e;
  }
  function W() { return ov.clientWidth; }
  function H() { return ov.clientHeight; }
  function A(node, kf, dur, delay, easing) {
    return node.animate(kf, { duration: dur, delay: delay || 0, easing: easing || 'cubic-bezier(.2,.8,.2,1)', fill: 'both' });
  }
  /* Every timed step is guarded: an error anywhere takes the overlay down. */
  function guard(fn) {
    return function () { if (done) return; try { fn(); } catch (e) { teardown(); } };
  }
  function at(ms, fn) { timers.push(setTimeout(guard(fn), ms)); }
  function setFace(node, e) {
    node.style.fontFamily = e.face[0]; node.style.fontWeight = e.face[1]; node.style.fontStretch = e.face[2];
  }
  function fit(node, maxW, maxH) {
    node.style.fontSize = '100px';
    var r = node.getBoundingClientRect();
    node.style.fontSize = 100 * Math.min(maxW / r.width, maxH / r.height) + 'px';
  }
  function letters(node, text) {
    return text.split('').map(function (ch) {
      return el('span', '', el('span', 'intro-m', node), ch === ' ' ? ' ' : ch);
    });
  }
  function rise(spans, stagger, delay) {
    spans.forEach(function (s, i) {
      A(s, [{ transform: 'translateY(108%)' }, { transform: 'translateY(0)' }], 300, (delay || 0) + i * stagger, RISE);
    });
  }
  function layer(bg, fg) {
    var old = stage.querySelectorAll('.intro-l');
    for (var i = 0; i < old.length; i++) stage.removeChild(old[i]);
    var l = el('div', 'intro-l');
    l.style.background = bg; l.style.color = fg;
    stage.insertBefore(l, hud);
    if (hud) hud.style.color = fg;
    ov.style.color = fg;
    return l;
  }

  /* ------------------------------------------------------------- scenes --- */
  function word(k, text, n, dur) {
    var e = ED[k], L = layer(e.loud[0], e.loud[1]);
    var box = el('div', 'intro-w', L);
    setFace(box, e);
    var lines = W() < H() * 1.05 && text.indexOf(' ') > -1 ? text.split(' ') : [text];
    var spans = [];
    lines.forEach(function (t) { spans = spans.concat(letters(el('div', '', box), t)); });
    fit(box, W() * .86, H() * (lines.length > 1 ? .62 : .5));
    rise(spans, 20);
    box.style.textShadow = '.04em 0 ' + e.rgb[0] + ', -.04em 0 ' + e.rgb[1];
    at(110, function () { box.style.textShadow = ''; });
    A(box, [{ transform: 'scale(1)' }, { transform: 'scale(1.05)' }], dur, 0, 'linear');
    var rule = el('i', 'intro-rule', L);
    if (e.rule) rule.style.background = e.rule;
    A(rule, [{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }], dur * .9, 0, SWEEP);
    var kick = el('div', 'intro-kick', L, '0' + n + ' — ' + e.name);
    if (e.kick) kick.style.color = e.kick;
    hudEd.textContent = '0' + n + '/04 — ' + e.name;
  }

  function rows(k, text, dur) {
    var e = ED[k], L = layer(e.paper, e.ink);
    var n = 7, h = H() / n, bands = [];
    for (var i = 0; i < n; i++) {
      var b = el('div', 'intro-band', L);
      b.style.top = i * h + 'px'; b.style.height = Math.ceil(h) + 1 + 'px';
      bands.push(b);
      if (i === 3) {
        b.className += ' mid'; b.style.background = e.mid[0]; b.style.color = e.mid[1];
        var w = el('div', 'intro-w', b);
        setFace(w, e);
        var spans = letters(el('div', '', w), text);
        fit(w, W() * .8, h * .82);
        rise(spans, 22);
        continue;
      }
      var pair = i % 2 === 0 ? e.rowsA : e.rowsB;
      b.style.background = pair[0];
      var tr = el('div', 'intro-track', b, new Array(13).join(text + '  ·  '));
      setFace(tr, e);
      tr.style.fontSize = h * .8 + 'px'; tr.style.lineHeight = h + 'px';
      if (i === 1 || i === 5) { tr.style.color = 'transparent'; tr.style.webkitTextStroke = '1.5px ' + pair[1]; }
      else tr.style.color = pair[1];
      var off = 8 + i * 3, a = -off - (i % 2 ? 18 : 0), z = -off - (i % 2 ? 0 : 18);
      A(tr, [{ transform: 'translateX(' + a + '%)' }, { transform: 'translateX(' + z + '%)' }], dur, 0, 'linear');
    }
    hudEd.textContent = '04/04 — ' + e.name;
    at(dur * .62, function () {
      bands.forEach(function (b, i) {
        if (i === 3) return;
        A(b, [{ transform: 'translateY(0)' }, { transform: 'translateY(' + (i < 3 ? -4 : 4) * h + 'px)' }], dur * .36, 0, 'cubic-bezier(.7,0,.9,.5)');
      });
    });
  }

  /* A cut's glitch: thin offset bands for two frames. Together they stay
   * under a quarter of the screen, so a cut never reads as a full flash. */
  function glitch(k) {
    var e = ED[k], colors = [e.loud[0], e.rgb[0], e.loud[1], '#000000'];
    function frame(n) {
      var g = el('div', 'intro-g', stage);
      for (var i = 0; i < n; i++) {
        var b = el('i', '', g);
        b.style.cssText = 'top:' + Math.random() * 100 + 'vh;height:' + (.5 + Math.random() * 3) + 'vh;left:' + (-25 + Math.random() * 50) +
          'vw;width:' + (35 + Math.random() * 90) + 'vw;background:' + colors[i % colors.length];
      }
      return g;
    }
    var a = frame(6);
    at(45, function () { stage.removeChild(a); var b = frame(3); at(40, function () { stage.removeChild(b); }); });
  }

  function nameplate(k, parent, width) {
    var e = ED[k];
    if (e.mast) {
      var img = el('img', 'intro-np', parent);
      img.src = e.mast; img.alt = ''; img.style.width = width + 'px';
      return img;
    }
    var t = el('div', 'intro-np intro-npt', parent);
    setFace(t, ED.city);
    t.textContent = 'ADMISSION CHANCES';
    fit(t, width, width);
    return t;
  }
  function revealNameplate(np, k, dur) {
    if (ED[k].mast) {
      A(np, [{ clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)' }], dur, 0, 'steps(11, end)');
      return;
    }
    letters(np, 'ADMISSION CHANCES').forEach(function (s, i) { A(s, [{ opacity: 0 }, { opacity: 1 }], 1, i * dur / 17, 'steps(1)'); });
  }

  /* The nameplate composes, then flies into the page's own nameplate while
   * the backdrop fades and the page shows through. f < 1 speeds it up. */
  function landing(k, f) {
    var e = ED[k], fg = e.band ? '#ffffff' : e.ink;
    var L = layer('transparent', fg);
    ov.style.background = 'transparent';
    var bg = el('div', 'intro-bg', L);
    bg.style.background = e.band || e.paper;
    var lock = el('div', 'intro-lock', L);
    var npW = Math.min(W() * .76, H() * 1.3);
    var np = nameplate(k, lock, npW);
    var mo = el('div', 'intro-motto', lock, T.motto);
    mo.style.fontFamily = e.deck[0]; mo.style.fontStyle = e.deck[1];
    if (e.deck[2]) mo.style.color = e.deck[2];
    mo.style.maxWidth = npW + 'px';
    var dbl = el('i', 'intro-dbl', lock);
    if (e.band) dbl.style.visibility = 'hidden';
    lock.style.top = (H() - lock.getBoundingClientRect().height) / 2 + 'px';

    revealNameplate(np, k, 320 * f);
    A(dbl, [{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }], 360 * f, 60 * f, SWEEP);
    A(mo, [{ opacity: 0, transform: 'translateY(1vh)' }, { opacity: 1, transform: 'none' }], 260 * f, 200 * f);

    at(560 * f, function () {
      whenParsed(function () { settle(np, [mo, dbl, bg], f); });
    });
  }

  function settle(np, fades, f) {
    if (hud) A(hud, [{ opacity: 1 }, { opacity: 0 }], 260 * f);
    if (skip) skip.style.visibility = 'hidden';
    var target = document.querySelector('.masthead .nameplate');
    var from = np.getBoundingClientRect(), to = target && target.getBoundingClientRect();
    var fly = to && to.width > 0 && from.width > 0 && to.top >= 0 && to.bottom <= H();
    fades.forEach(function (x) { A(x, [{ opacity: 1 }, { opacity: 0 }], 420 * f, 0, MOVE); });
    if (fly) {
      A(np, [{ transform: 'none' }, {
        transform: 'translate(' + (to.left - from.left) + 'px,' + (to.top - from.top) + 'px) scale(' + to.width / from.width + ')'
      }], 440 * f, 0, MOVE);
    } else {
      A(np, [{ opacity: 1 }, { opacity: 0 }], 300 * f);
    }
    at(440 * f + 40, function () { finish(140); });
  }

  /* ---------------------------------------------------------- sequences --- */
  var hudEd, hudLoad, hudBar;

  function full() {
    try { localStorage.setItem(KEY, '1'); } catch (e) { /* ignore */ }
    var q = T.lines[Math.floor(Math.random() * T.lines.length)];
    var beats = [[500, 'w', order[0], q[0]], [500, 'w', order[1], q[1]], [520, 'w', order[2], q[2]], [760, 'r', ed, q[3]]];
    var t = 0;
    beats.forEach(function (b, i) {
      at(t, function () {
        if (i) glitch(b[2]);
        if (b[1] === 'w') word(b[2], b[3], i + 1, b[0]); else rows(b[2], b[3], b[0]);
      });
      t += b[0];
    });
    var total = t, t0 = performance.now();
    (function tick() {
      if (done) return;
      var p = Math.min(1, (performance.now() - t0) / total);
      hudLoad.textContent = 'Admission Chances — ' + T.loading + ' ' + ('00' + Math.round(p * 100)).slice(-3) + '%';
      hudBar.style.transform = 'scaleX(' + p + ')';
      if (p < 1) requestAnimationFrame(tick);
    }());
    at(total, function () { glitch(ed); landing(ed, 1); });
  }

  /* Return visits: a strip across the middle cuts through the three
   * editions — under a fifth of the screen, so it is no full-screen flash —
   * then the nameplate lands. About 0.7 s. */
  function flash() {
    var e = ED[ed], fr = 70;
    if (hud) hud.style.display = 'none';
    if (skip) skip.style.display = 'none';
    var L = layer(e.band || e.paper, e.band ? '#ffffff' : e.ink);
    var strip = el('i', '', L);
    strip.style.cssText = 'position:absolute;left:0;right:0;top:41vh;height:18vh';
    order.forEach(function (k, i) { at(i * fr, function () { strip.style.background = ED[k].strip; }); });
    at(order.length * fr, function () { landing(ed, .45); });
  }

  /* ------------------------------------------------------------ lifecycle */
  function whenParsed(fn) {
    if (document.readyState !== 'loading') return fn();
    var go = guard(fn), once = false;
    var run = function () { if (!once) { once = true; go(); } };
    document.addEventListener('DOMContentLoaded', run);
    at(2500, function () { if (!once) { once = true; finish(140); } });
  }
  /* A page opened in a background tab gets no titles at all, and keeps the
   * full ones for a visit someone watches: waiting for it to come forward
   * would risk leaving the page covered. */
  function whenVisible(fn) {
    if (document.visibilityState === 'hidden') return teardown();
    fn();
  }

  function teardown() {
    done = true;
    timers.forEach(clearTimeout);
    if (ov && ov.parentNode) ov.parentNode.removeChild(ov);
    root.classList.remove('intro-on');
    if (document.body) document.body.inert = false;
    document.removeEventListener('keydown', onKey, true);
  }
  function finish(ms) {
    if (done) return;
    done = true;
    timers.forEach(clearTimeout);
    var a = ov.animate([{ opacity: 1 }, { opacity: 0 }], { duration: ms, fill: 'forwards' });
    a.onfinish = teardown;
    setTimeout(teardown, ms + 200);
  }
  function onKey() { finish(150); }

  try {
    var style = el('style', '', document.head || root);
    style.textContent = CSS;
    ov = el('div', 'intro');
    stage = el('div', '', ov);
    stage.setAttribute('aria-hidden', 'true');
    stage.style.cssText = 'position:absolute;inset:0';
    ov.style.background = mode === 'full' ? ED[order[0]].loud[0] : (ED[ed].band || ED[ed].paper);
    if (mode === 'full') {
      hud = el('div', 'intro-hud', stage);
      hud.style.color = ED[order[0]].loud[1];
      [['top', 'left'], ['top', 'right'], ['bottom', 'left'], ['bottom', 'right']].forEach(function (p) {
        var c = el('i', 'intro-c', hud);
        c.style[p[0]] = '2.4vmin'; c.style[p[1]] = '2.4vmin';
        c.style['border' + p[0][0].toUpperCase() + p[0].slice(1) + 'Width'] = '1px';
        c.style['border' + p[1][0].toUpperCase() + p[1].slice(1) + 'Width'] = '1px';
      });
      hudLoad = el('span', 'intro-h l', hud, 'Admission Chances');
      hudLoad.style.cssText = 'top:3.3vmin;left:5.8vmin';
      hudEd = el('span', 'intro-h', hud);
      hudEd.style.cssText = 'top:3.3vmin;right:5.8vmin';
      el('span', 'intro-h l', hud, T.data).style.cssText = 'bottom:3.3vmin;left:5.8vmin';
      hudBar = el('i', 'intro-bar', hud);
      skip = el('button', 'intro-skip', ov, T.skip + ' ›');
      skip.type = 'button';
    }
    root.appendChild(ov);
    root.classList.add('intro-on');

    ov.addEventListener('pointerdown', function () { finish(150); });
    document.addEventListener('keydown', onKey, true);
    document.addEventListener('DOMContentLoaded', function () { if (!done && document.body) document.body.inert = true; });

    if (ED[ed].mast) new Image().src = ED[ed].mast;
    /* Whatever happens, the page is never covered for more than 8 s. */
    setTimeout(function () { if (!done) teardown(); }, 8000);

    /* Wait for the faces, but not for long: if they are not in within 0.7 s
     * the first visit gets the flash, and keeps the full titles for later. */
    var wanted = mode === 'full' ? order.map(function (k) { return ED[k].load; }).concat('600 1em "Hanken Grotesk"')
      : ed === 'city' ? [ED.city.load] : [];
    var started = false;
    var go = guard(function () {
      if (started) return;
      started = true;
      whenVisible(guard(function () {
        if (mode === 'full') { full(); if (skip) skip.focus({ preventScroll: true }); } else flash();
      }));
    });
    var cap = setTimeout(guard(function () { if (mode === 'full') mode = 'flash'; go(); }), mode === 'full' ? 700 : 400);
    timers.push(cap);
    if (document.fonts && wanted.length) {
      Promise.all(wanted.map(function (f) { return document.fonts.load(f); }))
        .then(function () { clearTimeout(cap); go(); }, function () { clearTimeout(cap); go(); });
    } else { clearTimeout(cap); go(); }
  } catch (e) { teardown(); }
}());
