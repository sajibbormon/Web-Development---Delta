/*

Qs1. Create a new input and button element on the page using JavaScript only. Set the
text of button to "Click me";

Qs2. Add following attributes to the element :
- Change placeholder value of input to "username"
- Change the id of button to "btn"

Qs3. Access the btn using the querySelector and button id. Change the button
background color to blue and text color to white.

Qs4. Create an h1 element on the page and set its text to "DOM Practice" underlined.
Change its color to purple.

Qs5. Create a p tag on the page and set its text to "Apna College Delta Practice",
where Delta is bold.

*/

//Qs 1

let input = document.createElement('input');
input.type = "text";

let btn = document.createElement('button');

btn.innerText = "Click me";

document.querySelector('body').append(input);
document.querySelector('body').append(btn);

//Qs 2
// input.placeholder = 'username';
// btn.id = 'btn';

//using setAttribute
btn.setAttribute("id", "btn");
btn.setAttribute("palceholder", "username");

//Qs 3
document.querySelector("#btn").classList.add("btn");

//Qs 4
let h1 = document.createElement('h1');
h1.innerHTML = "<u>DOM Practice</u>";
h1.style.color = "purple";
document.body.append(h1);

//Qs 5
let p = document.createElement('p');
p.innerHTML = "Apna College <b>Delta</b> practice";

document.querySelector("body").append(p);