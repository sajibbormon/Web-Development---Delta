/*
Call Stack
----------
The call stack in JavaScript is a mechanism that keeps track of function calls in a program. 
It operates on the principle of Last-In, First-Out (LIFO), meaning the last function added to
 the stack is the first one to be executed and removed. 
*/


function hello() {
    console.log("Hello from hello function");
}

function demo(){
    console.log("Inside demo");
    hello();
}

console.log("before calling demo");

demo();

console.log("bye bye...")