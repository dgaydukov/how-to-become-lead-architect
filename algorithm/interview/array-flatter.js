'use strict';


/**

 [1, [2, [3, 4], 5], 6, [7]] => [1, 2, 3, 4, 5, 6, 7]

 */


const flatten = (arr) => {
    const flatArr = [];
    for(let i = 0, len = arr.length; i < len; i++){
        if(typeof arr[i] == "object"){
            flatArr.push(...flatten(arr[i]));
        }
        else{
            flatArr.push(arr[i])
        }
    }
    return flatArr;
}

console.log(
    flatten([1, [2, [3, 4], 5], 6, [7]])
)