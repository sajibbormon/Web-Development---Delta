const { faker } = require('@faker-js/faker');

//get the client
const mysql = require('mysql2');



let getRandomUser = () => {
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(), // before version 9.1.0, use userName()
    email: faker.internet.email(),
    password: faker.internet.password()
  };
}

// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: "LoveyouPayel#1M"
});

try{
  connection.query("SHOW TABLES", (err, result) =>{
    if(err) throw err;
    console.log(result);
  });
} catch(err){
  console.log(err);
}


connection.end();
