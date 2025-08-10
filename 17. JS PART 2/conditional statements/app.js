/*
Conditional Statements

· if-else

· nested if-else

· switch

*/

let age = 19;
console.log("Your age is", age);
if(age >= 18){
    console.log("You can vote!");
}else{
    console.log("You can't vote!");
}

/*

Practice Qs
Qs. Create a traffic light system that shows what to do based on color.

*/

let trafficLight = "red";

if(trafficLight == "red"){
    console.log("Stop");
}
if(trafficLight == "green"){
    console.log("Go");
}
if(trafficLight == "yellow"){
    console.log("Cautions")
}

/*
Practice Qs
Qs. Create a system to calculate popcorn prices based on the size customer asked for :

if size is 'XL', price is Rs. 250

if size is 'L', price is Rs. 200

if size is 'M', price is Rs. 100

if size is 'S', price is Rs. 50

*/

let size = 'L';
if(size == 'XL'){
    console.log(250);
}else if(size == 'L'){
    console.log(200);
}else if(size == 'M'){
    console.log(100);
}else if(size == 'S'){
    console.log(50);
}


/*
Nested if-else
Nesting is writing if-else inside if-else statements. It can have many levels.

if marks >= 33

    if marks >= 80

        print "0"

    else

        print "A"

else

    print "better luck next time!"

*/

let marks = 84;

if(marks >= 33){
    if(marks >= 80){
        console.log("A+");
    }else if(marks >= 70){
        console.log("A");
    }else if(marks >=60){
        console.log("A-")
    }else{
        console.log("Bad");
    }
}else{
    console.log("Better luck next time!");
}

/*

Logical Operators
-----------------
Logical Operators to combine expressions


&&: Logical AND
---------------
(exp1) &&(exp2)

> true && true
< true

> true && false
< false

> false && true
< false

> false && false
< false



||: Logical OR
--------------
> true || true
< true

> true || false
< true

> false || true
< true

> false || false
< false
*/

/*

Practice Qs
Qs. A "good string" is a string that starts with the letter 'a' & has a length > 3. Write a

Program to find if a string is good or not.

*/

let str = "apple";
if(str[0] == 'a' && str.length > 3){
    console.log("good string");
}else{
    console.log("not a good string");
}


/*
Qs. Predict the output of following code :

let num = 12;

if((num%3 === 0) && ((num+1 == 15) || (num-1 == 11) ) ) {
    console. log ("safe");
} else {
    console. log("unsafe");
}

OUTPUT: safe
*/

/*

truthy & falsy
Everything in JS is true or false (in boolean context).

This doesn't mean their value itself is false or true, but they are treated as false or true if taken in boolean contex

Falsy values

false, 0, -0, On (BigInt value), "" (empty string), null, undefined, NaN

Truthy values

Everything else

*/

let a;

if(a){
    console.log("a is true");
}else{
    console.log("a is false as undefined");
}

/*

Switch Statement
Used when we have some fixed values that we need to compare to.

let color = "red";

switch(color) {
case "red" :
console. log("stop");
break;
case "yellow" :
console. log("slow down");
break;
case "green" :
console. log("GO");
break;
default :
console. log("Broken Light");

}

*/

/*

Practice Qs
Qs. Use switch statement to print the day of the week using a number variable 'day' with

values 1 to 7.

1 = Monday  
2 = Tuesday & so on

*/

let day = 4;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Insert correct number of the day.");
}
