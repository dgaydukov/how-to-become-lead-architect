'use strict';

(() => {
    /**
     * We don't need to run loop inside loop. Min sequence is 2 or 3 elements
     *
     * @param arr
     * @returns {number}
     */
    const solution = (arr) => {
        const len = arr.length;
        let min = Number.MAX_SAFE_INTEGER,
            pos = 0;
        for (let i = 0; i < len - 1; i++) {
            const avg2 = (arr[i] + arr[i + 1]) / 2;
            if (min > avg2) {
                min = avg2;
                pos = i;
            }
            const avg3 = (arr[i] + arr[i + 1] + arr[i + 2]) / 3;
            if (min > avg3) {
                min = avg3;
                pos = i;
            }
        }
        return pos;
    }


    console.log(
        solution([4, 2, 2, 5, 1, 5, 8])
    );

})();