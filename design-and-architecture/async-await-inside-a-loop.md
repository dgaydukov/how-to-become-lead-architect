# Async Await inside a Loop

### Problem Description
When you use async await construction with a defined set of async functions everything is clear. But when you have a list of functions, things get tricky
, so you have to use loops. But from may [previous](https://github.com/dgaydukov/how-to-become-a-senior-js-developer/blob/master/design-and-architecture/async-await-vs-promise.md)
you know that `Async/Await` is just synthetic sugar above `Promise`. When you got this, everything become clear. 
So loops can be executed in 2 ways. One by one - sequential or all at once - parallel. So i will show en example of both of this.
And also i will show anti-pattern that you should avoid in production code.


```typescript
/**
* Imitate user balance ajax request
* @param arr
* @returns {Promise<number>}
*/
const getBalance = (userId: number) => {
    return new Promise<number>((resolve, reject)=>{
        setTimeout(()=>{
            resolve(userId * 10)
        }, 1000)
    })
}

const arr = [1, 2, 3, 4, 5]

/**
* Parallel execution, analogy to Promise.all
*/
const parallelLoop = async(arr)=>{
    let total = 0
    const list = []
    const len = arr.length
    for(let i = 0; i < len; i++){
        list.push(getBalance(arr[i]))
    }
    const data = await Promise.all(list)
    data.map(balance=>{
        total += balance
    })
    return total
}

/**
* Sequential execution, analogy to Promise.mapSeries
*/
const sequentialLoop = async(arr)=>{
    let total = 0;
    const len = arr.length
    for(let i = 0; i < len; i++){
        const balance = await getBalance(arr[i])
        total += balance
    }
    return total
}

parallelLoop(arr).then(total=>console.log("parallelLoop", total))
sequentialLoop(arr).then(total=>console.log("sequentialLoop", total))
```


### Anti-pattern

Here we just execute multiple callback without any return. If you run it will return `completeParallelLoop 0`

```typescript
/**
* Antipattern - just execute multiple callback in parallel
*/
const parallelLoop1 = async(arr)=>{
    let total = 0
    arr.forEach(async(userId)=>{
        const balance = await getBalance(userId)
        total += balance
    })
    return total
}

/**
* Behave the same way
*/
const parallelLoop2 = async(arr)=>{
    let total = 0;
    arr.map(async(userId)=>{
        const balance = await getBalance(userId)
        total += balance
    })
    return total
}

parallelLoop1(arr).then(total=>console.log("completeParallelLoop", total))
parallelLoop2(arr).then(total=>console.log("completeParallelLoop", total))
```