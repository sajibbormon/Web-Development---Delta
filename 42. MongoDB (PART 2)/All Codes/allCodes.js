/**
 * Schema (Overall Structure with Data Type)
```````````````````````````````````````````````````````````````````````````````````````````

Schema defines the shape of the documents withing that collection.

mongoose.Schema

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});
 

The permitted SchemaTypes are: 
String, Number, Date, Buffer, Boolean, Mixed, Obiectid, Array, Decimal128, Map, UUID, BigInt, Double, Int32



Now move to how save documents using mongoose.




Models 
```````````````````````````````````````````````````````````````````````````````````````````
Model in mongoose is a class with which we construct documents.

code:
    const User = mongoose.model("User", userSchema);


User is an instant of Model class.

It is an representation of each data, how it will look like(structure of the data).

inside model function there are two parameter "User" and userSchema.

"User" is a collection. We give the same name of model and collection.


New collection name will be user.

Now if we run code then it will create a collection inside mongodb.


Now in mongo shell type command: show collections

it will print:
            users

bcz we if we give the collection name user, it will create a collection naming users inside mongodb.


example:
    User        -> users
    Product     -> products 
    employee    -> employees



More in: https://mongoosejs.com/docs/api/model.html


INSERT
``````````````````````````````````````````````````````````````````````````````````````````````
Inserting One

const user1 = new User({name: "Adam", email: "adam@mail.com", age: 48});
const user2 = new User({name: "Eve", email: "eve@mail.com", age: 48});


user1.save(); //to save in DB //return a promise as it is asynchronous
user2.save(); //to save in DB



User            -> Model Class
 |
obj(document)

User is a class, so we need to make ojbect of  the class which will be the document for Database.


If we don't save it, it will not be stored into db. But the   it will be created on the memory.


* as object.save() returns a promise, so we need to use .then()

instead of user2.save() or object.save() we use

user2.save().then((res) =>{
    console.log(res);
})
.catch((err) =>{
    console.log(err);
});

Now run command in mongo shell: 
    db.users.find()

It will print  all the documents that is  stored into DB.




InsertMany
-------------------------
Inserting Multiple

User.insertMany([
    {name: "Tony", email: "tony@mail.com", age: 50},
    {name: "Bruce", email: "bruce@mail.com", age: 47},
    {name: "Peter", email: "peter@mail.com", age: 30},
]).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);    
});

Note
-----
Mongoose uses Operation Buffering

Mongoose lets you start using your models immediately, without waiting for mongoose to establish
a connection to MongoDB.



Find
``````````````````````````````````````````````````````````````````````````````````````````````
Model.find() //return a Query Object (thennable)

*Mongoose Queries are not promises. But they have a .then()


//to show all
User.find({}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);    
});





//to show based on condition
User.find({age:  {$gte: 47}}).then((data)=>{
    console.log(data);
})

find() method returns a query.

More in: https://mongoosejs.com/docs/api/model.html#Model.find()


//if we want to print sinlge object not array whose age is greater than 48
// User.find({age: {$gt: 48}}).then((data)=>{
//     console.log(data[0]);
// }).catch((err)=>{
    console.log(err);    
});





//we want only name whose age is greater than 48
User.find({age: {$gt: 48}}).then((data)=>{
    console.log(data[0].name);
}).catch((err)=>{
    console.log(err);    
});




//single user using  findOne() method. Returns the first one.
User.findOne({age: {$gt: 47}}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);    
});




findOne() method directly returns an object.


search based on _id

User.find({_id: "689024b2ebbafc60dc91cc80"}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);    
});




there is another method which is frequently used: findById() //return an object

User.findById("689024b2ebbafc60dc91cc80").then((data)=>{
    console.log(data);    
}).catch((err)=>{
    console.log(err);    
});







UPDATE
````````````````````````````````````````````````````````````````````````````````````````````
Model.updateOne({condition}, {updation})



User.updateOne({name: "Bruce"}, {age: 49}).then((res)=>{
    console.log(res);    
}).catch((err)=>{
    console.log(err);    
});




we don't need to use $set operator.


Model.updateMany()

User.updateMany({age: {$gt: 45}}, {age: 45}).then((res)=>{
    console.log(res);    
}).catch((err)=>{
    console.log(err);    
});




** There is problem that it only show count what have been updated but doesn't show whose
and what value updated. 

To print this try below functions:

Model.findOneAndUpdate() 
-------------------------

Model.findOneAndUpdate({filter}, {updation}, {options})

User.findOneAndUpdate({name: "Bruce"}, {age: 53}).then((res)=>{
    console.log(res);    
}).catch((err)=>{
    console.log(err);    
});



// it will print the old object but update will heappen in db if don't pass option new: true

User.findOneAndUpdate({name: "Bruce"}, {age: 53}, {new: true}).then((res)=>{
    console.log(res);    
}).catch((err)=>{
    console.log(err);    
});



// it will return the updated object.

More in: https://mongoosejs.com/docs/api/model.html#Model.findOneAndUpdate()


Model.findByIdAndUpdate({filter}, {updation}, {options})

More in: https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate()






DELETE
`````````````````````````````````````````````````````````````````````````````````````````````
Model.deleteOne()
------------------

Model.deleteOne({filter}).then((res)=>{
    console.log(res);    
}).catch((err)=>{
    console.log(err);    
});


deleting whose name is Bruce

User.deleteOne({name: "Bruce"}).then((res)=>{
    console.log(res);    
}).catch((err)=>{
    console.log(err);    
});




Model.deleteMany()
-------------------
Model.deleteMany({filter}).then((res)=>{
    console.log(res);    
}).catch((err)=>{
    console.log(err);    
});


//delete them whose age is 48
User.deleteMany({age: 48}).then((res)=>{
    console.log(res);    
}).catch((err)=>{
    console.log(err);    
});



** There is problem that it only show count what have been deleted but doesn't show whose
and what value updated. 

To show which document is deleted try below function:

Model.findByIdAndDelete()
and
Model.findOneAndDelete()






 * 


 *



 *


 *


 *


 *


 *



 *



 */