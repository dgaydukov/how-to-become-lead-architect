(() => {
    /**
     * Simple solution with O(N) time complexity using greedy algo
     * 
     * https://app.codility.com/demo/results/trainingDYA7KF-GKT/
     * 
     * @param {*} arr1 
     * @param {*} arr2 
     */
    const solution = (arr1, arr2) => {
        const size = arr1.length;
        let count = 0,
            start = -1;
        for (let i = 0; i < size; i++) {
            if (start < arr1[i]) {
                count++;
                start = arr2[i];
            }
        }
        return count;
    }

    console.log(
        solution([1, 3, 7, 9, 9], [5, 6, 8, 9, 10]) == 3,
        solution([0], [0]) == 1,
        solution([], []) == 0,
    );
})();