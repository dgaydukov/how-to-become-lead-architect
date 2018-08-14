'use strict';


/**
 * The idea of conversion between different base number is that we first convert it to base 10 system
 * and then to divide to our desired system
 *
 * @param value
 * @param from
 * @param to
 * @returns {string}
 */
const baseConvert = (value, from, to) => {
    const base = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        hash = {};
    let num = value,
        result = "";
    for(let i = 0, len = base.length; i < len; i++){
        hash[base[i]] = i;
    }
    if(from != 10){
        num = 0;
        for(let i = 0, len = value.length; i < len; i++){
            num += hash[value[len-1-i]] * Math.pow(from, i);
        }
    }
    while(num > 0){
        result = base[(num % to)] + result;
        num = Math.floor(num / to);
    }
    if(to == 10){
        result = Number(result);
    }
    return result;
}

const decToBase = (num, radix) => {
    return baseConvert(num, 10, radix);
}

const baseToDec = (str, radix) => {
    return baseConvert(str, radix, 10);
}


console.log(
    baseToDec("3E7", 16),
    decToBase(999, 16),
    baseConvert("1010", 2, 10),
    baseConvert(10, 10, 2)
)