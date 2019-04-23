/**
 * Given an array of dna strings find the string with longest substring
 */

(() => {
    const getMaxSubstr = (symbols, strings) => {
        const hash = {};
        symbols.map(s => {
            hash[s] = 1;
        });
        const getMaxLen = str => {
            const len = str.length;
            let counter = 0;
            let max = 0;
            for (let i = 0; i < len; i++) {
                if (hash[str[i]]) {
                    counter++;
                }
                else {
                    counter = 0;
                }
                if (max < counter) {
                    max = counter;
                }
            }
            return max;
        }
        let maxLen = 0;
        for (const str of strings) {
            const len = getMaxLen(str);
            if(maxLen < len){
                maxLen = len;
            }
        }
        return maxLen;
    }

    const symbols = ['A', 'T', 'C', 'G'];
    const strings = [
        'ATGSABGTGXAAXXXGTXTTG',
        'ATGSABGTGXAAXXXGTXTTG',
        'ATGSABGTGXAAXXXGTXTTG',
    ];
    const maxLen = getMaxSubstr(symbols, strings);
    console.log(maxLen);
});