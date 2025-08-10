/**
 * Mongoose Installation
-------------------------
npm i mongoose

to install this we have to start the mongodb-community server

sudo brew services start mongodb-community@

or simply open command promt and type command 'mongosh' to start the mongosh shell.

after that, we require mongoose and connect with monoose.


code:

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test'); // this will return a promise


When make connection with with mongodb it may take some times or we perform any action in MongoDB
then it also can require times, these are all asynchronous functions. 

* We will handle them asynchronously. 

as mongoose.connect() return a promise, based on this promise we have to use then.


code:

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}


suppose  we want to print if connection is successful

code:

main()
  .then((res)=>{
    console.log("connection successfull");
  })
  .catch(err => console.log(err));

More on: https://mongoosejs.com/docs/index.html


*/