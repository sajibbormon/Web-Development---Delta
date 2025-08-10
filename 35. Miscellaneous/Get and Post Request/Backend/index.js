const express = require("express");

const app = express();

let port = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.get("/register", (req, res)=>{
    let {user} = req.query;
    res.send(`standard GET response. Welcome ${user}`);
});

app.post("/register", (req, res)=>{
    // console.log(req.body);
    let {user} = req.body;
    res.send(`standard POST response ${user}`);
});

app.listen(port, ()=>{
    console.log(`Port is listening from ${port}`);
});
