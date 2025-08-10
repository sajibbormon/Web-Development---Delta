/**
 * MySQL2 Package
----------------------
To connnect Node with MySQL

connection.end() // to close the connection.


                             req              APIs
client     ---------------------------------> server
(front)    <--------------------------------  (back) 
                                                |    
                                                |
                                              (SQL DB)  



To install this: npm i mysql2


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


Using SQL from CLI
--------------------
/user/local/mysql/bin/mysql -u root -p
or (in windows)
mysql -u root -p
now enter the password

mysql > SHOW DATABASES;
mysql > USE database_name;
mysql > SHOW TABLES;

*to quit from mysql type quit or press ctrl+d


Using SQL from CLI (another method)
-----------------------------------
CREATE schema.sql

In CLI: source schema.sql 

now type

/user/local/mysql/bin/mysql -u root -p
or (windows) 
mysql -u root -p 
now enter the password

mysql> USE database_name;
mysql> source schema.sql;



 */

