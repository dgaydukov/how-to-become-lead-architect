'use strict';


/**
 * Dumb solution we just iterate over all values and check if value is divisible
 *
 * @param a
 * @param b
 * @param c
 * @returns {number}
 */
const solution = (a, b, c) => {
    let n = 0;
    for(let i = a; i <= b; i++){
        if(i % c == 0){
            n++;
        }
    }
    return n;
}


/**
 * Smart solution
 * b/c - all occurrences <=a
 * a/c - all occurrences <=b
 * so we just subtract them
 *
 * @param a
 * @param b
 * @param c
 * @returns {number}
 */
const solution = (a, b, c) => {
    return Math.floor(b/c) - Math.floor(a/c) + (a % c == 0 ? 1 : 0);
}


console.log(
    solution(10, 10, 5)
);