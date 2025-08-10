/*
Math Object
------------
Properties

    Math.PI

    Math.E



Methods
    Math.abs( n )

    Math.pow( a, b )

    Math.floor( n )

    Math.ceil( n )

    Math.random( )

*/

let a = Math.E;
console.log(a);

//absolute
console.log(Math.abs(-10));

//power
console.log(Math.pow(2,4));

//floor - round value by reducing it
console.log(Math.floor(-5.4));

//ceil - round value by increasing it
console.log(Math.ceil(9.9));

//random
console.log(Math.random());


//random value from 0 to 10
console.log( Math.floor(Math.random() * 11) );


/*
Qs
q1: Generate a random number between 1 and 100.

q2: Generate a random number between 1 and 5.

*/

console.log( Math.floor(Math.random() * 100) + 1 );
console.log( Math.floor(Math.random() * 100) + 1 );
console.log( Math.floor(Math.random() * 100) + 1 );
console.log( Math.floor(Math.random() * 100) + 1 );
console.log( Math.floor(Math.random() * 100) + 1 );
console.log( Math.floor(Math.random() * 5) + 1 );
console.log( Math.floor(Math.random() * 5) + 1 );
console.log( Math.floor(Math.random() * 5) + 1 );
console.log( Math.floor(Math.random() * 5) + 1 );
console.log( Math.floor(Math.random() * 5) + 1 );

// 21 to 25
console.log( Math.floor(Math.random() * 5) + 21 );


// 20 to 24
console.log( Math.floor(Math.random() * 5) + 20 );