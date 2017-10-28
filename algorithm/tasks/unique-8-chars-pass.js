'use strict';



const pass = () => Math.random().toString(36).substr(2,8);


console.log(
    pass(),
    pass(),
    pass()
)