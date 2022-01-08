// JavaScript source code
const dayss = document.getElementById("days");
const hourss = document.getElementById("hours");
const minute = document.getElementById("min");
const secondss = document.getElementById("seconds");
const newYears = "6 oct 2022";
function countDown() {
    const newYearDate = new Date(newYears);
    const currentDate = new Date();
    const totalSeconds = new Date(newYearDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) %24;
    const mins = Math.floor(totalSeconds / 60) %60;
    const seconds = Math.floor(totalSeconds) % 60;
    console.log(days, hours, mins, seconds);
    dayss.textContent = days;
    hourss.innerHTML = hours;
    minute.innerHTML = mins;
    secondss.innerHTML = seconds;
}
function formatTime(time) {

}
setInterval(countDown, 1000);
countDown();