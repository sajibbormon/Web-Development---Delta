const express = require("express");
const app = express();


app.use((req, res, next)=>{
    console.log("Hi, I am middlware");
    next();
});

app.use((req, res, next)=>{
    console.log("Hi, I am middlware");
    // res.send("Middlware 2 finished.");
    next();
});


app.use((req, res, next)=>{
    let { query } = req.query;
    console.log(query);
    console.log("Hi, I am middlware");
    res.send("Middlware 2 finished.");
});


app.get("/", (req, res)=>{
    res.send("Hello, this is root.");
});


app.get("/random", (req, res)=>{
    res.send("Hi, I am random");
});

app.listen(8080,  ()=>{
    console.log("Listening to port 8080");
});