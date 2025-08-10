/**
 * The Shell
------------------

command to start: mongosh

to create and use a new database: use database_name


to clear screen press: ctrl + k

to print all the commands: help

to show all databases: show dbs

to exit from mongoshell: exit or quit


some js commands:
    > 1 + 2
    output: 3
    > "apnacollege".toUpperCase()
    output: APNACOLLEGE


When we open mongo shell, by default it creates a temporary database named 'test'

when we try to show all bds then it doesn't print test, bcz it is a temporary db.

CRUD and others command:

Create a database naming college.

    command: use college

*Whenever we add/stores something  db then mongo save the database, otherwise it remains temporary db.


to see current db(which database we are using now)
    command: db




Insertion of Data:

We use BSON data in MongoDB. 

BSON : Binary JSON 

some problems/cons in JSON

1) text based
2) space inefficient

Read more about JSON and BSON from MongoDB website.

It generally converted to Binary format then save the data to the memory.

Only machine can read BSON data.







 */