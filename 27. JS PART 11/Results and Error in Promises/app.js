/*
Promises
---------
Promises are rejected and resolved with some data (valid results or errors)

we can take a by default argument in then function (result) and catch function (error).



saveToDBPromise("apnacollege")
.then((result) => {
    console. log("result : ", result);
    console. log("promise1 resolved");
    return saveToDBPromise("hello world");
)}
.then((result) => {
    console. log("result : ", result);
    console. log("promise2 resolved");
})
.catch((error) => {
    console. log("error : ", error);
    console. log("some promise rejected");
});


function savetoDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random()*10)+1;
        if (internetSpeed > 4) {
            resolve("success : data was saved"); -> the inside message is the result
        } else {
            reject("failure : weak connection"); -> the inside message is the error
        }
});
}

*/

function saveToDb(data){
    return new Promise((resolve, reject)=>{
        let internetSpeed = Math.floor(Math.random() * 10) + 1;

        if(internetSpeed > 4){
            resolve("success: data was saved...");
        }else{
            reject("failure: data was not saved...");
        }
    });
}

saveToDb("apna college")
.then((result)=>{
    console.log("result: ",result);
    console.log("data1 saved.");
    return saveToDb("helloworld");
})
.then((result)=>{
    console.log("result: ",result);
    console.log("data2 saved.")
})
.catch((error)=>{
    console.log("error: ",error);
    console.log("data was not saved.");
})


