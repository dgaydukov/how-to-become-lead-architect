'use strict';

/**
 * Helper function convert irrational parts to decimal fractions, for example 0.16666666666666666 => 1/6
 * @param n
 */
const toDecimalFraction = (n) => n == 1 ? 1 : "1/" + Math.round(1/n);

/**
 * The trick is simple. Every next value is just the difference between parent and previous value
 * @param n
 * @returns {Array}
 */
const solution = (n) => {
    const arr = [];
    for(let i = 1; i <= n; i++){
        arr[i] = [];
        for(let j = 1; j <= i; j++){
            let k = i;
            if(j == 1 || j == i){
                k = 1/i;
            }
            else{
                k = eval(arr[i-1][j-2]) - eval(arr[i][j-2]);
            }
            arr[i].push(toDecimalFraction(k));
        }
    }
    return arr;
}


console.log(solution(10));