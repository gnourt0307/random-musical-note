const startBtn = document.querySelector(".start-btn");
const downBtn = document.querySelector(".down-btn");
const upBtn = document.querySelector(".up-btn");
const notesArr = [
  "A",
  "A#/Bb",
  "B",
  "C",
  "C#/Db",
  "D",
  "D#/Eb",
  "E",
  "F",
  "F#/Gb",
  "G",
  "G#/Ab",
];

let isRunning = false;
let intervalId;

startBtn.addEventListener("click", () => {
  if (!isRunning) {
    isRunning = true;
    startBtn.innerText = "Stop";
    downBtn.disabled = true;
    upBtn.disabled = true;
    const currentSecondEle = document.getElementById("second");
    const currentSecond = Number(currentSecondEle.innerText);
    intervalId = setInterval(() => {
      const randomNumber = Math.round(Math.random() * 11);
      const note = notesArr[randomNumber];
      let currentNote = document.getElementById("note");
      currentNote.innerText = note;
    }, currentSecond * 1000);
  } else {
    isRunning = false;
    downBtn.disabled = false;
    upBtn.disabled = false;
    startBtn.innerText = "Start";
    clearInterval(intervalId);
  }
});

downBtn.addEventListener("click", () => {
  const currentSecondEle = document.getElementById("second");
  const currentSecond = Number(currentSecondEle.innerText);
  const secondText = document.getElementById("second-text");
  let newSecond;
  if (currentSecond > 0) {
    newSecond = currentSecond - 0.1;
    currentSecondEle.innerText = newSecond.toFixed(1);
  }

  if (newSecond >= 2) secondText.innerText = "seconds";
  else secondText.innerText = "second";
});

upBtn.addEventListener("click", () => {
  const currentSecondEle = document.getElementById("second");
  const currentSecond = Number(currentSecondEle.innerText);
  const secondText = document.getElementById("second-text");

  let newSecond;
  if (currentSecond >= 0) {
    newSecond = currentSecond + 0.1;
    currentSecondEle.innerText = newSecond.toFixed(1);
  }

  if (newSecond >= 2) secondText.innerText = "seconds";
  else secondText.innerText = "second";
});
