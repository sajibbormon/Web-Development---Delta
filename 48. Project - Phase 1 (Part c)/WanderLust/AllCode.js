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









*************************************************************************************************** 
                                    
                                            Phase 1 (Part c)

*************************************************************************************************** 


** Client-Side Validation  (Form)
---------------------------------------------------------------------------------------------------

Form validation: When we enter data in form, the  browser  and/or the web server will check  to see 
that the data is in the correctt format and within the constraints set by the application.

While user is entering(or giving input) the data, it will validate first if the user is entering
correct format of data.
example: required number but given string, field can not be empty etc.


There are two types of validations:
1. client -----> it will get data from front-end.  We can use form validation for this.

2. server -----> Database (Schema) / others errors

The form that we use to take input of a user, we can use form validation on that form to check if 
a data is in correct format and given or not. 


If user must give any input then we can set it 'required'.
We can write 'required' in  input tag.

            <input type="text" name="listing[title]" 
                   placeholder="enter title" 
                   class="form-control"
                   required
            >

Now, if any user leave this title field empty then it will show Message according to fill this.
This message  could be different depending on browers.
In chrome: Please fill out this field.



Custom styling of bootstrap:  https://getbootstrap.com/docs/5.3/forms/validation/
----------------------------

The form should be like below:
<form class="needs-validation" novalidate>

and each input/textarea/select will have div with class valid-feedback or invalid-feedback
    <div class="valid-feedback">
      Looks good!
    </div>

      <div class="invalid-feedback">
        Please choose a username.
      </div>


We also have to need a JavaScript logic for form validation styling using bootstrap.

Inside public folder create another directory 'js' and create  a file inside 'js' folder 'script.js'
This script.js will contain logic for form validation.

code:

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()





** Success & Failure Text
---------------------------------------------------------------------------------------------------
If we want to show messages depending  on success or failure text then  we create a div  
of class valid-feedback or invalid-feedback.

    <div class="valid-feedback">
      Looks good!
    </div>

      <div class="invalid-feedback">
        Please choose a username.
      </div>

Now this code is added to new.ejs and edit.ejs

And add the script in boilerplate




** Custom Error Hanlding
---------------------------------------------------------------------------------------------------

Now move to server side handling. If any user directly call the api and send the post  or edit 
request then there could occur errors. As a result, we need server side error handling.


To handle error we need to define a middleware.

app.use((err, req, res, next)=>{
    res.send("Something went wrong");
})






** Add wrapAsync
---------------------------------------------------------------------------------------------------
For  all Async functions we can use wrapAsync.
Firt of all, create a folder call 'utils'. (we will keep extra codes(errors, wrapAsync etc.))
Inside this folder,  create a file 'wrapAsync.js'

module.exports = (fn)=> {
    return (req, res, next) => {
        fn(req, res, next).catch(next);
    }
}


Now require this in app.js and use it.


** Add ExpressError
---------------------------------------------------------------------------------------------------

Now add a custom error file.
Inside utils folder create a file, ExpressError.js

class ExpressError extends Error{
    constructor(statusCode, message){
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}

module.exports = ExpressError;


Now require this in app.js

redefine the middleware.
app.use((err, req, res, next)=>{
    let {statusCode, message} = err;
    res.status(statusCode).send(message);
});

now if we want to show error where a page doesn't exists then we use the below code:

app.all("*", (req, res, next)=>{
    next(new ExpressError(404, "Page Not Found!"));    
});

If uppder code doesn't work then use below code.

app.use((req, res, next)=>{
    next(new ExpressError(404, "Page Not Found!"));    
});


add the below code in post and update

    if(!req.body){
        throw new ExpressError(400, "Send valid data for listing...");
    }

this will send error message if client entered any wrong information.




** Error.ejs
---------------------------------------------------------------------------------------------------

Now create a error.ejs inside views folder.

code:
<% layout("/layouts/boilerplate") %>

<div class="alert alert-danger col-6 offset-3" role="alert">
  A simple danger alert—check it out!
</div>



now instead of sending a response we can render the error.ejs in our error handler 
middleware.

    res.status(statusCode).render("error.ejs", {message} );




** Validation for Schema
---------------------------------------------------------------------------------------------------

Now if we send data from hoppscotch by calling the route.
Let's suppose, we send only title, price and location, but we miss the description and 
country then it will store data in the database. But it should not store the data
as we are sending  imcomplete data.

So we need to handle the validation schema for handling this type of errors.

To handle this we can check for each field of data.
suppose description is missing then,

if(!newListing.description){
    throw new ExpressError(400, "Description is missing!");
}


what if we have lots of fields of data in our database, then we need to think a 
well structured approach to solve this.

We can use joi.dev tools to solve this issue: https://joi.dev

First of all install the Joi
npm install joi

Now define the schema using Joi

*This schema is for server side validation schema not mongoose schema

now create a file in Wanderlust folder 'schema.js'

const Joi = require('joi');

module.exports.listingSchema = Joi.object({
    listing : Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        image: Joi.string().allow("", null),
        price: Joi.number().min(0).required(),
        location: Joi.string().required(),
        country: Joi.string().required(),
    }).required()
});


now in create route add this to handle individual fields
    
    let result = listingSchema.validate(req.body);
    console.log(result);
    if(result.error){
        throw new ExpressError(400, result.error.message);
    }




** Validation  for Schema (Middleware)
---------------------------------------------------------------------------------------------------

We can convert this validation for schema to a middleware form.

We will convert all these into a function format.

const validateListing = (req, res, next) =>{
    let {error} = listingSchema.validate(req.body);
    console.log(result);
    if(error){
        throw new ExpressError(400, result.error.message);
    }else{
        next();    
    } 
}


if any error occur then we will catch it and throw the error otherwise we will move to next



 */