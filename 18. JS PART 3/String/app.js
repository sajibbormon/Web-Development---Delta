/*
String Methods
    Methods - actions that can be performed on objects.

Format
    stringName.method( )

*/


/*

let msg = " Hello ";

str.trim()

Trims whitespaces from both ends of string & returns a new one.

Hello

> let msg = "
<. undefined
> msg.trim();
<. 'Hello'

> msg

Hello

output : "Hello", but value of msg remains same.

*/

// let msg = " Hello ";
// console.log("Before trim function: ");
// console.log(msg);
// console.log("After trim function: ");
// let trimMsg = msg.trim();

// console.log(trimMsg);


// let pass = prompt("Enter your pass: ");
// let newPass = pass.trim();

// console.log(pass); // immutable
// console.log(newPass);



/*
String are Immutable in JS

No changes can be made to strings.
Whenever we do try to make a change, a new string is created and old one remains same.

let str = "random string";

    str.toUpperCase()   output: "RANDOM STRING"

    str.toLowerCase( ) output: "random string"


*/


// let ranstr = "Random string";

// console.log(ranstr.toUpperCase());
// console.log(ranstr.toLowerCase());


/*

String Methods with Arguments

Argument is a some value that we pass to the method.

Format

stringName.method( arg )


indexOf
-------

    Returns the first index of occurrence of some value in string. Or gives -1 if not found.

    let str = "lloveCoding";   

    str.indexOf("love");    output: 1 (position of first index of the word)

    str.indexOf("J");    output: -1 (not found)

    str.index0f("o");    output: 2 (only 1 index)


*/



// let substr = "ilovecoding";

// console.log(substr.indexOf("love"));
// console.log(substr.indexOf("j"));
// console.log(substr.indexOf("o"));


/*
Method Chaining
---------------

    Using one method after another. Order of execution will be left to right.

    str.toUpperCase().trim()
*/

// let chainstr = "    hello  ";

// console.log(chainstr.toUpperCase().trim());



/*

slice

Returns a part of the original string as a new string.

let str = "lloveCoding";

str.slice(5);           output: "Coding"

str.slice(1, 4);        output: "love"

str.slice(-num) = str.slice(length-num)

*/

// let slicestr = "ilovepayel";

// console.log(slicestr.slice(5));
// console.log(slicestr.slice(0, slicestr.length));
// console.log(slicestr.slice(-slicestr.length));


/*

replace
---------
    Searches a value in the string & returns a new string with the value replaced.

        let str = "lloveCoding";

        str.replace("love", "do"); output: "IdoCoding"

        str.replace("o", "x"); output: "IlxveCoding"

*/

// let replaceStr = "ilovepayel";

// console.log(replaceStr.replace("love", "do"));
// console.log(replaceStr.replace("o", "x"));


/*

repeat
--------
    Returns a string with the number of copies of a string

        let str = "Mango";

        str.repeat(3); output: "MangoMangoMango"

*/

// let repeatStr = " I love Payel ";

// console.log(repeatStr.repeat(100));

/*

Practice Qs
Qs. For the Give String :

let msg = "help!";

Trim it & convert it to uppercase.

Qs. For the String -> let name = "ApnaCollege", predict the output for following :

name.slice(4, 9); output: Colle

name.indexOf("na"); output: 2

name.replace("Apna","Our"); output: OurCollege

Qs. Separate the "College" part in above string & replace 'l' with 't' in it.

*/

let pracmsg = "help!";
console.log(pracmsg.trim().toUpperCase());

let pracname = "ApnaCollege";

console.log(pracname.slice(4, 9));
console.log(pracname.indexOf("na"));
console.log(pracname.replace("Apna", "Our"));

console.log(pracname.slice(4, pracname.length).replace('l', 't').replace('l', 't'));
