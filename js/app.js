if('serviceWorker' in navigator){
<<<<<<< HEAD
  navigator.serviceWorker.register('/Zingsniatrakeris/sw.js')
=======
  navigator.serviceWorker.register('https://gorodeckism.github.io/Zingsniatrakeris/js/app.js')
>>>>>>> c80a670 (Verisija 1.1: Prisijungimu formos)
    .then(reg => console.log('service worker registered', reg))
    .catch(err => console.log('service worker not registered', err));
}
