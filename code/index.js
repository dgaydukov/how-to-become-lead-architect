(() => {
    const getParts = (arr, max) => {
        const size = arr.length;
        let parts = 1,
            subSum = 0;;
        for (let i = 0; i < size; i++) {
            subSum += arr[i];
            if (subSum > max) {
                parts++;
                subSum = arr[i];
            }
        }
        return parts;
    }
    const solution = (k, m, arr) => {
        const size = arr.length;
        let max = arr[0];
        for (let i = 1; i < size; i++) {
            max = Math.max(max, arr[i]);
        }
        let parts = getParts(arr, max);
        if (parts > k) {
            while (parts != k) {
                max++;
                parts = getParts(arr, max);
            }
        }
        return max;
    }

    console.log(
        // solution(3, 5, [2, 1, 5, 1, 2, 2, 2]) == 6,
        // solution(3, 5, [5, 3]) == 5,
        // solution(1, 1, [0]) == 0,
        // solution(1, 10, [5, 3]) == 8,
        // solution(1, 10000, [10000]) == 10000,

        solution(3, 100, [10, 20, 30, 40, 50, 60, 70, 80, 90, 100])
    )
})();