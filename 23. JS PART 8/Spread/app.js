/*
Spread
-------
Expands an iterable into multiple values (individual/distinct value)

function func (...arr){
    //do something
}

example:

console.log(..."apnacollege")
output: a p n a c o l l e g e

 

*/


console.log(Math.min(1, 2, 3));

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 0, 1, 2, 3, 4, 5, 6, 9, 10];

//manual way
//console.log(Math.min(arr[0], arr[1], arr[2], .... , arr[n]));

//using spread
//console.log(Math.min(...arr));

console.log(Math.min(...arr));

/*
Spread with Array Literals
--------------------------
let arr = [1, 2, 3, 4, 5];

let newArr = [...arr];

it creates a new array (copy of the old array).

In string we can divide a string into individual characters.

let chars = [..."hello"];
console.log(chars);
output: ['h', 'e', 'l', 'l', 'o']



*/

let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8, 10];

let nums = [...odd, ...even];
console.log(nums);

/*
Spread with objects literals
----------------------------

let data = {
    email: "ironman@gmail.com",
    password: "abcd",
};

let dataCopy = {...data, id:123};

*/


let data = {
    email: "ironman@gmail.com",
    password: "abcd",
};

let dataCopy = {...data, id:123};

console.log(dataCopy);

//spreading an array into object

let arr1 = [1, 2, 3, 4, 5]; //it has only value
let obj1 = {...arr1}; //obj -> key:val;
//but array has only value, when spreading an array into object then keys are the indexes of the array.

console.log(obj1);

//similar for string 

let obj2 = {..."hello"};
console.log(obj2);