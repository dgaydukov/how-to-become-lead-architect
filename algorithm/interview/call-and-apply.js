/**
 *
 * Implement your own call & apply function
 *
 */
(()=>{
    function sum(a, b) {
        return this.sum + a + b;
    }

    function apply(fn, context, args){
        const len = args.length
        let func = "context.fn("
        for(let i = 0; i < len; i++){
            func += args[i]
            if(i < len-1){
                func += ", "
            }
        }
        func += ")"
        context.fn = fn
        return eval(func)
    }

    function applyES6(fn, context, args){
        context.fn = fn
        return context.fn(...args)
    }

    function call(fn, context){
        const args = []
        Object.keys(arguments).map(key=>{
            if(key > 1){
                args.push(arguments[key])
            }
        })
        return apply(fn, context, args)
    }


    console.log(
        apply(sum, {sum: 1}, [2, 3]),
        applyES6(sum, {sum: 1}, [2, 3]),
        call(sum, {sum: 1}, 2, 3),
    )
})();