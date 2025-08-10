/*
Miscellaneous Topics

Arrow Functions
----------------


const func = (arg1, arg2, .... ) => { function definition}

const sum = (a, b) => {
    console.log(a+b)
}


'func' is the variable and the function is the value.


const valuePrint = num => {
    console.log(num);
}


*/

const valuePrint = num => {
    console.log(num);
};

valuePrint(5);

const cube = n =>{
   return n*n*n;
};

console.log(cube(2));

const pow = (a, b) => {
    return a**b;
};

console.log(pow(2, 4));

const greet = () => {
    console.log("Hello");
};

greet();

