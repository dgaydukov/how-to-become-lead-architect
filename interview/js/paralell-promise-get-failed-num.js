/**
 * The task: execunte n promises in paralell, and in the end output the success & failed number
 */



(async ()=>{
    const asyncFunc = n => {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if(n >= 5){
                    return resolve({n});
                }
                reject(`n=${n} is less than 5`);
            }, 1000)
        })
    }

    const registerParallel = async (n) => {
        const arr = Array.from({length: n}, (x,i) => i);
        const result = await Promise.all(
            arr.map(async (item) => {
                try{
                    await asyncFunc(Math.round(Math.random()*10));
                    return {};
                }
                catch(ex){
                    return {ex};
                }
            })
        );
        let failed = 0;
        result.map(item => {
            if(item.ex){
                failed++;
            }
        });
        return {failed}
    };
    
    console.log(
        await registerParallel(5),
    );
});