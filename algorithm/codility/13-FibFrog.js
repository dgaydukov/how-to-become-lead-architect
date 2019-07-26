(() => {
    const solution = (arr) => {
        const size = arr.length,
            leaves = [],
            pathStack = [],
            leafPos = {},
            badPos = {},
            fibHash = {},
            F = [1, 1];
        for (let i = 2; i < size + 2; i++) {
            F[i] = F[i - 1] + F[i - 2];
            if (F[i] > size) {
                break;
            }
        }
        for (let i = 0; i < F.length; i++) {
            fibHash[F[i]] = 1;
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
        let sum = 0, index = leaves.length - 1, minPath = Number.MAX_SAFE_INTEGER, pathExist = false;
        while (true) {
            if (index < 0) {
                return minPath;
            }
            const lenToNextLeaf = leaves[index] - sum;
            const pos = leafPos[pathStack[pathStack.length - 1]];
            console.log({ index, pathStack, lenToNextLeaf, sum }, badPos)
            if (badPos[index]) {
                console.log(`bad position at: ${index}, continue...`)
                index--;
                continue;
            }
            if (fibHash[lenToNextLeaf] && index != pos) {
                pathStack.push(leaves[index]);
                sum += lenToNextLeaf;
                if (sum == size + 1) {
                    console.log(`got it`, pathStack)
                    pathExist = true;
                    if (minPath > pathStack.length) {
                        minPath = pathStack.length
                    }
                    const _pos = leafPos[pathStack[0]];
                    badPos[_pos] = 1;
                    while (pathStack.length > 0) {
                        pathStack.pop();
                    }
                    sum = 0;
                    index = _pos - 1;
                }
                else {
                    index = leaves.length - 1;
                }
            }
            else {
                index--;
                if (index < pos) {
                    sum -= (pathStack.pop() - (pathStack[pathStack.length - 1] || 0));
                    badPos[pos] = 1;
                }
                if (index == -1) {
                    if (pathStack.length > 0) {
                        index = leafPos[pathStack.pop()]
                    }
                    else {
                        return pathExist ? minPath : -1;
                    }
                }
            }
        }
    }

    console.log(
        // solution([0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0]) == 3,
        // solution([0, 0, 0]) == -1,
        // solution([]) == 1,
        // solution([1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0]) == 3,
        // solution([1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0]) == 3,

        solution([1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0])

    )
})();