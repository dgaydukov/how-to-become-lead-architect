'use strict';

(()=>{
    const graph = {
        A: ["B", "C", "D"],
        B: ["A", "C", "E", "F"],
        C: ["A", "B", "F"],
        D: ["A", "G"],
        E: ["B", "G"],
        F: ["B", "C", "G"],
        G: ["D", "E", "F", "H"],
        H: ["G"]
    }

    const getRoadList = (from, to, graph, path=from)=>{
        const list = []
        const inner = (from, to, graph, path) => {
            if(graph[from]){
                graph[from].map(item=>{
                    if(!path.includes(item)){
                        const _path = path + item
                        if(item == to){
                            list.push(_path)
                        }
                        else{
                            inner(item, to, graph, _path)
                        }
                    }
                });
            }
        }
        inner(from, to, graph, path)
        return list;
    }

    const getRoadCount = (from, to, graph) => {
        const list = getRoadList(from, to, graph)
        return list.length
    }

    const getRoadCountWithBypass = (from, to, bypass, graph) => {
        const list = getRoadList(from, to, graph)
        let count=0
        list.map(road=>{
            let intersect = 0
            bypass.map(point=>{
                if(road.includes(point)){
                    intersect++
                }
            })
            if(intersect == 0){
                count++
            }
        })
        return count
    }

    const getShortestRoad = (from, to, graph) => {
        const list = getRoadList(from, to, graph)
        let short = list[0]
        let min = list[0].length
        list.map(item=>{
            const len = item.length
            if(min > len){
                short = item
                min = len
            }
        })
        return short;
    }


    console.log(
        getRoadCountWithBypass("A", "H", ["C"],  graph)
    )
})();