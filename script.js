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
    console.log(`x: ${typeof x}`, x);
    console.log(`y: ${typeof y}`, y);
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
    console.log("number was clicked");
    console.log(this);
    console.log(this.textContent);
    this.style.backgroundColor = "rgb(80, 80, 80)";

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
    console.log("symbol was clicked");
    previousValue = display.textContent;
    currentSymbolValue = this.textContent;
    clearDisplayOnNextInput = true;
    this.style.backgroundColor = "rgb(141, 95, 10)";
    console.log(currentSymbolValue);
    console.log(previousValue);
    
}

function updateDisplay(textToShow) {
    if (clearDisplayOnNextInput) {
        display.textContent = textToShow;
        // this is set to true if a symbol is clicked, after clearing the screen it is turned off again
        clearDisplayOnNextInput = false;
    }
    else {
        display.textContent += textToShow;
        previousValue = display.textContent;
        console.log(previousValue);
    }
}

function clickClear() {
    clearDisplayOnNextInput = true;
    currentSymbolValue = "";
    previousValue = 0;
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
    let x = parseFloat(previousValue);
    let y = parseFloat(display.textContent);
    let currentSymbol = currentSymbolValue;

    // if user keeps hitting equals without setting another symbol, just keep doing the same operation
    // need to swap x and y because x should now be the result of x symbol y
    if (currentSymbol === previousSymbol){
        [x,y] = [y,x];
    }
    operationResult = operate(x, y, currentSymbol);
    previousSymbol = currentSymbol;
    display.textContent = operationResult;
    
    symbolButtons.forEach(button => button.style.backgroundColor = "rgb(121, 121, 121)");
    numberButtons.forEach(button => button.style.backgroundColor = "rgb(121, 121, 121)");
    clearDisplayOnNextInput = true;
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

let clearDisplayOnNextInput = true;
let currentSymbolValue = "";
let previousSymbol;
let previousValue = display.textContent;

dotButton.addEventListener('click', clickDot);
equalsButton.addEventListener('click', clickEquals);
backspaceButton.addEventListener('click', clickBackspace);
clearButton.addEventListener('click', clickClear);
pmButton.addEventListener('click', negateNumber);
symbolButtons.forEach(button => button.addEventListener('click', clickSymbol));
numberButtons.forEach(button => button.addEventListener('click', clickNumber));