/*
JSON
-----
Accessing Data from JSON

-> JSON.parse(data) Method to parse a string data into a JS object

-> JSON.stringify(json) Method to pars a JS object data into JSON


*/

let jsonRes = 
'{"fact":"A cat can travel at a top speed of approximately 31 mph (49 km) over a short distance.","length":86}';

console.log("JSON data: ",jsonRes);
console.log("JSON data fact: ",jsonRes.fact); //undefined bcz it is in json format

let jsObj = JSON.parse(jsonRes);

console.log("JS object: ",jsObj);
console.log("JS object fact: ",jsObj.fact);

let student = {
    name: "sajib",
    marks: 97
}

let jsonStudent = JSON.stringify(student);

console.log("JSON student: ",jsonStudent);
