'use strict';

(() => {
    const __gcd = (a, b) => {
        if(a % b == 0){
            return b;
        }
        return __gcd(b, a%b)
    }
    const solution = (arr1, arr2) => {
        const size = arr1.length,
            sieve = [],
            primes = [];
        let max = 0;
        for (let i = 0; i < size; i++) {
            if (max < arr1[i]) {
                max = arr1[i];
            }
            if (max < arr2[i]) {
                max = arr2[i];
            }
        }
        max = Math.ceil(Math.sqrt(max))+1;
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
            let check = n1 == n2;
            if(!check){
                const gcd = __gcd(n1, n2);
                const gcdDivisors = {1: 1};
                let r1 = n1 / gcd, r2 = n2/gcd;
                let _r1 = true, _r2 = true;
                const list = [];
                for (let j = 0; j < primeLen; j++) {
                    const v = primes[j];
                    if(gcd % v == 0){
                        gcdDivisors[v]=1;
                    }
                    if(r1 % v == 0){
                        list.push(v)
                        if(r1/v > max){
                            list.push(r1/v);
                        }
                        _r1= false;
                    }
                    if(r2 % v == 0){
                        list.push(v)
                        if(r2/v > max){
                            list.push(r2/v);
                        }
                        _r2= false;
                    }
                }
                if(_r1){
                    list.push(r1);
                }
                if(_r2){
                    list.push(r2);
                }
                check = true;
                for(let j = 0; j < list.length; j++){
                    if(!gcdDivisors[list[j]]){
                        check = false;
                        break;
                    }
                }
                console.log(n1,n2, gcd, r1,r2, gcdDivisors, check, list, max)
            }
            if (check) {
                count++;
            }
        }
        return count;
    }

    const solution2 = (arr1, arr2) => {
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

    // for(let i = 0; i < 10**5; i++){
    //     const arr1=[], arr2=[];
    //     for(let j = 0; j < 4; j++){
    //         arr1.push(Math.round(Math.random()*100)||1);
    //         arr2.push(Math.round(Math.random()*100)||1);
    //     }
    //     const r1 = solution(arr1, arr2);
    //     const r2 = solution2(arr1, arr2);
    //     if(r1 != r2){
    //         console.log(r1, r2, arr1, arr2);
    //     }
    // }

    console.log(
        // solution([15, 10, 9], [75, 30, 5]) == 1,
        // solution([2, 1, 2], [1, 2, 2]) == 1,
        // solution([7, 17, 5, 3], [7, 11, 5, 2]) == 2,
        // solution([3, 9, 20, 11], [9, 81, 5, 13]) == 2,
        // solution([1, 35, 12, 64], [1, 119, 126, 62]) == 1,
        // solution([24, 64 ], [ 72, 62 ]) == 1,

        solution([ 2 ], [ 72 ]),
    )
})();