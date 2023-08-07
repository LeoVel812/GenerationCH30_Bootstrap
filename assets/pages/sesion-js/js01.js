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
  age: 39,
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
