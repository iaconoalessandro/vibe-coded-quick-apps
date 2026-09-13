/* Manual light/dark override. Defaults to following the operating system;
 * a stored choice wins over it. Runs before paint to avoid a flash. */

(function () {
  'use strict';

  var KEY = 'admissions-calc:theme';

  function stored() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function apply(mode) {
    if (mode === 'light' || mode === 'dark') {
      document.documentElement.setAttribute('data-theme', mode);
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }

  apply(stored());

  document.addEventListener('DOMContentLoaded', function () {
    var bar = document.querySelector('.topbar-inner');
    if (!bar) return;

    var btn = document.createElement('button');
    btn.className = 'theme-toggle';
    btn.type = 'button';

    function label() {
      var s = stored();
      btn.textContent = s === 'light' ? 'Light' : s === 'dark' ? 'Dark' : 'Auto';
      btn.title = 'Theme: ' + btn.textContent + ' — click to change';
      btn.setAttribute('aria-label', btn.title);
    }

    btn.addEventListener('click', function () {
      var order = [null, 'light', 'dark'];
      var next = order[(order.indexOf(stored()) + 1) % order.length];
      try {
        if (next) localStorage.setItem(KEY, next); else localStorage.removeItem(KEY);
      } catch (e) { /* ignore */ }
      apply(next);
      label();
    });

    label();
    /* Sits before the score chip when there is one, otherwise at the end. */
    var chip = bar.querySelector('.score-chip');
    if (chip) bar.insertBefore(btn, chip); else bar.appendChild(btn);
  });
}());
