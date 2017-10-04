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