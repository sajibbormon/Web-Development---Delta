/*
Manipulating Style
------------------
using classList

obj.classList (return all the classes defined for a particular object)

classList.add() to add new classes
classList.remove() to remove classes
classList.contains() to check if a specific class exists
classList.toggle() to toggle between add & remove


*/

let img = document.querySelector('img');

console.log("before any class is defined");

console.dir(img.classList);

//if no class name is defined then it will be empty.

img.classList.add("imgClass");
console.log("after imgClass is defined");


console.dir(img.classList);

let heading = document.querySelector('h1');

console.dir(heading.classList);

heading.classList.add("green");

//removing the class
heading.classList.remove("green");

//same things can be using setAttribute but we can add only one value/class. so we prefer classList method.

//check if a class exists.

heading.classList.contains("underline");

//toggle is similar like switch

// on -> press -> off
// off -> press -> on

// just toggle the current value. (just like NOT gate)

heading.classList.toggle('green');

