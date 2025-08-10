/*
step 1: keypress -> game start

step 2: buttonflash + print level 1

step 3: wait for the user interaction(user button press)
                |
    check gameSeq[] and userSeq[]
           /           \
          / correct     \ incorrect
       levelup          Game Over    

gameSeq[] to store game sequence
userSeq[] to store user sequence


*/

let hightestScore = 0;
let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let btns = ["pink", "red", "green", "purple"];

let h2 = document.querySelector("h2");

let h3 = document.querySelector("h3");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game is started");
        started = true;
        levelUp();
    } 
});

function gameFlash(btn){
    btn.classList.add("flash");

    setTimeout(function(){
        btn.classList.remove("flash")
    }, 300);

}


function userFlash(btn){
    btn.classList.add("user-flash");

    setTimeout(function(){
        btn.classList.remove("user-flash")
    }, 300);

}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    //random btn choose
    let randIdx= Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);

    gameSeq.push(randColor);

    console.log(gameSeq);

    gameFlash(randBtn);

}

function checkAns(idx){
    // console.log(`curr level: `, level);

    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 750);
            // levelUp();
        }
    }else{
        h2.innerHTML = `Game over! Your score was <b>${level}</b>. Press any to key to start again...`;
        document.querySelector("body").style.backgroundColor = "pink";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        })
        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    // console.log(userColor);

    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}


function reset() {
    hightestScore = Math.max(hightestScore, level);
    h3.innerText = `Your highest Score is ${hightestScore}...`;
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}