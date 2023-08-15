console.log("Welcome to the JS06 session!");
console.log("DOM manipulation");

/* DOM document object model it's a tree root documen->html->head,body-> */

//window = represents the web browser
// document=
// element

const findElementById = () => {
  const title = document.getElementById("title");
  console.log(title);
  console.log(typeof title);
  console.log(title.innerHTML);
  title.innerHTML = `<span id="generation" class=" text-primary"> Generation </span> JS06 Session`;
};
findElementById();

const changeElementsByTagName = () => {
  const unorderList = document.getElementsByTagName("li"); //
  console.log(unorderList);
  for (const ulElement of unorderList) {
    // console.log(ulElement);
    ulElement.innerHTML = `<span class="text-success fs-4"> ${ulElement.innerHTML} 🍔</span>`;
  }
};
changeElementsByTagName();

const findElementByQuerySelector = () => {
  // const element = document.querySelector("#title");
  // const element = document.querySelector(".text-warning");
  // const element = document.querySelector("ul");
  // const element = document.querySelector("li");
  const element = document.querySelector("h1 span");
  console.log(element);
};
findElementByQuerySelector();

const newElement = () => {
  const newElement = document.createElement("div");
  newElement.innerHTML = `La CH30 le gusta:
  <ul>
    <li> El Helado </li>
    <li> El Chisme </li>
    <li> Los corridos tumbados </li>
    <li> Escuchar a Mau </li>
    <li> Ser mejores amigos de Anneth </li>
  </ul>`;

  const descriptionCH30 = document.querySelector("#descriptionCH30");
  descriptionCH30.appendChild(newElement);
};

newElement();

const changeColor = (color) => {
  const descriptionCH30 = document.getElementById("descriptionCH30");
  descriptionCH30.style.border = `thin solid ${color}`;
};
changeColor("beige");

// Visualization properties
/* 

*/

const getReferenceTitleGeneration = () => {
  return document.getElementById("generation");
};

const displayNoneElement = () => {
  const generation = getReferenceTitleGeneration();
  generation.style.display = "none"; //delete element
};
const hiddenElement = () => {
  const generation = getReferenceTitleGeneration();
  generation.style.visibility = "hidden"; //delete element
};
const resetElements = () => {
  const generation = getReferenceTitleGeneration();
  generation.style.visibility = "visible"; //reset element
  generation.style.display = "inline"; //delete element
};
