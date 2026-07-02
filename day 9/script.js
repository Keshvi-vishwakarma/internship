const product = [
    {
        name:"Coffee",
        decription:"Combines sensory tasting notes, the origin of the beans, and the perfect pour.",
        price:"₹110",
        image:"coffee.jpg"
    },
    {
        name:"Pastas",
        decription:"A comforting bowl of perfectly cooked pasta tossed in a rich, velvety sauce.",
        price:"₹335",
        image:"pasta.jpg"
    },
    {
        name:"Sandwiches",
        decription:"Freshly toasted bread filled with premium ingredients and melted cheese.",
        price:"₹259",
        image:"sandwich.jpg"
    },
    {
        name:"Desserts",
        decription:"Handcrafted sweet treats made with premium ingredients.",
        price:"₹329",
        image:"desserts.webp"
    }
];

const cardContainer = document.getElementById("cardcontainer");

cardContainer.innerHTML = product.map(item => `
<div class="card">
    <img src="${item.image}" class="card-img">
    <h2>${item.name}</h2>
    <p>${item.decription}</p>
    <p class="price">${item.price}</p>
</div>
`).join("");

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
});