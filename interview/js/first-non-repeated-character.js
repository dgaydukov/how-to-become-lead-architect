'use strict';


/**
 * Find the first non-repeated character in a string
 * First we create hash where we store how many times every symbol occur in a string
 * Then we go another loop and check if symbol occur one time
 * Time complexity is O(2*n) == O(n)
 *
 * @param str
 * @returns {*}
 */
const solution = (str) => {
    const len = str.length,
        hash = {};
    for(let i = 0; i < len; i++){
        if(hash[str[i]] == undefined){
            hash[str[i]] = 1;
        }
        else{
            hash[str[i]]++;
        }
    }
    for(let i = 0; i < len; i++){
        if(hash[str[i]] == 1){
            return str[i];
        }
    }
    return -1;
}


console.log(
    solution("abcdabddxsc"),
    solution("hello world"),
)