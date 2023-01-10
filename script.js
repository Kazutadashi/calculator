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
        // This is used to reset the display so we can put in additional numbers
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
        currentDisplayValue = display.textContent
        console.log(currentDisplayValue);
    }
}

function operate() {
    return 
}

let clearDisplayOnNextInput = false;
const display = document.querySelector("#display");
let currentSymbolValue;
let currentDisplayValue = parseFloat(display.textContent);
const numberButtons = document.querySelectorAll(".button.number");
const symbolButtons = document.querySelectorAll(".button.symbol");

symbolButtons.forEach(button => button.addEventListener('click', clickSymbol));
numberButtons.forEach(button => button.addEventListener('click', clickNumber));