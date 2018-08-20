/**
 * 
 */



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