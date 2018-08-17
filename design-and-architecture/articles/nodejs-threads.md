# Node.js threads

### Description

```typescript
(()=>{
    
const exec = require('child_process').exec
const cpuNum = require('os').cpus().length



const runSequential = (n)=>{
    return new Promise((resolve, reject)=>{
        const data = []
        const hardTask = (n)=>{
            const start = Date.now()
            for(let i = 0; i < 5*10**9; i++){}
            return {n: n, time: Date.now()-start}
        }
        for(let i = 0; i < n; i++){
            const result = hardTask(i)
            data.push(result)
        }
        resolve(data)
    })
}


const completeParallel = (n)=>{
    return new Promise((resolve, reject)=> {
        let left = n
        const data = []
        const _exec = (n)=> {
            exec(`node -e "
            const hardTask = (n)=>{
                const start = Date.now()
                for(let i = 0; i < 5*10**9; i++){}
                console.log({n: n, time: Date.now()-start})
            };
            hardTask(${n})"`,
                (error, stdout, stderr) => {
                    if(error || stderr){
                        return reject({
                            error: error,
                            stdout: stdout,
                            stderr: stderr
                        })
                    }
                    left--
                    data.push(stdout)
                    if(left == 0){
                        resolve(data)
                    }
                })
        }
        for (let i = 0; i < n; i++) {
            _exec(i)
        }
    })
}

const runParallel = (n)=>{
    return new Promise((resolve, reject)=>{
        const data = []
        let left = n
        const num = cpuNum * 2
        const done = {}
        const todo = []
        for(let i = 1; i <= n; i++){
            todo.push(i)
        }
        const _exec = (n)=> {
            exec(`node -e "
            const hardTask = (n)=>{
                const start = Date.now()
                for(let i = 0; i < 5*10**9; i++){}
                console.log({n: n, time: Date.now()-start})
            };
            hardTask(${n})"`,
                (error, stdout, stderr) => {
                    if(error || stderr){
                        return reject({
                            error: error,
                            stdout: stdout,
                            stderr: stderr
                        })
                    }
                    delete done[n]
                    left--
                    data.push(stdout)
                    if(left == 0){
                        resolve(data)
                    }
                })
        }
        const interval = setInterval(()=>{
            if(Object.keys(done).length < num){
                const i = todo.shift()
                done[i] = i
                _exec(i)
            }
            if(todo.length == 0){
                clearInterval(interval)
            }
        }, 100)
    })
}

console.log('run')
const start = Date.now()

/**
 * on average: 152 sec
 * On average we have 37% advantage
 */

runParallel(50)
    .then( data=>{
        const end = ((Date.now()-start)/1000).toFixed(2)
        console.log("runParallel", data, end)
    })
    .catch(ex=>{
        console.log("runParallel", ex)
    })

/**
 * on average: 268 sec
 */
// runSequential(50)
//     .then( data=>{
//         const end = ((Date.now()-start)/1000).toFixed(2)
//         console.log("runSequential", data, end)
//     })
//     .catch(ex=>{
//         console.log("runSequential", ex)
//     })


/**
 * on average: 150 sec
 */
// completeParallel(50)
//     .then( data=>{
//         const end = ((Date.now()-start)/1000).toFixed(2)
//         console.log("completeParallel", data, end)
//     })
//     .catch(ex=>{
//         console.log("completeParallel", ex)
//     })
})()
```