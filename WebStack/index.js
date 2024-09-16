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

    container.removeEventListener("mouseenter", mouseEnterContainer);
}

// document.addEventListener("keyup", function(event) {
//     console.log(event.keyCode);
// });

//Defining variables
var btt = document.getElementById("back-to-top"),
    body = document.body,
    docElem = document.documentElement,
    offset = 100,
    scrollPos, docHeight,
    isChrome = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;

//calculating document's heigth
docHeight = Math.max(body.scrollHeight, body.offsetHeight, docElem.scrollHeight, docElem.offsetHeight, docElem.clientHeight);
if(docHeight != 'undefined') {
    offset = docHeight / 4;
}

//add scroll event listener
window.addEventListener("scroll", function(event) {
    scrollPos = body.scrollTop || docElem.scrollTop;
    btt.className = (scrollPos > offset) ? "visible" : "";
});

//add click event listener
btt.addEventListener("click", function(event) {
    event.preventDefault();

    if(isChrome) {
        docElem.scrollTop = 0;
    } else {
        body.scrollTop = 0;
    }

});





