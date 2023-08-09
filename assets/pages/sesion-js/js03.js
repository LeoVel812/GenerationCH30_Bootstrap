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
