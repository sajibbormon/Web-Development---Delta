/*
Catching the Rejections of async function

*/


h1 = document.querySelector("h1");

function colorChange(color, delay){
    return new Promise((resolve, reject)=>{
        let num = Math.floor(Math.random() * 10) + 1;
        if(num == 5){
            reject("promise rejected.");
        }
        setTimeout(()=>{
            h1.style.color = color;
            console.log(`color changed to ${color}.`);
            resolve("color changed");
        }, delay);
    });
}

async function callChangingColor(){
    try{
        await colorChange("pink", 1000);
        await colorChange("DeepPink", 1000);
        await colorChange("green", 1000);
    }catch(err){
        console.log(err)
    }
    let a = 5;
    console.log(a);
    console.log(`new number ${a+3}`);
}

callChangingColor();