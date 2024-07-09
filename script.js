const body = document.querySelector('body');
const calculator = document.querySelector('.calculator');
const inputs = document.querySelector('.inputs');
const numbers = document.querySelector('.numbers');
const operators = document.querySelector('.operators');
const text = document.querySelector('.text');

let equation = '';
let vals = [];

const calculate = (equation) => {
  let array = equation.split(/([+\-*\/])/); // Split by any of +, -, *, /

  let output = parseFloat(array[0]); 
  let j = 1; 
  while (j < array.length) {
    let operator = array[j];
    let second = parseFloat(array[j + 1]);

    switch (operator) {
      case '+':
        output += second;
        break;
      case '-':
        output -= second;
        break;
      case '*':
        output *= second;
        break;
      case '/':
        if (second !== 0) {
          output /= second;
        } else {
          text.textContent = 'Error: Division by zero';
        }
        break;
      default:
        text.textContent = 'Unexpected operator';
        return;
    }
    j += 2;
  }
  text.textContent = output;
}
const button = function(val) {
  this.val = val;
  const item = document.createElement('button');
  item.textContent = val;

  if (Number.isInteger(val)) {
    item.classList.add('num');
  } else if (item.textContent == '=') {
    item.setAttribute('id', 'equals');
  } else {
    item.classList.add('operator');
  }

  item.addEventListener('click', () => {
    if (val == 'c') {
      equation = '';
      text.textContent = '';
    }
    else if (item.classList == 'num') {
      if (isNaN(equation.charAt(equation.length - 1))) text.textContent = '';
      equation += item.textContent;
      text.textContent += item.textContent;
    } else if (item.classList == 'operator') {
      equation += item.textContent;
    }
    else {
      calculate(equation);
    }
  });
  return item;
}

for (let i = 9; i >= 0; i--) {
  numbers.appendChild(new button(i));
}

numbers.appendChild(new button('c'));
numbers.appendChild(new button('='));

operators.appendChild(new button('+'));
operators.appendChild(new button('-'))
operators.appendChild(new button('*'))
operators.appendChild(new button('/'))


inputs.appendChild(numbers);
inputs.appendChild(operators);
calculator.appendChild(inputs);
body.appendChild(calculator);
