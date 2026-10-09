/* ---------------------------------------------------------------------------
 * Career Explorer: search, filters and the side-by-side compare.
 *
 * Everything works without this file: every role is linked from the static
 * lists and tables. This only narrows them. The search index is a JSON file
 * built with the pages (careers/data/search-index.json), fetched from this
 * site the first time a search box is used; nothing else is requested.
 * ------------------------------------------------------------------------- */

(function () {
  'use strict';

  function T(s, v) { return window.I18N ? I18N.t(s, v) : String(s).replace(/\{(\w+)\}/g, function (m, k) { return v && v[k] !== undefined ? v[k] : m; }); }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined) e.textContent = text;
    return e;
  }
  function fold(s) {
    return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/&/g, ' and ');
  }

  /* ---------------------------------------------------------------- search */

  var INDEX = null, LOADING = null;
  function loadIndex(url) {
    if (INDEX) return Promise.resolve(INDEX);
    if (LOADING) return LOADING;
    LOADING = fetch(url, { credentials: 'same-origin' }).then(function (r) {
      if (!r.ok) throw new Error(r.status);
      return r.json();
    }).then(function (rows) {
      INDEX = rows.map(function (r) {
        return { r: r, t: fold(r.t), n: fold(r.n), f: fold(r.f), w: fold(r.w), e: fold(r.e) };
      });
      return INDEX;
    });
    return LOADING;
  }

  /* Every word must appear somewhere; a hit in the title counts most, then
   * the short names, the field, the employers and the description. */
  function search(q) {
    var words = fold(q).split(/[^a-z0-9+#]+/).filter(function (w) { return w.length > 1 || /\d/.test(w); });
    if (!words.length) return [];
    var out = [];
    INDEX.forEach(function (x) {
      var score = 0;
      for (var i = 0; i < words.length; i++) {
        var w = words[i], s = 0;
        if (x.t.indexOf(w) > -1) s += 10;
        if (x.n.indexOf(w) > -1) s += 6;
        if (x.f.indexOf(w) > -1) s += 4;
        if (x.e.indexOf(w) > -1) s += 3;
        if (x.w.indexOf(w) > -1) s += 2;
        if (!s) return;
        score += s;
      }
      out.push({ x: x, s: score });
    });
    out.sort(function (a, b) { return b.s - a.s || a.x.r.t.localeCompare(b.x.r.t); });
    return out;
  }

  function searchBox(input) {
    var url = input.getAttribute('data-cx-search');
    var base = input.getAttribute('data-cx-base') || '';
    var inline = input.hasAttribute('data-cx-inline');
    var box = inline ? null : document.getElementById(input.getAttribute('aria-controls'));
    var timer = null;
    function failMsg(target) {
      target.innerHTML = '';
      target.appendChild(el('p', 'none', T('Search could not load here. Every role is listed on the All roles page.')));
    }
    function draw() {
      var q = input.value.trim();
      if (inline) { if (window.CX_FILTER) window.CX_FILTER(); return; }
      box.innerHTML = '';
      if (!q) return;
      var hits = search(q).slice(0, 25);
      if (!hits.length) { box.appendChild(el('p', 'none', T('No role matches “{q}”.', { q: q }))); return; }
      var ol = el('ol');
      hits.forEach(function (h) {
        var li = el('li'), a = el('a');
        a.href = base + h.x.r.u;
        var t = el('span', 't', h.x.r.t);
        t.setAttribute('translate', 'no');
        t.lang = 'en';
        a.appendChild(t);
        a.appendChild(el('span', 'm', h.x.r.f));
        li.appendChild(a);
        ol.appendChild(li);
      });
      box.appendChild(ol);
    }
    function go() {
      clearTimeout(timer);
      timer = setTimeout(function () {
        loadIndex(url).then(draw, function () { if (box) failMsg(box); });
      }, 120);
    }
    input.addEventListener('input', go);
    input.addEventListener('focus', function () { loadIndex(url).catch(function () {}); }, { once: true });
    /* Down arrow from the box moves into the results. */
    input.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown' && box) { var a = $('a', box); if (a) { e.preventDefault(); a.focus(); } }
    });
    if (box) box.addEventListener('keydown', function (e) {
      if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
      var links = $$('a', box), i = links.indexOf(document.activeElement);
      if (i < 0) return;
      e.preventDefault();
      if (e.key === 'ArrowDown' && links[i + 1]) links[i + 1].focus();
      if (e.key === 'ArrowUp') (links[i - 1] || input).focus();
    });
    if (input.value) go();
  }

  /* ----------------------------------------------------------- filtering */

  function leanOf(row) {
    var p = +row.getAttribute('data-people'), q = +row.getAttribute('data-quant');
    return q > p ? 'quant' : p > q ? 'people' : 'even';
  }
  function keep(row, f) {
    if (f.field && row.getAttribute('data-field') !== f.field) return false;
    if (f.difficulty && +row.getAttribute('data-difficulty') > +f.difficulty) return false;
    if (f.stress && +row.getAttribute('data-stress') > +f.stress) return false;
    if (f.lean && leanOf(row) !== f.lean) return false;
    return true;
  }
  function readForm(form) {
    var f = {};
    $$('select, input[type="search"]', form).forEach(function (c) { f[c.name] = c.value; });
    return f;
  }
  /* Filters live in the address (?field=finance&stress=3), so a filtered
   * list can be shared and Back restores it. */
  function syncUrl(f, extra) {
    try {
      var p = new URLSearchParams();
      Object.keys(f).forEach(function (k) { if (f[k]) p.set(k, f[k]); });
      if (extra) Object.keys(extra).forEach(function (k) { if (extra[k]) p.set(k, extra[k]); });
      var s = p.toString();
      history.replaceState(null, '', location.pathname + (s ? '?' + s : '') + location.hash);
    } catch (e) { /* file: or sandboxed */ }
  }
  function fromUrl(form) {
    var p = new URLSearchParams(location.search);
    $$('select, input[type="search"]', form).forEach(function (c) { if (p.get(c.name)) c.value = p.get(c.name); });
  }

  /* All roles page */
  function rolesPage(form) {
    form.hidden = false;
    fromUrl(form);
    var items = $$('.cx-allroles .cx-roleitem');
    var blocks = $$('.cx-allroles .cx-fieldblock');
    var count = $('[data-cx-count]', form), none = $('[data-cx-none]');
    var input = $('input[type="search"]', form);
    function apply() {
      var f = readForm(form);
      var q = f.q.trim();
      var allowed = null;
      if (q && INDEX) {
        allowed = {};
        search(q).forEach(function (h) { allowed[h.x.r.u.replace(/^roles\/|\.html$/g, '')] = true; });
      }
      var n = 0;
      items.forEach(function (li) {
        var ok = keep(li, f) && (!allowed || allowed[li.getAttribute('data-id')]);
        li.hidden = !ok;
        if (ok) n++;
      });
      blocks.forEach(function (b) { b.hidden = !$$('.cx-roleitem', b).some(function (li) { return !li.hidden; }); });
      count.textContent = T('{n} of {total} role families shown', { n: n, total: items.length });
      none.hidden = n > 0;
      syncUrl(f);
    }
    window.CX_FILTER = apply;
    $$('select', form).forEach(function (s) { s.addEventListener('change', apply); });
    form.addEventListener('submit', function (e) { e.preventDefault(); });
    if (input.value) loadIndex(input.getAttribute('data-cx-search')).then(apply, apply);
    apply();
  }

  /* Compare page */
  function comparePage(table) {
    var form = $('[data-cx-compare-filters]');
    var side = $('[data-cx-side]'), grid = $('[data-cx-side-grid]'), help = $('[data-cx-side-help]');
    var tbody = table.tBodies[0];
    var rows = $$('tr', tbody);
    var head = $$('thead th', table);
    var MAX = 3;
    form.hidden = false;
    side.hidden = false;
    fromUrl(form);

    function apply() {
      var f = readForm(form), q = fold(f.q).trim(), n = 0;
      rows.forEach(function (tr) {
        var ok = keep(tr, f) && (!q || fold(tr.getAttribute('data-name')).indexOf(q) > -1);
        tr.hidden = !ok;
        if (ok) n++;
      });
      $('[data-cx-count]', form).textContent = T('{n} of {total} role families shown', { n: n, total: rows.length });
      syncUrl(f, { pick: picked().join(',') });
    }
    $$('select', form).forEach(function (s) { s.addEventListener('change', apply); });
    $('input[type="search"]', form).addEventListener('input', apply);
    form.addEventListener('submit', function (e) { e.preventDefault(); });

    /* Sorting: numbers on the first figure, the field by name; a second click
     * reverses; ties keep the research's own order. */
    rows.forEach(function (tr, i) { tr.setAttribute('data-order', i); });
    head.forEach(function (th) {
      var key = th.getAttribute('data-sort');
      if (!key) return;
      $('button', th).addEventListener('click', function () {
        var dir = th.getAttribute('aria-sort') === 'ascending' ? 'descending' : 'ascending';
        head.forEach(function (h) { if (h.hasAttribute('aria-sort')) h.setAttribute('aria-sort', 'none'); });
        th.setAttribute('aria-sort', dir);
        var sign = dir === 'ascending' ? 1 : -1;
        rows.sort(function (a, b) {
          var x, y;
          if (key === 'field') { x = a.getAttribute('data-fname'); y = b.getAttribute('data-fname'); return sign * x.localeCompare(y) || (a.getAttribute('data-order') - b.getAttribute('data-order')); }
          x = +a.getAttribute('data-' + key); y = +b.getAttribute('data-' + key);
          return sign * (x - y) || (a.getAttribute('data-order') - b.getAttribute('data-order'));
        });
        rows.forEach(function (tr) { tbody.appendChild(tr); });
      });
    });

    /* Picking up to three. */
    function boxes() { return $$('.cx-pick input', tbody); }
    function picked() { return boxes().filter(function (b) { return b.checked; }).map(function (b) { return b.value; }); }
    function drawSide() {
      var ids = picked();
      grid.innerHTML = '';
      help.textContent = ids.length ? T('{n} of {max} chosen. Untick a role in the table, or remove it here.', { n: ids.length, max: MAX })
        : T('Tick up to three roles in the table.');
      boxes().forEach(function (b) {
        b.disabled = !b.checked && ids.length >= MAX;
        b.closest('tr').classList.toggle('picked', b.checked);
      });
      var labels = $$('thead th', table).map(function (th) { return th.textContent.trim(); });
      ids.forEach(function (id) {
        var tr = rows.filter(function (r) { return r.getAttribute('data-id') === id; })[0];
        if (!tr) return;
        var cells = tr.children;
        var col = el('div', 'cx-side-col');
        var h = el('h3');
        var a = cells[1].querySelector('a').cloneNode(true);
        h.appendChild(a);
        col.appendChild(h);
        col.appendChild(el('p', 'f', cells[2].textContent));
        var dl = el('dl');
        for (var i = 3; i < cells.length; i++) {
          dl.appendChild(el('dt', null, labels[i]));
          var dd = el('dd');
          dd.innerHTML = cells[i].innerHTML;
          dl.appendChild(dd);
        }
        col.appendChild(dl);
        var rm = el('button', 'cx-btn-text', T('Remove'));
        rm.type = 'button';
        rm.addEventListener('click', function () {
          var b = $('.cx-pick input', tr);
          b.checked = false;
          drawSide();
          b.focus();
        });
        col.appendChild(rm);
        grid.appendChild(col);
      });
      syncUrl(readForm(form), { pick: ids.join(',') });
    }
    boxes().forEach(function (b) { b.addEventListener('change', drawSide); });
    var pre = (new URLSearchParams(location.search).get('pick') || '').split(',').filter(Boolean).slice(0, MAX);
    boxes().forEach(function (b) { if (pre.indexOf(b.value) > -1) b.checked = true; });
    drawSide();
    apply();
  }

  /* ----------------------------------------------------------- contents */

  /* On a phone the contents start folded; the current section is marked as
   * you read on a wide screen. */
  function contents() {
    var toc = $('.cx-toc details');
    if (!toc) return;
    if (window.matchMedia && window.matchMedia('(max-width: 1039px)').matches) toc.open = false;
    if (!('IntersectionObserver' in window)) return;
    var links = $$('a', toc);
    var map = {};
    links.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (a) { a.classList.remove('on'); });
        var a = map[en.target.id];
        if (a) a.classList.add('on');
      });
    }, { rootMargin: '-20% 0px -70% 0px' });
    Object.keys(map).forEach(function (id) { var s = document.getElementById(id); if (s) obs.observe(s); });
    toc.addEventListener('click', function (e) {
      if (e.target.closest('a') && window.matchMedia('(max-width: 1039px)').matches) toc.open = false;
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    $$('[data-cx-search]').forEach(searchBox);
    var rf = $('[data-cx-filters]');
    if (rf) rolesPage(rf);
    var ct = $('[data-cx-compare]');
    if (ct) comparePage(ct);
    contents();
  });
}());
