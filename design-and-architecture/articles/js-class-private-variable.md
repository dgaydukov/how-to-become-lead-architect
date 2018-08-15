# Private variables inside js classes


### Description

By default, variables declared with this.var, inside constructor are public.
This is because js not truly OOP, so there is no native support for private variables
But there are 2 primary ways to
* 1. is to store all functions inside constructor
* 2. Use score with WeakMap


```typescript

(()=>{
    class User{
        constructor(name){
            let _name = name;
            this.getName = ()=>{
                return _name;
            }
            this.setName = (name)=>{
                _name = name;;
            }
        }
    }

    var user1 = new User("Joe");
    var user2 = new User("Don");
    console.log(
        user1.getName(),
        user2.getName(),
        user1.setName("Mattew"),
        user1.getName(),
        user2.getName(),
    )
})();


/**
 * Technically you can use just simple hash={}, or Map, but it can lead to memory leaks, but WeakMap solve this problem.
 */
(()=>{
    const User = (()=>{
        const map = new WeakMap();
        class User{
            constructor(name){
                map.set(this, {name: name});
            }

            getName(){
                return map.get(this).name;
            }
            setName(name){
                map.set(this, {name: name});
            }
        }

        return User;
    })();

    var user1 = new User("Joe");
    var user2 = new User("Don");
    console.log(
        user1.getName(),
        user2.getName(),
        user1.setName("Mattew"),
        user1.getName(),
        user2.getName(),
    )
})();
```