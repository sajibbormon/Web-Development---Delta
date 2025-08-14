/**
 * Default Status and Message
-------------------------------

Previously we have an object in our response. This time we will send status and message.

app.use((err, req, res, next)=>{
    let {status = 500, message = "SOME ERROR"} = err;
    res.status(status).send(message);    
});


now run localhost:8080/api?token=giveaccess

this time now error enoucounter, if we pass wrong key

localhost:8080/api?token=giveaccess2

then there will be an error.
output: Access Denied!

in console of browser: 
GET http://localhost:8080/api?token=giveaccess2 401 (Unauthorized)


More on error....

code of err route:
app.get("/err", (req, res)=>{
    abcd = abcd;
});

Now if we go to localhost:8080/err


it will generate the below error:

TypeError: Invalid status code: undefined. Status code must be an integer.
    at ServerResponse.status (E:\Sigma 5.0\Web Development\47. Backend 7 (Errors)\Default Status and Message\node_modules\express\lib\response.js:65:11)
    at E:\Sigma 5.0\Web Development\47. Backend 7 (Errors)\Default Status and Message\index.js:29:9
    at Layer.handleError (E:\Sigma 5.0\Web Development\47. Backend 7 (Errors)\Default Status and Message\node_modules\router\lib\layer.js:116:17)
    at trimPrefix (E:\Sigma 5.0\Web Development\47. Backend 7 (Errors)\Default Status and Message\node_modules\router\index.js:340:13)
    at E:\Sigma 5.0\Web Development\47. Backend 7 (Errors)\Default Status and Message\node_modules\router\index.js:297:9
    at processParams (E:\Sigma 5.0\Web Development\47. Backend 7 (Errors)\Default Status and Message\node_modules\router\index.js:582:12)
    at next (E:\Sigma 5.0\Web Development\47. Backend 7 (Errors)\Default Status and Message\node_modules\router\index.js:291:5)
    at next (E:\Sigma 5.0\Web Development\47. Backend 7 (Errors)\Default Status and Message\node_modules\router\lib\route.js:132:14)
    at Layer.handleRequest (E:\Sigma 5.0\Web Development\47. Backend 7 (Errors)\Default Status and Message\node_modules\router\lib\layer.js:165:5)
    at next (E:\Sigma 5.0\Web Development\47. Backend 7 (Errors)\Default Status and Message\node_modules\router\lib\route.js:157:13)


The express doesn't know about this error and the code is also undefined. 
The default error handler when an error occur it add the information to the response.

> The res.statusCode is set from err.status(or err.statusCode). If this value is outside the 4xx
  or 5xx range, it will be set to 500.
> The res.statusMessage is set according to the status code.


*** But when we use custom error handler, and whenever it encounter an unknown error it doesn't 
    throw the code 500 rather than set the status code as undefined.

To mitigate this we can pass any status code and simple message rather than undefined.

app.use((err, req, res, next)=>{
    let {status = 500, message = "SOME ERROR"} = err;
    res.status(status).send(message);    
});

Now by default we are setting it 500 and the message is "SOME ERROR"

output: 
abcd is not defined

in console of browser: err:1  GET http://localhost:8080/err 500 (Internal Server Error)


 */