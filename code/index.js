(() => {
    const solution = (arr) => {
        const size = arr.length;
        arr.sort((a, b) => a - b);
        let count = 0;
        console.log(arr)
        for (let i = 0; i < size; i++) {
            for (let j = i + 2; j < size; j++) {
                if (arr[i] + arr[i + 1] > arr[j]) {
                    //console.log(arr[i], arr[i+1], arr[j])
                    count++;
                }
                else {
                    break;
                }
            }
        }
        return count;
    }

    console.log(
        //solution([10, 2, 5, 1, 8, 12]) == 4,

        solution([10, 2, 5, 1, 8, 12])
    )
})();
/**
 *
 * 5-8-10
 * 5-8-12
 * 5-10-12
 * 8-10-12
 *
 *
 * 5-8-10
 * 5-10-12
 *
 */