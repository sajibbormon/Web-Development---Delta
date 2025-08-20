const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const path = require("path");
const Listing = require("./models/listings.js");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const { error } = require("console");
const {listingSchema} = require("./schema.js");



app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({extended:true}));
app.engine('ejs', ejsMate);


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


//validate schema middleware function
const validateListing = (req, res, next) =>{
    let {error} = listingSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el)=> el.message).join(",");
        throw new ExpressError(400, errMsg);
    }else{
        next();    
    } 
}


//index route

app.get("/listings", wrapAsync (async (req, res)=>{
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings});
}));

// New Route
app.get("/listings/new", (req, res)=>{
    res.render("listings/new.ejs");
});


// show route

app.get("/listings/:id", wrapAsync( async (req, res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", {listing});
}));

// Create Route (received from client form and create new list)

app.post("/listings", validateListing, wrapAsync (async(req, res)=>{

    let newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
    
}));


//Update (edit data)
app.get("/listings/:id/edit", wrapAsync( async (req, res)=>{
    listingSchema.validate(req.body);
    let {id}  = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", {listing});
}));

//Update (update data)
app.put("/listings/:id", validateListing, wrapAsync (async(req, res)=>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id, {...req.body.listing});
    res.redirect(`/listings/${id}`);
}));

// Delete (delete the listing)
app.delete("/listings/:id", wrapAsync ( async(req, res)=>{
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
}));


app.use((req, res, next)=>{
    next(new ExpressError(404, "Page Not Found!"));    
});

app.use((err, req, res, next)=>{
    // console.log(err);
    let {statusCode=500, message="Something went wrong!"} = err;
    // res.status(statusCode).send(message);
    res.status(statusCode).render("error.ejs", {message} );
});

app.listen(8080, ()=>{
    console.log("Listening to localhost 8080");
}); 