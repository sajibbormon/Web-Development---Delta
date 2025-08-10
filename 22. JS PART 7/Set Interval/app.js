/*
Set Interval
-------------
setInterval( function, timeout )

setInterval( () => {
    console. log("Apna College");
}, 2000);


clearInterval( id );


difference between setTimeout and setInterval

setTimeout = time -> execute

setInterval = time -> execute the function -> time -> execute the function ...... (continuesly take time and execute)


*/

// setInterval(() => {
//     console.log("Apna College");
// }, 2000);






const id = setInterval(() => {
    console.log("Apna College");
}, 1000);


console.log(id);


setTimeout (() => {
    clearInterval(id);
}, 2000);



// const id = setInterval(() => {
//     console.log("Apna College");
// }, 1000);

// console.log("Interval ID:", id); // Good to label the output

// // Correct way to call setTimeout
// setTimeout(() => {
//     console.log("Stopping interval with ID:", id);
//     clearInterval(id);
//     console.log("Interval should be stopped now.");
// }, 2000); // Execute the function after 2000 milliseconds


/*

this with Arrow functions and normal functions

function
--------
scope -> this -> calling object


Arrow
-----
lexical scope
parent scope - > call 

*/