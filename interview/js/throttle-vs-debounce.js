(()=>{
    const throttle = (func, time) => {
        let callFunc = true;
        let called = true;
        const interval = setInterval(()=>{
            callFunc = true;
            if(!called){
                clearInterval(interval);
            }
            called = false;
        }, time);
        return () => {
            called = true;
            if(callFunc){
                func();
                callFunc = false;
            }
        }
    }

    const debounce = (func, time) => {
        let called = true;
        const interval = setInterval(()=>{
            if(!called){
                func();
                clearInterval(interval);
            }
            called = false;
        }, time);
        return () => {
            called = true;
        }
    }

    const throttledInterval = setInterval(throttle(()=>{console.log("throttle")}, 1000), 100);
    const debouncedInterval = setInterval(debounce(()=>{console.log("debounce")}, 1000), 100);
    setTimeout(()=>{
        clearInterval(throttledInterval);
        clearInterval(debouncedInterval);
    }, 5000)
})();