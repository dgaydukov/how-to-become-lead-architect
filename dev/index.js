


















(() => {

    const getPeaksCount = arr => {
        let count = 0;
        let len = arr.length;
        for (let i = 1; i < len - 1; i++) {
            if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
                count++;
            }
        }
        return count;
    }

    const isPeak = arr => {
        const len = arr.length;
        for (let i = 1; i < len - 1; i++) {
            if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
                return true;
            }
        }
        return false;
    }

    const isAllPeaks = (arr, peaks) => {
        const len = arr.length;
        if (len % peaks == 0) {
            const subArrLen = len / peaks;
            for (let i = 0; i < peaks; i++) {
                const start = i * subArrLen;
                const end = (i + 1) * subArrLen;
                const subArr = [];
                if (arr[start - 1]) {
                    subArr.push(arr[start - 1]);
                }
                subArr.push(...arr.slice(start, end));
                if (arr[end]) {
                    subArr.push(arr[end]);
                }
                if (!isPeak(subArr)) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }

    const solution = arr => {
        let peaks = getPeaksCount(arr);
        while (peaks > 0) {
            if (isAllPeaks(arr, peaks)) {
                return peaks;
            }
            peaks--;
        }
        return 0;
    }

    const arr = [1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2];
    console.log(solution(arr));

})();












// imitate server
while (true) { }