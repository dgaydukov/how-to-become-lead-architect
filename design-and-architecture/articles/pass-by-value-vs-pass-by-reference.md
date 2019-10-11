# 10 Pass-by-value vs Pass-by-reference with C/C++/JavaScript/Java examples

## Content
* [Intro](#intro)
* [C](#c)
* [C++](#c-1)
* [JavaScript/TypeScript](#javascripttypescript)
* [Java](#java)

### Intro

There are a lot of fuss over the internet about passing params by value or by reference. If everything is clear with primitive types (number, boolean), it's get tough with complex types (arrays and objects).
Here is my attempt to clarify things. To answer short most languages pass only by value. But when we pass complex object, it pass value of it pointer. That's why as long as we change pointer values we change actual object,
but when we assign new object to pointer inside function, this pointer is no longer point to external object, and all operations are done to local copy instead.
`C/C++` has notion of pointers, so we can pass pointer to pointer (`**`). In such case we can change object inside function even if we assing it new object.
`C++` has references by which we can also change values.

### C

In `C` we can pass primitives and objects as copies or as pointers. When we pass as copy, of course we can't change value outside function scope, cause we are working with local copy.
But when we do pass as pointer, as long as we change pointer, all changes affect external variable. But once we reassign our pointer to new variable inside function scope, our pointer is no longer
pointing to our external variable, so since now all changes to pointer affect local variable.

```c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char NAME_MAX[] = "Max";
char NAME_CHARLIE[] = "Charlie";
char NAME_OSCAR[] = "Oscar";

struct Dog
{
    char name[10];
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


void modifyPrimitives(int val, int* pointer){
    val = 2; // local copy, won't modify external variable
    *pointer = 2; // will modify external variable

    int localVal = 3;
    pointer = &localVal; // reassign pointer to local variable, since here all pointer modification affect local variable, not external one
    *pointer = 5; // will change value of localVal to 5
}

void modifyObjects(struct Dog d, struct Dog* dPointer){
    setName(&d, NAME_CHARLIE); // local copy, won't modify external variable
    setName(dPointer, NAME_CHARLIE); // will modify external variable

    dPointer = malloc(sizeof(struct Dog)); // reassign pointer to local object, since here all changes affect local scope
    setName(dPointer, NAME_OSCAR);
}

int main(){
    int val = 1;
    int pointer = 1;
    printf("val: %d, pointer: %d \n", val, pointer); // val: 1, pointer: 1
    modifyPrimitives(val, &pointer);
    printf("val: %d, pointer: %d \n", val, pointer); // val: 1, pointer: 2

    printf("\n");


    struct Dog d;
    initDog(&d, NAME_MAX);

    struct Dog* dPointer = malloc(sizeof(struct Dog));
    initDog(dPointer, NAME_MAX);


    printf("d: %s, dPointer: %s\n", getName(&d), getName(dPointer)); // d: Max, dPointer: Max
    modifyObjects(d, dPointer);
    printf("d: %s, dPointer: %s\n", getName(&d), getName(dPointer)); // d: Max, dPointer: Charlie

    return 0;
}
```

### C++

`C++` probably the most versatile language. It allows to pass variable in 3 ways. As copy of value, as pointer to value, or as reference to value.

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

Here I'm using `TypeScript` so to be compecent with all other languages. `JavaScript` has only 1 way to pass params, by value. Basically passing object in `JavaScript` is equivalen to pass pointer to object in languages like `C/C++`. Logic is the same, as long as we modify object, we modify external object, but
once we reassign object to new class inside function, our object points to this new class, so since now all changes are done to local copy.

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

`Java` works the same as `javascript`. `Java` has only 1 way to pass params, by value. Basically passing object in `Java` is equivalen to pass pointer to object in languages like `C/C++`. Logic is the same, as long as we modify object, we modify external object, but
once we reassign object to new class inside function, our object points to this new class, so since now all changes are done to local copy.

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
        System.out.println("primitive: " + n + ", name: " + dog.getName()); // primitive: 1, name: Max
        modify(n, dog);
        System.out.println("primitive: " + n + ", name: " + dog.getName()); // primitive: 1, name: Charlie
    }

    public static void modify(Number primitive, Dog complex) {
        primitive = 2; // modify local copy of passed param

        complex.setName(NAME_CHARLIE); // modify passed param

        complex = new Dog(NAME_OSCAR); // create new local copy, since here all is done with newly created local copy
    }
}
```















