/*
Destructuring
--------------
Storing values of array into multiple variables.

let names = ["tony", "bruce", "steve", "peter"];
let [winner, runnerup] = names;
console.log(winner, runnerup);
output: "tony" "bruce"

here the new two variables are winner and runnerup and it is storing values from names array.
*/

let names = ["tony", "bruce", "steve", "peter"];
// let winner = names[0];
// let runnerup = names[1];

//same thing could be done using the below line
let [winner, runnerup] = names; //destructuring
console.log(winner, runnerup);

let [win, run, ...others] = names; //others taking rest of the values. (using both destructuring and rest)

/*
Destructuring With Objects
--------------------------

*/

const student = {
    name: "Karan",
    class: 9,
    age: 14,
    subjects: ["hindi", "english", "math", "science", "social studies"],
    username: "karan123",
    password: 1234,
};

const {username: user, password: pass} = student;
console.log(user); //"karan123"
//username is the key that is stored in student object. And user is the new variable.

//same thing can be done using below line but key should be same as defined in the student object

const {username, password} = student;
console.log(password);

//we can also define default value if not present in the object (rather than undefined).

const {username: usr, password: secret, city ="Mumbai"} = student; //if city is not given
//then it is Mumbai.

console.log(city);

