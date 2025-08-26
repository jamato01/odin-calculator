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
            onClickNumber(1);
            break;
        case 'two':
            onClickNumber(2);
            break;
        case 'three':
            onClickNumber(3);
            break;
        case 'four':
            onClickNumber(4);
            break;
        case 'five':
            onClickNumber(5);
            break;
        case 'six':
            onClickNumber(6);
            break;
        case 'seven':
            onClickNumber(7);
            break;
        case 'eight':
            onClickNumber(8);
            break;
        case 'nine':
            onClickNumber(9);
            break;
        case 'zero':
            onClickNumber(0);
            break;
        case 'decimal':
            onClickNumber('.');
            break;
        case 'plus':
            onClickOperator('plus');
            break;
        case 'minus':
            onClickOperator('minus');
            break;
        case 'multiply':
            onClickOperator('multiply');
            break;
        case 'divide':
            onClickOperator('divide');
            break;
        case 'equals':
            onClickOperator('equals');
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
    aNum = parseFloat(a);
    bNum = parseFloat(b);
    return a + b;
}

function subtract(a, b) {
    aNum = parseFloat(a);
    bNum = parseFloat(b);
    return a - b;
}

function multiply(a, b) {
    aNum = parseFloat(a);
    bNum = parseFloat(b);
    return a * b;
}

function divide(a, b) {
    aNum = parseFloat(a);
    bNum = parseFloat(b);
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

function onClickNumber(num) {
    
}

function onClickOperator(operator) {
    
}

function clearAll() {
    firstNum = null;
    secondNum = null;
    currentOperator = null;
    displayScreen.value = '';
}