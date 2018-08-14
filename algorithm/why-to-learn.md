# Why to learn algorithms


## Content
* [Overview](#overview)
* [Practical Application](#practical-application)

### Overview

Algorithms can be useful if we want to work with large set of data. Consider simple example to find all divisors of a number of 24.
Here is simple function in js
```javascript
const getDivisors = (n) => {
    const divisors = [];
    for(let i = 1; i <= n; i++){
        if(n % i == 0){
            divisors.push(i);
        }
    }
    return divisors;
}
```

It works great, we can even implement it in one line using new es6 features
```javascript
const getDivisorsFilter = (n)=>[...Array(n+1).keys()].slice(1).filter(i=>n%i==0)
```

And if we use these two functions, to find all divisors for, let's say 24, it will work great. But try to execute ```getDivisors(Number.MAX_SAFE_INTEGER)``` and you
definitely will crash your browser. There is a simple solution to use
```javascript
const getDivisorsSmart = (n) => {
    const divisors = [],
        sqrt = Math.floor(Math.sqrt(n));
    for(let i = 1; i <= sqrt; i++){
        if(n % i == 0){
            divisors.push(i);
            if(n/i != i){
                divisors.push(n/i);
            }
        }
    }
    return divisors;
}
```
Now try this ```getDivisorsSmart(Number.MAX_SAFE_INTEGER)``` and after a couple of seconds you get your array.

### Practical Application

Where to apply all your knowledge of algorithms. Well, there are a lot of areas. Consider for example React performance on mobile devices. Recently i found out, that React poorly
perform on mobile devices when you change the state and React re-render your view. Well, you can actually wait, till somebody in React or just out there, will solve this problem.
But maybe it will be You who will solve this problem.