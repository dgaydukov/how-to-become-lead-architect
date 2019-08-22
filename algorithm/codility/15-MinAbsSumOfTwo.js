(() => {
    /**
     * Naive solution with O(n^2) time complexity
     * 
     * https://app.codility.com/demo/results/trainingU9K2AJ-4JK/
     * 
     * @param {*} arr 
     */
    const solution = (arr) => {
        const size = arr.length;
        let min = Number.MAX_SAFE_INTEGER;
        for (let i = 0; i < size; i++) {
            for (let j = i; j < size; j++) {
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
        solution([5, 2, 3, 4, 1]) == 2,
        solution([-8, -3, -2, 1, 1]) == 1,
    );
})();

(() => {
    /**
     * Advanced solution with O(N*Log(N)) time complexity using caterpillar method
     * 
     * https://app.codility.com/demo/results/trainingJ3Z3BT-VK3/
     * 
     * @param {*} arr 
     */
    const solution = (arr) => {
        const size = arr.length;
        arr.sort((a, b) => a - b);
        let min = Number.MAX_SAFE_INTEGER,
            start = 0,
            end = size - 1;
        while (start <= end) {
            min = Math.min(min, Math.abs(arr[start] + arr[end]));
            if (Math.abs(arr[start]) > Math.abs(arr[end])) {
                start++;
            }
            else {
                end--;
            }
        }
        return min;
    }

    console.log(
        solution([-8, 4, 5, -10, 3]) == 3,
        solution([1, 4, -3]) == 1,
        solution([5, 2, 3, 4, 1]) == 2,
        solution([-8, -3, -2, 1, 1]) == 1,
    );
})();