# Promise Parallel vs Sequential execution

### Problem Description

We all know about great method `Promise.all`, but all it doing is just wait till the last promise will resolve, and then return all results.
So basically all promise that you pass to `Promise.all`, are already executing. But what if you need to execute one after another.
For this we have method `Promise.mapSeries`, but to use it you have to use [bluebird](https://www.npmjs.com/package/bluebird).
The point is that you have to pass to `Promise.mapSeries` not already executing promises, but promise wrapped in function, so this 
will guarantee that every next promise will be executing only after the previous have resolved.
Here you can check out an example:
```typescript
import {Promise} from "bluebird"

const asyncFunc = (i) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`done: ${i}`)
        }, 1000)
    })
}

const parallelPromiseList = []
const sequentialPromiseList = []
for(let i = 0; i < 10; i ++){
    parallelPromiseList.push(asyncFunc(i))
    sequentialPromiseList.push(asyncFunc.bind(this, i))
}

/**
* here in parallelPromiseList we have already executing promises
*/
Promise.all(parallelPromiseList)
    .then(data=>{
        console.log("parallelPromiseList resolve", data)
    })
    .catch(ex=>{
        console.log("parallelPromiseList fail", ex)
    })

/**
* here in sequentialPromiseList we have wrapped promises, that will execute one after another
*/
Promise.mapSeries(sequentialPromiseList, func=>{
        return func()
    })
    .then(data=>{
        console.log("sequentialPromiseList resolve", data)
    })
    .catch(ex=>{
        console.log("sequentialPromiseList fail", ex)
    })
```


### Real world example

In [one](https://github.com/dgaydukov/nodejs-cce-blockchain-ethereum) of my project, I had a problem that Ethereum node takes on average 0.5 to 1 second
to create new address. Suppose you need to create 100 ethereum addresses. If you pass 100 promises to `Promise.all` the Node will fail, because
it's difficult operation to create address. So for this case i use a practise to create address one after another. And if i have to create 100 hundred, 
I put them into queue. [Here](https://github.com/dgaydukov/nodejs-cce-blockchain-ethereum/blob/master/src/create-100-addresses.ts) your can check it out.
