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