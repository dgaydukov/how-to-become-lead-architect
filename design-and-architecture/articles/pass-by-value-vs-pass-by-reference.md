# 10 Pass-by-value vs Pass-by-reference with C/C++/JavaScript/Java examples

## Content
* [Intro](#intro)
* [C](#c)
* [C++](#c++)
* [JavaScript/TypeScript](#javascript/typescript)
* [Java](#java)

### Intro

There are a lot of fuss over the internet about passing params by value or by reference. If everything is clear with primitive types (number, boolean), it's get tough with complex types (arrays and objects).
Here is my attempt to clarify things. To answer short most languages pass only by value. But when we pass complex object, it pass value of it pointer. That's why as long as we change pointer values we change actual object,
but when we assign new object to pointer inside function, this pointer is no longer point to external object, and all operations are done to local copy instead.
`C/C++` has notion of pointers, so we can pass pointer to pointer (`**`). In such case we can change object inside function even if we assing it new object.
`C++` has references by which we can also change values.

### C

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Dog
{
    char *name;
};

void setName(struct Dog *dog, char *_name){
    strcpy(dog->name, _name);
}

char *getName(struct Dog *dog){
    return dog->name;
}

void initDog(struct Dog *dog, char *_name){
    setName(dog, _name);
}




int main(){
    struct Dog d;
    initDog(&d, "Max");
    printf("%s\n", getName(&d));
    setName(&d, "Charlie");
    printf("%s\n", getName(&d));

    return 0;
}
```

### C++

```c++
#include <iostream>

const std::string NAME_MAX = "Max";
const std::string NAME_CHARLIE = "Charlie";
const std::string NAME_OSCAR = "Oscar";

class Dog {
    public:
        Dog(std::string _name){
            setName(_name);
        }

        void setName(std::string _name){
            name = _name;
        }
        std::string getName(){
            return name;
        }

    private:
        std::string name;
};

void modifyPrimitives(int primitiveVal, int* primitivePointer, int& primitiveRef){
    primitiveVal = 2; // local copy, won't modify external var
    *primitivePointer = 2; // pointer dereference, will modify external variable
    primitiveRef = 2; // reference will modify external variable

    int val = 3;
    primitivePointer = &val; // relocating pointer to local variable, since here all pointer modification is done to local variable, external pointer will not change
    *primitivePointer = 3;
}

void modifyObjects(Dog val, Dog* pointer, Dog& ref, Dog*& refPointer, Dog** dblPointer){
    val.setName(NAME_CHARLIE); // local copy, won't modify anything
    pointer->setName(NAME_CHARLIE); // will modify external variable
    ref.setName(NAME_CHARLIE); // will modify external variable
    refPointer->setName(NAME_CHARLIE); // will modify external variable
    (*dblPointer)->setName(NAME_CHARLIE); // will modify external variable

    pointer = new Dog(NAME_OSCAR); // create local copy, since here all modification won't affect external variable
    refPointer = new Dog(NAME_OSCAR); // will modify external variable
    *dblPointer = new Dog(NAME_OSCAR); // will modify external variable
}

int main(){
    int val = 1;
    int pointer = 1;
    int ref = 1;
    std::cout << "val: " << val << ", pointer: " << pointer << ", ref: " << ref << std::endl; // val: 1, pointer: 1, ref: 1
    modifyPrimitives(val, &pointer, ref);
    std::cout << "val: " << val << ", pointer: " << pointer << ", ref: " << ref << std::endl; // val: 1, pointer: 2, ref: 2

    std::cout << std::endl;

    Dog dVal(NAME_MAX);
    Dog dPointer(NAME_MAX);
    Dog dRef(NAME_MAX);
    Dog *dRefPointer = new Dog(NAME_MAX);
    Dog *dDblPointer = new Dog(NAME_MAX);
    std::cout << "val: " << dVal.getName() << ", pointer: " << dPointer.getName() << ", ref: " << dRef.getName() << ", dRefPointer: " << dRefPointer->getName() << ", dDblPointer: " << dDblPointer->getName() << std::endl; // val: Max, pointer: Max, ref: Max, dRefPointer: Max, dDblPointer: Max
    modifyObjects(dVal, &dPointer, dRef, dRefPointer, &dDblPointer);
    std::cout << "val: " << dVal.getName() << ", pointer: " << dPointer.getName() << ", ref: " << dRef.getName() << ", dRefPointer: " << dRefPointer->getName() << ", dDblPointer: " << dDblPointer->getName() << std::endl; // val: Max, pointer: Charlie, ref: Charlie, dRefPointer: Oscar, dDblPointer: Oscar
    

    return 0;
}
```


### JavaScript/TypeScript

Here I'm using `TypeScript` so to be compecent with all other languages. `JavaScript` has only 1 way to pass params, by value.

```typescript
const NAME_MAX: string = "Max";
const NAME_CHARLIE: string = "Charlie";
const NAME_OSCAR: string = "Oscar";

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
    
    complex.setName(NAME_CHARLIE); // modify passed param

    complex = new Dog(NAME_OSCAR); // create new local copy, since here all is done with newly created local copy
}

const n = 1;
const dog = new Dog(NAME_MAX);
console.log(n, dog.getName()); // 1, Max
modify(n, dog);
console.log(n, dog.getName()); // 1, Ralf
```

### Java

`Java` works the same as `javascript`. `Java` has only 1 way to pass params, by value.

```java
class Dog {
    private String name;

    public Dog(String _name) {
        this.setName(_name);
    }

    public void setName(String _name) {
        name = _name;
    }

    public String getName() {
        return name;
    }
}

public class App {
    private static String NAME_MAX = "Max";
    private static String NAME_CHARLIE = "Charlie";
    private static String NAME_OSCAR = "Oscar";

    public static void main(String args[]) {
        Number n = 1;
        Dog dog = new Dog(NAME_MAX);
        System.out.println("primitive: " + n + ", name: " + dog.getName());
        modify(n, dog);
        System.out.println("primitive: " + n + ", name: " + dog.getName());
    }

    public static void modify(Number primitive, Dog complex) {
        primitive = 2; // modify local copy of passed param

        complex.setName(NAME_CHARLIE); // modify passed param

        complex = new Dog(NAME_OSCAR); // create new local copy, since here all is done with newly created local copy
    }
}
```















