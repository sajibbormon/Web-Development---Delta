/* -------------------------------------- Practice QS 1 -------------------------------------------*/

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




/* -------------------------------------- Practice QS 2 -------------------------------------------*/


CREATE TABLE Student(
	roll_no INT,
    name VARCHAR(50),
    city VARCHAR(50),
    marks	INT
);

INSERT INTO Student
(roll_no, name, city, marks)
VALUES
(110, "adam", "Delhi", 76),
(108, "bob", "Mumbai", 65),
(124, "casey", "Pune", 94),
(112, "duke", "Pune", 80);

SELECT * FROM Student;



/*Select all students who scored 75+*/

SELECT * FROM Student
WHERE marks > 75;

/*Find names of all cities where students from each city*/

SELECT DISTINCT city FROM Student;

/*another command to do this*/

SELECT city
FROM Student
GROUP BY city;



/*Find the maximum marks of students from each city*/

SELECT city, MAX(marks) FROM Student
GROUP BY city
ORDER BY MAX(marks) DESC;



/*Find the average of the class*/

SELECT AVG(marks) FROM Student;

/*Add a new column grade, assign grade such that:
		marks > 80, grade = O
        marks 70-80, grade = A
        marks 60-70, grade = B

*/

ALTER TABLE Student
ADD COLUMN grade VARCHAR(2);

SELECT * FROM Student;


UPDATE Student
SET GRADE = "O"
WHERE marks >= 80;

UPDATE Student
SET GRADE = "A"
WHERE marks >= 70 AND marks < 80;

UPDATE Student
SET GRADE = "B"
WHERE marks >= 60 AND marks < 70;


SELECT * FROM Student;











