/*
Callback Hell
-------------
Asynchronous nature creates problem.


From Gemini:
Callback hell, also known as the "pyramid of doom," refers to a situation in JavaScript where multiple nested callbacks 
make the code difficult to read and maintain. This often occurs when dealing with asynchronous operations that depend 
on each other, leading to deeply indented code. 



Cause:
JavaScript uses callbacks to handle asynchronous operations (e.g., API requests, file I/O).
When one asynchronous operation depends on the result of another, callbacks get nested.
This nesting can quickly become complex, leading to the "pyramid of doom" structure.


Problems:
Readability: Deeply nested code is hard to follow and understand.
Maintainability: Modifying or debugging such code becomes challenging due to its complexity.
Error Handling: Handling errors in nested callbacks can be cumbersome and error-prone.


Solutions:

Promises:
Promises provide a cleaner way to handle asynchronous operations by using .then() for chaining and .catch() for error handling.

Async/Await:
Async/await, built on top of promises, provides a more synchronous-looking syntax for asynchronous code, making it easier to read and write.

Modularization:
Breaking down complex logic into smaller, reusable functions can also help reduce nesting.

Named Functions:
Using named functions instead of anonymous functions for callbacks can improve code readability and debugging.
In summary, callback hell is a common issue in JavaScript when dealing with asynchronous code. However, modern JavaScript features like Promises and async/await provide effective ways to avoid it, leading to cleaner and more maintainable code.

*/

let h1 = document.querySelector("h1");

// function changeColor(color, delay){
//     setTimeout(()=>{
//         h1.style.color = color;
//     }, delay);
// }


// changeColor("pink", 1000);
// changeColor("green", 2000);
// changeColor("blue", 3000);



//to show the dependency we use callback

function changeColor(color, delay, nextColorChange){
    setTimeout(() => {
        h1.style.color = color;
        if(nextColorChange) nextColorChange();
    }, delay)
}

changeColor("pink", 1000, ()=> {
    changeColor("green", 1000, ()=>{
        changeColor("blue", 1000, ()=>{
            changeColor("DeepPink", 1000);
        });
    });
} );

//callbacks nesting which is called callback hell.

/*
To safe from callback hell we use two concepts:

1. Promises
2. Async Functions

*/