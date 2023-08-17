console.log("Welcome to the JS07 session!");

const firstStep = () => {
  console.log("01-Starting program");
};
const secondStep = () => {
  console.log("02-Process of the program");
};
const thirdStep = () => {
  console.log("03-Ending program");
};

/* sequential */
firstStep();
secondStep();
thirdStep();

/* Asynchronous programming */
/* 
it runs the callback function when the ms ends
setTimeout(callbackFnc,ms);

*/

const greetings = (name) => console.log(`Hello ${name}`);

//hoisting: it doesn't matter if that function is called before
/* its definition, it works 
arrow functions advantages: it has hoisting, shorter syntax more readable
*/
const asyncStep = (name) => {
  setTimeout(greetings, 5000, name);
  setTimeout((person) => console.log(`Hello ${person}`), 5000, name);
  setTimeout(() => console.log(`Hello ${name}`), 5000);
};
console.log(`*************************`);
// firstStep();
// asyncStep("Baby Yoda multiverse");
// thirdStep();
/* --------------------setInterval----------------- */
/* repeats a function between intervals */
const stepWithInterval = () => {
  setInterval(() => console.log(`Hello ${new Date().toLocaleString()}`), 3000);
};

/* --------------------start and stop the interval----------------- */
const startInterval = document.getElementById("startInterval");
const stopInterval = document.getElementById("stopInterval");
const dateH2 = document.getElementById("dateH2");
let idInterval = []; //id from setInterval

startInterval.addEventListener("click", () => {
  const id = setInterval(() => {
    dateH2.innerHTML = new Date().toLocaleString();
  }, 1000);
  //LIFO
  idInterval.push(id);
  disableStartButton();
});

stopInterval.addEventListener("click", () => {
  console.table(idInterval);
  clearInterval(idInterval.pop()); //stops the interval
  enableStartButton();
});
const stateButtons = (startButtonState = false, stopButtonState = false) => {
  // startInterval.disabled = startButtonState;
  // stopInterval.disabled = stopButtonState;
  startInterval.style.display = startButtonState ? "none" : "inline";
  stopInterval.style.display = stopButtonState ? "none" : "inline";
};

const disableStartButton = () => {
  stateButtons(true, false);
};
const enableStartButton = () => {
  stateButtons(false, true);
};

enableStartButton();
