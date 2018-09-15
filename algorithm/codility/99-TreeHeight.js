const _99_tree_height = (tree)=>{
    let maxHeight = -1
    let height = 0
    const list = [tree]
    while(list.length > 0){
        const sub = list.pop()
        if(sub.x){
            sub.l && list.push(sub.l)
            sub.r && list.push(sub.r)
            if(!sub.l && !sub.r){
                if(height > maxHeight){
                    maxHeight = height
                }
                height = 0
            }
            height++
        }
    }
    return maxHeight
}

const generateTree = ()=>{
    const node = (x)=>{
        return {
            x: x,
            l: undefined,
            r: undefined,
        }
    }

    const tree = node(5)
    tree.l = node(3)
    tree.r = node(10)
    tree.l.l = node(20)
    tree.l.r = node(21)
    tree.r.l = node(1)

    return tree
}