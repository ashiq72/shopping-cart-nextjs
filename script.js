// cart variables
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");
const images = ["img/s1.jpg", "img/s2.jpg", "img/s3.jpg", "img/s4.jpg"];
const heroImg = document.getElementById("hero-img");
let imgIndex = 0;

setInterval(() => {
   if (imgIndex === images.length) {
      imgIndex = 0;
   }

   const linkImg = images[imgIndex];
   heroImg.setAttribute("src", linkImg);
   console.log(linkImg);
   imgIndex++;
}, 3000);

// Open cart
cartIcon.onclick = () => {
   cart.classList.add("active");
};
// Close cart
closeCart.onclick = () => {
   cart.classList.remove("active");
};

window.onscroll = function () {
   scrollFunction();
};

function scrollFunction() {
   if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
   ) {
      document.getElementById("nav").style.background = "#3131a8";
      document.getElementById("nav").style.color = "white";
      document.getElementById("nav").style.boxShadow =
         "0 1px 4px hsl(0 4% 15% / 10%)";
   } else {
      document.getElementById("nav").style.background = "transparent";
   }
}
