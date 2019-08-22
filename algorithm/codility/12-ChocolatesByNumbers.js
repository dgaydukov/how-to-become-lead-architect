'use strict';

(() => {
    /**
     * Simple solution with time complexity O(N+M)
     * 
     * https://app.codility.com/demo/results/trainingA8QB5X-79S/
     *
     * @param n
     * @param m
     * @returns {*}
     */
    const solution = (n, m) => {
        let hash = {},
            k = 0;
        for (let i = 0; i < n + m; i++) {
            //console.log(k, hash)
            if (hash[k] == undefined) {
                hash[k] = 1;
                k = k + m;
                while (k >= n) {
                    k = k - n;
                }
            }
            else {
                return Object.keys(hash).length;
            }
        }
        return 1;
    }

    console.log(
        solution(10, 4),
        solution(415633212, 234332)
    )
})();

(() => {
    /**
     * More advanced solution
     * N and M have common intersection on every gcd
     * For exampls gcd(10, 4) = 2
     * So 10 & 4 have 5 intersection on 2, 4, 6, 8, 10
     * 
     * https://app.codility.com/demo/results/trainingQDBESN-E4D/
     *
     * @param n
     * @param m
     * @returns {number}
     */
    const solution = (n, m) => {
        const gcd = (n, m) => {
            if (n % m === 0) {
                return m;
            }
            return gcd(m, n % m);
        }
        return n / gcd(n, m);
    }


    console.log(
        solution(10, 4),
        solution(415633212, 234332)
    )
})();