/**
 * Once i was asked. You have a 64mb file with digits one per line. You have to sort it, but you have only 8mb RAM.
 * What will you do?
 *
 * This is the general task called external sorting
 * https://en.wikipedia.org/wiki/External_sorting
 */

(()=>{
    const isSorted = (arr)=>{
        const len = arr.length
        for(let i = 0; i < len - 1; i++){
            if(arr[i] > arr[i+1]){
                return false
            }
        }
        return true
    }
    const sort = (arr)=>{
        const sorted = JSON.parse(JSON.stringify(arr))
        sorted.sort((a,b)=>a-b)
        return sorted
    }
    const generateList = (n)=>{
        const arr = []
        for(let i = 0; i < n; i++){
            arr.push(Math.round(Math.random()*100))
        }
        return arr
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


    const arrLen = 900
    const ramLen = 100

    const arr = generateList(arrLen)
    const disk = {
        list: {},
        sorted: []
    }

    const externalSort = (arr)=>{
        const loops = arrLen%ramLen == 0 ? arrLen/ramLen : Math.floor(arrLen/ramLen) + 1
        for(let i = 0; i < loops; i++){
            disk.list[i] = sort(arr.slice(i * ramLen, (i+1) * ramLen))
        }
        const inputBufferLen = ramLen%(loops+1) == 0 ? ramLen/(loops+1) : Math.floor( ramLen/(loops+1)) + 1
        const outputBufferLen = ramLen - loops * inputBufferLen


        let counter = 0
        while(disk.sorted.length < arrLen){
            if(counter==1){
                break
            }
            counter++
            const inputBuffer = []
            const outputBuffer = []


            disk.sorted = [].concat(disk.sorted, sorted)
        }
        return disk.sorted
    }


    const sorted = externalSort(arr)
    console.log(
        //sorted,
        //isSorted(sorted)
    )
})()