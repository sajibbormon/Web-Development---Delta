/**
 * Factory Functions
----------------------
A function that creates objects.

function PersonMaker(name, age){
    const person = {
        this.name : name,
        this.age ; age,
        talk() {
            console.log(`My name is ${name}`);
        }
    }
}



 */

function PersonMaker(name, age){
    const person = {
        name : name,
        age : age,
        talk ()  {
            console.log(`My name is ${name}`);
        },
    }

    return person;
}

let p1 = PersonMaker("sajib", 25);

p1.talk();

let p2 = PersonMaker("Payel", 17);

p2.talk();

p1.talk() === p2.talk();

//output is false

/* 
p1.talk() === p2.talk();
output: false
bcz the p1 and p2 takes two different location of the memory and it is inefficient way to create objects.

a better way to create object is New Operator.


*/