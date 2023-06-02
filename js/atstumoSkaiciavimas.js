let startTime;
let timerInterval;
const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');

const distanceSpan = document.getElementById('distance');
const resultSpan = document.getElementById('result');
let result;

const distanceText = document.getElementById('distance');
let watchId;
let distance = 0;
let prevCoords;

function startTimer() {
  startTime = new Date();
  timerInterval = setInterval(updateTimer, 1000);
  startButton.disabled = true;
  stopButton.disabled = false;
}

function stopTimer() {
  clearInterval(timerInterval);
  startButton.disabled = false;
  stopButton.disabled = true;
}

function updateTimer() {
  const now = new Date().getTime();
  const elapsedTime = now - startTime.getTime();
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  timerDisplay.textContent = `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTracking() {
  startButton.disabled = true;
  stopButton.disabled = false;
  prevCoords = null;
  distance = 0;
  navigator.geolocation.getCurrentPosition(initializePosition, handleLocationError);
  watchId = navigator.geolocation.watchPosition(updateDistance, handleLocationError);
}

function stopTracking() {
  startButton.disabled = false;
  stopButton.disabled = true;
  navigator.geolocation.clearWatch(watchId);
}

function initializePosition(position) {
  prevCoords = position.coords;
}

function updateDistance(position) {
  let newCoords = position.coords;
  if (prevCoords) {
    let delta = calculateDistance(prevCoords, newCoords);
    distance += delta;
    distanceText.innerText = distance.toFixed(2);

    result = distance / localStorage.getItem('zingsnioIlgis');
    resultSpan.innerText = result.toFixed(0);

    calculateCalories(distance);

    if (
      localStorage.getItem('atstumoTikslas') != null ||
      localStorage.getItem('atstumoTikslas') != ''
    ) {
      patikrintiTiksla(distance);
    }
  }
  prevCoords = newCoords;
}

function calculateDistance(coords1, coords2) {
  const lat1 = coords1.latitude;
  const lon1 = coords1.longitude;
  const lat2 = coords2.latitude;
  const lon2 = coords2.longitude;
  const R = 6371e3;
  const phi1 = toRadians(lat1);
  const phi2 = toRadians(lat2);
  const deltaPhi = toRadians(lat2 - lat1);
  const deltaLambda = toRadians(lon2 - lon1);

  const a =
    Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
    Math.cos(phi1) * Math.cos(phi2) * Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
}

function toRadians(degrees) {
  return (degrees * Math.PI) / 

}
//Javascript reaguoja į mygtukų paspaudimus ir kviečia funkcijas
startButton.addEventListener('click', startTracking);
stopButton.addEventListener('click', stopTracking);
