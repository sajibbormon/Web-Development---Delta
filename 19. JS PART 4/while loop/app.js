/*

while loop

while (condition) {

    //do something

}


let i = 1;

while (i <= 5) {

    console.log(i);

    i++;

}

*/

// let i = 1;
// while( i <= 5){
//     console.log(i);
//     i++;
// }

/*Favourite movies guess*/

// let favMovie = "avatar";

// let guess = prompt("Enter movie name: ");
// while((favMovie != guess.toLowerCase()) && (guess.toLowerCase() != "quit")){
//     guess = prompt("Wrong. Try again: ");
// }


/*nested loop*/

// let heroes = [["Iron Man", "Spider Man",  "Dr. Strange"], ["Super Man", "Wonder Women", "Bat Man"]];

// for(let i = 0; i<heroes.length; i++){
//     console.log(`List ${i}`)
//     for(let j = 0; j<heroes[i].length; j++){
//         console.log(heroes[i][j]);
//     }
// }



/*

for of loop
for (element of collection) {
    //do something
}

let fruits = ["mango", "apple", "banana", "litchi", "orange"];

for(fruit of fruits) {
    console. log(fruit);
}

*/

let fruits = ["Mango", "Apple", "Banana", "Litchi", "Orange"];

for(fruit of fruits){
    console.log(fruit);
}


for(char of "apnacollege"){
    console.log(char);
}


/*
Nested for of loop
------------------

let heroes = [ ["ironman", "spiderman", "thor"], ["superman", "wonder woman", "flash"]];

for(list of heroes) {
    for(hero of list) {
        console. log(hero);
    }
}

*/