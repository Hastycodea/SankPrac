const products = [
  { name: "Adidas Shoes", price: 2500, id: 1,},
  { name: "Sting Energy Drink", price: 120, id: 2,},
  { name: "Umbrella", price: 500, id: 3,},
  { name: "Cat Food", price: 900, id: 4,},
  { name: "T Shirt", price: 300, id: 5,},
  { name: "Book", price: 100, id: 6,},
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
  console.log(existingProduct);

  if (existingProduct) {
    existingProduct.quantity += 1
  } else {
    cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });

  }

  updateCart();

}

function incrementQuantity(id) {
  const product = cart.find(item => item.id === id);
  if(product) {
    product.quantity += 1;
    updateCart();
  }
}

function remove(id) {
  cart = cart.filter(item => item.id !== id);
  updateCart();
}

function decrementQuantity(id) {
  const product = cart.find(item => item.id === id);

  if(product) {
    if(product.quantity === 1) {
      remove(id);
    } else {
      product.quantity -= 1;
      updateCart();
    }
  }

}

function updateCart() {
  const cartItemsElements = document.getElementById('cart-items');
  const totalPrice = document.querySelector('.total');
  const totalItems = document.querySelector('.noOfItems');

  //clearing the current cart elements
  cartItemsElements.innerHTML = '';

  //update cart items display
  cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <div >${item.name}</div>
      <div style='display: flex; align-items: center;';>
        <button onclick='decrementQuantity(${item.id})'> - </button>
        <p id='quantity'>${item.quantity}</p>
        <button onclick='incrementQuantity(${item.id})'> + </button>
      </div>
      <div >${item.price}</div>
      `;
      cartItemsElements.appendChild(cartItem);
  });

  const itemsTotal = cart.length;
  totalItems.innerText = itemsTotal;

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  totalPrice.textContent = total.toFixed(2);
  
}

// Attaching Event listners for add to cart button after rendering the html
document.querySelectorAll('.product-btn').forEach(button => {
  button.addEventListener('click', event => {
    const productElement = event.target.closest('.product-card');
    const productId = parseInt(productElement.getAttribute('data-id'));
    const productName = productElement.querySelector('.product-name').innerText;
    const productPrice = parseFloat(productElement.querySelector('.product-price').innerText.slice(1));

    addToCart(productId, productName, productPrice);
  });
});
