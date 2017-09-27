'use strict';


/**
 * Solving with hastable. In every iteration check if item exists in hashtable.
 * If not then, it's uniques
 *
 * @param arr
 * @returns {number}
 */
const solution = (arr) => {
    const len = arr.length,
        hash = {};
    let distinct = 0;
    for(let i = 0; i < len; i++){
        if(hash[arr[i]] == undefined){
            distinct++;
        }
        hash[arr[i]] = 1;
    }
    return distinct;
}


console.log(
    solution([2, 1, 1, 2, 3, 1])
);