/*
Our First API Request
----------------------
using Fetch method

fetch(url)

*/

let url = "https://catfact.ninja/fact";

fetch(url)

// .then((response)=>{
//     console.log(response);
//     // console.log(response.json()); //readable format
//     response.json().then((data)=>{
//         console.log(data);
//         console.log(data.fact); // printing the actual data
//     }); //reading the response using then as response.json() is a promise.
// })
// .catch((err)=>{
//     console.log("ERROR - ",err);
// });


//more readable
.then((response)=>{
    // console.log(response);
    return response.json();
})
.then((prom)=>{
    // console.log(prom);
    console.log("Data 1: ", prom.fact); //the actual data
    return fetch(url);
})
.then((res)=>{
    return res.json();
})
.then((prom2)=>{
    console.log("Data 2: ",prom2.fact);
})
.catch((err)=>{
    console.log("ERROR - ",err);
});

console.log("I'm happy!");