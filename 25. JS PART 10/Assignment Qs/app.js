/*
Qs1. Try out the following events in Event Listener on your own :
- mouseout
- keypress
- Scroll
- load

[Use MDN for help]

Qs2. Create a button on the page using JavaScript. Add an event listener to the button
     that changes the button's color to green when it is clicked.

Qs3. Create an input element on the page with a placeholder "enter your name" and a
     H2 heading on the page inside HTML.
     The purpose of this input element is to enter a user's name so it should only input
     letters from a-z, A-Z and space (all other characters should not be detected).
     Whenever the user inputs their name, their input should be dynamically visible inside
     the heading.
     [Please note that no other character apart from the allowed characters should be
     visible in the heading]

*/

let inp = document.querySelector("input");
let box = document.querySelector("#box");
let output = document.querySelector("#output");



inp.addEventListener("keypress", function(event){
    console.log(event.key,"key is pressed")
});


box.addEventListener("scroll", function(event){
    // console.log(event);
    output.textContent = "Scroll event fired!";
    setTimeout(()=>{
        output.textContent = "Waiting on scroll events...";
    }, 2000); 

});

window.addEventListener("load", (event)=>{
    console.log("page is fully loaded");
});


//Qs 2
let btn = document.createElement("button");
btn.textContent = "click me!";
document.body.append(btn);

btn.addEventListener("click", ()=>{
    btn.style.backgroundColor = "green";
});

let inpName = document.querySelector("#inputName");
let namePrint = document.querySelector("#name");

        // Add an event listener to the input field to detect user input
        inpName.addEventListener('input', function(event) {
            // Get the current value from the input field
            let inputValue = event.target.value;

            // This regular expression finds any character that is NOT a-z, A-Z, or a space.
            // The 'g' flag ensures it replaces all occurrences, not just the first one.
            const allowedCharsRegex = /[^a-zA-Z\s]/g;
            
            // Sanitize the input by replacing forbidden characters with an empty string
            let sanitizedValue = inputValue.replace(allowedCharsRegex, '');

            // Update the input field's value with the sanitized string.
            // This prevents the user from seeing any invalid characters being typed.
            event.target.value = sanitizedValue;

            // Dynamically update the heading with the sanitized input
            namePrint.textContent = sanitizedValue;
        });