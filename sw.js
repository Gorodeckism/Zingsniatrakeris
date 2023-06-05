const CACHE_NAME = 'zingsniatrakeris-cache-v1';
const urlsToCache = [
  '/',
  'index.html',
   'css/home.css',
   'calculateCalories.html',
   'history.html',
   'home.html',
   'login.html',
   'manifest.json',
   'signup.html',
   'stepCalculation.html',
   'sw.js',
   'target.html',
   'img/icons/android-launchericon-144-144.png',
   'img/icons/android-launchericon-192-192.png',
   'img/icons/android-launchericon-48-48.png',
   'img/icons/android-launchericon-512-512.png',
   'img/icons/android-launchericon-72-72.png',
   'img/icons/android-launchericon-96-96.png',
   'js/atstumoSkaiciavimas.js',
   'js/dalintisPasiekimais.js',
   'js/gautiLeidimaGpsui.js',
   'js/istorijosAtvaizdavimas.js',
   'js/istorijosIsaugojimas.js',
   'js/kalorijuSkaiciavimas.js',
   'js/tiksloTikrinimas.js',
   'js/zemelapioAtvaizdavimas.js',
   'js/zingsnioIlgis.js',
  'css/style.css',
  'js/app.js',
  // Čia įtrauktos visos aplikacijos failų nuorodos, kurias noriu talpinti ir naudoti offline režime
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName);
            }
          })
        );
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(fetchResponse => {
        // Patikriname, ar gautas tinkamas atsakymas
        if (!fetchResponse || fetchResponse.status !== 200 || fetchResponse.type !== 'basic') {
          return caches.match(event.request);
        }

        const responseToCache = fetchResponse.clone();

        caches.open(CACHE_NAME)
          .then(cache => {
            cache.put(event.request, responseToCache);
          });

        return fetchResponse;
      })
      .catch(error => {
        // Klaidos tvarkymas
        console.error('Error fetching data:', error);
        return caches.match(event.request);
      })
  );
});

