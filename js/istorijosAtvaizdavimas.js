const savedList = document.getElementById('saved-list');
  const savedData = JSON.parse(localStorage.getItem('myData')) || [];

  // einame per išsaugotus duomenis ir sukuriame HTML elementus
  for (const data of savedData) {
    const li = document.createElement('span');
    li.innerHTML = `<ion-item><p>${data.time} nuėjote ${data.distance} m atstumo ir ${data.steps} žingsnių</p></ion-item>`;
    savedList.appendChild(li);
  }

