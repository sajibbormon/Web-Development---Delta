/*
DOM Events
----------
onclick (when an element is clicked)
onmouseenter (when moouse enters an element)

*/

let btn = document.querySelector('button');

console.dir(btn);

// btn.onclick = function () {
//     alert("button was clicked");
// };


function sayHello() {
    alert("Hello!");
}
 
btn.onclick = sayHello;
//we are not executing the function that's why only the name is given without bracs.

let btns = document.querySelectorAll('button');

for(btn of btns){
    btn.onmouseenter = function () {
        console.log("You are interacting with a button");
    }
    btn.onclick = sayHello;   
}

//onmouseenter -> if a pointer/mouse is taken/drag in a button then it will perform some actions

