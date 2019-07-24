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
        let flags = peaksSize;
        let prev = peaksArr[0];
        let prevIndex = 0;
        let skip = 0;
        for (let i = 1; i < peaksSize; i++) {
            //console.log(i, peaksArr[i],prev,  flags)
            if (peaksArr[i] - prev >= flags) {
                prev = peaksArr[i];
            }
            else if (skip > 0) {
                skip--;
            }
            else {
                flags--;
                skip = peaksSize - flags;
                if (prevIndex > 0) {
                    let _i = i;
                    i = prevIndex;
                    prevIndex = _i;
                }
            }
        }
        return flags;
    }

    console.log(
        // solution([5]) == 0,
        // solution([1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]) == 3,
        // solution([1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]) == 2,
        // solution([1, 3, 2]) == 1,
        // solution([1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2, 2,2, 6, 3]) == 4,

        solution([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1])
    );
})();






















































// imitate server
while (true) { }