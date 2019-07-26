(() => {
    /**
     * Naive solution
     * So called brute-force. Basically we create a list of all primes from 2 to max (max - is maximum value from two arrays)
     * Then for every element we check, that each prime either a divider or not
     * The problem is that by the method we can calculate primes up to 10**7, that's why solution is not optimal
     * https://app.codility.com/demo/results/trainingKY4ZGC-YSP/
     * 
     * 
     * @param {*} arr1 
     * @param {*} arr2 
     */
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


    console.log(
        solution([15, 10, 9], [75, 30, 5]) == 1,
        solution([2, 1, 2], [1, 2, 2]) == 1,
        solution([7, 17, 5, 3], [7, 11, 5, 2]) == 2,
        solution([3, 9, 20, 11], [9, 81, 5, 13]) == 2,
    )
})();


'use strict';

(() => {
    /**
     * Simple function to find Greater common divisor of 2 numbers using Euclid Algorithm
     * 
     * @param {*} a 
     * @param {*} b 
     */
    const __gcd = (a, b) => {
        if (a % b == 0) {
            return b;
        }
        return __gcd(b, a % b)
    }
    /**
     * All magic goes here
     * 1. If 2 numbers are equal than they have all common divisors (both primes and not)
     * 2. If at least one of the number 1, then they don't have any prime divisors (since 1 is not prime and don't have any divisors)
     * 3. If GCD of 2 numbers 1 (so they don't have any common divisors) that also means there is no common prime divisors
     * 4. We should donwgrade both numbers with gcd until they reach 1
     * 
     * https://app.codility.com/demo/results/trainingGSPU76-JE4/
     * 
     * @param {*} a 
     * @param {*} b 
     */
    const __check = (a, b) => {
        if (a == b) {
            return true;
        }
        if (a == 1 || b == 1) {
            return false;
        }
        const gcd = __gcd(a, b);
        if (gcd == 1) {
            return false;
        }
        let m = a / gcd, n = b / gcd;
        while (m != 1) {
            const _m = __gcd(m, gcd);
            if (_m == 1) {
                return false;
            }
            m /= _m;
        }
        while (n != 1) {
            const _n = __gcd(n, gcd);
            if (_n == 1) {
                return false;
            }
            n /= _n;
        }
        return true;
    }
    const solution = (arr1, arr2) => {
        const size = arr1.length;
        let count = 0;
        for (let i = 0; i < size; i++) {
            if (__check(arr1[i], arr2[i])) {
                count++;
            }
        }
        return count;
    }

    console.log(
        solution([15, 10, 9], [75, 30, 5]) == 1,
        solution([2, 1, 2], [1, 2, 2]) == 1,
        solution([7, 17, 5, 3], [7, 11, 5, 2]) == 2,
        solution([3, 9, 20, 11], [9, 81, 5, 13]) == 2,
        solution([1, 35, 12, 64], [1, 119, 126, 62]) == 1,
        solution([24, 64], [72, 62]) == 1,
    )
})();