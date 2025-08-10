/**
 * Create Table
------------------
To create table crete a file name schema.sql
Then write create table commands with columns name, data type and constraints.
then run command to log in to mysql

now run command to create table

mysql> source schema.sql



Insert Data into Table
-----------------------
Using Placeholders to insert data.

try {
  const [results] = await connection.query(
    'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
    ['Page', 45]
  );

  console.log(results);
} catch (err) {
  console.log(err);
}


or
-----

let q = "INSERT INTO user (id, name, email, password) VALUES (?, ?, ?, ?)";
let user = ["123", "sajib", "sajib@mail.com", "sajib123"];

try{
  connection.query(q, user, (err, result) =>{
    if(err) throw err;
    console.log(result);
  });
} catch(err){
  console.log(err);
}

from the user array it will repalce all question mark.


when inserting multiple users then we will use a single question mark.


let q = "INSERT INTO user (id, name, email, password) VALUES ?";
let users = [["123", "sajib", "sajib@mail.com", "sajib123"],
            ["124", "payel", "payel@mail.com", "payel123"]];

try{
  connection.query(q, [users], (err, result) =>{
    if(err) throw err;
    console.log(result);
  });
} catch(err){
  console.log(err);
}


Inserting in Bulk
--------------------------
We will use faker to generate multiples of fake data then insert them into the sql.

let data = [];

for(let i = 1; i<=100; i++){
  data.push(getRandomUser());
}

console.log(data);

let q = `INSERT INTO user (id, username, email, password) VALUES ?`;

connection.query(q, [data], function(err, results){
  if(err) throw err;
  console.log(results);
});



in faker we will only return an array instead of object.


let getRandomUser = () => {
  return [
    faker.datatype.uuit(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password()
  ];

}




--------------------------------------------------------------------------------------------

                                    Routing


Routing
--------

REST
   > GET      /             -> show no of users in DB
   > GET      /user         -> show users (email, id, username) ejs
   > PATCH    /user/:id     -> username edit
   > POST     /user         -> new user
   > DELETE   /user/:id     -> user delete 



 */

