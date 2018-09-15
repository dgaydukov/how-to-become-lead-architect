'use strict';


/*
 We got a list. Right function to get n-th element from the end.

 {
 value: 0,
 next: {
 value: 5,
 next: {
 value: 2,
 next: null,
 },
 },
 };
 */


/**
 * StraightForward solution to get n-th value from up-down. We got from first to the last element, and if found out return it
 *
 * @param obj
 * @param n
 * @returns {number}
 */
const getValue = (obj, n) => {
    if(n > 0 && !obj.next){
        return -1;
    }
    if(n == 0){
        return obj.value;
    }
    return getValue(obj.next, n-1);
}

/**
 * More sophisticated solution
 * Here we go from up-down (because in recursion we can  only go from top to bottom - stack),
 * but here we remember all found solution, and when we reach bottom (obj.next is null), we return value in array
 *
 * @param obj
 * @param n
 * @param index
 * @param arr
 * @returns {number}
 */
const getValueDownUp = (obj, n, index, arr) => {
    arr = arr || [];
    index = index || n;
    if(obj){
        arr[n] = obj.value;
        if(!obj.next){
            return arr[n-index] ? arr[n-index] : -1;
        }
        return getValueDownUp(obj.next, n+1, index, arr);
    }
}


const obj =  {
    value: 0,
    next: {
        value: 10,
        next: {
            value: 20,
            next: {
                value: 30,
                next: {
                    value: 40,
                    next: {
                        value: 50,
                        next: {
                            value: 60,
                            next: null,
                        },
                    },
                },
            },
        },
    },
};

console.log(
    getValue(obj, 1),
    getValueDownUp(obj, 1),
)