/**
 * We have an array like [1, [2, [3, [4, [5, ...]]]]] with 1 million nested array
 * We need to write function to flatten it
 *
 * Precaution:
 * 1. You can't use recursion, because it will cause stackoverflow error
 * 2. You can't use toString() method, because after 1000 depth it will also throw stackoverflow error
 */

(()=>{
    /**
     * Generate nested array at first place
     * @param n
     * @returns {*[]}
     */
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

    /**
     * Calculate the length (depth) of nested array
     * @param arr
     * @returns {number}
     */
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

    /**
     * Flatten nested array
     * 
     * @param arr
     * @returns {Array}
     */
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


/**
 * found depth of any length array
 */
(()=>{
    const getDepth = (arr)=>{
        let maxDepth=0;
        const inner = (arr, depth = 0)=>{
            if(maxDepth < depth){
                maxDepth = depth
            }
            depth++
            const len = arr.length
            for(let i = 0; i < len; i++){
                if("object" == typeof arr[i]){
                    inner(arr[i], depth)
                }
            }
        }
        inner(arr)
        return maxDepth
    }


    const arr = [1, 2, [3, [4, 5, [1, 2,[3,[4,[5,[5,[7,[8,[66]]]]]]]]]], [2, [3, 5, [5, [5, [3, [9, 3, [3]]]]], [1, [3], [2]]]]]

    console.log(
        getDepth(arr)
    )
})();