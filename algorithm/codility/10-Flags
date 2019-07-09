(()=>{
    const getPeaksCount = arr => {
        let count = 0;
        let len = arr.length;
        for(let i = 1; i < len-1; i++){
            if(arr[i] > arr[i-1] && arr[i] > arr[i+1]){
                count++;
            }
        }
        return count;
    }
    const getPeaksLength = arr => {
        let count = 0;
        let len = arr.length;
        const lens = [];
        for(let i = 1; i < len-1; i++){
            count++;
            if(arr[i] > arr[i-1] && arr[i] > arr[i+1]){
                lens.push(count);
                count = 0;
            }
        }
        lens.shift();
        return lens;
    }

    const canPutFlags = (flags, peaks, lens) => {
        const len = lens.length;
        let length = 0;
        for(let i = 0; i < len; i++){
            if(lens[i] + length < flags){
                peaks--;
                length += lens[i];
            }
            else{
                length = 0;
            }
            if(flags > peaks){
                return false;
            }
        }
        return true;
    }

    const solution = arr => {
        const peaks = getPeaksCount(arr);
        let flags = peaks;
        const lens = getPeaksLength(arr);
        
        while(flags > 0){
            if(canPutFlags(flags, peaks, lens)){
                return flags;
            }
            flags--;
        }

        
        return 0;
    }

    const arr = [1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2];
    console.log(solution(arr));
})();