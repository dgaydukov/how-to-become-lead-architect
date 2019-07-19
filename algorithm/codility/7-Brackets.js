'use strict';

(() => {
    /**
     * On every iteration we check that every close tag ']', has open tag before '['
     * 
     * @param str
     * @returns {number}
     */
    const solution = (str) => {
        const len = str.length,
            hash = { "]": "[", ")": "(", "}": "{" },
            prev = [];
        for (let i = 0; i < len; i++) {
            if (hash[str[i]]) {
                if (prev[prev.length - 1] == hash[str[i]]) {
                    prev.pop();
                }
                else {
                    return 0;
                }
            }
            else {
                prev.push(str[i]);
            }
        }
        return prev.length > 0 ? 0 : 1;
    }


    console.log(
        solution("{[()()]}"),
        solution("([)()]"),
        solution("{{{{")
    );
})();