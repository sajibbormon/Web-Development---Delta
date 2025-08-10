/*
Routing
--------
Routing in Node.js refers to the process of determining how an application responds to client requests to a 
particular endpoint, which is a combination of a URI (or path) and a specific HTTP request method (like GET, 
POST, PUT, DELETE). It essentially maps incoming requests to specific handler functions that process the request 
and send a response. 

Like we need to search then need to move to /search.
for home ---> /home
etc.

**Routing: It is a process of selecting a path for traffic in a network or between or across multiple networks.

we use app.get() and app.post



app.get("/apple", (req, res) =>{
    res.send({
        name: "apple",
        color: "red",
    });
});

we can only one response for a request.

only one / means it is the root/same path.

app.get("/",(req, res) =>{
    res.send("You cantacted root path");
});

app.get("/apple",(req, res) =>{
    res.send("You cantacted apple path");
});

app.get("/orange",(req, res) =>{
    res.send("You cantacted orange path");
});

now edit in localhost:8080/, localhost:8080/apple, localhost:8080/orange

If we give wrong path then output will be Cannot GET /mango and status will 404 not found
also we can manage this  using below code.

app.get("/*path", (req,res)=>{
    res.send("this path doesn't exit.");
});

/*path means all paths. 


app. get() is used to handle GET requests, typically for retrieving data from the server. app. post() is used 
to handle POST requests, commonly used for submitting data to the server.


app.post

app.post("/", (req, res) => {
    console.log("sent response from post...");
    res.send("you sent a post request to root");
});

*/
