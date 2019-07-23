'use strict';

(() => {
    /**
     * Dumb solutions with O(n) complexity using brute force
     * The idea is that we check if any number is divisor, and if so, enlarge counter
     * 
     * @param n
     * @returns {number}
     */
    const solution = (n) => {
        let count = 0;
        for (let i = 1; i <= n; i++) {
            if (n % i == 0) {
                count++;
            }
        }
        return count;
    }

    console.log(
        solution(25),
    );
})();

(() => {

    /**
     * Smart solution with O(sqrt(n)) time complexity
     * The idea is that we find divisors only to the sqrt(n) number. And if we found one, we enlarge counter by 2, because divisor ara double itself
     * 24 / 2 (so we have, divisors are 2 & 12)
     * 24 /3 ( 3 & 8)
     * 24 /4 ( 4 & 6) 
     * and so on
     * 
     * @param n
     * @returns {number}
     */
    const solution = (n) => {
        let count = 0;
        const sqrt = Math.floor(Math.sqrt(n));
        for (let i = 1; i <= sqrt; i++) {
            if (n % i == 0) {
                count += 2;
            }
        }
        if (sqrt == Math.sqrt(n)) {
            count--;
        }
        return count;
    }


    console.log(
        solution(25),
    );
})();