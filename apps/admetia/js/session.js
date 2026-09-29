/* ---------------------------------------------------------------------------
 * Saved-answer controls.
 *
 * Two ways to get rid of your data:
 *   1. "Clear everything" in the footer, on any page — wipes every calculator.
 *   2. A banner on the wizards offering a fresh start when saved answers exist.
 *
 * (A third, wiping everything when the tab closes, was removed: one clear
 * button is easier to understand than a setting that acts on its own.)
 * ------------------------------------------------------------------------- */

window.Session = (function () {
  'use strict';

  var PREFIX = 'admissions-calc:';
  /* Settings, not answers: the edition, the language, the visit-count
   * opt-out. */
  var KEEP = [PREFIX + 'theme', PREFIX + 'lang', PREFIX + 'no-count'];
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

  /* The old "forget when I close this tab" switch is gone; drop the setting
   * it left behind so nothing keeps a dead flag. */
  try { localStorage.removeItem(PREFIX + 'wipe-on-close'); } catch (e) { /* ignore */ }

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

    function sync() {
      btn.disabled = !hasAnswers();
      status.textContent = describe();
    }
    sync();

    foot.insertBefore(box, foot.firstChild);
  }

  /* Arriving at a wizard that already has answers: offer the results they
   * lead to, or a clean start. Speaks for this calculator only — answers
   * saved in another one are not "filled in" here. */
  function buildResumeBanner() {
    var mount = document.getElementById('wizard');
    var key = mount && mount.dataset.store;
    if (!key || !storedAnswers(key)) return;

    var bar = el('div', 'resume-bar');
    bar.appendChild(el('span', null, 'Picking up where you left off — your previous answers are filled in.'));

    var see = el('a', 'btn primary small', 'See my results →');
    see.href = '#results';
    see.addEventListener('click', function () { bar.remove(); });
    bar.appendChild(see);

    var fresh = el('button', 'btn ghost small', 'Start fresh');
    fresh.type = 'button';
    fresh.addEventListener('click', function () {
      if (!confirm(T('Clear your answers to this calculator and start over?'))) return;
      try { localStorage.removeItem(PREFIX + key); } catch (e) { /* ignore */ }
      location.reload();
    });
    bar.appendChild(fresh);

    var dismiss = el('button', 'btn ghost small', 'Keep them');
    dismiss.type = 'button';
    dismiss.addEventListener('click', function () { bar.remove(); });
    bar.appendChild(dismiss);

    mount.parentNode.insertBefore(bar, mount);
  }

  /* Whether one calculator's saved answers hold anything. */
  function storedAnswers(key) {
    try {
      var raw = localStorage.getItem(PREFIX + key);
      return !!raw && Object.keys(JSON.parse(raw) || {}).length > 0;
    } catch (e) { return false; }
  }

  /* Where each calculator lives, keyed by the name its answers are saved under. */
  var CALCS = [
    ['mba2', 'mba.html', 'MBA'],
    ['masters:mif', 'masters.html?track=mif', 'Finance'],
    ['masters:mim', 'masters.html?track=mim', 'Management'],
    ['masters:marketing', 'masters.html?track=marketing', 'Marketing'],
    ['it:cs', 'computing.html?track=cs', 'Computer Science'],
    ['it:dsai', 'computing.html?track=dsai', 'Data & AI'],
    ['it:conversion', 'computing.html?track=conversion', 'Conversion']
  ];
  function saved() { return CALCS.filter(function (c) { return storedAnswers(c[0]); }); }

  /* On the track pickers, a calculator you have already filled in opens on
   * its results instead of on question one. */
  function markSavedLinks() {
    saved().forEach(function (c) {
      document.querySelectorAll('a.story[href="' + c[1] + '"]').forEach(function (a) {
        a.href = c[1] + '#results';
        var more = a.querySelector('.more');
        if (more) more.textContent = T('See your results →');
      });
    });
  }

  /* On the front page, under the standfirst, one link per calculator with
   * saved answers — above the photograph, so a phone shows it at once. */
  function buildReturnBox() {
    var anchor = document.querySelector('.lead-story .quick-start') ||
      document.querySelector('.lead-story .standfirst');
    var list = saved();
    if (!anchor || !list.length) return;
    var box = el('div', 'return-box');
    box.appendChild(el('h2', 'rubric', 'Your results'));
    var ul = el('ul');
    list.forEach(function (c) {
      var li = el('li');
      var a = el('a', null, c[2]);
      a.href = c[1] + '#results';
      li.appendChild(a);
      li.appendChild(el('span', 'more', 'See your results →'));
      ul.appendChild(li);
    });
    box.appendChild(ul);
    anchor.insertAdjacentElement('afterend', box);
  }

  document.addEventListener('DOMContentLoaded', function () {
    buildFooterControls();
    buildResumeBanner();
    markSavedLinks();
    buildReturnBox();
  });

  return {
    clearAll: clearAll,
    hasAnswers: hasAnswers,
    storedAnswers: storedAnswers,
    describe: describe
  };
}());
