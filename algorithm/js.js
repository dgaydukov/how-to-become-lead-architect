'use strict';

const getShortestPath2 = (from, to, graph, path, pathLen) => {
    path = path || from;
    pathLen = pathLen || 0;
    const obj = graph[from];
    if(obj){
        Object.keys(obj).map(key=>{
            if(path.indexOf(key)==-1){
                path += key;
                pathLen += obj[key];
                if(key == to){
                    console.log(path, pathLen)
                }
                else{
                    getShortestPath(key, to, graph, path, pathLen);
                }
            }
        })
    }
}

const getShortestPath = (from, to, graph) => {
    const startNode = graph[from];
    startNode.path = from;
    const stack = [startNode];
    while(stack.length > 0){
        const obj = stack.shift();
        console.log(obj.routes)
        obj.visited = true;
        Object.keys(obj.routes).map(key=>{
            const item = graph[key];
            if(item && !item.visited){
                console.log("push", item.routes)
                stack.push(item)
            }
        })
    }
}

const graph = {
    A: {B: 2, C: 4},
    B: {A: 2, C: 1, E: 7},
    C: {A: 4, B: 1, D: 3, E: 4},
    D: {C: 3, E: 3},
    E: {B: 7, C: 4, D: 3, F: 2},
    F: {E: 2},
}
const graph2 = {
    A: {routes: {B: 2, C: 4}},
    B: {routes: {A: 2, C: 1, E: 7}},
    C: {routes: {A: 4, B: 1, D: 3, E: 4}},
    D: {routes: {C: 3, E: 3}},
    E: {routes: {B: 7, C: 4, D: 3, F: 2}},
    F: {routes: {E: 2}},
}

console.log(
    getShortestPath("A", "F", graph2),
)


