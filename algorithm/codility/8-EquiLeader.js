'use strict';

/**
 * calculate leader
 *
 * @param arr
 * @returns {number}
 */
const getLeader = (arr)=>{
    const len = arr.length,
        hash = {};
    let leader = -1;
    for(let i = 0; i < len; i++){
        if(hash[arr[i]]){
            hash[arr[i]]++;
        }
        else{
            hash[arr[i]] = 1;
        }
        if(Math.floor(len/2)+1 == hash[arr[i]]){
            leader = arr[i];
        }
    }
    return leader;
}

/**
 * compare every 2 subarrays if they have the same leader
 *
 * @param arr
 * @returns {number}
 */
const solution = (arr) => {
    const len = arr.length;
    let count = 0;
    for(let i = 0; i < len; i++){
        const leader1 = getLeader(arr.slice(0, i)),
            leader2 = getLeader(arr.slice(i, len));
        if(leader1 == leader2 && leader1 != -1){
            count++;
        }
    }
    return count;
}


console.log(
    solution([4, 3, 4, 4, 4, 2]),
    solution([0, 0]),
    solution([4, 4, 2, 5, 3, 4, 4, 4])
);