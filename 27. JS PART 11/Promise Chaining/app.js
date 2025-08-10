/*
Promises
---------
Improved Version

Promise chaining means there is multiple then.

Promise chaining <- callback
 1. If first data is saved then move to second
 2. If second data is saved then move to third
 3. so on...

 Another scenario where is weak connection.


Promise chaining
 1. If first data is saved then move to second
 2. Weak connection -> stop here.
 3. 


*/


function saveToDb(data){
    return new Promise((resolve, reject)=>{
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed > 4){
            resolve("Success: Data was saved...");
        }else{
            reject("Failed: Data was not saved...");
        }
    });
}

// saveToDb("apna college")
// .then(()=>{
//     console.log("data1 saved. promise was resolved.");
//     saveToDb("helloworld").then(()=>{ // using callbacks
//         console.log("data2 saved. promise resolved.")
//     });
// })
// .catch(()=>{
//     console.log("Promise was rejected.");
// });

//Improved version

saveToDb("apna college")
.then(()=>{
    console.log("data1 saved. promise was resolved.");
    return saveToDb("helloworld"); // promise chaining
})
.then(()=>{ // promise chaining second data resolve
    console.log("data2 saved. promise was resolved.");
    return saveToDb("Sajib Bormon");
})
.then(()=>{
    console.log("data3 saved. promise was resolved.");
})
.catch(()=>{
    console.log("Promise was rejected.");
});