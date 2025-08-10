/**
 * DELETE in DB
------------------
deleteOne

db.collection.deleteOne(<filter>, <options>)

db.student.deleteOne({state: "Haryana"})




deleteMany

db.collection.deleteMany(<filter>, <options>)

db.student.deleteMany({city: "New Delhi"})



To drop the database
---------------------

db.dropDatabase()

now current database is student, it will be deleted completely.

But if we want to  empty a database.

To empty:

db.collection.deleteMany({})

we pass a empty object to empty the database.

student> db.dropDatabase()
{ ok: 1, dropped: 'student' }




*/