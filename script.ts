interface Calculator {
  add: (a: number, b: number) => number;
  subtract: (a: number, b: number) => number;
  multiply: (a: number, b: number) => number;
  divide: (a: number, b: number) => number;
  percent: (a: number, b: number) => number;
  signChange: (a: number) => number;
}

const calculator: Calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
  percent: (a, b) => (a * b) / 100,
  signChange: (a) => -a
}

const calculatorDisplay = document.querySelector('.output__text');
const calculatorButtons = [...document.querySelectorAll('.button')];
const modifyButtons = [...document.querySelectorAll('.modify__button')];
const numberButtons = [...document.querySelectorAll('.number__button')];
const operationButtons = [...document.querySelectorAll('.operation__button')];
const clearButton = document.querySelector('.clear__button');
const equalsButton = document.querySelector('.equals__button');

const result: (number | string | null)[] = [];

clearButton?.addEventListener('click', () => {
  result.length = 0;
  console.log(result);
})

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonValue = button.textContent;
    if (result.length === 0 || typeof result[result.length - 1] === 'string') {
      result.push(Number(buttonValue));
    } else {
      const lastNumber = result[result.length - 1];
      result[result.length - 1] = Number(`${lastNumber}${buttonValue}`);
    }
    console.log(result);
  })
})

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonValue = button.textContent;
    result.push(buttonValue);
    console.log(result);
  })
})

modifyButtons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonValue = button.textContent;
    result.push(buttonValue);
    console.log(result);
  })
})

equalsButton?.addEventListener('click', () => {
  const firstOperand = result[0];
  const operator = result[1];
  const secondOperand = result[2];

  if (firstOperand && operator && secondOperand) {
    const firstNumber = Number(firstOperand);
    const secondNumber = Number(secondOperand);
    let resultValue = 0;
    switch (operator) {
      case '+':
        resultValue = calculator.add(firstNumber, secondNumber);
        break;
      case '-':
        resultValue = calculator.subtract(firstNumber, secondNumber);
        break;
      case '×':
        resultValue = calculator.multiply(firstNumber, secondNumber);
        break;
      case '÷':
        resultValue = calculator.divide(firstNumber, secondNumber);
        break;
      case '%':
        resultValue = calculator.percent(firstNumber, secondNumber);
        break;
      default:
        console.error('Invalid operator');
        return;
    }
    console.log(resultValue);
  }
})