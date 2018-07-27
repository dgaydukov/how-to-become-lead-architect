# Promise.race real world example

### Problem Description

From time to time i'm being asked what is the real use case for `Promise.race`.
And really, for `Promise.all` everything is clear.

```typescript
const fs = require('fs')


const asyncReadTimeout = (path, timeout) => {
    return Promise.race([
        new Promise((resolve, reject) => {
            fs.readFile(path, function read(err, data) {
                if (err) {
                    return reject(err)
                }
                resolve(data)
            })
        }),
        new Promise((resolve, reject)=>{
            setTimeout(reject, timeout * 1000, "request timeout")
        })
    ])
}


asyncReadTimeout("./some-path", 5)
    .then(data=>{
        console.log("data:", data)
    })
    .catch(ex=>{
        console.log("error:", ex)
    })
```


```typescript
const asyncReadTimeout = (timeout) => {
    return Promise.race([
        new Promise(resolve => {
            setTimeout(resolve, 3 * 1000, "very large content")
        }),
        new Promise((resolve, reject)=>{
            setTimeout(reject, timeout * 1000, "request timeout")
        })
    ])
}

asyncReadTimeout(4)
    .then(data=>{
        console.log("data:", data)
    })
    .catch(ex=>{
        console.log("error:", ex)
    })
```
