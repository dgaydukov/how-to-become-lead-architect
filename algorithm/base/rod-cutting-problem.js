(() => {
    /**
     * Simple dynamic programming solution. Time complexity is O(n**2).
     * Well actually the complexity is n*(n-1)/2. Cause for every n we should make n-1 checks
     * The idea is simple. We cut the road to 
     * n + 0
     * 1 + n-1
     * 2 + n-2
     * 3 + n-3
     * ..
     * n-1 + 1
     * And calculate the max value at each step. Moreover for left item we take value from the array, but 
     * for right we take max value from precumputed array
     * 
     * @param {*} arr 
     * @param {*} weight 
     */
    const dpCount = (arr, weight) => {
        const F = [0];
        for (let i = 1; i <= weight; i++) {
            let max = 0;
            for (let j = 1; j <= i; j++) {
                const v = arr[j - 1].v + F[i - j];
                if (max < v) {
                    max = v;
                }
            }
            F[i] = max;
        }
        return F[weight];
    }


    /**
     * Solution to count max profit using greedy algorithms. 
     * The idea is very simple, we just sort array by maxPrinePerOneItem, after this we cut the road to the first piece (the most valuable)
     * until we can't cut no more, then we go to another piece
     * 
     * Unfortunately this solution will not always work. Take a look at the following example
     * greedyCount([{ w: 1, v: 1 }, { w: 2, v: 5 }, { w: 3, v: 7 }, { w: 4, v: 4 },  { w: 5, v: 8 }], 5)
     * The right answer should be 12, and cuts to 2/5 and 3/7, so totally 12.
     * But our greedy approach will return 11, Cause it will take 2 on 2 (total 10) plus 1 of 1 and return 11
     * On average sometimes this approach return 1 less than original DP solution
     * 
     * @param {*} arr 
     * @param {*} weight 
     */
    const greedyCount = (arr, weight) => {
        const sorted = [...arr];
        sorted.sort((a, b) => b.v / b.w - a.v / a.w);
        let maxPrice = 0, index = 0;;
        while (weight > 0) {
            const item = sorted[index];
            if (weight >= item.w) {
                weight -= item.w;
                maxPrice += item.v;
            }
            else {
                index++;
            }
        }
        return maxPrice;
    }


    console.log(
        dpCount([{ w: 1, v: 1 }, { w: 2, v: 5 }, { w: 3, v: 8 }, { w: 4, v: 9 }, { w: 5, v: 10 }, { w: 6, v: 17 }, { w: 7, v: 17 }, { w: 8, v: 20 }], 8) == 22,
        dpCount([{ w: 1, v: 3 }, { w: 2, v: 5 }, { w: 3, v: 8 }, { w: 4, v: 9 }, { w: 5, v: 10 }, { w: 6, v: 17 }, { w: 7, v: 17 }, { w: 8, v: 20 }], 8) == 24,

        greedyCount([{ w: 1, v: 1 }, { w: 2, v: 5 }, { w: 3, v: 8 }, { w: 4, v: 9 }, { w: 5, v: 10 }, { w: 6, v: 17 }, { w: 7, v: 17 }, { w: 8, v: 20 }], 8) == 22,
        greedyCount([{ w: 1, v: 3 }, { w: 2, v: 5 }, { w: 3, v: 8 }, { w: 4, v: 9 }, { w: 5, v: 10 }, { w: 6, v: 17 }, { w: 7, v: 17 }, { w: 8, v: 20 }], 8) == 24,
    )


    /**
     * To check how many time the diff would happen and what the max value of diff
     */
    let diffCount = 0;
    let maxDiff = 0;
    for (let i = 0; i < 10 ** 6; i++) {
        const n = 6, arr = [];
        for (let j = 0; j < n; j++) {
            arr.push({ w: j + 1, v: Math.round(Math.random() * (j + n)) || 1 });
        }
        const r1 = dpCount(arr, n);
        const r2 = greedyCount(arr, n);
        if (r1 != r2) {
            if (maxDiff < Math.abs(r1 - r2)) {
                maxDiff = Math.abs(r1 - r2);
            }
            diffCount++;
        }
    }
    console.log(`diffCount: ${diffCount}, maxDiff: ${maxDiff}`)
})();