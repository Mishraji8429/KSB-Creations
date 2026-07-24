window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    if (loader) {
        loader.style.display = "none";
    }
});

const container = document.getElementById("product-container");

if (container) {

products.forEach(product => {

container.innerHTML += `

<div class="product-card">

<span class="badge">${product.badge}</span>

<img src="${product.image}" alt="${product.name}">

<h3>${product.name}</h3>

<div class="rating">⭐⭐⭐⭐⭐ ${product.rating}</div>

<div class="price">

<span class="new-price">${product.price}</span>

<span class="old-price">${product.oldPrice}</span>

</div>

<div class="product-buttons">

<a href="${product.link}" target="_blank" class="buy-btn">Buy Now</a>

<button class="wish-btn">❤</button>

</div>

</div>

`;

});

}
const heroImages = [
  "images/hero1.jpg",
  "images/hero2.jpg",
  "images/hero3.jpg",
  "images/hero4.jpg"
];

let current = 0;

const hero = document.getElementById("hero-image");

setInterval(() => {
  current = (current + 1) % heroImages.length;
  hero.src = heroImages[current];
}, 4000);
