'use strict';

(() => {
    /**
     * sort function on numeric values
     * @param arr
     */
    const sort = (arr) => arr.sort((a, b) => a - b);

    /**
     *
     *
     * @param arr
     * @returns {number}
     */
    const solution = (arr) => {
        const len = arr.length,
            sorted = sort(arr);
        let max = sorted[len - 1];
        if (max < 0) {
            return sorted[len - 1] * sorted[len - 2] * sorted[len - 3];
        }
        let maxOfTwo = sorted[len - 2] * sorted[len - 3];
        if (sorted[0] * sorted[1] > maxOfTwo) {
            maxOfTwo = sorted[0] * sorted[1];
        }
        return maxOfTwo * max;
    }


    console.log(
        solution([-3, 1, 2, -2, 5, 6]),
        solution([-5, -6, -4, -7, -10])
    );

})();