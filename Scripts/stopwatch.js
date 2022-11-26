const stopwatchCounterText = document.querySelector("#stopwatchCounterText");
const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
let startTime;
startBtn.onclick = function(){
    startTime = new Date();
    const intervalID = setInterval(startStopWatch, 10);
}; 

function startStopWatch() 
{

    try
    {
        let currentTime = new Date();
        let getCurrentSeconds = currentTime.getMilliseconds();
        //let getStartTime = startTime.getMilliseconds();
        let placeHolder = currentTime - startTime;

        //console.log(currentTime);
       // console.log(startTime);
        console.log(placeHolder.getSecond());


        stopwatchCounterText.textContent = placeHolder.getMinutes() + ":" + placeHolder.getSeconds() + ":" + getCurrentSeconds;
        /*
        let currentTime = today.getHours() + today.getMinutes() + today.getSeconds();
        let placeHolder = new Date(currentTime - startTime);
        let answer = new Date();
        answer = placeHolder.getHours() + ":" + placeHolder.getMinutes() + ":" + placeHolder.getSeconds();
       stopwatchCounterText.textContent = answer;
       */


      // stopwatchCounterText.textContent = "Hi";


    } catch {

    }
}
stopBtn.onclick = function() 
{
    stopwatchCounterText.textContent = 10;
}


