# 10 Pass-by-value vs Pass-by-reference with C/C++/JavaScript/Java examples

## Content
* [Intro](#intro)
* [C](#c)
* [C++](#c++)
* [JavaScript/TypeScript](#javascript/typescript)
* [Java](#java)

### Intro

There are a lot of fuss over the internet about passing params by value or by reference. If everything is clear with primitive types (number, boolean), it's get tough with complex types (arrays and objects).
Here is my attempt to clarify things.

### C

```c
```

### C++

```c++
```


### JavaScript/TypeScript

Here I'm using `TypeScript` so to be compecent with all other languages. `JavaScript` has only 1 way to pass params, by value.

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

`Java` works the same as `javascript`. `Java` has only 1 way to pass params, by value.

```java

```















