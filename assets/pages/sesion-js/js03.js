console.log("Welcome to the JS03 session!");

/* code blocks: */

let firstName = "Leon";
const lastName = "Luna";
var age = "30";
{
  //for let and const their scope is in block
  //var reassigns its value to the last one
  console.log("=======block scope==========");
  let firstName = "Lau";
  const lastName = "Mar";
  var age = "26";
  const favColor = "azul";
  var favDish = "pozole";
  console.log(`${firstName} ${lastName}`);
  console.log(age);
  console.log(favColor);
  console.log(favDish);
  console.log("=======block scope==========");
}
console.log(`${firstName} ${lastName}`);
console.log(age);
// console.log(favColor); //not defined
console.log(favDish);

{
  // favColor = "purple";//error, it can't ve redeclared
  const favColor = "purple";
  console.log(favColor);
  console.log(firstName); //it prints out because it's defined in the global scope
  {
    console.log(favColor); //it prints out because it's defined in a higher scope
    console.log(firstName);
  }
}

// if else statements
const temperature = 31;
let message = "Temperature: ";
if (temperature === 22) {
  message += `${temperature} °C, it's suitable for a happy day!`;
} else if (temperature >= 15 && temperature <= 21) {
  message += `${temperature}, °C, it's cold!`;
} else if (temperature >= 23 && temperature <= 30) {
  message += `${temperature}, °C, it's getting hot!`;
} else {
  message += `${temperature}, °C it's not suitable for a happy life!`;
}
console.log(message);

// switch statement

/**
 * Sets the fan velocity
 * @param {number} velocity fan
 * @returns {number} message of fan velocity
 *
 * */
const setFanVelocity = (velocity = 0) => {
  let message;
  // velocity = parseInt(velocity);
  switch (parseInt(velocity)) {
    case 0:
      message = `off`;
      break;
    case 1:
      message = `slow velocity`;
      break;
    case 2:
      message = `medium velocity`;
      break;
    // case "2":
    //   message = `medium velocity`;
    //   break;
    case 3:
      message = `fast velocity`;
    // break;
    //if there is no break in some case,
    //it executes the that case and the default
    default:
      message = `non-existent velocity`;
  }
  return message;
};
console.log(`Fan: ${setFanVelocity(1)}`);
console.log(`Fan: ${setFanVelocity(8)}`);
console.log(`Fan: ${setFanVelocity()}`);
console.log(`Fan: ${setFanVelocity(3)}`);
console.log(`Fan: ${setFanVelocity("2")}`);
// console.log(`Fan: ${setFanVelocity(prompt("Set velocity", 1))}`);

// print season of the year
/* ask for a month(number) */
const printSeasonSwitch = (month) => {
  let season;
  switch (parseInt(month)) {
    case 12:
    case 1:
    case 2:
      season = "Winter";
      break;
    case 3:
    case 4:
    case 5:
      season = "Spring";
      break;
    case 6:
    case 7:
    case 8:
      season = "Summer";
      break;
    case 9:
    case 10:
    case 11:
      season = "Autumn/Fall";
      break;
    default:
      season = "Non-existant month";
  }
  return season;
};
const printSeasonIfElse = (month) => {
  let season;
  month = parseInt(month);
  if (month === 1 || month === 2 || month === 12) {
    season = "Winter";
  } else if (month >= 3 && month <= 5) {
    season = "Spring";
  } else if (month >= 6 && month <= 8) {
    season = "Summer";
  } else if (month >= 9 && month <= 11) {
    season = "Autumn/Fall";
  } else {
    season = "Non-existant month";
  }
  return season;
};
// alert(`season: ${printseasonSwitch(prompt("Insert a month(number)"))}`);
// alert(
//   `season (else-if): ${printSeasonIfElse(prompt("Insert a month(number)"))}`
// );

// conditional (Ternary) operator
const isPaidCreditCard = true;
let msj;
// if (isPaidCreditCard) msj = "CC is paid";
// else msj = "CC is still not paid";

isPaidCreditCard ? (msj = "CC is paid") : (msj = "CC is still not paid");
console.log(msj);

/* factorial recursive number */
function factorialRecursive(number) {
  return number <= 0 ? 1 : number * factorialRecursive(number - 1);
}
console.log(factorialRecursive(0));
