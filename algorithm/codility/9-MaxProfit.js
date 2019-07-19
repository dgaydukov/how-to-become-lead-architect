'use strict';

(()=>{
    /**
     * Naive solution solution with O(n^2) time complexity,
     * Perfomance: 66%
     * https://app.codility.com/demo/results/training3NETS9-RM8/
     *
     * @param arr
     * @returns {number}
     */
    const solution = (arr) => {
        const len = arr.length;
        let max = 0;
        for(let i = 0; i < len; i++){
            for(let j = i+1; j < len; j++){
                const diff = arr[j] - arr[i];
                if(max < diff){
                    max = diff;
                }
            }
        }
        return max;
    }
    
    
    console.log(
        solution([23171, 21011, 21123, 21366, 21013, 21367])
    );
})();

(() => {
    /**
     * More advanced solution based on Kadane's algorithm (maxi subarray sum)
     * see below for implementation
     *
     * @param arr
     * @returns {number}
     */
    const solution = (arr) => {
        let min = arr[0], max = 0;
        for (let i = 1; i < arr.length; i++) {
            if (max < arr[i] - min) {
                max = arr[i] - min;
            }
            if (arr[i] < arr[i - 1] && arr[i] < min) {
                min = arr[i];
            }
        }
        return max;
    }


    console.log(
        solution([23171, 21011, 21123, 21366, 21013, 21367])
    );
})();

(() => {
    /**
     * The idea is super simple once you get it.
     * Basically we calculate sequence as long as it sum greater than 0. Otherwise we start from beginning.
     * Cause if later we got big sequese, previous less than 0 will only decrement it, se we can get rid of it
     * 
     * @param {*} arr 
     */
    const maxSubArraySum = arr => {
        let sum = 0, max = 0, start = 0, end = 0;
        for (let i = 1; i < arr.length; i++) {
            sum += arr[i];
            if(sum < 0){
                sum = 0;
                start = i + 1;
            }
            if(max < sum){
                end = i;
                max = sum;
            }
        }
        console.log({start, end});
        return max;
    }


    console.log(
        maxSubArraySum([5, -7, 3, 5, -2, 4, -1])
    );
})();
