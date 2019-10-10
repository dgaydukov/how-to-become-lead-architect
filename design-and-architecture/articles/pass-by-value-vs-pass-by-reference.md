# 10 Pass-by-value vs Pass-by-reference with C/C++/JavaScript/Java examples

## Content
* [Intro](#intro)
* [C](#always-use-promise/async-await-(never-use-callbacks))
* [C++](#use-eventemitter-when-need-to-connect-multiple-classes)
* [JavaScript/TypeScript](#always-use-typescript)
* [Java](#always-write-tests)

### Intro


 



### C

I think there are should be no comments. Always write tests.

### C++

I think there are should be no comments. Always write tests.


### JavaScript/TypeScript

Here I'm using `typescript` so to be compecent with all other languages

```typescript
(()=>{
    class Dog{
        private name: string;

        constructor(_name: string){
            this.setName(_name);
        }

        setName(_name: string){
            this.name = _name;
        }

        getName(){
            return this.name;
        }
    }

    const modify = (primitive: number, complex: Dog) => {
        primitive = 2; // modify local copy of passed param
        
        complex.setName("Ralf"); // modify passed param

        complex = new Dog("Gooi"); // create new local copy, since here all is done with newly created local copy
    }

    const n = 1;
    const dog = new Dog("Max");
    console.log(n, dog.getName()); // 1, Max
    modify(n, dog);
    console.log(n, dog.getName()); // 1, Ralf
})();
```

### Java

Java works the same as `javascript`, so here is the code

```java

```















