
const stack = ()=>{
    const list = []
    const put = (value)=>{
        return list.push(value)
    }
    const get = ()=>{
        return list.pop()
    }
    const size = ()=>{
        return list.length
    }
    return{
        get: get,
        put: put,
        size: size,
    }
}


const queue = ()=>{
    const list = []
    const put = (value)=>{
        return list.push(value)
    }
    const get = ()=>{
        return list.shift()
    }
    const size = ()=>{
        return list.length
    }
    return{
        get: get,
        put: put,
        size: size,
    }
}

const queueOnTwoStacks = ()=>{
    const stack1 = stack()
    const stack2 = stack()
    let len = 0

    const put = (value)=>{
        stack1.put(value)
        len++
        return len
    }
    const get = ()=>{
        if(stack2.size()==0){
            while(stack1.size()>0){
                stack2.put(stack1.get())
            }
        }
        return stack2.get()
    }
    const size = ()=>{
        return len
    }
    return{
        get: get,
        put: put,
        size: size,
    }
}

const stackOnTwoQueues = ()=>{
    const queue1 = queue()
    const queue2 = queue()
    let len = 0

    const put = (value)=>{
        queue1.put(value)
        len++
        return len
    }
    const get = ()=>{
        let last
        while(queue1.size()>0){
            if(queue1.size()==1){
                last = queue1.get()
            }
            else{
                queue2.put(queue1.get())
            }
        }
        while(queue2.size()>0){
            queue1.put(queue2.get())
        }
        return last
    }
    const size = ()=>{
        return len
    }
    return{
        get: get,
        put: put,
        size: size,
    }
}

// const queue1 = queueOnTwoStacks()
// queue1.put(1)
// queue1.put(2)
// queue1.put(3)
// queue1.put(4)
// queue1.put(5)
// console.log(
//     queue1.get(),
//     queue1.get(),
//     queue1.get(),
// )
// queue1.put(6)
// queue1.put(7)
// console.log(
//     queue1.get(),
//     queue1.get(),
// )

const stack1 = stackOnTwoQueues()
stack1.put(1)
stack1.put(2)
stack1.put(3)
stack1.put(4)
stack1.put(5)
console.log(
    stack1.get(),
    stack1.get(),
)
stack1.put(6)
stack1.put(7)
console.log(
    stack1.get(),
)

