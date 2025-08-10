/*
Filter
--------

let newArr = arr.filter(some function definition or name);

let nums = [2, 4, 1, 5, 6, 2, 7, 8, 9];

let even = nums.filter( (num) => (num % 2 == 0));

so, basically filter function generally filters value from array based on the given condition.

*/

let nums = [2, 4, 1, 5, 6, 2, 7, 8, 9];
let even = nums.filter( (num) =>{ 
    return (num % 2 == 0);
} );

console.log(even);