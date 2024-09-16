// function add(val1, val2) {
//     return val1 + val2;
// }

// let ans = add(45, 45);
// console.log(ans)

// let square = function(number) {
//     return number * number;
// }

// console.log(square(9));


var firstItem = document.getElementById("img1"),
    card = document.getElementsByClassName("card"),
    paragraphs = document.getElementsByTagName("p"),
    items = document.getElementsByClassName("items");


items[1].style.display="none";

for(var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color="grey";
}


var submitBtn = document.getElementById("submit");
var container = document.querySelector(".container");

submitBtn.addEventListener("click", function() {
    console.log('I\'ve been clicked!');
})

container.addEventListener("mouseenter", mouseEnterContainer);

function mouseEnterContainer() {
    console.log("Mouse Enter Clicked");
}


