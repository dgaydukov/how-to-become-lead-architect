(() => {
    /**
     * Naive DP approach. For every leaf we calculate min number of steps to get there, or write -1, if there is no steps
     * Take for example default array [4, 5, 7, 12] => [-1, 1, 2, 3]
     * There is no step to get to 4
     * there is 1 step to get to 5
     * there are 2 steps to get to 7 (one from 5 + 1 to 5 itself)
     * there are 3 steps to get to 12 (1 from 7 + 2 to 7 itself)
     * Unfortunately time complexity is O(n**2). Cause for every leaf we shold check it against all previous leaves
     * 
     * @param {*} arr 
     */
    const solution = (arr) => {
        const size = arr.length,
            leaves = [],
            fibHash = {},
            F = [1, 1];
        for (let i = 2; i < size + 2; i++) {
            F[i] = F[i - 1] + F[i - 2];
            if (F[i] > size) {
                break;
            }
        }
        for (let i = 0; i < F.length; i++) {
            fibHash[F[i]] = 1;
        }
        if (fibHash[size + 1]) {
            return 1;
        }
        for (let i = 0; i < size; i++) {
            if (arr[i] == 1) {
                leaves.push(i + 1);
            }
        }
        leaves.push(size + 1);
        const len = leaves.length;
        const mins = [];
        for (let i = 0; i < len; i++) {
            let min = Number.MAX_SAFE_INTEGER;
            if (fibHash[leaves[i]]) {
                min = 1;
            }
            else {
                for (let j = 0; j < i; j++) {
                    if (mins[j] != -1) {
                        const fib = fibHash[leaves[i] - leaves[j]];
                        if (fib && min > mins[j] + 1) {
                            min = mins[j] + 1;
                        }
                    }
                }
            }
            if (min == Number.MAX_SAFE_INTEGER) {
                min = -1;
            }
            mins[i] = min;
        }
        return mins[len - 1] || -1;
    }

    console.log(
        // solution([0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0]) == 3,
        // solution([0, 0, 0]) == -1,
        // solution([]) == 1,
        // solution([1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0]) == 3,
        // solution([1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0]) == 3,
        // solution([ 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0 ]) == 4,

        solution([0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0])

    )
})();
