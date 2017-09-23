'use strict';


/**
 * Solution with hashtable
 *
 * @param arr
 * @returns {*}
 */
const solution = (arr) => {
    const len = arr.length;
    const hash = {};
    for(let i = 0; i < len; i++){
        if(hash[arr[i]]){
            delete hash[arr[i]];
        }
        else{
            hash[arr[i]] = 1;
        }
    }
    return parseInt(Object.keys(hash)[0]);
}

/**
 * Solution using xor. The idea is that logical ^ remove all duplicates, i.e. 5^5 = 0, and 0 ^ 7 = 7
 *
 * @param arr
 * @returns {*}
 */
const solution2 = (arr) => {
    const len = arr.length;
    let unpaired = arr[0];
    for(let i = 1; i < len; i++){
        unpaired = unpaired ^ arr[i];
    }
    return unpaired;
}

console.log(solution([9, 3, 9, 3, 9, 7, 9]));