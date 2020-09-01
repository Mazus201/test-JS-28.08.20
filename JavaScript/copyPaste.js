"use strict";

function copy(mainObj) { //создаем ПОВЕРХОСТНУЮ копию объекта, где можем изменять только "верхние слои"
    let objCopy = {};
    let key;

    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 10,
    b: 5,
    c: {
        x: "Oblivion",
        y: [12, 5, 2]
    }
};

const copyNumbers = copy(numbers);

copyNumbers.b = 0;

// console.log(numbers);
// console.log(copyNumbers);

const add = {
    d: 13,
    e: "DisFunction"
};

//console.log(Object.assign(numbers, add)); //объединение разных объектов в 1
//это можно использовать для создания копии массива:

const clone = Object.assign({}, add); //еще один способ создания поверхостной копии
add.d = 5;

// console.log(add);
// console.log(clone);

const array = [1, 5, 10];
const newArray = array.slice();//создаем поверхостную копию обычного массива

newArray[1] = "bobby";

console.log(array);
console.log(newArray);

//---------------------оператор разварота----------------------

const video = ["YouTube", "RuTube", "Vimeo"],
      blog = ["Wordpress", "Blogger", "SomeOther"],
      allInternet = [...video, ...blog, "VK", "Instagram"]; //... - оператор разворота, помогает передать 
                                                           //информацию из массивов и др. объектов

console.log(allInternet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [4, 2, 5];

log(...num); //разворачивам массив для дальнейшего использования каждого элемента по отдельности
 
//спрет оператор можно использовать для создания поверхостных копий:

const arr = ["old", "array"];
const copyArr = [...arr];

copyArr[0] = "new";

console.log(arr);
console.log(copyArr);
