'use strict'


/**
 * Simple BinarySearch implementation
 *
 * @param arr
 * @param key
 * @param iteration
 * @returns {*}
 */
const binarySearch = (arr, key, iteration) => {
    iteration = iteration || 0;
    iteration++;
    const len = arr.length,
        middle = Math.floor(len/2),
        left = arr.slice(0, middle),
        right = arr.slice(middle, len);
    if(len == 1){
        return {iteration:iteration, key: arr[0]==key?key:-1}
    }
    if(key < arr[middle]){
        return binarySearch(left, key, iteration);
    }
    else if(key > arr[middle]){
        return binarySearch(right, key, iteration);
    }
    else if(key == arr[middle]){
        return {iteration:iteration, key: arr[middle]}
    }
}

const binarySearchStack = (arr, key) => {
    let iteration = 0,
        stack = arr.slice();
    while(stack.length > 1){
        iteration++;
        const len = stack.length,
            middle = Math.floor(len/2),
            left = stack.slice(0, middle),
            right = stack.slice(middle, len);
        if(key < stack[middle]){
            stack = left;
        }
        else if(key > stack[middle]){
            stack = right;
        }
        else{
            return {iteration:iteration, key: stack[middle]}
        }
    }
    return {iteration:iteration, key: stack[0]==key?key:-1}
}



const arr = [];
for(let i = 0; i < 100; i++){
    arr.push(i+10);
}

console.log(
    binarySearch(arr, 55),
    binarySearchStack(arr, 55),
)