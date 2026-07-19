/**
 * Biblearc Simulator - Service Worker
 * Abilita il funzionamento offline e l'installazione come PWA
 */

const CACHE_NAME = 'biblearc-v6';

// Risorse da precaricare all'installazione
const PRECACHE_URLS = [
  './',
  './index.html',
  './style.css',
  './js/app.js',
  './js/relations.js',
  './js/lucide.min.js',
  './favicon.ico',
  './icons/icon-192-v2.png?v=3',
  './icons/icon-512-v2.png?v=3',
  './icons/icon-1024-v2.png?v=3',
  './icons/icon-dark-1024-v2.png?v=3',
  './icons/icon-tinted-dark-1024-v2.png?v=3',
  './icons/icon-tinted-light-1024-v2.png?v=3',
  './icons/apple-icon-180-v2.png?v=3',
  './icons/apple-icon-dark-180-v2.png?v=3',
  './icons/favicon-32-v2.png?v=3',
  './icons/favicon-dark-32-v2.png?v=3',
  './manifest.json',
  'https://cdn.tailwindcss.com'
];

// Install: precarica le risorse principali
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_URLS);
    })
  );
  self.skipWaiting();
});

// Activate: pulisce cache vecchie
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

// Fetch: risponde con cache, poi rete (stale-while-revalidate)
self.addEventListener('fetch', (event) => {
  // Solo richieste GET
  if (event.request.method !== 'GET') return;

  // Per le risorse CDN nella precache (es. Tailwind), usa cache-first
  const isTailwind = event.request.url === 'https://cdn.tailwindcss.com';
  if (isTailwind) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        return cachedResponse || fetch(event.request);
      })
    );
    return;
  }

  // Per le risorse della stessa origine, usa stale-while-revalidate
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        // Ritorna la cache subito (se presente)
        const fetchPromise = fetch(event.request).then((networkResponse) => {
          // Aggiorna la cache con la risposta di rete
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }
          return networkResponse;
        }).catch(() => {
          // Se la rete fallisce, torna alla cache (utile per offline)
          return cachedResponse;
        });

        return cachedResponse || fetchPromise;
      })
    );
  }
});
