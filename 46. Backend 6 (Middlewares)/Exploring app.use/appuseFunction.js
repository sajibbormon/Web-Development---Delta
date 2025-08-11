/*
*app.use Callback() 
--------------------
One or more callback functions. Accepted formats:
> A single middleware function.
> Multiple middleware functions separated by commas.
> An array of middleware functions.
> A combination of the above.


You may provide multiple callbacks that behave like middleware. These can call next('route') to 
skip remaining callbacks for the current route. This is useful for conditional routing logic.

If a callback throws an error or returns a rejected promise, next(err) is invoked automatically.


//path example


//for specific path
app.use("/random", (req, res, next)=>{
    console.log("I am only for random");
    next();
});

this middlware will run if we send request to that specified path.

http://localhost:8080/random

Listening to port 8080
I am only for random


** If we want our middleware work for all path then we can use root path in middleware.

//for root path
app.use("/", (req, res, next)=>{
    console.log("I am only for random");
    next();
});


more use:
Suppose, some path/route can be accessed only by authorized users. To do that we can use login
with the help of middleware.




// suppose a page that doesn't exists for that we can use middlware.
this should be written after all paths and middlewares.

//404
app.use((req, res)=>{
    res.send("Page not found");
});


also send the status.

app.use((req, res)=>{
    res.status(404).send("Page not found");    
});


*/