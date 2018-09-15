/**
 * Task:
 * We have 10 async function, that we want to execute sequentially one by one
 * We don't have bluebird (Promise.mapSeries) and don't have async/await
 * So we have to create it by ourselves
 *
 */
(()=>{
    /**
     * async function
     *
     * @param n
     * @returns {Promise<any>}
     */
    const asyncFunc = (n)=>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(`call: ${n}`)
            }, 1000)
        })
    }

    /**
     * Solution
     * Basically with our variable p, we chaining promises
     * So it would be the same as .then().then().then() ... and so on
     */
    let p = asyncFunc(1)
    for(let i = 2; i <= 10; i++){
        p = p.then(data=>{
            console.log("success", i-1, data)
            return asyncFunc(i)
        })
    }
    p.then(data=>{
        console.log("--finish--", data)
    })
        .catch(ex=>{
            console.log(`Error: ${ex}`)
        })
})();