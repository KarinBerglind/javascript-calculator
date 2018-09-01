const textInput = document.querySelector('#textInput');
let everyInput = [];
const arithmetic = [];

textInput.addEventListener('change', function (event) {
  everyInput = event.target.value.split('');
});

const allButtons = document.querySelectorAll("#calc_buttons");

for (let button of allButtons) {
  button.addEventListener('click', function (event) {
    everyInput.push(event.target.innerText);
    textInput.value = everyInput.join(" ");
  })
}

document.querySelector("#eq").addEventListener("click", function (event) {
  let result = eval(everyInput.join(""));
  textInput.value = result;
  document.querySelector("#result p").innerHTML = everyInput.join(" ") + "=" + result;
  everyInput = [];
})

document.querySelector("#c").addEventListener("click", function (event) {
  everyInput = [];
  textInput.value = "";
})

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