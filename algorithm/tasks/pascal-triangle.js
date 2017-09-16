'use strict';


function pascalTriangle(n) {
    var arr = [];
    for(var i = 1; i <= n+1; i++){
        arr[i] = [];
        for(var j = 0; j < i; j++){
            var k = j;
            if(i == 1 || i == 2 || j == 0 || j == i-1){
                k = 1;
            }
            else{
                k = arr[i-1][j-1]+arr[i-1][j];
            }
            arr[i].push(k);
        }
    }
    return arr;
}
console.log(pascalTriangle(7))