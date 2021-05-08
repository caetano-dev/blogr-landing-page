const productButton = document.querySelector("#Product");
const companyButton = document.querySelector("#Company");
const connectButton = document.querySelector("#Connect");
const productSuboption = document.querySelector(".productSuboption");

//const productButton = document.querySelector("#product")

function showProduct() {
  productButton.addEventListener("click", () => {
    productSuboption.style.display = "flex";
  });
}
showProduct();
