// DOM Elements
const container = document.querySelector('.container');
const displayScreen = document.querySelector('.display');

container.addEventListener('click', (event) => {
    let target = event.target;

    switch (target.id) {
        case 'one':
            break;
        case 'two':
            break;
        case 'three':
            break;
        case 'four':
            break;
        case 'five':
            break;
        case 'six':
            break;
        case 'seven':
            break;
        case 'eight':
            break;
        case 'nine':
            break;
        case 'zero':
            break;
        case 'decimal':
            break;
        case 'plus':
            break;
        case 'minus':
            break;
        case 'multiply':
            break;
        case 'divide':
            break;
        case 'equals':
            break;
        case 'clear':
            break;
        case 'backspace':
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