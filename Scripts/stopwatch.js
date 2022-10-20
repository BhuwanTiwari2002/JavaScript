const stopwatchCounterText = document.querySelector("#stopwatchCounterText");
const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
let startTime;
startBtn.onclick = function(){
    let time = new Date();
    startTime = time.getHours() + time.getMinutes() + time.getSeconds();
    const intervalID = setInterval(startStopWatch, 500);
}; 

function startStopWatch() 
{
    try
    {
        let today = new Date();
        let currentTime = today.getHours() + today.getMinutes() + today.getSeconds();
        let placeHolder = new Date(currentTime - startTime);
        let answer = new Date();
        answer = placeHolder.getHours + ":" + placeHolder.getMinutes + ":" + placeHolder.getSeconds;
        stopwatchCounterText.textContent = answer;
    } catch {

    }
}
stopBtn.onclick = function() 
{
    stopwatchCounterText.textContent = 10;
}


