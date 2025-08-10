/*
Keyboard Events
----------------
We can track any input given by keyboard using keyboard events.

event argument: when any input is given then event argument take that input.

obj.addEventListener(event, function(event_argument));


*/

let btn = document.querySelector('button');

btn.addEventListener("click", function(event){ 
    console.log(event);
    console.log("button clicked");
});

// click = pointer event

btn.addEventListener("dblclick", function(event){
    console.log(event);
    console.log("button clicked");
});

//dblclick = mouse event

//keyboard event.
/*
keydown -> fired when a key is pressed.

keypress -> Fired when a key that produces a character value is pressed down.

keyup -> Fired when a key is released.

*/


let inp = document.querySelector('input');

// inp.addEventListener("keydown", function(){
//     console.log("Key was pressed");
// });




inp.addEventListener("keyup", function(event){
    console.log(event);
    console.log("key: ",event.key);
    console.log("code: ",event.code);
    console.log("Key was released");
});

/* In keyboardEvent code: which key pressed/released with Key(pressed/released key)
key: which key is pressed/released. which key will shown in screen.

suppose you pressed a
code: KeyA
key: a

event has two properties: 
                 event
                /     \
             code    key
             


*/

let arrow = document.querySelector(".arrow");
// console.dir(arrow);
arrow.addEventListener("keydown", function(event){
    // console.log(event.code);
    if(event.code == "ArrowUp"){
        console.log("Moving forward");
    }else if(event.code == "ArrowDown"){
        console.log("Moving backward");
    }else if(event.code == "ArrowRight"){
        console.log("Moving right");
    }else if(event.code == "ArrowLeft"){
        console.log("Moving Left");
    }
});