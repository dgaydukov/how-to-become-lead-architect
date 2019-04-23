/**
 * 
 */
const arr = [
    {a: 2, index: 11},
    {a: 3, index: 4},
    {a: 5, index: 5},
    {a: 1, index: 1},
    {a: 6, index: 6},
  ];
  
  const obj = arr.reduce((acc, curr) => acc.index > curr.index ? curr : acc, arr[0]);
  
  console.log(obj);