/*
Axios
-----
Library to make HTTP requests

<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
have to use the upper link to connect with axios library.

axios generally return a promise.


async function getFacts() {
    try{
        let res = await axios.get(url);
        console.log(res);
    } catch(err){
        console.log("Error- ", err); 
    }
}

*/

let button1 = document.querySelector("#cat");
let button2 = document.querySelector("#dog");
let p = document.querySelector("#facts");
let img = document.querySelector("#dogImg");

let url = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";
// async function getFacts() {
//     try{
//         let res = await axios.get(url); //return a promise
//         console.log(res.data);
//         console.log(res.data.fact);
//     } catch(err){
//         console.log("Error- ", err); 
//     }
// }

// getFacts();

//printing the facts using html

async function printFacts() {
    try{
        let res = await axios.get(url); //return a promise
        // console.log(res.data);
        return res.data.fact;
    } catch(err){
        console.log("Error- ", err); 
        return "error occurred..."
    }
}


async function displayDog() {
    try{
        let res = await axios.get(url2); //return a promise
        
        return res.data.message;
    } catch(err){
        console.log("Error- ", err); 
        return "error occurred..."
    }
}

button1.addEventListener("click",async ()=>{
    p.style.display = "block";
    let res = await printFacts();
    p.innerText = res;
});

button2.addEventListener("click",async ()=>{
    let res = await displayDog();
    img.style.display = "block";
    img.src = res;
});

/*
there is a limit on api calls. per mins 50 to 100 calls.

so we don not use loops for api calling.

*/