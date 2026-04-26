// Завдання 1
function startTimer() {
    let count = 0;

    const intervalId = setInterval(() => {
        count++;
        console.log(`Повідомлення №${count}`);

        if (count === 5) {
            clearInterval(intervalId);
            console.log("Інтервал зупинено");
        }
    }, 1000);
}

// Завдання 2
function startAnimation() {
    let position = 0;
    let size = 50;

    const box = document.getElementById("box");

    const animation = setInterval(() => {
        position += 5;
        size += 1;

        box.style.left = position + "px";
        box.style.width = size + "px";
        box.style.height = size + "px";

        if (position > 300) {
            clearInterval(animation);
        }
    }, 50);
}

// Завдання 3
let score = 0;
let timeLeft = 10;
let gameInterval;

const button = document.getElementById("target");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");

button.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
});

function startGame() {
    score = 0;
    timeLeft = 10;
    button.disabled = false;

    scoreDisplay.textContent = score;
    timeDisplay.textContent = timeLeft;

    clearInterval(gameInterval);

    gameInterval = setInterval(() => {
        timeLeft--;
        timeDisplay.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(gameInterval);
            button.disabled = true;
            alert(`Гру завершено! Ваш результат: ${score}`);
        }
    }, 1000);
}

// Завдання 4
function startTimeout() {
    const seconds = document.getElementById("secondsInput").value;

    if (seconds <= 0) {
        alert("Введіть коректне число");
        return;
    }

    setTimeout(() => {
        alert(`Пройшло ${seconds} секунд!`);
    }, seconds * 1000);
}