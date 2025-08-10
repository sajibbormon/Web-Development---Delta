const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();
const mysql = require('mysql2');
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuidv4 } = require('uuid');

app.set("view engine", "ejs");
app.set("views",path.join(__dirname, "/views" ));
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:true}));



let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(), // before version 9.1.0, use userName()
    faker.internet.email(),
    faker.internet.password()
  ];
}



// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: "LoveyouPayel#1M"
});

//inserting new data;

// let q = "INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)";
let user = ["123", "sajib", "sajib@mail.com", "sajib123"];

// try{
//   connection.query(q, user, (err, result) =>{
//     if(err) throw err;
//     console.log(result);
//   });
// } catch(err){
//   console.log(err);
// }


//inserting data in bulk
// let q = "INSERT INTO user (id, username, email, password) VALUES ?";
// let data = [];

// for(let i = 1; i<=100; i++){
//   data.push(getRandomUser());
// }


// try{
//   connection.query(q, [data], (err, result) =>{
//     if(err) throw err;
//     console.log(result);
//   });
// } catch(err){
//   console.log(err);
// }


// connection.end();




//                HOME PAGE              


// GET        /         Fetch & show total number of users on our app.

app.get("/", (req, res)=>{
  let q = `SELECT COUNT(*) FROM user`;
  try{
  connection.query(q, (err, result) =>{
    if(err) throw err;
    let usersCount = result[0]["COUNT(*)"];
    res.render("home.ejs", {usersCount});
  });
  } catch(err){
    console.log(err);
    res.send("some error in DB");
  }
});


//      SHOW ROUTE

app.get("/user", (req, res)=> {
  let q = `SELECT * FROM user`;
  try{
  connection.query(q, (err, users) =>{
    if(err) throw err;
    res.render("showUsers.ejs", {users});
  });
  } catch(err){
    console.log(err);
    res.send("some error in DB");
  }

});



//        Edit Route (edit Username)

app.get("/user/:id/edit", (req, res)=>{
  let {id} = req.params;
  let q = `SELECT * FROM user WHERE id = '${id}'`;
  try{
  connection.query(q, (err, result) =>{
    if(err) throw err;
    let user = result[0];
    res.render("edit.ejs", {user});
  });
  } catch(err){
    console.log(err);
    res.send("some error in DB");
  }
});


//          Update Route on DB (update based on edit)

app.patch("/user/:id", (req, res)=>{
  let {id} = req.params;
  // form pass
  let {password: formPass, username: newUsername} = req.body;

  let q = `SELECT * FROM user WHERE id = '${id}'`;
  try{
  connection.query(q, (err, result) =>{
    if(err) throw err;
    let user = result[0];
    if(formPass != user.password){
      res.send("Wrong Pass");
    }else
    {
      let q2 = `UPDATE user SET username = '${newUsername}' WHERE ID = '${id}'`;
      connection.query(q2, (err, result)=>{
        if(err) throw err;
        res.redirect("/user");
      });
    }

  });
  } catch(err){
    console.log(err);
    res.send("some error in DB");
  }
});

//        ADD (add new user)

app.get("/user/newUser", (req, res)=>{
  res.render("newUser.ejs");
});



app.post("/posts", (req, res)=>{
  let id = uuidv4();
  let {username, email, password} = req.body;
  let newUser = [id, username, email, password];
  let q = `INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)`;
  try{
  connection.query(q, newUser, (err, result) =>{
    if(err) throw err;
    res.redirect("/user");
  });
  } catch(err){
    console.log(err);
    res.send("some error in DB");
  }

});


//          Delete User

app.get("/user/:id/delete", (req, res)=>{
  let {id} = req.params;
  let q = `SELECT * FROM user WHERE id = '${id}'`;
  console.log(id);
  try{
  connection.query(q, (err, result) =>{
    if(err) throw err;
    let user = result[0];
    res.render("delete.ejs", {user});
  });
  } catch(err){
    console.log(err);
    res.send("some error in DB");
  }
});


app.delete("/user/:id", (req, res)=>{
  let {id} = req.params;
  let { email: formEmail, password: formPassword } = req.body;
  let q = `SELECT * FROM user WHERE id = '${id}'`;
  connection.query(q, (err, result)=>{
    if(err) throw err;
    let user = result[0];
    console.log(formPassword);
    console.log(user.password);
    if(formPassword != user.password){
      res.send("Wrong Password or email");
    }else if(formEmail != user.email){
      res.send("Wrong Email");
    }else{
      let q2 = `DELETE FROM user WHERE id = '${id}'`;
      connection.query(q2, (err, result)=>{
        if(err) throw err;
        res.redirect("/user");
      });
    }
  });
});

app.listen("8080", ()=>{
  console.log("server is listening to port 8080");
});