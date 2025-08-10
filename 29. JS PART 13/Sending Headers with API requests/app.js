/*
Axios(Sending Headers)
------------------------

const config = {headers: {Accept: "application/json"}};
let res = await axios.get(Url2, config);
console.log(res.data);


headers is used for additional information about the response how we will get it.

const config = {headers: {Accept: "application/json"}}; //this is basically an object...

in this line of code we are Accepting the the response as json format. 

*/

let url =  'https://icanhazdadjoke.com/' ;


async function tellJoke() {    
    const config = {headers: {Accept: "application/json"}};
    let res = await axios.get(url, config);
    console.log(res.data);
    console.log(res.data.joke);
}

tellJoke();