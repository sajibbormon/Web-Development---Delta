/**
 * Our 1st Table
--------------------
create table:

CREATE TABLE table_name (
    column_name1 datatype constraint,
    column_name2 datatype constraint,
    column_name3 datatype constraint
);


suppose:

CREATE TABLE student (
    roll_no INT,
    name    VARCHAR(30),
    age     INT
);


//now inserting values to the table:

INSERT INTO student VALUES
(101, "adam", 12),
(102, "bob", 14);


//printing the table
SELECT * FROM student;



 */