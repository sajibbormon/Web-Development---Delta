const express = require("express");
const path = require("path");
const {v4: uuidv4} = require('uuid');
const methodOverride = require("method-override");

const app = express();

app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(methodOverride('_method'));

let port = 8080;

//----------------------------------------------------------

let posts = [
    {
        id: uuidv4(),
        username: "apnacollege", 
        content: "I love coding!"
    },
    {
        id: uuidv4(),
        username: "sajib", 
        content: "I love queen! Hard work is important to achieve success."
    },
    {
        id: uuidv4(),
        username: "payel", 
        content: "I am Payel queen!. I got selected into Google as a LLM engineer."
    },
    {
        id: uuidv4(),
        username: "queen", 
        content: "I am the queen!"
    },
];

// -------------------------------------------
//          posts (index.ejs) first api

app.get("/posts", (req, res)=>{
    res.render('index.ejs', {posts});
});



//-----------------------------------------------
//          Create Route: POST (new.ejs) second api          

/*
we need two routes
    > Serve the form            GET         /posts/new
    > Add the new post          POST        /posts

*/


app.get("/posts/new", (req, res) => {
    res.render("new.ejs")
});


//getting data from by post req. 
app.post("/posts", (req, res) => {
    // console.log(req.body);
    let {username, content} = req.body;
    //generate newid
    let id = uuidv4();
    //adding new post content to posts array.
    posts.push({id, username, content});
    //redirecting to the main page(all posts page)
    res.redirect("/posts");
});

//------------------------------------------------
//      Implement GET /posts/:id  (show.ejs) third api

/*
        show route
GET     /posts/:id      to get one posts(using id)

*/        

app.get("/posts/:id", (req, res) => {
   let {id} = req.params;
   //console.log(id);
   //using find function to find exact data of the post using id
   let post = posts.find((p) => id === p.id);
//    console.log(post);
   
   res.render("show.ejs", {post}); 
});


//-----------------------------------------------------
//          Creating IDs UUID
/*
Automatic IDs creation.
UUID Package
Universally unique identifier
installation: npm install uuid


The code is in second api
*/


//----------------------------------------

/*
        Implement: PATCH/posts/:id    inside fourth api

Update Route

PATCH       /posts/:id      to update specific post


We can also use PUT

Fourth api details is given below

*/

app.patch("/posts/:id", (req, res) => {
    let {id} = req.params;
    let newContent = req.body.content; 
    // console.log(newContent);
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    // console.log(post);
    res.redirect("/posts");
    
});


//-----------------------------------------------------------
/*
                Create Form for Update (edit.ejs) fourth api

Edit Route

Serve the edit form         GET         /posts/:id/edit


*/


app.get("/posts/:id/edit", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", {post});
});


//---------------------------------------------------
/**
 *      Implement: /post/:id
Destroy Route

DELETE      /posts/:id      to delete specific post


 */

app.delete("/posts/:id", (req, res) => {
    let {id} = req.params;
    posts = posts.filter((p) => id != p.id);
    // res.send("delete success");
    res.redirect("/posts");
});




app.listen(port, ()=>{
    console.log(`Listening from port ${port}`);
});

