function myTimeout(func, timeByMilliseconds) {
    const date = new Date();
    const timeNow = date.getTime();
    function  circleFunc() {
        const newDate = new Date();
        const newTime = newDate.getTime();
        
        if (newTime - timeNow >= timeByMilliseconds) {
           return func();
           
        }
        requestAnimationFrame(circleFunc);
    };
	circleFunc();
}