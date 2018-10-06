
/**
 * Questions: How await works inside for and inside map
 * Answer: Inside map it doesn't work, because all array operation by default is syncronous, so it's wrong to write async code there
 */
const list = [1, 2, 3, 4, 5]

const asyncFunc = (n) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(n)
        }, 1000)
    })
}

const asyncLoop = async() => {
    for(const i in list){
        const result = await asyncFunc(list[i])
        console.log(result)
    }
}

const asyncLoopMap = async() => {
    list.map(async v => {
        const result = await asyncFunc(v)
        console.log(result)
    })
}
 

asyncLoop() 
asyncLoopMap() 