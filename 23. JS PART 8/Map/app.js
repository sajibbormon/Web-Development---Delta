/*
let newArr = arr.map(some function definition or name)

the main difference between map and forEach function is map function create a new array out
of the old array but forEach doesn't create new array.

let num = [1, 2, 3, 4];

let double = num.map (function (el){
    return el*2;
});

*/

let num = [1, 2, 3, 4];

let double = num.map (function (el){
    return el*2;
});

// console.log(double)

let students = [{
    name: "Sajib",
    marks: 98,
}, 
{
    name: "Payel",
    marks: 95,
}];

let gpa = students.map((el) => {
    return el.marks / 10;
});

console.log(gpa);