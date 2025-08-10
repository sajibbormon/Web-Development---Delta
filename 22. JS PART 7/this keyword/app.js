/*
this keyword
------------
"this" keyword refers to an object that is executing the current piece of code.



const student = {
    name: "Sajib", 
    age: 26,
    eng: 97,
    math: 98,
    phy: 97,

    getAvg() {
        let avg = (eng + math + phy) / 3;
        console.log(avg);
    }
}


*/


const student = {
    name: "Sajib", 
    age: 26,
    eng: 97,
    math: 98,
    phy: 97,
    //current piece of code is below
    getAvg() {
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}

console.log(student.getAvg());