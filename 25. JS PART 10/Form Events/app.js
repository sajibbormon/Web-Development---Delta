/*
Form Events
------------


*/

let form = document.querySelector("form");

let btn = document.querySelector("button");

form.addEventListener("submit", function(event){
    event.preventDefault(); // default actions that is performed after submitting will be stopped. 
    console.log("form submitted");
});