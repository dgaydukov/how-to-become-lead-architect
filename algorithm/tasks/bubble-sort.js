'use strict';


/**
 * swap function for change 2 variables values
 *
 * @param a
 * @param b
 */
const swap = (a, b) => {
    let c = a;
    a = b;
    b = c;
}

/**
 * Simple sorting with O(n^2) complexity
 * Actual complexity is n*(n-1)/2
 *
 * @param arr
 * @returns {*}
 */
const sort = (arr) => {
    const len = arr.length;
    let iteration = 0;
    for(let i = 0; i < len; i++){
        for(let j = i+1; j < len; j++){
            iteration++;
            if(arr[i] > arr[j]){
                swap(arr[i], arr[j])
            }
        }
    }
    console.log(len, iteration);
    return arr;
}

console.log(
    sort([101, 203, 5, 87, 76, 48])
)