// Funkcija, kuri tikrina, ar naršyklė palaiko geolokacijos funkciją
function requestGeolocationPermission() {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                // čia kažką galime daryti su vartotojo vietove tačiau čia dabar nieko nereikia
            },
            (error) => {
                // Parodome pranešimą prašant leidimo naudoti geolokaciją
                const alert = document.createElement('ion-alert');
                alert.header = 'Leidimas naudoti geolokaciją';
                alert.message = 'Norint naudoti vietovės funkciją, reikia leisti svetainei naudoti geolokacijos funkciją. Ar leidžiate?';
                alert.buttons = [
                    // {
                    // text: 'Atšaukti',
                    // role: 'cancel'
                    // },
                    {
                        text: 'Leisti',
                        handler: () => {
                            // prašome geolokacijos funkcijos leidimo
                            requestGeolocationPermission();
                        }
                    }
                ];
                document.body.appendChild(alert);
                alert.present();
            }
        );
    } else {
        console.log('Geolokacija nepalaikoma');
    }
}

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // Jei naudojamas mobilus įrenginys
    // Iškviečiama funkcija, kuri patikrina geolokacijos leidimą
    requestGeolocationPermission();
  } else {
    // Jei naudojamas kompiuteris, išvesk alert su pranešimu
    // window.addEventListener('load', function() {
    //     const alertElement = document.querySelector('#my-alert');
    //     alertElement.present();
    //   });
    alert("Sveiki. Jūs tikėtina naudojate kompiuterį, kuris gali neturėti tikslų vietos nustatymą. Dėl to aplikacija gali tinkamai neveikti jūsų įrenginyje. Rekomenduojame naudoti įrangą su GPS funkcija.");
      
    //alert("Jūs įžengėte į svetainę su kompiuteriu!");
    // Iškviečiama funkcija, kuri patikrina geolokacijos leidimą
    requestGeolocationPermission();
  }