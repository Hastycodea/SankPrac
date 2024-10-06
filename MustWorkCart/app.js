// declaring variables
const productsDOM = document.querySelector('.products-row');
const cartContent = document.querySelector('.cart');
const cartTotal = document.getElementById('total-amount');
const cartItems = document.getElementById('items-quantity');

// cart
let cart = [];

// getting the products
class Products {
    async getProducts() {
        try {
            let result = await fetch("products.json")
            let data = await result.json(); // parse the JSON from the response

            let products = data.items;
            products = products.map(item => {
                const { title, price } = item.fields;
                const { id } = item.sys;
                const image = item.fields.image.fields.file.url;
                return { title, price, id, image };
            });
            return products;
        } catch (error) {
            console.log(error);
        }
    }
}

class UI {
    displayProducts(products) {
        let result = '';
        products.forEach(product => {
            result += `
            <div class="col-lg-3 mb-2">
                    <div class="product">
                        <div class="d-flex flex-column justify-content-center align-items-center">
                            <img src=${product.image} alt="">
                            <div class="product-title">${product.title}</div>
                        </div>
                        <div class="description">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, natus?</p>
                        </div>
                        <div class="card-divider"></div>
                        <div class="price-cart d-flex justify-content-between  mt-2">
                            <p>$ <span class="product-price">${product.price}</span></p>
                            <button class="add-to-cart" data-id=${product.id}>
                                <i class="fa-solid fa-cart-shopping"></i>
                            </button>
                        </div>
                    </div>
                </div>
            
            `;
        });
        productsDOM.innerHTML = result;
    }

    setCartValues(cart) {
        let tempTotal = 0;
        let itemsTotal = 0;

        cart.map( item => {
            tempTotal += item.price * item.amount;
            itemsTotal += item.amount;
        });

        cartTotal.innerText = parseFloat(tempTotal.toFixed(2));
        cartItems.innerText = itemsTotal;
    }


    addCartItem(item) {
        let result = `
        <div class="d-flex align-items-center justify-content-between">
            <div class="cart-image">
                <img src=${item.image} alt="">
                <p>${item.title}</p>
            </div>

            <div class="cart-quantity d-flex gap-2 align-items-center ">
                <button class="btn btn-outline-primary increment" data-id=${item.id}> - </button>
                <p id="quantity">${item.amount}</p>
                <button class="btn btn-outline-primary decrement" data-id=${item.id}> + </button>
            </div>

            <div class="cart-item-price">
                <p>Ksh. <span id="item-amount">${item.price}</span></p>
            </div>

        </div>
        `;
        cartContent.innerHTML += result;
    }

    getCartButtons() {
        const buttons = [...document.querySelectorAll('.add-to-cart')];

        buttons.forEach(button => {
            let id = button.dataset.id;

            button.addEventListener('click', event => {

                // getting product from products
                let cartItem = { ...Storage.getProduct(id), amount:1 }

                // adding product to cart
                cart = [...cart, cartItem]

                // saving cart in the local storage
                Storage.saveCart(cart);

                // displaying cart items
                this.addCartItem(cartItem);
            })
        });

    }



    // cartLogic() {
    //     cartContent.addEventListener('click', event => {

    //         if(event.target.cla)

    //     });

    // }


}

// local Storage
class Storage {
    static saveProducts(products) {
        localStorage.setItem('products', JSON.stringify(products));
    }

    static getProduct(id) {
        let products = JSON.parse(localStorage.getItem('products'));
        return products.find(product => product.id === id);
    }

    static saveCart(cart) {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    static getCart() {
        return localStorage.getItem('cart') ? JSON.stringify(cart) : [];
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const ui = new UI();
    const products = new Products();

    products.getProducts().then(products => {
        ui.displayProducts(products);
        Storage.saveProducts(products);
    }).then(() => {
        ui.getCartButtons();
    });
});