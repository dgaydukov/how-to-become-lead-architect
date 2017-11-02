'use strict';

/**
 * Task is simple recursion, we just make depth-first search and when we got to last point, we increment road number
 *
 * @param from
 * @param to
 * @param graph
 * @returns {number}
 */
const getRoadCount = (from, to, graph) => {
    let roads = 0;
    if(graph[from]){
        graph[from].map(item=>{
            if(item == to){
                roads++;
            }
            else{
                roads += getRoadCount(item, to, graph);
            }
        });
    }
    return roads;
}

/**
 * The same as previous, only added bypass array.
 * It's for task like "how many roads from A to K, that doesn't go through D"
 * 
 * @param from
 * @param to
 * @param bypass
 * @param graph
 * @returns {number}
 */
const getRoadCountByPass = (from, to, bypass, graph) => {
    let roads = 0;
    if(graph[from]){
        graph[from].map(item=>{
            if(bypass.indexOf(item) == -1){
                if(item == to){
                    roads++;
                }
                else{
                    roads += getRoadCountByPass(item, to, bypass, graph);
                }
            }
        });
    }
    return roads;
}

const getRoadList = (from, to, graph, path) => {
    const list = [];
    path = path || from;
    if(graph[from]){
        graph[from].map(item=>{
            path += item;
            if(item == to){
                list.push(path);
            }
            else{
                list.push(...getRoadList(item, to, graph, path));
            }
        });
    }
    return list;
}


/**
 * Given a Graph like this find how many roads from A to K
 */
const graph = {
    "a": ["б", "в", "г"],
    "б": ["в", "д"],
    "в": ["д", "ж"],
    "г": ["в", "е"],
    "д": ["и", "к"],
    "е": ["ж", "к"],
    "ж": ["к"],
    "и": ["к"],
    "к": [],
}

console.log(
    getRoadCount("a", "к", graph),
    getRoadCountByPass("a", "к", ["б"], graph),
    getRoadList("a", "к", graph),
)