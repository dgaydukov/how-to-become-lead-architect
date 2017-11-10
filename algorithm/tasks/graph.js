'use strict';

/**
 * class for building Graph Tree
 */
class Node{
    constructor(value){
        const children = [];
        this.getValue = () => value;

        this.setChildren = (...list) => {
            for(let i = 0, len = list.length; i < len; i++){
                children.push(list[i])
            }
        }

        this.getChildren = () => {
            return children;
        }
    }
}

/**
 * Class for searching Graph
 * the difference between DFS and BFS is that with a DFS you push the children of the current node onto a stack, so they will be popped and processed before everything else, while for BFS you push the children onto the end of a queue, so they will be popped and processed after everything else
 * DFS is easy to implement recursively because you can use the call stack as the stack. You can't do that with BFS, because you need a queue
 */
class GraphSearch{
    constructor(node, value){
        this.getNode = () => node;
        this.getValue = () => value;
    }

    recursiveDFS(node){
        node = node || this.getNode();
        node.visited = true;
        if(this.getValue() == node.getValue()){
            return node;
        }
        const children = node.getChildren();
        for(let i = 0, len = children.length; i < len; i++){
            if(!children[i].visited){
                const child = this.recursiveDFS(children[i])
                if(child){
                    return child;
                }
            }
        }
    }

    DFS(){
        let iteration = 0;
        const stack = [this.getNode()];
        while (stack.length > 0){
            iteration++;
            const node = stack.pop();
            node.visited = true;
            if(this.getValue() == node.getValue()){
                console.log("DFS iteration", iteration)
                return node;
            }
            const children = node.getChildren();
            for(let i = 0, len = children.length; i < len; i++){
                if(!children[i].visited){
                    stack.push(children[i]);
                }
            }
        }
    }

    BFS(){
        let iteration = 0;
        const stack = [this.getNode()];
        while (stack.length > 0){
            iteration++;
            const node = stack.shift();
            node.visited = true;
            if(this.getValue() == node.getValue()){
                console.log("BFS iteration", iteration)
                return node;
            }
            const children = node.getChildren();
            for(let i = 0, len = children.length; i < len; i++){
                if(!children[i].visited){
                    stack.push(children[i]);
                }
            }
        }
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
node2.setChildren(node3, node6, node1);
node3.setChildren(node4, node5);
node8.setChildren(node9, node12);
node9.setChildren(node10, node11);

const search = new GraphSearch(node1, 11);

console.log(
    node1.getChildren(),
    //search.recursiveDFS(),
    search.DFS(),
    search.BFS()
)