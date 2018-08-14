'use strict';

/**
 *
 * Stack & Queue are two basic data structure in JavaScript execution
 * All JavaScript code executes in these 2 structures, called Call Stack (CS) and Event Queue (EQ)
 * JS Interpreter reads code from top to bottom adding every line to CS and then execute it one by one
 * Stack - FIFO - first in, first out. So when everything added to a CS, js stats execute line by line and empty stack
 * What is the CS size. You can check it out by running getCallStackLength
 *
 * The point, is that we can solve stack overflow problem with EQ
 *
 */

/**
 * Nice way to find out the maximum length of Js stack
 *
 * @returns {*}
 */
const getCallStackLength = () => {
    try {
        return 1 + getCallStackLength();
    } catch (e) {
        return 1;
    }
}

/**
 * Will get Execption when run f(10000)
 *
 * @param n
 */
const f = (n) => {
    /* logic here */
    if(n > 0){
        f(n-1);
    }
}


/**
 * When run f(10000), you get "Uncaught RangeError: Maximum call stack size exceeded"
 * The problem, is that stack overflow, and can't clear itself quickly
 * NOTE, if you add console.log(n) to function, it will work, because every console.log take some time, so out stack is able to clear itself
 * But how to solve this problem
 * Simple solution to move logic to Loop, check out fLoop
 * But the more interesting solution is to use EQ, check out fEQ
 *
 * @param n
 */
const f = (n) => {
    /* logic here */
    if(n > 0){
        f(n-1);
    }
}

/**
 * Simple solution with For Loop
 *
 * @param n
 */
const fLoop = (n) => {
    for(let i = n; i > 0; i--){
        /* logic here */
    }
}

/*


 */

/**
 * Advanced solution with Event Queue
 * We move login from "Call Stack" to "Event Queue"
 * 
 *  The Call Stack is the stack of currently executing functions and their state.
 *  The Event Queue is a queue of functions which will run once the call stack is empty (and enough time has passed).
 *  So whenever a function that's placed in the event queue is called, the call stack is empty.
 *  If you call a function recursively without placing those calls on the event queue, the call stack will continue to grow, so we place all functions into
 *  event queue, and Event Queue then moves them one by one to stack, thus avoiding maximum call stack problem
 *
 *
 * @param n
 */
const fEQ = (n) => {
    if(n > 0){
        setTimeout(()=>{
            f2(n-1)
        }, 0)
    }
}