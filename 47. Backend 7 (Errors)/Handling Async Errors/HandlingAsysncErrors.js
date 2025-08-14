/** 
 Handling Asysnc Errors
-------------------------

app.get("/chat/:id", async (req, res, next)=>{
    let { id } = req.params;
    let chat = await Chat.findById(id);
    if(!chat){
        return next(new ExpressError(404, "Chat not Found or Deleted"));
    }
    res.render("edit.ejs", {chat});
    
});

To understand this we will use a previous code of whatsapp and fakewhatsapp database.

Create a file ExpressError.js
code:
class ExpressError extends Error{
    constructor(status, message){
        super();
        this.status = status;
        this.message = message;
    }
}

module.exports = ExpressError;

now in inside  index.ejs create a new  form button show

                <br/>
                <form method="GET" action="/chats/<%= chat._id %>">
                    <button>Show</button>
                </form>

now in index.js

write a error handling middleware and require the  ExpressError(custom handler):

app.use((err, req, res, next)=>{
    let {status = 500, message = "Some Error Occured"}  = err;
    res.status(status).send(message);
});

now first use for non async function to handle error.
// New route to add  new  chat.

app.get("/chats/new", (req,  res)=>{
    throw new ExpressError(404, "Page not found!");
    res.render("new.ejs");
});

if we route to the path: http://localhost:8080/chats/new

we will get "Page not found!" and error code 404.


now try to handle for async function

// New - Show routue (for this lecture)  handling Async Errors

app.get("/chats/:id", async(req, res,  next)=>{
    let {id} = req.params;
    let chat = await Chat.findById(id);
    console.log(chat);
    if(!chat){
        throw new ExpressError(404, "Chat not found!");
    }
    res.render("edit.ejs", {chat});
});


now if we   try to give any wrong id that doesn't exist it should print the custom error.
But this doesn't work bcz from async function it doesn't call next() automatically by default.

so  we need to write the code as below:
// New - Show routue (for this lecture)  handling Async Errors

app.get("/chats/:id", async(req, res,  next)=>{
    let {id} = req.params;
    let chat = await Chat.findById(id);
    console.log(chat);
    if(!chat){
        next(new ExpressError(404, "Chat not found!"));
    }
    res.render("edit.ejs", {chat});
});

 




*/