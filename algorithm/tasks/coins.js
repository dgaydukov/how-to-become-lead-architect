'use strict';

/**
 * Task
 * Given an array of cent coins [1, 5, 10, 25, 50], calculate how many ways you can get in 17 cents
 * 
 * Solution
 * The idea is that we can come from 0 to 17 base on formula
 * F(n) = F(n-50) + F(n-25) + F(n-10) + F(n-5) + F(n-1)
 * So based on this we use either recursion or dynamic programming
 * 
 * Checkout executor in use folder
 */

/**
 * Simple function to check where 2 arrays are perms of one another
 * 
 * @param arr1
 * @param arr2
 * @returns {boolean}
 */
const isPerm = (arr1, arr2) => {
    const len1 = arr1.length,
        len2 = arr2.length;
    if(len1 == len2){
        const hash = {};
        for(let i = 0; i < len1; i++){
            if(hash[arr1[i]] == undefined){
                hash[arr1[i]] = 1;
            }
            else{
                hash[arr1[i]]++;
            }
        }
        for(let i = 0; i < len1; i++){
            if(hash[arr2[i]] > 0){
                hash[arr2[i]]--;
            }
            else{
                return false;
            }
        }
        return true;
    }
    else{
        return false;
    }
}

/**
 * Count total number of perms
 * 
 * @param end
 * @param list
 * @param n
 * @param path
 * @returns {*}
 */
const permsCount = (end, list, n, path=[]) => {
    n = typeof n == "undefined" ? end : n;
    if(n == 0){
        return [path];
    }
    const result = [];
    for(let i = 0, len = list.length; i < len; i++){
        const value = list[i].cmd(n);
        if(value >= 0){
            result.push(...permsCount(end, list, value, [].concat(path, list[i].key)));
        }
    }
    return result;
}


/**
 * Get unique perms
 * 
 * @param arr
 * @returns {Array}
 */
const uniquePermsCount = (arr)=>{
    const unique = arr.slice(),
        len = arr.length;
    for(let i = 0; i < len; i++){
        for(let j = i+1; j < len; j++){
            if(isPerm(unique[i], unique[j])){
                unique[j] = false;
            }
        }
    }
    const perms = [];
    for(let i = 0; i < len; i++){
        if(unique[i]){
            perms.push(unique[i])
        }
    }
    return perms;
}

const solution = (amount, coins)=>{
    const perms = permsCount(amount, coins);
    return uniquePermsCount(perms);
}


const coins = [
    {key: 50, cmd: (n) => n - 50},
    {key: 25, cmd: (n) => n - 25},
    {key: 10, cmd: (n) => n - 10},
    {key: 5, cmd: (n) => n - 5},
    {key: 1, cmd: (n) => n - 1},
]
console.log(
    solution(17, coins),
)


/**
 * The problem with this approach is that it return all perms
 * for 17 it will be 80
 *
 * @param n
 * @returns {*}
 */
const permsCountDP = (n) => {
    const f = [];
    f[0] = 1;
    f[1] = 1;
    for(let i = 2; i <= n; i++){
        const f50 = f[i-50] ? f[i-50] : 0,
            f25 = f[i-25] ? f[i-25] : 0,
            f10 = f[i-10] ? f[i-10] : 0,
            f5 = f[i-5] ? f[i-5] : 0,
            f1 = f[i-1] ? f[i-1] : 0;
        //console.log(i, n, f50, f25, f10, f5, f1)
        f[i] = f50 + f25 + f10 + f5 + f1;
    }
    return f[n];
}

/**
 * bonus
 * Real solution with dp 
 */
(()=>{
    const coins = [1, 5, 10, 25, 50];

    const getCoinNumber = (n, i=coins.length-1)=>{
        if (n < 0 || i < 0){
            return 0;
        }
        if (n == 0 || i == 0){
            return 1;
        }
        return getCoinNumber(n, i - 1) + getCoinNumber(n - coins[i], i);
    }

    const R = {};
    const getCoinNumberDP = (n, i) => {
        if (i === undefined){
            i = coins.length - 1
        }
        if (n < 0 || i < 0){
            return 0;
        }
        if (n == 0 || i == 0){
            return 1;
        }
        var k = n + '.' + i;
        R[k] = R[k] || getCoinNumberDP(n, i - 1) + getCoinNumberDP(n - coins[i], i);
        return R[k];
    }
    console.log(
        //getCoinNumber(5000),
        getCoinNumberDP(30000)
    )
})()
