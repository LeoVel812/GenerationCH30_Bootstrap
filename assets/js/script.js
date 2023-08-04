console.log("Patrick is making this page!");

function clickPatrick() {
  alert("is mayonnaise an instrument?");
}
function changeColor(htmlElement, color) {
  //   alert("I'm so excited to change my color!");
  //   console.log(htmlElement);
  //   console.log(color);
  htmlElement.style.color = color;
}
function changeColorWithPrompt(htmlElement) {
  const color = prompt("Insert a color", "pink");
  changeTextUserColor(htmlElement, color);
  changeColor(htmlElement, color);
}

function changeTextUserColor(htmlElement, color) {
  htmlElement.innerHTML = "<h3>Now I'm <em>" + color + "</em></h3";
}

function resetColors() {
  // getting references to the elements
  const refRedColor = document.getElementById("redColor");
  const refGreenColor = document.getElementById("greenColor");
  const refBlueColor = document.getElementById("blueColor");
  const refUserColor = document.getElementById("userColor");
  // using function changeColor
  changeColor(refRedColor, "black");
  changeColor(refGreenColor, "black");
  changeColor(refBlueColor, "black");
  changeColor(refUserColor, "black");
  refUserColor.innerHTML = "Enter a color";

  // setting manually:
  // refRedColor.style.color="Red";
}
