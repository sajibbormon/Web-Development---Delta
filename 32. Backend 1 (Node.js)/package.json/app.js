/**
 * package.json
----------------
The package.json file contains descriptive and functional metadata about a project, such as a name, version,
and dependencies.

With this file we can install dependent file that we need bcz it stores all those data.

we only need to write the below command:

npm install

npm install command will install all packages that is defined in the package.json file.



How to create our own package.json file.
To create our own package.json we need to write the below command
command: npm init

then we need to give the name of the project.

after that write description.

next we need give the entry point. generally index.js

more things:
    test command:
    git repository:
    author:
    license:

let's create a folder MyProject.

now cd to MyProject.

now write command: npm init

then give all necessary information about the project.

It will create a package.json file with all given information.

now if we install any package inside the MyProject folder then package.json file will be change.

In dependencies there will be that installed package.

suppose we install figlet:  npm install figlet
then "dependencies" : { 
                      "figlet": "^1.8.1" }





 */