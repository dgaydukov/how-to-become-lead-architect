/**
 * External sorting https://en.wikipedia.org/wiki/External_sorting
 */

(()=>{
    const isSorted = (arr)=>{
        const len = arr.length
        for(let i = 0; i < len - 1; i++){
            console.log(i, arr[i], arr[i+1], arr[i] > arr[i+1])
            if(arr[i] > arr[i+1]){
                return false
            }
        }
        return true
    }


    const arr = []
    const disk = {
        sorted: []
    }

    const arrLen = 900
    const ramLen = 100


    const sort = (arr)=>{
        const sorted = JSON.parse(JSON.stringify(arr))
        sorted.sort((a,b)=>a-b)
        return sorted
    }

    for(let i = 0; i < 900; i++){
        arr.push(Math.round(Math.random()*100))
    }

    const externalSort = (arr)=>{
        const loops = arrLen%ramLen == 0 ? arrLen/ramLen : Math.floor(arrLen/ramLen) + 1
        for(let i = 0; i < loops; i++){
            disk[i] = sort(arr.slice(i * ramLen, (i+1) * ramLen))
        }
        const sortingBufferLen = ramLen%(loops+1) == 0 ? ramLen/(loops+1) : Math.floor( ramLen/(loops+1)) + 1
        const sortedBufferLen = ramLen - loops * sortingBufferLen


        while(disk.sorted.length < arrLen){
            const arrToSort = []
            const sorted = []
            for(let i = 0; i < loops; i++){
                const list = disk[i]
                for(let j = 0; j < sortingBufferLen; j++){
                    arrToSort.push(list.splice(0, 1)[0])
                }
            }
            console.log(arrToSort)
            disk.sorted = [].concat(disk.sorted, sort(arrToSort))
        }
        return disk.sorted
    }


    const sorted = externalSort(arr)
    console.log(
        //sorted,
        isSorted(sorted)
    )
})()