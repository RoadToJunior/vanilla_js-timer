// http://websamuraj.pl/examples/js/projekt11/

const mainButton = document.querySelector(".main");
const resetButton = document.querySelector(".reset");
const display = document.querySelector(".time div");

// let hours = 0;
// let minutes = 0;
// let seconds = 0;

let flag = false;
let intervalID;
let time = 0;

// const startStopwatch = () => {
//   if (mainButton.textContent === "Start") {
//     interval = setInterval(() => {
//       seconds++;
//       if (seconds > 59) {
//         minutes++;
//         seconds = 0;
//       }
//       if (minutes > 59) {
//         hours++;
//         minutes = 0;
//       }
//       display.textContent = `${hours < 10 ? `0${hours}` : hours}:${
//         minutes < 10 ? `0${minutes}` : minutes
//       }:${seconds < 10 ? `0${seconds}` : seconds}`;
//     }, 10);

//     mainButton.textContent = "Pauza";
//   } else if (mainButton.textContent === "Pauza") {
//     clearInterval(interval);
//     mainButton.textContent = "Start";
//   }
// };

// mainButton.addEventListener("click", startStopwatch);
// resetButton.addEventListener("click", () => {
//   clearInterval(interval);
//   display.textContent = "---";

// });

const startStopwatch = () => {
  if (!flag) {
    flag = !flag;
    mainButton.textContent = "Pauza";
    intervalID = setInterval(start, 10);
  } else {
    flag = !flag;
    mainButton.textContent = "Start";
    clearInterval(intervalID);
  }
};

const start = () => {
  time++;
  display.textContent = (time / 100).toFixed(2);
};

mainButton.addEventListener("click", startStopwatch);
resetButton.addEventListener("click", () => {
  clearInterval(interval);
  display.textContent = "---";
});
