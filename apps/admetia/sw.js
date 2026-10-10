/* ---------------------------------------------------------------------------
 * Service worker: keeps the calculators and the Atlas working offline once
 * visited. The Atlas's country records (data/atlas/<id>.js), visa files
 * (data/atlas/visas/<id>.js) and hiring files (data/atlas/entry/<id>.js) are
 * not in the shell: each is cached the first time a reader opens that country.
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

var VERSION = 'v9';
var SHELL = 'admetia-shell-' + VERSION;
var MEDIA = 'admetia-media-' + VERSION;

var SHELL_FILES = [
  './',
  'index.html', 'study.html', 'jobs.html', 'method.html', 'business.html', 'it.html', 'computing.html', 'masters.html', 'mba.html', 'map.html', 'hiring.html', 'programmes.html',
  'css/fonts.css', 'css/app.css',
  'js/i18n.js', 'js/i18n-it.js', 'data/i18n-it-models.js',
  'data/conversions.js', 'data/masters-model.js', 'data/computing-model.js',
  'data/computing-evidence.js', 'data/mba-model.js', 'data/mba-companies.js', 'data/deadlines.js', 'data/programme-fees.js',
  'js/theme.js', 'js/intro.js', 'js/storage.js', 'js/session.js', 'js/stats.js', 'js/ui.js', 'js/ticker.js', 'js/engine.js',
  'js/score-masters.js', 'js/score-computing.js', 'js/score-mba.js', 'js/results-kit.js',
  'js/page-masters.js', 'js/page-computing.js', 'js/page-mba.js', 'js/page-programmes.js',
  'data/atlas/index.js', 'data/atlas/geo.js', 'data/atlas/stats.js', 'data/atlas/life.js', 'data/atlas/outcomes.js', 'data/atlas/culture.js', 'js/page-map.js', 'js/page-hiring.js'
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
