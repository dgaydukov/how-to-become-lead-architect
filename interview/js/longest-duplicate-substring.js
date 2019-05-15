/*
Given a string S, consider all duplicated substrings: (contiguous) substrings of S that occur 2 or more times.  (The occurrences may overlap.)

Return any duplicated substring that has the longest possible length.  (If S does not have a duplicated substring, the answer is "".)

 

Example 1:

Input: "banana"
Output: "ana"
Example 2:

Input: "abcd"
Output: ""
*/

(()=>{

    const substr = (str) => {
        const arr = [];
        const hash = {};
        const len = str.length;
        for(let i = 0; i < len; i++){
            const ch = str[i];
            const start = arr.length - 1;
            const end = start - i;;
            for(let j = start; j > end; j--){
                arr.push(arr[j]+ch)
            }
            arr.push(ch);
        }
        const arrLen = arr.length;
        for(let i = 0; i < arrLen; i++){
            const s = arr[i];
            if(s.length > 1){
                if(hash[s]){
                    hash[s]++;
                }
                else{
                    hash[s]=1;
                }
            }
        }
        let sub = '';
        Object.keys(hash).map(s=>{
            if(hash[s] > 1){
                if(s.length > sub.length){
                    sub = s;
                }
            }
        });
        return sub;
    }
    
    const arr = ['banana', 'abcd'];
    arr.map(s=>{
        console.log(`${s}: ${substr(s)}`);
    });
})();