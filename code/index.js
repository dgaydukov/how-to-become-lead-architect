(() => {
    /**
     * Knapsack DP solution.
     * Create 2D array of size+1 (as i/row) and weight+1 (as j/column), init all with 0.
     * First row and column will stay at 0. For no item, for every weight from 0 to weight the max value would be 0
     * The save true to first column. For every item for 0 weight the max value would be 0
     * 
     * @param {*} arr 
     * @param {*} weight 
     */
    const solution = (arr, weight) => {
        const size = arr.length;
        const res = [];
        for (let i = 0; i <= size; i++) {
            res[i] = [];
            for (let j = 0; j <= weight; j++) {
                res[i][j] = 0;
            }
        }
        for (let i = 1; i <= size; i++) {
            const w = arr[i - 1].w,
                v = arr[i - 1].v;
            for (let j = 1; j <= weight; j++) {
                res[i][j] = w > j ? res[i - 1][j] : Math.max(res[i - 1][j], res[i - 1][j - w] + v);
            }
        }
        return res[size][weight];
    }

    console.log(
        // solution([{ w: 3, v: 10 }, { w: 1, v: 3 }, { w: 2, v: 9 }, { w: 2, v: 5 }, { w: 1, v: 6 }], 6) == 25,
        // solution([{ w: 3, v: 10 }, { w: 1, v: 3 }, { w: 3, v: 9 }, { w: 2, v: 5 }, { w: 1, v: 6 }], 6) == 19,
        // solution([
        //     { w: 70, v: 135 },
        //     { w: 73, v: 139 },
        //     { w: 77, v: 149 },
        //     { w: 80, v: 150 },
        //     { w: 82, v: 156 },
        //     { w: 87, v: 163 },
        //     { w: 90, v: 173 },
        //     { w: 94, v: 184 },
        //     { w: 98, v: 192 },
        //     { w: 106, v: 201 },
        //     { w: 110, v: 210 },
        //     { w: 113, v: 214 },
        //     { w: 115, v: 221 },
        //     { w: 118, v: 229 },
        //     { w: 120, v: 240 },
        // ], 750) == 1458,

        solution([{ w: 3, v: 10 }, { w: 1, v: 3 }, { w: 3, v: 9 }, { w: 2, v: 5 }, { w: 1, v: 6 }], 6)
    );
})();











(() => {
    /**
     * Naive approach to brute force all possible values
     * Method is very simple, we go from the end and check can we get to the end in one step
     * 
     * https://app.codility.com/demo/results/trainingRYKXCC-TBH/
     * 
     * @param {*} arr 
     */
    const solution = (arr) => {
        const size = arr.length,
            leaves = [],
            leafPos = {},
            badPos = {},
            fibHash = { 1: 1 },
            F = [1, 1];
        for (let i = 2; i < size + 2; i++) {
            F[i] = F[i - 1] + F[i - 2];
            fibHash[F[i]] = 1;
            if (F[i] > size) {
                break;
            }
        }
        if (fibHash[size + 1]) {
            return 1;
        }
        for (let i = 0; i < size; i++) {
            if (arr[i] == 1) {
                leaves.push(i + 1);
            }
        }
        leaves.push(size + 1);
        for (let i = 0; i < leaves.length; i++) {
            leafPos[leaves[i]] = i;
        }
        console.log(leaves)
        let sum = 0,
            index = leaves.length - 1,
            minPath = -1,
            stack = [],
            lastCheckedIndex = index;
        while (true) {
            if (index < 0) {
                return minPath;
            }
            const nextLeaf = leaves[index] - sum;
            const pos = leafPos[stack[stack.length - 1]];
            if (lastCheckedIndex > index) {
                lastCheckedIndex = index;
            }
            if (badPos[index]) {
                index--;
                continue;
            }
            if (index < pos) {
                sum -= (stack.pop() - (stack[stack.length - 1] || 0));
                badPos[pos] = 1;
                continue;
            }
            if (fibHash[nextLeaf]) {
                stack.push(leaves[index]);
                if (stack.length == 1) {
                    lastCheckedIndex = leaves.length - 1;
                }
                sum += nextLeaf;
                if (sum == size + 1) {
                    pathExist = true;
                    if (minPath > stack.length || minPath == -1) {
                        minPath = stack.length;
                    }
                    badPos[leafPos[stack[0]]] = 1;
                    if (leafPos[stack[0]] == lastCheckedIndex - 1) {
                        stack = []
                        sum = 0;
                        index = lastCheckedIndex - 2;
                    }
                    else {
                        while (leafPos[stack.pop()] != lastCheckedIndex) { }
                        sum = stack.length == 1 ? stack[0] : stack[stack.length - 1] - stack[0];
                        index = lastCheckedIndex - 1;
                    }
                }
                else {
                    index = leaves.length - 1;
                }
            }
            else {
                index--;
            }
        }
    }

    console.log(
        // solution([0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0]) == 3,
        // solution([0, 0, 0]) == -1,
        // solution([]) == 1,
        // solution([1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0]) == 3,
        // solution([1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0]) == 3,

        solution([1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0]),

    )
});