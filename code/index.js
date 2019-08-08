(() => {
    const solution = (k, max, arr) => {
        const size = arr.length;
        let _k = k+1, subSum = 0;
        max = Number.MIN_SAFE_INTEGER;
        for(let i = 0; i < size; i++){
            max = Math.max(max, arr[i]);
        }
        while (_k > k) {
            _k = 1;
            for (let i = 0; i < size; i++) {
                subSum += arr[i];
                if (subSum > max) {
                    _k++;
                    subSum = 0;
                    i--;
                }
            }
            console.log(_k, k , max)
            max++;
        }
        return max-1;
    }

    console.log(
        // solution(3, 5, [5, 3]) == 5,
        // solution(3, 5, [2, 1, 5, 1, 2, 2, 2]) == 6,
        // solution(1, 1, [0]) == 0,
        // solution(1, 10, [5, 3]) == 8,

        solution(1, 10, [5, 3])
    )
});