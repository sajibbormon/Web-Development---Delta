/**
 * Schema Validations
----------------------
Basically, Rules for Schema

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
    },
});


const Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
    title: "Mathematics XII",
    author: "RD Sharma",
    price: 1200
});

book1.save().then(res =>{
    console.log(res);
}).catch(err =>{
    console.log(err);    
})

Schema Validation is similar like constraints in SQL.


All Schema Types:
--------------------------------------------------------------

1. required: boolean or function, if true adds a required validator for this property. (can not be null)

2. default: Any or function, sets a default value for the path. If the value is a function, 
the return value of the function is used as the default.

3. select: boolean, specifies default projections for queries

4. validate: function, adds a validator function for this property

5. get: function, defines a custom getter for this property using Object.defineProperty().

6. set: function, defines a custom setter for this property using Object.defineProperty().

7. alias: string, mongoose >= 4.10.0 only. Defines a virtual with the given name that gets/sets 
this path.

8. immutable: boolean, defines path as immutable. Mongoose prevents you from changing immutable 
paths unless the parent document has isNew: true.

9. transform: function, Mongoose calls this function when you call Document#toJSON() function, 
including when you JSON.stringify() a document.



More in : https://mongoosejs.com/docs/schematypes.html

example of required, enum, default, genre, min is shown in book.js




Validation in Updation & Errors
----------------------------------------------------------------------------

Now if we update any value it will not follow the rules/Contraints of the Schema.

let's suppose book min price is 1, but we have updated it -500, it will not give error while updating.

**So all rulres/constraints will work only while inserting values.


But if we want that the rules will  work  on updation too, then we have to use 'options.runValidators'
in 'findByIdAndUpdate()' function.


Book.findByIdAndUpdate("id", {price: -100}, {runValidators: true})
.then(res=>{
    console.log(res);    
}).catch(err=>{
    console.log(err);    
});



How to Handle Errors (Custom Error)
------------------------------------------------------------------------

we have to define the error message inside the schema.

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Can not be a empty field"],
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: [1, "You have chosen less than 1. Price should be positive and at least 1."],    
    }
});



To print only the message of error:

.catch(err=>{
    console.log(err.errors.price.properties.message);    
});



*/