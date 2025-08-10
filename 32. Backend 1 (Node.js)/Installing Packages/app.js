/**
 * Installing Packages
-----------------------
npm install <-package name->
OR,
npm i <-package name->


if any package is installed then there are generally two files and one folder.

node_modules folder, package-lock.json and package.json file.

node_modules ---> The node_modules folder contains every installed dependency for your project.

package-lock.json ---> It records the exact version of every installed dependency, including its sub-dependencies
                       and their versions.

What is dependency?
The packages/tools that we use for a project(without them the project will not work) are called dependencies.

How to use this package?
We need to create a file inside the package folder naming 'index.js' where we will be writing exports code of the package.

suppose we install figlet inside FigletDir.

cd FigletDir
now create a file: touch index.js
inside index.js write the below code:

const figlet = require("figlet");
figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});



 */