/*
this with Arrow Functions
--------------------------

Arrow
------

i) LexicalScope (means parent scope)

parent scope -> call
 
fucntions
---------
i) scope -> this -> calling object

*/


const student = {
    name: "Sajib",
    marks: 95,
    prop: this, //global scope

    getName : function () {
        console.log(this.name); //object calling.
        console.log(this);
    },

    getMarks : () => {
        console.log(this); //parent's scope(which is window)
        // console.log(this.marks);
    },

    getInfo1: function () {
        setTimeout( () => {
            console.log(this); //student (parent scope, as it's parent scope is normal function and normal function's parent is student)
        }, 2000);
    },

    getInfo2: function () {
        setTimeout( function () {
            console.log(this); //window. Bcz setTimeout call this function (calling object) so, setTimeout's parent which is window.
        }, 2000);
    }


};

// console.log(student);
// console.log(student.getName());
// console.log(student.getMarks());

console.log(student.getInfo1());
console.log(student.getInfo2());

