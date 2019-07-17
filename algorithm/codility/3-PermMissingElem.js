'use strict';

(() => {
    /**
     * We should calculate the real sum and subtract sum of array
     *
     * @param arr
     * @returns {number}
     */
    const solution = (arr) => {
        const len = arr.length,
            n = len + 1,
            realSum = n * (n + 1) / 2;
        let sum = 0;
        for (let i = 0; i < len; i++) {
            sum += arr[i];
        }
        return realSum - sum;
    }

    console.log(solution([2, 3, 1, 5]));

})();