'use strict';


/**
 * 10**9 - average 2.53, 2.64, 2.65
 * 10**10 - average 166.73, 171.99, 166.74
 * 10**11 - average 1701.56, 2328.60, 2245.96
 * 10**12 - average 22726.40, 21134.22, 21134.22
 *
 */
const start = + new Date();
let n = 0;
for(let i = 0, len = 10**9; i < len; i++){
    n++;
}
const end = + new Date();
console.log("finish", n, ((end-start)/1000).toFixed(2))