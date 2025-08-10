const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
var methodOverride = require('method-override');
const { AsyncLocalStorage } = require("async_hooks");


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
//for parsing data received from client
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

main()
.then(()=>{
    console.log("connection successful");
})
.catch(err =>{
    console.log(err);
});

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp')
}


//new chat1 for testing
// let chat1 = new Chat({
//     from: "neha",
//     to: "priya", 
//     msg: "send me your exam sheets", 
//     created_at: new Date(),
// });

// chat1.save().then(res =>{
//     console.log(res);
// }).catch(err=>{
//     console.log(err);
// });



app.get("/chats", async (req, res)=>{
    let chats = await Chat.find();
    // console.log(chats);
    res.render("index.ejs", {chats});
});


// New route to add  new  chat.

app.get("/chats/new", (req,  res)=>{
    res.render("new.ejs");
})

// Create Route
app.post("/chats", (req, res)=>{
    let {from, to, msg} = req.body;
    let newChat = new Chat({
      from: from,
      to: to,
      msg: msg,
      created_at: new Date(),  
    });
    // console.log(newChat);
    newChat.save().then(res=>{
        console.log("Chat was saved")
    }).catch(err =>{
        console.log(err);
    });

    res.redirect("/chats");
});


//Edit Route(update)

app.get("/chats/:id/edit", async(req, res)=>{
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", {chat});
});

//UPdate Route

app.put("/chats/:id", async (req, res)=>{
    let {id} = req.params;
    let {msg: newMsg} = req.body;
    console.log(newMsg);

    let updateChat = await Chat.findByIdAndUpdate(id, {msg: newMsg}, {runValidators: true, new: true});
    console.log(updateChat);
    res.redirect("/chats");
});


// Destroy Route
app.delete("/chats/:id", async (req, res)=>{
    let {id} = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
})


app.get("/", (req, res)=>{
    res.send("root is working");
})

app.listen(8080, ()=>{
    console.log("server is listening on port 8080");
});


