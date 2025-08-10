/*
Breakpoints
------------
Breakpoints in JavaScript are markers set in code to pause execution at a specific point. They are 
primarily used for debugging, allowing developers to inspect variables and the program's state at that moment.

To track the call stack/code of JS for debugging.
*/


function one(){
    return 1;
}

function two(){
    return one()  + one();
}

function three() {
    let ans = two() + one();
    console.log(ans);
}

three();
