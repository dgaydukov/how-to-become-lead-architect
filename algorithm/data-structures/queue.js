'use strict';

/**
 * Queue - FIFO (first in first out)
 */
const Queue = (()=>{
    const data = [];

    class Queue{
        push(value){
            data.push(value);
            return this.size;
        }
        pop(){
            return data.shift();
        }
        get size(){
            return data.length;
        }
    }

    return Queue;
})();

const queue = new Queue();
queue.push("first");
queue.push("second");
queue.push("third");
while(queue.size){
    console.log(queue.pop());
}