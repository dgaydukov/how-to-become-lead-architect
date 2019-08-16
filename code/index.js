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
                nailHash[nail] = i+1;
                nails.push(nail);
            }
            else {
                nailHash[nail] = Math.min(nailHash[nail], i+1);
            }
        }
        nails.sort((a, b) => a - b);
        const uniqNailSize = nails.length;
        let maxIndex = 0;
        //console.log({nails, nailHash})
        for (let i = 0; i < pSize; i++) {
            const from = A[i], to = B[i];
            let start = 0, end = uniqNailSize-1;
            let minIndex = Number.MAX_SAFE_INTEGER;
            while(start <= end){
                let mid = Math.floor((start+end)/2);
                //console.log({start, end, mid})
                if(nails[mid] >= from){
                    if(nails[mid] <= to){
                        if(minIndex > nailHash[nails[mid]]){
                            minIndex = nailHash[nails[mid]]
                        }
                        //console.log(nails[mid], minIndex, nailHash[nails[mid]]);
                        start++;
                    }
                    else{
                        end = mid -1;
                    }
                }
                else{
                    start = mid + 1;
                }
            }
            //console.log({maxIndex, minIndex, from, to})
            if(maxIndex < minIndex && minIndex != Number.MAX_SAFE_INTEGER){
                maxIndex = minIndex;
            }
        }
        return maxIndex == 0 ? -1 : maxIndex;
    }

    console.log(
        // solution([1, 4, 5, 8], [4, 5, 9, 10], [4, 6, 7, 10, 2]) == 4,
        // solution([2], [2], [1]) == -1,
        // solution([3, 3], [4, 4], [3, 4]) == 1,
        // solution([1, 4, 5, 8], [4, 5, 9, 10], [10, 4, 6, 7, 2]) == 3,

        solution([1, 4, 5, 8], [4, 5, 9, 10], [4, 6, 7, 10, 2])
    )
})();