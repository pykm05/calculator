const body = document.querySelector('body');
const calculator = document.querySelector('.calculator');
const inputs = document.querySelector('.inputs');

for (let i = 9; i >= 0; i--) {
  const num = document.createElement('button');
  num.addEventListener('click', () => {
    alert(`${i}`);
  });
  num.classList.add('num');
  num.textContent = `${i}`;
  inputs.appendChild(num);
}

calculator.appendChild(inputs);
body.appendChild(calculator);
