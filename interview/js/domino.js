'use strict'

/**
 * From the array of dominos find the first suitable item.
 * If found return this domino and it's index in array
 * otherwise return false
 *
 * @param arr
 * @param n
 * @returns {*}
 */
const getDominoIndex = (arr, n) => {
    const len = arr.length;
    for(let i = 0; i < len; i++){
        const tuple = arr[i];
        if(tuple[0] == n){
            return {index: i, domino: tuple};
        }
        if(tuple[1] == n){
            return {index: i, domino: [tuple[1], tuple[0]]}
        }
    }
    return false;
}

const domino = arr => {
    const n = arr.length;
    const domino = [arr.splice(0, 1)[0]];
    let last;
    for(let i = 0; i < n**n; i++){
        if(arr.length == 0){
            console.log(domino)
            return domino[domino.length-1][1] === domino[0][0];
        }
        const lastValue = domino[domino.length-1][1];
        const next = getDominoIndex(arr, lastValue);
        if(next !== false){
            arr.splice(next.index, 1)
            domino.push(next.domino);
            if(last){
                arr.push(last);
                last = false;
            }
        }
        else {
            if(last){
                arr.push(last);
                last = false;
            }
            last = domino.splice(domino.length-1, 1)[0];
        }
    }
    return false;
}


const arr = [
    [0, 6],
    [6, 4],
    [3, 6],
    [6, 2],
    [4, 5],
    [5, 0],
    [0, 1],
    [1, 2],
    [2, 0],
    [2, 3],
];

console.log(
    domino(arr)
);