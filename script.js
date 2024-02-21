var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var calculator = {
    add: function (a, b) { return a + b; },
    subtract: function (a, b) { return a - b; },
    multiply: function (a, b) { return a * b; },
    divide: function (a, b) { return a / b; },
    percent: function (a, b) { return (a * b) / 100; },
    signChange: function (a) { return -a; }
};
var calculatorDisplay = document.querySelector('.output__text');
var calculatorButtons = __spreadArray([], document.querySelectorAll('.button'), true);
var modifyButtons = __spreadArray([], document.querySelectorAll('.modify__button'), true);
var numberButtons = __spreadArray([], document.querySelectorAll('.number__button'), true);
var operationButtons = __spreadArray([], document.querySelectorAll('.operation__button'), true);
var clearButton = document.querySelector('.clear__button');
var equalsButton = document.querySelector('.equals__button');
var result = [];
clearButton === null || clearButton === void 0 ? void 0 : clearButton.addEventListener('click', function () {
    result.length = 0;
    console.log(result);
});
numberButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        var buttonValue = button.textContent;
        if (result.length === 0 || typeof result[result.length - 1] === 'string') {
            result.push(Number(buttonValue));
        }
        else {
            var lastNumber = result[result.length - 1];
            result[result.length - 1] = Number("".concat(lastNumber).concat(buttonValue));
        }
        console.log(result);
    });
});
operationButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        var buttonValue = button.textContent;
        result.push(buttonValue);
        console.log(result);
    });
});
modifyButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        var buttonValue = button.textContent;
        result.push(buttonValue);
        console.log(result);
    });
});
equalsButton === null || equalsButton === void 0 ? void 0 : equalsButton.addEventListener('click', function () {
    var firstOperand = result[0];
    var operator = result[1];
    var secondOperand = result[2];
    if (firstOperand && operator && secondOperand) {
        var firstNumber = Number(firstOperand);
        var secondNumber = Number(secondOperand);
        var resultValue = 0;
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
});
