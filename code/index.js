(() => {
    /**
     * Naive solution with O(n**3) time complexity
     * 
     * https://app.codility.com/demo/results/trainingZ73SMS-CZX/
     * 
     * @param {*} arr 
     */
    const solution = (arr) => {
        const size = arr.length;
        arr.sort((a, b) => a - b);
        let count = 0;
        for (let a = 0; a < size; a++) {
            for (let b = a + 1; b < size; b++) {
                let c = b + 1;
                while (c < size && arr[a] + arr[b] > arr[c]) {
                    count++;
                    c++;
                }
            }
        }
        return count;
    }

    console.log(
        solution([10, 2, 5, 1, 8, 12]) == 4,
        solution([10, 2, 5, 1, 8, 12, 3]) == 6,
    );

    (() => {
        const arr = [], n = 10 ** 4;
        for (let i = 0; i < n; i++) {
            arr.push(Math.round(Math.random() * n));
        }
        const s = + new Date();
        solution(arr);
        console.log(`time taken: ${Math.round((+ new Date() - s) / 1000)}`);
    })();
})();