'use strict';

/**
 * Given 2 arrays find all pairs, that you can swap to get equal sums
 * Brute Force solution win O(n*m) time complexity, just iterate for all values
 *
 * @param arr1
 * @param arr2
 * @returns {{}}
 */
const solution = (arr1, arr2) => {
    const len1 = arr1.length,
        len2 = arr2.length,
        swaps = {};
    let sum1 = 0,
        sum2 = 0;
    for(let i = 0; i < len1; i++){
        sum1 += arr1[i];
    }
    for(let i = 0; i < len2; i++){
        sum2 += arr2[i];
    }
    for(let i = 0; i < len1; i++){
        for(let j = 0; j < len2; j++){
            if(sum1 - arr1[i] + arr2[j] == sum2 - arr2[j] + arr1[i]){
                swaps[arr1[i]] = arr2[j];
            }
        }
    }
    return swaps
}

/**
 * More elaborate solution with O(n+m) time complexity
 * sum1+a-b = sum2-a+b
 * a-b = (sum1-sum2)/2
 * So we need to find all elements in one array, that have difference 2
 *
 * @param arr1
 * @param arr2
 * @returns {{}}
 */
const solution2 = (arr1, arr2) => {
    const len1 = arr1.length,
        len2 = arr2.length,
        hash1 = {},
        hash2 = {},
        swaps = {};
    let sum1 = 0,
        sum2 = 0;
    for(let i = 0; i < len1; i++){
        sum1 += arr1[i];
        hash1[arr1[i]] = 1;
    }
    for(let i = 0; i < len2; i++){
        sum2 += arr2[i];
        hash2[arr2[i]] = 1;
    }
    let diff = Math.abs((sum1-sum2))/2;
    for(let i = 0; i < len1; i++){
        if(hash2[arr1[i]+diff]){
            swaps[arr1[i]] = arr1[i]+diff;
        }
        if(hash2[arr1[i]-diff]){
            swaps[arr1[i]] = arr1[i]-diff;
        }
    }
    return swaps
}





console.log(
    solution([4, 1, 2, 1, 1, 2], [3, 6, 3, 3]),
    solution2([4, 1, 2, 1, 1, 2], [3, 6, 3, 3])
)