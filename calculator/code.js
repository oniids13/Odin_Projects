const year = document.getElementById('year');
const numButtons = document.querySelectorAll(".num");
const clearButton = document.querySelector(".clear");
const operatorButtons = document.querySelectorAll(".op")
const numValue = document.getElementById("result");
const equalButton = document.querySelector(".equals");
const deleteButton = document.querySelector(".delete");
const decimalButton = document.getElementById("decimal");


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
    numValue.value += output;
}


function numberClick(){
    numButtons.forEach((numButton) => {
        numButton.addEventListener("click", () => {
            populateScreen(numButton.textContent)
            if (numValue.value.includes(".")) {
                decimalButton.disabled = true;
            }
        });
    });
}


function clear(){
    numValue.value = "";
    decimalButton.disabled = false;
}

function handleOperatorClick(event) {
    firstNum = +numValue.value;
    operator = event.target.textContent;
    clear();
}

function checkForNum(){
    if (firstNum && secondNum){
        result = operate(operator, firstNum, secondNum);
        numValue.value = result;
        firstNum = result;
    }
}

let firstNum;
let operator;
let secondNum;
let result;

numberClick();
operatorButtons.forEach((opButton) => {
    opButton.addEventListener("click", handleOperatorClick);
});

equalButton.addEventListener("click", () => {
    secondNum = +numValue.value;
    result = operate(operator, firstNum, secondNum);
    if (result % 1 !== 0) {
        numValue.value = result.toFixed(2);
    } else{
        numValue.value = result;
    }
})

clearButton.addEventListener("click", clear);

