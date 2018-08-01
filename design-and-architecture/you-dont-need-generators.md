# You don't need generators

### Problem Description

There is a new feature in ES6 called [Generator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*).
It really cool, have a lot of power, but in reality has no application in real world.
Generators serve 2 basic aims
* 1. Write asynchronous code in a synchronous way
* 2. To be kind of a program in itself (stop and continue executing, return data and get data from calling programs)

But both of this are completely useless.

* 1. asynchronous code in a synchronous way - you don't need to use generators for this. Since we have `async/await` you can just use it and be happy
* 2. a program in itself - This is even more debatable feature. Because instead of using generator, just use simple class
Let's imagine we have a generator that return values, we do some calculation and send them back and in the end it gives us some amount.
Here how it looks like with generators
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

But why do we need a code like this, wen we can just create a class that do the same job (return 3 values, takes back 3 values and return final results).
When we are using `Class` instead of `generator` every call is clear. In the previous example when we call `gen.next()` it's not exactly clear
what functionality you call. In `Class` example everything is clear if you call `my.getA()` you getA
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

So as you can see the idea to use a generator as a program in itself is completely useless.


### What the web says

The funny thing is, if you try to google `js generators real world example` you will get a lof of articles with examples, but almost none
example of production application. There are of course some articles, like [this](https://goshakkk.name/javascript-generators-understanding-sample-use-cases/)
one. But let's take a closer look. It says that `generators` have 3 real world applications. Let's check them

* [Brunch](http://brunch.io/) method [watch](https://github.com/brunch/brunch/blob/1955d0d03785797fb244d27e194450da9b31e4ae/test/watch.js#L20-37) - this is 
real example from production code, and it called generator twice. But as I told previously it's unclear behavior, what the first `it.next()` does
what second does. For me it would be clear to use `ES6/Typescript Class` + `async/await`
* [co](https://github.com/tj/co) js framework - Here everything is clear. If you go to there github pages you can read 
`co@4.0.0 has been released, which now relies on promises. It is a stepping stone towards the async/await proposal ...`. So creators themselves 
acknowledge that their library is just a step toward async/await. But if you already have async/await out of the box, there is no need in this.
* [redux-saga](https://github.com/redux-saga/redux-saga) - This is the most difficult example. Why?, Well because in order to understand that generators
completely redundant there you have to understand  how [React](https://reactjs.org/), [Redux](https://redux.js.org/), 
[Redux Thunk](https://github.com/reduxjs/redux-thunk) and [redux-saga](https://github.com/redux-saga/redux-saga) works. And it goes beyond the scope
of this article. But believe my frontend experience, you can rewrite it with `async/await`



### Conclusion

This is my pure opinion. If you use `generators` in production code and you are happy with it, or you have to use it in a case like `redux-sage`
, you should probably leave it. But for all new developers
I strongly suggest not to use it in their code.
The question rise up, if there is no real use case for generators, why they were created.
Well first of all they were released in `es6` spec, and async/await only awaiting to be included in `es7` and for now you have to use
babel or typescript to convert es6 to vanilla js.
And second, in my thought, developers overplayed by creating a unique kind of function, that can return value, pause, and take back values from
current execution context. It really looks great, but unfortunately has no real application.























