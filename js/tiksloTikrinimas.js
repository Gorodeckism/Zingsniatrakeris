if(localStorage.getItem("atstumoTikslas") != null){
    document.querySelector('#atstumasInput').value = localStorage.getItem("atstumoTikslas");
  }

function issaugotiAtstuma() {
    let atstumas = document.getElementById("atstumasInput").value;
    localStorage.setItem("atstumoTikslas", atstumas);
}

function patikrintiTiksla(atstumas) {
    let tikslas = localStorage.getItem("atstumoTikslas"); //tikslas
    if (atstumas >= tikslas) {
        rodytiPranesima("Tikslas pasiektas! Atstumas: " + atstumas + " m");
    }
}

function rodytiPranesima(pranesimas) {
    if (Notification.permission === "granted") {
        new Notification(pranesimas);
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(function (permission) {
            if (permission === "granted") {
                new Notification(pranesimas);
            }
        });
    }
}