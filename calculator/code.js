const year = document.getElementById('year');
const numbers = document.querySelector('.digit');
const buttons = document.getElementsByTagName("button");


year.innerHTML = new Date().getFullYear();

function operate(op, a, b){
    let num1 = a;
    let num2 = b;
    let operate = op;
    if (operate == "+") return num1 + num2;
    if (operate == "-") return num1 - num2;
    if (operate == "*") return num1 * num2;
    if (operate == "/") return num1 / num2;
}

function populateScreen(output) {
    numbers.textContent = output;
}

populateScreen(operate("/", 2, 2));

function calculate() {
    for (button of buttons){
        
    }
}