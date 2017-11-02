'use strict';


/**
 * Task
 * Executor has 2 commands
 * 1. multiply by 2
 * 2. add 1
 * Find the shortest path to transform 4 to 41
 *
 * The best approach is to go back from 41 to 4. And in every step checkout, if number is even, divide by 2, otherwise subtract 1
 */


/**
 * Walk from end to start
 *
 * @param start
 * @param end
 * @param list
 * @returns {Array}
 */
const executor = (start, end, list) => {
    let n = end;
    const arr = [];
    while(n > start){
        for(let key in list){
            key = parseInt(key);
            const value = list[key](n);
            if(Number.isInteger(value)){
                n = value;
                arr.push(key);
                break;
            }
        }
    }
    arr.reverse();
    return arr;
}

const executorPermsCount = (start, end, list, n) => {
    n = n || end;
    if(n < start){
        return 0;
    }
    if(n == start){
        return 1;
    }
    let result = 0;
    for(let key in list){
        const value = list[key](n);
        if(Number.isInteger(value)){
            result += executorPermsCount(start, end, list, value);
        }
    }
    return result;
}

const executorPerms = (start, end, list, n, path="") => {
    const result = [];
    n = n || end;
    if(n < start){
        return "";
    }
    if(n == start){
        path = path.split("").reverse().join("");
        return [path];
    }
    for(let key in list){
        const value = list[key](n);
        if(Number.isInteger(value)){
            result.push(...executorPerms(start, end, list, value, path+key))
        }
    }
    return result;
}


(()=>{
    const start = 4,
        end = 41,
        list = {
            1: (n) => n / 2,
            2: (n) => n - 1,
        };
    console.log(
        executor(start, end, list),
        executorPermsCount(start, end, list),
        executorPerms(start, end, list),
    )
})();

(()=>{
    const start = 4,
        end = 66,
        list = {
            1: (n) => Math.sqrt(n),
            2: (n) => n - 2,
        };
    console.log(
        executor(start, end, list),
        executorPermsCount(start, end, list),
        executorPerms(start, end, list),
    )
})();