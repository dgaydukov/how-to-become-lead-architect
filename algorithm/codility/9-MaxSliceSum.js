'use strict';


/**
 * Smart way - count the sum of all positive numbers
 *
 * @param arr
 * @returns {number}
 */
const solution = (arr) => {
    const len = arr.length;
    let sum = 0,
        maxSum = Number.MIN_SAFE_INTEGER,
        totalSum = 0;
    for(let i = 0; i < len; i++){
        totalSum += arr[i];
        if(arr[i] > 0){
            sum += arr[i];
            if(maxSum < sum){
                maxSum = sum;
            }
        }
        else{
            sum = 0;
            if(maxSum < arr[i]){
                maxSum = arr[i];
            }
        }
    }
    if(maxSum < totalSum){
        maxSum = totalSum;
    }
    return maxSum;
}


console.log(
    solution([3, 2, -6, 4, 0]),
    solution([10]),
    solution([-10]),
    solution([3, -2, 3])
);