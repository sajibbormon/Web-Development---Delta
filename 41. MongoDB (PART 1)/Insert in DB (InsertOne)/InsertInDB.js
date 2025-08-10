/**
 * Insert in DB (Crete data -> (CRUD))
---------------------------------------

insertOne

    db.collection.insertOne()

This function insert a single document into a collection. (individual row insertion)


guide:  db.collection_name.insertOne({object})


show collections            (similar like show all tables)

db.student.insertOne({name: "adam", marks: 79})

db.student.find()

If a collection does not exist, MongoDB creates the collections when you first store data for 
that collection



MongoDB CRUD Operations:  https://www.mongodb.com/docs/manual/crud/



example:

test> use college
switched to db college
college> db.student.insertOne({name: "adam", age: 19, marks: 88 })
{
  acknowledged: true,
  insertedId: ObjectId('6889cc373bc37d7245eec4a9')
}


Id is automatically generated which is unique.

next command:

college> db.student.find()
[
  {
    _id: ObjectId('6889cc373bc37d7245eec4a9'),
    name: 'adam',
    age: 19,
    marks: 88
  }
]

It is showing data as in the form of array. Inside array, there are objects.

In MongoDB we don't need to change the schema in order to store value in a new column.
We can create any column. Individual object can have different different types of column.




 */