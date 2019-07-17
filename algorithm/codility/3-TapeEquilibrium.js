'use strict';

(() => {
    /**
     * The point is calculate total sum, then in every step, get diff between to sums
     *
     * @param arr
     * @returns {number}
     */
    const solution = (arr) => {
        const len = arr.length;
        let min = Number.MAX_SAFE_INTEGER,
            sum = arr.reduce((a, b) => a + b, 0),
            sum2 = 0;
        for (let i = 0; i < len - 1; i++) {
            sum -= arr[i];
            sum2 += arr[i];
            min = Math.min(min, Math.abs(sum - sum2));
        }
        return min;
    }

    console.log(solution([3, 1, 2, 4, 3]));
})();