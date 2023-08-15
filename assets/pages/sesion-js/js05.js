console.log("Welcome to the JS05 session!");

// aritmetic operators

// operators hierarchy:

let operations = 5 * 2 + 3 ** 2 - 4;
console.log(operations);
console.log((4 % 3) + (2 * 3) / 2 - 1);

//asignation operators
/* 
+= -= *= /= 
*/

let assign = 3;
console.log((assign += 3 * 3 ** 3 + 10));
console.log((assign += 3 * 3 ** 3 + 10));
console.log(2 ** (3 ** 2));

// unario operators
let number = 3;
let money = -number;

//numeric sorting
let pay = +money;
let interests = +"5.23";
console.log(typeof interests);
interests = 3;
console.log((interests += 5 + +"3"));

//not
let isActive = !false;

/* increment and decrement 
preincrement and preincrement
++value
--value
postincrement and postincrement
value++
value--
*/

number = 10;
++number;
console.log(number);
number++;
console.log(number);

number = 20;
console.log(++number); //21
console.log(number++); //21
console.log(number); //22

let index = 0; //not only has scope inside the for
for (; index < 5; index++) {
  console.log(index);
}
console.log(index); //5

let a = 0,
  b = 0;
for (; a < 3; b = a++) {
  console.log(a, b);
}
console.log(a, b);

let x = 3; //x     y
let y = ++x; //4     4
console.log(`x:${x++} y:${++y}`); //4->5  5
console.log(`x:${x} y:${y}`); //5     5

/* logic operators && || 
 short-circuit operators
 &&: it stops as soon as it finds a false operator.
    it didn't evaluate the next operator and returns the first operator
    op1 && op2 if op1 is true, it returns op2
    op1 || op2 if op1 is true, it returns op1
*/

const va = true,
  vb = false,
  vc = true; //every var is const
const n1 = (n2 = n3 = true); /* only the first is const, the others are var */

console.log(va || (vb && vc));

// boolean sorting
// false: "",0,null,undefined,NaN

console.log(va && "Holi crayoli"); //returns string "Holi crayoli"
console.log(vb && "Holi crayoli"); //returns false
console.log(NaN && "Holi crayoli"); //returns NaN
console.log("false" && "Holi crayoli"); //returns "Holi crayoli"
//true first operator
console.log("" && "Activated"); //returns empty string: ""
console.log("Activated" && ""); //returns empty string: ""
console.log("name" && "Activated"); //returns "activated"
// console.log("Activated" && friedPotatoes); //throws an error, friedPotatoes is not defined
console.log("Activated" || friedPotatoes); //returns "activated"
console.log("Activated" || ""); //returns "Activated"

/* Objects */
const person = {
  name: "Leo",
  lastname: "Ronaldo",
  age: 25,
};

console.log(`person's name: ${person.name}`);
console.log(`person's name: ${person["name"]}`);

// person.occupation===

// const occupation = person.occupation === undefined ? "Software Engineer" : person.occupation;

/* nullish coalescing operator */
// const occupation = person.occupation ?? "Software Engineer";

//short circuiting:
const occupation = person.occupation || "Software Engineer";

console.log(`occupation: ${occupation}`); //undefined

/* strict and non-strict comparisons */
console.log("23" === 23); //false
console.log("true" === true); //false
console.log("true" == true); //false
// (NaN == 1)
console.log("45" !== 45); //

/* destructuring operators */
/* 
to extract or unpack value from arrays and objects
*/
let dataA = 10;
let dataB = 20;
console.log(`a: ${dataA} b: ${dataB}`);

//using a temporary var
// let temp=dataA;
// dataA = dataB;
// dataB = temp;

//using destructuring operators:
[dataA, dataB] = [dataB, dataA];
console.log(`a: ${dataA} b: ${dataB}`);

const car = {
  model: "Vento",
  year: 2023,
  brand: "VW",
  color: "red",
  price: 300_000,
  additionalInfo: {
    bluetooth: true,
    cruiseControl: true,
    gps: false,
  },
};
//classic and creating and assigning new vars
const carModel = car.model;
const carYear = car.year;
console.log(`car model : ${car.model} car year: ${car.year}`);

//to destructure objects the new vars have to have the same name
//unpacking into new vars:
const { model, year } = car;
console.log(`car model : ${model} car year: ${year}`);

//changing the new vars names
const {
  year: ventoYear,
  model: vwModel,
  additionalInfo: { bluetooth: itHasBluetooth },
} = car;
console.log(`car model : ${vwModel} car year: ${ventoYear}`);

//asking about additional info
console.log(
  `It has bluetooth?: ${car.additionalInfo.bluetooth ? "Yes" : "No"}`
);
// destructuring bluetooth
console.log(`It has bluetooth?: ${itHasBluetooth ? "Yes" : "No"}`);

const quotientAndModule = (a, b) => [Math.floor(a / b), a % b];
console.log(`${quotientAndModule(10, 7)}`);

const quotientAndModule2 = (a, b) => {
  [Math.floor(a / b), a % b];
};

console.log(`Quotient: ${quotientAndModule2(10, 7)}`);
