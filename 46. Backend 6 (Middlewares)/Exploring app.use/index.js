const express = require("express");
const app = express();

//for specific path
app.use("/random", (req, res, next)=>{
    console.log("I am only for random");
    next();
})

app.get("/", (req, res)=>{
    res.send("This is root page");
})

app.get("/random", (req, res)=>{
    res.send("This is a random page");
});

app.use((req, res)=>{
    res.send("Page not found");
});

app.listen(8080, ()=>{
    console.log("Listening to port 8080");
})