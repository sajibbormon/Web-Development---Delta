/*
try & catch
------------
The try statement allows you to define a block of code to be tested for errors while it
is being executed.

The catch statement allows you to define a block of code to be executed, if an error
occurs in the try block.


try {
    console. log(a);
} catch {
    console. log("variable a doesn't exists");
}



*/

// let a = 10;

try{
    console.log(a);
}catch(error){
    console.log(error);
}

console.log(20);