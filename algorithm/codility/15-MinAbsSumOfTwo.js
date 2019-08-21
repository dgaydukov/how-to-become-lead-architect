(() => {
    /**
     * Naive solution with O(n^2) time complexity
     * 
     * https://app.codility.com/demo/results/training9T63BT-366/
     * 
     * @param {*} arr 
     */
    const solution = (arr) => {
        const size = arr.length;;
        let min = Number.MAX_SAFE_INTEGER;
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                const abs = Math.abs(arr[i] + arr[j]);
                if (min > abs) {
                    min = abs;
                }
            }
        }
        return min;
    }

    console.log(
        solution([-8, 4, 5, -10, 3]) == 3,
        solution([1, 4, -3]) == 1,
    );
})();