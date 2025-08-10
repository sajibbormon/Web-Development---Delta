/*
Query Selectors
---------------
Allows us to use any CSS Selector

It is use for selecting single element. And it always return an object.

document.querySelector('p'); // Selects first p element

document.querySelector('#myId'); // Selects first eleemtn with id = myID

document.querySelector('.myClass'); // Selects first element with class = myClass



// querySelectorAll is used for selecting nodes/tags of list.

document.querySelectorAll("p"); // Selects all p elements

*/

console.dir(document.querySelector('h1'));
console.dir(document.querySelector('#description'));
console.dir(document.querySelector('.oldImg'));


console.dir(document.querySelector("div a")); // return first anchor tag inside div(nested way of selecting just like css)

console.dir(document.querySelectorAll("div a"));