"use strict";

const mazda5 = {
    whils: 4,
    doors: 5,
    powerEngine: 200,
    type: "pessenger"
};

let mazda5_1 = {
    powerEngine: 250,
    color: "red"
};

Object.setPrototypeOf(mazda5_1, mazda5);

console.log(mazda5_1);