(() => {
    /**
     * https://en.wikipedia.org/wiki/Maximum_subarray_problem
     * The idea is super simple once you get it.
     * Basically we build new array with sums, and then find max element
     * 
     * 
     * @param {*} arr 
     */
    const solution = (arr) => {
        let max = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < arr[i] + arr[i - 1]) {
                arr[i] += arr[i - 1];
            }
            if (max < arr[i]) {
                max = arr[i];
            }
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