'use strict';


/**
 * Task
 * Given the table find the shortest path between A and K
 */


const getShortestPath = (from, to, graph) => {
    let iteration = 0;
    let min = {len: Number.MAX_SAFE_INTEGER};
    const stack = [{path: from, len: 0}];
    while(stack.length > 0){
        const obj = stack.pop();
        const node = obj.path[obj.path.length-1];
        if(node == to){
            if(min.len > obj.len){
                min = obj;
            }
        }
        Object.keys(graph[node]).map(key=>{
            console.log(obj, key)
            iteration++;
            if(obj.path.indexOf(key)==-1){
                stack.push({
                    path: obj.path + key,
                    len: obj.len + graph[node][key]})
            }
        });
    }
    console.log("iteration", iteration);
    return min;
}

const graph = {
    A: {B: 2, C: 4},
    B: {A: 2, C: 1, E: 7},
    C: {A: 4, B: 1, D: 3, E: 4},
    D: {C: 3, E: 3},
    E: {B: 7, C: 4, D: 3, F: 2},
    F: {E: 2},
}

console.log(
    getShortestPath("A", "F", graph),
)