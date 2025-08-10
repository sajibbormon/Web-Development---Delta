h1 = document.querySelector("h1");

function colorChanging(color){

}

function changeColor(color, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            h1.style.color = color;
            resolve("success...");
        }, delay);
    });
}

changeColor("pink", 1000)
.then((result)=>{
    console.log(result);
    return changeColor("DeepPink", 1000);
})
.then((result)=>{
    console.log(result);
    return changeColor("green", 1000);
})
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
});