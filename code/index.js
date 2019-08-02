(() => {
    /**
     * Solution to count 
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

    let diff = 0;
    let max = 0;
    for (let i = 0; i < 10 ** 6; i++) {
        const n = 6, arr = [];
        for (let j = 0; j < n; j++) {
            arr.push({ w: j + 1, v: Math.round(Math.random() * (j + n)) || 1 });
        }
        const r1 = solution(arr, n);
        const r2 = rodCount(arr, n);
        if (r1 != r2) {
            if (max < Math.abs(r1 - r2)) {
                max = Math.abs(r1 - r2);
            }
            //console.log('got it', arr, r1, r2);
            diff++;
            //break;
        }
    }
    console.log(`diff: ${diff}, max: ${max}`)

    console.log(
        // solution([{w:1, v:1},{w:2, v:5},{w:3, v:8},{w:4, v:9},{w:5, v:10},{w:6, v:17},{w:7, v:17},{w:8, v:20}], 8)==22,
        // solution([{w:1, v:3},{w:2, v:5},{w:3, v:8},{w:4, v:9},{w:5, v:10},{w:6, v:17},{w:7, v:17},{w:8, v:20}], 8)==24,

        // solution([
        //     { w: 1, v: 1 },
        //     { w: 2, v: 5 },
        //     { w: 3, v: 7 },
        //     { w: 4, v: 4 },
        //     { w: 5, v: 8 }], 5),
        // rodCount([{ w: 1, v: 1 },
        //     { w: 2, v: 5 },
        //     { w: 3, v: 7 },
        //     { w: 4, v: 4 },
        //     { w: 5, v: 8 }], 5),
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