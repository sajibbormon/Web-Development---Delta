/*
Qs1. Write an arrow function named arrayAverage that accepts an array of numbers
and returns the average of those numbers.

Qs2. Write an arrow function named isEven() that takes a single number as argument
and returns if it is even or not.
*/

//Q1:

const arrayAverage = (arr) =>{
    let sum = 0
    for(let i = 0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
};

console.log(arrayAverage([1, 2, 3]));

const isEven = (n) => {
    if(n % 2 == 0) 
        return true;
    else
        return false;
};

console.log(isEven(4));

const object = {
    message:'Hello, World!',
    logMessage(){
        console.log(this.message);
    }
};

setTimeout(object.logMessage(),2000);


// var length = 4;
let length = 4;
function callback(){
    console.log(this.length);
}


const oobject = {
    length:5,
    method (callback) {
        callback();
    },
};

oobject.method(callback);

/*
The reason it's printing 0 is because when callback() is executed directly, this refers to the global object (window in browsers), and window.length in a browser typically refers to the number of frames (iframes) in the window, which is often 0 if no iframes are present.

Let's break it down:

let length = 4;

This declares a variable length in the global scope (or module scope if you're using modules).
Importantly, variables declared with let (and const) at the top level of a script do not become properties of the global window object in browsers. If you had used var length = 4;, then window.length would have been 4 (assuming no other window.length was set by frames).
function callback(){ console.log(this.length); }

This defines a regular function. The value of this inside callback depends on how callback is called.
const oobject = { length: 5, method(callback) { callback(); }, };

oobject has its own length property set to 5.
The method function takes a function (which you pass as callback) as an argument.
Crucially, inside method, callback() is invoked as a standalone function call. It's not called as oobject.callback() or this.callback().
oobject.method(callback);

This calls method on oobject.
Inside method, callback() is executed.
Since callback() is called without any specific context (like oobject.callback() or callback.call(oobject)), this inside callback defaults to the global object (window in a browser environment).
Why this.length becomes window.length which is 0:

Inside callback, this is window.
So, this.length becomes window.length.
In a browser, window.length is a property that returns the number of frames (e.g., <iframe> elements) in the current window. If you have no frames on your page, window.length is 0.
Therefore, console.log(this.length) prints 0.
It does NOT print oobject.length (which is 5) because:
The callback function is passed to method, but when callback() is called inside method, it's a direct invocation. The this context is not implicitly set to oobject.

It does NOT print the global let length = 4; because:
As mentioned, let declarations at the top level don't become properties of the window object. So, window.length isn't referring to your global length variable of 4. If you had used var length = 4; instead of let length = 4;, and there were no iframes, then window.length would be 4, and you would have seen 4 printed. However, it's generally not good practice to rely on var attaching to the global object like this, and window.length for frames can still override it.

*/