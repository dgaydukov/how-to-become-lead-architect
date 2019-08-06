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

        //solution([1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0])

    )
})();









































































































(() => {
    const solution = (arr) => {
        const size = arr.length,
            leaves = [],
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
        const len = leaves.length;
        const mins = [];
        for(let i = 0; i < len; i++){
            let min = Number.MAX_SAFE_INTEGER;
            if(fibHash[leaves[i]]){
                min = 1;
            }
            else{
                for(let j = 0; j < i; j++){
                    if(mins[j] != -1){
                        const fib = fibHash[leaves[i]-leaves[j]];
                        //console.log(i, leaves[i], leaves[j], fib)
                        if(fib && min > mins[j]+1){
                            min = mins[j]+1;
                        }
                    }
                }
            }
            if(min == Number.MAX_SAFE_INTEGER){
                min = -1;
            }
            mins[i] = min;
        }
        //console.log(leaves, mins)
        return mins[len-1] || -1;
    }

    console.log(
        // solution([0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0]) == 3,
        // solution([0, 0, 0]) == -1,
        // solution([]) == 1,
        // solution([1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0]) == 3,
        // solution([1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0]) == 3,

        solution([0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0])

    )
});


(()=>{
    const solution = (arr, k, max) => {
        const size = arr.length;
        let sum = 0;
        for(let i = 0; i < size; i++){
            sum += arr[i];
        }
        console.log(sum, size)
    }


    console.log(
        //solution([2,1,5,1,2,2,2], 3, 5) == 6,

        solution([2,1,5,1,2,2,2], 3, 5)
    )
})();