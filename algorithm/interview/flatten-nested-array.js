

(()=>{
    const buildNestedArray = (n)=>{
        let nested = [1, []]
        let list = [];
        for(let i = 1; i < n; i++){
            list = list[1] || nested[1]
            list.push(i+1)
            list.push([])
        }
        return nested
    }
    const getNestedArrayLen = (arr)=>{
        let len = 0;
        let check = true
        while(check){
            if(!arr[0]){
                check = false
                break
            }
            len++
            arr = arr[1]
        }
        return len
    }
    const flatten = (arr)=>{
        const flat = []
        let check = true
        while(check){
            if(!arr[0]){
                check = false
                break
            }
            flat.push(arr[0])
            arr = arr[1]
        }
        return flat
    }
    console.time("buildNestedArray")
    const nestedArr = buildNestedArray(10**6)
    console.timeEnd("buildNestedArray")

    console.time("getNestedArrayLen")
    const len = getNestedArrayLen(nestedArr)
    console.timeEnd("getNestedArrayLen")

    console.time("flatten")
    const arr = flatten(nestedArr)
    console.timeEnd("flatten")
})();