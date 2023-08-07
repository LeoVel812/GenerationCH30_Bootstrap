console.log("Welcome to the JS01 session!");

console.log("Data types in JS: primitive and non-primitive");
console.log(`Primitive: 
integers 
BigInt 
String 
Boolean 
null 
Undefined 
Symbol`);
console.log(`Non-primitive: objects (arrays and its methods) `);
// Primitive types:
// Seven: integers BigInt String Boolean null Undefined Symbol
// data types :
// Promitives and non-primitivei(objects, (arrays))

const stringData = "Holi Crayoli";
console.log(stringData);

// number types:
// positive, negative, decimals, NaN, +Infinity, -Infinity

//template string `` alt 96:
console.log(`number types: 
 positive:${12}  negative:${-6} decimal:${0.456} 
 5*"hola":${5 * "hola"} 45/0:${45 / 0} -45/0:${-45 / 0}`);

// int:
console.log(`Max value in JS: ${Number.MAX_VALUE}`);
console.log(`Cope with a number out of max range in JS: 1.79e310:${1.79e310}`);
console.log(
  `Cope with a number out of min range in JS: -1.79e310:${-1.79e310}`
);
console.log(`Max safe integer value in JS: ${Number.MAX_SAFE_INTEGER}`);
// exceding MAX_SAFE_INTEGER:less precision
console.log(`MAX_SAFE_INTEGER + 1: ${Number.MAX_SAFE_INTEGER + 1}`);
console.log(`MAX_SAFE_INTEGER + 2: ${Number.MAX_SAFE_INTEGER + 2}`);
console.log(`MAX_SAFE_INTEGER + 3: ${Number.MAX_SAFE_INTEGER + 3}`);
console.log(`MAX_SAFE_INTEGER + 4: ${Number.MAX_SAFE_INTEGER + 4}`);
console.log(`Don't use numbers to save phone numbers bank codes and etc`);

//BigInt:
// to show int numbers out of range of integers
console.log(`BigInt operations:`);
const myBigInt = 9007199254740991n;
console.log(`MAX_SAFE_INTEGER + 1: ${myBigInt + 1n}`);
console.log(`MAX_SAFE_INTEGER + 2: ${myBigInt + 2n}`);
console.log(`MAX_SAFE_INTEGER + 3: ${myBigInt + 3n}`);
console.log(`MAX_SAFE_INTEGER + 4: ${myBigInt + 4n}`);

//boolean:
console.log(`true: ${true}`);
console.log(`false: ${false}`);

//undefined:
//declared but not defined
let myVar;
console.log(`undefined: ${myVar}`);

//null:
//intentionally erased
let myVarNull; //undefined
console.log(`data type myVarNull: ${typeof myVarNull}`); //undefined
myVarNull = "I don't like YLE";
console.log(`data type myVarNull: ${typeof myVarNull}`); //string
myVarNull = null;
//error of JS, all flags are unset and it's an object type
console.log(`data type myVarNull: ${typeof myVarNull}`); //object
console.log(`data type myVarNull: ${myVarNull}`); //null
console.log(`data type myVarNull: ${myVarNull === null}`); //null

//symbol:
const mySymbol = Symbol();
const mySymbol2 = Symbol();
const myKey = "code";
console.log(`mySymbol: ${mySymbol === mySymbol2}`);

const myObj = {
  clave: "valor",
  [mySymbol]: 16, //private key, it isn't iterable and doesn't storage in LocalStorage
  myKey: 123,
  [myKey]: 567,
};
console.log(myObj);

//data type: Object
const myAccountData = {
  name: "Leon",
  lastname: "Luna",
  age: 26,
  isBellicose: false,
  fullName: function () {
    return `Full name: ${this.name} ${this.lastname}`;
  },
  //   returns Uppercase fullName
  fullNameUppercase: function () {
    return `Full name: ${this.name.toUpperCase()} ${this.lastname.toUpperCase()}`;
  },
};

console.log(myAccountData);
console.table(myAccountData);
console.log(myAccountData.fullName); //types the function definition
console.log(myAccountData.fullNameUppercase()); //calls the method fullNameUppercase()

//------
//explicit conversions
const breakHour = 13.05;
console.log(`Break Hour: ${breakHour} h`);
const BreakHourTxt = String(breakHour);
console.log("Break Hour: " + breakHour + " h");
console.log("end of the Break : " + breakHour + 0.2 + " h");

const greenColor = 0x008000;
console.log(`RGB value of Green Color: ${greenColor}`);
console.log(`RGB value of Green Color: ${greenColor.toString()}`);
console.log(`RGB value of Green Color: ${greenColor.toString(16)}`);
console.log(
  `RGB value of Green Color: #${greenColor.toString(16).padStart(6, "0")}`
);

//parsing to Number
const myAgeTxt = "25";
const sum = 10 + myAgeTxt;
console.log(`sum: ${sum}`);

console.log(`sum using Number(): ${10 + Number(myAgeTxt)}`);
console.log(`sum using paseInt(): ${10 + parseInt(myAgeTxt)}`);
console.log(`sum using paseFloat(): ${10 + parseFloat(myAgeTxt)}`);
console.log(`sum using paseFloat(): ${10 + +myAgeTxt}`);

//Number() vs parseInt()
// Number() parses integer and decimal values
//parseInt() parses only the integer part
console.log(`parsing a decimal number with parseInt(): ${parseInt(100.125)}`); //100
// Number() returns NaN if the string has a non-numeric character
// parseInt() parses integers till finds a non-numeric character
// if the input doesn't begin with a numeric value, returns NaN
console.log(Number("123-456")); //NaN
console.log(parseInt("123-456")); //123
console.log(parseInt("$123-456")); //123
console.log(`parseInt("$123-456".slice(1)): ${"$123-456".slice(1)}`); //123
console.log(Number(true));
console.log(parseInt(true));

//Boolean parsing
// false:"",0,null,indefined
console.log(`Boolean(1): ${Boolean(1)}`); //true
console.log(`Boolean(1000): ${Boolean(1000)}`); //true
console.log(`Boolean('Hello'): ${Boolean("Hello")}`); //true
console.log(`Boolean('false'): ${Boolean("false")}`); //true
console.log(`Boolean(' '): ${Boolean(" ")}`); //true
console.log(`Empty string Boolean(''): ${Boolean("")}`); //true


//parsing from Number to String


String(JSON.stringify({ name: "Leon" }));
