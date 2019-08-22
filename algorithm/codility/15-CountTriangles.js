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
        /**
         * Execution for 10k takes on average 260sec
         */
        const arr = [], n = 10 ** 4;
        for (let i = 0; i < n; i++) {
            arr.push(Math.round(Math.random() * n));
        }
        const s = + new Date();
        solution(arr);
        console.log(`time taken: ${Math.round((+ new Date() - s) / 1000)}`);
    })();
})();

(() => {
    /**
     * More advanced solution with O(N^2) time complexity
     * The main difference here, is that we don't count thrid side (c) from the start. 
     * Instead we use precalculated value. Imageine that with a and b we can build 5 triangles max
     * That meand for a+1 and b+1 we can build this 5, plus some more. So we don't have to run this 5 times, cause we already can 
     * use precalcuated value
     * 
     * https://app.codility.com/demo/results/trainingJWS8VG-VT9/
     * 
     * @param {*} arr 
     */
    const solution = (arr) => {
        const size = arr.length;
        arr.sort((a, b) => a - b);
        let count = 0;
        for (let a = 0; a < size; a++) {
            let c = a + 2;
            for (let b = a + 1; b < size; b++) {
                while (c < size && arr[a] + arr[b] > arr[c]) {
                    c++;
                }
                count += c - b - 1;
            }
        }
        return count;
    }

    console.log(
        solution([10, 2, 5, 1, 8, 12]) == 4,
        solution([10, 2, 5, 1, 8, 12, 3]) == 6,
    );

    (() => {
        /**
         * Execution for 10k takes on average 1sec
         */
        const arr = [], n = 10 ** 4;
        for (let i = 0; i < n; i++) {
            arr.push(Math.round(Math.random() * n));
        }
        const s = + new Date();
        solution(arr);
        console.log(`time taken: ${Math.round((+ new Date() - s) / 1000)}`);
    })();
})();