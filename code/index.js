(() => {
    const solution = (arr, max) => {
        const size = arr.length;
        for (let i = 0; i < size; i++) {
            const item = arr[i];
            item.vpi = item.v / item.w;
        }
        arr.sort((a, b) => b.vpi - a.vpi);
        console.log(arr)
        let sum = 0;
        for (let i = 0; i < size; i++) {
            const item = arr[i];
            if (max >= item.w) {
                max -= item.w;
                sum += item.v;
            }
        }
        console.log(max)
        return sum;
    }
    console.log(
        //solution([{ w: 3, v: 10 }, { w: 1, v: 3 }, { w: 2, v: 9 }, { w: 2, v: 5 }, { w: 1, v: 6 }], 6) == 25,
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

        //solution([{ w: 3, v: 10 }, { w: 1, v: 3 }, { w: 3, v: 9 }, { w: 2, v: 5 }, { w: 1, v: 6 }], 6)
    );


    /*
    // Input:
// Values (stored in array v)
// Weights (stored in array w)
// Number of distinct items (n)
// Knapsack capacity (W)
// NOTE: The array "v" and array "w" are assumed to store all relevant values starting at index 1.

for j from 0 to W do:
    m[0, j] := 0

for i from 1 to n do:
    for j from 0 to W do:
        if w[i] > j then:
            m[i, j] := m[i-1, j]
        else:
            m[i, j] := max(m[i-1, j], m[i-1, j-w[i]] + v[i])
    */

    const solution2 = (arr, W) => {
        const size = arr.length;
        const res = [];
        for (let i = 0; i <= size; i++) {
            res[i] = [];
        }
        for (let i = 0; i < W; i++) {
            res[0][i] = 0;
        }
        for (let i = 1; i <= size; i++) {
            for (let j = 0; j < W; j++) {
                const w = arr[i-1].w, 
                    v = arr[i-1].v;
                res[i][j] = w > j ? res[i - 1][j] : Math.max(res[i - 1][j], res[i - 1][j - w] + v);
            }
        }
        console.log(res)
        return res[size][W-1];
    }

    const solution3 = (arr, weight) => {
        const size = arr.length;
        const res = [];
        arr.sort((a,b)=>a.w==b.w ? a.v-b.v : a.w-b.w);
        for(let i = 0; i <= size; i++){
            res[i] = [];
            for(let j = 0; j <= weight; j++){
                res[i][j] = 0;
            }
        }
        for(let i = 1; i <= size; i++){
            const w = arr[i].w, v = arr[i].v;
            for(let j = 1; j <= weight; j++){
                res[i][j] = w > j ? res[i-1][j] : Math.max(res[i-1][j], res[i-1][j-w]+v);
            }
        }
        console.log(res)
    }

    console.log(
        solution3([{ w: 3, v: 10 }, { w: 1, v: 3 }, { w: 3, v: 9 }, { w: 2, v: 5 }, { w: 1, v: 6 }], 6),
        //solution2([{ w: 3, v: 10 }, { w: 1, v: 3 }, { w: 3, v: 9 }, { w: 2, v: 5 }, { w: 1, v: 6 }], 6),
    )
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