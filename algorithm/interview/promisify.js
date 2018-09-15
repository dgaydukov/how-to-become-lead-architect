/**
 * Once I was asked to write promisify function
 *
 */

(()=>{
    const promisify = (func)=>{
        return (data)=>{
            return new Promise((resolve, reject)=>{
                func(data, (err, data)=>{
                    if(err){
                        return reject(err)
                    }
                    resolve(data)
                })
            })
        }
    }

    const asyncFunc = (data, cb)=>{
        let err = null
        if(data == 1){
            err = "run out of memory"
        }
        cb(err, {data: data})
    }

    const promised = promisify(asyncFunc)

    promised(1)
        .then(data=>{
            console.log(`data`, data)
        })
        .catch(ex=>{
            console.log(`ex: ${ex}`)
        })
});