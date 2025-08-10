/*
Add/ Update Value
. Change the city to "Mumbai"

· Add a new property, gender: "Female"

· Change the marks to "A"


const student = {
    name: "shradha",
    age: 23,
    marks: 94.4,
    city: "Delhi"
};

student.city = "Mumbai";

*/

//Update

const student = {
    name: "shradha",
    age: 23,
    marks: 94.4,
    city: "Delhi"
};

student.city = "Mumbai";

console.log(student);

//add
student.gender = "female";

console.log(student);

//delete
delete student.gender;

console.log(student);



