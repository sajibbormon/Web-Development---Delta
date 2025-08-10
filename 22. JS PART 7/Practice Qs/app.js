/*
Write an arrow function that returns the square of a number 'n'.

Write a function that prints "Hello World" 5 times at intervals of 2s each.
*/

//q1:

const sqr = n => {
    return n*n;
};

console.log(sqr(2));

//Q2
const greet = () => {
    let i = 0;
    const id = setInterval((a) => {
        console.log("Hello World");
        i++;
        if(i==5){
            clearInterval(id);
        }
    }, 2000);


};

// console.log(greet());

let id = setInterval(() => {
    console.log("Hello World");
}, 2000);

setTimeout(() => {
    clearInterval(id);
}, 10000); 