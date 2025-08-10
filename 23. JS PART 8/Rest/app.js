/*
Rest
-------
Allows a function to take an indefinite number of arguments and bundle them in an array.
(Opposite of spread. Takes multiple values and combined them together and store in an array)

function sum(...args) {
 return args.reduce((add, el) => add + el );
}

*/

function sum(...args){
    //arguments(args basically an array) -> collecting multiple parameters and combining them.
    for(let i = 0; i < args.length; i++){
        console.log("You gave us: ", args[i]);
    }
}

// sum(1);
// sum(1, 2, 3);
sum(1, 2, 3, 4, 5);

//there is already an inbuilt array.

function min(a, b, c, d){
    console.log(arguments); //arguments is a collectoin which is built in and it is collection of key value
    // it is an object/collection
}

min(1, 2, 3);

//another example

function Sum(){
    return arguments.reduce( (sum, el) => sum + el );
}

// console.log(Sum(1, 2, 3));


//error bcz it is not an array. but we can use agruments[0], arguments[1]...

//where we need to access the agruments as an array, we can use rest. bcz rest collect 
//and combined into an array.

function SUM( ...args ){
    return args.reduce( (sum, el) => sum + el);
}

console.log(SUM(1, 2, 3));
console.log(SUM(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

function Min(msg, ...args){
    console.log(msg);
    return args.reduce( (min, el) => {
        if(min > el){
            return el;
        }else{
            return min;
        }
    });
}

let minimum = Min("hello", 1, 2, 3, 4);
console.log(minimum);

minimum = Min( 0, 1, 2, 3, 4);
console.log(minimum);
// zero is printing as msg.
// result should be 0 in this case, but having 1 bcz 0 is taken as message argument.
// so if we pass anything extra in such a function, we should pass it first then pass 
// the collection/ rest arguments.
