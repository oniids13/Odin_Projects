const year = document.getElementById('year');
const numButtons = document.querySelectorAll(".num");
const clearButton = document.querySelector(".clear");
const operatorButtons = document.querySelectorAll(".op")
const numValue = document.getElementById("result");
const equalButton = document.querySelector(".equals");


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
        });
    });
}


function clear(){
    numValue.value = "";
}


let firstNum;
let operator;

numberClick();

operatorButtons.forEach((opButton) => {
    opButton.addEventListener("click", () => {
        firstNum = +numValue.value ;
        operator = opButton.textContent;
        clear();
    })
})

equalButton.addEventListener("click", () => {
    let secondNum = +numValue.value;
    let result = operate(operator, firstNum, secondNum);
    if (result % 1 !== 0) {
        numValue.value = result.toFixed(2);
    } else{
        numValue.value = result;
    }
    numBtn = false;
})

clearButton.addEventListener("click", clear);