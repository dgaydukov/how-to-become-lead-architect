'use strict';


/**
 * Write simple function that executes
 *
 * sum(2)(3)(); // -> 5
 * sum(1)(2)(3)(4)(); // -> 10
 */

const sum = (a) => {
    let totalSum = a;
    const inner = (b) => {
        if(b == undefined){
            return totalSum;
        }
        else{
            totalSum += b;
            return inner;
        }
    }
    return inner;
}

const sum2 = (a) => {
    let totalSum = a;
    const inner = (b) => {
        totalSum += b;
        return inner;
    }
    inner.valueOf = () => totalSum;
    return inner;
}

console.log(
    sum(2)(3)(),
    sum(1)(2)(3)(4)(),

    sum2(2)(3),
    sum2(1)(2)(3)(4),
)