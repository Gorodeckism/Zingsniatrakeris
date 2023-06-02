if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/Zingsniatrakeris/sw.js')
    .then(reg => console.log('service worker registered', reg))
    .catch(err => console.log('service worker not registered', err));

  navigator.serviceWorker
    .register('/Zingsniatrakeris/js/app.js')
    .then(reg => console.log('app.js registered', reg))
    .catch(err => console.log('app.js not registered', err));
}
