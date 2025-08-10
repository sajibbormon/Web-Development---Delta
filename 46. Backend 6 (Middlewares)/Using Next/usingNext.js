/**
 * Using next()
---------------
The next middleware function is commonly denoted by a variable named next.

app.use((req, res, next)=>{
    console.log("Time", Date.now());
    next();    
});

If the current middleware function does not end the request-response cycle, it must call next()
to pass control to the next middleware function.


Middleware:
1. Application-level middleware
    app.use()

2. Router-level middleware
    router.use()

3. Error-handling middleware
     app.use((err, req, res, next)=>{...});
     
4. Built-in middleware
    express.static()
    express.json()
    express.urlencoded()

5. Third-party middleware



more on: https://blog.bitsrc.io/5-express-middleware-libraries-every-developer-should-know-94e2728f7503

5 Express Middleware Libraries Every Developer Should Know


1. Helmet — Increase HTTP Header Security

2. Cookie-parser — Parse Cookies
   Cookie-parser is a middleware that transfers cookies with client requests.

3. Passport — Access to Wide Range of Authentication Mechanisms

4. Morgan— Log HTTP Requests and Errors

5. CORS — Allow or Restrict Requested Resources on a Web Server


More on: https://expressjs-libraries.hashnode.dev/boost-your-express-apps-5-essential-middleware-libraries-you-cant-ignore



app.use((req, res, next)=>{
    console.log("this is a middlware");
    next();
    console.log("this is after middleware");    
});

both of the console will work. we do not directly jump to next middleware or operation.

if we do not want to run anything after next() function we use 'return next()' instead of 'next()'






*/