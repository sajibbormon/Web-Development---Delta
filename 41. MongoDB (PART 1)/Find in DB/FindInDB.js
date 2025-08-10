/**
 * FIND in DB (find()) -> Read Data (CRUD)
---------------------------

db.collection.find() //returns everything

for specific queries:

    db.collection.find({key:value})

    db.collection.findOne({key: value})


We pass the condition as key, value pair.


find() -> this function return a cursor
findOne() -> this function return an actual document.


cursor -> reference to original (not the original)

 */