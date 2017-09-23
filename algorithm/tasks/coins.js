'use strict';

/**
 * sort function on numeric values
 * @param arr
 */

const solution = (n) => {
    const arr = [1, 5, 10, 25, 50],
        len = arr.length,
        res = [];

    for(let i = len - 1; i >= 0; i--){
        res[i] = [];
        let sum = n;
        while (sum > 0){
            let index = i;
            let coin = arr[index];
            while (sum < coin){
                index--;
                coin = arr[index];
            }
            sum = sum - coin;
            res[i].push(coin)
        }
        console.log(res[i])
    }
    return res;
}


console.log(solution(17));