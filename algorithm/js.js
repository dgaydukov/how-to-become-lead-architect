//'use strict'


/* const fact = (n) => {
    if(n == 1){
        return 1;
    }
    return n * fact(n-1);
}

const fact_tco = (n, acc=1) => {
    if(n == 1){
        return acc;
    }
    return fact_tco(n-1, n * acc);
}

console.log(
    fact(5),
    fact_tco(5)
) */

/**
 * https://toster.ru/q/425662
 */
const f = (n)=>{
    const matches = {
        0: 6,
        1: 2,
        2: 5,
        3: 5,
        4: 4,
        5: 5,
        6: 6,
        7: 3,
        8: 7,
        9: 6,
    };
    const getMatchNum = (n)=>{
        let num = 0;
        n = n.toString();
        const len = n.length;
        for(let i = 0; i < len; i++){
            num += matches[n[i]];
        }
        return num;
    }
    const arr = [];
    for(let i = 0; i < n; i++){
        arr.push(i);
    }
    arr.sort((a,b)=>{
        if(a.toString().length == b.toString().length){
            const am = getMatchNum(a);
            const bm = getMatchNum(b);
            if(am == bm){
                return a-b;
            }
            return am-bm;
        }
        return a-b;
    });
    return arr;
}

console.log(
    //f(10**3),
)

/**
 * @param {*} a 
 * @param {*} k 
 */
function maxLength(a, k) {
    const len = a.length;
    let sum = 0,max=0;
    for(let i = 0; i < len; i++){
        sum += a[i];
        for(let j = i+1; j < len; j++){
            sum += a[j];
            if(sum > k){
                sum -= a[j];
                if(max < j){
                    max = j;
                }
                sum = 0;
                break;
            }
        }
        sum -= a[i];
    }
    return max;
}

console.log(
    maxLength([3,1,2,1],4)
)