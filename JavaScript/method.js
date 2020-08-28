"use strict";

const options = {
    name: 'test',
    width: '1024',
    height: '1024',
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() { //создаем метод вручную!
        console.log('Test');
    }
};

options.makeTest();

// console.log(options.colors.bg);

// delete options.name; // удвление какой-то строки из объекта

// console.log(options);

// let countInArray = 0;
// for (let key in options) {
//     console.log(`Properties ${key} have meaniing ${options[key]}`); //перебор значений внутри массива и вывод их на экран!
//     countInArray++;
// }
// console.log(countInArray);

console.log(Object.keys(options).length); //более короткий способ подсчитать количество элементов внутри