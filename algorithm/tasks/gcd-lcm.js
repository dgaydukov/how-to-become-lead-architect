'use strict';

/**
 * greatest common divisor
 * Euclidean algorithm by subtraction
 *
 * @param a
 * @param b
 * @returns {*}
 */
const gcd = (a, b) => {
    if(a == b){
        return a;
    }
    if(a > b){
        return gcd(a-b, b);
    }
    else{
        return gcd(a, b-a);
    }
}


const gcd = (a, b) => {
    if(b == 0){
        return a;
    }
    return gcd(b, a%b)
}

/**
 *  Least common multiple
 *  The least common multiple (lcm) of two integers a and b is the smallest positive integer that  is divisible by both a and b
 *
 * @param a
 * @param b
 * @returns {number}
 */
const lcm = (a, b) => {
    return a * b / gcd(a, b);
}

console.log(
    gcd(8, 20),
    lcm(8, 20)
)