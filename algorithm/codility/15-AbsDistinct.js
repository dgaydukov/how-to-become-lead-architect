(() => {
    /**
     * Simple solution with O(N) time complexity
     * 
     * https://app.codility.com/demo/results/training6N48AQ-C68/
     * 
     * @param {*} arr 
     */
    const solution = (arr) => {
        const size = arr.length,
            hash = {};
        let count = 0;
        for (let i = 0; i < size; i++) {
            let v = arr[i] > 0 ? arr[i] : -arr[i];
            if (hash[v] === undefined) {
                hash[v] = 1;
                count++;
            }
        }
        return count;
    }

    console.log(
        solution([-5, -3, -1, 0, 3, 6]) == 5,
    );
})();