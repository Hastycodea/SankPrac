const products = [
  { name: "Adidas Shoes", price: 2500, id: 1, quantity: 1, },
  { name: "Sting Energy Drink", price: 120, id: 2, quantity: 1, },
  { name: "Umbrella", price: 500, id: 3, quantity: 1, },
  { name: "Cat Food", price: 900, id: 4, quantity: 1, },
  { name: "T Shirt", price: 300, id: 5, quantity: 1, },
  { name: "Book", price: 100, id: 6, quantity: 1, },
];

const productsHTML = products.map(
  (product) => `<div class="product-card">
          <h2 class="product-name">${product.name}</h2>
          <strong class="product-price">$${product.price}</strong>
          <button class="product-btn" data-id='${product.id}'>Add to Cart</button>
      </div>`
);

const result = document.querySelector(".result");
result.innerHTML = productsHTML.join("");

let cart = [];

function addToCart(productId, productName, productPrice) {
  const existingProduct = cart.find(item => item.id === productId);

  if (!existingProduct) {
    cart.push({ id: productId, name: productName, price: productPrice });
  }

  updateCart();

}

function updateCart() {
  const cartItemsElements = document.getElementById('cart-items');
  const totalPrice = document.querySelector('.total');

  //clearing the current cart elements
  cartItemsElements.innerHTML = '';

  //update cart items display
  cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <div >${item.name}</div>
      <div >${item.price}</div>
      `;
      cartItemsElements.appendChild(cartItem);
  });


  //Event listners for add to cart button
  document.querySelectorAll('.product-btn').forEach(button => {
    button.addEventListener('click', event => {
      const productElement = event.target.closest('.product-card');
      const productId = parseInt(productElement.getAttribute('data-id'));
      const productName = productElement.getAttribute('product-name');
      const productPrice = productElement.getAttribute('product-price');

      addToCart(productId, productName, productPrice);
    });
  });


}
