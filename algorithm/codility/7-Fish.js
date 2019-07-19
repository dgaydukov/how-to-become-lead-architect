'use strict';

(() => {
    /**
     * Quick way to check
     * We use stack for all fish who goes upstream, and when we meet downstream fish we pop from the stack
     * until we eat donwstream fish, or stack is empty
     *
     * @param str
     * @returns {number}
     */
    const solution = (A, B) => {
        const len = A.length;
        const stack = [];
        for(let i = 0; i < len; i++){
            if(B[i] == 1){
                stack.push(A[i]);
                A[i] = null;
            }
            else{
                while(stack[stack.length-1] < A[i]){
                    stack.pop();
                }
                if(stack.length > 0){
                    A[i] = null;
                }
            }
        }
        return stack.length + A.filter(k=>k).length;
    }


    console.log(
        solution([4, 3, 2, 1, 5, 1], [0, 1, 1, 1, 0, 1]),
        solution([4, 3, 2, 1, 5], [0, 1, 0, 0, 0]),
        solution([1], [0])
    );
})();