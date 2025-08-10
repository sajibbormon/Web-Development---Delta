
/*
Template Literals

They are used to add embedded expressions in a string.

let a = 5;

let b = 10;

console.log(`Your pay ${a + b) rupees`);

//console.log("Price is", a+b, "rupees");
*/

let pencilPrice = 10;
let erasorPrice = 5;

console.log("The total price is: ", pencilPrice+erasorPrice, " Ruppes");

let output = "The total price is: " + (pencilPrice+erasorPrice) + " Ruppes";
console.log(output);

//using template literals (use back tick ``)
let templateLiteralVar = `The total price is: ${pencilPrice+erasorPrice} Ruppes`;
console.log(templateLiteralVar);