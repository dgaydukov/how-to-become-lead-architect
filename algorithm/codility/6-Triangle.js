'use strict';

(() => {
    /**
     * sort function on numeric values
     * @param arr
     */
    const sort = (arr) => arr.sort((a, b) => a - b);

    /**
     * helper function to check if 3 sides can be a triangle
     * @param a
     * @param b
     * @param c
     */
    const isTriangle = (a, b, c) => a + b > c && a + c > b && b + c > a;

    /**
     * Smart solution, with sorting with O(log n * n)
     * @param arr
     * @returns {number}
     */
    const solution = (arr) => {
        const sorted = sort(arr),
            len = sorted.length;
        for (let i = 0; i < len - 2; i++) {
            if (isTriangle(sorted[i], sorted[i + 1], sorted[i + 2])) {
                return 1;
            }
        }
        return 0;
    }

    const arr = [10, 2, 5, 1, 8, 20];

    console.log(solution(arr), solution2(arr));

})();