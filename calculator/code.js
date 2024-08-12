const year = document.getElementById('year');
const numButtons = document.querySelectorAll(".num");
const clearButton = document.querySelector(".clear");
const operatorButtons = document.querySelectorAll(".op")
const numValue = document.getElementById("result");
const equalButton = document.querySelector(".equals");
const deleteButton = document.querySelector(".delete");
const decimalButton = document.getElementById("decimal");
const negativeButton = document.querySelector(".negative");
const percentButton = document.querySelector(".percent");


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

    if (result == Infinity){
        alert("Error don't divide by 0")
        numValue.value = "";
    }
})

clearButton.addEventListener("click", clear);

deleteButton.addEventListener("click", () => {
    let del = numValue.value.slice(0,-1);
    numValue.value = del;
})

negativeButton.addEventListener("click", () =>{
    let negative = numValue.value * -1;
    numValue.value = negative;
} )


percentButton.addEventListener("click", () => {
    let percentage = numValue.value * 0.010;
    numValue.value = percentage;
})

document.addEventListener("keypress", (e) => {
    if (e.key in numbers){
        numValue.value += e.key;
        firstNum = +numValue.value;
        console.log(firstNum);
    }
    if (e.key === "+" || e.key === "-" || e.key === "/" || e.key === "*"){
        firstNum = +numValue.value;
        operator = e.key;
        console.log(operator);
        clear();
        secondNum = +numValue.value;  
    }

    if (e.key === "." && !numValue.value.includes(".")){
        numValue.value += ".";
        e.preventDefault();
        return;

    }
})



let numbers = [1,2,3,4,5,6,7,8,9,0];
