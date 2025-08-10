/*
Await Keyword
-------------
pauses the execution of its surrounding async function until the promise is settled (resolve or rejected)


await till pending

behave like delay, resolve then go to next delay, resolve then go to next 

*/

function getNumber() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();
        }, 2000);
    });
}

// async function demo(){
//     getNumber();
//     getNumber();
//     getNumber();
// }

async function demo(){
    await getNumber();
    await getNumber();
    await getNumber();
}

//await function/code means till the await call is not completed then following function/code will not be executed.

h1 = document.querySelector("h1");

function colorChange(color, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            console.log(`color changed to ${color}.`);
            resolve("color changed");
        }, delay);
    });
}

async function callChangingColor(){
    await colorChange("pink", 1000);
    await colorChange("DeepPink", 1000);
    await colorChange("green", 1000);
}

callChangingColor();