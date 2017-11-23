'use strict'

/**
 * Basic implementaion of Huffman encoding algorithm
 * The idea is to build huffman tree first
 * Then using depth-frist search walk though the tree and get final code
 * More details https://en.wikipedia.org/wiki/Huffman_coding
 */
(()=>{
    const getHuffmanTree = (hash) => {
        const tree = [];
        Object.keys(hash).map((key,i)=>{
            tree[i] = {
                key: key,
                value: hash[key],
            }
        });
        const buildTree = (arr) => {
            if(arr.length > 2){
                arr = arr.sort((a,b)=>b.value-a.value);
            }
            const len = arr.length;
            const huffmanArr = arr.slice(0, len-2);
            const left = arr[len-2], 
                right = arr[len-1];
            left.code = "0";
            right.code = "1";
            huffmanArr.push({
                key: null,
                value: left.value + right.value,
                children: [left, right]
            });
            if(huffmanArr.length == 1){
                return huffmanArr;
            }
            return buildTree(huffmanArr);
        };
        const huffmanCode = {};
        const ds = (arr, code) => {
            code = code || "";
            for(let i = 0, len = arr.length; i < len; i++){
                const obj = arr[i];
                obj.code = obj.code || "";
                if(obj.key){
                    huffmanCode[obj.key] = code+obj.code;
                }
                if(obj.children){
                    ds(obj.children, code+obj.code);
                }
            }
        }
        const huffmanTree = buildTree(tree);
        ds(huffmanTree);
        return huffmanCode;
    }
    
    const hash = {
        A: 15,
        B: 7,
        C: 6,
        D: 6,
        E: 5,
    }
    
    console.log(
        getHuffmanTree(hash)
    )
})();