# Inheritance vs Composition


## Interview

Recently in ony of the interview, i was asked about following
We have 3 classes Human, Leg, Hand. In the end we need human with legs & hands.
```
class Leg{
    step(){}
}

class Hand{
    grab(){}
}

class Human extends Leg, Hand
```
And gave solution: "We extend Human from Hand & Leg". So what do you think about this design.
But i had a gut feeling that there is something wrong with this.

## Inheritance

We use inheritance when we need an ability to substitute one class with another. For example we have a Car & SUV. And if we extend SUV from Car, we can from now on
pass Car to a function ,but use SUV
```
class Car{
    drive(){}
}
class SUV extends Car {}

function drive(car: Car){
    car.drive();
}

var suv = new SUV();
drive(suv);
```

## Composition

We use composition when one object consists of others. For example we have Car class, and Engine, Frame, Wheel. Here to use inheritance is useless. Because Card doesnt' inherit
from Engine. Car compose of Engine and other parts. So the best approach is to have all this objects inside Car
```
class Engine{}
class Frame{}
class Wheel{}
class Car{
    engine: Engine;
    frame: Frame;
    wheel: Wheel;
}
```


## Answer to the Interview question

As you already guessed, inheritance is wrong here. Because Human is not child of Hand and Leg. Human composes of 2 Legs & 2 Hands.




