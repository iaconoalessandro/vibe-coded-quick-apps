/* Answer persistence. Everything stays in this browser; nothing is sent
 * anywhere. Wrapped in try/catch because localStorage throws outright in
 * private windows and when a browser is set to block site data. */

window.Store = (function () {
  'use strict';

  function key(name) { return 'admissions-calc:' + name; }

  return {
    load: function (name) {
      try {
        var raw = localStorage.getItem(key(name));
        return raw ? JSON.parse(raw) : {};
      } catch (e) { return {}; }
    },
    save: function (name, value) {
      try { localStorage.setItem(key(name), JSON.stringify(value)); } catch (e) { /* ignore */ }
    },
    clear: function (name) {
      try { localStorage.removeItem(key(name)); } catch (e) { /* ignore */ }
    }
  };
}());
