/**
 * output all permutations from 1 to n
 *
 * @param n
 * @returns {number}
 */
const printPerms = (n) => {
    if(n == 1){
        return [1];
    }
    if(n == 2){
        return [[1,2], [2,1]];
    }
    const arr = [];
    for(let i = 1; i <= n; i++){

    }
    return arr;
}


console.log(
    printPerms(4)
);



const permutator = (inputArr) => {
    let result = [];

    const permute = (arr, m = []) => {
        if (arr.length === 0) {
            result.push(m.join(" "))
        } else {
            for (let i = 0; i < arr.length; i++) {
                let curr = arr.slice();
                let next = curr.splice(i, 1);
                permute(curr.slice(), m.concat(next))
            }
        }
    }

    permute(inputArr)

    return result;
}




console.log(
    permutator([1,2,3,4])
)


/**
 * Permutation solution using first & next functions
 *
 * @param arr
 * @returns {*[]}
 */
const perms = (arr) => {
    const perms = [first(arr).join(" ")];
    let n = 0;
    while(arr = next(arr)){
        perms.push(arr.join(" "));
        n++;
        if(n == 30){
            break;
        }
    }
    return perms;
}

const first = (arr) => arr.sort();

const next = (arr) => {
    const len = arr.length;
    for(let i = len-1; i > 0; i--){
        if(arr[i-1] < arr[i]){
            const swap = arr[i-1];
            arr[i-1] = arr[i];
            arr[i] = swap;
            return [].concat(arr.slice(0,i), arr.slice(i, len).sort());
        }
    }
    return false;
}


console.log(
    perms([1,2,3,4])
);