"Use strict";

const arr = [1, 2, 3, 4, 5];

arr.pop(); //удаление последнего элемента из массива
arr.push(10); //добавление какого-либо элемента в конец массива

console.log(arr)

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});