# How to create CCE (Crypto Currency Exchange)

### Description

Here I'am going to build a simple Crypto Currency Exchange to show all the power and beauty of Node.js and blockchain technology.
At first glance it may look that CCE is a huge project, but in reality it's a bunch of 6 simple microservices that talk to each other through the
Kafka, WebSocket, REST. At the same time it's big enough to show all the possibilities of Node.js. It also my attempt to show that large enterprise
apps can be written completely in Node.js.
Generally Node.js differs from C# or Java, that it's internally microservice based technology. And if you can write pretty successful monolithic apps in both
C# or Java, you can't do this with Node.js. Yet you can write great microservice architecture in Node.js out of the box.
And here i'm making attempt to prove it.
So let's got the the list of projects our Exchange consist of:

### Project List

* [Ethereum Proxy](https://github.com/dgaydukov/nodejs-cce-blockchain-ethereum) - This project is a set above Ethereum node. Basically it executes 
3 simple functions: create address, create transactions, push when address balance change or transaction confirmation changed
The service communicate with others by the means of Kafka

* [Bitcoin Proxy](https://github.com/dgaydukov/nodejs-cce-blockchain-bitcoin) - This project is a set above Bitcoin node. Basically it executes 
3 simple functions: create address, create transactions, push when address balance change or transaction confirmation changed
The service communicate with others by the means of Kafka

* [Connector](https://github.com/dgaydukov/nodejs-cce-core-connector) - This is a simple proxy that communicate data from WebSocket to Kafka. Since all internal
microservices use Kafka message queue, we need a channel to more simple talking mechanic. So all external use WebSocket to talk with each other. And to 
transform queries from WebSocket to Kafka we use this service

* [Wallet](https://github.com/dgaydukov/nodejs-cce-core-wallet) - Here we have all logic related to our wallets. User wallets, his transaction, money transfers,
put & withdraw of cryptocurrencies, all store here.

* [Exchange Core](https://github.com/dgaydukov/nodejs-cce-core-exchange) - This is our exchange core. Here all logic that responsible for exchange to run 
resides. It includes register/login/logout logic, matching core, crypto transfers and so on. *In production development we should further divide this core 
into several microservices, but since our point to make mvp solution this works fine.

* [Exchange Front](https://github.com/dgaydukov/nodejs-cce-front) - Our frontend for Exchange. Here the user can register/login and put and withdraw crypto
on his account, make change deals with other users.


### Conclusion

At the end we should get a simple [mvp](https://en.wikipedia.org/wiki/Minimum_viable_product) that can perform simple exchange activity