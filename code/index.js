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