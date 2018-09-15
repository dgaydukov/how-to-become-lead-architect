const _99_array_inversion_count = (arr)=>{
    let count = 0;
    const len = arr.length
    for(let i = 0; i < len; i++){
        for(let j = i+1; j < len; j++){
            if(arr[i] > arr[j]){
                //console.log(i, j)
                count++
                if(count > 10**9){
                    //return -1
                }
            }
        }
    }
    return count
}

/**
 * new advanced way  https://stackoverflow.com/a/338252
 *
 *
 * @param arr
 * @private
 */
const _99_array_inversion_count2 = (arr)=>{
    const mergeSort = (arr)=>{
        return arr.concat().sort((a,b) => a - b)
    }
    const binarySearch = (arr, value)=>{
        return arr.indexOf(value)
    }
    const sorted = mergeSort(arr)
    let count = 0;
    const len = arr.length
    for(let i = 0; i < len; i++){
        const index = binarySearch(sorted, arr[i])
        count += index
        sorted.splice(index, 1)
        if(count > 10**9){
            //return -1
        }
    }
    return count
}

const generateArray = () =>{
    const arr = []

    const random = (min, max)=>{
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    const min = -2147483648
    const max = 2147483647

    for(let i = 0; i < 10**5; i++){
        arr.push(random(min, max))
    }

    return arr
}