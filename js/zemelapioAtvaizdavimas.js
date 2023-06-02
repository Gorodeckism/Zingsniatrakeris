// Funkcija, kuri inicializuoja žemėlapio rodymą
function initMap() {
  let latitude = null; // Inicializuojama kintamąjį latitude, kuris vėliau bus naudojamas rodyti vartotojo koordinates
  let longitude = null; // Inicializuojama kintamąjį longitude, kuris vėliau bus naudojamas rodyti vartotojo koordinates

  if (navigator.geolocation) { // Tikrinama ar naršyklė palaiko geolokacijos funkcijas
    navigator.geolocation.watchPosition((position) => { // Gaunamos vartotojo koordinatės ir stebima padėtis
      latitude = position.coords.latitude; // Išsaugomos vartotojo koordinatės
      longitude = position.coords.longitude; // Išsaugomos vartotojo koordinatės

      // URL žemėlapio iframe konstravimas su žemėlapio išmatavimais, žymekliu ir geografinėmis koordinatėmis
      const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude - 0.001},${latitude - 0.001},${longitude + 0.001},${latitude + 0.001}&amp;layer=mapnik&amp;marker=${latitude},${longitude}`;

      // Ieškoma HTML elementas su id 'map'
      const mapDiv = document.getElementById('map');

      // Tikrinama ar yra žemėlapiui priskirtas iframe elementas
      const existingMapFrame = mapDiv.querySelector('iframe');
      if (existingMapFrame) {
        // Jei yra, atnaujinamas jo src atributas su nauju URL
        existingMapFrame.setAttribute('src', mapUrl);
      } else {
        // Jei nėra, sukuriama naujas iframe elementas su žemėlapio URL ir kitais atributais
        const mapFrame = document.createElement('iframe');
        mapFrame.setAttribute('src', mapUrl);
        mapFrame.setAttribute('width', '100%');
        mapFrame.setAttribute('height', '300px');
        mapFrame.setAttribute('frameborder', '0');
        mapFrame.setAttribute('scrolling', 'no');
        mapDiv.appendChild(mapFrame);
      }
    });
  }
}

window.onload = function () {
  initMap();
};
