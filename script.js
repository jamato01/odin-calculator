// DOM Elements
const container = document.querySelector('.container');
const displayScreen = document.querySelector('.display');

// Global Variables
let currentOperator;
let firstNum;
let secondNum;
let hasEqualled;

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
            currentDisplayValue = displayScreen.value;
            if (hasEqualled) {
                clearAll();
            } else if (!secondNum) {
                firstNum = currentDisplayValue;
            } else {
                secondNum = currentDisplayValue;
            }
            break;
    }
});

// Helper Functions

function add(a, b) {
    let aNum = parseFloat(a);
    let bNum = parseFloat(b);
    return aNum + bNum;
}

function subtract(a, b) {
    let aNum = parseFloat(a);
    let bNum = parseFloat(b);
    return aNum - bNum;
}

function multiply(a, b) {
    let aNum = parseFloat(a);
    let bNum = parseFloat(b);
    return aNum * bNum;
}

function divide(a, b) {
    let aNum = parseFloat(a);
    let bNum = parseFloat(b);
    return aNum / bNum;
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
    if (hasEqualled) {
        firstNum = null;
        hasEqualled = false;
    }
    if (!firstNum) {
        firstNum = `${num}`;
        displayScreen.value = `${firstNum}`;
    } else if (firstNum && !currentOperator) {
        firstNum = `${firstNum}${num}`;
        displayScreen.value = `${firstNum}`;
    } else if (firstNum && !secondNum && currentOperator) {
        secondNum = `${num}`;
        displayScreen.value = `${secondNum}`;
    } else if (firstNum && secondNum && currentOperator) {
        secondNum = `${secondNum}${num}`;
        displayScreen.value = `${secondNum}`;
    }
}

function onClickOperator(operator) {
    switch (operator) {
        case 'plus':
            currentOperator = 'plus';
            hasEqualled = false;
            break;
        case 'minus':
            currentOperator = 'minus';
            hasEqualled = false;
            break;
        case 'multiply':
            currentOperator = 'multiply';
            hasEqualled = false;
            break;
        case 'divide':
            currentOperator = 'divide';
            hasEqualled = false;
            break;
        case 'equals':
            
            if (firstNum && secondNum) {
                let currentValue = operate(currentOperator,firstNum,secondNum);
                displayScreen.value = currentValue;
                firstNum = currentValue.toString();
                secondNum = null;
                hasEqualled = true;
            }
            currentOperator = null;
            break;
    }
}

function clearAll() {
    firstNum = null;
    secondNum = null;
    currentOperator = null;
    displayScreen.value = '';
}