/*
Async Functions
---------------
async & await keywords

async & await function gives more handy and clean way of coding for asynchronous.

async keywords
---------------
Creates an Async Function

async function greet(){
    return "hello world!"; //returns a promise
}

let hello = async () => {}; //return a promise

By default any async function return a promise.

*/

async function greet(resolveOrReject) {
    if(resolveOrReject == 1){
        return "hello!";
    }else{
        abc.abc(); //this is an error
    }
}

greet(1)
.then((result)=>{
    console.log(result);
    return greet(0);
})
.catch((error) =>{
    console.log(error);
})

// console.log(greet());

//we can also use 'throw' keyword to throw any error.

let demo = async () =>{
    return 5;
}

