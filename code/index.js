(() => {
    const solution = (arr1, arr2) => {
        const size = arr1.length;
        let max = 0;
        for (let i = 0; i < size; i++) {
            let count = 0;
            for (let j = 0; j < size; j++) {
                if (i != j) {
                    if (arr2[i] < arr1[j]) {
                        count++;
                    }
                }
            }
            if (max < count) {
                max = count;
            }
        }
        return max;
    }

    console.log(
        //solution([1, 3, 7, 9, 9], [5, 6, 8, 9, 10]) == 3,

        solution([1, 3, 7, 9, 9], [5, 6, 8, 9, 10])
    );
})();