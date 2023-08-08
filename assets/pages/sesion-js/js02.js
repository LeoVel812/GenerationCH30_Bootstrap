console.log("Welcome to JS02 session!");

/* 
declaration functions
they have hoisting 
Hoisting: (var) moves automatically the function in order to prevent 
errors 
*/

console.log(product(2, 4));
function product(a, b) {
  return a * b;
}
// expressed functions
const add = function sum(a, b) {
  return a + b;
};
console.log(`add(13,12) = ${add(13, 12)}`);
let greetings;
const town = "buenos aires";
if (town == "buenos aires") {
  greetings = function (name) {
    return `Hello! ${name}`;
  };
} else {
  greetings = function (name) {
    return `Good morning! ${name}`;
  };
}

console.log(greetings("Leon"));
console.log(greetings("Luna"));

// autoinvoked functions
(function (name) {
  console.log("my name is " + name + " and I call me myself");
})("ChatGPT");

// arrow functions

// const areaRectanble = function (width, height) {
//   return width * height;
// };
const areaRectanble = (width, height) => width * height;
console.log(`Area of a rectangle: ${areaRectanble(3, 9)} m^2`);

/**
 * @param {number} base of the triangle
 * @param {number} height of the triangle
 * @returns {number} height of the triangle
 **/
const areaTriangle = (base = 1, height = 1) => (base * height) / 2;
console.log(`Area of a triangle: ${areaTriangle()} m^2`);
console.log(`Area of a triangle: ${areaTriangle(10, 5)} m^2`);

console.log((1000).toString()); // base 10
console.log((1000).toString(2)); // base 2
console.log((1000).toString(16)); // base 16

// REST paremeters

const sumManyNumbers = (a = 0, b = 0, ...args) => {
  let sum = a + b;
  args.forEach((number) => {
    sum += number;
  });
  return sum;
};
console.log(`sum of many numbers: ${sumManyNumbers(7, 2, 123, 5)}`);

console.log(`sum of many numbers: ${sumManyNumbers(2)}`); //put a predefined values

//  callback function

function greetPokemon() {
  return "I choose you";
}
function greetSquirtle(name) {
  return "vamo a calmano " + name;
}
function choosePoke(greeting, name) {
  console.log("================================");
  console.log("Hello, you are in Pokemon League!");
  console.log("Choose your best Pokemon");
  console.log(greeting(name)); //greetPokemon();
}
//without parentheses
//first greetPokemon() is called and returns a
// choosePoke(greetPokemon());====choosePoke("I choose you");
// choosePoke(greetPokemon); // "I choose you"
// choosePoke(greetSquirtle); /* vamo a calmano */
// choosePoke(function () {
//   return "pika pika chu";
// });
// choosePoke(function (name) {
//   return "quii I am " + name;
// }, "Cubone");

// choosePoke((name) => "quii I am " + name, "Squirtle");

student1Courses = [
  "Math",
  "English",
  "Programming",
  "Biology",
  "Physics",
  "Music",
];
student2Courses = ["Geography", "Spanish", "Programming", "Music"];

function checkOverlap(set1, set2) {
  const commonCourses = [];
  for (var i = 0; i < set1.length; i++) {
    for (var j = 0; j < set2.length; j++) {
      // console.log(i, j, set1[i], set2[j]);
      if (set1[i] === set2[j]) {
        commonCourses.push(set1[i]);
        console.log("Common course: " + set1[i]);
      }
    }
  }
  console.log(commonCourses);
}
checkOverlap(student1Courses, student2Courses);
