'use strict';

/**
 * The idea is that computer memory makes sorting for us
 * After we fill bucket, all values of array will be bucket keys, and computer memory automatically sort keys
 * You can write following code
 * const arr = [];
 * arr[100] = 1;
 * arr[50] = 1;
 * arr[0] = 1;
 * After you console.log array, you will notice, that it size is 101, and it's keys alreay sorted
 * (101) [1, undefined × 49, 1, undefined × 49, 1]
 * 0: 1
 * 50: 1
 * 100: 1
 * 
 * So this kind of sorting works for O(n) only because sorting happens in computer memory. Memory works in this way - it's just allocate memory, so when you insert
 * unsorted keys, memory sort them automatically
 *
 * @param list
 * @returns {*}
 */
const countingSort = (list)=>{
    var bucket = [],idx = 0;
    for(var i = 0;i<list.length;i++){
        bucket[list[i]] = bucket[list[i]] || 0
        bucket[list[i]] ++
    }
    for(i = 0; i< bucket.length;i++){
        while(bucket[i]){
            list[idx++] = i;
            bucket[i] --;
        }
    }
    return list
}



const radixSort = (arr)=>{
    // get length of max number in array, for example for [1, 10, 250], it will get 3, because 250 is max, and it's length is 3 digits
    const maxNumLength = Math.floor(Math.log10(Math.max(...arr)))+1,
        len = arr.length;
    for(let i = 0; i < maxNumLength; i++){
        let bucket = [],
            idx = 0;
        for(let j = 0; j < len; j++){
            // get digit of number by digit number
            const digit = Math.floor(arr[j]/Math.pow(10, i))%10;
            bucket[digit] = bucket[digit] || [];
            bucket[digit].push(arr[j])
        }
        for(let j = 0, len1 = bucket.length; j< len1; j++){
            if(bucket[j] && bucket[j].length > 0){
                for(let k = 0, len2 = bucket[j].length; k<len2; k++){
                    arr[idx++] = bucket[j][k];
                }
            }
        }
    }
    return arr;
}

console.log(
    countingSort([101, 203, 5, 87, 76, 48, 1000]),
    radixSort([101, 203, 5, 87, 76, 48, 1000])
)