// cart
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let cartTitle = document.querySelector(".section-title");
let closeCart = document.querySelector("#close-icon");

cartIcon.onclick = () => {
   cart.classList.add("active");
};
// Close cart
cartIcon.onclick = () => {
   cart.classList.remove("active");
};

// function myFun() {
//    cart.classList.add("active");
//    console.log("Hello");
// }

// cartIcon.addEventListener("click", myFun());
// function myFun() {
//    cart.classList.remove("active");
//    console.log("Hello");
// }

// cartIcon.addEventListener("click", myFun());
