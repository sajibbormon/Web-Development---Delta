/*
What is a Variable?
    A variable is simply the name of a storage location.

*/

a = 10;


console.log("hello, a is 'a' variable and value is "+a);


/*

Data Types in JS
----------------
    Primitive Types

    · Number

    · Boolean

    · String

    · Undefined

    · Null

    . Bigint

    . Symbol

*/


console.log(typeof a);

name = "Tony Stark";

console.log(typeof name);



/*

Numbers in JS

· Positive (14) & Negative (-4)

. Integers (45, -50)

. Floating numbers - with decimal (4.6, -8.9)

*/

price = 99.99;

console.log(typeof price);

displacement = -25;

console.log(typeof displacement);

a = 20;
b = 80;

console.log(a + b);


/*
Operations in JS
    a = 20
    b = 10

    //addition
    sum = a + b

    //subtraction
    diff = a - b

    //multiplication
    prod = a * b

    //division
    div = a / b

    //modulo
    rem = a % b

    · Modulo (remainder operator)

    12 % 5 = 2

    · Exponentiation (power operator)

    2 ** 3 = 8



    a + b = n    ; a = operand, b = operand, + = operator, n = result

*/


a = 10;
b = 20;

sum = a + b;
console.log("Sum: "+sum);

diff = a - b;
console.log("Diff: "+diff);

mul = a*b;
console.log("Mul: "+mul);

modulo = a % b;
console.log("Modulo: "+modulo);

div = a / b;
console.log("Div: "+div);

exp = a**2;
console.log("Exp: "+exp);

/*

NaN in JS

The NaN global property is a value representing Not-A-Number. (Not a valid number)

    0/0

    NaN - 1

    NaN * 1

    NaN + NaN

*/

console.log("0/0 "+0/0);

console.log("typeof NaN "+typeof NaN);

/*
Operator Precendence
--------------------
This is the general order of solving an expression.

        ()

        **

        *, /, %

        +, -

*/

ans = (2+1)*3;
console.log("(2+1)*3 = "+ans);

ans = 3/1 + 2**2;
console.log("3/1 + 2**2 = "+ (3/1 + 2**2));

ans = 4 + 1 * 6 / 2
console.log("4 + 1 * 6 / 2 = "+ ans );


/*

let keyword
Syntax of declaring variables

    let age = 23 ;

    age = age + 1 ;

    let cgpa ;

    cgpa = 8.9

    let num1 = 1;

    let num2 = 2 ;

    let sum = num1 + num2 ;


Old Syntax of writing variables

    var age = 23 ;

    var cgpa = 8.9 ;

    var num1 = 1;

    var num2 = 2;

    var sum = num1 + num2 ;


*/

let c = 5;

let d;

console.log(a);
console.log(d);

let age = 23;
age = age + 1;
console.log("new age " +age);


/*

const keyword
values of constants can't be changed with re-assignment & they can't be re-declared.

    const year = 2025;

    year = 2026; //Error

    year = year + 1; //error

    const pi = 3.14;

    const g = 9.8;


*/


/*

Practice Qs
Qs1. What is the value of age after this code runs?

    let age = 23 ;
    age + 2; //after 2 years

Qs. What is the value of avg after this code runs?

    let hindi = 80;
    let eng = 90;
    let math = 100;
    let avg = (hindi + eng + math) / 3;

*/

let Age = 23;
Age+2;
console.log(Age+2);
console.log(Age);

let hindi = 80;
let eng = 90;
let math = 100;
let avg = (hindi + eng + math) / 3;

console.log("avg: "+avg);


/*

Assignment Operators

    age = age + 1

    age += 1

    age = age - 1

    age -= 1

    age = age * 1

    age *= 1

*/




/*

Unary Operators
---------------

    age++;
    i++;
    i--;

Pre-increment (Change, then use)

    let age = 10 ;

    let newAge = ++age ;

Post-increment (Use, then change)

    let age = 10 ;

    let newAge = age++ ;

*/


/*

Practice Qs
Qs. What is the value of each variable in each line of code?

    let num = 5;
    let newNum = num++;
    newNum = ++num;

*/

let num = 5;
let newNum = num++;
console.log("newNum: "+newNum);

newNum = ++num;
console.log("newNum: "+newNum);


/*

Identifier Rules
All JavaScript variables must be identified with unique names (identifiers).

    · Names can contain letters, digits, underscores, and dollar signs. (no space)

    · Names must begin with a letter.

    . Names can also begin with $ and _.

    . Names are case sensitive (y and Y are different variables).

    · Reserved words (like JavaScript keywords) CANNOT be used as names.


    valid
    ------
    age;
    _age;
    $age;
    age_num;
    Let;
    Var;
    Const;

    invalid
    -------
    1age
    age-num
    let
    var
    const



*/


/*

Boolean in JS
Boolean represents a truth value -> true or false I yes or no

    let age = 23 ;
    let isAdult = true ;

    let age = 13 ;
    let isAdult = false ;

*/

 

/*

What is TypeScript?
    Static Typed, where JS is dynamic typed

    Designed by Microsoft

*/


/*

String in JS
Strings are text or sequence of characters

let name = "Tony Stark" ;

let role = 'ironman' ;

let char = 'a' ;

let num = '23' ;

let empty = " " ;

*/


let starName = "Tony Stark";
let role = "ironman";

console.log(starName, role);


console.log(starName[0]);


/*

Concatenation
-------------
adding strings together

"tony" +" " + "stark" = "tony stark"

"tony" + 1 = "tony1" //if we concatenate string with number then number will also converted to string

*/

heroCharacter = starName + " " + role

console.log(heroCharacter);

/*

null & undefined in JS
-----------------------

undefined

A variable that has not been assigned a value is of
type undefined.

> let a;
<. undefined

> a
<. undefined


*/

let k;
console.log(typeof(k));

/*

null

The null value represents the intentional absence of
any object value.

To be explicitly assign.

> let a = null;
<. undefined

>a

<. null
*/

let n = null;
console.log(n);
console.log(typeof(n));


/*

Practice Qs
-------------
Qs. Declare your name as a string and print its length in JS.

Qs. Declare your first name as a string and print its first character.

Qs. Declare your first name as a string and print its last character.

Qs. What is output of following code :

"apnacollege"+123] = "apnacollege123"

Qs. What are lengths of an empty string & a string with a single space? = 0 and 1.

*/

let fullName = "Sajib Bormon";

console.log(fullName.length);

let fname = "Sajib";
console.log(fname[0]);
console.log(fname[fname.length-1]);

let fcode = "apnacollege" + 123;
console.log(fcode);

console.log("".length);
console.log(" ".length);
