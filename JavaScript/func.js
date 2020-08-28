"use strict";

let num = 20

function showMessage(text) {
    console.log(text)
    console.log(num = 21)
}

showMessage("Hello World!") 

function calculate(num1, num2) {
    console.log(num1 + num2)
}

calculate(16, 32)

function anyNim(num3) {
    num3 *= 15;
    (num3 % 2 == 0) ? console.log('Четное') : console.log('Нечетное');
}

anyNim();

//Методы

const str = "Test"

console.log(str.toUpperCase()); //превращаем в верхний регистр  
console.log(str.toLowerCase()); //превращаем в нижний регистр  

const fruit = "some fruit";

console.log(fruit.indexOf('fruit')); //поиск подстроки!

const logg = "Hello world!";

console.log(logg.slice(6, 11)) //вырезание из строки!

console.log(logg.substring(6, 11)) //то же что и выше, но с ограничениями

console.log(logg.substr(6, 6)) //то же что и выше, но второе число означает длину вырезания!

const number = 12.2;
console.log(Math.round(number)); //округление по математическому принципу

const test1 = "12.2 px";
console.log(parseInt(test1)); //перевод в другую СИ


//callback -- это функция, которая позволяет быть уверенным в порядке исполнения функций.
function done() {
    console.log('This leason is done!');
}
function langL(langLearn) {
    console.log(`I learning ${langLearn}`);
}

function learnJS(lang, callback) {
    setTimeout(function() {
    console.log(lang('JavaScript'));
    }, 500); 
    callback();
}
learnJS(langL, done);

//================> Стрелочная функция!
const calc = (a, b) => a + b;

const calcLong = (a, b) => {
    console.log('Vasia you are not right!');
    return(a + b);
}