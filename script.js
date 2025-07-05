function addition(num1, num2) {
    return num1 + num2;
}

function subtraction(num1, num2) {
    return num1 - num2;
}

function multiplication(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    if (num2 === 0) {
        alert("You can't divide by 0 duhhh!!!");
    }
    return num1 / num2;
}

function operate() {
    let result;
    const num1 = parseFloat(previousValue);
    const num2 = parseFloat(currentValue);

    switch (operator) {
        case '+':
            result = addition(num1, num2);
            break;
        case '-':
            result = subtraction(num1, num2);
            break;
        case '*':
            result = multiplication(num1, num2);
            break;
        case '/':
            result = division(num1, num2);
            break;
    }

    previousValue = result.toString();
    currentValue = '';
    operator = '';
}

const display = document.getElementById('calculator-display');
const numberBtns = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const clear = document.querySelector('.delete');
const equal = document.querySelector('.equals');
let currentValue = '';
let previousValue = '';
let operator = '';

numberBtns.forEach(button => {
    button.addEventListener("click", (e) => {
        handleNumber(e.target.textContent);
        if (operator) {
            display.textContent = `${previousValue} ${operator} ${currentValue}`;
        } else {
            display.textContent = currentValue || '0';
        }
    })
})

operators.forEach(button => {
    button.addEventListener("click", (e) => {
        handleOperator(e.target.textContent);
        display.textContent = `${previousValue} ${operator} ${currentValue}`;
    })
})

clear.addEventListener("click", () => {
    previousValue = '';
    currentValue = '';
    operator = '';
    display.textContent = '0';
})

equal.addEventListener("click", () => {
    if (previousValue && operator && currentValue) {
        operate();
        display.textContent = previousValue;
    }
})

function handleNumber(num) {
    if (num === '.') {
        if (currentValue.includes('.')) {
            return;
        } else if (display.textContent === '0') {
            return;
        }
    }

    if (currentValue === '0' && num === "0") {
        return;
    } else if (currentValue === "0" && num !== "0") {
        currentValue = num;
        return;
    } 
    
    if (currentValue.length <= 10) {
        currentValue += num;
    }
}

function handleOperator(op) {
    operator = op;
    previousValue = currentValue;
    currentValue = '';
}


