'use strict';

(() => {
    const solution = (arr1, arr2) => {
        const size = arr1.length,
            sieve = [],
            primes = [];
        let max = arr1[0];
        for (let i = 0; i < size; i++) {
            if (max < arr1[i]) {
                max = arr1[i];
            }
            if (max < arr2[i]) {
                max = arr2[i];
            }
        }
        for (let i = 2; i <= max; i++) {
            sieve[i] = 1;
        }
        for (let i = 2; i <= max; i++) {
            if (sieve[i]) {
                primes.push(i);
                for (let j = i * 2; j <= max; j += i) {
                    sieve[j] = 0;
                }
            }
        }
        let count = 0;
        const primeLen = primes.length;
        for (let i = 0; i < size; i++) {
            const n1 = arr1[i],
                n2 = arr2[i];
            let check = true;
            for (let j = 0; j < primeLen; j++) {
                if (!((n1 % primes[j] == 0 && n2 % primes[j] == 0) || (n1 % primes[j] != 0 && n2 % primes[j] != 0))) {
                    check = false;
                    break;
                }
            }
            if (check) {
                count++;
            }
        }
        return count;
    }

    const sieve = (n) => {
        const _sieve = [],
            primes = [];
        for(let i = 2; i < 2; i++){
            _sieve[i] = 1;
        }
        for(let i = 2; i < 2; i++){
            if(_sieve[i]){
                primes.push(i);
                for(let j = i * 2; j < n; j+=i){
                    _sieve[j] = 0;
                }
            }
        }
        return primes;
    }

    console.log(sieve(10**6))

    console.log(
        // solution([15, 10, 9], [75, 30, 5]) == 1,
        // solution([2, 1, 2], [1, 2, 2]) == 1,
        // solution([7, 17, 5, 3], [7, 11, 5, 2]) == 2,
        // solution([3, 9, 20, 11], [9, 81, 5, 13]) == 2,

        solution([3, 9, 20, 11], [9, 81, 5, 13]),
    )
})();