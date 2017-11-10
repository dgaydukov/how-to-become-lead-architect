'use strict';





const getHuffmanTree = (hash) => {
    const tree = {};
    Object.keys(hash).map((key,i)=>{
        tree[i] = {
            key: key,
            value: hash[key],
            children: []
        }
    });
    return tree;
}

const hash = {
    A: 15,
    B: 7,
    C: 6,
    D: 6,
    E: 5,
}

console.log(
    //getHuffmanTree(hash)
)










let stop = 0;

const getShortestPathRecursive = (from, to, graph, path, pathLen) => {
    path = path || from;
    pathLen = pathLen || 0;
    const node = path[path.length-1];
    Object.keys(graph[node]).map(key=>{
        console.log(path, key)
        if(path.indexOf(key) == -1){
            path += key;
            pathLen += graph[from][key];
            if(key == to){
                console.log("finish", path, pathLen);
                //path = node;
            }
            getShortestPathRecursive(key, to, graph, path, pathLen);
        }
    })
}

//getShortestPathRecursive("A", "F", graph),

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
    //getShortestPathRecursive("A", "F", graph),
)


const problem = {
    X: {A: 5, B: 2},
    A: {C: 4, D: 2},
    B: {A: 8, D: 7},
    C: {D: 6, Y: 3},
    D: {Y: 1},
    Y: {}
};

const lowestCostNode = (costs, processed) => {
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
    const costs = Object.assign({Y: Infinity}, graph.X);

    // track paths
    const parents = {Y: null};
    for (let child in graph.X) {
        parents[child] = 'X';
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

    let optimalPath = ['Y'];
    let parent = parents.Y;
    while (parent) {
        optimalPath.push(parent);
        parent = parents[parent];
    }
    optimalPath.reverse();

    const results = {
        distance: costs.Y,
        path: optimalPath
    };

    return results;
};

console.log(
    //getShortestPath("X", "Y", problem),
    //dijkstra(problem)
);

