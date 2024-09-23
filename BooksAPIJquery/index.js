// function bookSearch() {
//     var search = document.getElementById('search').value
//     document.getElementById('results').innerHTML = ""
//     console.log(search);

//     $.ajax({
//        url: "https://www.googleapis.com/books/v1/volumes/?q=" + search,
//        dataType: "json",

//        success: function(data) {
//         for( i = 0; i < data.items.length; i++) {
//             results.innerHTML += "<img src='" + data.items[i].volumeInfo.imageLinks.thumbnail + "'>"
//         }
//        },

//        type: "GET"
        
//     });
// }

// document.getElementById('button').addEventListener('click', bookSearch, false);


$(document).ready(function() {
    
    
    $('#button').click(function() {
        
        var search = document.getElementById('search').value

        $.ajax({
            url: "https://www.googleapis.com/books/v1/volumes/?q=" + search,
            dataType: "json",
     
            success: function(data) {
             for( i = 0; i < data.items.length; i++) {
                let newImageUrl = data.items[i].volumeInfo.imageLinks.thumbnail;
                let title = data.items[i].volumeInfo.title;
                let description = data.items[i].volumeInfo.description;

                // $('#dynamicImage').attr('src', newImageUrl);
                // $('#title').text(title);
                // $('#description').text(description);

                let bookItem = `
                <div class="col-12 col-lg-4">
                  
                  
                    <div class="card" style="width: 18rem;">
                        <div class="img-container">
                            <img src="${newImageUrl}" class="card-img-top" alt="...">

                            <div class="wishlist-container d-flex flex-column gap-3">
                                <button class="wishlist" style="border-radius: 50%; width: 2rem; height: 2rem;">
                                    <i class="fa-regular fa-heart"></i>
                                </button>
        
                                <button class="wishlist " style="border-radius: 50%; width: 2rem; height: 2rem;">
                                    <i class="fa-regular fa-eye"></i>
                                </button>
        
                                <button class="wishlist " style="border-radius: 50%; width: 2rem; height: 2rem;">
                                    <i class="fa-solid fa-cart-shopping"></i>
                                </button>

                            </div>
                        </div>
                        <div class="card-body">
                          <p class="card-text">
                            <span class="title" style="font-weight: bold;" id="title">${title}</span><br>
                            <span id="description">
                                ${description}
                            </span>
                            </p>
                        </div>
                      </div>
                </div>
                `;

                $('#results').append(bookItem);

             }
            },
     
            type: "GET"
             
         });
        

    });
});