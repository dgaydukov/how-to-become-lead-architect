(() => {
    /**
     * Naive solution with O(n**2) complexity
     * The point is that we use loop inside loop and check for hash, and if we got new values we increment counter
     * 
     * https://app.codility.com/demo/results/trainingEGVRM4-9SK/
     * 
     */
    solution = (m, arr) => {
        const size = arr.length,
            max = 10 ** 9;
        let count = 0;
        for (let i = 0; i < size; i++) {
            const hash = {};
            for (let j = i; j < size; j++) {
                if (hash[arr[j]] === undefined) {
                    hash[arr[j]] = 1;
                    count++;
                }
                else {
                    break;
                }
            }
            if (count >= max) {
                return max;
            }
        }
        return count;
    }

    console.log(
        solution(6, [3, 4, 5, 5, 2]) == 9,
    )
})();