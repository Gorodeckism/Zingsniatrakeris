if('serviceWorker' in navigator){

  navigator.serviceWorker.register('/Zingsniatrakeris/sw.js')

  navigator.serviceWorker.register('https://gorodeckism.github.io/Zingsniatrakeris/js/app.js')

    .then(reg => console.log('service worker registered', reg))
    .catch(err => console.log('service worker not registered', err));
}
