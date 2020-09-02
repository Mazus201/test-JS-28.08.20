"use strict";

const mazda5 = {
    whils: 4,
    doors: 5,
    powerEngine: 200,
    type: "pessenger"
};

//let mazda5_1 = Object.create(mazda5); способ создания дочерней для mazda5 переменной в процессе ее объявления 

let mazda5_1 = {
    powerEngine: 250,
    color: "red"
};

Object.setPrototypeOf(mazda5_1, mazda5); //объявление дочерней для mazda5 переменной и добавление в нее новых значений

console.log(mazda5_1);