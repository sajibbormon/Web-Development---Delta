/*
JS in Single Threaded
---------------------
JavaScript is a single-threaded language. This means it has one call stack and executes one task at a time. 
While it appears to handle multiple tasks concurrently, it achieves this through asynchronous programming.

Here's how it works: 

Single Thread:
JavaScript runs on a single thread, processing one operation at a time.

Call Stack:
Instructions are placed on a call stack, where they are executed sequentially.

Event Loop:
To manage asynchronous operations without blocking the main thread, JavaScript uses an event loop, Web APIs, 
and a callback queue.

Asynchronous Operations:
When a function like an API call or timer is encountered, it's handed off to the Web APIs to be handled in 
the background.

Callback Queue:
Once the background operation is complete, the callback is placed in the callback queue.

Event Loop:
The event loop constantly monitors the call stack and the callback queue. If the call stack is empty, 
it moves the first callback from the queue to the call stack for execution. This mechanism allows JavaScript
to perform non-blocking operations, maintaining responsiveness while handling multiple tasks. While JavaScript
is single-threaded, it can achieve parallelism using Web Workers, which run scripts in the background separate
from the main thread.
*/

//

/*
setTimeout(()=>{
    console.log("apna college")
}, 2000);

setTimeout(()=>{
    console.log("hello world")
}, 2000)

console.log("hello...")

as we know JS execute one task at a time, so how the setTimeout() function waiting task and last console.log 
execution happens at the same time. Actually setTimeout function doesn't run by JS when console.log executing.
The browser holds(sent functions to the call stack) the setTimeout function according to it's given time. 
So JS execute one task at a time.
*/

//the way JS execute tasks step by step is called synchronous nature

//but when we use function like setTimeout(), it became asynchronous nature 

setTimeout(()=>{
    console.log("apna college")
}, 2000);

setTimeout(()=>{
    console.log("hello world")
}, 2000)

console.log("hello...")

