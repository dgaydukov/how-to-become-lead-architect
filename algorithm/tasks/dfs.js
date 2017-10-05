'use strict';

/**
 * class for building Graph Tree
 */
class Node{
    constructor(value){
        this.children = [];
        this.getValue = () => value;
    }

    setChildren(...children){
        for(let i = 0, len = children.length; i < len; i++){
            this.children.push(children[i])
        }
    }

    getChildren(){
        return this.children;
    }
}

/**
 * Deep First search
 *
 * @param value
 * @param node
 * @returns {*}
 */
const dfs = (value, node) => {
    //console.log(value, node, node.getValue())
    if(value == node.getValue()){
        return node;
    }
    const children = node.getChildren();
    for(let i = 0, len = children.length; i < len; i++){
        const child = dfs(value, children[i])
        if(child){
            return child;
        }
    }
}

/**
 * Deep First search (second version)
 *
 * @param value
 * @param node
 * @returns {*}
 */
const dfs2 = (value, node) => {
    //console.log(value, node, node.getValue())
    if(value == node.getValue()){
        return node;
    }
    const children = node.getChildren();
    for(let i = 0, len = children.length; i < len; i++){
        if(value == children[i].getValue()){
            return children[i];
        }
        dfs(value, children[i]);
    }
}

const node1 = new Node(1),
    node2 = new Node(2),
    node3 = new Node(3),
    node4 = new Node(4),
    node5 = new Node(5),
    node6 = new Node(6),
    node7 = new Node(7),
    node8 = new Node(8),
    node9 = new Node(9),
    node10 = new Node(10),
    node11 = new Node(11),
    node12 = new Node(12);

node1.setChildren(node2, node7, node8);
node2.setChildren(node3, node6);
node3.setChildren(node4, node5);
node8.setChildren(node9, node12);
node9.setChildren(node10, node11);

console.log(
    node1.getChildren(),
    dfs(5, node1),
    dfs2(5, node1)
)