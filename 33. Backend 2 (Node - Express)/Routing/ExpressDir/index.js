const express = require("express");

const app = express();

let port = 8080;

app.listen(port, ()=>{
    console.log(`Listening to port ${port}`);
});

app.get("/",(req, res) =>{
    console.log("sent response...");
    res.send("You cantacted root path");
});

app.get("/apple",(req, res) =>{
    console.log("sent response...");
    res.send("You cantacted apple path");
});

app.get("/orange",(req, res) =>{
    console.log("sent response...");
    res.send("You cantacted orange path");
});

app.get("/*path", (req, res) => {     //this code doesn't work Node.js v22.17.0
    console.log("sent response...");
    res.send("The path doesn't exist.");
}); 


//app.post

app.post("/", (req, res) => {
    console.log("sent response from post...");
    res.send("you sent a post request to root");
});