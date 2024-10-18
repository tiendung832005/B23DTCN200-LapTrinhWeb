const display = document.querySelector('#display');
const buttons = document.querySelectorAll('.btn');
let currentInput = '';
let previousInput = '';
let operator = '';

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const value = button.value;
        
        if (button.classList.contains('operator')) {
            handleOperator(value);
        } else if (value === 'all-clear') {
            clearDisplay();
        } else if (value === '=') {
            calculate();
        } else {
            appendNumber(value);
        }
    });
});

function appendNumber(number) {
    if (currentInput.length <= 10) {
        currentInput += number;
        display.value = currentInput;
    }
}

function handleOperator(op) {
    if (currentInput === '') return;
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    let result = 0;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(curr)) return;

    switch (operator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
        default:
            return;
    }
    currentInput = result.toString();
    operator = '';
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    display.value = '';
}
