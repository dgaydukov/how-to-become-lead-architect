

(()=>{
    const asyncFunc = (n)=>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(`call: ${n}`)
            }, 1000)
        })
    }
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