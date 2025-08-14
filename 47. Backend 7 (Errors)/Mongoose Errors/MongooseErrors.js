/** 
Mongoose Errors
----------------

there could be multple errors  that occurs in MongoDB.
example: validation error, cast error etc.

to handle a error we use custom function to  handle the error.

let's see how to handle validation error


const handleValidationErr = (err) =>{
    console.log("Validation error occurred");
    return err;    
}

//middleware to handle error
app.use((err, req, res, next)=>{
    console.log(err.name);
    if(err.name == "ValidationError"){
        err = handleValidationErr(err);
    }    
    next(err);    
});


*/