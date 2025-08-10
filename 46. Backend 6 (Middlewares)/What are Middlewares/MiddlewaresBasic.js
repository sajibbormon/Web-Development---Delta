/**
 * Middleware
--------------------------

It is an intermediary

Request ---------------------------------> Middleware ----------------------------------->  Response


in Express:
Middleware in Express are functions that come into play after the server receives the request and
before the response is sent to the client.



Common Middleware functions:

> methodOverride  (to change get or post to PUT and DELETE)

> bodyParser (to parse the data to format it in understandable for js)

> express.static (serve static files to client/frontend based on request)

> express.urlencoded (to  access request data)


app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, "/public"))) //(generally to access public folder)



Middlewares Properties:

1) req, res object (can access them)

2) Chaining (calliing one middleware function to anther middleware function)

3) send a response


middleware1 -------------------> middleware2 -------------------> middlware3
              calling antoher                  calling antoher  



 */