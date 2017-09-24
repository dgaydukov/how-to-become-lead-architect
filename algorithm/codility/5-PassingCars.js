'use strict';


/**
 * The idea is that when we get 0 we increase counter, and when we get 1 we increase total amount on counter
 *
 * @param arr
 * @returns {number}
 */
const solution = (arr) => {
    const len = arr.length;
    let counter = 0,
        n = 0;
    for(let i = 0; i < len; i++){
        if(arr[i] == 0){
            counter++;
        }
        else{
            n += counter;
        }
        if(n > 1000000000){
            return -1;
        }
    }
    return n;
}


console.log(
    solution([0, 1, 0, 1, 1] )
);