'use strict';

/**
 * PriorityQueue - it's a queue where they stored based on priority
 */
const PriorityQueue = (()=>{
    const data = [];

    class PriorityQueue{
        push(value, priority){
            for (var i = 0; i < data.length && data[i].priority >= priority; i++);
            data.splice(i, 0, {value: value, priority: priority});
        }
        pop(){
            return data.pop();
        }
        get size(){
            return data.length;
        }
    }

    return PriorityQueue;
})();

const pq = new PriorityQueue();
pq.push('high', 9);
pq.push('low', 1);
pq.push('medium-low', 3);
pq.push('medium', 5);
pq.push('medium-high', 7);
while(pq.size){
    console.log(pq.pop());
}