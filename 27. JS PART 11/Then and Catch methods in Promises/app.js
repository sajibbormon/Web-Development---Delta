/*
Promises
---------
then() & catch() method


Promises state:
fullfilled and rejected.

Now if we want to do something if promise state is fullfilled, we use .then() method
If rejected then we use .catch() method.


*/

function saveToDb(data){
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed > 4){
            resolve("success: data was saved.");
        }else {
            reject("failed: weak connection.")
        }
    });
}

// let request = saveToDb("Apna College"); //req = promise object

// request
// .then(() => {
//     console.log("Pormise was resolved...");
//     console.log(request);
// })
// .catch(() => {
//     console.log("Promise was rejected...");
//     console.log(request);
// });

//directly writing without creating object variable

saveToDb("Apna College")
.then(() => {
    console.log("Pormise was resolved...");
    // console.log();
})
.catch(() => {
    console.log("Promise was rejected...");
    // console.log(;
});