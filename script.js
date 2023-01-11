function add(x,y){
    return x+y;
}

function subtract(x,y){
    return x-y;
}

function divide(x,y){
    if (y === 0){
        return "Cannot divide by zero.";
    }
    else {
        return x/y
    }
}

function multiply(x,y){
    return x*y;
}

function operate(x,y,op){
    switch(op){
        case "+":
            return add(x,y);
        case "-":
            return subtract(x,y);
        case "÷":
            return divide(x,y);
            //this is a multiplcation sign not the letter x
        case "×":
            return multiply(x,y); 
            //no symbol
        case "":
            return y;
        default:
            console.log(`Unknown symbol: ${op}`);
    }
}

function clickNumber() {

    if (clearDisplayOnNextInput) {
        updateDisplay(this.textContent);
        // This is used to reset the display so we can put in new numbers after the symbol
        clearDisplayOnNextInput = false;
    }
    else {
        updateDisplay(this.textContent);
    }
    
}

function clickSymbol(){
    clearDisplayOnNextInput = true;
    repeatOperation = false;

    valueBeforeSymbolClick = display.textContent;
    currentSymbolValue = this.textContent;

    this.style.backgroundColor = "rgb(173, 0, 0)";
    
}

function updateDisplay(textToShow) {
    if (clearDisplayOnNextInput) {
        display.textContent = textToShow;
        // this is set to true if a symbol is clicked, after clearing the screen it is turned off again
        clearDisplayOnNextInput = false;
    }
    else {
        display.textContent += textToShow;
    }
}

function clickClear() {
    clearDisplayOnNextInput = true;
    currentSymbolValue = "";
    valueBeforeSymbolClick = 0;
    updateDisplay("0");
    clearDisplayOnNextInput = true;
}

function negateNumber() {
    if (display.textContent[0] === "-") {
        display.textContent = display.textContent.slice(1);
    }
    else {
        display.textContent = `-${display.textContent}`;  
    }
}

function clickBackspace() {
    display.textContent = display.textContent.slice(0,-1);
}

function clickEquals(){
    let x;
    let y;
    let operationResult;

    if (repeatOperation === false) {
        x = parseFloat(valueBeforeSymbolClick);
        y = parseFloat(display.textContent);
        console.log(`operation: ${x} ${currentSymbolValue} ${y}`);
        valueBeforeEqualClick = y;
    }
    else if (repeatOperation === true){
        x = lastOperationResult;
        y = valueBeforeEqualClick;
    }

    operationResult = operate(x,y,currentSymbolValue);
    display.textContent = operationResult;
    lastOperationResult = operationResult;
    symbolButtons.forEach(button => button.removeAttribute("style"));
    clearDisplayOnNextInput = true;
    repeatOperation = true;
}

function clickDot() {
    if (display.textContent.includes(".")){
        return;
    }
    else {
        display.textContent += ".";
    }
    
}

const pmButton = document.querySelector(".button.pm");
const display = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".button.number");
const symbolButtons = document.querySelectorAll(".button.symbol");
const clearButton = document.querySelector("#clear-button");
const backspaceButton = document.querySelector(".button.backspace");
const equalsButton = document.querySelector("#equals-button");
const dotButton = document.querySelector(".button.dot");

let valueBeforeEqualClick;
let lastOperationResult;
let repeatOperation = false; 
let clearDisplayOnNextInput = true;
let currentSymbolValue = "";
let previousSymbol;
let valueBeforeSymbolClick = display.textContent;

dotButton.addEventListener('click', clickDot);
equalsButton.addEventListener('click', clickEquals);
backspaceButton.addEventListener('click', clickBackspace);
clearButton.addEventListener('click', clickClear);
pmButton.addEventListener('click', negateNumber);
symbolButtons.forEach(button => button.addEventListener('click', clickSymbol));
numberButtons.forEach(button => button.addEventListener('click', clickNumber));