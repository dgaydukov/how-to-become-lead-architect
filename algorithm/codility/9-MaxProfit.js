'use strict';

(()=>{
    /**
     * Naive solution solution with O(N^2) time complexity,
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
     * **see MaxSliceSum for example implementation
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
