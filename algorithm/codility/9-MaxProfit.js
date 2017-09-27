'use strict';


/**
 * Dumb solution with O(n^2) time complexity,
 *
 * @param arr
 * @returns {number}
 */
const solution = (arr) => {
    const len = arr.length;
    let max = 0;
    for(let i = 0; i < len; i++){
        for(let j = i+1; j < len; j++){
            const diff = arr[j] - arr[i];
            if(max < diff){
                max = diff;
            }
        }
    }
    return max;
}


console.log(
    solution([23171, 21011, 21123, 21366, 21013, 21367])
);