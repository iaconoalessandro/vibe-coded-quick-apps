/* ---------------------------------------------------------------------------
 * Languages: English first, Italian second.
 *
 * English is the source everywhere — in the pages, the scripts and the
 * models — and a translation is a dictionary keyed by that English:
 *
 *   js/i18n-it.js            the interface: pages, buttons, results sentences
 *   data/i18n-it-models.js   the questions, options, notes and school facts
 *
 * Three ways text gets translated, all from the same dictionary:
 *
 *   I18N.t(s, vars)   in scripts. Sentences with numbers in them are written
 *                     as templates — 'In {n} days' — and filled after lookup.
 *                     Wizard.el() passes its text through t() by itself.
 *   localize(model)   the models are translated in place when they load, so
 *                     every label, help line and fact arrives already in
 *                     Italian. Only prose fields are touched (ALLOW below);
 *                     ids, regions and anything the scorers compare stay as
 *                     they are, which is why the scores cannot change.
 *   the static walk   the HTML each page ships with, translated once before
 *                     it is shown. A paragraph with inline markup (<em>, <a>)
 *                     is looked up by its whole innerHTML, so the Italian can
 *                     put the emphasis where Italian word order wants it.
 *
 * Anything with no entry stays in English rather than breaking — so an
 * edited English sentence shows in English until its translation is updated
 * (`node tools/i18n-report.js` lists what is missing).
 *
 * The choice lives in localStorage under admissions-calc:lang. js/theme.js
 * reads it before first paint to set <html lang> and hold the page hidden
 * until this file has translated it, so Italian readers never see a flash
 * of English.
 * ------------------------------------------------------------------------- */

window.I18N = (function () {
  'use strict';

  var KEY = 'admissions-calc:lang';
  var LANGS = [
    { id: 'en', label: 'EN', name: 'English' },
    { id: 'it', label: 'IT', name: 'Italiano' }
  ];

  function stored() {
    try { return localStorage.getItem(KEY) === 'it' ? 'it' : 'en'; } catch (e) { return 'en'; }
  }

  var lang = stored();
  var dict = Object.create(null);
  var misses = Object.create(null);

  /* Only the chosen language's entries are kept; the other file still loads
   * but is dropped on arrival. The first dictionary to arrive is the
   * interface one (js/i18n-it.js, the next deferred script), and the page's
   * own HTML is translated there and then — before any later script draws. */
  var walked = false;
  function add(l, entries) {
    if (l !== lang) return;
    for (var k in entries) if (Object.prototype.hasOwnProperty.call(entries, k)) dict[k] = entries[k];
    if (!walked && typeof document !== 'undefined' && document.body) {
      walked = true;
      translateDom(document.body);
    }
  }

  function fill(s, vars) {
    if (!vars) return s;
    return String(s).replace(/\{(\w+)\}/g, function (m, k) {
      return vars[k] !== undefined && vars[k] !== null ? vars[k] : m;
    });
  }

  function t(s, vars) {
    if (typeof s !== 'string') return s;
    var out = s;
    if (lang !== 'en') {
      if (dict[s] !== undefined) out = dict[s];
      else if (/[a-z]{3}/.test(s)) misses[s] = true;
    }
    return fill(out, vars);
  }

  /* One or many: tn(3, '{n} programme', '{n} programmes'). */
  function tn(n, one, many, vars) {
    var v = { n: n };
    if (vars) for (var k in vars) v[k] = vars[k];
    return t(n === 1 ? one : many, v);
  }

  /* ------------------------------------------------------------------ */
  /* Numbers and dates                                                   */
  /* ------------------------------------------------------------------ */

  /* English prints one to nine in words, as a paper does. Italian keeps
   * figures: its number words change with the gender of the noun. */
  var WORDS = ['none', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  function words(n) {
    if (lang === 'it') return String(n);
    return WORDS[n] || String(n);
  }

  function ordinal(n) {
    if (lang === 'it') return n + 'º';
    var s = ['th', 'st', 'nd', 'rd'], v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  }

  var MONTHS = {
    en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    it: ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic']
  };
  function month(i) { return (MONTHS[lang] || MONTHS.en)[i]; }

  function cap(s) { s = String(s); return s.charAt(0).toUpperCase() + s.slice(1); }

  /* ------------------------------------------------------------------ */
  /* Models, translated in place                                        */
  /* ------------------------------------------------------------------ */

  /* Fields that hold prose. A string is translated only when its own key —
   * or, inside an array, the array's key — is one of these. */
  var ALLOW = {
    label: 1, blurb: 1, help: 1, note: 1, because: 1, v: 1, k: 1, why: 1, intro: 1,
    heading: 1, detail: 1, title: 1, short: 1, full: 1, from: 1, window: 1, source: 1,
    unit: 1, name: 1, items: 1
  };

  function localize(obj) {
    if (lang === 'en' || !obj) return obj;
    var seen = [];
    (function walk(o, key) {
      if (!o || typeof o !== 'object' || seen.indexOf(o) !== -1) return;
      seen.push(o);
      var isArr = Array.isArray(o);
      Object.keys(o).forEach(function (k) {
        var v = o[k], eff = isArr ? key : k;
        if (typeof v === 'string') {
          if (ALLOW[eff] && dict[v] !== undefined) o[k] = dict[v];
        } else if (v && typeof v === 'object' && !(v instanceof RegExp)) {
          walk(v, eff);
        }
      });
    }(obj, null));
    return obj;
  }

  /* ------------------------------------------------------------------ */
  /* The HTML each page ships with                                      */
  /* ------------------------------------------------------------------ */

  var INLINE = { A: 1, EM: 1, STRONG: 1, B: 1, I: 1, SPAN: 1, SMALL: 1, BR: 1, ABBR: 1,
                 CODE: 1, SUP: 1, SUB: 1, MARK: 1, Q: 1, CITE: 1, TIME: 1 };
  var SKIP = { SCRIPT: 1, STYLE: 1, NOSCRIPT: 1, TEMPLATE: 1, svg: 1, SVG: 1 };
  var ATTRS = ['alt', 'title', 'aria-label', 'placeholder'];

  function norm(s) { return s.replace(/\s+/g, ' ').trim(); }

  function ownText(el) {
    for (var n = el.firstChild; n; n = n.nextSibling) {
      if (n.nodeType === 3 && /\S/.test(n.nodeValue)) return true;
    }
    return false;
  }
  function inlineOnly(el) {
    for (var c = el.firstElementChild; c; c = c.nextElementSibling) {
      if (!INLINE[c.tagName] || !inlineOnly(c)) return false;
    }
    return true;
  }

  function lookup(key, record) {
    if (dict[key] !== undefined) return dict[key];
    if (record && /[a-z]{3}/.test(key)) misses[key] = true;
    return null;
  }

  function attrs(el) {
    ATTRS.forEach(function (a) {
      var v = el.getAttribute(a);
      if (v && /[a-z]/i.test(v)) {
        var tr = lookup(norm(v), true);
        if (tr !== null) el.setAttribute(a, tr);
      }
    });
  }

  function textNode(n, record) {
    var raw = n.nodeValue, key = norm(raw);
    if (!key) return;
    var tr = lookup(key, record);
    if (tr === null) return;
    var lead = raw.match(/^\s*/)[0], trail = raw.match(/\s*$/)[0];
    n.nodeValue = lead + tr + trail;
  }

  function walkEl(el, record) {
    if (SKIP[el.tagName] || el.getAttribute('translate') === 'no') return;
    attrs(el);
    var asBlock = ownText(el) && inlineOnly(el);
    if (asBlock) {
      var tr = lookup(norm(el.innerHTML), record);
      if (tr !== null) { el.innerHTML = tr; return; }
    }
    for (var n = el.firstChild; n; n = n.nextSibling) {
      if (n.nodeType === 3) textNode(n, record && !asBlock);
      else if (n.nodeType === 1) walkEl(n, record && !asBlock);
    }
  }

  function translateDom(root) {
    if (lang === 'en' || typeof document === 'undefined') return;
    root = root || document.body;
    if (root === document.body) {
      var title = lookup(norm(document.title), true);
      if (title !== null) document.title = title;
      var meta = document.querySelector('meta[name="description"]');
      if (meta) {
        var d = lookup(norm(meta.getAttribute('content') || ''), true);
        if (d !== null) meta.setAttribute('content', d);
      }
    }
    if (root) walkEl(root, true);
  }

  /* ------------------------------------------------------------------ */
  /* The picker, in the top strip beside the editions                   */
  /* ------------------------------------------------------------------ */

  function choose(id) {
    if (id === lang) return;
    try { localStorage.setItem(KEY, id); } catch (e) { /* private window: this visit only */ }
    if (window.Stats) Stats.event('language-' + id);
    /* Everything on the page was drawn in the old language, answers
     * included in the results, so the simplest honest switch is a reload. */
    location.reload();
  }

  function buildPicker() {
    var host = document.querySelector('.ticker .edition') || document.querySelector('.edition');
    if (!host || host.querySelector('.lang-set')) return;
    var set = document.createElement('div');
    set.className = 'edition-set lang-set';
    set.setAttribute('role', 'radiogroup');
    set.setAttribute('aria-label', t('Language'));
    var buttons = LANGS.map(function (L) {
      var b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('role', 'radio');
      b.setAttribute('data-lang', L.id);
      b.setAttribute('aria-checked', L.id === lang ? 'true' : 'false');
      b.setAttribute('lang', L.id);
      b.title = L.name;
      var s = document.createElement('span');
      s.className = 'lt';
      s.textContent = L.label;
      b.appendChild(s);
      b.addEventListener('click', function () { choose(L.id); });
      set.appendChild(b);
      return b;
    });
    set.addEventListener('keydown', function (e) {
      var dir = e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1
              : e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? -1 : 0;
      if (!dir) return;
      e.preventDefault();
      var i = LANGS.map(function (L) { return L.id; }).indexOf(lang);
      buttons[(i + dir + LANGS.length) % LANGS.length].click();
    });
    host.insertBefore(set, host.firstChild);
  }

  if (typeof document !== 'undefined') {
    if (lang !== 'en') document.documentElement.lang = lang;
    document.addEventListener('DOMContentLoaded', function () {
      buildPicker();
      /* Every deferred script has drawn by now, in the right language. */
      document.documentElement.classList.remove('i18n-wait');
    });
  }

  return {
    lang: lang,
    langs: LANGS,
    add: add,
    t: t,
    tn: tn,
    words: words,
    ordinal: ordinal,
    month: month,
    cap: cap,
    locale: lang === 'it' ? 'it-IT' : 'en-GB',
    localize: localize,
    translateDom: translateDom,
    /* For checking coverage from the console: what was looked up and not
     * found, and every key a page's HTML would be looked up by —
     * collect(new DOMParser().parseFromString(html, 'text/html')). */
    misses: function () { return Object.keys(misses); },
    collect: function (doc) {
      var saved = misses, out;
      misses = Object.create(null);
      var title = doc.querySelector('title');
      if (title) lookup(norm(title.textContent), true);
      var meta = doc.querySelector('meta[name="description"]');
      if (meta) lookup(norm(meta.getAttribute('content') || ''), true);
      walkEl(doc.body, true);
      out = Object.keys(misses).filter(function (k) { return dict[k] === undefined; });
      misses = saved;
      return out;
    }
  };
}());
