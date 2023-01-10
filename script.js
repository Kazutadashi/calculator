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
        case "/":
            return divide(x,y);
        case "*":
            return multiply(x,y); 
    }
}

function clickNumber() {
    console.log("number was clicked");
    console.log(this);
    console.log(this.textContent);

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
    currentSymbolValue = this.textContent;
    clearDisplayOnNextInput = true;
    console.log(currentSymbolValue);
    
}

function updateDisplay(textToShow) {
    if (clearDisplayOnNextInput) {
        display.textContent = textToShow;
        // this is set to true if a symbol is clicked, after clearing the screen it is turned off again
        clearDisplayOnNextInput = false;
    }
    else {
        display.textContent += textToShow;
        currentDisplayValue = display.textContent;
        console.log(currentDisplayValue);
    }
}

function operate() {
    return 
}

function clickClear() {
    clearDisplayOnNextInput = true;
    currentSymbolValue = null;
    currentDisplayValue = 0;
    updateDisplay("0");
    clearDisplayOnNextInput = true;
}

function negateNumber() {
    if (display.textContent[0] === "-") {
        display.textContent = display.textContent.substring(1);
    }
    else {
        display.textContent = `-${display.textContent}`;  
    }
}

const pmButton = document.querySelector(".button.pm");
const display = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".button.number");
const symbolButtons = document.querySelectorAll(".button.symbol");
const clearButton = document.querySelector("#clear-button");

let clearDisplayOnNextInput = true;
let currentSymbolValue;
let currentDisplayValue = parseFloat(display.textContent);


clearButton.addEventListener('click', clickClear);
pmButton.addEventListener('click', negateNumber);
symbolButtons.forEach(button => button.addEventListener('click', clickSymbol));
numberButtons.forEach(button => button.addEventListener('click', clickNumber));