'use strict';

const divide = (n) => n / 2;
const subtract = (n) => n - 1;


/**
 * Executor has 2 commands
 * 1. multiply by 2
 * 2. add 1
 * Find the shortest path to transform 4 to 41
 *
 * The best approach is to go back from 41 to 4. And in every step checkout, if number is even, divide by 2, otherwise subtract 1
 *
 * @param a
 * @param b
 * @param cmd
 * @returns {Array}
 */
const executor = (a, b) => {
    let n = b;
    const arr = [];
    while(n > a){
        if(n % 2 == 0){
            n = divide(n);
            arr.push(1);
        }
        else{
            n = subtract(n);
            arr.push(2);
        }
    }
    arr.reverse();
    return arr;
}


console.log(
    executor(5, 41)
)