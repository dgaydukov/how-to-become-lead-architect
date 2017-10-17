'use strict';

/*
 There are 4 cities on the map A, B, C, D
 between A and B there are 3 roads
 between A and C there are 2 roads
 between B and C there are 4 roads
 between B and D there are 3 roads
 between C and D there are 3 roads
 How many different ways exist to move from A to D, if use every road exactly once
 */

const solution = (graph, from = "A") => {
    let roads = 1;
    for(let i = 0, len = graph.length; i < len; i++){
        const [f, t, r] = graph[i];
        if(f == from){
            roads = roads * solution(graph, t);
        }
        else if(t == "D"){
            console.log("------------D-------------", f, t, r)
            return r;
        }
    }
    console.log("return", roads)
    return roads;
}



const graph = [
    ["A", "B", 3],
    ["A", "C", 2],
    ["B", "C", 4],
    ["B", "D", 3],
    ["C", "D", 3],
    ["C", "B", 3],
]

const graph2 = {
    A: {B: 3, C: 2},
    B: {C: 4, D: 3},
    C: {B: 4, D: 3},
}

console.log(
    solution(graph)
)