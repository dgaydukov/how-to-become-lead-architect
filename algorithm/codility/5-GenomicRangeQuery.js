'use strict';


/**
 * Dumb solution with O(N*M) complexity
 *
 * @param s
 * @param p
 * @param q
 * @returns {Array}
 */
const solution = (s, p, q) => {
    const len = p.length,
        hash = {A: 1, C: 2, G: 3, T: 4},
        arr = [];
    for(let i = 0; i < len; i++){
        let min = 4;
        for(let j = p[i]; j <= q[i]; j++){
            if(min > hash[s[j]]){
                min = hash[s[j]];
            }
        }
        arr.push(min);
    }
    return arr;
}


/**
 * Smart solution
 *
 *
 * @param s
 * @param p
 * @param q
 * @returns {Array}
 */
const solution = (s, p, q) => {
    const len = p.length,
        l = s.length,
        arr = [],
        A = [0],
        C = [0],
        G = [0];
    let a=0,
        c=0,
        g=0;
    for(let i = 0; i < l; i++){
        if(s[i] == "A"){
            a++;
        }
        if(s[i] == "C"){
            c++;
        }
        if(s[i] == "G"){
            g++;
        }
        A[i+1] = a;
        C[i+1] = c;
        G[i+1] = g;
    }
    for(let i = 0; i < len; i++){
        if(A[q[i]+1] - A[p[i]] > 0){
            arr.push(1);
        }
        else if(C[q[i]+1] - C[p[i]] > 0){
            arr.push(2);
        }
        else if(G[q[i]+1] - G[p[i]] > 0){
            arr.push(3);
        }
        else{
            arr.push(4);
        }
    }
    return arr;
}


console.log(
    solution('CAGCCTA', [2, 5, 0], [4, 5, 6]),
    solution('A', [0], [0]),
    "[2, 4, 1]"
);