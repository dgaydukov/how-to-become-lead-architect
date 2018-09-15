/**
 *
 * 
 * @param str
 * @returns {number}
 */
const solution = (str)=>{
    const len = str.length
    if(len == 1){
        return 0
    }
    let hash = {}
    let leftStr = ""
    for(let i = 0; i < len; i++){
        leftStr = str[i] + leftStr
        hash[leftStr] = 1
        let rightStr = ""
        for(let j = i+1; j < len; j++){
            rightStr += str[j]
            if(hash[rightStr]){
                return i
            }
        }
    }
    return -1
}