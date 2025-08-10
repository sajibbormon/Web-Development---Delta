const express = require("express");

const app = express();

let port = 8080;

app.listen(port, (req, res)=>{
    console.log(`Listening from port ${port}`);
});

app.get("/",(req, res) =>{
    console.log("sent response");
    res.send("Response sent");
});

app.get("/:username", (req, res) => {
    let {username } = req.params;
    console.log("sent response");
    res.send(`Your userId is ${username}`);
});

app.get("/:username/:userId", (req, res) => {
    let {userId, username} = req.params;
    console.log("sent response");
    res.send(`Your username is ${username} and userId is ${userId}`);
});