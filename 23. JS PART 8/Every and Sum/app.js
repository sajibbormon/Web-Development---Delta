/*
Every (similar like logical AND)
---------------------------------
Returns true if every element of array gives true for some function. Else return false.

arr.every(some function definition or name);

[1, 2, 3, 4].every((el) => (el%2 == 0));
output: false

[2,4].every( (el) => (el%2==0));
output: true


returns only two values, either true or false
*/

console.log([1, 2, 3, 4].every((el) => (el%2==0)));
console.log([2, 4, 6, 8].every((el) => (el%2==0)));

/*
Some (similar like logical OR)
------------------------------
Returns true if some elements of array give true for some function. Else returns false.

arr.some(some function definition or name)

[1, 2, 3, 4].some((el) => (el%2==0))
output: true

[1, 3].some((el) => (el%2==0))
output: false


returns only two values, either true or false

*/
console.log([1, 2, 3, 4].some((el) => (el%2==0)));

console.log([1, 3].some((el) => (el%2==0)));

console.log([2, 2, 5, 7, 4].some((el) => (el%2==0)));
