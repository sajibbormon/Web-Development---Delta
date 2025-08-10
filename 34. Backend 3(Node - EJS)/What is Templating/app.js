/**
 * What is Templating?
--------------------------
Templating in Express.js involves using template engines to generate dynamic HTML content by combining static 
template files with variable data at runtime. This process allows for the creation of reusable views and 
separates the presentation logic from the application's core logic.

need to install ejs.

command: npm install ejs


course:
Templating
-----------
EJS (Embedded JavaScript Templates)

EJS is a simple templating  language that lets you generate HTML markup  with plain JavaScript.

In path parameter we have created a new path, such that in templating we will create a new HTML.

/:userName -> /apnacollege then in userName variable it will be apnacollege

such that we create e totally new page  based on input variable using EJS.

* For similar layout/page we create a single template  for all layouts/pages.
We can think as it is a blueprint of a layout/page.

There are multple tools we use, EJS, handlebar, etc.

In this lecture we will use EJS.




------------------------------------------------------------------------------



how to use ejs:
------------------

    app.set("view engine",  "ejs");

    app.get("/", (req,  res)=>{
            res.render("home.ejs");
        });

set function set the 'view engine' as 'ejs'

ejs is also a package, but we don't need to require ejs like express. 
express internally require the ejs


view means template, view engine means template engine, and we have set ejs.


We generally render the response for ejs.
We need to send a file we use response.render function.

** By default the ejs files are stored in views directory.

and in views directory let's create a ejs file name home.ejs.

In home.ejs we write js and html css code.



-------------------------------------------------------------------------------


to give any specific path of the views directory, then we need to use path.join
where to search the views
--------------------------

const path = require("path");

app.set("views", path.join(__dirname, "/GiveViewsPath"));

__dirname is the current working directory, then joins this with views directory path.




--------------------------------------------------------------------------------------


Interpolation Syntax
---------------------
Interpolation refers to embedding expressions into marked up text.

In html we will use some expressions which value will be evaluate.

Google:
Interpolation in EJS allows developers to embed dynamic values directly into HTML. 
The syntax is concise and reminiscent of JavaScript
EJS offers an easier way to interpolate (concatenate) strings effectively.



let name = "Sajib"
console.log(`Name is ${name}`); ---> embedded the name variable 

output: Name is Sajib

Here we just embedded only a single variable. But in interpolation sytax we will add a full JavaScript logic/code.

By using JS we will make our  make web site dynamic.

** Simply means writing JS code inside the html to make it more dynamic with the help of ejs.

To achieve interpolation sytax we will use EJS tags. 

<%   :'Scriptlet' tag, for control-flow, no output
<%_  :'Whitespace Slurping' Scriptlet tag, strips all whitespace before it
<%=  :Outputs the value into the template (HTML escaped)***
<%-  :Outputs the unescaped value into the template
<%#  :Comment tag, no execution, no output
<%%  :Outputs a literal '<%'
%>   :Plain ending tag
-%>  :Trim-mode ('newline slurp') tag, trims following newline
_%>  :Whitespace Slurping' ending tag, removes all whitespace after it



<%= 1024 + 1024 %> means 2048

and output will be in string.



----------------------------------------------------------------------------

Passing Data with EJS
----------------------

app.get("/rolldice", (req, res)=>{
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("rollDice.ejs", {diceVal: diceVal});
});

sending a rollDice.ejs file and and object {diceValue: diceVal}

key is diceValue and value is diceVal

generally we only send single value {diceVal}.

and we can directly access the key in rolldice.ejs

    <h1>Dice Gave value: 
        <%= diceValue %>
    </h1>





---------------------------------------------------------------------

Instagram EJS
--------------
Create a basic template for instagram page based on following route: 
/ig/:username

app.get("/ig/:username", (req, res) =>{
    let { username } = req.params;
    res.render("instagram", {username});
});


//instagram.ejs



--------------------------------------------------------------

Conditional Statements
----------------------
Adding conditions inside EJs

<% if(diceVal == 6) { %>
    <h2>Nice! Roll dice again...</h2>
<% } %>


the part that we don't want to print should be inside <% %>



-------------------------------------------------------------

Loops 
------




*/