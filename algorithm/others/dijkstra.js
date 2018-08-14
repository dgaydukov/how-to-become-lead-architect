'use strict'


const problem = {
    start: {A: 5, B: 2},
    A: {C: 4, D: 2},
    B: {A: 8, D: 7},
    C: {D: 6, finish: 3},
    D: {finish: 1},
    finish: {}
};

const lowestCostNode = (costs, processed) => {
    console.log("lowestCostNode",costs, processed)
    return Object.keys(costs).reduce((lowest, node) => {
        if (lowest === null || costs[node] < costs[lowest]) {
            if (!processed.includes(node)) {
                lowest = node;
            }
        }
        return lowest;
    }, null);
};

// function that returns the minimum cost and path to reach Finish
const dijkstra = (graph) => {

    // track lowest cost to reach each node
    const costs = Object.assign({finish: Infinity}, graph.start);

    // track paths
    const parents = {finish: null};
    for (let child in graph.start) {
        parents[child] = 'start';
    }

    // track nodes that have already been processed
    const processed = [];

    let node = lowestCostNode(costs, processed);

    while (node) {
        let cost = costs[node];
        let children = graph[node];
        for (let n in children) {
            let newCost = cost + children[n];
            if (!costs[n]) {
                costs[n] = newCost;
                parents[n] = node;
            }
            if (costs[n] > newCost) {
                costs[n] = newCost;
                parents[n] = node;
            }
        }
        processed.push(node);
        node = lowestCostNode(costs, processed);
    }

    let optimalPath = ['finish'];
    let parent = parents.finish;
    while (parent) {
        optimalPath.push(parent);
        parent = parents[parent];
    }
    optimalPath.reverse();

    const results = {
        distance: costs.finish,
        path: optimalPath
    };

    return results;
};

console.log(dijkstra(problem));


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
            iteration++;
            //console.log(obj, key);
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