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



(() => {
    /**
     * Smart solution
     * Since we need to count number of intersection we can have 2 array: one with starts and second with ends
     * And on every step we calculate number of open circles and add them to total number, and when we meet closing
     * we decrese number of circles
     * 
     * @param {*} arr 
     */
    const solution = arr => {
        const starts = [], ends = [];
        for (let i = 0; i < arr.length; i++) {
            starts.push(i - arr[i]);
            ends.push(i + arr[i]);
        }
        let opened = 0, crossed = 0, index = 0;
        starts.sort((a, b) => a - b);
        ends.sort((a, b) => a - b);
        for (let i = 0; i < arr.length; i++) {
            while (ends[index] < starts[i]) {
                opened--;
                index++;
            }
            crossed += opened;
            if (crossed > 10 ** 7) {
                return -1;
            }
            // console.log(starts[i], opened)
            opened++;
        }
        return crossed;
    }


    console.log(
        solution([1, 5, 2, 1, 4, 0]),
        solution([1, 2, 3, 4, 5])
    );
})();