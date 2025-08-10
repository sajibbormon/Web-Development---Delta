/**
 * Classes
------------
Classes are a template for creating objects.

The constructor method is a special method of a class for creating and initializing an object instance of that class.


class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi, my name is ${this.name}`);
    }
}

let p1 = new Person("sajib", 25);
let p2 = new Person("payel", 17);




*/

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`Hi, my name is ${this.name}`);
    }
}

let p1 = new Person("sajib", 25);
let p2 = new Person("payel", 17);

console.log(p1.talk === p2.talk);