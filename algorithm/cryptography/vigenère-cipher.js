'use strict';

const alphabetHash = () => {
    const hash = {};
    'abcdefghijklmnopqrstuvwxyz'.split('').map((letter, index)=>{
        hash[letter] = index;
    });
    return hash;
}

const alphabetIndexHash = () => {
    const hash = alphabetHash(),
        indexHash = {};
    Object.keys(hash).map((letter, index)=>{
        indexHash[index] = letter;
    });
    return indexHash;
}

const encode = (str, salt) => {
    const hash = alphabetHash(),
        len = Object.keys(hash).length,
        indexHash = alphabetIndexHash();
    let j = 0,
        code = "";
    for(let i = 0, strLen = str.length; i < strLen; i++){
        const index = (hash[str[i]] + hash[salt[j]]) % len;
        code += indexHash[index];
        j++;
        if(j == salt.length){
            j = 0;
        }
    }
    return code;
}


const decode = (str, salt) => {
    const hash = alphabetHash(),
        len = Object.keys(hash).length,
        indexHash = alphabetIndexHash();
    let j = 0,
        code = "";
    for(let i = 0, strLen = str.length; i < strLen; i++){
        const index = (hash[str[i]] - hash[salt[j]] + len) % len;
        code += indexHash[index];
        j++;
        if(j == salt.length){
            j = 0;
        }
    }
    return code;
}

console.log(
    encode("searchtwitter", "pass"),
    decode("hesjrhloxtlwg", "pass"),
)