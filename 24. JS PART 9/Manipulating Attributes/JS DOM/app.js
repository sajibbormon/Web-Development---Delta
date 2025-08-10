/*
Manipulating Attributes
-----------------------
obj.getAttribute(attr);

obj.setAttribute(attr, val);

attr -> which attribute we want to change
val -> which new attribute value we want set


examples of attributes: class, id, src etc.
*/

let img = document.querySelector("img");

console.dir(img.getAttribute('id'));

img.setAttribute('id', 'spidermanId');

console.dir(img.getAttribute('id'));


let img1 = document.querySelector('img');

let imgCls = img1.getAttribute('class');

console.dir(imgCls);

img1.setAttribute('class', 'images');

console.dir(img1.getAttribute('class'));