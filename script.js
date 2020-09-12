var getTime = document.querySelector('h2').textContent;
var currentTime = parseFloat(getTime)
var timeInterval;
var hasStarted = false;

function start() {
    if (!hasStarted) {
        hasStarted = true;
        console.log(currentTime, typeof(currentTime))
        timeInterval = setInterval(function() {
            currentTime += .01;
            document.querySelector('h2').textContent = currentTime.toFixed(2);
        }, 10);
    }
}

function stop() {
    clearInterval(timeInterval)
    hasStarted = false;
};

function reset() {
    stop()
    currentTime = 0;
    document.querySelector('h2').textContent = currentTime.toFixed(2);
};