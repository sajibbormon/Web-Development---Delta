/*
How to manipulating objects, attributes
---------------------------------------

Changing property of objects. Basically manipulating the visible content on screen.

Using properties & methods (Text based)
----------------------------------------

innerText
Shows the visible text contained in a node.

textContent
Shows all the full text (shows how we have written the text in inner html and shows all hidden text/content which is given display as none)

innerHTML
Shows the full markup (shows the written codes with tags.)


*/

let para1 = document.querySelector('p');

console.dir(para1);
console.dir(para1.innerText);
console.dir(para1.innerHTML);
console.dir(para1.textContent);

//manipulation

// para1.innerText = "I am Peter Parker";
// para1.innerText = "I am <b>Peter Parker</b>"; // it is not possible to bold the Peter Parker using innerText

para1.innerHTML = "I am <b>Peter Parker</b>";

let mainHeading = document.querySelector("h1");

console.dir(mainHeading);

// mainHeading.innerHTML = "<u>Spider Man</u>";
//same things can be done using below code

mainHeading.innerHTML = `<u>${mainHeading.innerText}</u>`;

