Js Basics
```
1) Функции(объекты) Javascript
2) Global variables are evil
3) Prototype
4) Namespaces
5) This, public, private, privileged, static
6) Immediate functions (Function wrap)
7) Function application, currying, bind
8) Chaining pattern
9) Inheritance, multiple inheritance, interface
10) Patterns
11) Date, RegExp
```


Functions
In JavaScript, functions are first-class objects; that is, they coexist with, and can be treated like, any other JavaScript object. Just like others JavaScript data types, they can be referenced by variables, declared with literals, and even passed as function parameters.
Strict Mode is a new feature in ECMAScript 5 that allows you to place a program, or a function, in a "strict" operating context. This strict context prevents certain actions from being taken and throws more exceptions.
(function(){ "use strict"; // Define your library strictly... })();

JavaScript objects
Класс есть функция
```javascript
function Message (subject, recipient, content){
    this.subject = subject;
    this.recipient = recipient;
    this.content = content;
}
var myEmail = new Message('Javascript is cool', ' you@gmail.com', 'Creating objects is simple');
```

Message – класс, myEmail – объект класса
Анонимный вызов
```javascript
var Message = function (subject, recipient, content){
    this.subject = subject;
    this.recipient = recipient;
    this.content = content;
};
var myEmail = new Message('Javascript is cool', ' you@gmail.com', 'Creating objects is simple');
```

The difference is that functionOne is defined at run-time, whereas functionTwo is defined at parse-time for a script block. For example:
```
// Error
functionOne();
var functionOne = function() {};

// No error
functionTwo();
function functionTwo() {}
```

PHP Closure
```javascript
function test(){
    $a = 10;
    $func = function($x) use($a) {
        $b = 20;
        return $a * $b * $x;
    };
    return $func;
}
$a = test();
echo $a(5);
```

JS Closure
```javascript
function test(){
    var a = 10;
    var func = function() {
        var b = 20;
        return a*b;
    };
    return func();
}
test();
```


Объекты Javascript
```javascript
function Message (subject, recipient, content){
    this.subject = subject;
    this.recipient = recipient;
    this.content = content;
    this.showMessage = _ShowMessage;
}
function _ShowMessage(){
    console.log('To:' + this.recipient + 'Subject: ' + this.subject + 'Message:' + this.content);
}
var myEmail = new Message('Javascript is cool', ' you@gmail.com', 'Creating objects is simple');
myEmail.showMessage();
function Message (subject, recipient, content){
    this.subject = subject;
    this.recipient = recipient;
    this.content = content;
    this.showMessage = function (){
        console.log('To:' + this.recipient + 'Subject: ' + this.subject + 'Message:' + this.content);
    }
}
var myEmail = new Message('Javascript is cool', ' you@gmail.com', 'Creating objects is simple');
myEmail.showMessage();
```


JavaScript Prototype
* JavaScript is prototype-based, rather than class-based while classes aren’t present, you can still achieve code reuse and inheritance by cloning objects that exist as prototypes
* Реализуется наследование через неявную(внутреннюю) ссылку одного объекта на другой, который называется его прототипом и в спецификации обозначается ```[[prototype]]```. Это свойство обычно скрыто от программиста.


```javascript
Global variables are evil
function sum(x, y) {
    // antipattern: implied global
    result = x + y;
    return result;
}
```
После выполнения функции result будет глобальной переменной


```javascript
Global variables are evil (part 2)
//right-to-left evaluation
function foo() {
    var a = b = 0;
}
var a = (b = 0);
```

Global variables are evil (part 3)
```javascript
//ability to delete global variables
var a = 1;
b = 2;
delete a; //false
delete b; // true
console.log(typeof a); //number
console.log(typeof b); //undefined
```

Prototype
```javascript
/*
myEmail.__proto__ -  содержит Message.prototype
Message.prototype .__proto__ -  содержит Object
*/
function Message (subject, recipient, content){
    this.subject = subject;
    this.recipient = recipient;
    this.content = content;
}
Message.prototype.showMessage = function(){
    console.log('To:' + this.recipient + 'Subject: ' + this.subject + 'Message:' + this.content);
};
var myEmail = new Message('Javascript is cool', ' you@gmail.com', 'Prototype is useful');
myEmail.showMessage();
```

Prototype
```javascript
Message.prototype = {
    sendMessage: function(){
        console.log('Sending message to ' + this.recipient);
    },
    show : function(){
        console.log('To:' + this.recipient + 'Subject: ' + this.subject + 'Message:' + this.content);
    }
};
var workMessage = new Message('Work complete', 'boss@mycorp.com', 'My work is done here');
workMessage.show();
workMessage.sendMessage();
```

Overwriting Prototype's Property with  Own Property
```javascript
function Gadget(name) {
    this.name = name;
    this.f = function(){
        console.log(name);
    }
}
Gadget.prototype.name = 'foo';
Gadget.prototype.f = function(){
    console.log("proto");
}
var toy = new Gadget('camera');
delete toy.name
toy.name //"foo"
```

Augmenting Built-in Objects
* In PHP there is a function called ```in_array()``` that tells you if a value exists in an array.
In JavaScript there is no ```inArray()``` method, so let's implement it and add it to Array.prototype
```javascript
var a = ['red', 'green', 'blue'];
a.inArray('red');
//function code
Array.prototype.inArray = function(needle) {
    for (var i = 0, len = this.length; i < len; i++) {
        if (this[i] === needle) {
            return true;
        }
    }
    return false;
}
Imagine your application often needs to reverse strings and you feel there should be a built-in reverse()
String.prototype.reverse = function() {
    return Array.prototype.reverse.apply(this.split('')).join('');
}
"Dima".reverse();
```

Prototype (наследование)
```javascript
function Animal(name){
    this.name = name;
}
Animal.prototype.talk = function(){
    console.log(this.phrase);
}

function Dog(phrase){
    this.phrase = phrase;
}
Dog.prototype = new Animal();
var dog = new Dog("bark");
dog.talk(); //bark
```

Namespaces
```javascript
var backend = backend || {};
backend.network = backend.network || {};
backend.network.twitter = backend.network.twitter || {};
backend.network.twitter.Message = function Message(subject, recipient, content)
{
    this.subject = subject;
    this.recipient = recipient;
    this.content = content;
    this.showMessage = showMessage;
    function showMessage(){
        console.log('To:' + recipient + 'Subject: ' + subject + 'Message:' + content);
    }
}
var myEmail = new backend.network.twitter.Message('Javascript is cool', ' you@gmail.com', 'Creating objects is simple');
myEmail.showMessage();
```

Namespaces (custom function)
```javascript
var MYAPP = MYAPP || {};
MYAPP.namespace = function (ns_string) {
    var parts = ns_string.split('.'),
        parent = MYAPP,
        i;
    // strip redundant leading global
    if (parts[0] === "MYAPP") {
        parts = parts.slice(1);
    }
    for (i = 0; i < parts.length; i += 1) {
        // create a property if it doesn't exist
        if (typeof parent[parts[i]] === "undefined") {
            parent[parts[i]] = {};
        }
        parent = parent[parts[i]];
    }
    return parent;
};
MYAPP.namespace('once.upon.a.time.there.was.this.long.nested.property');
MYAPP.once.upon.a.time.there.was.this.long.nested.property.f = function(){
    console.log("very long namespace");
}
MYAPP.once.upon.a.time.there.was.this.long.nested.property.f(); //very long namespace
```

this
```javascript
var self = this;
function foo() { console.log(this); } // normal function call foo(); // `this` will refer to `window` // as object method
var obj = {bar: foo}; obj.bar(); // `this` will refer to `obj` // as constructor function
new foo(); // `this` will refer to an object that inherits from `foo.prototype`
//Private methods
function Animal(name){
    this.name = name; //public
    var secret = 1; //private
}
var animal = new Animal("dog");
animal.name;
//Privileged Methods
function Product()
{
    var name = "samsung"; //private
    this.getName = function(){
        return name;
    }
}
var product = new Product();
console.log(product.getName());
//getName  priveledge method, because can access private property name
//Modify Private property
function Gadget() {
    // private member
    var specs = {
        screen_width:  320,
        screen_height: 480,
        color: "white"
    };
    // public function
    this.getSpecs = function () {
        return specs;
    };
}
var gadget = new Gadget();
var specs = gadget.getSpecs();
console.log(gadget.getSpecs());
specs.color = "black";
specs.price = "free";
console.log(gadget.getSpecs());
```

When you’re directly returning a private variable from a privileged method and this variable happens to be an object or array, then outside code can modify the private variable because it’s passed by reference
Static Methods
```javascript
var Gadget = function () {};
// a static method
Gadget.isShiny = function () {
    return "you bet";
};
// a normal method added to the prototype
Gadget.prototype.setPrice = function (price) {
    this.price = price;
};
// calling a static method
Gadget.isShiny(); // "you bet"
// creating an instance and calling a method
var iphone = new Gadget();
iphone.setPrice(500);
```

Static Methods (call on object) - In such cases you need to be careful if you use this inside the static method. When you do Gadget.isShiny() then this inside isShiny() will refer to the Gadget constructor function. If you do iphone.isShiny() then this will point to iphone.
```javascript
var Gadget = function (price) {
    this.price = price;
};
// a static method
Gadget.isShiny = function () {
    console.log("you bet it costs " + this.price);
};
Gadget.prototype.isShiny = Gadget.isShiny;
Gadget.isShiny();
var iphone = new Gadget(500);
iphone.isShiny();
Private Static Members
var Gadget = (function () {
    // static variable/property
    var counter = 0,
        NewGadget;
    // this will become the
    // new constructor implementation
    NewGadget = function () {
        counter += 1;
    };
    // a privileged method
    NewGadget.prototype.getLastId = function () {
        return counter;
    };
    // overwrite the constructor
    return NewGadget;
}());
var iphone = new Gadget();
iphone.getLastId(); // 1
var ipod = new Gadget();
ipod.getLastId();   // 2
var ipad = new Gadget();
ipad.getLastId();   // 3
```

Function wrap (Immediate Functions)
```javascript
//It helps you wrap an amount of work you want to do without leaving any global variables behind
(function(){console.log(1)})()
(function(){ ... })(); //works as
temp = function(){ ... }; temp();
```

It defines an anonymous function and executes it straight away.
It's usually done so as not to pollute the global namespace with unwanted code.
You need to expose some methods from it, anything declared inside will be "private"

```javascript
var g = function(){return 1;};
g() // 1
var g = (function(){return 1;})();
g // g  is module now
var global = (function () {
    return this;
}());
(function(){})() //the same as
!function(){}();
The preceding ! takes the un-parseable statement, and allows it to be parsed by the JS engine, which in turn returns true.
function(){}(); // SyntaxError: Unexpected token (
!function(){}(); // true
!function(){}();
^          ^  ^
C          A  B
A. function(){} is an empty anonymous function
B. () executes the function (A), returning undefined
C. ! negates undefined, which becomes true
function foo() {}
```

Note that there's no semicolon, this is a function declaration. You need a separate invocation of foo() to actually run the function.
On the other hand, !function foo(){} is an expression, but that still doesn't invoke the function, but we can now use !function foo(){}() to do that, as () has higher precedence than !. Presumably the original example function doesn't need a self-reference so that the name then can be dropped.
So what the author is doing is saving a byte per function expression; a more readable way of writing it would be this: (function(){})();

It forces the parser to treat the part following the + as an expression. This is usually used for functions that are invoked immediately, e.g.:
+function() { console.log("Foo!"); }();
Without the + there, if the parser is in a state where it's expecting a statement (which can be an expression or several non-expression statements), the word function looks like the beginning of a function declaration rather than a function expression and so the () following it (the ones at the end of the line above) would be a syntax error (as would the absense of a name, in that example). With the +, it makes it a function expression, which means the name is optional and which results in a reference to the function, which can be invoked, so the () are valid.
+ is just one of the options. It can also be -, !, ~, or just about any other unary operator. Alternately, you can use parens (this is more common, but neither more nor less correct syntactically):
void function() { console.log("Foo!"); }();
+function(){console.log(1);}()  //NaN
!function(){console.log(1);}()  //true
(function() { console.log("Foo!"); })(); // or (function() { console.log("Foo!"); }());


Hoisting: A Problem with Scattered vars
```javascript
var a = 10;
function test(){
    console.log(this.a);
    console.log(a);
}
test();
function test2(){
    console.log(this.a);
    console.log(a);
    var a = 1;
    console.log(a);
}
test2();
```

The second alert will say “undefined” because a is considered declared as a local variable to the function. (Although the declaration comes after.) All the variable declarations get hoisted to the top of the function
Hoisting
```javascript
var a = 1;
function b() {
    a = 10;
    return;
    function a() {}
}
b();
console.log(a); //1
```

Перенос function a() {}, наверх, и а – локальная переменная
Hoisting
В JavaScript существует четыре основных способа появления идентификатора в области видимости:
Внутренние механизмы языка: например, во всех областях видимости доступны this и arguments.
Формальные параметры: у функций могут быть именованные формальные параметры, область видимости которых ограничена телом функции.
Объявления функций: объявленные в виде function foo() {}.
Объявления переменных: например, var foo;.
Hoisting
```javascript
(function() {
    var x = 1;
    function x() {};
    console.log(x);
})()
```

Функции объявленный при помощи function declaration имеют больший приоритет и понимаются выше var. Поэтому интерпретатор сначала выполнит function x() {};, а затем var x = 1;
Some rules
All vars inside function at the top
```javascript
//Cahce length
for (var i = 0, max = myarray.length; i < max; i++) {
    // do something with myarray[i]
}
This way you retrieve the value of length only once and use it during the whole loop
New Function
// antipattern
// for demo purposes only
var add = new Function('a, b', 'return a + b');
add(1, 2); // returns 3
```

Configuration Objects
```javascript
function addPerson(first, last, dob, gender, address) {
    console.log(arguments)
}
addPerson("Bruce", "Wayne", new Date(), null, null, "batman");
var conf = {
    username: "batman",
    first: "Bruce",
    last: "Wayne"
};
addPerson(conf);
```

Function Application
In some purely functional programming languages, a function is not described as being called or invoked, but rather it’s applied
```javascript
// define a function
var sayHi = function (who) {
    return "Hello" + (who ? ", " + who : "") + "!";
};
// invoke a function
sayHi(); // "Hello"
sayHi('world'); // "Hello, world!"
// apply a function
sayHi.apply(null, ["hello"]); // "Hello, hello!
sayHi.call(null, ["hello"]);
```

Call vs. Apply
```javascript
//The difference is that apply lets you invoke the function with arguments as an array; call requires the parameters be listed explicitly
function theFunction(name, profession) {
    console.log("My name is " + name + " and I am a " + profession + ".");
}
theFunction("John", "fireman");
theFunction.apply(undefined, ["Susan", "school teacher"]);
theFunction.call(undefined, "Claude", "mathematician");
(function (i) {console.log("i is "+i);}).call(this,1)
(function (i) {console.log("i is "+i);}).apply(this,[123])
arguments.callee
Early versions of JavaScript did not allow named function expressions, and because of that we could not make a recursive function expression:
// This snippet will work:
function factorial(n) {
    return (!(n>1))? 1 : factorial(n-1)*n;
}
[1,2,3,4,5].map(factorial);
// But this snippet will not:
[1,2,3,4,5].map(function(n) {
    return (!(n>1))? 1 : /* what goes here? */ (n-1)*n;
});
To get around this, arguments.callee was added so we could do:
 [1,2,3,4,5].map(function(n) {
        return (!(n>1))? 1 : arguments.callee(n-1)*n;
    });
```
arguments.callee is a reference to the function that is currently being called. First things first: don't use it: if you're in a strict context, it'll just spew errors
``(function(){arguments.callee();})();`` // Uncaught RangeError: Maximum call stack size exceeded

Currying
```javascript
function add(x, y) {
    if (typeof y === "undefined") { // partial
        return function (newy) {
            return x + newy;
        };
    }
    // full application
    return x + y;
}
console.log(add(3)(4));
var add2000 = add(2000);
console.log(add2000(10));
```

Currying
```javascript
var add = function (a) {
    return function (b) {
        return a + b;
    };
};
var add2 = add(2);
add2(10);
```

Currying (сумма многих значений)
```javascript
var add = function (a) {
    var sum = a;
    var inner = function (b) {
        if (b) {
            sum += b;
            return inner;
        } else {
            return sum;
        }
    };
    return inner;
};
```

Currying (valueOf)
```javascript
var add = function (a) {
    var sum = a;

    var inner = function (b) {
        sum += b;
        return inner;
    };

    inner.valueOf = function () {
        return sum;
    };

    return inner;
};
var add2 = add(2);
add2(10) //12
add2(10) //22
```


внутри запоминает результат последнего сложения и использует для последующих операций
```javascript
var add = function (orig) {
    var inner = function (val) {
        return add(parseInt(val+'', 10) == val ? inner.captured+val : inner.captured);
    };
    inner.captured = orig;
    inner.valueOf = function () {return inner.captured;};

    return inner;
};
var add2 = add(2);
var add = function (orig) {
    var inner = function (val) {
        return add(parseInt(val+'', 10) == val ? orig+val : orig);
    };
    inner.valueOf = function () {return orig;};

    return inner;
};
var add2 = add(2);
```

Binding (связывание)
```javascript
var john = {
    name: 'John',
    greet: function(person) {
        console.log("Hi " + person + ", my name is " + this.name);
    }};
john.greet("Mark");
var fx = john.greet;
fx("Mark");
This is the single most important issue with JavaScript binding—something I’ll refer to as “binding loss.”  It happens whenever you’re accessing a method through a reference instead of directly through its owner object
var fx = john.greet;
var bindFx = fx.bind(john);
bindFx("Mark");
var bindFx = fx.bind({"name": "Jack"});
bindFx("Mark");
this.x = 9;
var module = {
    x: 81,
    getX: function() { return this.x; }
};
module.getX(); // 81
var getX = module.getX;
getX(); // 9, because in this case, "this" refers to the global object
// Create a new function with 'this' bound to module
var boundGetX = getX.bind(module);
boundGetX(); // 81
```

```javascript
jQuery.proxy
var object = {
    x: 3,
    f: function() {
        console.log(this.x);
    }
}
setTimeout(object.f, 1000); // ⻢夥򠵮defined
setTimeout(object.f.bind(object), 1000); // ⻢夥򠳍

jQuery.proxy(context, name);
setTimeout($.proxy(object.f, object), 1000); // ⻢夥򠳍

var fn = $.proxy(object, "f");
setTimeout(fn, 1000);

Особенности bind
function ClassA() {
    console.log(this.x, arguments)
}

ClassA.prototype.x = "fromProtoA";

var ClassB = ClassA.bind({x : "fromBind"}, "bindArg");

ClassB.prototype = {x : "fromProtoB" };

new ClassA("callArg");
new ClassB("callArg");
ClassB("callArg");
ClassB.call({x: "fromCall"}, 'callArg');

Chaining Pattern
var obj = {
    value: 1,
    increment: function () {
        this.value += 1;
        return this;
    },
    add: function (v) {
        this.value += v;
        return this;
    },
    shout: function () {
        console.log(this.value);
    }
};

obj.increment().add(3).shout();

it helps you think about splitting your functions and creating smaller, more specialized functions, as opposed to functions that try to do too much
method() Method
if (typeof Function.prototype.method !== "function") {
    Function.prototype.method = function (name, implementation) {
        this.prototype[name] = implementation;
        return this;
    };
}

var Person = function (name) {
    this.name = name;
}.
method('getName', function () {
        return this.name;
}).
method('setName', function (name) {
    this.name = name;
    return this;
});

var a = new Person('Adam');
a.getName(); // 'Adam'
a.setName('Eve').getName(); // 'Eve'

Multiple Inheritance
function Cat(){
    this.catname = arguments[0];
}
function Dog(){
    this.dogname = arguments[1];
}
function Animal(){
    Cat.apply(this,arguments);
    Dog.apply(this,arguments);
}
var animal = new Animal("cat","dog");

//Multiple Inheritance 2
function Cat(name){
    this.name = name
}
Cat.prototype.makeSound = function(){
    console.log(this.name + " make sound meoww");
}
function Dog(name){
    this.name = name;
}
Dog.prototype.makeSound = function(){
    console.log(this.name + " make sound gaff");
}
function Animal(){
    Dog.apply(this, arguments);
}
Animal.prototype.cat = new Cat();
Animal.prototype.dog = new Dog();
var animal = new Animal("dog");
animal.cat.makeSound();
animal.dog.makeSound();
Borrowing Methods
var one = {
    name: "object",
    say: function (greet) {
        console.log( greet + ", " + this.name );
    }
};
// test
one.say('hi'); // "hi, object"

var two = {
    name: "another object"
};
one.say.apply(two, ['hello']);

Interface
function Animal(name){
    this.name = name;
    this.eat = function(){
        console.log(this.name + " is eating");
    }
    this.walk = function(){
        console.log(this.name + " is eating");
    }
    this.sleep = 10;
    Interface.implement(this, arguments, ["eat", "walk", "sleep"]);
}

var animal = new Animal("cat");

//Interface (custom function)
function Interface(){}
Interface.implement = function(obj, args, methods){
    for(var key in methods){
        var exist = false;
        for(var functionName in obj){
            if(typeof obj[functionName] == "function"){
                if(methods[key] == functionName){
                    exist = true;
                }
            }
        }
        if(!exist){
            var msg = "Function " + args.callee.name + " doesn't have a method " + methods[key];
            //console.log(msg);
            throw new Error(msg);
        }
    }
}
```

Js Patterns
Creational Patterns
-Singleton
-Abstract Factory
-Factory Method
Structural Patterns
Behavioral Patterns

Singleton - the idea of the singleton pattern is to have only one instance of a specific class. This means that the second time you use the same class to create a new object, you should get the same object that was created the first time.
```javascript
var uni  = new Universe();
var uni2 = new Universe();
console.log(uni === uni2);
//Singleton (code)
function Universe() {
    // do we have an existing instance?
    if (typeof Universe.instance === "object") {
        return Universe.instance;
    }
    // proceed as normal
    this.start_time = 0;
    this.bang = "Big";
    // cache static property
    Universe.instance = this;
    // implicit return:
    // return this;
}
```

Instance in a Closure - the secret sauce here is to rewrite the constructor. The original constructor is called the first time and it returns this as usual. Then the second, third time, and so on the rewritten constrictor is executed
```javascript
function Universe() {
    // the cached instance
    var instance = this;
    // proceed as normal
    this.start_time = 0;
    this.bang = "Big";
    // rewrite the constructor
    Universe = function () {
        return instance;
    };
}
// testing
var uni  = new Universe();
var uni2 = new Universe();
console.log(uni === uni2);
```




## DELETE
```javascript
//foo is property of object window and created via variable declaration
var foo = 1;
delete foo; //false
typeof foo; //number

//here foo also property of window object and created via function declaration
function foo(){}
delete foo; //false
typeof foo; //function

//here foo also property of window object, but created via property assignment
foo = 1;
delete foo; //true
typeof foo; //undefined
```