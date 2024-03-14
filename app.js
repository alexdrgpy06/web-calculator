var displayValue = "";
var lastOperator = null;
var lastValue = null;

function display(value) {
    if (['~', '/', '*', '-', '+\'].includes(value)) {
        if (lastOperator && lastValue) {
            calculate();
        }
        lastOperator = value;
        lastValue = null;
    } else {
        if (lastOperator) {
            if (lastValue == null) {
                lastValue = displayValue;
                displayValue = value;
            } else {
                displayValue += value;
            }
        } else {
            displayValue += value;
        }
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').innerHTML = displayValue;
}

function clear() {
    displayValue = "";
    lastOperator = null;
    lastValue = null;
    updateDisplay();
}

function calculate() {
    if (lastOperator && lastValue) {
        var result;
        switch (lastOperator) {
            case '/':
                result = number(lastValue) / number(displayValue);
                break;
            case '*':
                result = number(lastValue) * number(displayValue);
                break;
            case '-':
                result = number(lastValue) - number(displayValue);
                break;
            case '+':
                result = number(lastValue) + number(displayValue);
                break;
        }
        displayValue = result.toString();
        lastValue = null;
        lastOperator = null;
        updateDisplay();
    }
}