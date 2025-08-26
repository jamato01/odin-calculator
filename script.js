// DOM Elements
const container = document.querySelector('.container');
const displayScreen = document.querySelector('.display');

// Global Variables
let currentOperator;
let firstNum;
let secondNum;

container.addEventListener('click', (event) => {
    let target = event.target;
    let currentDisplayValue = displayScreen.value;

    switch (target.id) {
        case 'one':
            displayScreen.value = currentDisplayValue + '1';
            break;
        case 'two':
            displayScreen.value = currentDisplayValue + '2';
            break;
        case 'three':
            displayScreen.value = currentDisplayValue + '3';
            break;
        case 'four':
            displayScreen.value = currentDisplayValue + '4';
            break;
        case 'five':
            displayScreen.value = currentDisplayValue + '5';
            break;
        case 'six':
            displayScreen.value = currentDisplayValue + '6';
            break;
        case 'seven':
            displayScreen.value = currentDisplayValue + '7';
            break;
        case 'eight':
            displayScreen.value = currentDisplayValue + '8';
            break;
        case 'nine':
            displayScreen.value = currentDisplayValue + '9';
            break;
        case 'zero':
            displayScreen.value = currentDisplayValue + '0';
            break;
        case 'decimal':
            if (!currentDisplayValue.includes('.')) {
                displayScreen.value = currentDisplayValue + '.';
            }
            break;
        case 'plus':
            onOperatorClick('plus');
            break;
        case 'minus':
            onOperatorClick('minus');
            break;
        case 'multiply':
            onOperatorClick('multiply');
            break;
        case 'divide':
            onOperatorClick('divide');
            break;
        case 'equals':
            onOperatorClick('equals');
            break;
        case 'clear':
            clearAll();
            break;
        case 'backspace':
            displayScreen.value = currentDisplayValue.slice(0,-1);
            break;
    }
});

// Helper Functions

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
        case 'plus':
            return add(a,b);
            break;
        case 'minus':
            return subtract(a,b);
            break;
        case 'multiply':
            return multiply(a,b);
            break;
        case 'divide':
            return divide(a,b);
            break;
    }
}

function onOperatorClick(input) {

}

function clearAll() {
    firstNum = null;
    secondNum = null;
    currentOperator = null;
    displayScreen.value = '';
}