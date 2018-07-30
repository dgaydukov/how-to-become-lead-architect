# Async Await inside the Loop

### Problem Description



```typescript
const getBalance = (userId: number) => {
    return new Promise<number>((resolve, reject)=>{
        setTimeout(()=>{
            resolve(userId * 10)
        }, 1000)
    })
}
const arr = [1, 2, 3, 4, 5]

const completeParallelLoop = async(arr)=>{
    let total = 0
    arr.forEach(async(userId)=>{
        const balance = await getBalance(userId)
        total += balance
    })
    return total
}


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

const sequentialLoop = async(arr)=>{
    let total = 0;
    const len = arr.length
    for(let i = 0; i < len; i++){
        const balance = await getBalance(arr[i])
        total += balance
    }
    return total
}

completeParallelLoop(arr).then(total=>console.log("completeParallelLoop", total))
parallelLoop(arr).then(total=>console.log("parallelLoop", total))
sequentialLoop(arr).then(total=>console.log("sequentialLoop", total))
```