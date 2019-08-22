(() => {
    /**
     * Solution with O(N) time complexity using greedy algo
     * 
     * https://app.codility.com/demo/results/trainingQ73HSR-8MV/
     * 
     * @param {*} n 
     * @param {*} arr 
     */
    const solution = (n, arr) => {
        const size = arr.length;
        let count = 0,
            len = 0;
        for (let i = 0; i < size; i++) {
            len += arr[i];
            if (len >= n) {
                count++;
                len = 0;
            }
        }
        return count;
    }

    console.log(
        solution(4, [1, 2, 3, 4, 1, 1, 3]) == 3,
    );
})();