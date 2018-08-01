# You don't need generators

### Problem Description

There is a new feature in ES6 called [Generator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*).
It really cool, have a lot of power, but in reality has no application in real world.
Generators serve 2 basic aims
* 1. Write asynchronous code in a synchronous way
* 2. To be kind of a program in itself (stop and continue executing, return data and get data from calling programs)

But both of this are completely useless.

* 1.  - You don't need to use generators for this. Since we have `async/await` you can just use it and be happy
* 2. - This is even more debatable feature. Because instead of using generator, just use simple class
```typescript
const generator = function* () {
    const a = yield 1
    const b = yield 2
    const c = yield 3
    return a + b + c
}


const gen = generator()

const value1 = gen.next()
const value2 = gen.next(value1.value + 1)
const value3 = gen.next(value2.value + 2)
const result = gen.next(value3.value + 3)
console.log(result.value) // the result should be 12
```

```typescript
class MyClass{
    a: number;
    b: number;
    c: number;

    getA(){
        return 1
    }

    getB(a){
        this.a = a
        return 2
    }

    getC(b){
        this.b = b
        return 3
    }

    getResult(c){
        this.c = c
        return this.a + this.b + this.c
    }
}

const my = new MyClass()
const value1 = my.getA()
const value2 = my.getB(value1 + 1)
const value3 = my.getC(value2 + 2)
const result = my.getResult(value3 + 3)
console.log(result)
```



### What the web says

The funny thing is, if you try to google `js generators real world example` you will get a lof of articles with examples, but almost none
example of production application. There are of course some articles, like [this](https://goshakkk.name/javascript-generators-understanding-sample-use-cases/)
one. But let's take a closer look. It says that `generators` have 3 real world applications. Let's check them

* [Brunch](http://brunch.io/) method [watch](https://github.com/brunch/brunch/blob/1955d0d03785797fb244d27e194450da9b31e4ae/test/watch.js#L20-37)
* [co](https://github.com/tj/co) js framework
* [redux-saga](https://github.com/redux-saga/redux-saga)




























