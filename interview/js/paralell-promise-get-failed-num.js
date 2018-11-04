



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

    const register = async (n)=>{
        let failed = 0;
        for(let i = 0; i < n; i++){
            try{
                await asyncFunc(Math.round(Math.random()*10));
            }
            catch(ex){
                failed++;
            }
        }
        return {total: n, failed}
    }

    console.log('start')
    // console.log(
    //     await register(10)
    // );

    const registerParallel = async (n) => {
        const arr = []
        for(let i = 0; i < n; i++){
            arr.push(i)
        }
        const result = await Promise.all(
            arr.map(item=>{
                return new Promise(async(resolve)=>{
                    try{
                        await asyncFunc(Math.round(Math.random()*10));
                        resolve({});
                    }
                    catch(ex){
                        resolve({ex})
                    }
                })
            })
        );
        let failed = 0;
        result.map(item => {
            if(item.ex){
                failed++;
            }
        });
        return {failed}
    }

    const registerParallel2 = async (n) => {
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
        await registerParallel2(10)
    );
});