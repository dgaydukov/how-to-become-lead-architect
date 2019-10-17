/*
+--------------+-------------------+-------------------+
|              |  Throttle 1 sec   |  Debounce 1 sec   |
+--------------+-------------------+-------------------+
| Delay        | no delay          | 1 sec delay       |
|              |                   |                   |
| Emits new if | last was emitted  | there is no input |
|              | before 1 sec      |  in last 1 sec    |
+--------------+-------------------+-------------------+

Examples:

Search bar - Don't want to search every time user presses key? Want to search when user stopped typing for 1 sec. Use debounce 1 sec on key press.
Shooting game - Pistol take 1 sec time between each shot but user click mouse multiple times. Use throttle on mouse click.

*/
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