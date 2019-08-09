(() => {
    /**
     * Advanced solution. Basically we again go from back to front, but this time we guess the max number
     * with binary search, instead of incrementing it 1 by 1
     * 
     * https://app.codility.com/demo/results/trainingC5PYZ7-PPZ/
     * 
     * @param {*} k 
     * @param {*} m 
     * @param {*} arr 
     */
    const solution = (k, m, arr) => {
        const size = arr.length;
        let max = arr[0],
            sum = arr[0];
        for (let i = 1; i < size; i++) {
            max = Math.max(max, arr[i]);
            sum += arr[i];
        }
        let start = max,
            end = sum,
            mid = Math.ceil((start + end) / 2),
            parts = getParts(arr, mid);
        while (start <= end) {
            if (parts > k) {
                start = mid + 1;
            }
            else {
                end = mid - 1;
            }
            mid = Math.ceil((start + end) / 2);
            parts = getParts(arr, mid);
        }
        return mid;
    }
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

    console.log(
        solution(3, 5, [2, 1, 5, 1, 2, 2, 2]) == 6,
        solution(3, 5, [5, 3]) == 5,
        solution(2, 5, [5, 3]) == 5,
        solution(1, 1, [0]) == 0,
        solution(1, 1, [1]) == 1,
        solution(1, 10, [5, 3]) == 8,
        solution(1, 10000, [10000]) == 10000,
        solution(3, 90, [10, 20, 30, 40, 50, 60, 70, 80, 90]) == 170,
    )
})();