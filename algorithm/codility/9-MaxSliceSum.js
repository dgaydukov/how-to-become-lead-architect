(() => {
    /**
     * https://en.wikipedia.org/wiki/Maximum_subarray_problem
     * The idea is super simple once you get it.
     * Basically we calculate sequence as long as it sum greater than 0. Otherwise we start from beginning.
     * Cause if later we got big sequese, previous less than 0 will only decrement it, se we can get rid of it
     * 
     * 
     * @param {*} arr 
     */
    const solution = arr => {
        let sum = arr[0],
            max = sum,
            min = sum,
            noZero = true;
        for (let i = 1; i < arr.length; i++) {
            sum += arr[i];
            if (sum < 0) {
                sum = 0;
            }
            if (sum < arr[i]) {
                sum = arr[i]
            }
            if (max < sum) {
                max = sum;
            }
            if (min < arr[i]) {
                min = arr[i];
            }
            if (arr[i] == 0) {
                noZero = false;
            }
        }
        if (max == 0 && noZero) {
            max = min;
        }
        return max;
    }


    console.log(
        solution([5, -7, 3, 5, -2, 4, -1]),
        solution([3, 2, -6, 4, 0]),
        solution([-2, -3, -4, -1]),
        solution([-4, 6, -2]),
        solution([3, -2]),

    );
})();