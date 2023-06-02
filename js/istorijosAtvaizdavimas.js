const savedList = document.getElementById('saved-list');
const savedData = JSON.parse(localStorage.getItem('myData')) || [];

for (const data of savedData) {
  const li = document.createElement('span');
  const distanceText = data.distance !== undefined ? `${data.distance} m atstumo` : '';
  const stepsText = data.steps !== undefined ? `${data.steps} žingsnių` : '';
  const content = `${data.time} nuėjote ${distanceText}`;
  
  if (distanceText && stepsText) {
    content += `, ${stepsText}`;
  }
  
  li.innerHTML = `<ion-item><ion-label>${content}</ion-label></ion-item>`;
  savedList.appendChild(li);
}
