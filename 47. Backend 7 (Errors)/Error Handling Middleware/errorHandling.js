/**
 * Error Handling Middleware
-----------------------------

Firt let's know how a error handling Middleware works.

Error handling middleware

app.use((err, req, res, next)=>{
    console.log("----------- ERROR ---------------");
    next(err);    
});

from website: Define error-handling middleware functions in the same way as other middleware 
functions, except with four arguments instead of three, specifically with the 
signature (err, req, res, next):

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
});


the expressjs error handler send 500 status code by default if there is any error.



now:


app.get("/err", (req, res)=>{
    abc = abc;
});

app.use((err, req, res, next)=>{
    console.log("---------------Error---------------");
    next();
});

// app.use((req, res, next)=>{
//     res.status(404).send("Page not found!");

// });

now go to localhost:8080/err

it will say can not get. bcz the error handler middleware search for non-error handler middleware
if we call next(). but the path exist in our code.

but if we the below it.


app.get("/err", (req, res)=>{
    abc = abc;
});

app.use((err, req, res, next)=>{
    console.log("---------------Error---------------");
    next();
});

app.use((req, res, next)=>{
    res.status(404).send("Page not found!");

});


it will show the error Page not found! as a response bcz the next middleware is a non-error handler 
middleware.



but if we pass the err as a parameter, next middleware will receive this error.


app.get("/err", (req, res)=>{
    abc = abc;
});

app.use((err, req, res, next)=>{
    console.log("---------------Error---------------");
    next(err);
});

app.use((err, req, res, next)=>{
    console.log("------------- Error 2 -------------");
    next(err);
});


in page it will print the error:

ReferenceError: abc is not defined
    at E:\Sigma 5.0\Web Development\47. Backend 7 (Errors)\Error Handling Middleware\index.js:7:5
    at Layer.handleRequest (E:\Sigma 5.0\Web Development\47. Backend 7 (Errors)\Error Handling Middleware\node_modules\router\lib\layer.js:152:17)
    at next (E:\Sigma 5.0\Web Development\47. Backend 7 (Errors)\Error Handling Middleware\node_modules\router\lib\route.js:157:13)
    at Route.dispatch (E:\Sigma 5.0\Web Development\47. Backend 7 (Errors)\Error Handling Middleware\node_modules\router\lib\route.js:117:3)
    at handle (E:\Sigma 5.0\Web Development\47. Backend 7 (Errors)\Error Handling Middleware\node_modules\router\index.js:435:11)
    at Layer.handleRequest (E:\Sigma 5.0\Web Development\47. Backend 7 (Errors)\Error Handling Middleware\node_modules\router\lib\layer.js:152:17)
    at E:\Sigma 5.0\Web Development\47. Backend 7 (Errors)\Error Handling Middleware\node_modules\router\index.js:295:15
    at processParams (E:\Sigma 5.0\Web Development\47. Backend 7 (Errors)\Error Handling Middleware\node_modules\router\index.js:582:12)
    at next (E:\Sigma 5.0\Web Development\47. Backend 7 (Errors)\Error Handling Middleware\node_modules\router\index.js:291:5)
    at Function.handle (E:\Sigma 5.0\Web Development\47. Backend 7 (Errors)\Error Handling Middleware\node_modules\router\index.js:186:3)



in console it will print:

Listening to port 8080
---------------Error---------------
---------------Error 2---------------
ReferenceError: abc is not defined
    at E:\Sigma 5.0\Web Development\47. Backend 7 (Errors)\Error Handling Middleware\index.js:7:5
    at Layer.handleRequest (E:\Sigma 5.0\Web Development\47. Backend 7 (Errors)\Error Handling Middleware\node_modules\router\lib\layer.js:152:17)


** When we want call error handler middleware we pass 'next(err);'
** When we want to call non-error handler middleware we 'pass next();'




*/