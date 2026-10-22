/* ---------------------------------------------------------------------------
 * Visit counting: general numbers only, never answers.
 *
 * Counts go to GoatCounter (goatcounter.com), an open-source counter that
 * sets no cookies. For a visit it is sent which page (and which track), the
 * site that linked here, and the screen width; it works out the browser and
 * the country from the request itself, and does not keep the IP address.
 * Nothing typed into a calculator is sent: no answers, no scores, no schools.
 *
 * A few moments are counted the same way, as named events, so the dashboard
 * can say how many people got as far as a result — never who:
 *   results-mba, results-masters-mif, results-computing-cs …   a results page
 *   what-if        the what-if panel was used
 *   battle-plan    the battle plan was printed
 *   language-it    the language was switched
 *
 * Off when:
 *   - COUNTER below is empty (nothing is sent at all until it is set);
 *   - the page is opened from a file or from localhost;
 *   - the browser sends Do Not Track or Global Privacy Control;
 *   - the reader unticks "Count my visit" in the footer.
 * ------------------------------------------------------------------------- */

window.Stats = (function () {
  'use strict';

  /* The GoatCounter address, e.g. 'https://admissions-pisa.goatcounter.com/count'.
   * Empty means off. */
  var COUNTER = '';

  var OPT_OUT = 'admissions-calc:no-count';

  function T(s, v) { return window.I18N ? I18N.t(s, v) : s; }

  function optedOut() {
    try { return localStorage.getItem(OPT_OUT) === '1'; } catch (e) { return false; }
  }
  function refused() {
    var n = navigator || {};
    return n.doNotTrack === '1' || window.doNotTrack === '1' || n.globalPrivacyControl === true;
  }
  function local() {
    return location.protocol === 'file:' || /^(localhost|127\.|\[::1\]|0\.0\.0\.0)/.test(location.hostname);
  }
  function configured() { return !!COUNTER && !local() && !refused(); }
  function enabled() { return configured() && !optedOut(); }

  function send(params) {
    if (!enabled()) return;
    var q = Object.keys(params).map(function (k) {
      return k + '=' + encodeURIComponent(params[k]);
    }).join('&');
    var url = COUNTER + '?' + q + '&rnd=' + Math.random().toString(36).slice(2);
    try {
      if (navigator.sendBeacon && navigator.sendBeacon(url)) return;
    } catch (e) { /* fall through to the image */ }
    new Image().src = url;
  }

  /* The page, plus the track for the pages that have one — but no other part
   * of the address. */
  function path() {
    var track = new URLSearchParams(location.search).get('track');
    return location.pathname + (track && /^[a-z]+$/.test(track) ? '?track=' + track : '');
  }

  function referrer() {
    try {
      var r = document.referrer && new URL(document.referrer);
      return r && r.host !== location.host ? r.origin + r.pathname : '';
    } catch (e) { return ''; }
  }

  function pageview() {
    send({ p: path(), r: referrer(), s: screen.width || '' });
  }

  function event(name) {
    if (!/^[a-z0-9-]+$/.test(name)) return;
    send({ p: name, e: 'true', s: screen.width || '' });
  }

  /* One line in the footer's privacy box, so the reader can see what is
   * counted and switch it off. Only shown when counting is actually on. */
  function footerSwitch() {
    if (!configured()) return;
    var box = document.querySelector('.privacy-box');
    if (!box) return;
    var lbl = document.createElement('label');
    lbl.className = 'privacy-toggle';
    var cb = document.createElement('input');
    cb.type = 'checkbox';
    cb.checked = !optedOut();
    cb.addEventListener('change', function () {
      try {
        if (cb.checked) localStorage.removeItem(OPT_OUT);
        else localStorage.setItem(OPT_OUT, '1');
      } catch (e) { /* ignore */ }
    });
    lbl.appendChild(cb);
    var span = document.createElement('span');
    span.textContent = T('Count my visit anonymously — which page and which country, never your answers');
    lbl.appendChild(span);
    box.appendChild(lbl);
  }

  if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function () {
      footerSwitch();
      pageview();
    });
  }

  return { event: event, enabled: enabled };
}());
