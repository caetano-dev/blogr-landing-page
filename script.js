const product = document.querySelector(".productContainer");
const company = document.querySelector(".companyContainer");
const connect = document.querySelector(".connectContainer");
const hamnavLabel = document.querySelector(".hamnavLabel");

const toggle = () => {
  hamnavLabel.addEventListener("click", () => {
    hamnavLabel.classList.toggle("hamnavLabel-active");
  });
  product.addEventListener("click", () => {
    productList.classList.toggle("option-active");
  });
  company.addEventListener("click", () => {
    companyList.classList.toggle("option-active");
  });
  connect.addEventListener("click", () => {
    connectList.classList.toggle("option-active");
  });
};
toggle();

window.addEventListener("resize", () => {
  console.log(window.innerWidth);
});

