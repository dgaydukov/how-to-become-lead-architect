'use strict';

/*
 Initial Task
 Two friends Petya and Vanya play the game. In one step a gamer can either add one stone or enlarge number of stones by 2.
 For example if there are 8 stones. A gamer can get ether 8+1 = 9 or 8*2=16 stones
 Find in what steps a gamer can win in any cost
 */


const action1 = (n) => n+1;
const action2 = (n) => n*2;

/**
 *
 * lose - 0 / success - 1
 *
 * @param max
 */
const solution = (max) => {
    const hash = {};
    let n = max;
    while(n > 0){
        if(
            action1(n) >= max ||
            action2(n) >= max ||
            hash[action1(n)] == 0 ||
            hash[action2(n)] == 0
        ){
            hash[n] = 1;
        }
        else{
            hash[n] = 0;
        }
        n--;
    }
    return hash;
}


console.log(
    solution(26),
)