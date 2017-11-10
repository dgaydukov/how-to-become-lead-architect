'use strict';


/**
 * LinkedList is hirerarchy data structure stored in linear array
 */
const LinkedList = (()=>{
    const data = [];

    class LinkedList{
        constructor(){
            this.next = null;
        }
        push(value){
            const item = {value: value, next: null};
            data.push(item);
            const size = this.size;
            if(size == 1){
                this.next = 1;
            }
            else{
                data[size-2].next = size-1;
            }
        }
        getNext(){
            const next = this.next-1;
            this.next++;
            if(this.next > this.size){
                this.next = null;
            }
            return data[next];
        }
        get size(){
            return data.length;
        }
    }

    return LinkedList;
})();

const ll = new LinkedList();
ll.push("first");
ll.push("second");
ll.push("third");
while(ll.next){
    console.log(ll.getNext())
}