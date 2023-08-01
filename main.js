// http://websamuraj.pl/examples/js/projekt11/

const mainButton = document.querySelector(".main");
const resetButton = document.querySelector(".reset");
const display = document.querySelector(".time div");
let number = 0;
let interval;

const startStopwatch = () => {
  if (mainButton.textContent === "Start") {
    interval = setInterval(() => {
      number++;
      display.textContent = number < 10 ? `0${number}` : number;
    }, 1000);
    mainButton.textContent = "Pauza";
  } else if (mainButton.textContent === "Pauza") {
    clearInterval(interval);
    mainButton.textContent = "Start";
  }
};

mainButton.addEventListener("click", startStopwatch);
resetButton.addEventListener("click", () => {
  clearInterval(interval);
  display.textContent = "---";
});
