/*
Scope
Scope determines the accessibility of variables, objects, and functions from different parts
of the code.

· Function

· Block

· Lexical


Function Scope
Variables defined inside a function are not accessible (visible) from outside the function.

example
--------
    function calSum(a, b){
        let sum = a + b;
    }

    console.log(sum);

    >>>> it will give a error: Uncaught ReferenceError: sum is not defined at app.js:






Global and Function Scope

    let sum = 54; //Global scope

    function calSum(a, b){
        let sum = a + b; //Function Scope
        console.log(sum); //it will print (a + b) value not 54;
    }

    calSum(1, 2);
    console.log(sum); //it will give 54



*/


let sum = 54; //Global scope

function calSum(a, b){
    let sum = a + b; //Function Scope
    console.log(sum); //it will print (a + b) value not 54;
}

calSum(1, 2);
console.log(sum); //it will give 54




/*


Block Scope

Variable declared inside a {} block cannot be accessed from outside the block. (only applied with let and const keyword)

    {
        let a = 10;
    }

    console.log(a);

    >>>> it will give a error: Uncaught ReferenceError: sum is not defined at app.js:

*/


// {
//     let a = 10;
// }

// console.log(a); // it will give error

//


/*

Lexical Scope
    a variable defined outside a function can be accessible inside another function defined
    after the variable declaration.

    The opposite is NOT true.

*/

function outerFunc(){
    let x = 5;
    let y = 6;
    function innerFunc(){
        console.log(x);
    }

    innerFunc();
}

outerFunc();


/*

Practice Qs
What will be the output?

let greet = "hello";

function changeGreet() {
    let greet = "namaste";
    console.log(greet);
    function innerGreet() {
        console.log(greet);
    }
}

console.log(greet);
changeGreet();

*/ 


let greet = "hello";

function changeGreet() {
    let greet = "namaste";
    console.log(greet);
    function innerGreet() {
        console.log(greet);
    }
}

console.log(greet);
changeGreet();