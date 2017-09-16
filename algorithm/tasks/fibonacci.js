'use strict';

/*
* Recursion version. But take too much time to calculate for 100
 */
function fibonacciRecursion(n) {
    if(n == 1 || n == 2){
        return 1;
    }
    return fibonacciRecursion(n-1)+fibonacciRecursion(n-2);
}

/*
* Dynamic programming version. Take no time to calculate for 100
 */
function fibonacciDP(n) {
    var f = [];
    f[1] = 1;
    f[2] = 2;
    for(var i = 3; i < n; i++){
        f[i] = f[i-1]+f[i-2];
    }
    return f[n-1];
}


console.log(fibonacciRecursion(10));
console.log(fibonacciDP(100));