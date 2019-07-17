'use strict';

(() => {
    /**
     * Dumb solutions with O(n^2) complexity
     * For every number with calculate sum and index difference
     * 
     * **Perfomance: 62%
     * https://app.codility.com/demo/results/training65DZ7S-YAN/
     *
     * @param arr
     * @returns {number}
     */
    const solution = (arr) => {
        const len = arr.length;
        let counter = 0;
        for (let i = 0; i < len; i++) {
            for (let j = i + 1; j < len; j++) {
                const intersect = arr[i] + arr[j] + i - j;
                //console.log(arr[i], arr[j], arr, i, j, intersect);
                if (intersect >= 0) {
                    counter++;
                }
                if (counter > 10000000) {
                    return -1;
                }
            }
        }
        return counter;
    }


    console.log(
        solution([1, 5, 2, 1, 4, 0]),
        solution([1, 2, 3, 4, 5])
    );

})();