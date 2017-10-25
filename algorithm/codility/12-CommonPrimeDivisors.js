'use strict';


const isPrime = (n) => {
    const sqrt = Math.floor(Math.sqrt(n));
    for(let i = 2; i <= sqrt; i++){
        if(n % i == 0){
            return false;
        }
    }
    return true;
}


const isSamePrimeDivisors = (a, b) => {
    const primes1 = [],
        primes2 = [];
    for(let i = 2; i <= a; i++){
        if(isPrime(i) && a % i == 0){
            primes1.push(i);
        }
    }
    for(let i = 2; i <= b; i++){
        if(isPrime(i) && b % i == 0){
            primes2.push(i);
        }
    }
    console.log(primes1, primes2)
    return JSON.stringify(primes1) == JSON.stringify(primes2)
}

/**
 * Naive solution
 * For every pairs we check if they have the same amount of divisort
 *
 * @param arr1
 * @param arr2
 * @returns {number}
 */
const solution = (arr1, arr2) => {
    const len = arr1.length;
    let n = 0;
    for(let i = 0; i < len; i++){
        if(isSamePrimeDivisors(arr1[i], arr2[i])){
            n++;
        }
    }
    return n;
}




console.log(
    solution([15, 10, 9], [75, 30, 5])
)