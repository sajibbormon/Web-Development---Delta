/*
JS Objects Literals
Used to store keyed collections & complex entities.

property => (key, value) pair

Objects are a collection of properties
*/


const car = {type: "Flat", model: "500", color: "white"};

console.log(car.type); 

console.log(car.model);

let student = {
    name : "Sajib",
    age : 26,
    marks : 98
};

console.log(student);

const delhi = {
    latitude : "28.7041 N",
    longitude: "77.1025 E"
}

//const means we can not change the address(reference) of dehli object. but we can change it's value, key etc.

const pant = {
    price: 100.99,
    discount: 20,
    colors : ["black", "blue", "white"]
}
console.log(pant);