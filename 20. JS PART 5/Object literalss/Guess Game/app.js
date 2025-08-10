const max = prompt("Enter the max number.");

const random = Math.floor( Math.random() * max ) + 1;

// console.log(random);

let guess = prompt(`Guess the number (from 1 to ${max} or write quit to exit the game.).`);

while(true){
    if(guess == "quit"){
        console.log("Ops!... Quiting the game.");
        break;
    }

    if(guess == random){
        if(guess % 2 == 1){
            console.log("Congrats!! Your guess is correct...");
        }else{
            console.log("Congrats!! Your are absolutely right...");
        }
        break;
    }else{
        guess = prompt("Owww...You are wrong!!. Please try again or write quit to exit the game...");
    }
}