function dalintisTuriniu(atstumas) {
    if (navigator.share) {
        navigator.share({
            title: 'Nueitas atstumas',
            text: 'Aš nuėjau atstumą:'+atstumas+" m.",
            url: ''
        })
        .then(() => console.log('Turinys sėkmingai pasidalintas'))
        .catch((error) => console.log('Klaida dalinant turinį: ', error));
    } else {
        console.log('Web Share API nepalaikomas šioje naršyklėje');
    }
}