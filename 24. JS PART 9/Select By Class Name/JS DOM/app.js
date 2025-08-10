/*
Selecting Elements
-------------------
getElementByClassName

Returns the Elements as an HTML Collection or empty collection (if not found).

Collection is similar like array. Where can acess value using index, iterable and get lenth. But push pop is not possible.


*/

let imgCollection = document.getElementsByClassName("oldImg");

console.dir(imgCollection)

//to get object

let obj = document.getElementsByClassName("oldImg")[0];
console.dir(obj);

for(let i = 0; i<imgCollection.length; i++){
    console.dir(imgCollection[i]); 
}