# 10 Tips to write HighLoad Node.js Apps

## Content
* [1. Always use TypeScript](#always-use-typescript)
* [2. Always write tests](#always-write-tests)
* [3. Always use Promise/Async-Await (Never use callbacks)](#always-use-promise/async-await-(never-use-callbacks))
* [4. Use EventEmitter when need to connect multiple classes](#use-eventemitter-when-need-to-connect-multiple-classes)
* [5. Use MQ for back-to-back connection and REST/WebSocket to back-to-front connection](#use-mq-for-back-to-back-connection-and-rest/websocket-to-back-to-front-connection)


### Always use TypeScript

I think everything is clear here. For some simple apps javascript is enough, but when you are building highload production apps you will realize that you
need type checking system, you need interfaces & classes. So it's more convenient to write such apps on TypeScript than on vanillaJs.


### Always write tests

I think there are should be no comments. Always write tests.


### Always use Promise/Async-Await (Never use callbacks)

Callback hell is a nasty thing. You should avoid it at any cost.


### Use EventEmitter when need to connect multiple classes

To connect classes inside your project I suggest to use [EventEmitter](https://nodejs.org/api/events.html)


### Use MQ for back-to-back connection and REST/WebSocket to back-to-front connection

The idea is pretty simple. If you want to connect 2 or more backend services you should use asyncronos message broker. Personally
i use [Kafka](https://kafka.apache.org/)