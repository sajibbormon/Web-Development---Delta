/**
 * What do middlewares do?
 
Middleware functions can perform the following tasks:

> Execute any code.

> Make changes to the request and the response objects.

> End the request-response cycle.

> Call the next middleware function in the stack.



More info in: https://expressjs.com/en/guide/using-middleware.html

we can use app.use() and app.METHOD() functions for middleware.


app.use(): Mounts the specified middleware function or functions at the specified path: the 
middleware function is executed when the base of the requested path matches path.


if path is specified then work on that path, if not specified work for all paths.


output for the below code:


app.use(()=>{
    console.log("Hi, I am middlware");
})

app.get("/", (req, res)=>{
    res.send("Hello, this is root.");
});

app.get("/random", (req, res)=>{
    res.send("Hi, I am random");
});

app.listen(8080,  ()=>{
    console.log("Listening to port 8080");
});



if we open the root page: localhost:8080/

It will print on console >  Hi, I am middlware.

and it will keep loading and will not not go to the page Hello, this is root.

Bcz the  middleware doesn't know where to go after printing on console > Hi, I am middleware.

we need to give next() function to move to next middleware or operation.


But if we write the below code:

app.use((req, res, next)=>{
    console.log("Hi, I am middlware");
    next();
});

this time it will not keep loading..

then it will go next middleware or operations.  to
bcz next() function helps to move to next middleware or operation.



a middleware can do two things

                        Middleware
                      /           \
                     /             \ 
                 response         next middleware or next operation     





app.use((req, res, next)=>{
    console.log("Hi, I am middlware");
    res.send("Middlware finished");
});

it will print on console > Hi, I am middleware.

and also it will open a page with response > Middleware finnished

this time it will not keep loading.. and also it will not go to next middleware or operation to perform.


we can also req and res. Suppose we send query.

app.use((req, res, next)=>{
    let {query} = req.query;
    console.log(query);
    console.log("Hi, I am middlware");
    next();
});

http://localhost:8080/?query=abcd

it will print that query on console > abcd







 */