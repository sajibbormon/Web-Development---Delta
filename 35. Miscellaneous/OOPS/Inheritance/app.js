/**
 * Inheritance
-------------------
Inheritance is a mechanism that allows us to create new classes on the basis of already existing classes.

We use 'extends' keyword to inherit properties.
Using 'super' keyword means parent class constructor.

*/

class Person{
    constructor(name, age){
        console.log("Person class constructor");
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`My name is ${this.name}`);
    }
}

class Student extends Person{
    constructor(name, age, marks){
        console.log("Student class constructor");
        super(name, age); //parent class constructor is being called.
        this.marks = marks;
    }
    markPrint(){
        console.log(`My mark is ${this.marks}`);
    }
}

class Teacher extends Person{
    constructor(name, age, subject){
        console.log("Person class constructor");
        super(name, age);
        this.subject = subject;
    }
    printSubject(){
        console.log(`My subject is ${this.subject}`);
    }
}

let s1 = new Student("payel", 17, 99);
let t1 = new Teacher("sajib", 25, "all");

console.log(s1);
console.log(t1);

