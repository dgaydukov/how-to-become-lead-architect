/**
 * Sort array of sorted subarrays
 * https://en.wikipedia.org/wiki/Merge_algorithm#K-way_merging
 *
 * The most basic realization
 *
 */


(()=>{
    const arr = []
    for(let i = 0; i < 6; i++){
        arr[i] = []
        for(let j = 0; j < 5; j++){
            arr[i].push(Math.round(Math.random()*10))
        }
        arr[i].sort((a,b)=>a-b)
    }
    const isSorted = (arr)=>{
        const len = arr.length
        for(let i = 0; i < len - 1; i++){
            if(arr[i] > arr[i+1]){
                return false
            }
        }
        return true
    }

    const nListMergeSort = (arr)=>{
        const len = arr.length
        const list = JSON.parse(JSON.stringify(arr))
        const sorted = []
        const isEmpty = (arr)=>{
            const len = arr.length
            for(let i = 0; i < len; i++){
                if(arr[i].length > 0){
                    return false
                }
            }
            return true;
        }
        while(!isEmpty(list)){
            let min = Number.MAX_SAFE_INTEGER;
            let index = 0;
            for(let i = 0; i < len; i++){
                const sub = list[i]
                if(min > sub[0]){
                    min = sub[0]
                    index = i
                }
            }
            list[index].splice(0, 1)
            sorted.push(min)
        }
        return sorted
    }

    const sorted = nListMergeSort(arr)
    console.log(
        sorted,
        isSorted(sorted)
    )
})();