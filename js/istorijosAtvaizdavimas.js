const savedList = document.getElementById('saved-list');
const savedData = JSON.parse(localStorage.getItem('myData')) || [];

// Iterate through the savedData and create HTML elements
for (const data of savedData) {
  const li = document.createElement('span');
  li.innerHTML = `<ion-item><ion-label>${data.time} nuėjote ${data.distance} m atstumo, atlikote ${data.steps} žingsnių</ion-label></ion-item>`;
  savedList.appendChild(li);
}
