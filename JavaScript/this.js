"use strict";

function person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}

let usName = prompt("Enter your name", "");
let usAge = prompt("How old are you?", "");
let usSex = prompt("Your sex?", "");

const personNikita = new person(usName, usAge, usSex);

console.dir(personNikita);

