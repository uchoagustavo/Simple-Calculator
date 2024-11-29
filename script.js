let display = document.getElementById('display');
let currentInput = '';

function clearDisplay() {
    currentInput = '';
    display.innerHTML = '';
}

function appendNumber(number) {
    if (number === '.' && currentInput.includes('.')) return;
    currentInput += number;
    display.innerHTML = currentInput;
}

function setOperator(op) {
    if (currentInput === '') return;
    currentInput += op;
    display.innerHTML = currentInput;
}

function equal() {
    try {
        let result = eval(currentInput.replace(/x/g, '*'));
        display.innerHTML = result;
        currentInput = result.toString();
    } catch (error) {
        display.innerHTML = 'Error';
        currentInput = '';
    }
}

function backspace() {
    currentInput = currentInput.slice(0, -1);
    display.innerHTML = currentInput;
}

function percentage() {
    if (currentInput === '') return;
    try {
        let result = eval(currentInput.replace(/x/g, '*')) / 100;
        display.innerHTML = result;
        currentInput = result.toString();
    } catch (error) {
        display.innerHTML = 'Error';
        currentInput = '';
    }
}

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const btnText = button.textContent;
        if (btnText === 'C') {
            clearDisplay();
        } else if (btnText === '=') {
            equal();
        } else if (btnText === '<') {
            backspace();
        } else if (btnText === '%') {
            percentage();
        } else if ('0123456789.'.includes(btnText)) {
            appendNumber(btnText);
        } else {
            setOperator(btnText);
        }
    });
});
