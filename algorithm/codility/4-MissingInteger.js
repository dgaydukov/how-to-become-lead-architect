'use strict';

/**
 * The idea is to put all data into hash table, and then to loop through digits and watch what doesnt' exist in hash
 *
 * @param arr
 * @returns {*}
 */
const solution = (arr) => {
    const len = arr.length,
        hash = {};
    for(let i = 0; i < len; i++){
        hash[arr[i]] = 1;
    }
    for(let i = 1; i < len+2; i++){
        if(!hash[i]){
            return i;
        }
    }
    return 1;
}

console.log(
    solution([1,2,3])
);