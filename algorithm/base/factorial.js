'use strict';


/**
 * Factorial with recursion
 *
 * @param n
 * @returns {number}
 */
const factorial = (n) => {
    if(n == 0 || n == 1){
        return 1;
    }
    if(n == 2){
        return 2;
    }
    return n * factorial(n-1);
}

/**
 * Factorial with dynamic programming
 *
 * @param n
 * @returns {*}
 */
const factorialDP = (n) => {
    const F = [];
    F[0] = 1;
    F[1] = 1;
    F[2] = 2;
    for(let i = 2; i <= n; i++){
        F[i] = i * F[i-1];
    }
    return F[n];
}


console.log(
    factorial(150),
    factorialDP(120)
);