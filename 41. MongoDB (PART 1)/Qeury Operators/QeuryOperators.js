/**
 * Query Operators
---------------------

Q. Find students where marks > 75 (comparision)

db.student.find({mark: {$gt: 75}})


Q. Find students who live in Delhi or Mumbai (find data in array)

db.student.find({city: {$in:["Delhi", "Mumbai"]}})


Q. Find students who scored > 75 or live in Delhi (logical OR)

db.student.find({$or: [{marks: {$gt: 75}}, {city: "Delhi"}]})



More info: https://www.mongodb.com/docs/manual/reference/operator/query/



all queries should be inside curly bracs {}



 */