'use strict';

(() => {
    /**
     * Dumb solution with O(n) complexity
     * We just iterate over all list and check if perimetr is min
     *
     * @param n
     * @returns {number}
     */
    const solution = (n) => {
        let min = Number.MAX_SAFE_INTEGER;
        for (let i = 1; i <= n; i++) {
            if (n % i == 0) {
                let p = 2 * (i + n / i);
                if (min > p) {
                    min = p;
                }
            }
        }
        return min;
    }


    console.log(
        solution(1234)
    );
})();

(() => {
    /**
     * Smart solution with O(sqrt(n)) complexity
     *
     * @param n
     * @returns {number}
     */
    const solution = (n) => {
        let a = Math.ceil(Math.sqrt(n));
        while (n % a != 0) {
            a--;
        }
        return 2 * (a + n / a);
    }


    console.log(
        solution(1234)
    );
})();
