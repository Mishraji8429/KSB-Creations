window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    loader.style.opacity = "0";

    setTimeout(() => {
        loader.style.display = "none";
    }, 500);
});
const container = document.getElementById("product-container");

if(container){

products.forEach(product=>{

container.innerHTML+=`

<div class="product-card">

<img src="${product.image}" alt="${product.name}">

<h3>${product.name}</h3>

<p>${product.price}</p>

<a href="${product.link}" target="_blank">Buy Now</a>

</div>

`;

});

}
