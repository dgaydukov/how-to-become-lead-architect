(() => {
    const solution = (A, B, C) => {
        const pSize = A.length,
            nSize = C.length;
        let nails = 0,
            planks = 0,
            pStart = 0;
        for (let i = 0; i < nSize; i++) {
            nails++;
            const nail = C[i];
            for (let j = pStart; j < pSize; j++) {
                if (nail >= A[j] && nail <= B[j]) {
                    planks++;
                }
                else {
                    pStart = j;
                    break;
                }
            }
            if (planks == pSize) {
                return nails;
            }
        }
        return -1;
    }

    console.log(
        // solution([1, 4, 5, 8], [4, 5, 9, 10], [4, 6, 7, 10, 2]) == 4,
        // solution([2], [2], [1]) == -1,
        // solution([3, 3], [4, 4], [3, 4]) == 1,

        solution([1, 4, 5, 6, 8], [4, 5, 9, 7, 10], [4, 6, 7, 10, 2]),
    )
})();
