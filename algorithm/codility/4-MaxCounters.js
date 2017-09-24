'use strict';


/**
 * Calculate in every step what to do
 * Simple solution, because if we need to maxcounter, we just fill array with new values
 * but this Approach is O(N*M), so it's not best for production
 *
 * @param arr
 * @returns {*}
 */
const solution = (n, arr) => {
    const len = arr.length,
        newArr = Array(n).fill(0);
    let max = 0;
    for(let i = 0; i < len; i++){
        if(arr[i] >=1 && arr[i] <= n){
            const j = arr[i] - 1;
            newArr[j] = newArr[j] + 1;
            if(max < newArr[j]){
                max = newArr[j];
            }
        }
        if(arr[i] == n+1){
            newArr.fill(max);
        }
    }
    return newArr;
}

/**
 * Calculate in every step what to do
 * Best way to store minValue when we want to maxcounter
 *
 * @param arr
 * @returns {*}
 */
const solution = (n, arr) => {
    const len = arr.length,
        newArr = Array(n).fill(0);
    let max = 0;
    let minValue = 0;
    for(let i = 0; i < len; i++){
        if(arr[i] >=1 && arr[i] <= n){
            const j = arr[i] - 1;
            if(newArr[j] < minValue){
                newArr[j] = minValue;
            }
            newArr[j] = newArr[j] + 1;
            if(max < newArr[j]){
                max = newArr[j];
            }
        }
        if(arr[i] == n+1){
            minValue = max;
        }
    }
    for(let i = 0; i < n; i++){
        if(newArr[i] < minValue){
            newArr[i] = minValue;
        }
    }
    return newArr;
}


console.log(
    solution(5, [3, 4, 4, 6, 1, 4, 4]),
    "(3, 2, 2, 4, 2)"
);