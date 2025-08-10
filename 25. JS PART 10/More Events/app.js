/*
More Events
-----------

change event:
The change event occurs when the 'value of an element' has been changed (only works on <input>, <textarea>
and <select> elements).

input event:
The input event fires when the value of an <input>, <select>, or <textarea> element has been changed.

*/

let form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();
});

let user = document.querySelector("#user");

user.addEventListener("change", function(){
    console.log("input changed");
    console.log("final value", this.value);
});

//change argument shows the diffenence between intial state and final state.

let pass = document.querySelector("#pass");

pass.addEventListener("input", function(){
    console.log("input changed");
    console.log("final value", this.value);
});

//in input argument, suppose giving input sajib, here for each character the change will be shown. (doesn't work on non character key)

