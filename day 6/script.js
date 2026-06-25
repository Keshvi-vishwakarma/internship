const product=[
    {
        name:"Coffee",
        decription:"Combines sensory tasting notes, the origin of the beans, and the perfect pour.",
        price:"₹110",
        image:"coffee.jpg",
    },
    {
        name:"Pastas",
        decription:"A comforting bowl of perfectly cooked pasta tossed in a rich, velvety sauce and infused with aromatic herbs, fresh garlic, and premium ingredients.",
        price:"₹335",
        image:"pasta.jpg",
    },
    {
        name:"Sandwiches",
        decription:"Freshly toasted bread filled with premium ingredients, crisp vegetables, and melted cheese for a deliciously satisfying bite.",
        price:"₹259",
        image:"sandwich.jpg",
    },
    {
        name:"Desserts",
        decription:"Handcrafted sweet treats made with premium ingredients, delivering the perfect balance of richness, flavor, and indulgence.",
        price:"₹329",
        image:"desserts.webp",
    }
];

const cardContainer = document.getElementById("cardcontainer");

const name='keshvi'
cardcontainer.innerHTML =  
product.map(
    (product) => 
      `
        <div class="card">
            <img src="${product.image}" alt="${product.name}" class="card-img">
            <h2>${product.name}</h2>
            <p>${product.decription}</p>
            <p class="price">${product.price}</p>
        </div>
    `
  );