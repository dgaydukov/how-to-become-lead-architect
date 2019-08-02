(() => {
    /**
     * Naive approach to brute force all possible values
     * Method is very simple, we go from the end and check can we get to the end in one step
     * 
     * https://app.codility.com/demo/results/trainingMMATA3-GYH/
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
        // calculate fibonacci numbers
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
        // calculate leaves positions
        for (let i = 0; i < size; i++) {
            if (arr[i] == 1) {
                leaves.push(i + 1);
            }
        }
        leaves.push(size + 1);
        for (let i = 0; i < leaves.length; i++) {
            leafPos[leaves[i]] = i;
        }
        let index = leaves.length - 2, min = Number.MAX_SAFE_INTEGER, stack = [], lastCheckedIndex = index;
        console.log(leaves)
        while (index >= 0) {
            if (badPos[index]) {
                index--;
                continue;
            }
            lastCheckedIndex = Math.min(lastCheckedIndex, index);
            const fib = leaves[index] - (stack[stack.length - 1] || 0);
            if (fibHash[fib]) {
                stack.push(leaves[index]);
                if (stack.length == 1) {
                    lastCheckedIndex = leaves.length - 1;
                }
                if (index == leaves.length - 1) {
                    min = Math.min(min, stack.length);
                    console.log({stack})
                    const firstPosition = leafPos[stack[0]];
                    if (firstPosition == lastCheckedIndex - 1) {
                        //badPos[firstPosition] = 1;
                        index = firstPosition - 1;
                        stack = [];
                    }
                    else {
                        while (leafPos[stack.pop()] != lastCheckedIndex) { }
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
            if (index < leafPos[stack[stack.length - 1]]) {
                badPos[leafPos[stack[stack.length - 1]]] = 1;
                stack.pop();
            }
        }
        return min == Number.MAX_SAFE_INTEGER ? -1 : min;
    }

    console.log(
        // solution([0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0]) == 3,
        // solution([0, 0, 0]) == -1,
        // solution([]) == 1,
        // solution([1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0]) == 3,
        // solution([1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0]) == 3,

        solution([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]),

    )


    // const arr = [0];
    // for(let i = 0; i < 13; i++){
    //     const size = arr.length;
    //     for(let j = 0; j < size; j++){
    //         arr.push(Number(!arr[j]));
    //     }
    // }
    // console.log(solution(arr));

    // const s = + new Date();
    // const arr = [];
    // for(let i = 0; i < 10**5; i++){
    //     arr.push(1);
    // }
    // console.log(solution(arr));
    // const e = + new Date() - s;
    // console.log(`time taken: ${e/1000}`);
})();