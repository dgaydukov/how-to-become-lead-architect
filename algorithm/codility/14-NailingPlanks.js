(() => {
    /**
     * Naive approach with time complexity O(n*m)
     * Basically for every nail we check, can we found interval. If yes, we mark this interval as visited
     * And continue until we mark all intervals or finish our nails
     * 
     * https://app.codility.com/demo/results/training28K7BE-37V/
     * 
     * @param {*} A 
     * @param {*} B 
     * @param {*} C 
     */
    const solution = (A, B, C) => {
        const pSize = A.length,
            nSize = C.length,
            arr = [];
        let nails = 0,
            planks = 0;
        for (let i = 0; i < pSize; i++) {
            arr.push({ start: A[i], end: B[i], visited: false })
        }
        const len = arr.length;
        for (let i = 0; i < nSize; i++) {
            nails++;
            const nail = C[i];
            for (let j = 0; j < len; j++) {
                if (nail >= arr[j].start && nail <= arr[j].end && !arr[j].visited) {
                    arr[j].visited = true;
                    planks++;
                }
            }
            if (planks == pSize) {
                return nails;
            }
        }
        return -1;
    }

    console.log(
        solution([1, 4, 5, 8], [4, 5, 9, 10], [4, 6, 7, 10, 2]) == 4,
        solution([2], [2], [1]) == -1,
        solution([3, 3], [4, 4], [3, 4]) == 1,
        solution([1, 4, 5, 8], [4, 5, 9, 10], [10, 4, 6, 7, 2]) == 3,
    )
})();



(() => {
    /**
     * We can approve the situation a little bit, to O(n*m/2)
     * The point is that whenever we have found interval we remove it from array, so next iteration we don't check it anymore
     * 
     * https://app.codility.com/demo/results/trainingP6Z5SD-H2R/
     * 
     * @param {*} A 
     * @param {*} B 
     * @param {*} C 
     */
    const solution = (A, B, C) => {
        const pSize = A.length,
            nSize = C.length,
            arr = [];
        let nails = 0;
        for (let i = 0; i < pSize; i++) {
            arr.push([A[i], B[i]]);
        }
        for (let i = 0; i < nSize; i++) {
            nails++;
            const nail = C[i];
            for (let j = arr.length - 1; j >= 0; j--) {
                if (nail >= arr[j][0] && nail <= arr[j][1]) {
                    arr.splice(j, 1);
                }
            }
            if (arr.length == 0) {
                return nails;
            }
        }
        return -1;
    }

    console.log(
        solution([1, 4, 5, 8], [4, 5, 9, 10], [4, 6, 7, 10, 2]) == 4,
        solution([2], [2], [1]) == -1,
        solution([3, 3], [4, 4], [3, 4]) == 1,
        solution([1, 4, 5, 8], [4, 5, 9, 10], [10, 4, 6, 7, 2]) == 3,
    )
})();


(() => {
    /**
     * The best approach with O(M*Log(N)) time complexity
     * 
     * We use prefix sum algorithm to check can we nail all planks with some numbers of nails
     * And we use binary search to choose the right minimum number of nails
     * 
     * https://app.codility.com/demo/results/trainingGKK7JS-CXG/
     * 
     * @param {*} A 
     * @param {*} B 
     * @param {*} C 
     */
    const solution = (A, B, C) => {
        let start = 1,
            end = C.length,
            result = -1;
        while (start <= end) {
            const mid = Math.floor((start + end) / 2);
            if (nailed(A, B, C, mid)) {
                result = mid;
                end = mid - 1;
            }
            else {
                start = mid + 1;
            }
        }
        return result;
    }

    const nailed = (A, B, C, nails) => {
        const pSize = A.length,
            // cause the max value is 2 of length
            max = C.length * 2 + 1,
            arr = [];
        for (let i = 0; i < max; i++) {
            arr[i] = 0;
        }
        for (let i = 0; i < nails; i++) {
            arr[C[i]] = 1;
        }
        for (let i = 1; i < max; i++) {
            arr[i] += arr[i - 1];
        }
        for (let i = 0; i < pSize; i++) {
            if (arr[B[i]] - arr[A[i] - 1] < 1) {
                return false;
            }
        }
        return true;
    }

    console.log(
        solution([1, 4, 5, 8], [4, 5, 9, 10], [4, 6, 7, 10, 2]) == 4,
        solution([2], [2], [1]) == -1,
        solution([3, 3], [4, 4], [3, 4]) == 1,
        solution([1, 4, 5, 8], [4, 5, 9, 10], [10, 4, 6, 7, 2]) == 3,
    )
})();