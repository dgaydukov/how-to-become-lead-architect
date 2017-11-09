'use strict';


const strSearch = (str, search) => {
    let iteration = 0;
    const len = str.length;
    const len2 = search.length;
    for(let i = 0; i < len; i++){
        let same = 0;
        for(let j = 0; j < len2; j++){
            iteration++;
            if(str[i+j] == search[j]){
                same++;
            }
            else{
                break;
            }
        }
        if(same == len2){
            console.log("iteration", iteration);
            return i;
        }
    }
    console.log("iteration", iteration);
    return -1;
}

const kmp = (str, search) => {
    let iteration = 0;
    const len = str.length;
    const len2 = search.length;
    for(let i = 0; i < len; i++){
        let same = 0;
        for(let j = 0; j < len2; j++){
            //console.log(i, j, i+j, str[i], str[i+j], search[j])
            iteration++;
            if(str[i+j] == search[j]){
                same++;
            }
            else{
                break;
            }
        }
        if(same == len2){
            console.log("iteration", iteration);
            return i;
        }
        if(same > 0){
            i = i + len2 -same;
        }
    }
    console.log("iteration", iteration);
    return -1;
}


const str = "ABC ABCDAB ABCDABCDABDE";
const search = "ABCDABD";
console.log(
    strSearch(str, search),
    kmp(str, search),
)