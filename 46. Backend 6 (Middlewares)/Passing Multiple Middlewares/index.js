const express = require("express");
const app = express();

//middleware layer to see if token is correct or not.
const checkToken = ("/api",(req, res, next)=>{
    let{token} = req.query;
    if(token ==="giveaccess")
    {
        next();
    }else{
        res.send("ACCESS DENIED!");
    }
});

// if any client send request to this path then it will verify through token
app.get("/api", checkToken, (req, res)=>{
    res.send("data");
});


app.get("", (req, res)=>{
    res.send("This is root");
});

app.listen(8080, ()=>{
    console.log("Listening to port 8080");
});