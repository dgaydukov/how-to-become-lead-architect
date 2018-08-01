# 10 Tips to write HighLoad Node.js Apps

## Content
* [Intro](#intro)
* [1. Always use TypeScript](#always-use-typescript)
* [2. Always write tests](#always-write-tests)
* [3. Always use Promise/Async-Await (Never use callbacks)](#always-use-promise/async-await-(never-use-callbacks))
* [4. Use EventEmitter when need to connect multiple classes](#use-eventemitter-when-need-to-connect-multiple-classes)
* [5. Use MQ for back-to-back connection and REST/WebSocket to back-to-front connection](#use-mq-for-back-to-back-connection-and-rest/websocket-to-back-to-front-connection)


### Intro

This article is based on my 3+ years experience as a Node.js developer. Since Node.js is just a javascript that runs outside the browser
, and the javascript is very broad language, I mean I know people who write in it since 2001, so 
you can write both really great app from the code quality and design viewpoint and also really bad and ugly apps.
 


### Always use TypeScript

I think everything is clear here. For some simple apps javascript is enough, but when you are building HighLoad production apps you will realize that you
need type checking system, you need interfaces & classes. So it's more convenient to write such apps on TypeScript than on vanillaJs.


### Always write tests

I think there are should be no comments. Always write tests.


### Always use Promise/Async-Await (Never use callbacks)

Callback hell is a nasty thing. You should avoid it at any cost. Use Promises instead, and today you can use `async/await`, that is way more better
than promises for code readability. Cause in case of promises if you have many async calls you have to create a chain of `then` functions + also have to pass
there another variable return not just new promise but `Promise.all([someValue, promise])`.
There is also es6 generators. But as you can read [here](https://github.com/dgaydukov/how-to-become-a-senior-js-developer/blob/master/design-and-architecture/you-dont-need-generators.md)
there is not practical application of this concept. Yes it's a cool feature, but `async/await` is way more enough


### Use EventEmitter when need to connect multiple classes

To connect classes inside your project I suggest to use [EventEmitter](https://nodejs.org/api/events.html)


### Use MQ for back-to-back connection and REST/WebSocket to back-to-front connection

Basically you have 3 main types of service to service connection
* MQ - the best to connect internal backend services. Personally I use [Kafka](https://kafka.apache.org/)
* REST - the best way to connect server-to-client. If you have a website or mobile app you would better connect them to you backend server through the REST
* WebSocket - basically you can use it for both back-to-back & back-to-front. But I suggest to use it when you want to connect back-to-back and other
microservice can't use message queue for some reasons