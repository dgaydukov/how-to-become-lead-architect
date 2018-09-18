/**
 * Once I was asked to implement stack using 2 queues
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
     * Stack using 2 queues
     *
     * @returns {{get: (function(): *), put: (function(*=): number), size: (function(): number)}}
     */
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

    const stack1 = stackOnTwoQueues()
    stack1.put(1)
    stack1.put(2)
    stack1.put(3)
    stack1.put(4)
    stack1.put(5)
    console.log(
        stack1.get(), // return 5
        stack1.get(), // return 4
    )
    stack1.put(6)
    stack1.put(7)
    console.log(
        stack1.get(), // return 7
    )
})()

