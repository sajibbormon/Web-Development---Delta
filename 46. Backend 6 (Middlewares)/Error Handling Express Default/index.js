const express = require("express");
const app = express();

//middleware layer to see if token is correct or not.
app.use("/api",(req, res, next)=>{
    let{token} = req.query;
    if(token ==="giveaccess")
    {
        next();
    }else{
        res.send("ACCESS DENIED!");
    }
});


app.get("/wrong", (req, res)=>{
  abcd = abcd;  
});


app.get("/api", (req, res)=>{
    res.send("data");
});


app.get("", (req, res)=>{
    res.send("This is root");
});

app.listen(8080, ()=>{
    console.log("Listening to port 8080");
});