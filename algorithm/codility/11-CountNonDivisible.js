(() => {
    /**
     * First we create array with unique values (just not to repeat operations)
     * Then iterate over it, for every number we get divisors (by square root method)
     * and see do we have such numbers in our hashtable, and if yes we decrese number of divisors
     * 
     * https://app.codility.com/demo/results/training3JSP55-YXV/
     * 
     * @param {*} arr 
     */
    const solution = (arr) => {
        const size = arr.length,
            hash = {},
            nonDivs = {},
            uniques = [],
            result = [];
        for (let i = 0; i < size; i++) {
            const v = arr[i];
            if (hash[v]) {
                hash[v]++;
            }
            else {
                hash[v] = 1;
                uniques.push(v);
            }
        }
        const len = uniques.length;
        for (let i = 0; i < len; i++) {
            const v = uniques[i];
            let non = size;
            const limit = Math.ceil(Math.sqrt(v)) + 1;
            for (let j = 1; j < limit; j++) {
                if (v % j == 0) {
                    if (hash[j]) {
                        non -= hash[j];
                    }
                    const r = v / j;
                    if (r >= limit && hash[r]) {
                        non -= hash[r];
                    }
                }
            }
            nonDivs[v] = non;
        }
        for (let i = 0; i < size; i++) {
            result.push(nonDivs[arr[i]]);
        }
        return result;
    }



    console.log(
        JSON.stringify(solution([3, 1, 2, 3, 6])) == JSON.stringify([2, 4, 3, 2, 0]),
        JSON.stringify(solution([2, 3, 5])) == JSON.stringify([2, 2, 2]),
        JSON.stringify(solution([9, 9, 9])) == JSON.stringify([0, 0, 0]),
        JSON.stringify(solution([10, 4, 4, 10, 1])) == JSON.stringify([2, 2, 2, 2, 4]),
        JSON.stringify(solution([1, 6, 5, 10, 9, 1])) == JSON.stringify([4, 3, 3, 2, 3, 4]),
    )
})();