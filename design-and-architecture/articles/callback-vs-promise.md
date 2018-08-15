# Callback vs Promise

### Problem Description

You all probably know about problem called "callback hell". Javascript by design is asyncronous language. So almost every operation that take time
(http request, file read) executes asyncronosly without blocking execution process. But what if you need to execute them syncronysly.
Let's say you have to complete 3 request and only after this return. Well, in such case you should execute every new block as a callback
to the previous function. But it can be difficult to read. The simple solution is a promise.

Here I have a real example from my [project](https://github.com/dgaydukov/nodejs-cce-blockchain-ethereum), where I rewrote a class from
callback to promise

```typescript
/**
 * Return information about address and it transactions
 */

import {Address} from "@db/models/address"
import {Transaction} from "@db/models/transaction"

export class AddressInfo{
    address: string;

    constructor(address){
        this.address = address
    }

    get(cb){
        Address.findOne({address: {$regex: this.address, $options: 'i'}}, (err, addressItem)=>{
            if(addressItem){
                const data = {
                    address: this.address,
                    balance: addressItem.balance,
                    tx: []
                }
                Transaction.find({$or: [{addressFrom: {$regex: this.address, $options: 'i'}}, {addressTo: {$regex: this.address, $options: 'i'}}]}, (err, txList)=>{
                    if(txList){
                        txList.map(tx=>{
                            data.tx.push({
                                txId: tx.txId,
                                confirmationNumber: tx.confirmationNumber,
                                blockNumber: tx.blockNumber,
                                addressFrom: tx.addressFrom,
                                addressTo: tx.addressTo,
                                amount: tx.amount,
                                type: tx.type,
                            })
                        })
                        cb(null, data)
                    }
                    else{
                        cb(null, data)
                    }
                })
            }
            else{
                cb(err, addressItem)
            }
        })
    }
}
```


```typescript
get(){
        return new Promise((resolve, reject)=>{
            Address.findOne({address: {$regex: this.address, $options: 'i'}})
                .then(addressItem=>{
                    if(!addressItem){
                        throw new Error("Address doesn't exist")
                    }
                    return {
                        address: this.address,
                        balance: addressItem.balance,
                        tx: []
                    }
                })
                .then(addressInfo=>{
                    const txList = Transaction.find({$or: [
                            {addressFrom: {$regex: this.address, $options: 'i'}},
                            {addressTo: {$regex: this.address, $options: 'i'}}
                        ]
                    })
                    return Promise.all([addressInfo, txList]);
                })
                .then(data=>{
                    const [addressInfo, txList] = data
                    txList.map(tx=> {
                        addressInfo.tx.push({
                            txId: tx.txId,
                            confirmationNumber: tx.confirmationNumber,
                            blockNumber: tx.blockNumber,
                            addressFrom: tx.addressFrom,
                            addressTo: tx.addressTo,
                            amount: tx.amount,
                            type: tx.type,
                        })
                    })
                    return addressInfo
                })
                .then(addressInfo=>{
                    resolve(addressInfo)
                })
                .catch(ex=>{
                    reject(ex)
                })
        })
    }
```
