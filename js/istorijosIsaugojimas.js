const myButton = document.querySelector('#stopButton');
const myDiv = document.querySelector('#myDiv');

myButton.addEventListener('click', () => {
  const distance = document.querySelector('#distance').textContent;
  const time = new Date().toLocaleString();
  const steps = document.querySelector('#result').textContent;

  let data = JSON.parse(localStorage.getItem('myData')) || [];
  data.push({ distance, time, steps });

  localStorage.setItem('myData', JSON.stringify(data));
});
