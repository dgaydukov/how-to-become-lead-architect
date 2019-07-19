'use strict';

(() => {
    /**
     * Solution is self-descriptive. First we hash all values, then iterate to check if any value has more than half occurences
     * 
     * @param {*} arr 
     */
    const solution = arr => {
        const size = arr.length;
        const hash = {};
        for (let i = 0; i < size; i++) {
            if (hash[arr[i]]) {
                hash[arr[i]]++;
            }
            else {
                hash[arr[i]] = 1;
            }
        }
        for (let i = 0; i < size; i++) {
            if (hash[arr[i]] > size / 2) {
                return i;
            }
        }
        return -1;
    }


    console.log(
        solution([3, 4, 3, 2, 3, -1, 3, 3]),
    );
})();