if(localStorage.getItem("weight") != null && localStorage.getItem("height") != null && localStorage.getItem("gender") != null){
  document.querySelector('#weight').value = localStorage.getItem("weight");
  document.querySelector('#height').value = localStorage.getItem("height");
  document.querySelector('#gender').value = localStorage.getItem("gender");
}else{
  if(document.querySelector('#sveikinimas') != null){
    //isaugome atstuma kuri ivede vartotojas
    document.querySelector('#sveikinimas').style.display = "block";
}
}

function saveCaloriesData(){
    const weight = document.querySelector('#weight').value;
    const height = document.querySelector('#height').value;
    const gender = document.querySelector('#gender').value;

    localStorage.setItem("weight", weight);
    localStorage.setItem("height", height);
    localStorage.setItem("gender", gender);
}


function calculateCalories(distance) {
  const weight = localStorage.getItem("weight");
  const height = localStorage.getItem("height");
  const gender = localStorage.getItem("gender");
  
  let calories = 0;
  
  if (weight && height && gender) {
    if (gender === 'male') {
      calories += 0.75;
    } else if (gender === 'female') {
      calories += 0.65;
    }
    
    if (weight > 0 && height > 0) {
      calories += weight * 0.038 + height * 0.025;
    }
    
    if (distance > 0) {
      calories += distance * 0.73;
    } else {
      calories = 0; // kalorijos sulyginamos nuliui jei atstumas yra 0
    }
  } else {
    calories = 0; // kalorijos lygios 0 jei, lytis, ūgis ir svoris nėra įvesti.
  }
  
  const resultElement = document.querySelector('#kmiresult');
  resultElement.innerHTML = `${calories.toFixed(2)}`;
}
  
