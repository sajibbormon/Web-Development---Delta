/*
Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any
positive number].
For example: for array [7, 9, 0, -2] and n=3
Print, [7, 9, 0]

Qs2. Write a JavaScript program to get the last n elements of an array. [n can be any
positive number].
For example: for array [7, 9, 0, -2] and n=3
Print, [9, 0, -2]

Qs3. Write a JavaScript program to check whether a string is blank or not.

Qs4. Write a JavaScript program to test whether the character at the given (character)
index is lower case.

Qs5. Write a JavaScript program to strip leading and trailing spaces from a string.

Qs6. Write a JavaScript program to check if an element exists in an array or not.


*/   


//q1

let arrq1 = [7, 9, 0, -2];
let nq1 = 3;

arrq1.splice(nq1, arrq1.length);
console.log(arrq1);

//q2


let arrq2 = [7, 9, 0, -2];
let nq2 = 3;

arrq2.splice(0, arrq2.length - nq2);
console.log(arrq2);

//q3

let strq3 = "";
if(strq3 == ""){
    console.log("Blank");
}else{
    console.log("Not blank");
}

//q4

let str4 = "Apple";
let n4 = 3;

let char = str4[n4];
if(char === char.toUpperCase())
{
    console.log("upper");
}else{
    console.log("lower");
}

//q5

let strq5 = "   hello   ";
