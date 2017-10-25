'use strict';


/**
 *  a given N rungs, the number of different ways of climbing is the (N+1)th element in the Fibonacci numbers
 *
 * @param arr1
 * @param arr2
 * @returns {Array}
 */
const solution = (arr1, arr2) => {
    const res = [],
        fib = [1, 1],
        len = arr1.length;
    let max = 0;
    for(let i = 0; i < len; i++){
        if(max < arr1[i]){
            max = arr1[i];
        }
    }
    for(let i = 2; i < max + 2; i++){
        fib[i] = fib[i-1] + fib[i-2]
    }
    for(let i = 0; i < len; i++){
        //res[i] = fib[arr1[i]] % Math.pow(2, arr2[i]);
        res[i] = fib[arr1[i]] & ((1<<arr2[i])-1)
    }
    return res;
}

console.log(
    solution([4, 4, 5, 5, 1], [3, 2, 4, 3, 1])
)