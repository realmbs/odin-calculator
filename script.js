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
    percent: function (a, b) { return a * b / 100; },
    negate: function (a) { return -a; },
};
var calculatorButtons = __spreadArray([], document.querySelectorAll('.button'), true);
var operationButtons = __spreadArray([], document.querySelectorAll('.operation__button'), true);
var numberButtons = __spreadArray([], document.querySelectorAll('.number__button'), true);
var modifyButtons = __spreadArray([], document.querySelectorAll('.modify__button'), true);
console.log(calculatorButtons);
console.log(operationButtons);
console.log(numberButtons);
console.log(modifyButtons);
var completeOneOperation = function (a, b, operation) {
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
};
