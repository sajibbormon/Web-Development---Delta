/*
Reduce
--------
Reduces the array to a single value

arr.reduce(reduce function with 2 variables for (accumulator, element))

in accumulator the final output will be stored and returned.

[1, 2, 3, 4].reduce( (res, el) => (res + el) );
output: 10
1 + 2 + 3 + 4 = 10.

step 1: acc, el -> return final value (it will be stored on acc)
step 2: acc, el -> return final value 
.....
.....
step n: ...

*/
console.log([1, 2, 3, 4].reduce( (res, el) => (res + el) ));








