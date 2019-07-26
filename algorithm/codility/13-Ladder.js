'use strict';

(() => {
    /**
     * https://app.codility.com/demo/results/training39JTRP-QA8/
     */
    const memoFib = () => {
        const max = 2 ** 30
        const memo = [1, 1]
        return n => {
            const len = memo.length
            if (len > n) {
                return memo[n]
            }
            for (let i = len; i < n + 1; i++) {
                memo[i] = (memo[i - 1] + memo[i - 2]) % max
            }
            return memo[n]
        }
    }

    const fib = memoFib()

    const solution = (A, B) => {
        const len = A.length
        const res = []
        for (let i = 0; i < len; i++) {
            res.push(fib(A[i]) % 2 ** B[i])
        }
        return res
    }



    const A = [4, 4, 5, 5, 1]
    const B = [3, 2, 4, 3, 1]
    console.log(
        solution(A, B)
    )
});