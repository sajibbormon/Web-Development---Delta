/*
Manipulating Attributes
-----------------------
style property (only inline style)

obj.style


*/

let img = document.querySelector("img");

console.dir(img);

img.style.padding = "20px" ;

let heading = document.querySelector('h1');

heading.style.color = "red";
heading.style.backgroundColor = "yellow";

let links = document.querySelectorAll(".box a");

for(let i = 0; i<links.length; i++){
    links[i].style.color = "yellow";
}

//another way; using for of
for(link of links){
    link.style.color = "green";
}


// here we can only see the style which is given using  style in css.
