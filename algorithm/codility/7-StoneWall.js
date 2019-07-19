'use strict';

(() => {
    /**
     * When we go up we saves prev values in the stack
     * But when we go down we don't need to store values, since that would be different blocks
     * so we clear stack for all values that larger than our and check the last available in the stack. If the don't match
     * we have new block
     * 
     * @param {*} arr 
     */
    const solution = (arr) => {
        const len = arr.length;
        const stack = [];
        let total = 1;
        let prev = arr[0];
        for (let i = 1; i < len; i++) {
            if (prev != arr[i]) {
                if (arr[i] > prev) {
                    stack.push(prev);
                    total++;
                }
                else if (arr[i] < prev) {
                    while (stack[stack.length - 1] > arr[i]) {
                        stack.pop();
                    }
                    if (stack[stack.length - 1] != arr[i]) {
                        total++;
                    }
                }
                prev = arr[i];
            }
        }
        return total;
    }


    console.log(
        solution([1, 4, 3, 4, 1, 4, 3, 4, 1]),
        solution([8, 8, 5, 7, 9, 8, 7, 5, 4, 8]),
    );
})();