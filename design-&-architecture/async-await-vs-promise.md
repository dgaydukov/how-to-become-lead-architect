# Async Await vs Promise

### Problem Description

```typescript
interface iUser{
    id: number;
    name: string;
}
interface iBalance{
    amount: number;
}

const getUser = (email: string)=>{
    return new Promise<iUser>((resolve, reject)=>{
        setTimeout(()=>{
            resolve({id: 1, name: "John"})
        }, 1000)
    })
}

const getBalance = (id: number)=>{
    return new Promise<iBalance>((resolve, reject)=>{
        setTimeout(()=>{
            resolve({amount: 10})
        }, 2000)
    })
}


const getUserBalanceAA = async() => {
    const user = await getUser("email@example.com");
    const balance = await getBalance(user.id);
    return balance.amount;
}

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