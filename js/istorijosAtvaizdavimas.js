const savedList = document.getElementById('saved-list');
const savedData = JSON.parse(localStorage.getItem('myData')) || [];

// einame per išsaugotus duomenis ir sukuriame HTML elementus
for (const data of savedData) {
  const li = document.createElement('span');
  const distanceText = data.distance !== undefined ? `${data.distance} m atstumo, ` : '';
  const stepsText = data.steps !== undefined ? `${data.steps} žingsnių` : '';
  li.innerHTML = `<ion-item><ion-label>${data.time} nuėjote ${distanceText}${stepsText}</ion-label></ion-item>`;
  savedList.appendChild(li);
}
