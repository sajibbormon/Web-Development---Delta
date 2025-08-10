/*

Practice Qs
Add the following elements to the container using only JavaScript and the DOM methods.

i) a <p> with red text that says "Hey I'm red!"

ii) an <h3> with blue text that says "I'm a blue h3!"

iii) a <div> with a black border and pink background color with the following elements inside of it:

    . another <h1> that says "I'm in a div"

    · a <p> that says "ME TOO!"

*/

let para = document.createElement('p');

para.style.color = "red";
para.innerText ="Hey I'm red!";

let body = document.querySelector("body");

body.appendChild(para);

let h3 = document.createElement('h3');

h3.style.color = 'blue';
h3.innerText = "I'm a blue h3!";

body.appendChild(h3);

let div = document.createElement('div');

div.style.borderStyle = 'solid';
div.style.borderColor = 'red';
// div.style.borderWidth = '2px';

body.appendChild(div);

let h1 = document.createElement('h1');
h1.innerText = "I'm in a div";
div.appendChild(h1);

let paraDiv = document.createElement('p');

paraDiv.innerText = 'Me too!';

div.append(paraDiv);



