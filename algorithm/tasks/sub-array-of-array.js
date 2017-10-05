'use strict';

/**
 * Check if one array is subarray of another
 * solution with hash table
 *
 * @param arr
 * @param subArr
 * @returns {boolean}
 */

const solution = (arr, subArr) =>{
    const hash = {};
    for(let i = 0, len = arr.length; i < len; i++){
        if(hash[arr[i]] == undefined){
            hash[arr[i]] = 1;
        }
    }
    for(let i = 0, len = subArr.length; i < len; i++){
        if(hash[subArr[i]] == undefined){
            return false;
        }
        else{
            delete hash[subArr[i]];
        }
    }
    return true;
}

/**
 * Solution without hash-table
 *
 * @param arr
 * @param subArr
 * @returns {boolean}
 */
const solution2 = (arr, subArr) =>{
    let i = arr.length - 1,
        j = subArr.length - 1;
    while(i > 0 && j > 0){
        if(arr[i] == subArr[j]){
            j--;
        }
        i--;
    }
    if(j == 0){
        return true;
    }
    return false;
}


console.log(
    solution([1,2,3,4,5], [1,2,5]),
    solution2([1,2,3,4,5], [1,2,5])
)