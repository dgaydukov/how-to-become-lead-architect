(() => {
    const __fib = (n) => n < 2 ? 1 : __fib(n - 1) + __fib(n - 2);
    const solution = (arr) => {
        const size = arr.length,
            leaves = [],
            hash = {};
        for(let i = 0; i < size; i++){
            const fib = __fib(i);
            hash[fib] = 1;
            if(fib > size){
                break;
            }
        }
        if (hash[size + 1]) {
            return 1;
        }
        for (let i = 0; i < size; i++) {
            if (arr[i] == 1) {
                leaves.push(i + 1);
            }
        }
        leaves.push(size + 1);
        const pos = {};
        for (let i = 0; i < leaves.length; i++){
            pos[leaves[i]] = i;
        }
        let index = leaves.length-1;
        let stop = 0;
        const stack = [];
        let sum = 0;
        console.log(leaves, hash)
        while(true){
            const lenToNextLeaf = leaves[index] - sum;
            console.log({index, stack, lenToNextLeaf, sum})
            if(hash[lenToNextLeaf]){
                stack.push(lenToNextLeaf);
                sum += lenToNextLeaf;
                if(sum == size + 1){
                    return stack.length;
                }
                index = leaves.length-1;
            }
            else{
                index--;
                if(index < pos[stack[stack.length-1]]){
                    sum -= stack.pop();
                }
                if(index == -1){
                    if(stack.length > 0){
                        index = pos[stack.pop()]
                    }
                    else{
                        return -1;
                    }
                }
            }
            


            stop++;
            if(stop == 10**1){
                console.log(`reach stop limit`);
                break;
            }
        }
        return -1;
    }

    console.log(
        //solution([0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0]) == 3,
        //solution([0, 0, 0]) == -1,
        
        solution([0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0]),
    )
})();