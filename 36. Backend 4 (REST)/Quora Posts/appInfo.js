/**
 * Creating RESTful APIs
----------------------------
GET     /posts             to get data for all posts

POST    /posts             to add a new post 

GET     /posts/:id         to get one post(using id) 

PATCH   /posts/:id         to update specific post 

DELETE  /posts/:id         to delete specific post 



we will create multiple APIs 

Method   Route               APIs
-----------------------------------------------
GET     /posts              index (main page)

POST    /posts              create

GET     /posts/:id          view

PATCH   /posts/:id          update

DELETE  /posts/:id          destroy
 



first api
------------
to show all posts. (index.ejs)


second api
------------
2 routes
    >  serve the form       GET     /posts/new
    >  Add the new post     POST    /posts

1) (user, content) -> form. (which user will post new content and what is the content).

2) POST -> new post add to our database( right this is an array ).

so we will create a button, create post.




after submitting the post it's openning a new page. But we want to redirect to the main posts page.
To solve this we use 'Redirect'

Redirect
---------
res.redirect(URL)
status: 302




Implement: GET/posts/:id
-------------------------
show route

GET         /posts/:id      to get one post (using id)




Automatic IDs creation.
------------------------
Creating IDs UUID

UUID Package
Universally unique identifier

installation: npm install uuid

const { v4: uuidv4 } = require('uuid');

to generate id

uuidv4(); 




update post
------------

                Create Form for Update (edit.ejs) fourth api

Edit Route

Serve the edit form         GET         /posts/:id/edit

Form doesn't support patch or delete. So we use method-override package.
It only support GET and POST.

Read about method-override in npm

To override GET/POST to PATCH or DELETE we use _method=PATCH or _method=DELETE





*/