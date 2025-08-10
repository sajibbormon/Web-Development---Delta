// getting-started.js
const mongoose = require('mongoose');

main().then(res=>{
    console.log("connection successfull");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, //can not be empty
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: [100, "Price is too low for selling"],    
        // at least the min value will be 1, if given below 1 then it will throw err.
        // defining the custom error message.
    },
    discount: {
        type: Number,
        default: 0, //if not given by default it will store 0
    },
    category: {
        type: String,
        enum: ["finction", "non-fiction"], //it must be fiction or non-fiction otherwise it will give error.
    },
    genre:[String], //store array of String in this code(any given data type array)

});

const Book = mongoose.model("Book", bookSchema);

// let book1 = new Book({
//     title: "Marvel Comics v3",
//     author: "Unknown",
//     price: 800,
//     discount: 5,
//     category: "finction", //it must be fiction or non-fiction otherwise it will give error.
//     genre: ["comics", "superheros", "science-fiction", "fiction"],

// });

// book1.save().then(res=>{
//     console.log(res);
// }).catch(err=>{
//     console.log(err);
// });


Book.findByIdAndUpdate("689183a7b22c50bfdc979ea9", {price: -100}, {runValidators: true})
.then(res=>{
    console.log(res);    
}).catch(err=>{
    console.log(err.errors.price.properties.message);    
});