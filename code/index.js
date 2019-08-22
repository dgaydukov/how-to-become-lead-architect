(()=>{
    const solution = (arr) => {
        const size = arr.length;
        arr.sort((a,b)=>a-b);
        let sum = 0, max = Number.MIN_SAFE_INTEGER, min = Number.MAX_SAFE_INTEGER;
        for(let i = 0; i < size; i++){
            if(arr[i] < 0){
                
            }
        }
        return sum;
    }

    console.log(
        //solution([1, 5, 2, -2]) == 0,

        solution([1, 5, 2, -2])
    );
})();