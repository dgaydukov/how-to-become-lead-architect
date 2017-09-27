'use strict';


const solution = (arr) => {
    const len = arr.length;
    let hash = {},
        counter = 0,
        currentMin = arr[0],
        prev = 0;
    for(let i = 0; i < len; i++){
        //console.log(prev, arr[i], hash, currentMin)
        if(arr[i] != prev){
            if(hash[arr[i]] == undefined){
                counter++;
            }
            if(currentMin > arr[i]){
                hash = {};
                currentMin = arr[i];
            }
            prev = arr[i];
            hash[arr[i]] = 1;
        }
    }
    return counter;
}


console.log(
    solution([8, 8, 5, 7, 9, 8, 7,5, 4, 8] )
);

