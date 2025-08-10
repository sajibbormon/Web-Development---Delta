/*
DOM (Document Object Model)
--------------------------
The DOM represents a document with a logical tree.

It allows us to manipulate/change webpage content (HTML elements).




<body>
    <div>
        <h1>Todo</h1>
    </div>

    <ul>
        <li>Eat</li>
        <li>Code</li>
        <li>Sleep</li>
    </ul>
</body>


                            (document)
                                ↓
                              (body)
                              /    \
                             /      \
                         (div)      ( ul )
                           ↓        /  |  \ 
                         (h1)     (li)(li)(li)

                        Every circle is node but the top node is document. This is an object in javascript.
                        Each node is an object in javascript.

This document generally stores all html and css related details. (javascript generate it automatically)


*/

//to print document we use console.dir() method.

console.dir(document);

// We use document object to change in html and css.


/*
How to use DOM
--------------

i) Select ( select the element that we want to change)

ii) Changes/Manipulation

*/

