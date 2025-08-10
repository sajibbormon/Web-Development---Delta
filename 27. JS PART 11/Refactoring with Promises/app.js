
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

function saveToDb(data){
    return new Promise((resolve, reject) =>{
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed > 4){
            resolve("Success: data was saved...", data);    
        }else{
            reject("Failed: weak connection...");
        }
    });
}





console.log(saveToDb("Apna College"));
