const express = require("express");
const app = express();



app.get("/err", (req, res)=>{
    abc = abc;
});

app.use((err, req, res, next)=>{
    console.log("---------------Error---------------");
    next(err);
});


app.use((err, req, res, next)=>{
    console.log("---------------Error 2---------------");
    next(err);
});



// app.use((req, res, next)=>{
//     res.status(404).send("Page not found!");

// });

app.get("/", (req, res)=>{
    res.send("This is root!");
});

app.listen(8080, ()=>{
    console.log("Listening to port 8080");
});