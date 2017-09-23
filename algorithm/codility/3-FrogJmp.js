'use strict';

/**
 *
 * @param a
 * @param b
 * @param c
 * @returns {number}
 */
const solution = (a, b, c) => {
    return Math.ceil((b-a)/c);
}

console.log(solution(10, 85, 30));