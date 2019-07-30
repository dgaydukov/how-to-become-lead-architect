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
        solution([0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0]) == 3,
        solution([0, 0, 0]) == -1,
        solution([]) == 1,
        solution([1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0]) == 3,
        solution([1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0]) == 3,

        solution([1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0]),

    )
})();