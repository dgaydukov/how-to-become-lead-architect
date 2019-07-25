(() => {
    const solution = (N, P, Q) => {
        const size = P.length,
            primes = [],
            semiPrimes = [];
        N = 100;
        for(let i = 2; i < N; i++){
            primes[i] = 1;
        }
        for(let i = 2; i < N; i++){
            if(primes[i]){
                for(let j = i * 2; j < N; j+=i){
                    primes[j] = 0;
                }
            }
        }
        for(let i = 2; i < N; i++){
            console.log(primes[i])
        }
    }

    console.log(
        //JSON.stringify(solution(26, [1, 4, 16], [26, 10, 20])) == JSON.stringify([10, 4, 0]),
        solution(26, [1, 4, 16], [26, 10, 20])
    );
})();
