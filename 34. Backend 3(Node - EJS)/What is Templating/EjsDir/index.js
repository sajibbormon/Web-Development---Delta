const express = require("express");

const app = express();

const path = require("path");

let port = 8080;

app.listen(port, ()=>{
    console.log(`Listening to port ${port}`);
});



//to  use ejs

app.set("view engine", "ejs");


//to give specific path of the views

app.set("views", path.join(__dirname, "/views"));


app.get("/", (req,  res)=>{
    console.log("Sending Response...");
    res.render("home.ejs");
});


//passing data to EJS

app.get("/rolldice", (req, res) =>{
    let num = Math.floor(Math.random() * 6) + 1;

    res.render("rolldice.ejs", { diceValue : num});
});


//instagram

app.get("/ig/:username", (req, res)=>{
    const followers = ["Payel", "Payel Queen", "Queen"];

    let { username } = req.params;

    res.render("instagram", {username, followers});
});


