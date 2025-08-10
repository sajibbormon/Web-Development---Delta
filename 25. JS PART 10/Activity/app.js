// let centerClass = document.querySelectorAll('.centerClass');


// for(cls of centerClass){
//     console.dir(cls);
//     cls.style.display = "flex";
//     cls.style.justifyContent = "center";
//     cls.style.alignItems = "center";
// }

// let divBox = document.querySelector(".divBox");

// divBox.style.marginTop = "20px";
// divBox.style.border = "solid black";
// divBox.style.height = "200px";
// divBox.style.width = "500px";
// // divBox.style.left = "50%";

// divBox.style.position = "absolute";
// divBox.style.justifyContent = "center";
// divBox.style.alignItems = "center";


let btn = document.querySelector("button");

let div = document.querySelector("div");

let h3 = document.querySelector("h3");


btn.addEventListener( "click",() =>{
    let max = 255;
    let r = Math.floor(Math.random() * (max));
    let g = Math.floor(Math.random() * (max));
    let b = Math.floor(Math.random() * (max));

    // console.log(r, g, b);
    let color = `rgb(${r}, ${g}, ${b})`
    div.style.backgroundColor = color;
    h3.style.color = color;
    h3.innerText = color;

});

