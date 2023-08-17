console.log("Welcome to the JS07 session! API Fetch");
/* 
API Fetch index and manipulate
http petitions (DELETE,GET,PORT,PUT)
Intermediario : API 
*/

urlFakeStore = "https://fakestoreapi.com/products/";

// const getProducts = (url) => {
//   fetch(url)
//     .then((resolve) => {
//       console.log(resolve);
//       return resolve.json(); //parsing from JSON to object
//     })
//     .then((resolveJson) => {
//       console.log(resolveJson);
//       printToDOM(resolveJson);
//     })
//     .catch((error) => {
//       console.warn(error);
//     });
// };

const getProducts = async (url) => {
  try {
    const resolve = await fetch(url);
    const resolveJson = await resolve.json();
    printToDOM(resolveJson);
    localStorage.setItem("products",)
  } catch (error) {
    console.warn(error);
  }
};

getProducts(urlFakeStore);

function printToDOM(products) {
  let unorderList = "";
  for (const product of products) {
    unorderList += `<li class="col-6 col-md-4">${product.title}</li>`;
  }
  const productList = document.getElementById("products");
  productList.innerHTML = unorderList;
}
