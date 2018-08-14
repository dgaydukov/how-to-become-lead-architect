'use strict';

(()=>{
    const int = (val) => {
        if(val){
            return parseInt(val);
        }
        return 0;
    }

    const add = (a, b)=>{
        const arrA = a.toString().split("").reverse(),
            arrB = b.toString().split("").reverse(),
            maxLen = Math.max(arrA.length, arrB.length);
        const res = [];
        let next = 0;
        for(let i = 0; i < maxLen; i++){
            let sum = int(arrA[i]) + int(arrB[i]) + next;
            if(sum > 9){
                next = Math.floor(sum/10);
                sum = sum%10;
            }
            else{
                next = 0;
            }
            if(i == maxLen -1){
                sum = sum + next * 10;
            }
            res.push(sum);
        }
        return res.reverse().join("");
    }
    const subtract = (a, b) => {
        const arrA = a.toString().split("").reverse(),
            arrB = b.toString().split("").reverse(),
            maxLen = Math.max(arrA.length, arrB.length);
        const res = [];
        let prev = false;
        for(let i = 0; i < maxLen; i++){
            let diff = int(arrA[i]) - int(arrB[i]);
            if(prev){
                diff--;
                prev = false;
            }
            if(diff < 0 && arrA[i+1]){
                diff = diff + 10;
                prev = true;
            }
            if(i == maxLen-1){
                if(diff == 0){
                    break;
                }
                if(diff < 0){
                    console.log(diff)
                }
            }
            res.push(diff);
        }
        return res.reverse().join("");
    }
    const multiply = (n, m) => {
        const arr = m.toString().split("").reverse(),
            len = arr.length;
        const res = [];
        let next = 0;
        for(let i = 0; i < len; i++){
            let mul = int(arr[i]) * n + next;
            if(mul > 9){
                next = Math.floor(mul/10);
                mul = mul%10;
            }
            else{
                next = 0;
            }
            if(i == len -1){
                mul = mul + next * 10;
            }
            res.push(mul);
        }
        return res.reverse().join("");
    }
    const mul = (a, b) => {
        const arrA = a.toString().split("").reverse();
        let res = "0";
        for(let i = 0; i < arrA.length; i++){
            const mul = multiply(arrA[i], b) + "0".repeat(i);
            res = add(res, mul);
        }
        return res;
    }
    const div = (a, b) => {

    }
    const power = (a, b) => {
        let result = a;
        for(let i = 0; i < b-1; i++){
            const r = mul(a, result);
            result = add(result, r);
        }
        return result;
    }
    const mod = (a, b) => {

    }
    const factorial = (n) => {
        let result = 1;
        for(let i = 2; i <= n; i++){
            result = mul(result, i);
        }
        return result;
    }


    let a = "123456789123456789123456789123456789",
        b = "123456789123456789123456789123456789";

    a = '1200', b = '30';
    console.log(
        div(a, b),
    )

})()