/**
 * Object Oriented Programming
--------------------------------
To structure our code

> prototypes

> New Operator

> constructors

> classes

> keywords(extends, super)


It is a blueprint from where multiple objects can be create.



------------------------------------------------------------------
Object Prototypes
------------------
Prototypes are the mechanism by which JavaScript objects inherit features from one another.

It is like a single template object that all objects inherit methods and properties from without having their own copy.


arr._proto_(reference)
Array.prototype(actual object)
String.prototype

(Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object,
so that prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a
prototype that has null for its own prototype.)




[1, 2, 3] print this in console and expand then we will se [[Prototype]]: Array(0)

In prototype there will be a lots of function.

If we create an array then all it creates a prototype and it's func and properties are common for array



let create an array.

let arr = [1, 2, 3];

arr.sayHello = () =>{
    console.log("Hello!, I am arr");
};

this sayHello() function is created outside the prototype.

But we using prototype then it will be created inside prototype and is accessible for all other array.

to show all prototype

arr.__proto__

or Array.prototype

String.prototype

Now let's crete two array.

let arr1 = [1, 2, 3];

let arr2 = [1, 2, 3];

arr1.say = () =>{
    console.log("Hey!")
}


arr2.say = () =>{
    console.log("Hey!")
}


two arrays are created in two different location of the memory. and say function is not a copy of the first arr1 
object.

arr1.say() === arr2.say();
output: false



 */