'use strict';


/**
 * Old legend says that 33 survivors were left in a cave by roman soldiers
 * They didn't want to give up and decided to stay into circle and kill every third person
 * So who will be the last
 * 33 => 3 => last is 26
 * 
 * @param n
 * @param m
 * @returns {*}
 */
const last = (n, m) => {
    const arr = [];
    for(let i = 1; i <= n; i++){
        arr.push(i);
    }
    let k = m;
    while(arr.length > 1){
        arr.splice(k, 1);
        k = k + m;
        while(k >= n){
            k = k-n;
        }
    }
    return arr[0];
}

console.log(
    last(10, 4),
    last(33, 3),
)