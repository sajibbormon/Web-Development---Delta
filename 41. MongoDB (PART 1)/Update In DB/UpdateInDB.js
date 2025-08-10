/**
 * Update in DB
-------------------

all update methods:

1. updateOne()
2. updateMany()
3. replaceOne()

website: https://www.mongodb.com/docs/manual/reference/update-methods/



updateOne
-----------
syntax: 
db.collection.updateOne() 

Updates at most a single document that match a specified filter even though multiple documents 
may match the specified filter.

db.collection.updateOne(<filter>, <update>, <options>)

db.student.updateOne({name: "adam"}, {$set: {marks: 99}})




Update operators:
-----------------

$addFields

$set

$project

$unset

$replaceRoot

$replaceWith


More in website: https://www.mongodb.com/docs/manual/tutorial/update-documents-with-aggregation-pipeline/





updateMany()
-------------
Syntax:
db.collection.updateMany()

Update all documents that match a specified filter.



db.collection.replaceOne()

Replaces at most a single document that match a specified filter event though multiple documents
may match the specified filter. (replace the complete document)

while using replaceOne(), we should pass the new document key, value after filter.

the id will remain same. 


*/