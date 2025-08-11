/**
 * Handling Errors
---------------------
Express Default Error Handler

development stage-----------------> production(when user use it)

> Syntax error (fixed in develpment stage)

Others: 
Database fail, server side etc.




app.get("/wrong", (req, res)=>{
  abcd = abcd;  
});

as abcd is defined it will give error

ReferenceError: abcd is not defined
    at E:\Sigma 5.0\Web Development\46. Backend 6 (Middlewares)\Error Handling Express Default\index.js:17:3
    at Layer.handleRequest (E:\Sigma 5.0\Web Development\46. Backend 6 (Middlewares)\Error Handling Express Default\node_modules\router\lib\layer.js:152:17)
    at next (E:\Sigma 5.0\Web Development\46. Backend 6 (Middlewares)\Error Handling Express Default\node_modules\router\lib\route.js:157:13)
    at Route.dispatch (E:\Sigma 5.0\Web Development\46. Backend 6 (Middlewares)\Error Handling Express Default\node_modules\router\lib\route.js:117:3)
    at handle (E:\Sigma 5.0\Web Development\46. Backend 6 (Middlewares)\Error Handling Express Default\node_modules\router\index.js:435:11)
    at Layer.handleRequest (E:\Sigma 5.0\Web Development\46. Backend 6 (Middlewares)\Error Handling Express Default\node_modules\router\lib\layer.js:152:17)
    at E:\Sigma 5.0\Web Development\46. Backend 6 (Middlewares)\Error Handling Express Default\node_modules\router\index.js:295:15
    at processParams (E:\Sigma 5.0\Web Development\46. Backend 6 (Middlewares)\Error Handling Express Default\node_modules\router\index.js:582:12)
    at next (E:\Sigma 5.0\Web Development\46. Backend 6 (Middlewares)\Error Handling Express Default\node_modules\router\index.js:291:5)
    at Function.handle (E:\Sigma 5.0\Web Development\46. Backend 6 (Middlewares)\Error Handling Express Default\node_modules\router\index.js:186:3)


check it on hoppscotch.io

500: internal server error.


more details on: https://expressjs.com/en/guide/error-handling.html

this error seems long and not visually good. so we can send our custom error.

We will study about error handling in next section.

 */