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


    const _flatten = (arr)=>{
        return arr.toString().split(",").map(n=>Number(n))
    }

    /**
     * compare 2 arrays, that they are equal
     */
    console.log(
        JSON.stringify(flatten(arr).flatten) == JSON.stringify(_flatten(arr))
    )
})();


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