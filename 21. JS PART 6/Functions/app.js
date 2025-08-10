/*
Functions in JS

Function Definition (telling JS)
----------------------------------

    function funcName( ) {
        //do something
    }

    function hello() {
        console. log("hello");
    }


Function Calling (Using the function)
-------------------------------------

    funcName();

    hello();


*/


// function sum(){
//     console.log("sum");
// }

// sum();



/*
Practice Qs
Create a Function to roll a dice & always display the value of the dice (1 to 6).
*/


function dice(){
    let rand = Math.floor(Math.random() * 6 ) + 1;
    console.log(rand);
}
dice();


/*

Functions with Arguments
Values we pass to the function

    function funcName(arg1, arg2 .. ) {
        //do something

    }

*/

// function sum(a, b){
//     console.log(a+b);
// }

// sum(2, 4);


function printInfo(name, age){
    console.log(`${name}'s age is ${age}`);
}

printInfo("Sajib", 26);
printInfo(16);
printInfo("Payel");

//means the agrument that we pass follows the order of arguments.

/*
Practice Qs
Create a Function that gives us the average of 3 numbers.
*/

function avgOfThree(a, b, c){
    console.log((a + b + c)/3);
}

avgOfThree(3, 4, 5);

function printTable(n){
    for(let i = n; i<=n*10; i+=n){
        console.log(i);
    }
}

printTable(10);

/*
Return
return keyword is used to return some value from the function.


input    ------>    Function        ------->      Output
                (does some work)



    function funcName(arg1, arg2 .. ) {
        //do something
        return val;

    }




*/


function sumThree(a, b, c){
    return a + b + c;
}

let val = sumThree(3, 4, 5);
console.log(val); 

function sum(a, b){
    return a + b;
}


console.log(sum(sum(1,2), 3));


/*
Practice Qs
Create a Function that returns the sum of numbers from 1 to n.
*/

function sumOfOneToN(n){
    let sum = 0;
    for(let i = 1; i<=n; i++){
        sum += i;
    }
    return sum;
}

console.log(sumOfOneToN(10));

/*
Practice Qs
Create a Function that returns the concatenation of all strings in an array.
*/

function concatenationArray(a){
    let str = "";
    for(let i = 0; i<a.length; i++){
        str += " "+a[i];
    }
    return str.trim();
}

console.log(concatenationArray(['This', 'is', 'a', 'dog']));