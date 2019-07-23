(() => {
    const solution = (arr) => {
        const size = arr.length,
            base = [...arr];
        let max = 0, min = arr[1];
        arr[1] = 0;
        for (let i = 2; i < size - 1; i++) {
            if (min > arr[i]) {
                console.log(arr[i - 1])
                arr[i - 1] += min;
                console.log(arr[i - 1])
                min = arr[i];
                arr[i] = 0;
            }
            if (arr[i - 1] > 0) {
                let prev = arr[i - 1];
                if (base[i - 1] > prev) {
                    prev = base[i - 1]
                }
                arr[i] += prev;
            }
            else {
                console.log("break")
                min = 0
            }
            if (max < arr[i]) {
                max = arr[i];
            }
            console.log(i, arr[i], arr[i - 1], min, max)
        }
        return max;
    }


    console.log(
        // solution([3, 2, 6, -1, 4, 5, -1, 2]) == 17,
        // solution([5, 5, 5]) == 0,
        // solution([5, 17, 0, 3]) == 17,
        // solution([0, 10, -5, -2, 0]) == 10,
        // solution([6, 1, 5, 6, 4, 2, 9, 4]) == 26,
        // solution([-8, 10, 20, -5, -7, -4]) == 30,
        // solution([-2, -3, -4, 1, -5, -6, -7]) == 1,
        // solution([0, 6, -1, -10, 6, -30, -20, 9, -10, 0]) == 11,

        solution([3, 2, 6, -1, 4, 5, -1, 2]),
    );


    

})();




(() => {
    /**
     * Basica idea is that we have 2 Kadane array and get max sum from left and right, and then
     * just add them to find max
     * 
     * @param {*} arr 
     */
    const solution = (arr) => {
        const size = arr.length,
            maxLeft = arr.map(i => 0),
            maxRight = arr.map(i => 0);
        for (let i = 1; i < size - 2; i++) {
            if (maxLeft[i - 1] + arr[i] > 0) {
                maxLeft[i] = maxLeft[i - 1] + arr[i];
            }
        }
        for (let i = size - 2; i > 1; i--) {
            if (maxRight[i + 1] + arr[i] > 0) {
                maxRight[i] = maxRight[i + 1] + arr[i];
            }
        }
        let max = maxLeft[0] + maxRight[2];
        for (let i = 2; i < size - 1; i++) {
            if (max < maxLeft[i - 1] + maxRight[i + 1]) {
                max = maxLeft[i - 1] + maxRight[i + 1];
            }
        }
        return max
    }


    console.log(
        solution([3, 2, 6, -1, 4, 5, -1, 2]) == 17,
        solution([5, 5, 5]) == 0,
        solution([5, 17, 0, 3]) == 17,
        solution([0, 10, -5, -2, 0]) == 10,
        solution([6, 1, 5, 6, 4, 2, 9, 4]) == 26,
        solution([-8, 10, 20, -5, -7, -4]) == 30,
        solution([-2, -3, -4, 1, -5, -6, -7]) == 1,
    );
})();






























// imitate server
while (true) { }