/**
 * Custom Error Handling
--------------------------

In custom error we want to send the code of the error and message.

class ExpressError extends Error{
    constructor(status, message){
        super();
        this.status = status;
        this.message = message;
    }
}

client Error Responses: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status#client_error_responses

400  Bad Request

401  Unauthorized : client  need authenticate itself.

402 Payment Required

403 Forbidden: The client doesn't have access rights to the content. (authorized but can not access)

404 Not Found: The server can not find the requested resources.(Maybe the end point is valid but the
resource doesn't exists. Also server  may use 403 to hide the existence of a resources from an
unathorized client)



server error responses: https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status#server_error_responses 

500 Internal Server Error: Encounter a situation where the server doesn't know how to handle the request.

502 Bad Gateway: Got an invalid response.

503 Service Unavailable: The server is not ready to handle the request or down for maintenance.

504 Gateway Timeout: Cannot get response in time.


Let's create a custom ExpressError class. To do this create a file ExpressError.js

now write the below code:

class ExpressError extends Error{
    constructor(status, message){
        super();
        this.status = status;
        this.message = message;
    }
}

module.exports = ExpressError;

now come back index.js file

first require the ExpressError

code:

    const ExpressError = require("./ExpressError");

after requiring now write code:

const checkToken = (req, res, next)=>{
    let {token} = req.query;
    if(token === "giveaccess"){
        next();
    }
    throw new ExpressError(401, "Access Denied!");
}

app.get("/api", checkToken, (req, res)=>{
    res.send("data");
});


now type in browser:
http://localhost:8080/api?token=giveaccess

it will not give any error as token === giveacess

now create an error

http://localhost:8080/api?token=giveaccess2

it will generate error as we have given 
new ExpressError(401, "Access Denied!");
output: Access Denied!
and status code is 401

Error: Access Denied!
    at checkToken (E:\Sigma 5.0\Web Development\47. Backend 7 (Errors)\Custom Error Class\index.js:10:11)
    at Layer.handleRequest (E:\Sigma 5.0\Web Development\47. Backend 7 (Errors)\Custom Error Class\node_modules\router\lib\layer.js:152:17)
    at next (E:\Sigma 5.0\Web Development\47. Backend 7 (Errors)\Custom Error Class\node_modules\router\lib\route.js:157:13)
    at Route.dispatch (E:\Sigma 5.0\Web Development\47. Backend 7 (Errors)\Custom Error Class\node_modules\router\lib\route.js:117:3)
    at handle (E:\Sigma 5.0\Web Development\47. Backend 7 (Errors)\Custom Error Class\node_modules\router\index.js:435:11)
    at Layer.handleRequest (E:\Sigma 5.0\Web Development\47. Backend 7 (Errors)\Custom Error Class\node_modules\router\lib\layer.js:152:17)
    at E:\Sigma 5.0\Web Development\47. Backend 7 (Errors)\Custom Error Class\node_modules\router\index.js:295:15
    at processParams (E:\Sigma 5.0\Web Development\47. Backend 7 (Errors)\Custom Error Class\node_modules\router\index.js:582:12)
    at next (E:\Sigma 5.0\Web Development\47. Backend 7 (Errors)\Custom Error Class\node_modules\router\index.js:291:5)
    at Function.handle (E:\Sigma 5.0\Web Development\47. Backend 7 (Errors)\Custom Error Class\node_modules\router\index.js:186:3)



if we give ExpressError(500, "Can not access!");
then it will give
output: Can not access!
and status code is 500

Error: Access Denied!
    at checkToken (E:\Sigma 5.0\Web Development\47. Backend 7 (Errors)\Custom Error Class\index.js:10:11)
    at Layer.handleRequest (E:\Sigma 5.0\Web Development\47. Backend 7 (Errors)\Custom Error Class\node_modules\router\lib\layer.js:152:17)
    at next (E:\Sigma 5.0\Web Development\47. Backend 7 (Errors)\Custom Error Class\node_modules\router\lib\route.js:157:13)
    at Route.dispatch (E:\Sigma 5.0\Web Development\47. Backend 7 (Errors)\Custom Error Class\node_modules\router\lib\route.js:117:3)
    at handle (E:\Sigma 5.0\Web Development\47. Backend 7 (Errors)\Custom Error Class\node_modules\router\index.js:435:11)
    at Layer.handleRequest (E:\Sigma 5.0\Web Development\47. Backend 7 (Errors)\Custom Error Class\node_modules\router\lib\layer.js:152:17)
    at E:\Sigma 5.0\Web Development\47. Backend 7 (Errors)\Custom Error Class\node_modules\router\index.js:295:15
    at processParams (E:\Sigma 5.0\Web Development\47. Backend 7 (Errors)\Custom Error Class\node_modules\router\index.js:582:12)
    at next (E:\Sigma 5.0\Web Development\47. Backend 7 (Errors)\Custom Error Class\node_modules\router\index.js:291:5)
    at Function.handle (E:\Sigma 5.0\Web Development\47. Backend 7 (Errors)\Custom Error Class\node_modules\router\index.js:186:3)




So, based on our custom error as we have set it is giving the custom error.



Much more:
If we write a error handler middleware below
code:

app.use((err, req, res, next)=>{
    console.log("---------Error-----------");
    res.send(err);
});

now it will print:

{"status":401,"message":"Access Denied!"}

bcz we have send a response of the error (status code 401 and a message: "Access Denied!"), which 
is an object with two values.


*/