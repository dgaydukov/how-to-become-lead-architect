(() => {
    /**
     * First we calculate number of peaks. Then we get number of intervals. It's all divisors of total number in array to number of peaks to 1
     * Let's say we have 16 elements and 4 peaks, so we have 3 intervals - 4, 2, 1
     * 
     * @param {*} arr 
     */
    const solution = arr => {
        const size = arr.length;
        const peakArr = [];
        for (let i = 1; i < size - 1; i++) {
            if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
                peakArr.push(i);
            }
        }
        const peaks = peakArr.length;
        let intervals = peaks;
        while (intervals > 0) {
            if (size % intervals == 0) {
                const intervalSize = size / intervals;
                let peakIndex = 0;
                let peaksPassed = 0;
                let check = true;
                for (let i = 0; i < intervals; i++) {
                    let peaksPerInterval = 0;
                    while (peakArr[peakIndex] < (i + 1) * intervalSize) {
                        peaksPerInterval++;
                        peakIndex++;
                    }
                    peaksPassed += peaksPerInterval;
                    // if we didn't meet any peak in the interval or we reach all peaks, but interval is not the last
                    if (peaksPerInterval == 0 || (peaksPassed == peaks && i < intervals - 1)) {
                        check = false;
                        break;
                    }
                }
                if (check) {
                    return intervals;
                }
            }
            intervals--;
        }
        return 0;
    }

    console.log(
        solution([1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]) == 3,
        solution([1, 4, 3, 4, 3, 4, 1, 2, 3, 4, 9, 2, 1, 1, 1, 1]) == 2,
    );
})();












// imitate server
while (true) { }