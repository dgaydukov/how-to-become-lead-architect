/**
 * Quicksort algorithm - the fastest one
 * Done with recursion
 *
 */

(()=>{
    const quickSort = (arr)=>{
        if(arr.length == 0 || arr.length == 1){
            return arr
        }
        const len = arr.length;
        const pivotIndex = Math.floor(len/2)
        const pivot = arr[pivotIndex]
        const arr1 = [],
            arr2 = [];
        for(let i = 0; i < len; i++){
            if(i == pivotIndex){
                continue
            }
            if(arr[i] < pivot){
                arr1.push(arr[i])
            }
            else{
                arr2.push(arr[i])
            }
        }
        return [...quickSort(arr1), pivot, ...quickSort(arr2)]
    }



    const arr = [7,3, 1,2, 6,9, 8,4]
    for(let i = 0; i < 100; i++){
        //arr.push(Math.round(Math.random()*10))
    }

    console.log(
        quickSort(arr)
    )
})();