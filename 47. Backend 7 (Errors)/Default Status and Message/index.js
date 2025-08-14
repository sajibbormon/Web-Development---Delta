const express = require('express');
const  app = express();
const ExpressError = require("./ExpressError");

const checkToken = (req, res, next)=>{
    let {token} = req.query;
    if(token === "giveaccess"){
        next();
    }
    throw new ExpressError(401, "Access Denied!");
}

app.get("/api", checkToken, (req, res)=>{
    res.send("data");
});


app.get("/err", (req, res)=>{
    abcd = abcd;
});

app.get("/", (req, res)=>{
    res.send("This is root");
});

app.use((err, req, res, next)=>{
    let  {status = 500, message="SOME ERROR"} = err;
    // res.send(err);
    res.status(status).send(message);

});

// app.use((err, req, res, next)=>{
//     console.log("---------Error-----------");
//     next(err);
// });


app.listen(8080, ()=>{
    console.log("Listening to port 8080");
});

