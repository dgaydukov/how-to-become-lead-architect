'use strict';


const sort = (arr, step) => {
    step = step ? step + 1 : 1;
    if(arr.length == 1){
        return arr;
    }
    const len = arr.length,
        mid = Math.ceil(len/2),
        left = sort(arr.slice(0, mid), step),
        right = sort(arr.slice(mid, len), step);
    console.log("step " + step, left, right);
    return merge(left, right);

}

const merge = (left, right) => {
    const result = [];
    while(left.length > 0 && right.length > 0){
        if(left[0] <= right[0]){
            result.push(left.splice(0, 1)[0]);
        }
        else{
            result.push(right.splice(0, 1)[0])
        }
    }

    while(left.length > 0){
        result.push(left.splice(0, 1)[0]);
    }
    while(right.length > 0){
        result.push(right.splice(0, 1)[0]);
    }
    return result;
}

console.log(
    sort([38, 27, 43, 3, 9, 82, 10])
)