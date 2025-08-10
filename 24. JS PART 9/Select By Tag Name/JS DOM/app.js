/*
Selecting Elements
-------------------
getElementByTagName

Returns the Elements as an HTML Collections or empty collection (if not found).
*/

let paragraphsTag = document.getElementsByTagName("p");
console.dir(paragraphsTag);

// paragraphsTag[1].innerText = "abc";

// console.dir(paragraphsTag[0]);
paragraphsTag[0].style.background = "red";
