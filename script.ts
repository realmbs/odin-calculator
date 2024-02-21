interface Calculator {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
  multiply(a: number, b: number): number;
  divide(a: number, b: number): number;
  percent(a: number, b: number): number;
  negate(a: number): number;
}

const calculatorButtons = [...document.querySelectorAll('.button')];
const display = document.querySelector('.calculator__display') as HTMLDivElement;
const container = document.querySelector('.calculator__container') as HTMLDivElement;

const calculator: Calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
  percent: (a, b) => a * b / 100,
  negate: (a) => -a,
}

const completeOneOperation = (a: number, b: number, operation: string): number => {
  switch (operation) {
    case '+':
      return calculator.add(a, b);
      break;
    case '-':
      return calculator.subtract(a, b);
      break;
    case '*' || 'x':
      return calculator.multiply(a, b);
      break;
    case '/' || '÷':
      return calculator.divide(a, b);
      break;
    case '%':
      return calculator.percent(a, b);
      break;
    default:
      return 0;
      break;
  }
}

calculatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    console.log(button.textContent);
    const buttonValue = button.textContent;
    switch (buttonValue) {
      case 'AC':
        display.textContent = '0';
        break;
      case '±':
        display.textContent = calculator.negate(+display.textContent).toString();
        break;
      case '%':
        display.textContent = calculator.percent(+display.textContent, 100).toString();
        break;
      case '÷':
        display.textContent = calculator.divide(+display.textContent, 100).toString();
        break;
      case '×':
        display.textContent = calculator.multiply(+display.textContent, 100).toString();
        break;
      case '−':
        display.textContent = calculator.subtract(+display.textContent, 100).toString();
        break;
      case '+':
        display.textContent = calculator.add(+display.textContent, 100).toString();
        break;
      case '=':
        display.textContent = completeOneOperation(+display.textContent, 100, '=').toString();
        break;
      default:
        display.textContent = '0';
    }
  })
})