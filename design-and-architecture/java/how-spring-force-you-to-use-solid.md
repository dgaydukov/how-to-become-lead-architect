# How Spring force you to use solid and to be a senior developer


### Content
* [Description](#description)
* [Single Responsibility](#single-responsibility)
* [Open/Closed](#openclosed)
* [Liskov Substitution](#liskov-substitution)
* [Interface Segregation](#interface-segregation)
* [Dependency Inversion](#dependency-inversion)
* [Correct use of singleton pattern](#correct-use-of-singleton-pattern)
* [Interface can force classes to call some method](#interface-can-force-classes-to-call-some-method)




### Description
What constitutes to be a senior developer, to write really high-quality code. Of course you should know programming language you are writing in, but this is not the most important part. You should know and use best practice, so called patterns, that simplify your code and allow for easy fix and maintenance.
And here is a problem. If you are a senior developer with 5+ years of experience, basically language/framework doesn't matter. You already probably know most of best practices, and can apply them. But if you are junior, or don't have strong software skills than life can be problematic for you.
Here is where spring built around best practices forces you, sometimes implicitly, to use this best practices. Here is a list of 5 examples where it's true

### Single Responsibility
If you create new objects from class directly you break single responsibility cause you class now for every dependency it created with `new` keyword get 3 new responsibility
1. it should know which implementation to use
2. it should know how to create class (with new keyword or use factory method)
3. it should know how to configure class
By implementing DI spring lets you concentrate on business logic and don't think too much about dependencies.

### Open/Closed
Classes should be open for extension and closed for modification. At first glance this statement is illogical, cause how can you enrich class logic without opening it and writing logic directly there.
How can you achieve such a thing. The answer is simple interfaces. Sometimes it also called chain of responsibility pattern.
```java
class MyClass{
    void doWork(){
        run1();
        run2();
        run3();
    }

    void run1(){}
    void run2(){}
    void run3(){}
}
```
As you see this example breaks this pattern, cause if you want to add new logic to `doWork` method you should open it and edit, which is not good.
```java
interface Work{
    void run();
}
class MyClass{
    @Autowired
    private List<Work> workList;
    
    void doWork(){
        workList.forEach(Work::run);
    }
}
```
As you see now we can change logic as much as we want and we don't need to open `doWork` method. We can also use `@Order` annotation if we want to set order in which our methods should run.

### Liskov Substitution
This principle is built into java language itself. Let's take example with throwing exceptions. If method `m1 throws MyException`, than overriding method can throw only `MyException` or any subtype. Same concerning return types. 
So when we override methods return type and thrown exception should be covariant. This is an example where java language itself enforce good design principle upon us.


### Interface Segregation
This principle probably the one, that spring/java can't force on you. The main idea is you should use single responsibility for interfaces. So if you have some logic it's better to divide it between multiple interfaces 
rather than having 1 interface with lots of methods.


### Dependency Inversion
I think there is not much to be explained here, cause spring is built around concept of DI and IoC


### Correct use of singleton pattern
Singleton is both a good software design pattern and anti-pattern at the same time. The question is how are you using it. There are 2 types
* Hand-made (explicit) singleton - when you create singleton by explicitly writing code (usually with private constructor and public static getInstance method)
* Framework-made (implicit) singleton (when your singleton just usual class and framework itself ensure that only single instance is available through application)
As you probably guessed the first one is anti pattern. And here is quick example why.
```java
import lombok.Setter;

public class App{
    public static void main(String[] args) {
        var service = MyService.getInstance();
        service.doWork();
    }
}


class MyService{
    private MyService(){}
    private static final MyService instance = new MyService();
    public static MyService getInstance(){
        return instance;
    }
    public void doWork(){
        var printer = MyPrinter.getInstance();
        printer.setColor("red");
        MyPrinter.getInstance().print("working");
    }
}

class MyPrinter{
    private MyPrinter(){}
    private static final MyPrinter instance = new MyPrinter();
    public static MyPrinter getInstance(){
        return instance;
    }
    @Setter
    private String color;
    public void print(String str){
        System.out.println(this.getClass().getSimpleName() + " => " + str + ", color => " + color);
    }
}
```
```
MyPrinter => working, color => red
```
There are 3 big problems with such approach
1. Tight coupling - no way to test this class (except with [powermock](https://github.com/powermock/powermock) which can run your test for a long time)
2. No use of interfaces - if tomorrow we decide to use another printer we will have to rewrite our code
3. Classes should care about configuring one another. When you call `getInstance` you got just empty class that you should configure somehow and do it directly inside calling methods successfully breaking single responsibility.

As you see, such a use of singleton actually can make our code completely untestable and very difficult to modify. Below is rewritten example with spring
```java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.stereotype.Component;

public class App{
    public static void main(String[] args) {
        var context = new AnnotationConfigApplicationContext(App.class.getPackageName());
        var service = context.getBean(MyService.class);
        service.doWork();
    }
}

@Component
class MyService{
    @Autowired
    private Printer printer;
    public void doWork(){
        printer.print("working");
    }
}

interface Printer{
    void print(String str);
}

@Component
class MyPrinter implements Printer{
    /**
     * we set value directly by code for our example, but of course you can do it from app props and
     * then change it without recompiling the code
     */
    @Value("red")
    private String color;
    public void print(String str){
        System.out.println(this.getClass().getSimpleName() + " => " + str + ", color => " + color);
    }
}
```
```
MyPrinter => working, color => red
```

Here is just example of best practices
1. Use of interfaces. `MyService` no longer tightly coupling to exact implementation. If tomorrow we want to use other printer we can just change it from xml/groovy config and it would work without recompiling.
2. Easy test. Now we can use mocks to easily write unit tests to test our app
3. Easy configuration

But all of this just because of using spring. So as you see even if you just spring newbie you will write best-practice code even without completely understand why it's best practice. 



### Interface can force classes to call some method
Suppose you have multiple implementations of interface and you want to have some logic on startup. Of course with java8 `default` interface methods you can add such a method to all interfaces, but how actually to call it.
Here where spring will help you. You can add `@Autowired` to such interface `default` method and it would be called on each spring bean that implement this interface.

```java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.stereotype.Component;

public class App{
    public static void main(String[] args) {
        var context = new AnnotationConfigApplicationContext(App.class.getPackageName());
    }
}

interface Printer{
    @Autowired
    default void addToRegister(PrinterRegister register){
        register.register(this);
    }
}

@Component
class OldPrinter implements Printer{}

@Component
class NewPrinter implements Printer{}

@Component
class PrinterRegister{
    void register(Printer printer){
        System.out.println("register => " + printer);
    }
}
```
```
register => com.example.spring5.OldPrinter@71e9ddb4
register => com.example.spring5.NewPrinter@4961f6af
```