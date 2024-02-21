var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var calculatorButtons = __spreadArray([], document.querySelectorAll('.button'), true);
var display = document.querySelector('.calculator__display');
var container = document.querySelector('.calculator__container');
var calculator = {
    add: function (a, b) { return a + b; },
    subtract: function (a, b) { return a - b; },
    multiply: function (a, b) { return a * b; },
    divide: function (a, b) { return a / b; },
    percent: function (a, b) { return a * b / 100; },
    negate: function (a) { return -a; },
};
var completeOneOperation = function (a, b, operation) {
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
};
calculatorButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        console.log(button.textContent);
        var buttonValue = button.textContent;
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
    });
});
