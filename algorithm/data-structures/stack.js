'use strict';

/**
 * Stack - LIFO (last in first out)
 */
const Stack = (()=>{
    const data = [];
    class Stack{
        push(value){
            data.push(value);
            return this.size;
        }
        pop(){
            return data.pop();
        }
        get size(){
            return data.length;
        }
    }

    return Stack;
})();


const stack = new Stack();
stack.push("first");
stack.push("second");
stack.push("third");
while(stack.size){
    console.log(stack.pop());
}