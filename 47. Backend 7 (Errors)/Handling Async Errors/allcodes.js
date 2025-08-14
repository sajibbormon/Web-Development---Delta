/**
 * Basic Set Up
----------------------------------------------------
npm init -y
npm i express
npm i ejs
npm i mongoose




Creating the Model
---------------------------------------------------------

Chat will have: (_id, from, to, message, created_at)

Basically we are trying to create a website where we can see chat(messages).


We will create a route which is '/chat'

In database there could be multiple schemas. Till now we have written shcema's code in index.js

We call these schemas models.

We will now store schema in models folder.

mongoose models are the collections in our database.

In models folder one file is created name chat.js where we will define  chat schema.

chat.js:

const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    from:{
        type:String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    msg: {
        type: String,
        maxLength: 50
    },
    created_at: {
        type: Date,
        required: true,
    }
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;

After creating model we need to export the model.
And we need to require it in index.js to use the model.

const Chat = require("./models/chat.js");


//new chat1
let chat1 = new Chat({
    from: "neha",
    to: "priya", 
    msg: "send me your exam sheets", 
    created_at: new Date(),
});

for taking real date we use new Date() by calling Constructor of Date class.



Initialize Database
-----------------------------------------------------------------------

To initialize the sample data while developping and testing a project.

we will create: init.js


const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

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




//inserting multiple chats at the same time using array.

let allChats = [
    {
        from: "neha",
        to: "preeti", 
        msg: "send me notes for the exam", 
        created_at: new Date(),
    },
        {
        from: "rohit",
        to: "mohit", 
        msg: "teach me js callbacks", 
        created_at: new Date(),
    },
        {
        from: "amit",
        to: "sumit", 
        msg: "all the best!", 
        created_at: new Date(),
    },
        {
        from: "anita",
        to: "ramesh", 
        msg: "bring me some fruits", 
        created_at: new Date(),
    },
        {
        from: "tony",
        to: "peter", 
        msg: "love you 3000", 
        created_at: new Date(),
    },
];


Chat.insertMany(allChats);

We will run init.js once for saving the data in database.



Index Route
-----------------------------------------------------------------------

GET             /chats          -> Show all chats


we will get all data from database. 

we will use Chat.find() to get all messages/data. But it returns a promise. So we need to await
to get the data. As we are using await, the function will be a async function.

app.get("/chats", async (req, res)=>{
    let chats = await Chat.find();
    console.log(chats);
    res.render("index.ejs", {chats});
});




New Route(Chats)
----------------------------------------------------------------
New & Create Route

we will add a button for adding new chat, if button was clicked then a new route will be create and 
a form will  aprear and collect chat message and related data(from, to).

GET             /chats/new          form render (message/chat)

if form is submitted then we will use POST to receive the data. and the route will be

POST            /chats

and in index.js we will save the data into db.

new.ejs:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Write New Chat</title>
</head>
<body>
    <h3>Write new chat...</h3>
    <form method="POST" action="/chats">
        <input type="text" placeholder="Who are you?" name="from">
        <br/>
        <br/>
        <textarea name="msg" id="">Write your message here...</textarea>
        <br/>
        <br/>
        <input type="text" placeholder="add receiver" name="to">
        <br/>
        <br/>
        <button>Create Chat</button>
    </form>
</body>
</html>




Create Route
----------------------------------------------------------------------------

app.post() will be define here.


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

it will save the new data to the db and will redirect to the /chats page.





Using Date
--------------------------------------------------------------------------
1. <%= chat.create_at.toString().split(" ")[4] %> <br/>
2. <%= chat.create_at.toString().split(" ").slice(0,4).join(" ") %> <br/>

1 -> printing the time
2 -> printing the date

first converting to string, then splitting the string, it will return an array.
now access the 4th index value which is time.

secondly converting to string, then splitting the string, it will return an array.
now print from 0 to 4th index value by joining them with space.

we can also join with hyphens

<%= chat.create_at.toString().split(" ").slice(0,4).join("-") %> <br/>




Edit Route(Update chat- update data in database)
--------------------------------------------------------------------------------------------------
1) edit button (get the req and move to edit page)
2) edit form submission (update based on new data)

Edit  & Update  Route


GET                 /chats/:id/edit

PUT                 /chats/:id

we will create a button edit. If edit is clicked we will route to new page /chats/:id/edit
and it will display  edit form to edit msg.

when it will be submitted next request will go for PUT request to update the database.


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





Destroy Route(delete chat)
-------------------------------------------------------------------------------------
Destroy Route

DELETE                  /chats/:id          -> delete chat with id









 */