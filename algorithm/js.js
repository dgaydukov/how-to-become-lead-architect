'use strict';


const map = (fn, arr) => {
    const newArr = [];
    arr.map((item, index)=>{
        newArr[index] = fn(item)
    })
    return newArr;
}

function square(x) { return x * x; } // возведение в квадрат
console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
console.log(map(square, [])); // []


