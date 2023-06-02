let acceleration = {};
let previousAcceleration = {};
let stepCount = 0;
let isStep = false;
let stepThreshold = 0.8; // Adjust this value to set the threshold for step detection
let peakThreshold = 0.5; // Adjust this value to set the threshold for peak detection
let valleyThreshold = -0.5; // Adjust this value to set the threshold for valley detection

function handleAcceleration(event) {
  previousAcceleration = { ...acceleration };
  acceleration = event.accelerationIncludingGravity;

  if (isPeak(acceleration, previousAcceleration) || isValley(acceleration, previousAcceleration)) {
    isStep = !isStep;
    if (isStep) {
      stepCount++;
      updateStepCount();
    }
  }
}

function isPeak(acceleration, previousAcceleration) {
  const diffY = acceleration.y - previousAcceleration.y;
  return acceleration.y > peakThreshold && previousAcceleration.y < peakThreshold && diffY > 0;
}

function isValley(acceleration, previousAcceleration) {
  const diffY = acceleration.y - previousAcceleration.y;
  return acceleration.y < valleyThreshold && previousAcceleration.y > valleyThreshold && diffY < 0;
}

function updateStepCount() {
  const resultElement = document.querySelector('#result');
  resultElement.textContent = stepCount;
}

window.addEventListener('devicemotion', handleAcceleration);



// Deklaruojami kintamieji startTime, timerInterval, timerDisplay, startButton ir stopButton
let startTime;
let timerInterval;
const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');

// Deklaruojami kintamieji distanceSpan, resultSpan ir result
const distanceSpan = document.getElementById("distance");
const resultSpan = document.getElementById("result");
let result;

// Nustatomas alert'o mygtukas
const alert = document.querySelector('ion-alert');
alert.buttons = ['OK'];

// Funkcija startTimer() pradedama atliekant paspaudimą ant startButton, nustatomas laikas ir intervalas kintamieji
function startTimer() {
    startTime = new Date();
    timerInterval = setInterval(updateTimer, 1000);
    startButton.disabled = true;
    stopButton.disabled = false;
}

// Funkcija stopTimer() sustabdo laikmatį ir nustato mygtukų būseną
function stopTimer() {
    clearInterval(timerInterval);
    startButton.disabled = false;
    stopButton.disabled = true;
}

// Funkcija updateTimer() atnaujina laiko atvaizdavimą (valandas, minutes, sekundes)
function updateTimer() {
    const now = new Date().getTime();
    const elapsedTime = now - startTime.getTime();
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    timerDisplay.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}


// Deklaruojami kintamieji distanceText, watchId, distance, prevCoords
let distanceText = document.getElementById('distance');
let watchId;
let distance = 0;
let prevCoords;

// Funkcija startTracking() pradedama atliekant paspaudimą ant startButton, nustatomas distance, prevCoords ir watchId kintamieji
function startTracking() {
    startButton.disabled = true;
    stopButton.disabled = false;
    prevCoords = null;
    distance = 0;
    watchId = navigator.geolocation.watchPosition(updateDistance);
}

// Funkcija updateDistance() atnaujina atstumo kintamąjį distance ir jį atvaizduoja, taip pat atnaujina result ir jį atvaizduoja
function updateDistance(position) {
    let newCoords = position.coords;
    if (prevCoords) {
        let delta = calculateDistance(prevCoords, newCoords);
        distance += delta;// * 0.7
        distanceText.innerText = distance.toFixed(2);

        //zingsniu skaiciavimas
        result = distance / localStorage.getItem("zingsnioIlgis");
        resultSpan.innerText = result.toFixed(0);

        calculateCalories(distance);

        //tikslo tikrinimas
        if(localStorage.getItem("atstumoTikslas") != null || localStorage.getItem("atstumoTikslas") != ""){
            patikrintiTiksla(distance);
        }
        
    }
    prevCoords = newCoords;
}

// Funkcija stopTracking() sustabdo geolokacijos stebėjimą ir nustato mygtukų būseną
function stopTracking() {
    startButton.disabled = false;
    stopButton.disabled = true;
    navigator.geolocation.clearWatch(watchId);
}

// Funkcija calculateDistance() apskkaičiuoja atstumą
function calculateDistance(coords1, coords2) {
    let lat1 = coords1.latitude;
    let lon1 = coords1.longitude;
    let lat2 = coords2.latitude;
    let lon2 = coords2.longitude;
    let R = 6371e3;
    let phi1 = toRadians(lat1);
    let phi2 = toRadians(lat2);
    let deltaPhi = toRadians(lat2 - lat1);
    let deltaLambda = toRadians(lon2 - lon1);

    let a = Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
        Math.cos(phi1) * Math.cos(phi2) *
        Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;


}

function toRadians(degrees) {
    return degrees * Math.PI / 180;
}
//Javascript reaguoja į mygtukų paspaudimus ir kviečia funkcijas
startButton.addEventListener('click', startTracking);
stopButton.addEventListener('click', stopTracking);
