# Understanding Node.js EventEmitter

### Problem Description

Node.js `EventEmitter` class is kind of `Observer` pattern and used when you want to connect some parts of your apps.
Basically it has 2 methods `on` - to listen for event and `emit` - to fire event


```typescript
const EventEmitter = require("events").EventEmitter

class Car extends EventEmitter{
    constructor(props = null){
        super(props)
        this.mountEvents()
    }
    mountEvents(){
        this._on("start")
            .then(data=>{
                console.log("car start")
            })
        this._on("stop")
            .then(data=>{
                console.log("car stop")
            })
    }
    _on(eventName){
        return new Promise((resolve, reject)=>{
            this.on(eventName, (err, data)=>{
                if(err){
                    return reject(err)
                }
                resolve(data)
            })
        })
    }
    start(){
        this.emit("start", null, {})
    }
    stop(){
        this.emit("stop", null, {})
    }
    drive(time){
        console.log(`drive for ${time} sec`)
        this.start()
        setTimeout(()=>{
            this.stop()
        }, time * 1000)
    }
}

const car = new Car()
car.drive(1)
``` 












