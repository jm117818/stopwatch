function timer(){
    let [seconds,minutes,hours] = [0,0,0];

    let time = document.getElementById("timer")
    let timer = null;

    function stopwatch(){
        seconds++;
        if(seconds=60){
            seconds=0;
            minutes=minutes+1;
            if(minutes=60){
                minutes=0;
                hours=hours+1;
            }
        }
        timer.innerHTML = hours+":"+minutes+":"+seconds
    }

    function startTime(){
        if(timer!==null) {
            clearInterval(timer);
        }
        timer = setInterval(stopwatch,1000);
    }

}