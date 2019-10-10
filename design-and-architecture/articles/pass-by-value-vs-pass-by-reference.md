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
    std::cout << "val: " << val << ", pointer: " << pointer << ", ref: " << ref << std::endl;
    modifyPrimitives(val, &pointer, ref);
    std::cout << "val: " << val << ", pointer: " << pointer << ", ref: " << ref << std::endl;

    std::cout << std::endl;

    Dog dVal(NAME_MAX);
    Dog dPointer(NAME_MAX);
    Dog dRef(NAME_MAX);
    Dog *dRefPointer = new Dog(NAME_MAX);
    Dog *dDblPointer = new Dog(NAME_MAX);
    std::cout << "val: " << dVal.getName() << ", pointer: " << dPointer.getName() << ", ref: " << dRef.getName() << ", ref: " << dRefPointer->getName() << ", ref: " << dDblPointer->getName() << std::endl;
    modifyObjects(dVal, &dPointer, dRef, dRefPointer, &dDblPointer);
    std::cout << "val: " << dVal.getName() << ", pointer: " << dPointer.getName() << ", ref: " << dRef.getName() << ", ref: " << dRefPointer->getName() << ", ref: " << dDblPointer->getName() << std::endl;
    

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















