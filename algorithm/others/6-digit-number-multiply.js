'use strict';

/**
 * Task
 * Find solution to
 * Simple solution, is just iterate all over array and find
 * From 111111 to 999999 we have 134400 numbers with unique digits
 * With every loop we descrease numbers
 * 
    step1 - 134400
    step2 - 18185
    step3 - 2289
    step4 - 339
    step5 - 54
    step6 - 54
    step7 - 3
 *
 */

`
        ABCDEF
       *......
        ______
        c....B
       E....D
      B....A
     D....C
    A....F
   F....E
  ___________
  ...........
Number should be unique
 `


const isUnique = (arr)=>{
    const hash = {};
    for(let i = 0, len = arr.length; i < len; i++){
        if(hash[arr[i]] == undefined){
            hash[arr[i]] = 1;
        }
        else{
            return false;
        }
    }
    return true;
}
const getUniqueDigitNumbers = (start, end) => {
    const arr = [];
    for(let i = start; i < end; i++){
        if(isUnique(i.toString().split(""))){
            arr.push(i);
        }
    }
    return arr;
}
const isEqual = (a, b, cond) => {
    const str1 = a.toString(),
        str2 = b.toString();
    if(str1[cond[0][0]] == str2[cond[0][1]]){
        if(str1[cond[1][0]] ==  str2[cond[1][1]] || str1[cond[2][0]] == str2[cond[2][1]]){
            return true;
        }
    }
    return false;
}
const solution = (from, to, table) => {
    let iteration = 0;
    const nums = [];
    nums[-1] = getUniqueDigitNumbers(from, to);
    for(let i = 0, len = table.length; i < len; i++){
        nums[i] = [];
        const prev = nums[i-1];
        for(let j = 0, numLen = prev.length; j < numLen; j++){
            let n = prev[j];
            let obj;
            if(n.a){
                obj = n;
                n = n.a;
            }
            for(let k = 0; k < 10; k++){
                iteration++;
                if(isEqual(n, n*k, table[i])){
                    const b = obj ? k.toString()+obj.b : k;
                    nums[i].push({a: n, b: parseInt(b)});
                }
            }
        }
    }
    console.log(nums);
    console.log("iteration: ", iteration);
    return nums[table.length-1];
}

const table = [
    [[2,0], [1,5], [1,6]],
    [[4,0], [3,5], [3,6]],
    [[1,0], [0,5], [0,6]],
    [[3,0], [2,5], [2,6]],
    [[0,0], [5,5], [5,6]],
    [[5,0], [4,5], [4,6]],
]
console.log(
    solution(111111, 999999, table)
)