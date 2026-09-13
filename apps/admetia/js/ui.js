/* ---------------------------------------------------------------------------
 * Presentation helpers. Nothing here computes or changes a score.
 *
 * Three jobs:
 *   1. Reveal elements as they scroll into view.
 *   2. Shadow the top bar once the page has scrolled under it.
 *   3. Draw the animated score dial and count its number up.
 *
 * All three degrade to nothing. The `no-js` class is removed immediately so
 * that a page whose scripts fail still shows every .reveal element rather than
 * a column of invisible boxes.
 * ------------------------------------------------------------------------ */

window.UI = (function () {
  'use strict';

  var reduced = false;
  try {
    reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch (e) { /* older browser: assume motion is fine */ }

  /* ------------------------------------------------------------------ */
  /* Reveal on scroll                                                    */
  /* ------------------------------------------------------------------ */

  var observer = null;

  function ensureObserver() {
    if (observer || !window.IntersectionObserver) return observer;
    observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      });
    }, {
      /* On a phone the fold cuts through a card, and waiting for 8% more
       * scroll leaves a visible empty box; reveal as soon as any of it shows. */
      rootMargin: window.innerWidth <= 640 ? '0px' : '0px 0px -8% 0px',
      threshold: window.innerWidth <= 640 ? 0 : 0.05
    });
    return observer;
  }

  /* Watch every .reveal inside `root` that is not already showing. Elements
   * are staggered in document order, capped so a long list does not end up
   * waiting a second and a half for its last row. */
  function reveal(root) {
    root = root || document;
    var nodes = root.querySelectorAll ? root.querySelectorAll('.reveal') : [];
    if (!nodes.length) return;

    if (reduced || !window.IntersectionObserver) {
      Array.prototype.forEach.call(nodes, function (n) { n.classList.add('in'); n.style.animation = 'none'; n.style.opacity = 1; });
      return;
    }

    var o = ensureObserver();
    Array.prototype.forEach.call(nodes, function (n, i) {
      if (n.classList.contains('in')) return;
      if (!n.style.getPropertyValue('--d')) {
        n.style.setProperty('--d', Math.min(i, 7) * 0.055 + 's');
      }
      o.observe(n);
    });

    /* Safety net. The animation is decoration; the content is not. If anything
     * is still hidden a few seconds later — an observer that never fired, an
     * element revealed inside a container that was display:none at observe
     * time — show it rather than leaving a blank space on the page. */
    window.setTimeout(function () {
      Array.prototype.forEach.call(nodes, function (n) {
        if (!n.classList.contains('in')) { n.classList.add('in'); }
      });
    }, 3000);
  }

  /* ------------------------------------------------------------------ */
  /* Sticky top bar                                                      */
  /* ------------------------------------------------------------------ */

  function stickyBar() {
    var bar = document.querySelector('.topbar');
    if (!bar) return;
    var ticking = false;
    function update() {
      bar.classList.toggle('stuck', window.scrollY > 6);
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    }, { passive: true });
    update();
  }

  /* ------------------------------------------------------------------ */
  /* Score dial                                                          */
  /* ------------------------------------------------------------------ */

  var SVGNS = 'http://www.w3.org/2000/svg';
  var dialSeq = 0;

  function svg(name, attrs) {
    var n = document.createElementNS(SVGNS, name);
    Object.keys(attrs || {}).forEach(function (k) { n.setAttribute(k, attrs[k]); });
    return n;
  }

  /* A 0–100 dial. `sub` is the small caption under the number. */
  function dial(value, sub) {
    var size = 108, r = 45, cx = size / 2, cy = size / 2;
    var circ = 2 * Math.PI * r;
    var pct = Math.max(0, Math.min(100, value)) / 100;
    var id = 'dialgrad-' + (++dialSeq);

    var root = svg('svg', {
      width: size, height: size, viewBox: '0 0 ' + size + ' ' + size,
      role: 'img', 'aria-label': value + ' out of 100'
    });

    var defs = svg('defs');
    var grad = svg('linearGradient', { id: id, x1: '0', y1: '1', x2: '1', y2: '0' });
    grad.appendChild(svg('stop', { offset: '0', 'stop-color': 'var(--accent)' }));
    grad.appendChild(svg('stop', { offset: '1', 'stop-color': 'var(--accent-2)' }));
    defs.appendChild(grad);
    root.appendChild(defs);

    /* Three-quarter dial, opened at the bottom: rotated so the gap sits under
     * the number rather than beside it. */
    var g = svg('g', { transform: 'rotate(-90 ' + cx + ' ' + cy + ')' });
    g.appendChild(svg('circle', {
      class: 'ring-bg', cx: cx, cy: cy, r: r, fill: 'none', 'stroke-width': 9
    }));
    var fg = svg('circle', {
      class: 'ring-fg', cx: cx, cy: cy, r: r, fill: 'none', 'stroke-width': 9,
      stroke: 'url(#' + id + ')',
      'stroke-dasharray': circ,
      'stroke-dashoffset': circ * (1 - pct)
    });
    fg.style.setProperty('--from', circ);
    fg.style.setProperty('--to', circ * (1 - pct));
    if (reduced) fg.style.animation = 'none';
    g.appendChild(fg);
    root.appendChild(g);

    var label = svg('text', {
      class: 'ring-label', x: cx, y: cy + (sub ? 1 : 7), 'text-anchor': 'middle'
    });
    label.textContent = reduced ? String(value) : '0';
    root.appendChild(label);

    if (sub) {
      var s = svg('text', { class: 'ring-sub', x: cx, y: cy + 16, 'text-anchor': 'middle' });
      s.textContent = sub;
      root.appendChild(s);
    }

    if (!reduced) countTo(label, value, 900);
    return root;
  }

  /* Count a number up, easing out. Uses textContent on whatever node is
   * passed, so it works on both SVG <text> and ordinary elements. */
  function countTo(node, target, ms) {
    var start = null;
    var decimals = (String(target).split('.')[1] || '').length;
    function frame(ts) {
      if (start === null) start = ts;
      var t = Math.min(1, (ts - start) / ms);
      var eased = 1 - Math.pow(1 - t, 3);
      node.textContent = (target * eased).toFixed(decimals);
      if (t < 1) window.requestAnimationFrame(frame);
      else node.textContent = String(target);
    }
    window.requestAnimationFrame(frame);
  }

  document.documentElement.classList.remove('no-js');
  document.addEventListener('DOMContentLoaded', function () {
    stickyBar();
    reveal(document);
  });

  return { reveal: reveal, dial: dial, countTo: countTo, reduced: reduced };
}());
