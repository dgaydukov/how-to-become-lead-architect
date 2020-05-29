# How Spring force you to be a senior developer and write high-quality code


### Description

What constitutes to be a senior developer, to write really high-quality code. Of course you should know programming language you are writing in, but this is not the most important part. You should know and use best practice, so called patterns, that simplify your code and allow for easy fix and maintenance.
And here is a problem. If you are a senior developer with 5+ years of experience, basically language/framework doesn't matter. You already probably know most of best practices, and can apply them. But if you are junior, or don't have strong software skills than life can be problematic for you.
Here is where spring built around best practices forces you, sometimes implicitly, to use this best practices. Here is a list of 5 examples where it's true


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