// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker
//     .register('/track/sw.js?v=1')
//     .then(reg => console.log('service worker registered', reg))
//     .catch(err => console.log('service worker not registered', err));

//   navigator.serviceWorker
//     .register('/track/js/app.js?v=1')
//     .then(reg => console.log('app.js registered', reg))
//     .catch(err => console.log('app.js not registered', err));
// }

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/Zingsniatrakeris/sw.js?v=1')
    .then(reg => console.log('service worker registered', reg))
    .catch(err => console.log('service worker not registered', err));

  navigator.serviceWorker
    .register('/Zingsniatrakeris/js/app.js?v=1')
    .then(reg => console.log('app.js registered', reg))
    .catch(err => console.log('app.js not registered', err));
}
