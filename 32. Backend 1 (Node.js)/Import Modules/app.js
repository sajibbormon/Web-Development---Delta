/**
 * require v/s import
------------------------
import {sum} from "./math.js"

We can't selectively load only the pieces we need with require but with import, we can selectively load only
the pieces we need, which can save memory.

Loading is synchronous for 'require' but can be asynchrounous for 'import'


suppose there is a file called math.js
source code:

    export const sum = (a, b) => a + b;

    export const mul = (a, b) => a * b;

    export const g = 9.8;

    export const PI = 3.14;

another file name script.js

source code: 
    import {sum, PI} from "./math.js";
    console.log(sum(2, 2));

now we need to create a package.json using 'npm init' command and inside json file we need add type.
package.json:
            "type": "module"




 */