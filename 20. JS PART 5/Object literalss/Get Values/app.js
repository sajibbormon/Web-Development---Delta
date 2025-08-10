/*

Get Values

let student = {

name : "shradha",
marks : 94.4

};

student["name"]

student.name

*/

let student = {

    name : "shradha",
    marks : 94.4
    
};

//way 1
console.log(student["name"]);
    
//way 2
console.log(student.name);
    

/*
Get Values

JS automatically converts objects keys to strings.

Even if we made the number as a key, the number will be converted to string.
*/

const obj = {
    1: "a",
    2: "b",
    null: "d",
    true: "c",
    undefined: "e",
    abc: "abc"
};

//here the key 1, 2, null, true and undefined are converted to string. Only keywords are converted to strings.


console.log(obj[1]);
console.log(obj[2]);
console.log(obj[null]);
console.log(obj[undefined]);
console.log(obj["abc"]);

