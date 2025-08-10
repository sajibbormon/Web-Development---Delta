/**
 * Module.exports
------------------
requiring files

require() ---> a built-in function to indlcude external modules that exist in separate files.

module.exports ---> a special object


there are two js files: scirpt.js and math.js
now we want to use math.js file's methods/properties in script.js


To do this, we need to export from that/those properties/methods in math.js

module.exports which is a object. by default it is an empty object if not given any value/string/data.

module.exports = 123;


and in script.js file we need to use require method.

const someValue = require('./math');



 */