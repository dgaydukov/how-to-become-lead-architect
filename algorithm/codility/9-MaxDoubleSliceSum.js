(() => {
    const solution = (arr) => {
        const size = arr.length;
        const original = [...arr];
        let max = arr[1],
            _start = 1,
            start = 1,
            end = 1;
        for (let i = 2; i < size - 1; i++) {
            if (arr[i - 1] > 0) {
                arr[i] += arr[i - 1];
            }
            else {
                _start = i;
            }
            if (max <= arr[i]) {
                max = arr[i];
                end = i;
                start = _start;
            }
        }
        let min = original[start];
        for (let i = start; i <= end; i++) {
            if (min > original[i]) {
                min = original[i];
            }
        }
        if (min > 0 && (start > 1 || end < size - 2)) {
            min = 0;
        }
        console.log(original, { start, end, size, max, min })
        return max - min;
    }


    console.log(
        // solution([3, 2, 6, -1, 4, 5, -1, 2]) == 17,
        // solution([5, 5, 5]) == 0,
        // solution([5, 17, 0, 3]) == 17,
        // solution([0, 10, -5, -2, 0]) == 10,
        // solution([6, 1, 5, 6, 4, 2, 9, 4]) == 26,
        // solution([-8, 10, 20, -5, -7, -4]) == 30,
        // solution([-2, -3, -4, 1, -5, -6, -7]) == 1,
        solution([0, 18, 20, 0])
    );
})();