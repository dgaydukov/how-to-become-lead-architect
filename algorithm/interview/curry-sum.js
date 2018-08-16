'use strict';

(()=>{
    /**
     * Write simple function that executes
     *
     * sum(2)(3)(); // -> 5
     * sum(1)(2)(3)(4)(); // -> 10
     */

    const sum = (a) => {
        let totalSum = a;
        const inner = (b) => {
            if(b == undefined){
                return totalSum;
            }
            else{
                totalSum += b;
                return inner;
            }
        }
        return inner;
    }

    const sum2 = (a) => {
        let totalSum = a;
        const inner = (b) => {
            totalSum += b;
            return inner;
        }
        inner.valueOf = () => totalSum;
        return inner;
    }

    console.log(
        sum(2)(3)(),
        sum(1)(2)(3)(4)(),

        sum2(2)(3),
        sum2(1)(2)(3)(4),
    )
})()


(()=>{
    // function sum(a,b) {return a+b}
// function mul(a,b) {return a*b}
// var a = make(1)(2)(3)(4)(5)
// var b = make(2)(3)(4)
//
// a(sum) // 15
// b(sum) // 9
// a(mul) // 120
// b(mul) // 24


// const sum = (a, b) => a+b;
// const mul = (a, b) => a*b;
//
// const make = (a) => {
//     return ()=>{}
// }
//
//
// var a = make(1)(2)(3);

// console.log(
//     a(sum),
//     a(mul)
// )


    function make(x){
        const args = [];
        const f = (y)=>{
            if(typeof y == 'function')
                return args.reduce(y);
            return args.push(y), f;
        }
        return f(x);
    }

    function make(x){
        function f(){
            var y = Array.prototype.pop.call(arguments);
            if(typeof y == 'function')return Array.prototype.reduce.call(arguments, y);
            return f = f.bind(null, y);
        }
        return f(x);
    }

    function make(x) {
        return f(function(y) { return x; });

        function f(h) {
            return function(x) {
                if(typeof x == 'function') return h(x);
                return f(function(y) { return y(x, h(y)); });
            }
        }
    }
})()