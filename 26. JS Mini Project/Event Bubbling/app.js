/*
Event Bubbling
----------------
Event bubbling is a fundamental concept in JavaScript's Document Object Model (DOM) event handling. 
It describes the order in which event handlers are triggered when an event occurs on a nested HTML element.

*/

let div = document.querySelector("div");

let ul = document.querySelector("ul");

let lis = document.querySelectorAll("li");

div.addEventListener("click", function(){
    console.log("div was clicked");
});

ul.addEventListener("click", function(){
    console.log("ul was clicked");
});

for(li of lis){
    li.addEventListener("click", function(event){
        event.stopPropagation();
        console.log("li was clicked");

    });
}

// if most internal element is clicked then it's parent's will be also triggered and parent's parent will be also 
// triggered. (nested element) 

// if we want to stop event bubbling then we have to use 'stopPropagation()' function.

