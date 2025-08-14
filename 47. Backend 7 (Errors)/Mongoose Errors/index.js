const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
var methodOverride = require('method-override');
const { AsyncLocalStorage } = require("async_hooks");
const ExpressError = require("./ExpressError");


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
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp')
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



function asynWrap(fn){
    return function(req, res, next){
        fn(req, res, next).catch((err)=> next(err));
    }
}

app.get("/chats", async (req, res, next)=>{
    try{
        let chats = await Chat.find();
        // console.log(chats);
        res.render("index.ejs", {chats});
    }catch(err){
        next(err);
    }
    
});


// New route to add  new  chat.

app.get("/chats/new", (req,  res)=>{
    // throw new ExpressError(404, "Page not found!");
    res.render("new.ejs");
});

// Create Route
app.post("/chats",async (req, res, next)=>{
    try{
        let {from, to, msg} = req.body;
        let newChat = new Chat({
            from: from,
            to: to,
            msg: msg,
            created_at: new Date(),  
        });
        // console.log(newChat);
        await newChat.save();
        res.redirect("/chats");
    }catch(err){
        next(err);
    }
});

// New - Show routue (for this lecture)  handling Async Errors

app.get("/chats/:id", asynWrap(async(req, res,  next)=>{
        let {id} = req.params;
        let chat = await Chat.findById(id);
        console.log(chat);
        if(!chat){
            next(new ExpressError(404, "Chat not found!"));
        }
        res.render("edit.ejs", {chat});
}));


//Edit Route(update)

app.get("/chats/:id/edit", async(req, res, next)=>{
    try{
        let {id} = req.params;
        let chat = await Chat.findById(id);
        res.render("edit.ejs", {chat});
    }catch(err){
        next(err);
    }

});

//UPdate Route

app.put("/chats/:id", async (req, res, next)=>{
    try{
        let {id} = req.params;
        let {msg: newMsg} = req.body;
        console.log(newMsg);

        let updateChat = await Chat.findByIdAndUpdate(id, {msg: newMsg}, {runValidators: true, new: true});
        console.log(updateChat);
        res.redirect("/chats");        
    }catch(err){
        next(err);
    }
});


// Destroy Route
app.delete("/chats/:id", async (req, res, next)=>{
    try{
        let {id} = req.params;
        let deletedChat = await Chat.findByIdAndDelete(id);
        console.log(deletedChat);
        res.redirect("/chats");
    }catch(err){
        next(err);
    }
})


app.get("/", (req, res)=>{
    res.send("root is working");
})

//mongoose  error
const handleValidationErr =  (err)=>{
    console.log("Validation Error Occured... Plsease follow the rules!");
    return err;
}

//middleware
app.use((err, req, res, next)=>{
    console.log(err.name);
    if(err.name === "ValidationError"){
        err = handleValidationErr(err);
    }
    next(err);
});




//Error Handling Middleware
app.use((err, req, res, next)=>{
    let {status = 500, message = "Some Error Occured"}  = err;
    res.status(status).send(message);
});

app.listen(8080, ()=>{
    console.log("server is listening on port 8080");
});


