/*
Adding Elements
-----------------
document.createElement('p');

. appendChild(element) (append inside an object/element/tag -> nested way), (adding in last)
. append(element) (not only element but also string and text could be append using append), (changing inside a particular element)
. prepend(element) (similar as append but append at starting)
. insertAdjacentElement(where, element) (exactly where we want to add)


insertAdjacentElement(position, element)

all position

A string representing the position relative to the targetElement ; must match (case-insensitively)
one of the following strings:

. 'beforebegin' : Before the targetElement itself.

. 'afterbegin' : Just inside the targetElement, before its first child.

. beforeend' : Just inside the targetElement , after its last child.

. 'afterend' : After the targetElement itself.


*/

let newP = document.createElement('p');

newP.innerText = "Hi, I am a new Paragraph";

let body = document.querySelector("body"); 

body.appendChild(newP); //will be added at the last of all elements inside the body.

let box = document.querySelector('.box');

box.appendChild(newP);

let btn = document.createElement("button");

btn.innerText = "Click me!";

box.appendChild(btn);

newP.append("This is new text in the newP using append");


let btn2 = document.createElement("button");

btn2.innerText = "NEW BUTTON!!!";

let p = document.querySelector('p');

// p.insertAdjacentElement("beforebegin", btn2); //not inside
// p.insertAdjacentElement("afterbegin", btn2); //btn will be created inside the paragraph
p.insertAdjacentElement("beforeend", btn2); //btn will be created inside the paragraph
// p.insertAdjacentElement("afterend", btn2); //not inside

//-------------------------------------x-----------------------------------
/*
Removing Elements
-----------------
. removeChild(element) -> (act as appendChild)

.remove(element) -> (act as append)
*/

// btn.remove();
//same things can be done using below code.
// box.removeChild(btn);


//removing the whole body
body.remove();