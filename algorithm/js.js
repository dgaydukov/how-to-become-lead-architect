'use strict';



const solution = (n) => {
    let iteration = 0;
    let min = Number.MAX_SAFE_INTEGER;
    for(let i = 1; i <= n; i++){
        iteration++;
        if(n % i == 0){
            let p = 2 * (i + n / i);
            if(min > p){
                min = p;
            }
        }
    }
    console.log(iteration)
    return min;
}

const solution2 = (n) => {
    let side1 = Math.floor(Math.sqrt(n));
    let iteration = 0;
    while (n % side1 != 0){
        iteration++;
        side1 ++;;
    }
    //console.log(iteration)
    return 2*(side1+n/side1);
}


console.log(
    solution(1234),
    solution2(1234)
);