(() => {
    const solution = (arr) => {
        const size = arr.length;
        const peaksArr = [];
        for(let i = 1; i < size-1; i++){
            if(arr[i] > arr[i-1] && arr[i] > arr[i+1]){
                peaksArr.push(i);
            }
        }
        console.log(peaksArr)
        const peaksSize = peaksArr.length;
        let peaks = peaksSize;
        while(peaks > 0){
            let check = true;
            for(let i = 0; i < peaksSize; i++){

            }
            if(check){
                return peaks;
            }
            peaks--;
        }
        return 0;
    }

    console.log(
        solution([1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]),
    );
})();






















































// imitate server
while (true) { }