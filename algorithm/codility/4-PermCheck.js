'use strict';

/**
 * The point is calculate total sum and array sum and compare them
 *
 * @param arr
 * @returns {number}
 */
const solution = (arr) => {
    const len = arr.length,
        hash = {},
        sum = len * (len + 1) / 2;
    let arrSum = 0;
    for(let i = 0; i < len; i++){
        arrSum += arr[i];
        if(hash[arr[i]]){
            return 0;
        }
        else{
            hash[arr[i]] = 1;
        }
    }
    return sum == arrSum ? 1 : 0;
}

console.log(
    //solution([4, 1, 3, 2]),
    solution([1, 4, 1])
);