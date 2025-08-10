/**
 * Instagram EJS
------------------
Create a basic template for instagram page based on following route:

/ig/:username


require the data from server using require:

    const instaData = require("./data.json");

we have received it as object.

now we can access specific username data

    let {username} = req.params;

    let data = instaData[username]; the username that exists in instaData will be redirect to the page


---------------------------------------------------------------------------

Serving Static Files
--------------------
by default the files stored in folder_name will be accessable for ejs file.
app.use(express.static("/folder_name"));

directly using and setting the path:
app.use(express.static(path.join(__dirname, "/public")));


we can access specific files using app.use of a particular folder.

generally by default the folder/directory name is 'public'. (similar like views directory)


we can server multiples directories:

app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));



---------------------------------------------------------------
Includes
---------
Includes is a process of creating subtemplate.

We also call it partial bcz we use a partial or portion of code/template.

<%- include("includes/head.ejs"); %>


From website: 

Includes are relative to the template with the include call. (This requires the 'filename' option.) For example if you have "./views/users.ejs" and "./views/user/show.ejs" you would use <%- include('user/show'); %>.

You'll likely want to use the raw output tag (<%-) with your include to avoid double-escaping the HTML output.

<ul>
  <% users.forEach(function(user){ %>
    <%- include('user/show', {user: user}); %>
  <% }); %>
</ul>


Generally adding a portion of code that is defined in another files_name.ejs file.
If we want to resuse a portion of code in multiple files.


*/