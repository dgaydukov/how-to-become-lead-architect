const _99_polygon_concavity_index = (arr)=>{
    const len = arr.length
    for(let i = 0; i < len; i++){
        const p1 = i
        const p = i + 1 < len ? i+1 : (i+1)%len
        const p2 = i + 2 < len ? i+2 : (i+2)%len
        const eq = getEquation(arr[p1], arr[p2])
        if(eq(arr[p].y) > arr[p].x){
            //console.log(p, arr[p])
            return p
        }
    }
}

const getEquation = (p1, p2)=>{
    let a, b;
    a = (p1.y-p2.y)/(p1.x-p2.x)
    b = p1.y - a*p1.x
    return y => (y-b)/a
}

const arr = [
    { x: -1, y:  3 },
    { x:  1, y:  2 },
    { x:  1, y:  1 },
    { x:  3, y:  1 },
    { x:  0, y: -1 },
    { x: -2, y:  1 },
    { x: -1, y:  2 },
];

console.log(
    //_99_str_symmetry_point("racecar")
    //_99_tree_height(generateTree())
    //_99_array_inversion_count(generateArray())
    //_99_polygon_concavity_index(arr)
)