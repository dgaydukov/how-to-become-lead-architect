'use strict';

/**
 * If we have array like [1,1,2,3,3], we should get 2
 * This works because n^n = 0, so all duplicated will be removed
 * 
 * @param arr
 * @returns {number}
 */
const unique = (arr)=>{
    let uniq = 0;
    for(let i = 0, len = arr.length; i < len; i++){
        uniq = uniq ^ arr[i];
    }
    return uniq;
}

const powerOfTwo = (n) => (n & (n-1)) == 0


console.log(
    unique([1,2,1,3,3]),
    powerOfTwo(4),
    powerOfTwo(7)
)