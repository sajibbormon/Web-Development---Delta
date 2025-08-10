/*Practice Question 1 */

CREATE DATABASE IF NOT EXISTS college;

USE college;

CREATE TABLE  IF NOT EXISTS Teacher(
	id	INT PRIMARY KEY,
    name	VARCHAR(50) NOT NULL,
    subject VARCHAR(50) ,
    salary	INT
);

INSERT INTO Teacher
(id, name, subject, salary)
VALUES
(23, "ajay", "math", 50000),
(47, "bharat", "english", 60000),
(18, "chetan", "chemistry", 45000),
(9, "divya", "physics", 75000);

SELECT * FROM Teacher;


/* Select teachers whose salary is more than 55k*/

SELECT * FROM Teacher
WHERE SALARY > 55000;

/*Rename the salary column of teacher table to ctc*/

ALTER TABLE Teacher
CHANGE salary ctc INT;

SELECT * FROM Teacher;

/*Update salary of all teachers by giving them an increment of 25%*/
/*formula salary 25 % increase,

	   salary = salary + 25% of salary
    => salary = salary + 0.25 * salary
    => salary = salary(1 + 0.25)
    => salary = salary * 1.25
    
 */   


SET SQL_SAFE_UPDATES = 0;

UPDATE Teacher
SET ctc = ctc * 1.25;

SELECT * FROM Teacher;

/*Add a new column for teacher called city. The default city should be "Gurgaon"*/

ALTER TABLE Teacher
ADD COLUMN city VARCHAR(50) DEFAULT "Gurgoan";

SELECT * FROM Teacher;


/*Delete the salary column for teacher table*/

ALTER TABLE Teacher
DROP city;

SELECT * FROM Teacher;