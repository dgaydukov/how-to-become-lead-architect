(() => {
    /**
     * Naive solution with O(n**2) complexity
     * The point is that we use loop inside loop and check for hash, and if we got new values we increment counter
     * 
     * https://app.codility.com/demo/results/trainingEGVRM4-9SK/
     * 
     */
    const solution = (m, arr) => {
        const size = arr.length,
            max = 10 ** 9;
        let count = 0;
        for (let i = 0; i < size; i++) {
            const hash = {};
            for (let j = i; j < size; j++) {
                if (hash[arr[j]] === undefined) {
                    hash[arr[j]] = 1;
                    count++;
                }
                else {
                    break;
                }
            }
            if (count >= max) {
                return max;
            }
        }
        return count;
    }

    console.log(
        solution(6, [3, 4, 5, 5, 2]) == 9,
        solution(6, [3, 4, 5, 4, 2]) == 11,
        solution(6, [3, 4, 5, 6, 4, 2]) == 17,
        solution(6, [4, 1, 1, 5, 1]) == 8,
        solution(6, [1, 2, 3, 4, 5, 3]) == 18,
    )
})();

(() => {
    /**
     * More advanced solution. We can notice that the number of intervals in case of unique sequence is the total sum
     * so if we have 1,2,3,4,5 - all unique numbers, the number of slices is n*(n+1)/2
     * So we keep track of unique interval, and when it breaks we rebuild it
     * 
     * https://app.codility.com/demo/results/trainingGN8PKD-KZ8/
     * 
     * @param {*} m 
     * @param {*} arr 
     */
    const solution = (m, arr) => {
        const size = arr.length,
            max = 10 ** 9;
        let hash = {},
            count = 0,
            n = 0;
        for (let i = 0; i < size; i++) {
            if (hash[arr[i]] === undefined) {
                hash[arr[i]] = i;
                n++;
            }
            else {
                count += n * (n + 1) / 2;
                const index = hash[arr[i]];
                n = i - index;
                const diff = n - 1;
                count -= diff * (diff + 1) / 2;
                hash = {}
                for (let j = index + 1; j <= i; j++) {
                    hash[arr[j]] = j
                }
            }
        }
        count += n * (n + 1) / 2;
        if (count >= max) {
            return max;
        }
        return count;
    }

    console.log(
        solution(6, [3, 4, 5, 5, 2]) == 9,
        solution(6, [3, 4, 5, 4, 2]) == 11,
        solution(6, [3, 4, 5, 6, 4, 2]) == 17,
        solution(6, [4, 1, 1, 5, 1]) == 8,
        solution(6, [1, 2, 3, 4, 5, 3]) == 18,
    )
})();


(() => {
    /**
     * Improvement from the previous approach, basically we don't recreate hash every time,
     * but check fo lastIndex (index when last break of unique sequence happened)
     * 
     * https://app.codility.com/demo/results/trainingSNACCX-UDA/
     * 
     * @param {*} m 
     * @param {*} arr 
     */
    const solution = (m, arr) => {
        const size = arr.length,
            max = 10 ** 9;
        let hash = {},
            count = 0,
            n = 0,
            lastIndex = 0;
        for (let i = 0; i < size; i++) {
            if (hash[arr[i]] === undefined || hash[arr[i]] < lastIndex) {
                hash[arr[i]] = i;
                n++;
            }
            else {
                count += n * (n + 1) / 2;
                lastIndex = hash[arr[i]];
                n = i - lastIndex;
                const diff = n - 1;
                count -= diff * (diff + 1) / 2;
                hash[arr[i]] = i;
            }
        }
        count += n * (n + 1) / 2;
        if (count >= max) {
            return max;
        }
        return count;
    }

    console.log(
        solution(6, [3, 4, 5, 5, 2]) == 9,
        solution(6, [3, 4, 5, 4, 2]) == 11,
        solution(6, [3, 4, 5, 6, 4, 2]) == 17,
        solution(6, [4, 1, 1, 5, 1]) == 8,
        solution(6, [1, 2, 3, 4, 5, 3]) == 18,
        solution(6, [1, 2, 3, 4, 5, 3, 2, 1]) == 27,
    )
})();

(() => {
    /**
     * Nice solution using caterpilar method
     * 
     * https://app.codility.com/demo/results/training6M3JWW-GB3/
     * 
     * @param {*} m 
     * @param {*} arr 
     */
    const solution = (m, arr) => {
        const size = arr.length,
            max = 10 ** 9,
            visited = [];
        let count = 0,
            left = 0,
            right = 0;
        for (let i = 0; i <= m; i++) {
            visited[i] = false;
        }
        while (left < size && right < size) {
            if (visited[arr[right]] === false) {
                visited[arr[right]] = true;
                count += right - left + 1;
                right++;
            }
            else {
                visited[arr[left]] = false;
                left++;
            }
        }
        if (count >= max) {
            return max;
        }
        return count;
    }

    console.log(
        solution(6, [3, 4, 5, 5, 2]) == 9,
        solution(6, [3, 4, 5, 4, 2]) == 11,
        solution(6, [3, 4, 5, 6, 4, 2]) == 17,
        solution(6, [4, 1, 1, 5, 1]) == 8,
        solution(6, [1, 2, 3, 4, 5, 3]) == 18,
        solution(6, [1, 2, 3, 4, 5, 3, 2, 1]) == 27,
    )
})();