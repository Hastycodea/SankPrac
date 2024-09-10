
let arr = [1, 2, 3, 4];
// arr.push(5); // adds to the end of the arr
// arr.pop(); // removes the last element
// arr.shift(); // removes the first elemnt
// arr.unshift(0); // adds an element to the beginning of an array

console.log(arr);

arr.forEach(num => console.log(num));

let newArray = arr.map(n => n * 3);
console.log(newArray);

let filteredArray = newArray.filter(n => n < 9);
console.log(filteredArray);