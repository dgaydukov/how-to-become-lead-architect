'use strict'

/**
 * Here is my 2 solutions to solve binary search algorithm
 */


/**
 * The simple and most straight forward solution
 * The idea is simple. We have a range (left & right) where our number (search) is
 * So for every iteration we change this range
 * Here is the solution to search 31
    0 99 49
    0 48 24
    25 48 36
    25 35 30
 * So first the range is 0..99, then we move to 0..48 and so on, till we get the result
 */
(()=>{
    const binarySearch = (arr, search)=>{
        let left = 0;
        let right = arr.length - 1
        if(arr[left] > search || arr[right] < search){
            return -1
        }
        while(left <= right){
            const mid = Math.floor((left + right)/2)
            if(arr[mid] == search){
                return mid
            }
            else if(arr[mid] < search){
                left = mid + 1
            }
            else{
                right = mid -1
            }
        }
    }

    const arr = []
    const search = 31
    for(let i = 1; i <= 100; i++){
        arr.push(i)
    }

    console.log('result', binarySearch(arr, search))
})()



/**
 * The same solution as previous, only done with recursion
 * Generally the first one is better, because loops are more native and more clear to understand then recursion
 * The only different is that we path our range (left..right) in every function call
 */
(()=>{
    const binarySearch = (arr, search, left = 0, right = 0)=>{
        left = left || 0;
        right = right || arr.length - 1
        if(arr[left] > search || arr[right] < search){
            return -1
        }
        const mid = Math.floor((left + right)/2)
        if(arr[mid] == search){
            return mid
        }
        else if(arr[mid] < search){
            return binarySearch(arr, search, mid+1, right)
        }
        else{
            return binarySearch(arr, search, left, mid -1)
        }
    }

    const arr = []
    const search = 31
    for(let i = 1; i <= 100; i++){
        arr.push(i)
    }

    console.log('result', binarySearch(arr, search))
})()