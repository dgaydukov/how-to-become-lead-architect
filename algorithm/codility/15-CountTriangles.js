(() => {
    /**
     * Simple solution with O(n**2) time complexity
     * 
     * https://app.codility.com/demo/results/trainingNPDB6C-SXC/
     * 
     * @param {*} arr 
     */
    const solution = (arr) => {
        const size = arr.length;
        arr.sort((a, b) => a - b);
        let count = 0;
        for (let i = 0; i < size - 2; i++) {
            const a = arr[i];
            let start = i + 1, end = start + 1;
            while (start < size) {
                const b = arr[start], c = arr[end];
                if (a + b > c) {
                    count++;
                }
                else {
                    start++;
                    end = start;
                }
                end++;
            }
        }
        return count;
    }

    console.log(
        //solution([10, 2, 5, 1, 8, 12]) == 4,

        solution([10, 2, 5, 1, 8, 12])
    )
})();