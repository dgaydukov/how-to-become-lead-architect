(() => {
    /**
     * Naive solution with O(N**2) complexity, gives 100% correctness, but fails on perfomance
     * https://app.codility.com/demo/results/training4C5H96-PPW/
     * 
     * @param {*} arr 
     */
    const solution = (arr) => {
        const size = arr.length;
        const peaksArr = [];
        for (let i = 1; i < size - 1; i++) {
            if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
                peaksArr.push(i);
            }
        }
        const peaksSize = peaksArr.length;
        let peaks = peaksSize;
        while (peaks > 0) {
            let flags = 1;
            let prev = peaksArr[0];
            for (let i = 1; i < peaksSize; i++) {
                if (peaksArr[i] - prev >= peaks) {
                    flags++;
                    prev = peaksArr[i];
                }
            }
            if (flags >= peaks) {
                return peaks;
            }
            peaks--;
        }
        return 0;
    }

    console.log(
        solution([5]) == 0,
        solution([1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]) == 3,
        solution([1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]) == 2,
        solution([1, 3, 2]) == 1
    );
})();