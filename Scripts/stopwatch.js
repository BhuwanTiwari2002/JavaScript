const stopwatchCounterText = document.querySelector("#stopwatchCounterText");
const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");

const intervalID = setInterval(startStopWatch, 500);
function startStopWatch() 
{
    try
    {
        let today = new Date();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        stopwatchCounterText.textContent = time;

    } catch {

    }
}
stopBtn.onclick = function() 
{
    stopwatchCounterText.textContent = 10;
}


