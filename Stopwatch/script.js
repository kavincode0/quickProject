const minutesl = document.getElementById("min")
const secondsl = document.getElementById("sec")
const msecondsl = document.getElementById("msec")

const start = document.getElementById("startbtn")
const stopb = document.getElementById("stopbtn")
const pause = document.getElementById("pausebtn")
const reset = document.getElementById("resetbtn")

const laplist = document.getElementById("laplist")

let minute = 0;
let second = 0;
let msecond = 0;
let interval;

start.addEventListener("click", startTimer)
stopb.addEventListener("click", stopTimer)
pause.addEventListener("click", pauseTimer)
reset.addEventListener("click", resetTimer)

function startTimer(){
    interval = setInterval(updateTimer,10)
    start.disabled = true;
}
function stopTimer(){
    clearInterval(interval)
    addtoLapList();
    resetTimerdata();
    start.disabled = false;
}
function pauseTimer(){
    clearInterval(interval);
}
function resetTimer(){
    clearInterval(interval)
    resetTimerdata();
    start.disabled = false
}
function updateTimer(){
    msecond++;
    if(msecond === 100){
        msecond = 0;
        second++;
        if(second === 60){
            second = 0;
            minute++;
        }
    }
    displayTimer();
}

function displayTimer(){
    msecondsl.textContent = padTime(msecond);
    secondsl.textContent = padTime(second);
    minutesl.textContent = padTime(minute);
}

function padTime(time){
    return time.toString().padStart(2, "0");
}

function resetTimerdata(){
    minute = 0;
    second = 0;
    msecond = 0;
    displayTimer()
}

function addtoLapList(){
    const lapt = `${padTime(minute)}:${padTime(second)}:${padTime(msecond)}`
    const listitem = document.createElement("li");
    listitem.innerHTML = `<span>Lap ${laplist.childElementCount + 1}: </span>${lapt}`
    laplist.appendChild(listitem)
}