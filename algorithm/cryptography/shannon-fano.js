'use strict';


(()=>{
    const getHash = (str) => {
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
        return hash;
    }

    /**
     * Implementation of Shannon–Fano Algorithm
     * For more deatails check out https://en.wikipedia.org/wiki/Shannon%E2%80%93Fano_coding
     *
     * @param str
     * @returns {{}}
     */
    const getCodes = (str) => {
        const hash = getHash(str);
        let arr = [],
            sum = 0;
        Object.keys(hash).map(key=>{
            sum += hash[key];
            arr.push(
                {
                    key: key,
                    p: hash[key]
                }
            )
        });
        arr = arr.sort((a,b)=>b.p-a.p);
        const fano = (arr, sum, code = "") => {
            const len = arr.length;
            if(len > 1){
                let halfSum = 0;
                for(let i = 0; i < len; i++){
                    if(halfSum >= sum/2){
                        fano(arr.slice(0, i), halfSum, code + "0");
                        fano(arr.slice(i, len), sum-halfSum, code + "1");
                        break;
                    }
                    halfSum += arr[i].p;
                }
            }
            else{
                arr[0].code = code;
            }
        }
        fano(arr, sum);

        const codes = {};
        arr.map(item=>{
            codes[item.key] = item.code;
        })
        return codes;
    }


    const encode = (str, hash) => {
        let encodedStr = "";
        for(let i = 0, len = str.length; i < len; i++){
            encodedStr += hash[str[i]];
        }
        return encodedStr;
    }

    const decode = (str, hash) => {
        const codes = {};
        let min = Number.MAX_SAFE_INTEGER,
            max = Number.MIN_SAFE_INTEGER;
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
        let decodedStr = "";
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

    const str = `In the field of data compression, Shannon–Fano coding is a technique for
constructing a prefix code based on a set of symbols and their probabilities
(estimated or measured). It is suboptimal in the sense that it does not achieve
the lowest possible expected code word length like Huffman coding; however
unlike Huffman coding, it does guarantee that all code word lengths are within
one bit of their theoretical ideal − logP(x). The technique was proposed in
Claude Elwood Shannon's "A Mathematical Theory of Communication", his 1948
article introducing the field of information theory. The method was attributed
to Robert Fano, who later published it as a technical report.[1] Shannon–Fano
coding should not be confused with Shannon coding, the coding method used to
prove Shannon's noiseless coding theorem, or with Shannon-Fano-Elias coding
(also known as Elias coding), the precursor to arithmetic coding`;

    const hash = getCodes(str);
    console.log(
        hash,
        encode(str, hash),
        decode(encode(str, hash), hash),
    );
})();