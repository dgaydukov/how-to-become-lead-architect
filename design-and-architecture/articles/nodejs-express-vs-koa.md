# Node.js Express vs Koa

### Description

What framework are you using in Node.js? Many people by default use express. And it's the best choice for beginners. But when you learn
more & more you should try some other stuff. Why ? Well, First of all express is not the best choice, but even if it was the best, you should
always ask, why somebody created another one. So just try it. In this article we will compare 2 frameworks 
[express](https://github.com/expressjs/express) and [Koa](https://github.com/koajs/koa)


### Meet Koa

Koa is more advanced framework. The funny thing, is that Koa was written by the same team who created express.
This makes it even more interesting. Why they decided to write Koa, and not just add some nice functionality to express. Well, the answer is
that Koa completely different. That's why you should try it anyway. One cool feature is cascading. By using `async/await` construction
you can call next middleware in current one. Here is a small example:

```typescript
const express = require("express");
const Koa = require('koa');

(()=>{
    const app = express()
    let start
    
    app.use("/", (req, res, next)=>{
        start = Date.now();
        next()
    });
    
    app.get("/", (req, res)=>{
        for(let i=0;i<10**9;i++){}
        const ms = Date.now() - start;
        console.log(`time taken: ${ms}`)
        res.set('X-Response-Time', `${ms}ms`);
        res.send("Hello World!")
    });

    app.listen(4411)
})();


(()=>{
    const app = new Koa();

    app.use(async (ctx, next) => {
        await next();
        const rt = ctx.response.get('X-Response-Time');
        console.log(`${ctx.method} ${ctx.url}  ${rt}`);
    });

    app.use(async (ctx, next) => {
        const start = Date.now();
        await next();
        const ms = Date.now() - start;
        ctx.set('X-Response-Time', `${ms}ms`);
    });

    app.use(async ctx => {
        for(let i=0;i<10**9;i++){}
        ctx.body = 'Hello World';
    });

    app.listen(4412);
})()
```