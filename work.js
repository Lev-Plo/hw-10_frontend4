document.addEventListener("DOMContentLoaded", () => {

  // Завдання 1
  document.getElementById("btn1").addEventListener("click", () => {
    let count = 0;

    const interval = setInterval(() => {
      count++;
      console.log(count);

      if (count === 5) {
        clearInterval(interval);
        console.log("Стоп");
      }
    }, 1000);
  });

  // Завдання 2
  document.getElementById("btn2").addEventListener("click", () => {
    let pos = 0;
    let size = 50;
    const box = document.getElementById("box");

    const anim = setInterval(() => {
      pos += 5;
      size += 1;

      box.style.left = pos + "px";
      box.style.width = size + "px";
      box.style.height = size + "px";

      if (pos > 300) clearInterval(anim);
    }, 50);
  });
  // Завдання 3
  let score = 0;
  let time = 10;
  let gameInterval;

  const target = document.getElementById("target");
  const scoreEl = document.getElementById("score");
  const timeEl = document.getElementById("time");

  target.addEventListener("click", () => {
    score++;
    scoreEl.textContent = score;
  });

  document.getElementById("startGame").addEventListener("click", () => {
    score = 0;
    time = 10;
    target.disabled = false;

    scoreEl.textContent = score;
    timeEl.textContent = time;

    clearInterval(gameInterval);

    gameInterval = setInterval(() => {
      time--;
      timeEl.textContent = time;

      if (time === 0) {
        clearInterval(gameInterval);
        target.disabled = true;
        alert("Результат: " + score);
      }
    }, 1000);
  });
  // Завдання 4
  document.getElementById("btn4").addEventListener("click", () => {
    const seconds = document.getElementById("secondsInput").value;

    if (!seconds || seconds <= 0) {
      alert("Введи число");
      return;
    }

    setTimeout(() => {
      alert("Пройшло " + seconds + " секунд");
    }, seconds * 1000);
  });
});
