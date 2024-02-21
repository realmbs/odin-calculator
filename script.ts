interface Calculator {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
  multiply(a: number, b: number): number;
  divide(a: number, b: number): number;
  percent(a: number, b: number): number;
  negate(a: number): number;
}

const calculator: Calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
  percent: (a, b) => a * b / 100,
  negate: (a) => -a,
}

const calculatorButtons = [...document.querySelectorAll('.button')];
const operationButtons = [...document.querySelectorAll('.operation__button')];
const numberButtons = [...document.querySelectorAll('.number__button')];
const modifyButtons = [...document.querySelectorAll('.modify__button')];

console.log(calculatorButtons);
console.log(operationButtons);
console.log(numberButtons);
console.log(modifyButtons);

const completeOneOperation = (a: number, b: number, operation: string): number => {
  switch (operation) {
    case '+':
      return calculator.add(a, b);
    case '-':
      return calculator.subtract(a, b);
    case '*':
      return calculator.multiply(a, b);
    case '/':
      return calculator.divide(a, b);
    case '%':
      return calculator.percent(a, b);
    case 'negate':
      return calculator.negate(a);
    default:
      return 0;
  }
}
