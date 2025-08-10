const express = require('express');
const app = express();

app.use((req, res, next)=>{
    req.time = new Date(Date.now());
    console.log(req.method, req.hostname, req.path, req.time);

    next();
})

app.get("/", (req, res)=>{
    res.send("Hi, I am root.");
});

app.get("/random", (req, res)=>{
    res.send("This is a random page");
})

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});