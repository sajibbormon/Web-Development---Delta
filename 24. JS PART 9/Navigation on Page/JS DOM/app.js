/*
Navigation
-----------

parentElement -> shows which one is parent

children -> shows all children

previousElementSibling / nextElementSibling -> shows the previous or next sibling.


<div>
    <h1></h1>
    <p></p>
</div>

div is the parent
h1 and p are children

and h1 and p are sibling

*/

let boxlink = document.querySelector(".boxLink");

console.dir(boxlink.parentElement);

let h4 = document.querySelector('h4');

console.dir(h4.parentElement);

console.dir(h4.children);

let box = document.querySelector(".box");

console.dir(box.children);
//count the children
console.dir(box.childElementCount);

let ul = document.querySelector("ul");

console.dir(ul.children);
console.dir(ul.nextElementSibling);
console.dir(ul.previousElementSibling);

//access children using index

console.dir(ul.children[0]);
console.dir(ul.children[1]);
console.dir(ul.children[2]);

console.dir(ul.children[0].nextElementSibling);

//changing heading color using navigation.

let img = document.querySelector('img');

console.dir(img.previousElementSibling);
img.previousElementSibling.style.color = "green";