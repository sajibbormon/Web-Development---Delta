/**
 * Nesting
-----------------
Nesting in MongoDB, also known as Embedded Documents, refers to the practice of storing related 
data within a single document rather than separating it into multiple collections. This is a key 
feature of MongoDB's flexible schema design, allowing for the representation of complex, 
hierarchical relationships directly within the document structure.


In MongoDB, documents are essentially JSON-like objects. When you nest, you include another 
document (or an array of documents) as the value of a field within a parent document.

code:

{
  "_id": ObjectId("..."),
  "title": "The Name of the Wind",
  "author": "Patrick Rothfuss",
  "reviews": [
    {
      "reviewer": "Alice",
      "rating": 5,
      "comment": "Amazing book!"
    },
    {
      "reviewer": "Bob",
      "rating": 4,
      "comment": "Enjoyed it, but a bit slow at times."
    }
  ]
}


another code:

{
    _id: ObjectId("89fdfas343897897fj897w43"),
    name: "farah"
    performance: {marks: 88, grade: 'A'}
}


to find

db.collection.findOne({"performance.marks": 88})

we have to give it as string. (single or double quatation)



*/