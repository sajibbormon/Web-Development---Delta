/**
 * Query String
----------------
generally if search anything in google, then the format is www.google.com/search?q="yourSearchedQuery"
in yourSearchQuery means anything that we search in google.

in url there is 'q' which is called query and the search things is called string. 

how to handle query/search in node.js

we use 
app.get("/search", (req, res)=>{
    console.log(req.query);
});



 */