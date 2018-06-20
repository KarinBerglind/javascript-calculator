//const textInput = document.querySelector('#textInput');
const everyInput = [];

textInput.addEventListener('change', function (event) {
  // Is input a value? isNaN
  everyInput = event.target.value.split('');
});

const allButtons = document.querySelectorAll('button');

for (let button of allButtons) {
  button.addEventListener('click', function (event) {
    console.log(event.target.innerText);
    console.log(event.target.id);
    console.log(event.target.dataset.name);
  })
}

/**
 * total is the current total
 */
let total = 0;
/**
 * Memory is every previous calculation
 */
let memory = [];

function add(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

function subtract() {
  // Implement me
}

function multiply() {
  // Implement me
}

function divide() {
  // Implement me
}

function getTotal() {
  // Implement me
}

function clearMemory() {
  // Implement me
}

function calculate(firstNumber, operator, secondNumber) {
  switch (operator) {
    case "+":
      let sum = add(firstNumber, secondNumber);
      // total is in global scope
      //total += sum
      return sum;
    case "-":
      total -= subtract(firstNumber, secondNumber);
      break;
  }
}

function addToTotal(value) {
  total += value;
}

let sum = calculate(5, '+', 5);
addToTotal(sum);

const Calculator = {
  total: 0,
  add: function (a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  addToTotal(value) {
    Calculator.total += value;
  },
  calculate(firstNumber, operator, secondNumber) {
    switch (operator) {
      case "+":
        return firstNumber + secondNumber;
      case "-":
        total -= subtract(firstNumber, secondNumber);
        break;
    }
  }
}

Calculator.add(5, 5);
Calculator.addToTotal(10);