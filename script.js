const product = document.querySelector(".productContainer");
const company = document.querySelector(".companyContainer");
const connect = document.querySelector(".connectContainer");

const toggle = () =>{
    product.addEventListener("click", ()=>{
        productList.classList.toggle("option-active")
    })
    company.addEventListener("click", ()=>{
        companyList.classList.toggle("option-active")
    })
    connect.addEventListener("click", ()=>{
        connectList.classList.toggle("option-active")
    })
}
toggle();