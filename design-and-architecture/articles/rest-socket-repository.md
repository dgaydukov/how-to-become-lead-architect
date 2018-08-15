/**
 * Task:
 * We have a rest with 100 endpoint
 * How we should implement it?
 * What will we do if we have now to give this endpoint with socket.io
 *
 * Answer:
 * We should use repository pattern. In this case we can share repository between rest and socket
 */

(()=>{
    const userRepository = ()=>{

        const list = ()=>{
        };
        const get = (id)=>{
        };
        const post = (id)=>{
        };
        const put = (id)=>{
        };
        const del = (id)=>{
        };

        return {
            list: list,
            get: get,
            post: post,
            put: put,
            delete: del,
        };
    };
})()