/**
 * Get & Post Requests
---------------------------
Get
----
> Used to GET some response

> Data sent in query strings (limited, string data & visible in URL)

> Used for getting any response.

we get data from req.query

Post
------
> Used to POST something (for Create/Write/Update)

> Data sent via request body (any type of data)

> Used for update the Database.

we fetch data through req.body

GET from Gemini:
GET requests are used to retrieve or fetch data from the server. They are designed for idempotent operations, 
meaning making the same GET request multiple times will have the same effect as making it once (it won't change 
data on the server).

Data Transmission:
Data in GET requests is typically sent as query parameters appended to the URL (e.g., /users?id=123). This makes 
them suitable for data that is not sensitive and can be easily shared or bookmarked.

Examples:
Retrieving a list of users, fetching a specific product's details, loading a webpage.


POST from Gemini:
POST requests are used to send data to the server, typically to create a new resource or submit information 
(e.g., form data, file uploads). POST requests are not idempotent as sending the same POST request multiple times 
might create multiple resources.

Data Transmission:
Data in POST requests is sent in the request body, not in the URL. This makes it suitable for sensitive data, 
large amounts of data, or binary data like file uploads.

Examples:
Submitting a registration form, creating a new user account, uploading an image.

Simple code:
    const express = require('express');
    const app = express();

    app.use(express.json()); // Middleware to parse JSON request bodies

    app.post('/users', (req, res) => {
        const newUser = req.body; // Access data from the request body
        // Logic to save the new user to a database
        console.log('New user created:', newUser);
        res.status(201).json({ message: 'User created successfully', user: newUser });
    });

    app.listen(3000, () => {
        console.log('Server listening on port 3000');
    });


You define a POST route using app.post(). You often need middleware like express.json() or body-parser to 
parse the request body.



----------------------------------------------------
Handling Post requests
-----------------------
We generally get data using request.body while using POST


> Set up POST request route to get some response

> Parse POST request data.

app.use(express.urlendcoded({extended: true}));
app.use(express.json());

We need to parse the request data bcz data is not on readable format.

To parse data we need middlewares. 

express.urlencoded({extended: true}); //this is a middleware

it only can read urlencoded data.

another middleware

express.json();

so, the lower two lines are essential for reading data in POST


app.use(express.urlencoded({extended: true}));
app.use(express.json());




*/