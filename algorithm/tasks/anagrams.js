'use strict';

/**
 * Given a 50,000 word dictionary, find me an efficient way to find anagrams
 * Solution: For each word in the dictionary, take and sort it's characters..... make becomes aekm,
 * then see if it (the sorted word) exists in a hash
 * @param arr
 * @returns {{}}
 */
function anagram(arr) {
    var hash = {},
        anagrams = {};
    for(var i = 0, len = arr.length; i < len; i++){
        var word = arr[i].replace(" ", "").split('').sort().join('');
        if(hash[word]){
            hash[word]++;
            anagrams[word] = hash[word];
        }
        else{
            hash[word] = 1;
        }
    }
    return anagrams;
}

var array = [
    "foo",
    "bar",
    "baz",
    "rab",
    "yea",
    "cool",
    "make",
    "yes",
    "kema",
    "make",
    'zf'
]

console.log(anagram(array))