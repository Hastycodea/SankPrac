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


// items[1].style.display="none";   // arrays of items

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

var targetInput = document.getElementById("country"),
    results = document.getElementById("autocomplete-results"),
    matches = [],
    countryList = [
        "Kenya", "Brazil", "Canada", "India", "Japan", 
        "Germany", "Australia", "France", "Italy", "China", 
        "South Africa", "Mexico", "United States", "Nigeria", "Egypt", 
        "Argentina", "Russia", "Spain", "Sweden", "South Korea"
      ];

targetInput.focus();

targetInput.addEventListener("keyup", function(event) {
    /* 
    Key Codes
    Enter: 13
    Arrow up: 38
    Arrow down: 40
    */    

    results.innerHTML = '';
    toggleResults("hide");

    if(this.value.length > 0) {
        matches = getMatches (this.value);

        if(matches.length > 0) {
            displayMatches(matches);
        }
    }

});

function toggleResults(action) {
    if(action == "show") {
        results.classList.add("visible");
    } else if (action == "hide") {
        results.classList.remove("visible");
    }
}

function getMatches(inputText) {
    var matchList = [];

    for(var i = 0; i < countryList.length; i++) {
        if(countryList[i].toLowerCase().indexOf(inputText.toLowerCase) != -1) {
            matchList.push(countryList[i]);
        }
    }

    return matchList;
}

function displayMatches(matchList) {
    var j = 0;

    while(j < matchList.length) {
        results.innerHTML += '<li class="result">' + matchList[j] + '</li>';
        j++;
    }

    //show results
    toggleResults("show");
}







