# Node.js Express vs Koa


```typescript
(()=>{
    const express = require("express")
    const app = express();

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
    const Koa = require('koa');
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