'use strict';


/**
 * Simple solution with brute force. We just check how many divisors in array has any element
 *
 * @param arr
 * @returns {Array}
 */
const solution = (arr)=>{
    const len = arr.length,
        nonDivisors = [];
    for(let i = 0; i < len; i++){
        nonDivisors[i] = 0;
        for(let j = 0; j< len; j++){
            if(arr[i] % arr[j] != 0){
                nonDivisors[i]++;
            }
        }
    }
    return nonDivisors;
}

console.log(
    solution([3, 1, 2, 3, 6])
)