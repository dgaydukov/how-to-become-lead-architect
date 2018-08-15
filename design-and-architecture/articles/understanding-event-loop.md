# Understanding Node.js Event Loop

### Problem Description

Let's consider the following code
```typescript
console.log("start")
setImmediate(()=>{
    console.log("setImmediate")
})
process.nextTick(()=>{
    console.log("process.nextTick")
})
new Promise(resolve=>{
    console.log("resolving")
    resolve({})
})
    .then((data)=>console.log("resolved", data))
console.log("finish")
```

The output will be
```shell
start
resolving
finish
process.nextTick
resolved {}
setImmediate
```

What it tells us?
Well a few things

* 1. `Promise` put execution into event loop.
* 2. `process.nextTick` executes right away after the main code
* 3. `setImmediate` fires last












