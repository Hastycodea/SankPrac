// cart.js

// Variables to hold cart items and total price
let cart = [];
let totalPrice = 0;

// Function to add a product to the cart
function addToCart(productId, productName, productPrice) {
    // Check if the product is already in the cart
    const existingProduct = cart.find(item => item.id ===  productId);

    if (existingProduct) {
        // Increment the quantity if the product is already in the cart
        existingProduct.quantity += 1;
    } else {
        // Add new product to the cart
        cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
    }

    updateCart();
}

// Function to remove a product from the cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Function to increase the quantity of a product in the cart
function incrementQuantity(productId) {
    const product = cart.find(item => item.id === productId);
    if (product) {
        product.quantity += 1;
        updateCart();
    }
}

// Function to decrease the quantity of a product in the cart
function decrementQuantity(productId) {
    const product = cart.find(item => item.id === productId);
    if (product && product.quantity > 1) {
        product.quantity -= 1;
        updateCart();
    } else if (product && product.quantity === 1) {
        removeFromCart(productId);
    }
}

// Function to update the cart display and total price
function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    
    // Clear the current cart items
    cartItemsElement.innerHTML = '';

    // Update cart items display
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            ${item.name} - $${item.price} x ${item.quantity}
            <button onclick="incrementQuantity(${item.id})">+</button>
            <button onclick="decrementQuantity(${item.id})">-</button>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartItemsElement.appendChild(cartItem);
    });

    // Calculate and update total price
    totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

// Event listeners for "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', event => {
        const productElement = event.target.closest('.product');
        const productId = parseInt(productElement.getAttribute('data-id'));
        const productName = productElement.getAttribute('data-name');
        const productPrice = parseFloat(productElement.getAttribute('data-price'));

        addToCart(productId, productName, productPrice);
    });
});
