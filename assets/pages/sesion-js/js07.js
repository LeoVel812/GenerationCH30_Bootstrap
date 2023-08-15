console.log("Welcome to the JS07 session!");
console.log("Forms");

const registerForm = document.forms["registerForm"];
registerForm.addEventListener("click", (event) => {
  event.preventDefault(); //prevents default

  const user = {
    fullname: registerForm.elements["fullname"].value,
    email: registerForm.elements["email"].value,
    birthdate: registerForm.elements["birthdate"].value,
    password: registerForm.elements["password"].value,
  };
  // console.log(email.value, birthdate.value);
  const age = calculateAge(user);
  if (age.year < 19) {
    appendAlert(`Get out of here, you're ${age.year} years old`, "warning");
  }
});
const calculateAge = ({ birthdate: birthdateStr }) => {
  console.log(birthdateStr); //string yyyy-mm-dd
  //date returns milliseconds from 1970-01-01T00:00:00
  const today = new Date(); // date object for today
  const birthdate = new Date(birthdateStr); // date object for birthdate
  const difference = today - birthdate; // returns milliseconds
  console.log(difference);
  const age = new Date(difference);
  console.log(age);
  console.log(` Year:${age.getFullYear() - 1970}`);
  console.log(` Months:${age.getMonth()}`);
  console.log(` Days:${age.getDate()}`);
  return {
    year: age.getFullYear() - 1970,
    month: age.getMonth(),
    days: age.getDate(),
  };
};

const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
const appendAlert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
};

/* const alertTrigger = document.getElementById("liveAlertBtn");
if (alertTrigger) {
  alertTrigger.addEventListener("click", () => {
    appendAlert("Nice, you triggered this alert message!", "success");
  });
}
 */
