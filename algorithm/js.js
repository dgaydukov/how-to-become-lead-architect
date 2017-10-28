'use strict';











(()=>{

    const getCodes = (hash) => {
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
            //console.log(arr.map(k=>k.key).join(""), sum, code)
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

    const getCodes2 = (hash) => {
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
            //console.log(arr.map(k=>k.key).join(""), sum, code)
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

    const hash = {
        A: 15,
        B: 7,
        C: 6,
        D: 6,
        E: 5,
    }
    console.log(
        getCodes2(hash)
    );
})();














console.log(
    //solution(str),
)














// /**
//  * class for building Graph Tree
//  */
// class Node{
//     constructor(value){
//         this._value = value;
//         this._parent = null;
//         this._depth = 0;
//         this._children = [];
//     }
//     setDepthRecursive(node){
//         if(node){
//             node.depth = node.depth + 1;
//             this.setDepthRecursive(node.parent);
//         }
//     }
//     get depth(){
//         return this._depth;
//     }
//     set depth(depth){
//         this._depth = depth;
//     }
//
//     get value(){
//         return this._value;
//     }
//     set value(value){
//         this._value = value;
//     }
//
//     get parent(){
//         return this._parent;
//     }
//     set parent(parent){
//         this._parent = parent;
//     }
//
//     set children(children){
//         this.setDepthRecursive(this);
//         for(let i = 0, len = children.length; i < len; i++){
//             const child = children[i];
//             child._parent = this;
//             this._children.push(child)
//         }
//     }
//     get children(){
//         return this._children;
//     }
// }
//
//
// const node1 = new Node(1),
//     node2 = new Node(2),
//     node3 = new Node(3),
//     node4 = new Node(4),
//     node5 = new Node(5),
//     node6 = new Node(6),
//     node7 = new Node(7),
//     node8 = new Node(8),
//     node9 = new Node(9),
//     node10 = new Node(10),
//     node11 = new Node(11),
//     node12 = new Node(12);
//
// node1.children = [node2, node7, node8];
// node2.children = [node3, node6];
// // node3.children = [node4, node5];
//  //node8.children = [node9, node12];
// // node9.children = [node10];
// // node5.children = [node11];
//
// console.log(
//     node1
// )