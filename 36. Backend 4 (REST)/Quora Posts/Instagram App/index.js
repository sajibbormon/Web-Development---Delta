const express = require("express");
const app = express();
const { v4: uuidv4 } = require('uuid');
const path = require("path");
const methodOverride = require("method-override");



app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride('_method'));



let port = 8080;



//data
let posts = [
    {
        id: uuidv4(),
        username: "cat1",
        image: "https://plus.unsplash.com/premium_photo-1677545182067-26ac518ef64f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        likes: 200,
        comments: 17
      },
      {
        id: uuidv4(),
        username: "cat2",
        image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        likes: 312,
        comments: 19
      },
      {
        id: uuidv4(),
        username: "cat3",
        image: "https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        likes: 1065,
        comments: 200
      },
      {
        id: uuidv4(),
        username: "dog1",
        image: "https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        likes: 3000,
        comments: 41
      },
      {
        id: uuidv4(),
        username: "dog2",
        image: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRvZ3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        likes: 2500,
        comments: 32
      },

];

//-----------------------------------------------------------

app.get("/posts", (req, res) => {
  res.render("index.ejs", {posts});
});



//-------------------------------------------------------------

//add new api. Create API

app.get("/posts/new",  (req, res) =>{
  res.render("new.ejs");
});

app.post("/posts", (req, res)=>{
  let id = uuidv4();
  let {username, image} = req.body;
  let comments = 0;
  let likes = 0;
  posts.push({id, username, image, likes, comments});
  res.redirect("/posts");
});
//----------------------------------------------------
//          Read Post

app.get("/posts/:id", (req, res)=>{
  let {id} = req.params;
  let post = posts.find((p) => id === p.id);
  // console.log(post);
  res.render("show.ejs", {post});
});


//-----------------------------------------------------------
//    Edit post. Update API

app.get("/posts/:id/edit", (req, res)=>{
  let {id} = req.params;
  // console.log(id);
  let post = posts.find((p) => id === p.id);
  res.render("edit.ejs", { post });
});


app.patch("/posts/:id", (req, res)=>{
  let {id} = req.params;
  let newImage = req.body.image;
  let post = posts.find((p) => id === p.id);
  post.image = newImage;
  res.redirect("/posts");
});

//--------------------------------------------------------
//            Delete

app.delete("/posts/:id", (req, res)=>{
  let {id} = req.params;
  posts = posts.filter((p) => id != p.id);
  res.redirect("/posts");
});

app.listen(port, ()=>{
    console.log(`Listening from port ${port}`);
});

//extra like increase

// app.patch("/posts/:id", (req, res) =>{
//   let {id} = req.params;

//   let post = posts.find((p) => id === p.id);

//   post.likes = post.likes+1;
//   res.redirect("/posts");
// }); 
