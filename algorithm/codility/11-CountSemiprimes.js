(() => {
    /**
     * The idea is simple
     * 1. We calculate all primes less than half of semiprimes
     * 2. Then calculate all semiprimes
     * 3. Create inversed array with semiprimes, where index - is semiprime, and value - it's position
     * 4. Create indexedSemiPrimes array with all indexed
     * 5. For all values just calculate difference
     * 
     * https://app.codility.com/demo/results/training89XDVX-UAP/
     * 
     * @param {*} N 
     * @param {*} P 
     * @param {*} Q 
     */
    const solution = (N, P, Q) => {
        const size = P.length,
            sieve = [],
            primes = [],
            semiPrimes = [],
            inversedSemiPrimes = [],
            indexedSemiPrimes = [],
            result = [];
        const maxPrime = Math.floor(N / 2) + 1;
        for (let i = 2; i < maxPrime; i++) {
            sieve[i] = 1;
        }
        for (let i = 2; i < maxPrime; i++) {
            if (sieve[i]) {
                primes.push(i);
                for (let j = i * 2; j < maxPrime; j += i) {
                    sieve[j] = 0;
                }
            }
        }
        const primesLen = primes.length;
        for (let i = 0; i < primesLen; i++) {
            for (let j = i; j < primesLen; j++) {
                const semiPrime = primes[i] * primes[j];
                if (semiPrime <= N) {
                    semiPrimes.push(semiPrime);
                }
            }
        }
        semiPrimes.sort((a, b) => a - b);
        const semiPrimeLen = semiPrimes.length;
        for (let i = 0; i < semiPrimeLen; i++) {
            inversedSemiPrimes[semiPrimes[i]] = i + 1;
        }
        let index = 0;
        for (let i = 0; i <= N; i++) {
            if (inversedSemiPrimes[i]) {
                index = inversedSemiPrimes[i];
            }
            indexedSemiPrimes.push(index);
        }
        for (let i = 0; i < size; i++) {
            let num = indexedSemiPrimes[Q[i]] - indexedSemiPrimes[P[i]];
            //if starting value is already a semiprime
            if (inversedSemiPrimes[P[i]]) {
                num++;
            }
            result.push(num);
        }
        return result;
    }

    console.log(
        //JSON.stringify(solution(26, [1, 4, 16], [26, 10, 20])) == JSON.stringify([10, 4, 0]),
        solution(26, [1, 4, 16], [26, 10, 20]),
    );
})();
