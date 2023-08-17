console.log("Welcome to the JS07 session! Promise");
/* 

*/

const pinkyPromise = new Promise((fcnCallbackResolve, fcnCallbackReject) => {
  const underAge = false;
  if (underAge) {
    fcnCallbackResolve("together ");
  } else {
    fcnCallbackReject({ code: 404, message: "Who are you?" });
  }
});

// consume the promises
/* use then, catch, finally */
console.log("----->Promise<-----");
console.log("01-Before consuming the promises");
// pinkyPromise(); //  returns an error, it's a promise not a function
const response = pinkyPromise;
console.log(response);
// correct form:
// pinkyPromise.then()//it runs the callbackfcn if the promise was solved
// .catch() //it runs the callbackfcn if the promise was rejected
// .finally()//it runs the callbackfcn after the promise was solved or rejected
pinkyPromise
  .then((response) => console.log(`Promise solved ${response}`))
  .catch((error) => console.log(`Promise rejected ${error.message}`))
  .finally(() => console.log(`Promise ended`));

console.log("03-After consuming the promises");

//making a promise with parameters
/**
 * @param {string} name
 */

const greeting = (name) => {
  const myPromise = new Promise((resolve, reject) => {
    const firstChar = name.charAt(0).toLowerCase();
    if (firstChar === "a") {
      // resolve({ code: 200, message: `I'm ${name}, Hello there!` });
      setTimeout(() =>
        resolve({ code: 200, message: `I'm ${name}, Hello there!` })
      );
    } else if (firstChar === "l") {
      resolve({
        code: 200,
        message: `I'm ${name}, Saludos a toda la banda de la ch30 
      taka taka taka taka taka viene viene viene viene 
      takta taka taka taka`,
      });
    } else {
      reject({ code: 404, message: `I'm not available for ${name}` });
    }
  });
  return myPromise;
};
greeting("Ana")
  .then((response) => {
    console.log(response.code, response.message);
  })
  .catch((error) => {
    console.log(error.code, error.message);
  });
greeting("Luisa")
  .then((response) => {
    console.log(response.code, response.message);
  })
  .catch((error) => {
    console.log(error.code, error.message);
  });
greeting("Eduardo")
  .then((response) => {
    console.log(response.code, response.message);
  })
  .catch((error) => {
    console.log(error.code, error.message);
  });

//consuming promises with async and await
//it eases thet typing and readibility of asynchronous code
/* it lets to type async code as it is typed as sync code */

async function greetingCH30(name) {
  console.log("---greetings to CH30 ---");
  const result = await greeting(name);
  console.log(result);
  console.log("---end of the greeting CH30---");
}

// greetingCH30 = async () => {
//   console.log("---greetings to CH30 ---");
//   const result = await greeting("Anneth");
//   console.log(result);
//   console.log("---end of the greeting CH30---");
// };
// ASYNC AND AWAIT: awaits until promises are consumed
// const greetingAll = async () => {
//   greetingCH30("Anneth");
//   greetingCH30("Leonardo");
// };
const greetingAll = async () => {
  try {
    await greetingCH30("Anneth");
    await greetingCH30("Mau");// this breaks the try scope and throws an erorr
    await greetingCH30("Leonardo");
  } catch (error) {
    console.warn("A promise was rejected");
    console.table(error);
  }
};

greetingAll();

