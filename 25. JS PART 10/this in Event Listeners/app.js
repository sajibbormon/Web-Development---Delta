/*
this in Event Listeners
-------------------------
When 'this' is used in a callback of event handler of something, it refers to that something.

obj -> event listener (event, callback)
                                  |
                                this
this is used in the callback function for the object.

event listener is also called handler.


*/

let btn = document.querySelector("button");

// btn.addEventListener("click", function(){
//     // console.log(this);
//     console.log(this.innerText);
//     this.style.backgroundColor = "blue";
// });

//this is handy when we want add a single event listener for multiple objects.

let p = document.querySelector('p');
let h1 = document.querySelector('h1');
let h3 = document.querySelector('h3');

// p.addEventListener("click", function(){
//     // console.log(this);
//     console.log(this.innerText);
//     this.style.backgroundColor = "blue";
// });

// h1.addEventListener("click", function(){
//     // console.log(this);
//     console.log(this.innerText);
//     this.style.backgroundColor = "blue";
// });

// h3.addEventListener("click", function(){
//     // console.log(this);
//     console.log(this.innerText);
//     this.style.backgroundColor = "blue";
// });


function changeColor(){
    console.log(this.innerText);
    this.style.backgroundColor = "blue";
}

btn.addEventListener("click", changeColor)
h1.addEventListener("click", changeColor)
h3.addEventListener("click", changeColor)
p.addEventListener("click", changeColor)