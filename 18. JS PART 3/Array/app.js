/*
Array (Data Structure)
-----------------------
    Linear collection of things

*/

// let students = ["Payel", "My Payel", "Soitan Payel"];

// console.log(students);

// let nums = [2, 4, 6, 8];
// let numbers = ["one", 2, 3, 4]; //mixed
// let strings = ["string1", "string2", "string3"];

// console.log(nums);
// console.log(numbers);
// console.log(strings);

// let emptyArray = [];
// console.log(emptyArray);


/* Arrays are mutable */

// let fruits = ["mango", "banana", "apple", "litchi"];
// console.log(fruits);

// fruits[3] = "blackberry";
// console.log(fruits);  


/*

Array Methods
-------------
    Push : add to end

    Pop : delete from end & returns it

    Unshift : add to start

    Shift : delete from start & returns it

*/

// let cars = ["audi", "bmw", "maruti"];

// cars.push("xuv");
// console.log(cars);

// console.log(cars.pop());

// cars.unshift("tata");
// console.log(cars);

// console.log(cars.shift());



/*
Practice Qs

Qs. For the given start state of an array, change it to final form using methods.


start : ['january' , 'july', 'march', 'august' ]

final : ['july', 'june', 'march', 'august' ]



*/

// let months = ['january' , 'july', 'march', 'august' ];

// months.shift();
// months.shift();

// months.unshift('june');
// months.unshift('july');

// console.log(months);



/*

Array Methods

indexOf : returns index of something
--------
    > let primary = ["red", "yellow", "blue"];
    > primary.indexOf("yellow");
    <. 1
    > primary. index0f("green");
    <. -1
    > primary.index0f("Yellow");
    <- 1



includes : search for a value
---------    
    > let primary = ["red", "green", "blue"];
    > primary. includes("red");
    < true
    > primary. includes("green");
    < false

*/


// let primaryColor = ["red", "green", "blue"];

// console.log(primaryColor.indexOf("red"));

// console.log(primaryColor.includes("yellow"));


/*
Array Concatenation & Reverse
-----------------------
    > let primary = ["red", "yellow", "blue"];

    > let secondary = ["orange", "green", "violet"];


concat : merge 2 arrays ->
-------
    > primary. concat(secondary);
    < (6) ['red', 'yellow', 'blue', 'orange' , 'green' , 'violet' ]

reverse : reverse an array
--------
    > primary. reverse();
    <(3) ['blue', 'yellow', 'red' ]


*/

// let primaryClr = ["red", "green", "blue"];
// let secondaryClr = ["orange", "pink", "black"];

// let combinationClr = primaryClr.concat(secondaryClr);
// console.log(combinationClr);

// console.log(combinationClr.reverse());


/*

Array Methods
slice : copies a portion of an array

array.slice(start, end);
array.slice(start);


> let colors = ["red", "yellow", "blue", "orange", "pink", "white"]

< (6) ['red', 'yellow', 'blue' , 'orange', 'pink', 'white' ]
> colors.slice(2);
< (4) ['blue', 'orange', 'pink', 'white' ]
> colors.slice(2, 3);
< ['blue' ]
> colors.slice(-2);
< (2) ['pink', 'white' ]

"blue", "orange", "pink", "white"

> colors.slice()

*/


//slice

/*
Array Methods
splice : removes / replaces / add elements in place

splice( start, deleteCount, item0 ... itemN)

> let colors = ["red", "yellow", "blue", "orange", "pink", "white"];
> colors.splice(4);
< (2) ['pink', 'white' ]
> colors
< (4) ['red', 'yellow', 'blue', 'orange' ]
> colors.splice(0, 1);
< ['red' ]
> colors
(3) ['yellow', 'blue', 'orange' ]
> colors.splice(0, 1, "black", "grey");
>['yellow'
> colors
< (4) ['black', 'grey', 'blue', 'orange' ]

*/


//sort

/*
Array Methods

sort : sorts an array

> let days = ["monday", "sunday", "wednesday", "tuesday"];
< undefined
> days.sort();
< (4) ['monday', 'sunday', 'tuesday', 'wednesday' ]

> let squares = [25, 16, 4, 49, 36, 9]
< undefined
> squares.sort();
<. (6) [16, 25, 36, 4, 49, 9]

*/

//practice question

/*

Practice Qs

Qs. For the given start state of an array, change it to final form using splice.

start : ['january', 'july' , 'march', 'august' ]

final : ['july', 'june', 'march', 'august' ]





Qs. Return the index of the "javascript" from the given array, if it was reversed.

['c', 'c++', 'html', 'javascript', 'python' , 'java', 'c#' , 'sql' ]

*/

// let pracArray = ['january', 'july' , 'march', 'august' ];


// pracArray.splice(0,2, "july", "june");
// console.log(pracArray);

// let pracArray2 = ['c', 'c++', 'html', 'javascript', 'python' , 'java', 'c#' , 'sql' ];

// pracArray2.reverse();
// console.log(pracArray2.indexOf("javascript"));

/*
Array References

> [1] === [1]
< false
> [1] == [1]
< false

bcz the value of the array is the address of each array, which is definately different from each other.


> let arr = ['a', 'b'];
< undefined
> let arrCopy = arr;
< undefined
> arrCopy
< (2) ['a', 'b']
> arrCopy.push('c');
<. 3

> arr
< (3) ['a', 'b', 'c']

> arr == arrCopy
< true

*/


//Nested Arrays

/*
Nested Arrays/ Multidimensional Array
array of arrays

let's create a 2d Array,

> let nums = [ [2, 4], [3, 6], [4, 8] ];
< undefined
> nums
< (3) [Array(2), Array(2), Array(2)]; i
>0: (2) [2, 4]
>1: (2) [3, 6]
2: (2) [4, 8]
length: 3
[[Prototype] ]: Array(0)

*/


//Practice

/*
Practice Qs
Qs. Create a nested array to show the following tic-tac-toe game state.

*/


let ticTac = [['X', null, 'O'], [null, 'X', null], ['O', null, 'X']];

console.log(ticTac);
