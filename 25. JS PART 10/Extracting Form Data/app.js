/*
Extracting Form Data
*/

let form = document.querySelector("form");

form.addEventListener("submit", function(event){
    event.preventDefault();
    let usrname = document.querySelector('#username');
    let pass = document.querySelector('#password');

    console.log(usrname.value);
    console.log(pass.value);

});

/*
to access every input we can use element[]

for first input: form.elements[0]
for second input: form.elements[1]

or

for first input: this.elements[0]
for second input: this.elements[1]

*/


form.addEventListener("submit", function(event){
    event.preventDefault();
    let usrname = this.elements[0];
    let pass = this.elements[1];

    console.log(usrname.value);
    console.log(pass.value);

});