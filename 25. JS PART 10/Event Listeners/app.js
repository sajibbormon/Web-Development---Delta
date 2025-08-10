/*
Event Listeners
---------------
addEventListener

element.addEventListener(event, callback)

event means click, drag, keyboard key, etc.


btn.addEventListener("click", function(){
    console.log("button clicked");
});

**differences between onclick and addEventListener is onclick take only one function where addEventListener takes 
multiples of functions.

*/

let btns = document.querySelectorAll('button');

// for(btn of btns){
//     btn.onclick = sayHello;
//     btn.onclick = sayName;
// }

//the output is only Apna College bcz sayName is given at last, so it is taking the last function only.

function sayHello(){
    console.log("hello");
}

function sayName(){
    console.log("Apna College");
}

for(btn of btns){
    btn.addEventListener("click", sayHello);
    btn.addEventListener("click", sayName);
    btn.addEventListener("dblclick", () =>{
        console.log("You've double clicked");
    })
}


// for(btn of btns){
//     btn.addEventListener("click", ()=>{
//         sayHello();
//         sayName();
//     })
    
// }