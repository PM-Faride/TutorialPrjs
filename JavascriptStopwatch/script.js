let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let reset = document.querySelector("#reset");
let timer = document.querySelector("p");
let timerIsRunning = false;
let time = [0, 0, 0];
let startInterval;
let addZeros = function(num) {
    if (num < 10) {
        num = `0${num}`;
    }
    return num;
}
let startTimer = function() {
    time[2]++;
    time[0] = Math.floor(time[2] / 60);
    time[1] = time[2] - time[0] * 60;
    timer.innerText = `${addZeros(time[0])}:${addZeros(time[1])}`;
}
let startFunc = function() {
    if (!timerIsRunning) {
        timerIsRunning = true;
        startInterval = setInterval(startTimer, 1000);
    }
}
let stopTimer = function() {
    timerIsRunning = false;
    clearInterval(startInterval);
}

let resetTimer = function() {
    timer.innerText = "00:00";
    stopTimer();
    time[2] = 0;
}
start.addEventListener("click", startFunc, false); //havaset bashe clik has na onclicks
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);