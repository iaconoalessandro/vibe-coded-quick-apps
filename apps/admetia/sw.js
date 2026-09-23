/* ---------------------------------------------------------------------------
 * Service worker: keeps the calculators working offline once visited.
 *
 * - Pages, scripts, styles and models are network-first: a new deploy shows
 *   up on the next load, and the cached copy is only used when offline.
 *   (Cache-first here would pin returning readers to whatever version they
 *   first saw, HTML and scripts drifting apart.)
 * - Photos and fonts are cache-first and cached on first use, not up front,
 *   so a first visit downloads only what the page actually shows.
 *
 * Bump VERSION when the shell list changes; old caches are dropped on
 * activate.
 * ------------------------------------------------------------------------- */

var VERSION = 'v2';
var SHELL = 'admissions-shell-' + VERSION;
var MEDIA = 'admissions-media-' + VERSION;

var SHELL_FILES = [
  './',
  'index.html', 'business.html', 'it.html', 'computing.html', 'masters.html', 'mba.html',
  'css/fonts.css', 'css/app.css',
  'data/conversions.js', 'data/masters-model.js', 'data/it-model.js',
  'data/it-evidence.js', 'data/mba-model.js', 'data/mba-companies.js',
  'js/theme.js', 'js/storage.js', 'js/session.js', 'js/ui.js', 'js/ticker.js', 'js/engine.js',
  'js/score-masters.js', 'js/score-it.js', 'js/score-mba.js',
  'js/page-masters.js', 'js/page-it.js', 'js/page-mba.js'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(SHELL).then(function (cache) {
      /* One missing file must not abort the whole install. */
      return Promise.all(SHELL_FILES.map(function (f) {
        return cache.add(f).catch(function () {});
      }));
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        if (k !== SHELL && k !== MEDIA) return caches.delete(k);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

function isMedia(url) { return /\.(webp|jpe?g|png|svg|woff2)$/.test(url.pathname); }

function networkFirst(request) {
  return fetch(request).then(function (res) {
    if (res && res.ok && res.type === 'basic') {
      var copy = res.clone();
      caches.open(SHELL).then(function (c) { c.put(request, copy); });
    }
    return res;
  }).catch(function () {
    /* masters.html?track=mif is cached as masters.html. */
    return caches.match(request, { ignoreSearch: true }).then(function (hit) {
      if (hit || request.mode !== 'navigate') return hit;
      return caches.match('index.html');
    }).then(function (res) { return res || Response.error(); });
  });
}

function cacheFirst(request) {
  return caches.match(request).then(function (hit) {
    return hit || fetch(request).then(function (res) {
      if (res && res.ok && res.type === 'basic') {
        var copy = res.clone();
        caches.open(MEDIA).then(function (c) { c.put(request, copy); });
      }
      return res;
    });
  });
}

self.addEventListener('fetch', function (event) {
  var request = event.request;
  if (request.method !== 'GET') return;
  var url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith(isMedia(url) ? cacheFirst(request) : networkFirst(request));
});
