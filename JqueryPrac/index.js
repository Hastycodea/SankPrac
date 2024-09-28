$(document).ready(function() {
    $.ajax({
        url : 'products.json',
        success : function(result) {
            var products = result.items;
            var productsList = '';

            products.forEach(function(product){
                console.log(product.id)
                productsList += '<div class="col-12 col-lg-2">' +
                '<div class="card" style="width: 18rem;">' +
                    '<img src="'+ product.image +'" class="card-img-top" alt="...">' +
                    '<div class="card-body">' +
                        '<h5 class="card-title">'+ product.title +'</h5>' +
                        '<p class="card-text">Ksh. '+ product.price +'</p>' +
                        '<button class="btn btn-primary cart-btn" data-id='+ product.id +'>Add to Cart</button>' +
                    '</div>' +
                '</div>' +
            '</div>';
            });

            $('#productItem').html(productsList);

        }
    });

    $('#productItem').on('click', '.cart-btn',function() {
        var productId = $(this).data('id');
        console.log(productId);

        $.ajax({
            url : 'products.json',
            success : function(result) {
                var products = result.items;
                console.log(products);
                var product = products.find(product => product.id === productId);

                $('#cart-item').append(`
                    <div class="col-12 col-lg-4 d-flex align-items-center gap-2">
                        <img src="" alt="..." class="cart-image">
                        <p id="productName">${product.title}</p>
                    </div>
                
                    <div class="col-12 col-lg-4 d-flex gap-2 align-items-center">
                        <button class="btn btn-outline-secondary"> - </button>
                        <span>1</span>
                        <button class="btn btn-outline-secondary"> + </button>
                    </div>
                
                    <div class="col-12 col-lg-4 d-flex align-items-center">
                        <p>Ksh. <span id="productPrice">${product.price}</span></p>
                    </div>
                    <hr class="mt-2"></hr>
                `);
            }
        });
    });
});