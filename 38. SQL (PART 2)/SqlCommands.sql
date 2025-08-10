CREATE DATABASE instagram;

USE instagram;

CREATE TABLE  user(
	Id  INT,
    Age INT,
    Name VARCHAR(30) NOT NULL,
    Email VARCHAR(50) NOT NULL UNIQUE,
    Followers INT  DEFAULT 0,
    Following  INT DEFAULT 0,
	CONSTRAINT age_check CHECK (Age >= 18), 
    PRIMARY KEY (id)
);


INSERT INTO user
(Id, Age, Name, Email, Followers, Following)
VALUES
(1, 24, "adam", "adam@mail.com", 123, 145),
(2, 25, "bob", "bob@mail.com", 200, 200),
(3, 26, "casey", "casey@mail.com", 300, 306),
(4, 23, "donald", "donald@mail.com", 200, 105);

SELECT * FROM  user;

SELECT Id, Name, Followers FROM user;

SELECT * FROM user
WHERE Age > 23;

SELECT Name, Followers FROM user
WHERE Followers >= 200;


/*Arithmetic Operator
print them who will be 25 next year*/

SELECT Name, Age From user
WHERE Age + 1 = 25;

/* Conditional Operator */

SELECT Name, Age, Followers FROM user
WHERE Age > 23 AND Followers > 200;


/* BETWEEN: we want to print only people of age 23 to 24 */

SELECT Name, Age FROM user
WHERE Age BETWEEN 13 AND 24; 
  
  
/* IN Operator: we want find two particular users data based on emails */

SELECT Name, Age, Email FROM user
WHERE Email IN ("casey@mail.com","donald@mail.com", "sajib@mail.com");  
  
  
INSERT INTO user
(Id, Age, Name, Email, Followers, Following)
VALUES
(5, 24, "eve", "eve@mail.com", 400, 145),
(6, 26, "farah", "farah@mail.com", 10000, 1000);


SELECT * FROM user;

/* Print whose age is 24 and 26*/

SELECT Name, Age, Email FROM user
WHERE Age IN (24, 26);  

/* NOT Operator: Print whose age is not 24 and 26*/

SELECT Name, Age, Email FROM user
WHERE Age NOT IN (24, 26);  


/* LIMIT Clause: Suppose we want to see only 3 rows of data where the Age is greater than 20 */
  
SELECT Name, Age, Email FROM user
WHERE Age  > 20
LIMIT  3;  

/* ORDER BY Clause: Suppose we want sort in Asscending order based on Age column*/

SELECT Name, Age, Email FROM user
ORDER BY (Age)ASC;  

/* if any order is not given then by default it is asscending order*/

SELECT Name, Age, Email, Followers FROM user
ORDER BY Followers;

/*Aggregate Functions: MAX, MIN, COUNT, SUM, AVG */

SELECT MAX(Followers)
FROM user;

/* Counting people whose age is 24 */

SELECT COUNT(Age)
FROM user
WHERE Age = 24;

/*Average Age*/
SELECT AVG(Age)
FROM user;

/*GROUP BY Clause: Group by on the basis of Age*/

SELECT Age, COUNT(Id)
FROM user
GROUP BY Age;


/* Max followers Group by age*/

SELECT Age, MAX(Followers)
FROM user
GROUP BY Age;

/*Having Clause: Find them whose maximum followers is greater than 200 and Grouped by age.*/

SELECT Age, MAX(Followers)
FROM user
GROUP BY Age
HAVING MAX(Followers) > 200;

/*General Order*/

SELECT Age, MAX(Followers)
FROM user
GROUP BY Age
HAVING MAX(Followers) > 200
ORDER BY MAX(Followers) DESC;


/*                                        Table Queries                      */
/*--------------------------------------------------------------------------------------*/

/*UPDATE Table: Suppose we want to update Followers to 600 whose age is 26. */

SET SQL_SAFE_UPDATES = 0;

UPDATE user
SET Followers = 600
WHERE Age = 26;

SELECT * FROM user;


/* DELETE Table: Suppose deleting a user whose name is donald.*/

DELETE FROM user
WHERE Name = "donald";

SELECT * FROM user;


/*                            ALTER TABLE                           */

/*ADD city (default city = Delhi)*/

ALTER TABLE user
ADD COLUMN City VARCHAR(25) DEFAULT "Delhi";


SELECT * FROM user;


/* DROP Column: Dropping the Age Column*/

ALTER TABLE user
DROP COLUMN Age;

SELECT * FROM user;


/* Rename Table Name: Rename to instaUser*/

ALTER TABLE user
RENAME TO instaUser;

SELECT * FROM instaUser;


/*CHANGE Column Name: Renaming Followers column to Subscribers*/

ALTER TABLE instaUser
CHANGE COLUMN Followers Subscribers INT DEFAULT 0;

SELECT * FROM instaUser;


/*MODIFY Column: By default we want to give 5 subscribers to each user (We only want to modify the constraints)  */

ALTER TABLE instaUser
MODIFY Subscribers INT DEFAULT 5;

/*ADD new user to see the difference*/


INSERT INTO instaUser
(Id, Name, Email, Following, City)
VALUES
(7, "gemini", "gemini@mail.com", 200, "Delhi");


SELECT * FROM instaUser;


/*DROP TABLE: Dropping the post table as it is using instaUser table's Id as Foreign Key*/

DROP TABLE post;


/* TRUNCATE TABLE: Clearing all rows value*/

TRUNCATE TABLE instaUser;

SELECT * FROM instaUser;




  
























CREATE  TABLE post(
	id INT PRIMARY KEY,
    content VARCHAR(100),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES user(Id)
    
);



INSERT INTO post
(id, content, user_id)
VALUES
(101, "Hello World", 3),
(102, "Bye Bye", 1),
(103, "Hello Delta", 3);

SELECT * FROM post;





