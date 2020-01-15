var milliSeconds = 0;
var seconds = 0;
var minutes = 0;
var timer;

var stopwatch = document.querySelector('.stopwatch');

function start() {
  if (!timer) {
    timer = setInterval(runClock, 10);
  }
  console.log(timer);
  // timer = undefined, also 0 or false. if not false, true, run interval
  // once ran, gives it 1 - if click start again, nothing will happen
}

function runClock() {
  stopwatch.textContent = getTimer();
  milliSeconds++;
  if (milliSeconds === 100) {
    milliSeconds = 0;
    seconds++;
  }
  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }
  // getTimer runs, once met, adds milliSeconds
  // if milliseconds = 100, increase seconds, if seconds = 60 increase minutes
}

function pause() {
  stopTimer();
}

function stop() {
  stopTimer();
  minutes = 0;
  seconds = 0;
  milliSeconds = 0;
  stopwatch.textContent = getTimer();
  // stop button stops clock - clears interval, timer sets everything to 0
}

function stopTimer() {
  clearInterval(timer);
  timer = false;
  // clears interval, sets timer to false to allow start() to work
}

function getTimer() {
  return (
    (minutes < 10 ? `0` + minutes : minutes) +
    `:` +
    (seconds < 10 ? `0` + seconds : seconds) +
    `:` +
    (milliSeconds < 10 ? `0` + milliSeconds : milliSeconds)
  );
  // minutes, seconds, milliseconds have zero in front until they reach 10
  // not necessary, but for UI
}

function restart() {
  stop();
  start();
}
