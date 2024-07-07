const body = document.querySelector('body');
const calculator = document.querySelector('.calculator');
const inputs = document.querySelector('.inputs');
const numbers = document.querySelector('.numbers');
const operators = document.querySelector('.operators');

const button = function(val) {
  this.val = val;
  const num = document.createElement('button');
  num.addEventListener('click', () => {
    alert(`${val}`);
  });
  
  num.textContent = `${val}`;
  if (num.textContent == '=') {
    num.setAttribute('id', 'equals');
  }
  else {
    num.classList.add('num');
  }
  return num;
}

for (let i = 9; i >= 0; i--) {
  numbers.appendChild(new button(i));
}

numbers.appendChild(new button('.'));
numbers.appendChild(new button('='));

operators.appendChild(new button('+'));
operators.appendChild(new button('-'))
operators.appendChild(new button('*'))
operators.appendChild(new button('/'))


inputs.appendChild(numbers);
inputs.appendChild(operators);
calculator.appendChild(inputs);
body.appendChild(calculator);
