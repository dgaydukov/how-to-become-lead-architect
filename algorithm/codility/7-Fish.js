'use strict';

/**
 * Quick way to check
 *
 * @param str
 * @returns {number}
 */
const solution = (A, B) => {
    const len = A.length;
    let prev = B[0];
    for(let i = 1; i < len; i++){
        if(prev != B[i]){
            console.log(A[i-1], A[i]);
            if(A[i-1] > A[i]){
                A.splice(i-1, 1);
            }
            else{
                A.splice(i, 1);
            }
        }
        else{
            prev = B[i];
        }
    }
    //console.log(A)
    return A.length;
}


console.log(
    solution([4, 3, 2, 1, 5], [0, 1, 0, 0, 0]),
    solution([1], [0])
);