/**
 * Once I was asked to write queue on 2 stacks
 */
(()=>{

    /**
     * Simple stack realization, just to show how it works
     *
     *
     * @returns {{get: (function(): *), put: (function(*=): number), size: (function(): number)}}
     */
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
    /**
     * My queue realization with 2 stacks. The idea is that when we need to get element, we reverse stack
     *
     * @returns {{get: (function(): *), put: (function(*=): number), size: (function(): number)}}
     */
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

    const queue1 = queueOnTwoStacks()
    queue1.put(1)
    queue1.put(2)
    queue1.put(3)
    queue1.put(4)
    queue1.put(5)
    console.log(
        queue1.get(),
        queue1.get(),
        queue1.get(),
    )
    queue1.put(6)
    queue1.put(7)
    console.log(
        queue1.get(),
        queue1.get(),
    )
})()
