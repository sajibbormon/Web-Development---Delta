/*
Getting Started with Express
------------------------------
    const express = require("express");
    const app = express();

    let port = 8080;

    app. listen(port, () => {
    console. log (`app listening on port ${port}');
    });

Install express:
npm install express.

now create a file name index.js

inside index.js need require the express

const express = require("express");

express() that we are requiring is a function. It return some values. and store the value

const app = express();

this app will help us to create server side app.

and it an object.

now printing the app to see it's properties.

console.dir(app);


mostly we use some of these properties.

one is listen: app.listen()

listen takes two arguments: port, function/callback

Ports: Ports are the logical endpoints of a network connection that is used to exchange information between a web
      and a web client.

      port is nothing but points for connection such as charging port in a laptop.
      client and server connection point. (request and response connection point)

      by default we use 3000 or 8080 for making custom servers.

let's define port and listen.


port = 3000;

app.listen(port, () =>{
    console.log(`app is listening on port ${port}`);
})

if we run the index.js file now the server will continuesly start listening. to stop this press 'ctrl + c'






*/