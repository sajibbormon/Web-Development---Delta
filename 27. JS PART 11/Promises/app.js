/*
Promises
-----------

The promises object represents the eventual completion (or failure) of an asynchronous operation and its resulting 
value.


*/

function saveToDb(data, success, failure){
    let internetSpeed = Math.floor(Math.random() * 10) + 1;

    if(internetSpeed > 4){
        success(data);
    }else {
        failure();
    }
}




saveToDb("Apna College", (data) =>{
    console.log("Your data was saved: ", data);
}, () =>{
    console.log("Weak Connection. Data not saved.");
});

//Refactoring with Promises

/*
Promises -> object
--------
resolve & reject.

resolve means success and reject means failure.

Three state of promises
1. pending
2. rejedted (error)
3. fullfilled (resolve)


*/