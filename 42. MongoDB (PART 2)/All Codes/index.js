const mongoose = require('mongoose');

main()
.then((res) => {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

//model

const User = mongoose.model("User", userSchema); //converting into a collections
// const Employee = mongoose.model("Employee", userSchema); //converting into a collections


// const  user1  = new User({
//     name: "Adam",
//     email: "adam@mail.com", 
//     age: 48
// });


// user1.save();  //return a promise as it is asynchronous


// const  user2  = new User({
//     name: "Eve",
//     email: "eve@mail.com", 
//     age: 48
// });


//save with then

// user2.save().then((res) =>{
//     console.log(res);
// })
// .catch((err) =>{
//     console.log(err);
// });


//InsertMany


// User.insertMany([
//     {name: "Tony", email: "tony@mail.com", age: 50},
//     {name: "Bruce", email: "bruce@mail.com", age: 47},
//     {name: "Peter", email: "peter@mail.com", age: 30},
// ]).then((data)=>{
//     console.log(data);
// });

//show all
// User.find({}).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);    
// });


//show whose age is greater than 47
// User.find({age: {$gt: 47}}).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);    
// });


//if we want to print sinlge object not array whose age is greater than 48
// User.find({age: {$gt: 48}}).then((data)=>{
//     console.log(data[0]);
// }).catch((err)=>{
//     console.log(err);    
// });


//we want only name whose age is greater than 48
// User.find({age: {$gt: 48}}).then((data)=>{
//     console.log(data[0].name);
// }).catch((err)=>{
//     console.log(err);    
// });


//single user using  findOne() method. Returns the first one.

// User.findOne({age: {$gt: 48}}).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);    
// });



// search based on _id

// User.find({_id: "689024b2ebbafc60dc91cc80"}).then((data)=>{
//     console.log(data[0]);
// }).catch((err)=>{
//     console.log(err);    
// });


//there is another method which is frequently used: findById() //return object

// User.findById("689024b2ebbafc60dc91cc80").then((data)=>{
//     console.log(data);    
// }).catch((err)=>{
//     console.log(err);    
// });


//UpdateOne


// User.updateOne({name: "Bruce"}, {age: 49}).then((res)=>{
//     console.log(res);    
// }); 

// User.find({}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);    
// });




//Model.findOneAndUpdate()
//---------------------------

// Model.findOneAndUpdate({filter}, {updation}, {optioins})

// User.findOneAndUpdate({name: "Bruce"}, {age: 53}).then((res)=>{
//     console.log(res);    
// });

// it will print the old object but update will heappen in db if don't pass option new: true

User.findOneAndUpdate({name: "Bruce"}, {age: 53}, {new: true}).then((res)=>{
    console.log(res);    
}).catch((err)=>{
    console.log(err);    
});

// it will return the updated object.


//DELETE
//------------------------

User.deleteOne({name: "Bruce"}).then((res)=>{
    console.log(res);    
}).catch((err)=>{
    console.log(err);    
});


