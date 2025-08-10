/**
 * New Operator
-----------------
The new operator lets developers create an instance(object) of a user-defined object type or of one of the built-in object
types that has a constructor function.


constructor

function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.talk = function (){
    console.log(`Hi, my name is ${this.name}`);
}

let p1 = new Person("sajib", 25);
let p2 = new Person("payel", 17);

p1.talk() === p2.talk()

output: true

bcz 



*/
//constructors: special function- doesn't return anything & start with capital 
function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.talk = function (){
    console.log(`Hi, my name is ${this.name}`);
}

let p1 = new Person("sajib", 25);
let p2 = new Person("payel", 17);


p1.talk === p2.talk;

/**
It will outpt true and doesn't create new copy of the talk function.


1. Creates a blank, plain JavaScript object. For convenience, let's call it newInstance .

2. Points newInstance 's [[Prototype]] to the constructor function's prototype property, if the
   prototype is an Object . Otherwise, newInstance stays as a plain object with Object.prototype
   as its [[Prototype]].



The better way to do this task is use Class.



 */