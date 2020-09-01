"use strict";

let anyAct, firstNum, secondNum, result;

let calc = prompt("Enter expression", "");

function stlitStrig(stringToSplit, seaperator) {
    let arrayOfStrings = stringToSplit.split(seaperator);
}

stlitStrig(calc);
console.log()

function calculator(anyAct){
    switch(anyAct) {
        case "*":
            rusult = firstNum * secondNum;
            break;
        case "/":
            rusult = firstNum / secondNum;
            break;
        case "+":
            rusult = firstNum + secondNum;
            break;
        case "-":
            rusult = firstNum - secondNum;
            break;
    }
    return alert(`result = ${result}`);
}

calculator(anyAct);