const myButton = document.querySelector('#stopButton');

myButton.addEventListener('click', () => {
  const distance = document.querySelector('#distance').textContent;
  const steps = parseInt(document.querySelector('#stepCount').textContent);
  const time = new Date().toLocaleString();

  let data = JSON.parse(localStorage.getItem('myData')) || [];
  data.push({ distance, steps, time });

  localStorage.setItem('myData', JSON.stringify(data));
});
