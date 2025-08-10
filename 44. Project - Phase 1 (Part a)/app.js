const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const path = require("path");
const Listing = require("./models/listings.js");

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}));

//connect with database: wanderlust

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
main()
.then(()=>{
    console.log("connection successful");
})
.catch(err=>{
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}


app.get("/", (req, res)=>{
    res.send("working");
});


//for testing the first db
// app.get("/testListing", async(req, res)=>{
//     let sampleListing = new Listing({
//         title: "My New Villa",
//         description: "By the beach",
//         price: 1200,
//         location: "Calangute, Goa",
//         country: "India",
//     });
//     await sampleListing.save().then((res)=>{
//         // console.log(res);
//         console.log("sample was saved...");
//     }).catch(err=>{
//         console.log(err);
//     });

//     res.send("successful testing");
// });


//index route

app.get("/listings", async (req, res)=>{
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings});
});

// New Route
app.get("/listings/new", (req, res)=>{
    res.render("listings/new.ejs");
});


// show route

app.get("/listings/:id", async (req, res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", {listing});
});

// Create Route (received from client form and create new list)

app.post("/listings", async(req, res)=>{
    // let { title, description, image, price, location, country } = req.body;
    // let newListing = req.body.listing;
    // console.log(newListing);

    let newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");

});


//Update (edit data)
app.get("/listings/:id/edit", async (req, res)=>{
    let {id}  = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", {listing});
});

//Update (update data)
app.put("/listings/:id", async(req, res)=>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id, {...req.body.listing});
    res.redirect(`/listings/${id}`);
});

// Delete (delete the listing)
app.delete("/listings/:id", async(req, res)=>{
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
});

app.listen(8080, ()=>{
    console.log("Listening to localhost 8080");
});