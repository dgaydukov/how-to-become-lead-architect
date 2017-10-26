'use strict';

/**
 * Cryptography based on permutaiton. For example
 * helloworld based on 4 will be
 * hell
 * owor
 * ld
 * => h0lewdlolr
 */

/**
 * Encode
 * Basically create new string based on index moving
 *
 * @param str
 * @param n
 * @returns {string}
 */
const encode = (str, n) => {
    const len = str.length,
        m = Math.ceil(len/n),
        total = m * n;
    let code = "",
        k = 0;
    for(let i = 0; i < total; i++){
        //console.log(i, k);
        code += str[k] ? str[k] : "";
        k = k + n;
        if(k >= total){
            k = k - total + 1;
        }
    }
    return code;
}

/**
 * Decoding
 *
 * @param str
 * @param n
 * @returns {string}
 */
const decode = (str, n) => {
    const len = str.length,
        m = Math.ceil(len/n),
        total = m * n;
    let code = "",
        k = 0,
        index = 0,
        j = 0;
    for(let i = 0; i < len; i++){
        j++;
        // make moving only if len/n not whole number
        if(j == n && len/n!=m){
            j = 0;
            index = index - 1;
        }
        code += str[index];
        k = k + m;
        if(k >= total){
            k = k - total + 1;
        }
        index = k;
    }
    return code;
}


console.log(
    encode("helloworld", 5),
    decode("hweolrllod", 5),
)