let numberA = 0;
let numberB = 0;
let operation = null;
let i = 0;

const display = document.getElementById('display');

const buttons = [...document.querySelectorAll('.button')];
buttons.forEach((button) => {
    button.addEventListener('click', handleInput);
});

function equation(numberA, operation, numberB) {
    switch(operation){
        case "-": 
            result = numberA - numberB;
            break;
        case "+": 
            result = numberA + numberB;
            break;
        case "*": 
            result = numberA * numberB;
            break;
        case "/": 
            result = numberA / numberB;
            break;  
    }
    
    return result;
} 

function handleInput(event) {

    const button = event.target;
    const isNumber = button.attributes['data-number'] !== undefined;

    if (isNumber && operation != null) {
        numberB = numberB * 10 + parseInt(event.target.textContent);
        display.textContent = numberB;
    }
    else if (event.target.textContent === "=") {
        result = equation(numberA, numberB, operation);
        numberA = result;
        numberB = 0;
        operation = null;
        display.textContent = numberA;
    }
    else if (isNumber && operation === null) {
        numberA = numberA * 10 + parseInt(event.target.textContent);
        display.textContent = numberA;
    } 
    else  {
        operation = event.target.textContent;
        if (operation === "C" ) {
            numberA = 0;
            numberB = 0;
            operation = null;
            result = 0;
            display.textContent = result;
        }
        else {
        display.textContent = operation;
        }
    }
}


