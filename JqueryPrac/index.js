$(document).ready(function() {
    $.ajax({
        url : 'products.json',
        success : function(result) {
            var products = result.items;
            var productsList = '';

            products.forEach(function(product){
                productsList += '<div class="col-12 col-lg-2">' +
                '<div class="card" style="width: 18rem;">' +
                    '<img src="'+ product.image +'" class="card-img-top" alt="...">' +
                    '<div class="card-body">' +
                        '<h5 class="card-title">'+ product.title +'</h5>' +
                        '<p class="card-text">Ksh.'+ product.price +'</p>' +
                        '<a href="#" class="btn btn-primary">Add to Cart</a>' +
                    '</div>' +
                '</div>' +
            '</div>';
            });

            $('#productItem').html(productsList);

        }
    });
});