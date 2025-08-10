/**
 * module.exports
------------------
requiring directories

require() ---> a built-in function to indlcude external modules that exist in separate files

module.exports ----> a special object.


What if we need to import properties/methods/data from external directories.

Then we need to create a special file where it will require data/properties from others file.

suppose: There is directory called Fruits. It has three files: apple.js, orange.js and mango.js
to exports them we need to create a special file call index.js.


then import from other files to index.js. and export them from index.js

If any directory is given, then it will search for index.js file which is the entry point for the directory.

similar like main() function of java, c, c++. index.js works exactly like this where program starts working from.



 */