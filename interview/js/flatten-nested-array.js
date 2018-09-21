/**
 * For simple version check https://github.com/dgaydukov/how-to-become-a-senior-js-developer/blob/master/algorithm/interview/flatten-nested-paired-array.js
 *
 * We have a random array like [1, 2, [3, [4, 5, [1, 2,[3,[4,[5,[5,[7,[8,[66]]]]]]]]]], [2, [3, 5, [5, [5, [3, [9, 3, [3]]]]], [1, [3], [2]]]]]
 * find the maximum depth and flatten it
 *
 */



/**
 * The solution is simple, especially if you know graph theory
 * Because in reality is nothing more than a simple graph
 * We can use BFS and DFS to walk through it
 * For flatten it better to use DFS because in this case we will save the order
 *
 *
 */
(()=>{
    /**
     * Generate nested array at first place
     * @param n
     * @returns {*[]}
     */
    const buildNestedArray = (depth, maxLength)=>{
        const getRand = (maxValue)=>{
            return Math.round(Math.random()*maxValue)
        }
        let nested = [getRand(maxLength), []]
        let list = [];
        for(let i = 1; i < depth; i++){
            if(i == 1){
                list = nested[1]
            }
            else{
                for(let k = 0; i < list.length; k++){
                    if(typeof list[k] == 'object'){
                        list = list[k]
                        break
                    }
                }
            }
            const loopMaxLen = getRand(maxLength)
            for(let j = 0; j < loopMaxLen; j++){
                list.push(getRand(1)==1?getRand(maxLength):[])
            }
        }
        return nested
    }


    const flatten = (arr)=>{
        const flatten = []
        let maxDepth=0;
        const inner = (arr, depth = 0)=>{
            depth++
            if(maxDepth < depth){
                maxDepth = depth
            }
            const len = arr.length
            for(let i = 0; i < len; i++){
                if("object" == typeof arr[i]){
                    inner(arr[i], depth)
                }
                else{
                    flatten.push(arr[i])
                }
            }
        }
        inner(arr)
        return {depth: maxDepth, flatten: flatten}
    }


    const arr = [1, 2, [3, [4, 5, [1, 2,[3,[4,[5,[5,[7,[8,[66]]]]]]]]]], [2, [3, 5, [5, [5, [3, [9, 3, [3]]]]], [1, [3], [2]]]]]

    console.log(
        flatten(arr)
    )


    const stringFlatten = (arr)=>{
        return arr.toString().split(",").map(n=>Number(n))
    }

    /**
     * compare 2 arrays, that they are equal
     */
    console.log(
        JSON.stringify(flatten(arr).flatten) == JSON.stringify(_flatten(arr))
    )
})();


/**
 * Here is interesting solution. We use BFS, that's why our array sorted by the depth.
 * So in this case the last element would be 66 (not 2) because 66 has the largest nested depth length
 */
(()=>{
    const flatten = (arr)=>{
        const flatten = []
        let maxDepth = 0;
        let list = JSON.parse(JSON.stringify(arr))
        while(list.length > 0){
            let sub = []
            const len = list.length
            for(let i = 0; i < len; i++){
                if("object" == typeof list[i]){
                    sub = [].concat(sub, list[i])
                }
                else {
                    flatten.push(list[i])
                }
            }
            maxDepth++
            list = sub
        }
        return {depth: maxDepth, flatten: flatten}
    }


    const arr = [1, 2, [3, [4, 5, [1, 2,[3,[4,[5,[5,[7,[8,[66]]]]]]]]]], [2, [3, 5, [5, [5, [3, [9, 3, [3]]]]], [1, [3], [2]]]]]

    console.log(
        flatten(arr)
    )
})();