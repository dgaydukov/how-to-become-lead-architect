# Async Await vs Promise

### Problem Description

What to use: Promises or Async Await. The answer is simple, always try to use async await. Don't be afraid of it new syntax, that looks like complete
redesign of asynchronous way of coding. In reality async-await is just a synthetic sugar above promises. The simple truth is that async await can 
work only with functions that return promises and they themselves return promise. Well technically you can create async await function 
without promise, but it would be completely different thing.
To demonstrate async await advantage just look at the example functions `getUserBalanceAA` and `getUserBalance`. As you can see async await
version is much neater and cleaner. But in essence the do the same.
The example is very simple, let's suppose we have to make 2 request, first get user by it's email and then get balance by user.id. So we have
to execute 2 requests one after another and then return value.

```typescript

/**
* Interfaces
*/
interface iUser{
    id: number;
    name: string;
}
interface iBalance{
    amount: number;
}

/**
* Imitation of user ajax request by email
*/
const getUser = (email: string)=>{
    return new Promise<iUser>((resolve, reject)=>{
        setTimeout(()=>{
            resolve({id: 1, name: "John"})
        }, 1000)
    })
}

/**
* Imitation of user balance ajax request by user ID
*/
const getBalance = (id: number)=>{
    return new Promise<iBalance>((resolve, reject)=>{
        setTimeout(()=>{
            resolve({amount: 10})
        }, 2000)
    })
}

/**
* async await version of getting balance
*/
const getUserBalanceAA = async() => {
    const user = await getUser("email@example.com");
    const balance = await getBalance(user.id);
    return balance.amount;
}


/**
* promise version of getting balance
*/
const getUserBalance = () => {
    return new Promise((resolve, reject)=>{
        getUser("email@example.com")
            .then(data=>{
                return getBalance(data.id)
            })
            .then(data=>{
                resolve(data.amount)
            })
            .catch(reject)
    })
}

getUserBalance().then(data=>console.log("promise", data))
getUserBalanceAA().then(data=>console.log("async,await", data))
```