'use strict';

/**
 * For 5 letters of latin alphabet we have their binary codes
 *
 A: "00",
 B: "100",
 C: "110",
 D: "01",
 E: "101",
 * 
 * Determine what letter cipher in this string 110011000011010101
 * 
 * Solution: Since out letter are uniquely encoded with Fano algorithm we can solve ploblem this way
 * Out codes can be of length 2 or 3
 * So we take 2 and 3 chars from the str it's 11 or 110, So first letter is C (C = 110)
 * Then we take 01 and 011, so second letter is D (D = 01)
 * and so on
 */
(()=>{
    const hash = {
        A: "00",
        B: "100",
        C: "110",
        D: "01",
        E: "101",
    }
    const str = "110011000011010101";

    /**
     * Decode function, takes encoded string and hashTable with codes
     * It first convert hastable from letter: code to code: letter
     * Then calculate min and max length of codes
     * And then for every subcode from min to max it check in new hashtable is such code exists
     * 
     * @param str
     * @param hash
     * @returns {string}
     */
    const decode = (str, hash) => {
        let decodedStr = "",
            min = Number.MAX_SAFE_INTEGER,
            max = Number.MIN_SAFE_INTEGER;
        const codes = {};
        Object.keys(hash).map(letter=>{
            const code = hash[letter],
                len = code.length;
            if(min > len){
                min = len;
            }
            if(max < len){
                max = len;
            }
            codes[code] = letter;
        });
        for(let i = 0, len = str.length; i < len; i++){
            for(let j = i+min; j <= i+max; j++){
                let slice = "";
                for(let k = i; k < j; k++){
                    slice += str[k];
                }
                if(codes[slice]){
                    decodedStr += codes[slice];
                    i = j - 1;
                    break;
                }
            }
        }
        return decodedStr;
    }

    console.log(
        decode(str, hash),
        "CDBACED"
    )
})();