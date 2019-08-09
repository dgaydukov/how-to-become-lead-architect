(() => {
    /**
     * We search nails for every plank using binary search
     * 
     * @param {*} A 
     * @param {*} B 
     * @param {*} C 
     */
    const solution = (A, B, C) => {
        const pSize = A.length,
            nSize = C.length,
            nails = [],
            nailHash = {};
        for (let i = 0; i < nSize; i++) {
            const nail = C[i];
            if (nailHash[nail] === undefined) {
                nailHash[nail] = i;
                nails.push(nail);
            }
            else {
                nailHash[nail] = Math.min(nailHash[nail], i);
            }
        }
        nails.sort((a, b) => a - b);
        const uniqNailSize = nails.length;
        for (let i = 0; i < pSize; i++) {
            const from = A[i], to = B[i];
            let start = 0, end = uniqNailSize, mid = Math.ceil((start+end)/2);
            while(start <= end){
                if(nails[mid] >= from){
                    if(nails[mid] <= to){

                    }
                    else{

                    }
                }
                else{
                    start = mid + 1;
                }
            }
        }
        return -1;
    }

    console.log(
        // solution([1, 4, 5, 8], [4, 5, 9, 10], [4, 6, 7, 10, 2]) == 4,
        // solution([2], [2], [1]) == -1,
        // solution([3, 3], [4, 4], [3, 4]) == 1,
        // solution([1, 4, 5, 8], [4, 5, 9, 10], [10, 4, 6, 7, 2]) == 3,

        solution([1, 4, 5, 8], [4, 5, 9, 10], [4, 6, 7, 10, 2, 4, 10])
    )
})();