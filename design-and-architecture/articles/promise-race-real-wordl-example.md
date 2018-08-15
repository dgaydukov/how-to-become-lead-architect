# Promise.race real world example

## Content
* [Problem Description](#problem-description)
* [Browser test example](#browser-test-example)

### Problem Description

From time to time i'm being asked what is the real use case for `Promise.race`.
And really, for `Promise.all` everything is clear. You have a bunch of promises and you want en event when all of them resolved.
If you need to run something when promise done you can write logic directly into it. 
But there is one use case when you will really need this functionality. And it's when you want to execute async function that doesn't have
timeout built into it. Almost all ajax request libraries have built in timeout, take [axios](https://www.npmjs.com/package/axios) for example.
But what if you need to execute file read. You can use `fs.readFile` function, but if the file too big it can take up to hours to load.
The error callback will fire only if the path is incorrect or file is broken, otherwise it will try to load it. So let's say you need to read files
that on average takes from 1 up to 10 seconds, but you have maximum 5 sec. In this case you can use `Promise.race`, the first argument should be
`fs.readFile` itself and the second should be `Promise` that would reject after delay time.

```typescript
const fs = require('fs')

/**
* return array of 2 promises
* The first is fs.readFile
* The second is simple timeout function, that will reject after specified delay time
*/
const asyncReadTimeout = (path, delay) => {
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
            setTimeout(reject, delay * 1000, "request timeout")
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




### Browser test example

Because the previous example should be executing in running Node.js instance, I rewrite the code a little, so you can run it everywhere
even in you browser's console. I just change first promise that read file to simple `setTimeout`

```typescript
const asyncReadTimeout = (delay) => {
    return Promise.race([
        new Promise(resolve => {
            setTimeout(resolve, 3 * 1000, "very large content")
        }),
        new Promise((resolve, reject)=>{
            setTimeout(reject, delay * 1000, "request timeout")
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
