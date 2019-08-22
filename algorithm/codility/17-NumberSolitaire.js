(() => {
    /**
     * Simple solution with O(N) time complexity
     * Basically for every position we try to find max value we can achive
     * 
     * https://app.codility.com/demo/results/training99YBYE-HRH/
     * 
     * @param {*} arr 
     */
    const solution = (arr) => {
        const size = arr.length,
            list = arr.map(k => Number.MIN_SAFE_INTEGER),
            dice = 6;
        list[0] = arr[0];
        for (let i = 0; i < size; i++) {
            for (let j = i + 1; j <= i + dice && j < size; j++) {
                list[j] = Math.max(list[j], list[i] + arr[j]);
            }
            console.log(list)
        }
        return list[size - 1];
    }

    console.log(
        solution([1, -2, 0, 9, -1, -2]) == 8,
        solution([-2, 5, 1]) == 4,
    );
})();