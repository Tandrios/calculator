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
    const button = e.target.textContent
    console.log(button);
    if (button === 'AC') {
        num1 = null;
        num2 = null;
        operator = '';
        arrNumbers = [];
        result = null;
        updateDisplay(0);
    }
    // Check if the button is a number
    if (!isNaN(button)) {
        // Update the array with the number that is pressed
        arrNumbers.push(button);
        // Update the display
        updateDisplay(arrNumbers.join(''));

    // If the button is not a number        
    } else if (isNaN(button)) {
        if (button === '=') {
            if (num1) {
                num2 = parseFloat(arrNumbers.join(''));
                operate(operator, num1, num2)
            }
        } else if (button === '.') {
            // Update the array with the dot.
            arrNumbers.push(button);
            // Update the display
            updateDisplay(arrNumbers.join(''));
        } else {
            if (result) {
                operator = button;
                num1 = result;
                result = null
                num2 = parseFloat(arrNumbers.join(''));
                operate(operator, num1, num2)
            } else if (!num1) {
                num1 = parseFloat(arrNumbers.join(''))
                operator = button;
                arrNumbers = [];
            } else if (num1 && !result) {
                num2 = parseFloat(arrNumbers.join(''));
                operate(operator, num1, num2)
            } 
        }
    }
}

function operate (operator, n1, n2) {
    switch (operator) {
        case '+':
            result = add(n1, n2)
            updateDisplay(result)
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

function updateDisplay(numbers) {
    let displayText = document.querySelector('.display')
    displayText.textContent = numbers
    return numbers;
}

function clear() {
    num1 = null;
    num2 = null;
    operator = '';
    arrNumbers = [];
}