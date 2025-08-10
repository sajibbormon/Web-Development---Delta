/*
Array Methods

. forEach

· map

· filter

· some

· every

· reduce

*/

let arr = [1, 2, 3];


/* forEach 
----------
arr.forEach(some function definition or name):

it will perform that task which is given in the function for every array element

*/

function print(el){
    console.log(el);
}

arr.forEach(print);


//or

arr.forEach(function (el) {
    console.log(el);
})


// array of object

let arrOfObj = [{
    name: "sajib",
    marks: 98
}, 
{
    name: "payel",
    marks: 97
}, 
{
    name: "unknown",
    marks: 90
}];

console.log(arrOfObj);

arrOfObj.forEach((student) => {
    console.log(student);
});
