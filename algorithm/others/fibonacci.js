'use strict';

(()=>{
    /**
     * Recursion version. But take too much time to calculate for 100
     *
     * @param n
     * @returns {*}
     */
    const fib = (n)=>{
        if(n == 1 || n == 2){
            return 1;
        }
        return fib(n-1)+fib(n-2);
    }


    console.log(fib(10));
})();


(()=>{
    /**
     * Dynamic programming version. Take no time to calculate for 100
     *
     * @param n
     * @returns {*}
     */
    const fib = (n)=>{
        const f = [];
        f[1] = 1;
        f[2] = 2;
        for(let i = 3; i < n; i++){
            f[i] = f[i-1]+f[i-2];
        }
        return f[n-1];
    }


    console.log(fib(100));
})();



(()=>{
    /**
     * Simple fibonacci with loop and 2 variables
     *
     * @param n
     * @returns {number}
     */
    const fib = (n)=>{
        let result = 0;
        let first = 1;
        let second = 1;
        for(let i = 2; i < n; i++){
            result = first + second
            first = second
            second = result
        }
        return result;
    }


    console.log(fib(100));
})();


