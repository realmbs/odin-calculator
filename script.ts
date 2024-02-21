interface Operator {
  '+': (a: number, b: number) => number;
  '-': (a: number, b: number) => number;
  '*': (a: number, b: number) => number;
  '/': (a: number, b: number) => number;
  '%': (a: number, b: number) => number;
  '±': (a: number) => number;
}

const calculator: Operator = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
  '%': (a, b) => a * b / 100,
  '±': (a) => -a,
}

const calculatorButtons = [...document.querySelectorAll('.button')];
const operationButtons = [...document.querySelectorAll('.operation__button')];
const display = document.querySelector('.output__text') as HTMLDivElement;