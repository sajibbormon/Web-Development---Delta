/**
*************************************************************************************************** 
                                    
                                            Phase 1 (Part a)

*************************************************************************************************** 
In this part we are doing
* Database Set Up
* REST APIs for CRUD



** Basic Setup
-----------------------------------------------------------------------------------------------------------
npm init -y
npm i express
npm i ejs
npm i mongoose
npm i method-override

create a js file: app.js-> touch app.js

We are naming the database: wanderlust


const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const path = require("path");


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

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
})

app.listen(8080, ()=>{
    console.log("Listening to localhost 8080");
})




** Listing  Model
-----------------------------------------------------------------------------------------------------------

Model: Listing-> place (list of things(apartment, flat, house, villa, hotel) basic info(title, description..etc.))

all the columns: 
> title ---------------> String

> description ---------> String

> image(URL of image) -> String

> price ---------------> Number

> location ------------> String

> country -------------> String

In models folder, we will create listing.js where we will declare Schema of all columns.


for giving the default value of image url we will use set method.

we want set the value of url of image field. To set the value we will write an arrow function.

set: (v) => v==""? link : v

v is the image value
if v is empty then we will assign link otherwise remain original value v.

We are using Ternary operator.
code: 

const mongoose = require("mongoose");
const { title } = require("process");
const Schema = mongoose.Schema;
const defaultLink = "https://images.unsplash.com/photo-1688653802629-5360086bf632?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";


const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: defaultLink,
        set: (v) => v === "" ? defaultLink : v,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;




** Sample Data for DB
-----------------------------------------------------------------------------------------------------------
Link of the sample data: https://github.com/apna-college/wanderlust/blob/main/init/data.js

download the file. And create a folder 'init' and paste the data.js into init folder.

now crete another file index.js inside init. In this file, we are going to write all initialization
code for the dataset.


** Initialize Database
-----------------------------------------------------------------------------------------------------------

In init folder write code for initialization: 
index.js:

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listings.js");


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


const initDB = async () =>{
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("data was initialized...");
}

initDB();

now run it for one time by using -> node index.js





** Index Route
-----------------------------------------------------------------------------------------------------------

GET             /listings           -------> return all listings of hotels.

GET             /listings/:id  (show route)-----> show specific listing's information (to view a specific hotel)

now create a views folder.
then create another folder inside views folder naming listings bcz all listings related views will 
be saved on listings folder. for user we will create another one.

now we need ejs to render.
now set the views path and view engine.


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));


for specific hotel view.


continue to show route.




** READ(Show Route)
-----------------------------------------------------------------------------------------------------------

GET             /listings/:id  (show route)-----> show specific listing's information (to view a specific hotel)

To show a spefic hotel informations.


now create app.get in app.js to get specific id's information.

app.get("/listings/:id", async (req, res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", {listing});
})


Code of show.ejs:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WanderLust</title>
</head>
<body>
    <h3>Listing Details: </h3>
    <ul>
        <li><%= listing.title %></li>
        <li><%= listing.description %></li>
        <li>&#8377;<%= listing.price.toLocaleString("en-IN") %></li>
        <li><%= listing.location %></li>
        <li><%= listing.country %></li>
        <!-- <li><%= listing.image %></li> -->
    </ul>
</body>
</html>





** CREATE (New & Create Route)
-----------------------------------------------------------------------------------------------------------

Create: New & Create Route

GET             /listings/new           ----> form to get new List data

after submitting

POST            /listings                ----> add to database and show all hotels in /listings

// New Route
app.get("/listings/new", (req, res)=>{
    res.render("listings/new.ejs");
});

** this should be placed/delcared before app.get("/listings/:id").
Otherwise it will take 'new' as an id and search the id.


now to accept all information from new listing

// Create Route

app.post("/listings", async(req, res)=>{
    // let { title, description, image, price, location, country } = req.body;
    // let newListing = req.body.listing;
    // console.log(newListing);

    let newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");

});



** UPDATE (Edit & Update Route)
-----------------------------------------------------------------------------------------------------------

GET             /listings/:id/edit          -----> edit form 

when form is submitted.

PUT             /listings/:id               ------> Submit



create an anchor tag in show.ejs.


now in app.js we will create a app.post() that will redirect to the edit page


app.get("/listings/:id/edit", async (req, res)=>{
    let {id}  = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", {listing});
});


view edit.ejs to for edit.ejs code.

now update route.

Listing.findByIdAndUpdate(id, {...req.body.listing})
we are passing and object{...req.body.listing} by deconstructing the req.body 

req.body.listing this object has all parameters. by deconstructing ... we are converting it into
individual parameters.

app.put("/listings/:id", async(req, res)=>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id, {...req.body.listing});
    res.redirect(`/listings/${id}`);
});

we have use res.redirect(`listings/${id}`) to redirect to the show.ejs 

** DELETE (Delete Route)
-----------------------------------------------------------------------------------------------------------

DELETE          /listings/:id           ---> delete that listing which matches the id.

Create a form in show.ejs
    <form method="post" action="/listings/<%=listing.id%>?_method=DELETE">
        <button>Delete this listing</button>
    </form>

app.delete("/listings/:id", async(req, res)=>{
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
});










*************************************************************************************************** 
                                    
                                            Phase 1 (Part b)

*************************************************************************************************** 


** Creating Boilerplate
-----------------------------------------------------------------------------------------------------------

First of all we will install a package of npm.

EJS Mate:
A package for writting ejs template with less effort and better way by creating layout.

Installation command: npm install ejs-mate
now require this package.

const ejsMate = require("ejs-mate");

This package help us creating template and layout. Suppose navbar, footers are common in multiple
pages. We use 'includes'/'partials' for use same navebar, footer. And layout is also same concept. 
The ejs-mate make it more easy. 

now app.engine

app.engine('ejs', ejsMate);


now create a folder name 'layouts' inside views folder.

inside layouts create a ejs file name boilerplate.ejs

For now only to understand the concept (we will change with navbar and footer later)
boilerplate.ejs will be a common code for all pages(show.ejs, index.ejs, edit.ejs, new.ejs etc..)

boilerplate.ejs: 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WanderLust</title>
</head>
<body>
    <h1>WanderLust</h1>
    <div class="container"><%- body %></div>
</body>
</html>


we will use this layout in index.ejs

index.ejs:

<% layout("/layouts/boilerplate") %>
<body>
    <h3>All Listings: </h3>
    <form  method="GET" action="/listings/new">
        <button>Create New List</button>
    </form>    
    <ul>
        <% for(let listing of allListings){ %>
        <li> <a href="/listings/<%= listing._id %>"> <%= listing.title %> </a> </li>
        <% } %>
    </ul>
</body>


Now we will create a 'public' folder to store css for style, js for logic files.

now create another folder name 'css' inside public folder. Inside css folder create style.css file.

link the sytle.css in boilerplate.



** Navbar
-----------------------------------------------------------------------------------------------------------

Create another folder in views naming 'includes'

in this includes we will create a file 'navbar.ejs'

copy  a simple navbar from bootstrap and paste the code in navbar.ejs






** Footer
-----------------------------------------------------------------------------------------------------------





** Styling Index
-----------------------------------------------------------------------------------------------------------






** Styling New Listings
-----------------------------------------------------------------------------------------------------------






** Styling Edit Listings
-----------------------------------------------------------------------------------------------------------






** Styling Show Listings
-----------------------------------------------------------------------------------------------------------







 */