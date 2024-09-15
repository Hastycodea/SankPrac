const products = [
    { name: "Adidas Shoes", price: 2500, id: 1, quantity: 1,},
    { name: "Sting Energy Drink", price: 120, id: 2, quantity: 1,},
    { name: "Umbrella", price: 500, id: 3, quantity: 1, },
    { name: "Cat Food", price: 900, id: 4, quantity: 1, },
    { name: "T Shirt", price: 300, id: 5, quantity: 1, },
    { name: "Book", price: 100, id: 6, quantity: 1,},
  ];

  const productsHTML = products.map(
    (product) => `<div class="product-card">
          <h2 class="product-name">${product.name}</h2>
          <strong>$${product.price}</strong>
          <button class="product-btn" id=${product.id}>Add to Cart</button>
      </div>`
  );

  const result = document.querySelector(".result");
  result.innerHTML = productsHTML.join("");
  
  let cart = [];
  