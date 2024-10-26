let timerEl = document.getElementById("timer");
let inputEl = document.getElementById("defuser");

let countdown = 10;
let intervalId = setInterval(function() {
    countdown = countdown - 1;
    timerEl.textContent = countdown;
    if (countdown === 0) {
        timerEl.textContent = "BOOOMM";
        clearInterval(intervalId);
    }
}, 1000);

inputEl.addEventListener("keydown", function(event) {
    let bombText = inputEl.value;
    if (event.key === "Enter" && bombText === "defuse" && countdown !== 0) {
        timerEl.textContent = "YOU DID IT";
        clearInterval(intervalId);
    }
});