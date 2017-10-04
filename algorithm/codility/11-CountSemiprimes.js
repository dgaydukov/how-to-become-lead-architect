'use strict';


const solution = (N, P, Q) => {
    const len = P.length;
    const semiPrimes = getSemiPrimes(getPrimes(Math.max(...P, ...Q))),
        l = semiPrimes.length;
    const arr = [];
    for(let i = 0; i < len; i++){
        arr[i] = 0;
        for(let j = 0; j < l; j++){
            if(semiPrimes[j] >= P[i] && semiPrimes[j]<=Q[i]){
                arr[i]++;
            }
        }
    }
    return arr;
}


const getSemiPrimes = (arr)=>{
    const len = arr.length,
        semiPrimes = [];
    for(let i = 0; i < len; i++){
        for(let j = i; j < len; j++){
            semiPrimes.push(arr[i]*arr[j]);
        }
    }
    return semiPrimes;
}


const getPrimes = (n) => {
    let iteration = 0;
    const primes = [];
    for(let i = 2; i <=n; i++){
        let isPrime = true;
        const q = Math.floor(Math.sqrt(i));
        for(let j = 2; j <=q; j++){
            iteration++;
            if(i % j == 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            primes.push(i)
        }
    }
    //console.log("iteration: "+iteration)
    return primes;
}



function getPrimes2(max) {
    let iteration = 0;
    var sieve = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                iteration++;
                sieve[j] = true;
            }
        }
    }
    //console.log("iteration: "+iteration)
    return primes;
}

console.log(
    solution(26, [1, 4, 16], [26, 10, 20]),
);