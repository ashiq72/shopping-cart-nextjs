// cart
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

// Open cart
cartIcon.onclick = () => {
   cart.classList.add("active");
};
// Close cart
closeCart.onclick = () => {
   cart.classList.remove("active");
};
