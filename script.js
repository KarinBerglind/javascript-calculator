const textInput = document.querySelector('#textInput');
let everyInput = [];
const arithmetic = [];

textInput.addEventListener('change', function (event) {
  // Is input a value? isNaN
  everyInput = event.target.value.split('');
});

const allButtons = document.querySelectorAll('button');

for (let button of allButtons) {
  button.addEventListener('click', function (event) {
    if (event.target.innerText == "=") {
      let result = eval(everyInput.join(""));
      everyInput = [];
      textInput.value = result;
    } else {
      everyInput.push(event.target.innerText);
      textInput.value = everyInput.join(" ");
    }

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
  return parseInt(firstNumber) + parseInt(secondNumber);
}

function subtract(firstNumber, secondNumber) {
  return firstNumber - secondNumber;

}

function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
  firstNumber / secondNumber;
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