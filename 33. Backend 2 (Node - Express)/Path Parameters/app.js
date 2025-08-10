/**
 * Path Parameters
-------------------
In Express.js, path parameters, also known as route parameters, are named segments of a URL that capture dynamic
values. These values are extracted from the URL and made available to your route handlers, allowing you to create 
flexible and reusable routes.

path parameter is defined by colon (:)
example:
localhost:8080/:userId

the userId is a variable/parameter. 

the values captured by path parameters are stored in the 'req.params'

app.get('/users/:userId', (req, res) => {
    const userId = req.params.userId; // Access the 'userId' parameter
    //another way to access
    let {username} = req.params;
    console.log(`User ID: ${userId}`);
    res.send(`Details for user with ID: ${userId}`);
});


 */