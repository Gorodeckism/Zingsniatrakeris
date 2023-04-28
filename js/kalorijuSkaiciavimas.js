function saveCaloriesData(){
    const weight = document.querySelector('#weight').value;
    const height = document.querySelector('#height').value;
    const gender = document.querySelector('#gender').value;

    localStorage.setItem("weight", weight);
    localStorage.setItem("height", height);
    localStorage.setItem("gender", gender);
}


function calculateCalories() {
    const weight = localStorage.getItem("weight");
    const height = localStorage.getItem("height");
    const gender = localStorage.getItem("gender");
    const distance = document.querySelector('#distance').value;
    
    let calories = 0;
    
    // Skaičiuojame kalorijas pagal lytį
    if (gender === 'male') {
      calories += 0.75;
    } else if (gender === 'female') {
      calories += 0.65;
    }
    
    // Skaičiuojame kalorijas pagal svorį ir ūgį
    calories += weight * 0.038 + height * 0.025;
    
    // Skaičiuojame kalorijas pagal nueitą atstumą
    calories += distance * 0.73;
    
    // Atvaizduojame rezultatą vartotojui
    const resultElement = document.querySelector('#kmiresult');
    resultElement.innerHTML = `${calories.toFixed(2)}`;
  }
  