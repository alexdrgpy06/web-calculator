var displayValue = "";
function display(number) {
    displayValue += number;
    updateDisplay();
}
function updateDisplay() {
    document.getElementById('display').innerHTML = displayValue;
}
function clear() {
    displayValue = "";
    updateDisplay();
}
function operate(operation) {
    if (operation === "=") {
        try {
            displayValue = eval(displayValue).toString();
        } catch (error) {
            console.error(error);
            di