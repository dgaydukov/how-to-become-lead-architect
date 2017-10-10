'use strict'


/**
 * Time complexity is O(sqrt(n)), because we need to check only first sqrt(n) values, instead of all n values
 *
 * @param n
 * @returns {boolean}
 */
const isPrime = (n) => {
    if(n < 2){
        return false;
    }
    const q = Math.floor(Math.sqrt(n))+1;
    for(let i = 2; i < q; i++){
        if(n % i == 0){
            return false;
        }
    }
    return true;
}

/**
 * Sieve with brute force, and small optimization
 * For every number we make check if it's prime
 * Time complexity is O(n*sqrt(n))
 *
 * @param arr
 * @returns {Array}
 */
const sieveBF = (n) => {
    const primes = [];
    for(let i = 0; i < n; i++){
        if(isPrime(i)){
            primes.push(i);
        }
    }
    return primes;
}


const sieveEratosthenes = (n) => {
    let iteration = 0;
    const arr = [],
        primes = [],
        q = Math.floor(Math.sqrt(n))+1;
    for(let i = 0; i < n; i++){
        arr.push(true);
    }
    for(let i = 2; i < q; i++){
        if(arr[i]){
            for(let j = i*i; j < n; j+=i){
                arr[j] = false;
            }
        }
    }
    for(let i = 2; i < n; i++){
        if(arr[i]){
            primes.push(i)
        }
    }
    return primes;
}

/**
 * More advanced version
 *
 * @param max
 * @returns {Array}
 */
const sieveEratosthenes2 = (max) => {
    const arr = [],
        primes = [];
    for (let i = 2; i <= max; ++i) {
        if (!arr[i]) {
            primes.push(i);
            for (let j = i << 1; j <= max; j += i) {
                arr[j] = true;
            }
        }
    }
    return primes;
}

const n = 100;
console.log(
    sieveBF(n),
    sieveEratosthenes(n),
    sieveEratosthenes2(n),
)