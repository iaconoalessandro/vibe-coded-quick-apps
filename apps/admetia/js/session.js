/* ---------------------------------------------------------------------------
 * Saved-answer controls.
 *
 * Three ways to get rid of your data:
 *   1. "Clear everything" in the footer, on any page — wipes every calculator.
 *   2. A banner on the wizards offering a fresh start when saved answers exist.
 *   3. An opt-in setting that wipes everything when you close the tab.
 *
 * A browser will not let a page put its own interface in front of you on close
 * — the only thing available is a generic "leave site?" dialog with text the
 * page cannot control. So rather than nagging with that, the close-time option
 * is a switch you set once and it then just happens.
 * ------------------------------------------------------------------------- */

window.Session = (function () {
  'use strict';

  var PREFIX = 'admissions-calc:';
  var WIPE_KEY = PREFIX + 'wipe-on-close';
  /* Settings, not answers: the edition, the language, the visit-count
   * opt-out, and this switch. */
  var KEEP = [PREFIX + 'theme', PREFIX + 'lang', PREFIX + 'no-count', WIPE_KEY];
  function T(s, v) { return window.I18N ? I18N.t(s, v) : s; }

  function answerKeys() {
    var out = [];
    try {
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (k && k.indexOf(PREFIX) === 0 && KEEP.indexOf(k) === -1) out.push(k);
      }
    } catch (e) { /* storage unavailable */ }
    return out;
  }

  function hasAnswers() { return answerKeys().length > 0; }

  function clearAll() {
    answerKeys().forEach(function (k) {
      try { localStorage.removeItem(k); } catch (e) { /* ignore */ }
    });
  }

  function wipeOnClose() {
    try { return localStorage.getItem(WIPE_KEY) === '1'; } catch (e) { return false; }
  }
  function setWipeOnClose(on) {
    try {
      if (on) localStorage.setItem(WIPE_KEY, '1');
      else localStorage.removeItem(WIPE_KEY);
    } catch (e) { /* ignore */ }
  }

  /* pagehide fires on close, navigation away and tab discard, and unlike
   * beforeunload it is reliable on mobile Safari. */
  window.addEventListener('pagehide', function (e) {
    if (e.persisted) return;          // going into the back/forward cache, not closing
    if (wipeOnClose()) clearAll();
  });

  function describe() {
    var n = answerKeys().length;
    if (!n) return T('Nothing saved.');
    return n === 1 ? T('One calculator has saved answers.')
                   : T('{n} calculators have saved answers.', { n: n });
  }

  /* ------------------------------------------------------------------ */

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined) n.textContent = T(text);
    return n;
  }

  function buildFooterControls() {
    var foot = document.querySelector('footer.foot');
    if (!foot) return;

    var box = el('div', 'privacy-box');

    var row = el('div', 'privacy-row');
    var status = el('span', 'privacy-status', describe());
    row.appendChild(status);

    var btn = el('button', 'btn ghost small', 'Clear everything');
    btn.type = 'button';
    btn.addEventListener('click', function () {
      if (!hasAnswers()) return;
      if (!confirm(T('Delete every saved answer, across all calculators?') + '\n\n' + T('This cannot be undone.'))) return;
      clearAll();
      status.textContent = describe();
      sync();
      /* If a wizard is on screen it is now showing stale answers, so reload. */
      if (document.getElementById('wizard')) location.reload();
    });
    row.appendChild(btn);
    box.appendChild(row);

    var lbl = el('label', 'privacy-toggle');
    var cb = document.createElement('input');
    cb.type = 'checkbox';
    cb.checked = wipeOnClose();
    cb.addEventListener('change', function () { setWipeOnClose(cb.checked); });
    lbl.appendChild(cb);
    lbl.appendChild(el('span', null, 'Forget everything when I close this tab'));
    box.appendChild(lbl);

    function sync() {
      btn.disabled = !hasAnswers();
      status.textContent = describe();
    }
    sync();

    foot.insertBefore(box, foot.firstChild);
  }

  /* Offer a clean start when arriving at a wizard that already has answers. */
  function buildResumeBanner() {
    var mount = document.getElementById('wizard');
    if (!mount || !hasAnswers()) return;

    var bar = el('div', 'resume-bar');
    bar.appendChild(el('span', null, 'Picking up where you left off — your previous answers are filled in.'));

    var fresh = el('button', 'btn ghost small', 'Start fresh');
    fresh.type = 'button';
    fresh.addEventListener('click', function () {
      if (!confirm(T('Clear every saved answer, across all calculators?'))) return;
      clearAll();
      location.reload();
    });
    bar.appendChild(fresh);

    var dismiss = el('button', 'btn ghost small', 'Keep them');
    dismiss.type = 'button';
    dismiss.addEventListener('click', function () { bar.remove(); });
    bar.appendChild(dismiss);

    mount.parentNode.insertBefore(bar, mount);
  }

  document.addEventListener('DOMContentLoaded', function () {
    buildFooterControls();
    buildResumeBanner();
  });

  return {
    clearAll: clearAll,
    hasAnswers: hasAnswers,
    wipeOnClose: wipeOnClose,
    setWipeOnClose: setWipeOnClose,
    describe: describe
  };
}());
