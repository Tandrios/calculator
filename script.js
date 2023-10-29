let num1 = null;
let num2 = null;
let result = null;
let operator = '';
arrNumbers = [];

document.addEventListener('DOMContentLoaded', () => {

    const buttons = document.querySelector('.calculator-main').querySelectorAll('p');
    buttons.forEach(element => {
        element.addEventListener('click', (e) => registerClick(e))
    });

})

function registerClick(e) {
    const button = e.target.textContent;

    // If function key is pressed
    if (e.target.classList.contains('function')) {
        if (!num1 && !result && !operator && arrNumbers.length > 0) {
            num1 = parseFloat(arrNumbers.join(''))
            operator = button;
            arrNumbers = [];
        }
        else if (!num1 && result && arrNumbers.length > 0 && !operator) {
            operator = button;
            num1 = result;
            result = null
            num2 = parseFloat(arrNumbers.join(''));
            operate(operator, num1, num2)
        } 
        else if (!num1 && result && arrNumbers.length === 0 && !operator) {
            operator = button;
            num1 = result;
            result = null
        }
        else if (num1 && !result && operator && arrNumbers.length > 0) {
            num2 = parseFloat(arrNumbers.join(''));
            operate(operator, num1, num2)
        } 
    }
    // If number key is pressed
    else if (e.target.classList.contains('number')) {
        arrNumbers.push(button);
        updateDisplay(arrNumbers.join(''));
    }
    // If compute key is pressed
    else if (e.target.classList.contains('compute')) {
        if (num1 && arrNumbers.length > 0) {
            num2 = parseFloat(arrNumbers.join(''));
            operate(operator, num1, num2)
        } else if (result && arrNumbers.length > 0) {
            num1 = result;
            result = null
            num2 = parseFloat(arrNumbers.join(''));
            operate(operator, num1, num2)
        }
    }
    // If AC key is pressed
    else if (e.target.classList.contains('clear')) {
        num1 = null;
        num2 = null;
        operator = '';
        arrNumbers = [];
        result = null;
        updateDisplay(0);
    }
}

function operate (operator, n1, n2) {
    switch (operator) {
        case '+':
            result = add(n1, n2);
            updateDisplay(result);
            clear();
            break;
        case '-':
            result = subtract(n1, n2);
            updateDisplay(result);
            clear();
            break;
        case '*':
            result = multiply(n1, n2);
            updateDisplay(result);
            clear();
            break;
        case '/':
            result = divide(n1, n2);
            updateDisplay(result);
            clear();
            break;
        case '%':
            result = divide(n1, n2);
            updateDisplay(result);
            clear();
            break;
        default:
            break;
    }
}

function add(n1, n2) {
    return n1 + n2;
}

function subtract(n1, n2) {
    return n1 - n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function divide(n1, n2) {
    return n1 / n2;
}

function percentage(n1, n2) {
    return n2 / n1 * 100;
}

function updateDisplay(numbers) {
    let displayText = document.querySelector('.display')
    displayText.textContent = Math.round(numbers * 10000000) / 10000000;
    return numbers;
}

function clear() {
    num1 = null;
    num2 = null;
    operator = '';
    arrNumbers = [];
}