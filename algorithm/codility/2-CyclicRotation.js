'use strict';

/**
 * Solution with rotating array on k times
 *
 * @param arr
 * @param k
 * @returns {Array}
 */
const solution = (arr, k) => {
    const len = arr.length,
        newArr = [];
    k = k % len;
    for(let i = 0; i < len; i++){
        let j = i + k;
        if(j >= len){
            j = j - len;
        }
        newArr[j] = arr[i];
    }
    return newArr;
}

console.log(solution([3, 8, 9, 7, 6], 3));