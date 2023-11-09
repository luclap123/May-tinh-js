function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    try {
        var result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Lỗi';
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}