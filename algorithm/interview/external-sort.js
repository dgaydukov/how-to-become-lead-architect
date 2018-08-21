/**
 * Once i was asked. You have a 64mb file with digits one per line. You have to sort it, but you have only 8mb RAM.
 * What will you do?
 *
 * This is the general task called external sorting
 * https://en.wikipedia.org/wiki/External_sorting
 *
 *
 * For simple reason i assume that 1mb is 1 number from 0 to 100
 * To execute wiki example just run externalSort(900, 100
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
    const quickSort = (arr)=>{
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


    const externalSort = (fileLen, ramLen)=>{
        const disk = {
            list: {},
            sorted: []
        }
        const arr = generateList(fileLen)
        const loops = fileLen%ramLen == 0 ? fileLen/ramLen : Math.floor(fileLen/ramLen) + 1
        for(let i = 0; i < loops; i++){
            disk.list[i] = quickSort(arr.slice(i * ramLen, (i+1) * ramLen))
        }
        const inputBufferCellLen = Math.floor(ramLen/2/loops)+1
        const outputBufferLen = ramLen - loops * inputBufferCellLen


        const inputBuffer = {}
        let outputBuffer = []

        //initial filling
        for(let i = 0; i < loops; i++){
            inputBuffer[i] = []
            let j = 0
            while(j < inputBufferCellLen){
                const item = disk.list[i].splice(0, 1)
                inputBuffer[i].push(item[0])
                j++
            }
        }


        for(let counter = 0; counter < fileLen; counter++){
            let min = Number.MAX_SAFE_INTEGER;
            let index = 0;
            for(let i = 0; i < loops; i++){
                const sub = inputBuffer[i]
                if(min > sub[0]){
                    min = sub[0]
                    index = i
                }
            }
            inputBuffer[index].splice(0, 1)
            outputBuffer.push(min)

            //if any bucket empty fill it
            for(let i = 0; i < loops; i++){
                if(inputBuffer[i].length == 0){
                    let j = 0
                    while(j < inputBufferCellLen){
                        if(disk.list[i].length == 0){
                            break
                        }
                        const item = disk.list[i].splice(0, 1)
                        inputBuffer[i].push(item[0])
                        j++
                    }
                }
            }

            // if buffer full or we have last iteration, write to disk
            if(outputBuffer.length == outputBufferLen || counter == fileLen-1){
                disk.sorted = [].concat(disk.sorted, outputBuffer)
                outputBuffer = []
            }
        }

        return {original: arr, sorted: disk.sorted}
    }

    const fileLen = 64
    const ramLen = 8
    const sorted = externalSort(fileLen, ramLen)
    console.log(
        sorted,
        isSorted(sorted.original),
        isSorted(sorted.sorted),
    )
})()