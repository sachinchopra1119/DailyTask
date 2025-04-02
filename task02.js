let startStopBtn = document.getElementById("startStopBtn");
let resetBtn = document.getElementById("resetBtn");
let stopwatchDisplay = document.getElementById("stopwatch");

let isRunning = false;
let hrs = 0;
let min = 0;
let sec = 0;
let interval;

function formatTime() {
  return `${padding(hrs)}:${padding(min)}:${padding(sec)}`;
}

function padding(num) {
  return num < 10 ? "0" + num : num;
}

function startStopwatch() {
  interval = setInterval(function () {
    sec++;
    if (sec >= 60) {
      sec = 0;
      minutes++;
    }
    if (min >= 60) {
      min = 0;
      hrs++;
    }
    stopwatchDisplay.textContent = formatTime();
  }, 1000);
}

function stopStopwatch() {
  clearInterval(interval);
}

function resetStopwatch() {
  clearInterval(interval);
  isRunning = false;
  hrs = 0;
  min = 0;
  sec = 0;
  stopwatchDisplay.textContent = formatTime();
  startStopBtn.textContent = "Start";
}
resetBtn.addEventListener("click", resetStopwatch);

startStopBtn.addEventListener("click", function () {
  if (isRunning) {
    stopStopwatch();
    startStopBtn.textContent = "Start";
  } else {
    startStopwatch();
    startStopBtn.textContent = "Stop";
  }
  isRunning = !isRunning;
});
