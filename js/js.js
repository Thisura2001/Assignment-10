function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendToDisplay(value) {
    var displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue + value;
}

function calculateResult() {
    var expression = document.getElementById('display').value;
    var result = eval(expression);
    document.getElementById('display').value = result;
}
function backspace() {
    var displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.slice(0, -1);
}