'use strict';

(() => {

    /**
     * Helper function to convert number to binary representation
     *
     * @param n
     */
    const toBinary = (n) => Number(n).toString(2);


    /**
     *
     *
     * @param n
     * @returns {number}
     */
    const solution = (n) => {
        const str = toBinary(n),
            len = str.length;
        let gap = 0, counter = 0;
        for (let i = 0; i < len; i++) {
            if (str[i] == 1) {
                if (gap < counter) {
                    gap = counter;
                }
                counter = 0;
            }
            else {
                counter++;
            }
        }
        return gap;
    }

    console.log(solution(1041));
})();