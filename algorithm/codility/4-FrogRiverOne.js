'use strict';

(() => {
    /**
     * The idea is that we should wait before all numbers less then our have appeared. For this we use hashtable
     *
     * @param n
     * @param arr
     * @returns {number}
     */
    const solution = (n, arr) => {
        const len = arr.length,
            hash = {};
        let counter = 0;
        for (let i = 0; i < len; i++) {
            if (arr[i] <= n) {
                if (!hash[arr[i]]) {
                    counter++;
                }
                hash[arr[i]] = 1;
            }
            if (counter == n) {
                return i;
            }
        }
        return -1;
    }

    console.log(
        solution(5, [1, 3, 1, 4, 2, 3, 5, 4]),
        solution(3, [1, 3, 1, 3, 2, 1, 3])
    );
})();