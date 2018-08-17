# Multi-threading Node.js

### Description

Node.js is single-threaded asynchronous language. Many people confuse this ideas, because it's tricky subject.
Yes, Node.js runs in single thread, you can't just take any code, run it in parallel and then get data to main thread.
But you can do this with some special code. And this is what asynchronous means. What do you think happens when you run
```javascript
var fs = require('fs');

fs.readFile('example.txt', 'utf8', function(err, data) {  
    if (err) throw err;
    console.log(data);
});
```
Basically when you run `fs.readFile` Node.js start this in another thread. The current thread is continue.
New thread executes, and when it ready it return value (in this case file content) to current thread.
So as you can see Node.js is kind of half-multi-threaded. You can't create threads by yourself (well actually you can, and I will show you how,
but there are no easy out of the box solutions), but some operations (like fire reading, ajax requests and so on..) create threads under the hood
by themselves. You have no control over this threads. You can just wait response of this threads in callback.

### Create multi-threaded code
Well actually you can make Node.js run in parallel, and my function `runParallel` is an attempt to show how to run code in another thread.
For this you have to use [child_process](https://nodejs.org/api/child_process.html) module.
You can run any code inside `exec` and listen in callback for results. By doing this you create another thread that has no connection 
to your main thread. Check out the code below for more details:

```typescript
const exec = require('child_process').exec
const cpuNum = require('os').cpus().length


/**
 * Simple single threaded version
 * Every task execute in main single thread (event loop is busy) one by one
 * @param n
 */
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

/**
 * Simple realization of multi-threading
 * Every hard calculation executes in another thread by the means of child_process module
 * So if you have to run 10 calculations, it's just fire 10 exec of this code
 * They all run at the same time
 * 
 * @param n
 */
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


/**
 * More advanced version of parallel execution
 * Previous example is weak because what if you want to run 1000 or even 10.000 parallel calculation
 * In this case the system will kill most of them, or they will run forever
 * So this version is more advanced, it only runs 2 * cpuNum threads (2 * number of cpu cores)
 * So we have a queue to execute. And always run this number. Whenever any process finish, we run another one from the queue
 * 
 * @param n
 */
const runParallel = (n)=>{
    return new Promise((resolve, reject)=>{
        const data = []
        let left = n
        const num = 2 * cpuNum
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
 * On average we have 50% advantage
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
runSequential(50)
    .then( data=>{
        const end = ((Date.now()-start)/1000).toFixed(2)
        console.log("runSequential", data, end)
    })
    .catch(ex=>{
        console.log("runSequential", ex)
    })


/**
 * on average: 150 sec
 * This also gives us 50% but this will work for small n, less than 300
 * When you want to run 5000, this approach will fail
 */
completeParallel(50)
    .then( data=>{
        const end = ((Date.now()-start)/1000).toFixed(2)
        console.log("completeParallel", data, end)
    })
    .catch(ex=>{
        console.log("completeParallel", ex)
    })
```