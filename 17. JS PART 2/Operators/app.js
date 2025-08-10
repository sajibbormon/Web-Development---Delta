/*
Operators in JS

· Arithmetic (+, -, *, /, %, ** )

· Unary (++, -- )

· Assignment (=, +=, -= , *= , l=, %= etc.)

· Comparison

· Logical

*/



//Arithmetic operators
// -----------------------

console.log("All Arithmetics operators: ");
let num1 = 20;
let num2 = 5;

let sum = num1 + num2;
let sub = num1 - num2;
let div = num1 / num2;
let mul = num1 * num2;
let mod = num1 % num2;
let pow = num1 ** num2;

console.log(num1 , " + ", num2, " = ", sum);
console.log(num1 , " - ", num2, " = ", sub);
console.log(num1 , " / ", num2, " = ", div);
console.log(num1 , " * ", num2, " = ", mul);
console.log(num1 , " % ", num2, " = ", mod);
console.log(num1 , " ** ", num2, " = ", pow);

//Unary operators
console.log("All unary operators: ");
let num = 2;
console.log("Post increment ", num, "++ = ", num++ );
console.log("Post decrement ", num, "-- = ", num-- );
console.log("Pree decrement ++", num, " = ", ++num );
console.log("Pree decrement --", num, " = ", --num );

//Assignment operators
console.log("Assignment Operators: ");
console.log(num, "+=2 :", num+=2);
console.log(num, "-=2 :", num-=2);
console.log(num, "/=2 :", num/=2);
console.log(num, "*=2 :", num*=2);
console.log(num, "%=2 :", num%=2);

/*
Comparison operators:
---------------------
Compare two values.

==  equal
!=  not equal
>=  greater or equal
<=  less or equal
>   greater
<   less

*/



/*
. compares both type & value

> "123" === 123
<· false

> 1 === '1'
<· false

> 0 === '1'
<· false

> 0 === 0
<· true

*/

console.log("Comparison operators: ")
let n1 = 2;
let n2 = 2;
let n3 = 3;
console.log(n1 ," >= ", n3, " = ",n1 >= n3);
console.log(n1 ," >= ", n2, " = ",n1 >= n2);
console.log(n1 ," <= ", n3, " = ",n1 <= n3);
console.log(n1 ," == ", n3, " = ",n1 == n3);
console.log(n1 ," == ", n2, " = ",n1 == n2);
console.log(n1 ," != ", n3, " = ",n1 != n3);
console.log(n1 ," != ", n2, " = ",n1 != n2);

let n4 = '2';
console.log(n1 ," == ", n4, " = ",n1 == n4);
console.log(n1 ," === ", n4, " = ",n1 === n4);

/*
Comparison for non-numbers
--------------------------

> 'a' > 'A'
<· true

> 'a' > 'b'
<· false

> 'b' < 'c'
<· true

> 'B' < 'C'
<· true

> '*' < '&'
<· false

ASCII VALUE: 
'a' -> 61, 'b' -> 62 ...

'A' -> 41 'B' -> 42 ...
*/


