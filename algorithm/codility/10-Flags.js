(() => {
    /**
     * Max possible flags would be squary root from peak difference (from first to last)
     * 
     * https://app.codility.com/demo/results/trainingJVFZWD-62B/
     * 
     * @param {*} arr 
     */
    const solution = (arr) => {
        const size = arr.length;
        const peaks = [];
        for (let i = 1; i < size - 1; i++) {
            if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
                peaks.push(i);
            }
        }
        const peaksSize = peaks.length;
        let maxFlagNumber = Math.floor(Math.sqrt(peaks[peaksSize - 1] - peaks[0])) + 1 || 0;
        for (let i = maxFlagNumber; i > 0; i--) {
            let flags = 1;
            let prev = peaks[0];
            for (let j = 1; j < peaksSize; j++) {
                if (peaks[j] - prev >= i) {
                    flags++;
                    prev = peaks[j];
                }
            }
            if (flags >= i) {
                return i;
            }
        }
        return 0;
    }

    console.log(
        solution([5]) == 0,
        solution([1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]) == 3,
        solution([1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]) == 2,
        solution([1, 3, 2]) == 1,
        solution([1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2, 2, 2, 6, 3]) == 4,
        solution([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1]) == 4,
    );
})();