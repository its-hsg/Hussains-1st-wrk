// Set the countdown time in seconds
let countdownTime = 1000; // for example, 10 seconds

const countdownElement = document.getElementById('countdown');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

function beginCountdown() {
    const countdownInterval = setInterval(() => {
        let minutes = Math.floor(countdownTime / 60);
        let seconds = countdownTime % 60;

        minutesElement.textContent = String(minutes).padStart(2, '0');
        secondsElement.textContent = String(seconds).padStart(2, '0');

        if (countdownTime > 0) {
            countdownTime--;
        } else {
            clearInterval(countdownInterval);
            alert("Time's up!");
        }
    }, 1000);
}

beginCountdown();
