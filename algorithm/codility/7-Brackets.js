'use strict';

/**
 * Simple solution, check on every iteration, that every close tags has open tag
 * 
 * @param str
 * @returns {number}
 */
const solution = (str) => {
    const len = str.length,
        prev = [];
    for(let i = 0; i < len; i++){
        if(str[i] == ")"){
            if(prev[prev.length-1] == "("){
                prev.pop();
            }
            else{
                return 0;
            }
        }
        else if(str[i] == "]"){
            if(prev[prev.length-1] == "["){
                prev.pop();
            }
            else{
                return 0;
            }
        }
        else if(str[i] == "}"){
            if(prev[prev.length-1] == "{"){
                prev.pop();
            }
            else{
                return 0;
            }
        }
        else{
            prev.push(str[i]);
        }
    }
    return prev.length>0?0:1;
}

/**
 * Quick way to check
 *
 * @param str
 * @returns {number}
 */
const solution = (str) => {
    const len = str.length,
        prev = [],
        tags = [
            {open: "[", close: "]"},
            {open: "(", close: ")"},
            {open: "{", close: "}"},
        ];
    for(let i = 0; i < len; i++){
        let add = 0;
        for(let j = 0, l = tags.length; j < l; j++){
            if(str[i] == tags[j].close){
                if(prev[prev.length-1] == tags[j].open){
                    prev.pop();
                    add++;
                }
                else{
                    return 0;
                }
            }
        }
        if(add == 0){
            prev.push(str[i]);
        }
    }
    return prev.length>0?0:1;
}


console.log(
    solution("{[()()]}"),
    solution("([)()]"),
    solution("{{{{")
);