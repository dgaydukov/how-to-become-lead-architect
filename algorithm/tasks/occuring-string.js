'use strict';

/**
 * Define a function that takes an array of strings, and returns the most commonly occurring string that array
 * Difficulty O(n), because we use only one iteration
 * 
 * @param array
 * @returns {{string: string, occurringNumber: number}}
 */
function findOccurringString(array) {
    var hash = {},
        maxOccurNumber = 0,
        str = '';
    for(var i = 0, len = array.length; i < len; i++){
        var item = array[i];
        if(hash[item]){
            hash[item]++;
        }
        else{
            hash[item] = 1;
        }
        if(maxOccurNumber < hash[item]){
            maxOccurNumber = hash[item];
            str = item;
        }
    }
    return {string: str, occurringNumber: maxOccurNumber};
}
var array = [
    'why',
    'cool',
    'foo',
    'do',
    'yes',
    'foo',
    'bar',
    'bar',
    'no',
    'foo',
];
findOccurringString(array);