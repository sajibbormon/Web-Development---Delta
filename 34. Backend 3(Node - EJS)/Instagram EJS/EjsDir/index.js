const express = require("express");
const path = require("path");

const app = express();

let port = 8080;

app.use(express.static(path.join(__dirname, "/public/js")));
app.use(express.static(path.join(__dirname, "/public/css")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.listen(port, ()=>{
    console.log(`app is listening to ${port}`);
});

app.get("/ig/:username", (req, res)=>{
    const instaData = require("./data.json");
    // console.log(instaData);
    let {username} = req.params;

    let data = instaData[username];
    // console.log(data);
    if(data){
        res.render("instagram", {data});
    }else{
        res.render("ErrorNotFound");
    }
}); 