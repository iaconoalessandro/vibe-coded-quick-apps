/* Service Worker for Admissions Calculator: Instant offline & cache-first navigation */
const CACHE_NAME = 'admissions-calc-v1';

const STATIC_ASSETS = [
  './',
  'index.html',
  'business.html',
  'it.html',
  'computing.html',
  'masters.html',
  'mba.html',
  'css/fonts.css',
  'css/app.css',
  'fonts/hanken-grotesk.woff2',
  'fonts/noto-serif-display.woff2',
  'fonts/roboto-serif-condensed.woff2',
  'fonts/source-serif-4-italic.woff2',
  'fonts/source-serif-4-roman.woff2',
  'data/conversions.js',
  'data/masters-model.js',
  'data/it-model.js',
  'data/it-evidence.js',
  'data/mba-model.js',
  'data/mba-companies.js',
  'js/storage.js',
  'js/session.js',
  'js/engine.js',
  'js/score-masters.js',
  'js/score-it.js',
  'js/score-mba.js',
  'js/page-masters.js',
  'js/page-it.js',
  'js/page-mba.js',
  'js/ticker.js',
  'js/theme.js',
  'js/ui.js',
  'img/photo/hero.jpg',
  'img/photo/hero.webp',
  'img/photo/picker.jpg',
  'img/photo/picker.webp',
  'img/photo/mba.jpg',
  'img/photo/mba.webp',
  'img/photo/business.jpg',
  'img/photo/business.webp',
  'img/photo/finance.jpg',
  'img/photo/finance.webp',
  'img/photo/management.jpg',
  'img/photo/management.webp',
  'img/photo/marketing.jpg',
  'img/photo/marketing.webp',
  'img/photo/it.jpg',
  'img/photo/it.webp',
  'img/photo/cs.jpg',
  'img/photo/cs.webp',
  'img/photo/datascience.jpg',
  'img/photo/datascience.webp',
  'img/photo/conversion.jpg',
  'img/photo/conversion.webp'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        console.warn('Pre-caching partial failure:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);

  // Only handle same-origin requests
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return networkResponse;
      });
    })
  );
});
