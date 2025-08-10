const express = require("express");

const app = express();

const port = 8080;

app.listen(port, (req, res)=>{
    console.log(`Listening from port ${port}`);
});

app.get("/", (req, res)=>{
    res.send("This is root");
});

app.get("/user/:userName/", (req, res) =>{
    let {userName} = req.params;

    let htmlStr = `<h1>Welcome to the page of @${userName}</h1>`;

    res.send(htmlStr);
});

app.get("/search", (req, res) =>{
    let { q } = req.query;
    if(!q){
        res.send('<h1>Nothing Searched</h1>')
    }
    res.send(`<h1>Search results for query: ${q}</h1>`);
});

